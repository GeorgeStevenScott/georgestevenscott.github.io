'use strict'

class UserController {
  async register({
    request,
    auth,
    response
  }) {
    const userData = request.only(['username', 'email', 'password'])

    try {
      const user = await User.create(userData)
      const token = await auth.generate(user)

      return response.json({
        status: 'success',
        data: token
      })
    } catch (error) {
      return response.status(400).json({
        status: 'error',
        message: 'There was a problem creating the user, please try again later.'
      })
    }
  }

  async login({
    request,
    auth
  }) {
    const {
      email,
      password
    } = request.all()
    await auth.attempt(email, password)

    return 'Logged in successfully'
  }

  show({
    auth,
    params
  }) {
    if (auth.user.id !== Number(params.id)) {
      return 'You cannot see someone else\'s profile'
    }
    return auth.user
  }

  async me({
    auth,
    response
  }) {
    return response.json({
      status: 'success',
      data: auth.user
    })
  }
}

module.exports = UserController
