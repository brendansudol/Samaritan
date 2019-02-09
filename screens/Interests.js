import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, Chip, Title } from 'react-native-paper'

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
        <Title style={{ marginBottom: 16 }}>What are your interests?</Title>
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
          {options.map((option, i) => (
            <Chip
              key={i}
              mode="outlined"
              selected={selected.has(option)}
              style={{ marginRight: 8, marginBottom: 8 }}
              onPress={this.handleClick(option)}
            >
              {option}
            </Chip>
          ))}
        </View>
        <Button
          mode="contained"
          onPress={() => this.props.navigation.navigate('Interests')}
        >
          Next
        </Button>
      </ScrollView>
    )
  }
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
