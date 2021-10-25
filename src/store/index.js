import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
  },
  state:{
    idUsuario:null,
    EstadoAlerta:0,
    ErrorText:"Error al crear el usuario",
    ExitoText:"Usuario Creado correctamente"
  },
  mutations:{
    setIdUsuario(state, payload){
      state.idUsuario=payload
    },
    setEstadoAlerta(state,payload){
      state.EstadoAlerta=payload
    },
    setErrorText(state,payload){
      state.ErrorText=payload
    },
    setExitoText(state,payload){
      state.ExitoText=payload
    }
  },
})

export default store
