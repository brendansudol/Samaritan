import * as React from 'react'
import { StyleSheet, View } from 'react-native'

import {
  ActionSheet,
  Button,
  Container,
  Content,
  DatePicker,
  DetailsBar,
  Header,
  NavigationBar,
  PayButton,
  QuantityInput,
  StyleGuide,
  Text,
  notImplementedYet,
} from '../components'

export default class Cause extends React.PureComponent {
  render() {
    const { navigation } = this.props
    const { cause } = navigation.state.params
    const rightAction = { icon: 'heart', onPress: notImplementedYet }

    return (
      <Container>
        <Header title={cause.city} picture={cause.picture}>
          <NavigationBar
            type="transparent"
            back="Causes"
            {...{ navigation, rightAction }}
          />
        </Header>
        <DetailsBar
          details={[
            { icon: 'time', caption: 'Baz' },
            { icon: 'climate', caption: 'Bop' },
            { icon: 'cities', caption: 'Bar' },
          ]}
        />
        <Content style={styles.gutter}>
          <Button primary label="Donate" onPress={this.toggleReservation} />
          <View style={styles.content}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>
          <View style={styles.buttons}>
            <View style={styles.leftButton}>
              <Button icon="previous" primary />
            </View>
            <View style={styles.RightButton}>
              <Button icon="next" primary />
            </View>
          </View>
        </Content>
        <ActionSheet title="TODO" ref={this.setReservationRef} scrollable>
          <View style={styles.gutter}>
            <Text style={{ marginBottom: StyleGuide.spacing.small }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <DatePicker />
            <QuantityInput singular="dollar" plural="dollars" from={1} to={6} />
            <PayButton />
          </View>
        </ActionSheet>
      </Container>
    )
  }

  toggleReservation = () => this.reservation.toggle()

  setReservationRef = reservation => {
    if (reservation) {
      this.reservation = reservation
    }
  }
}

const styles = StyleSheet.create({
  gutter: {
    padding: StyleGuide.spacing.small,
  },
  content: {
    backgroundColor: StyleGuide.palette.white,
    padding: StyleGuide.spacing.small,
    ...StyleGuide.styles.borderRadius,
  },
  buttons: {
    flexDirection: 'row',
    paddingTop: StyleGuide.spacing.small,
  },
  leftButton: {
    flex: 1,
    marginRight: StyleGuide.spacing.tiny,
  },
  RightButton: {
    flex: 1,
  },
})
