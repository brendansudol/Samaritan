import React from 'react'
import { AsyncStorage, View, StyleSheet } from 'react-native'
import { Button, TextInput } from 'react-native-paper'

export default class SignUp extends React.Component {
  static navigationOptions = {
    title: 'Sign up',
  }

  state = {
    email: '',
    password: '',
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            label="Email"
            textContentType="emailAddress"
            style={styles.mb1}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
          <TextInput
            label="Password"
            textContentType="password"
            secureTextEntry={true}
            style={styles.mb1}
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
        <Button
          mode="outlined"
          onPress={() => this.props.navigation.navigate('SignIn')}
        >
          Or, sign in
        </Button>
      </View>
    )
  }

  _signUpAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc')
    this.props.navigation.navigate('Causes')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
    backgroundColor: '#f8f8f8',
  },
  mb1: {
    marginBottom: 16,
  },
})
