import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input } from 'react-native-elements'

import { signInTemp } from '../util'
import { uiStyles } from '../util/styles'

export default class SignIn extends React.Component {
  static navigationOptions = {
    title: 'Sign in',
  }

  state = {
    email: '',
    password: '',
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
            onPress={this._signInAsync}
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

  _signInAsync = async () => {
    await signInTemp()
    this.props.navigation.navigate('CardSwipers')
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
