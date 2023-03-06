import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
        username: "Robert Medina"
    }
  },
  getters: {
    firstName(state) {
        return state.username
    }
  }
})

export default store