import * as React from 'react'
import { Text } from 'react-native'

import { StyleGuide, withTheme } from './theme'

class TextComp extends React.PureComponent {
  static defaultProps = {
    type: 'body',
    color: StyleGuide.palette.black,
    align: 'left',
  }

  render() {
    const {
      theme,
      type,
      style,
      children,
      primary,
      numberOfLines,
      align: textAlign,
    } = this.props

    const typography = StyleGuide.typography[type]

    const color = (() => {
      if (primary) {
        return theme.palette.primary
      } else if (typeof typography.color === 'string' && !this.props.color) {
        return typography.color
      }
      return this.props.color
    })()

    const computedStyle = [typography, { textAlign, color }, style]

    return (
      <Text style={computedStyle} {...{ numberOfLines }}>
        {children}
      </Text>
    )
  }
}

export default withTheme(TextComp)
