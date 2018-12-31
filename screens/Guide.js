import * as React from 'react'
import { View, StyleSheet } from 'react-native'

import {
  ActionSheet,
  Container,
  DetailsBar,
  Header,
  NavigationBar,
  Button,
  Content,
  StyleGuide,
  DatePicker,
  QuantityInput,
  PayButton,
  Text,
} from '../components'

export default class GuideScreen extends React.PureComponent {
  render() {
    const { navigation } = this.props
    const { guide } = navigation.state.params
    return (
      <Container>
        <Header title={guide.city} picture={guide.picture}>
          <NavigationBar type="transparent" back="Back" {...{ navigation }} />
        </Header>
        <DetailsBar
          details={[
            {
              icon: 'time',
              caption: `${guide.duration} day${guide.duration > 1 ? 's' : ''}`,
            },
            { icon: 'climate', caption: 'Temperature' },
            { icon: 'cities', caption: 'Foo' },
            { icon: 'cities', caption: 'Bar' },
          ]}
        />
        <Content style={styles.gutter}>
          <Button primary label="Book Trip" onPress={this.toggleReservation} />
          <View style={styles.content}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>
        </Content>
        <ActionSheet
          title="Reservation"
          ref={this.setReservationRef}
          scrollable
        >
          <View style={styles.gutter}>
            <Text style={{ marginBottom: StyleGuide.spacing.small }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <DatePicker />
            <QuantityInput singular="person" plural="people" from={1} to={6} />
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
})
