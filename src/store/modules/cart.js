export default {
  namespaced: true,
  state: () => {
    return {
      list: []
    }
  },
  mutations: {
    setList (state, payload) {
      state.list.unshift(payload)
    },
    alterList (state, payload) {
      state.list = payload
    }
  },
  actions: {
    checkList ({ commit, state }, products) {
      const is = state.list.filter(item => item.id === products.id)
      if (is.length === 0) {
        commit('setList', products)
      } else {
        state.list.forEach((item, index) => {
          if (item.id === is[0].id) {
            // console.log(index)
            state.list.splice(index, 1)
            commit('setList', {
              ...is[0],
              selectedNum: is[0].selectedNum + products.selectedNum
            })
            // item = {
            //   ...item,
            //   selectedNum: item.selectedNum + products.selectedNum
            // }
          }
        })
      }
    //   console.log(is.length)
    },
    delList ({ state, commit }, id) {
      const is = state.list.filter(item => item.id === id)
      const list = []
      state.list.forEach(item => {
        list.push(item)
        list.forEach((goods, index) => {
          if (goods.id === is[0].id) {
            list.splice(index, 1)
          }
        })
      })
      commit('alterList', list)
    }
  }
}
