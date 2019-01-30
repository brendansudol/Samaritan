import moment from 'moment'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import Api from '../api'
import { Card, Feed } from '../components'

class Causes extends Component {
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

    console.log(this.props)

    const data = Api.cities
    const title = moment().format('ddd, MMM Do')
    const rightAction = {
      icon: 'sign-out',
      onPress: () => navigation.navigate('Auth'),
    }

    return <Feed {...{ data, renderItem, title, navigation, rightAction }} />
  }
}

const mapStateToProps = state => {
  return { state }
}

export default connect(mapStateToProps)(Causes)
