import * as React from 'react'
import { StyleSheet, View } from 'react-native'

export default class Container extends React.PureComponent {
  render() {
    return <View style={styles.container}>{this.props.children}</View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
