<template>
  <v-app>
    <NavBar />
      
    <v-main>
      <ExitoAlerta :Status="this.EstadoAlerta" :Texto="this.ExitoText" />
      <ErrorAlerta :Status="this.EstadoAlerta" :Texto="this.ErrorText" />
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from "./components/Footer";
import NavBar from '@/components/NavBar.vue'
import ExitoAlerta from "./components/ExitoAlerta";
import ErrorAlerta from "./components/ErrorAlerta";
export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
    ExitoAlerta,
    ErrorAlerta
  },

  data: () => ({

  }),
  methods:{
    ObtenerEstado(){
      console.log(this.EstadoAlerta)
    }
  },
  computed:{
    EstadoAlerta:{
      get(){
        console.log(this.$store.state.EstadoAlerta)
        return this.$store.state.EstadoAlerta
      }
    },
    ErrorText:{
      get(){
        return this.$store.state.ErrorText
      }
    },
    ExitoText:{
      get(){
        return this.$store.state.ExitoText
      }
    }
  },
  created() {
    this.ObtenerEstado()
    if(this.EstadoAlerta !== 0) {
     setInterval(() => {
       this.$store.commit('setEstadoAlerta', 0)
       this.$store.commit('setErrorText', "Error al crear el usuario")
       this.$store.commit('setExitoText', "Usuario Creado correctamente")
     }, 5000)

    }
  }
};
</script>
