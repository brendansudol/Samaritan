import * as React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'

import { StyleGuide } from './theme'

export default class BaseCard extends React.PureComponent {
  render() {
    const { style, onPress, children } = this.props

    return (
      <TouchableWithoutFeedback {...{ onPress }}>
        <View style={[styles.card, style]}>{children}</View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: StyleGuide.palette.white,
    padding: StyleGuide.spacing.small,
    marginHorizontal: StyleGuide.spacing.small,
    marginTop: StyleGuide.spacing.small,
    marginBottom: 1,
    ...StyleGuide.styles.borderRadius,
  },
})
