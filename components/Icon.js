import * as React from 'react'
import { createIconSetFromIcoMoon } from '@expo/vector-icons'

import icoMoonConfig from '../assets/icons/config.json'
import { StyleGuide, withTheme } from './theme'

const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'Icons')

class IconComp extends React.PureComponent {
  static defaultProps = {
    color: StyleGuide.palette.darkGray,
    size: 28,
  }

  render() {
    const { theme, name, primary, secondary, color, size } = this.props
    const iconColor = primary
      ? theme.palette.primary
      : secondary
      ? theme.palette.secondary
      : color

    return <Icon color={iconColor} {...{ name, size }} />
  }
}

export default withTheme(IconComp)
