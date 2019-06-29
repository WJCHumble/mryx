import Vue from 'vue'
import Vuex from 'vuex'
import animate from 'animate.css'
import state from './state.js'
import getters from './getters'
import actions from './actions.js'
import mutations from './mutations.js'

Vue.use(Vuex)
Vue.use(animate)

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})

