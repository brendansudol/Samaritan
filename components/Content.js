import * as React from 'react'
import { StyleSheet, ScrollView } from 'react-native'

import { StyleGuide } from './theme'

export default class Content extends React.PureComponent {
  render() {
    const { children, style } = this.props
    return (
      <ScrollView style={styles.container} contentContainerStyle={style}>
        {children}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: StyleGuide.palette.lightGray,
  },
})
