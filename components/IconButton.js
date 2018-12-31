import * as React from 'react'
import { TouchableOpacity, View } from 'react-native'

import Icon from './Icon'
import { withTheme } from './theme'

class IconButton extends React.PureComponent {
  static defaultProps = {
    color: 'white',
    backgroundPrimary: false,
    primary: false,
    secondary: false,
    rounded: false,
    disabled: false,
  }

  render() {
    const {
      onPress,
      name,
      theme,
      backgroundPrimary,
      primary,
      secondary,
      rounded,
      color: defaultColor,
      disabled,
    } = this.props
    const style = [{ opacity: disabled ? 0.5 : 1 }]
    if (rounded) {
      style.push({
        borderRadius: 14,
        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
      })
    }
    if (backgroundPrimary) {
      style.push({
        backgroundColor: theme.palette.primary,
      })
    }
    let color
    if (primary) {
      color = theme.palette.primary
    } else if (secondary) {
      color = theme.palette.secondary
    } else {
      color = defaultColor
    }
    style.push(this.props.style)
    const Btn = disabled ? View : TouchableOpacity
    return (
      <Btn {...{ onPress }}>
        <View {...{ style }}>
          <Icon {...{ name, color }} />
        </View>
      </Btn>
    )
  }
}

export default withTheme(IconButton)
