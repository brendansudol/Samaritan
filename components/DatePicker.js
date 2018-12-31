import moment from 'moment'
import * as React from 'react'
import { View } from 'react-native'
import RNDatePicker from 'react-native-datepicker'

import { withStyles, StyleGuide } from './theme'

const themedStyles = theme => ({
  button: {
    backgroundColor: theme.palette.secondary,
    ...StyleGuide.styles.button,
  },
  datePicker: {
    ...StyleGuide.styles.barHeight,
    flex: 1,
  },
  dateInput: {
    borderWidth: 0,
  },
  dateText: {
    ...theme.typography.body,
    color: theme.palette.primary,
    shadowOpacity: 0,
  },
  dateTouchBody: {
    flex: 1,
  },
  btnTextConfirm: {
    color: theme.palette.primary,
    height: 20,
  },
  btnTextCancel: {
    height: 20,
  },
})

class DatePicker extends React.Component {
  state = {
    date: moment().format('MMMM Do'),
  }

  onDateChange = date => this.setState({ date })

  render() {
    const { onDateChange } = this
    const { styles } = this.props
    const { date } = this.state
    return (
      <View style={styles.button}>
        <RNDatePicker
          mode="date"
          style={styles.datePicker}
          customStyles={styles}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          format="MMMM Do"
          showIcon={false}
          {...{ date, onDateChange }}
        />
      </View>
    )
  }
}

export default withStyles(themedStyles, DatePicker)
