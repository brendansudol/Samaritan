import * as React from 'react'
import { StyleSheet, View, TouchableHighlight } from 'react-native'

import Text from './Text'
import Icon from './Icon'

export default class LeftAction extends React.PureComponent {
  render() {
    const { name, label, onPress } = this.props
    return (
      <TouchableHighlight
        activeOpacity={0.5}
        underlayColor="transparent"
        {...{ onPress }}
      >
        <View style={styles.backBtn}>
          <Icon color="white" {...{ name }} />
          <Text color="white">{label}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})