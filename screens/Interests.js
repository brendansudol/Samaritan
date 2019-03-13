import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'

import { Text } from '../components'
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
      <View style={styles.container}>
        <Text type="title1" color="#000">
          What are your interests?
        </Text>
        <View style={styles.optionsContainer}>
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
      </View>
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
    fontSize: 14,
  },
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 40,
  },
})
