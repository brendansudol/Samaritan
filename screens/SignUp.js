import React from 'react'
import { AsyncStorage, View, StyleSheet, Text } from 'react-native'
import { Button, TextInput } from 'react-native-paper'

import { signInTemp } from '../util'

export default class SignUp extends React.Component {
  static navigationOptions = {
    title: 'Sign up',
  }

  state = {
    name: '',
    email: '',
    password: '',
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            label="Name"
            textContentType="givenName"
            underlineColor="transparent"
            style={[styles.input, styles.mb1]}
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
          />
          <TextInput
            label="Email"
            textContentType="emailAddress"
            underlineColor="transparent"
            style={[styles.input, styles.mb1]}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
          <TextInput
            label="Password"
            textContentType="password"
            secureTextEntry={true}
            underlineColor="transparent"
            style={[styles.input, styles.mb1]}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
          <Button
            mode="contained"
            style={styles.mb1}
            onPress={this._signUpAsync}
          >
            Sign up
          </Button>
        </View>
        <View style={styles.footer}>
          <Text>Already have an account?</Text>
          <Button
            mode="text"
            onPress={() => this.props.navigation.navigate('SignIn')}
            color="#000"
            uppercase={false}
          >
            Sign in here
          </Button>
        </View>
      </View>
    )
  }

  _signUpAsync = async () => {
    await signInTemp()
    this.props.navigation.navigate('Causes')
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
    paddingTop: 16,
    paddingBottom: 32,
  },
  input: {
    backgroundColor: '#fff',
  },
  mb1: {
    marginBottom: 8,
  },
})
