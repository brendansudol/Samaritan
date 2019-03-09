import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'
import { connect } from 'react-redux'

import { logout } from '../actions/auth'
import { Container, NavigationBar, Content } from '../components'

class Profile extends React.Component {
  static navigationOptions = {
    title: 'Stay tuned!',
  }

  handleSignOut = () => {
    this.props.logout()
  }

  renderContent = () => {
    const { authenticated, navigation } = this.props

    if (authenticated) {
      return (
        <View>
          <Text style={{ marginBottom: 32 }}>My donations... (TODO)</Text>
          <Button title="Sign out" onPress={this.handleSignOut} />
        </View>
      )
    }

    return (
      <View>
        <Button
          title="Please sign in"
          onPress={() => navigation.navigate('Auth')}
        />
      </View>
    )
  }

  render() {
    const { navigation } = this.props

    return (
      <Container>
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

const mapStateToProps = ({ auth }) => ({ ...auth })
const mapDispatchToProps = { logout }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
