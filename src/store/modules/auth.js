const state = {
    token: null
}

const getters = {
    isLoggedIn: state => !!state.token
}

const actions = {
    logout: ({ commit }) => {
        commit('setToken', null)
    }
}

const mutations = {
    setToken: (state, token) => {
        state.token = token
    }
}

https://api.imgur.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=REQUESTED_RESPONSE_TYPE&state=APPLICATION_STATE
