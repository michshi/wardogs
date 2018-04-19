$(document).ready(function() {
  'use strict';

  // eslint-disable-next-line max-statements
  $('#joinButton').click((event) => {
    event.preventDefault();
    let eventUser = {}

    const eventId = window.location.pathname.match(/[0-9]+/)[0]
    const userToken = window.document.cookie.slice(6)

    eventUser = {
      "eventId": eventId,
      "userToken": userToken,
    }

    const options = {
      contentType: 'application/json',
      data: JSON.stringify(eventUser),
      dataType: 'json',
      type: 'POST',
      url: `/events/${eventId}`
    }

    $.ajax(options)
      .done(function() {
        // window.location.href="/"
        alert('Successfully joined event!')
      })
      .fail(($xhr) => {
        alert($xhr.responseText)
      })
  })
})
