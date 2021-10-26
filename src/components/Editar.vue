<template>
<div>
  <Titulos Texto="Editar Usuario"/>

    <v-form
    ref="form"
    lazy-validation
    class="pa-7"
  >
    <v-text-field
      v-model="usuario.nombre"
      :counter="50"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="usuario.correo"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-btn
      color="yellow lighten-1"
      class="mr-4"
      @click="modificarUsuario"
    >
    <v-icon left>
          mdi-account-edit-outline
      </v-icon>
      Edit User
      
    </v-btn>
    <v-btn
      color="blue"
      class="mr-4"
      @click="goHome"
    >
    <v-icon left>
          mdi-home-variant-outline
      </v-icon>
      Go Home
    </v-btn>
  </v-form>
</div>
    
</template>

<script>
import Titulos from "./Titulos";
  export default {
    data: () => ({
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 50) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      usuario:[]
    }),
    components:{
      Titulos
    },
    methods: {
      goHome () {
        window.location.href= "/listar"
      },
      modificarUsuario() {
        let that = this
        if(/.+@.+\..+/.test(that.usuario.correo) && that.usuario.nombre && that.usuario.nombre.length <= 50) {
          fetch('http://localhost/?actualizar=' + that.usuario.id, {
            method: "POST",
            body: JSON.stringify(that.usuario)
          }).then(respuesta => respuesta.json()).catch(() => {
            this.$store.commit('setErrorText', "Error al editar el usuario")
            this.$store.commit('setEstadoAlerta', 2)
          })
              .then((datos) => {
                console.log(datos)
                this.$store.commit('setExitoText', "Se editó el usuario correctamente")
                this.$store.commit('setEstadoAlerta', 1)
                window.location.href = 'listar'
              })
        }
      },
      obtenerUsuario(){
        console.log(this.idUsuario)
        fetch('http://localhost/?consultar='+this.idUsuario)
        .then(respueta => respueta.json(9))
        .then( (datos)=>{
          this.usuario = datos[0]
          console.log('Usuario', this.usuario)
        })
      }
    },
    mounted(){
      this.obtenerUsuario()
    },
    computed:{
      idUsuario:{
        get(){
          return this.$store.state.idUsuario
        }
      }
    }
  }
</script>