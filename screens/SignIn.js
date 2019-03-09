import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'
import { connect } from 'react-redux'

import { attemptLogin } from '../actions/auth'
import { uiStyles } from '../util/styles'

export const authNav = title => ({ navigation }) => {
  return {
    title,
    headerRight: (
      <Icon
        name="md-close"
        type="ionicon"
        color="#4388d6"
        iconStyle={{ paddingHorizontal: 16 }}
        onPress={() => navigation.navigate('Main')}
      />
    ),
  }
}

class SignIn extends React.Component {
  static navigationOptions = authNav('Sign in')

  state = {
    email: '',
    password: '',
  }

  handleSignIn = async () => {
    await this.props.attemptLogin()

    if (this.props.auth.authenticated) {
      this.props.navigation.navigate('Main')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Input
            placeholder="Email"
            textContentType="emailAddress"
            containerStyle={uiStyles.input.containerStyle}
            inputContainerStyle={uiStyles.input.inputContainerStyle}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
          <Input
            placeholder="Password"
            textContentType="password"
            containerStyle={uiStyles.input.containerStyle}
            inputContainerStyle={uiStyles.input.inputContainerStyle}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
          <Button
            title="Sign in"
            containerStyle={uiStyles.button.containerStyle}
            buttonStyle={uiStyles.button.buttonStyle}
            onPress={this.handleSignIn}
          />
        </View>
        <View style={styles.footer}>
          <Text>Not a member?</Text>
          <Button
            title="Create account"
            type="clear"
            buttonStyle={{ padding: 4 }}
            titleStyle={{ fontSize: 14, fontWeight: 'bold', color: '#000' }}
            onPress={() => this.props.navigation.navigate('SignUp')}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f8f8f8',
  },
  form: {
    padding: 48,
    marginTop: 24,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 24,
    paddingBottom: 32,
  },
})

const mapStateToProps = ({ auth }) => ({ auth })
const mapDispatchToProps = { attemptLogin }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn)
