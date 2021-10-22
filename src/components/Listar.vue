<template>
<div class="pa-2 ma-2">
  <Titulos texto="Usuarios del Sistema"/>
    <div class="pa-3">
        <v-data-table
        :headers="headers"
        :items="usuariosBD"
        :items-per-page="10"
        class="elevation-7"
        >
        <template #[`item.editar`]="{item}">
            <v-btn color="indigo lighten-4" fab small @click="editarUsuario(item.id)">
                <v-icon>
                    mdi-account-edit-outline
                </v-icon>
            </v-btn>
        </template>
         <template #[`item.borrar`]="{item}">
            <v-btn color="red lighten-1" fab small @click="guardarUsuario(item.id)">
                <v-icon>
                    mdi-trash-can-outline
                </v-icon>
            </v-btn>
        </template>      
        </v-data-table>

        <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
    
      <v-card>
        <v-card-title class="text-h5">
          Users CRUD
        </v-card-title>
        <v-card-text>Are you sure you want to delete the user?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="error"
            text
            @click="dialog = false"
          >
            Disagree
          </v-btn> 

          <v-btn
            color="green darken-1"
            text
            @click="borrarUsuario(usuarioId)"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div>
</div>
    
</template>

<script>
import vuex from 'vuex'
import Titulos from "./Titulos";
export default {
    data(){
        return{
            usuariosBD: [],
            headers: [
                {text: 'ID', value: 'id', align: 'center', sortable: false},
                {text: 'NOMBRE', value: 'nombre', align: 'center', sortable: false},
                {text: 'CORREO', value: 'correo', align: 'center', sortable: false},
                {text: 'EDITAR', value: 'editar', align: 'center', sortable: false},
                {text: 'BORRAR', value: 'borrar', align: 'center', sortable: false},

            ],
            itemsBD: [],
            dialog: false,
            idUsuario:null
        }
    },
    created: function(){
        this.consultarUsuarios()

    },
  components:{
    Titulos,
  },
    methods:{
        consultarUsuarios(){
            fetch('http://localhost')
            .then(respuesta => respuesta.json())
            .then((datosRespuesta)=> {
                this.usuariosBD=[]
                if(typeof datosRespuesta[0].success === 'undefined'){
                    this.usuariosBD=datosRespuesta
                    this.usuariosBD.forEach( item => {
                        console.log(item)
                    })
                    //console.log(this.usuariosBD)
                }
            })
            .catch(console.log)
        },
        editarUsuario(id){
            this.$store.commit('setIdUsuario', id)
            window.location.href="/editar"
        },
        borrarUsuario(usuarioId){
            console.log(usuarioId)
            fetch('http://localhost:81/?borrar='+usuarioId)
            .then(respuesta=> respuesta.json)
            .then((datosRespuesta)=>{
                this.usuarioId= null
                window.location.href="listar"
            })
        },
        guardarUsuario(id){
            this.usuarioId=id
            this.dialog= true
        }
    }
}
</script>