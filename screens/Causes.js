import * as React from 'react'

import Api from '../api'
import { Card, Feed } from '../components'

export default class Causes extends React.Component {
  renderItem = cause => (
    <Card
      height={180}
      onPress={() => this.props.navigation.navigate('Cause', { cause })}
      title={cause.city}
      subtitle={cause.country}
      picture={cause.picture}
    />
  )

  render() {
    const { renderItem } = this
    const { navigation } = this.props

    const data = Api.cities
    const title = 'Causes'
    const rightAction = {
      icon: 'sign-out',
      onPress: () => navigation.navigate('Landing'),
    }

    return <Feed {...{ data, renderItem, title, navigation, rightAction }} />
  }
}
