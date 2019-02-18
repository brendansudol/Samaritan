import * as React from 'react'

import styleGuide from './StyleGuide'

const ThemeContext = React.createContext()

export default class ThemeProvider extends React.Component {
  static instance = null

  state = {
    theme: {
      palette: {
        primary: '#a237f3',
        secondary: '#f7ebfe',
        ...styleGuide.palette,
      },
      typography: { ...styleGuide.typography },
      spacing: { ...styleGuide.spacing },
      styles: { ...styleGuide.styles },
    },
  }

  static getInstance() {
    if (!ThemeProvider.instance) {
      throw new Error('ThemeProvider is not mounted yet.')
    }
    return ThemeProvider.instance
  }

  componentDidMount() {
    if (ThemeProvider.instance !== null) {
      console.warn('Only one ThemeProvider is allowed to be used.')
    }
    ThemeProvider.instance = this
  }

  switchColors(colors) {
    const { palette, typography, spacing, styles } = this.state.theme
    palette.primary = colors.primary
    palette.secondary = colors.secondary
    this.setState({ theme: { palette, typography, spacing, styles } })
  }

  render() {
    const { children } = this.props
    const { theme } = this.state
    return (
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    )
  }
}

export function withTheme(C) {
  return class extends React.PureComponent {
    render() {
      const { props } = this
      return (
        <ThemeContext.Consumer>
          {theme => <C {...{ theme }} {...props} />}
        </ThemeContext.Consumer>
      )
    }
  }
}

export function withStyles(styles, C) {
  return class extends React.PureComponent {
    render() {
      const { props } = this
      return (
        <ThemeContext.Consumer>
          {theme => <C styles={styles(theme)} {...props} />}
        </ThemeContext.Consumer>
      )
    }
  }
}
