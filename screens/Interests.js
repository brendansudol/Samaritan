import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-elements'

import { uiStyles } from '../util/styles'

const options = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqr', 'stu', 'vwy']

export default class StayTunedScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  state = { selected: [] }

  handleClick = term => () => {
    this.setState(prev => ({
      selected: prev.selected.includes(term)
        ? prev.selected.filter(s => s !== term)
        : [...prev.selected, term],
    }))
  }

  render() {
    const selected = new Set(this.state.selected)

    return (
      <ScrollView
        style={[styles.container, { backgroundColor: '#eee' }]}
        contentContainerStyle={styles.content}
      >
        <Text h2>What are your interests?</Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingVertical: 24,
          }}
        >
          {options.map((option, i) => (
            <Button
              key={i}
              type={selected.has(option) ? 'solid' : 'outline'}
              title={option}
              onPress={this.handleClick(option)}
              {...optionBtnStyles}
            />
          ))}
        </View>
        <Button
          title="Next"
          containerStyle={uiStyles.button.containerStyle}
          buttonStyle={uiStyles.button.buttonStyle}
          onPress={() => this.props.navigation.navigate('Causes')}
        />
      </ScrollView>
    )
  }
}

const optionBtnStyles = {
  containerStyle: {
    marginRight: 8,
    marginBottom: 8,
  },
  buttonStyle: {
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 16,
  },
  titleStyle: {
    fontSize: 12,
  },
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 48,
  },
  content: {
    padding: 4,
  },
  card: {
    margin: 4,
  },
})
