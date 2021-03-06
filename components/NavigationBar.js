import { LinearGradient } from 'expo'
import * as React from 'react'
import { View, Animated, StyleSheet } from 'react-native'

import IconButton from './IconButton'
import LeftAction from './LeftAction'
import SafeAreaView from './SafeAreaView'
import Text from './Text'
import { withTheme, StyleGuide } from './theme'

const AnimatedText = Animated.createAnimatedComponent(Text)

class NavigationBar extends React.Component {
  static defaultProps = {
    type: 'opaque',
    title: '',
    withGradient: false,
    expanded: false,
  }

  goBack = () => {
    const { navigation } = this.props
    navigation.goBack()
  }

  render() {
    const {
      type,
      title,
      subtitle,
      theme,
      back,
      titleStyle,
      rightAction,
      withGradient,
      expanded,
      largeTitle,
    } = this.props

    const block = { flex: largeTitle ? 2 : 1 }
    const containerStyle = {
      backgroundColor:
        type === 'opaque' ? theme.palette.primary : 'transparent',
    }

    const navBar = (
      <SafeAreaView style={containerStyle} top>
        <View style={styles.content}>
          <View style={[styles.leftBlock]}>
            {back && (
              <LeftAction
                onPress={this.goBack}
                name="arrow-left"
                label={back}
              />
            )}
          </View>
          {title !== '' && !expanded && (
            <View style={block}>
              <AnimatedText
                type="headline"
                color="white"
                align="center"
                style={titleStyle}
                numberOfLines={1}
              >
                {title}
              </AnimatedText>
              {subtitle && (
                <Text
                  type="footnote"
                  color="white"
                  align="center"
                  numberOfLines={1}
                >
                  {subtitle}
                </Text>
              )}
            </View>
          )}
          <View style={styles.rightBlock}>
            {rightAction && (
              <IconButton
                onPress={rightAction.onPress}
                name={rightAction.icon}
                style={styles.rightAction}
              />
            )}
          </View>
        </View>
        {expanded && (
          <View
            style={[{ backgroundColor: theme.palette.primary }, styles.header]}
          >
            <Text type="title1" color="white">
              {title}
            </Text>
          </View>
        )}
      </SafeAreaView>
    )

    if (withGradient) {
      return (
        <LinearGradient colors={['black', 'transparent']}>
          {navBar}
        </LinearGradient>
      )
    }

    return navBar
  }
}

const styles = StyleSheet.create({
  content: {
    ...StyleGuide.styles.barHeight,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftBlock: {
    flex: 1,
  },
  rightBlock: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  header: {
    padding: StyleGuide.spacing.small,
  },
  rightAction: {
    marginRight: StyleGuide.spacing.small,
  },
})

export default withTheme(NavigationBar)
