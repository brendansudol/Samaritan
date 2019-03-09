import React from 'react'
import { Button as RNButton, StyleSheet, Text, View } from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'
import { connect } from 'react-redux'

import { attemptLogin } from '../actions/auth'
import { uiStyles } from '../util/styles'
import { authNav } from './SignIn'

class SignUp extends React.Component {
  static navigationOptions = authNav('Sign up')

  state = {
    name: '',
    email: '',
    password: '',
  }

  handleSignUp = async () => {
    await this.props.attemptLogin()
    this.props.navigation.navigate('Interests')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Input
            placeholder="Name"
            textContentType="givenName"
            containerStyle={uiStyles.input.containerStyle}
            inputContainerStyle={uiStyles.input.inputContainerStyle}
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
          />
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
            title="Sign up"
            containerStyle={uiStyles.button.containerStyle}
            buttonStyle={uiStyles.button.buttonStyle}
            onPress={this.handleSignUp}
          />
        </View>
        <View style={styles.footer}>
          <Text>Already have an account?</Text>
          <Button
            title="Sign in"
            type="clear"
            buttonStyle={{ padding: 4 }}
            titleStyle={{ fontSize: 14, fontWeight: 'bold', color: '#000' }}
            onPress={() => this.props.navigation.navigate('SignIn')}
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
)(SignUp)
