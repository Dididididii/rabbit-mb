export default {
  namespaced: true,
  state () {
    return {
      profile: {
        id: '',
        avatar: '',
        nickname: '',
        account: '',
        mobile: '',
        token: ''
      },
      collect: []
    }
  },
  mutations: {
    setUser (state, payload) {
      state.profile = payload
    },
    setCollect (state, payload) {
      state.collect = payload
    },
    updateName (state, payload) {
      state.profile.nickname = payload
    }
  }
}
