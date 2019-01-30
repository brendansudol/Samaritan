import React from 'react'
import { Image, View, StyleSheet, Text } from 'react-native'
import { Button } from 'react-native-paper'
import { NavigationEvents } from 'react-navigation'

import { Container, NavigationBar, Content } from '../components'
import { checkAuth, signOutTemp } from '../util'

export default class Profile extends React.Component {
  static navigationOptions = {
    title: 'Stay tuned!',
  }

  state = {
    isSignedIn: false,
    isReady: false,
  }

  async componentDidMount() {
    this.refresh()
  }

  refresh = async () => {
    const isSignedIn = await checkAuth()
    this.setState({ isSignedIn, isReady: true })
  }

  handleSignOut = async () => {
    await signOutTemp()
    this.setState({ isSignedIn: false })
  }

  handleWillFocus = _payload => {
    this.setState({ isReady: false })
  }

  handleDidFocus = _payload => {
    this.refresh()
  }

  renderContent = () => {
    const { navigation } = this.props
    const { isSignedIn, isReady } = this.state

    if (!isReady) return null

    if (isSignedIn) {
      return (
        <View>
          <Text style={{ marginBottom: 32 }}>My donations... (TODO)</Text>
          <Button mode="contained" onPress={this.handleSignOut}>
            Sign out
          </Button>
        </View>
      )
    }

    return (
      <View>
        <Button mode="contained" onPress={() => navigation.navigate('Auth')}>
          Please sign in
        </Button>
      </View>
    )
  }

  render() {
    const { navigation } = this.props

    return (
      <Container>
        <NavigationEvents
          onWillFocus={this.handleWillFocus}
          onDidFocus={this.handleDidFocus}
        />
        <NavigationBar title="Profile" expanded {...{ navigation }} />
        <Content style={styles.content}>{this.renderContent()}</Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
  },
})