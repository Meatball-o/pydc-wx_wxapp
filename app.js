const {login} = require('./login')

App({
  onLaunch: function() {
    login()
  }
})