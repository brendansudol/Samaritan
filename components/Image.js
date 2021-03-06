import { BlurView } from 'expo'
import * as _ from 'lodash'
import * as React from 'react'
import {
  Image as RNImage,
  Animated,
  StyleSheet,
  View,
  Platform,
} from 'react-native'

import CacheManager from './CacheManager'

const propsToCopy = [
  'borderRadius',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
]

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView)

export default class Image extends React.Component {
  static defaultProps = {
    style: undefined,
    defaultSource: undefined,
    preview: undefined,
  }

  mounted = true

  state = {
    uri: undefined,
    intensity: new Animated.Value(100),
  }

  async load({ uri }) {
    if (uri) {
      const entry = CacheManager.get(uri)
      const path = await entry.getPath()
      if (this.mounted) {
        this.setState({ uri: path })
      }
    }
  }
  componentDidMount() {
    this.load(this.props)
  }

  componentDidUpdate(prevProps, prevState) {
    const { preview } = this.props
    const { uri, intensity } = this.state
    if (this.props.uri !== prevProps.uri) {
      this.load(this.props)
    } else if (uri && preview && prevState.uri === undefined) {
      Animated.timing(intensity, {
        duration: 300,
        toValue: 0,
        useNativeDriver: Platform.OS === 'android',
      }).start()
    }
  }

  componentWillUnmount() {
    this.mounted = false
  }

  render() {
    const { preview, style, defaultSource, ...otherProps } = this.props
    const { uri, intensity } = this.state

    const hasDefaultSource = !!defaultSource
    const hasPreview = !!preview
    const isImageReady = !!uri

    const opacity = intensity.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 0.5],
    })

    const computedStyle = [
      StyleSheet.absoluteFill,
      _.transform(
        _.pickBy(
          StyleSheet.flatten(style),
          (value, key) => propsToCopy.indexOf(key) !== -1
        ),
        (result, value, key) =>
          Object.assign(result, { [key]: value - (style.borderWidth || 0) })
      ),
    ]

    return (
      <View {...{ style }}>
        {hasDefaultSource && !hasPreview && !isImageReady && (
          <RNImage
            source={defaultSource}
            style={computedStyle}
            {...otherProps}
          />
        )}
        {hasPreview && (
          <RNImage
            source={{ uri: preview }}
            resizeMode="cover"
            style={computedStyle}
            blurRadius={Platform.OS === 'android' ? 0.5 : 0}
          />
        )}
        {isImageReady && (
          <RNImage source={{ uri }} style={computedStyle} {...otherProps} />
        )}
        {hasPreview && Platform.OS === 'ios' && (
          <AnimatedBlurView
            tint="dark"
            style={computedStyle}
            {...{ intensity }}
          />
        )}
        {hasPreview && Platform.OS === 'android' && (
          <Animated.View
            style={[computedStyle, { backgroundColor: 'black', opacity }]}
          />
        )}
      </View>
    )
  }
}
