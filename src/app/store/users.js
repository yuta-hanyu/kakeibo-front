// import axios from '@nuxtjs/axios'

export const state = () => ({
  users: {}
})

export const getters = {
  users: (state) => state.users
}

export const mutations = {
  setUsers (state, { users }) {
    state.users = users
  }
}

export const actions = {
  fetchUsers ({ commit }) {
    const url = `/users/list`
    return this.$axios.$get(url)
      .then(response => {
        console.log(1111, response)
        commit('setUsers', { users: response })})
      .catch(error => {
        console.log(2222, error)
        Promise.reject(error)
      })
  }
}
