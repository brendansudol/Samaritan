import { Linking, WebBrowser } from 'expo'
import React from 'react'
import { Alert, Linking as RNLinking, StyleSheet, View } from 'react-native'
import { Button, Divider, ListItem, Overlay } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'
import { connect } from 'react-redux'

import { addCreditCard, logout } from '../actions/auth'
import { Container, NavigationBar, Content, Text } from '../components'

const list = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
]

const baseUrl = 'https://brendansudol.com/samaritan-mock-backend'

class Profile extends React.Component {
  static navigationOptions = {
    title: 'Stay tuned!',
  }

  state = {
    redirectData: null,
    showCreditCardOverlay: false,
  }

  componentDidUpdate(prevProps) {
    if (
      !prevProps.hasCreditCard &&
      this.props.hasCreditCard !== prevProps.hasCreditCard
    ) {
      this.setState({ showCreditCardOverlay: true })
    }
  }

  handleSignOut = () => {
    this.props.logout()
  }

  handleRedirect = event => {
    WebBrowser.dismissBrowser()
    const data = Linking.parse(event.url)
    const { queryParams } = data

    if (queryParams && queryParams.authToken != null) {
      this.props.addCreditCard()
    }

    this.setState({ redirectData: queryParams })
  }

  openWebBrowserAsync = async () => {
    try {
      this.addLinkingListener()
      const result = await WebBrowser.openBrowserAsync(
        `${baseUrl}/?linkingUri=${Linking.makeUrl('/?')}`
      )
      console.log(result)
      this.removeLinkingListener()
    } catch (error) {
      alert(error)
      console.log(error)
    }
  }

  addLinkingListener = () => {
    Linking.addEventListener('url', this.handleRedirect)
  }

  removeLinkingListener = () => {
    Linking.removeEventListener('url', this.handleRedirect)
  }

  maybeRenderRedirectData = () => {
    if (!this.state.redirectData) {
      return
    }

    return (
      <View>
        <Divider style={{ marginVertical: 10 }} />
        <Text>{JSON.stringify(this.state.redirectData)}</Text>
      </View>
    )
  }

  renderContent = () => {
    const { authenticated, hasCreditCard, navigation } = this.props

    if (!authenticated) {
      return (
        <View>
          <Button
            title="Please sign in"
            onPress={() => navigation.navigate('Auth')}
          />
        </View>
      )
    }

    if (!hasCreditCard) {
      return (
        <View>
          <Button title="Add credit card" onPress={this.openWebBrowserAsync} />
          {this.maybeRenderRedirectData()}
        </View>
      )
    }

    return (
      <View>
        <Text type="title3" color="#000" style={{ marginBottom: 10 }}>
          My donations
        </Text>
        <View style={{ marginBottom: 20 }}>
          {list.map((l, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: { uri: l.avatar_url } }}
              title={l.name}
              subtitle={l.subtitle}
              subtitleStyle={{ color: '#999' }}
              onPress={() => Alert.alert('Not Implemented 🤷🏻‍♂️')}
              bottomDivider
            />
          ))}
        </View>
        <Button title="Sign out" onPress={this.handleSignOut} />
      </View>
    )
  }

  render() {
    const { navigation } = this.props
    const { showCreditCardOverlay } = this.state

    return (
      <Container>
        <NavigationBar title="Profile" expanded {...{ navigation }} />
        <Content style={styles.content}>{this.renderContent()}</Content>
        <Overlay
          isVisible={showCreditCardOverlay}
          onBackdropPress={() =>
            this.setState({ showCreditCardOverlay: false })
          }
        >
          <Text>Credit Card Added!</Text>
        </Overlay>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
  },
})

const mapStateToProps = ({ auth }) => ({ ...auth })
const mapDispatchToProps = { addCreditCard, logout }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
