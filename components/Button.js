import * as React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  View,
} from 'react-native'

import Icon from './Icon'
import Text from './Text'
import { withTheme, StyleGuide } from './theme'

class Button extends React.PureComponent {
  render() {
    const {
      onPress,
      style,
      label,
      icon,
      primary,
      secondary,
      theme,
      primaryTextColor,
      disabled,
    } = this.props

    const opacity = disabled ? 0.5 : 1
    const shadow = primary ? StyleGuide.styles.shadow : {}

    let backgroundColor
    if (primary) {
      backgroundColor = theme.palette.primary
    } else if (secondary) {
      backgroundColor = theme.palette.secondary
    } else {
      backgroundColor = 'transparent'
    }

    let color
    if (primary) {
      color = 'white'
    } else if (secondary) {
      color = theme.palette.primary
    } else if (primaryTextColor) {
      color = theme.palette.primary
    } else {
      color = StyleGuide.palette.darkGray
    }

    let Btn
    if (disabled) {
      Btn = View
    } else if (Platform.OS === 'ios') {
      Btn = TouchableOpacity
    } else {
      Btn = TouchableNativeFeedback
    }

    return (
      <Btn {...{ onPress }}>
        <View
          style={[
            styles.button,
            { ...shadow, backgroundColor, opacity },
            style,
          ]}
        >
          {icon && <Icon name={icon} style={styles.icon} {...{ color }} />}
          {label && (
            <Text type="headline" {...{ color }}>
              {label}
            </Text>
          )}
        </View>
      </Btn>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    ...StyleGuide.styles.button,
  },
  icon: {
    ...StyleGuide.styles.buttonIcon,
  },
})

export default withTheme(Button)
