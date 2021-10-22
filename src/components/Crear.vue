<template>
<div>
  <ExitoAlerta :Status="createStatus" Texto="Usuario Creado correctamente" />
  <ErrorAlerta :Status="createStatus" Texto="Error al crear el usuario"/>
  <Titulos Texto="Crear Usuario"/>

    <v-form
    ref="form"
    lazy-validation
    class="pa-7"
  >
    <v-text-field
      v-model="name"
      :counter="50"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-btn
      color="#1e88e5"
      class="mr-4"
      @click="agregarUsuario"
    >
    <v-icon left>
          mdi-content-save
      </v-icon>
      Save User
      
    </v-btn>
    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
    <v-icon left>
          mdi-eraser-variant
      </v-icon>
      Reset Form
    </v-btn>
  </v-form>
</div>
</template>

<script>
/**
 * 0=Espera
 * 1=Exito
 * 2=Fallo
 */
  import ErrorAlerta from "./ErrorAlerta";
  import ExitoAlerta from "./ExitoAlerta";
  import Titulos from "./Titulos";
  export default {
    data: () => ({
      createStatus:0,
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
      usuario:{}
    }),
    components:{
      Titulos,
      ErrorAlerta,
      ExitoAlerta
    },
    methods: {
      reset () {
        this.$refs.form.reset()
      },
      agregarUsuario(){
          var datosUsuario = {
              nombre: this.name,
              correo: this.email
          }
          console.log(JSON.stringify(datosUsuario))
          fetch('http://localhost/?insertar=1', {
              method: "POST", 
              body: JSON.stringify(datosUsuario)
          })
          .then(respuesta=> respuesta.json()).catch(()=>{
                this.createStatus=2
          })
          .then((datosRespuesta=>{
              console.log(datosRespuesta)
              this.createStatus = datosRespuesta.success
            //  this.reset()
            //  window.location.href='listar'
          }))
      }
    },
  }
</script>