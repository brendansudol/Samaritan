import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'

export default class Empty extends Component {
  render() {
    const { refresh } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>That's all folks...</Text>
        <TouchableOpacity onPress={refresh}>
          <Text style={styles.btn}>RELOAD CARDS</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontWeight: '600',
    fontSize: 20,
  },
  btn: {
    fontSize: 14,
    fontWeight: '800',
    borderWidth: 0.5,
    borderColor: '#a5a5a5',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 4,
    color: '#4bdb79',
    margin: 8,
  },
})
