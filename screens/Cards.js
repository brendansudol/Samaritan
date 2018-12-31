import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Title, Paragraph, Card, Button } from 'react-native-paper'

export default class StayTunedScreen extends React.Component {
  static navigationOptions = {
    title: 'Stay tuned!',
  }

  render() {
    return (
      <ScrollView
        style={[styles.container, { backgroundColor: '#eee' }]}
        contentContainerStyle={styles.content}
      >
        <Card style={styles.card}>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Content>
            <Title>Abandoned Ship</Title>
            <Paragraph>
              The Abandoned Ship is a wrecked ship located on Route 108 in
              Hoenn, originally being a ship named the S.S. Cactus. The second
              part of the ship can only be accessed by using Dive and contains
              the Scanner.
            </Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => {}}>Share</Button>
            <Button onPress={() => {}}>Explore</Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions>
            <Button onPress={() => {}}>Share</Button>
            <Button onPress={() => {}}>Explore</Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 4,
  },
  card: {
    margin: 4,
  },
})
