import Vue from 'vue'

/* -------------------------------------------------------------------------- */
/*                     Filters file  **use Vue.filter()                       */
/* -------------------------------------------------------------------------- */
/**
 * Format date
 * @para - String date
 * @return -format Sat, 7 Nov 2020
 */
Vue.filter('formatDate', function (date) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
  let posted_on = new Date(date)
  let formatted_date =
    days[posted_on.getDay()] +
    ', ' +
    posted_on.getDate() +
    ' ' +
    months[posted_on.getMonth()] +
    ' ' +
    posted_on.getFullYear()

  return formatted_date
})

/**
 * Format time
 * @para - String time
 * @return
 */
Vue.filter('formatTime', function (date) {
  let posted_on = new Date(date)

  var hours = posted_on.getHours()
  hours = hours > 10 ? hours : '0' + hours

  var minutes = posted_on.getMinutes()
  minutes = minutes > 10 ? minutes : '0' + minutes

  var formatted_date = `${hours}:${minutes}`

  return formatted_date
})
