<template>
    <div class="pa-2">
        <div class="text-h4 text-center">
            Usuarios del Sistema
        </div>
        <div class="pa-3">
            <v-data-table :headers="headers" :items-per-page="10" :items="usuariosBD" class="elevation-5">
                <template #[`item.editar`]="{ item }">
                    <v-btn color="indigo darken-1" fab small @click="editarUsuario(item)">
                        <v-icon color="indigo lighten-4">
                            mdi-account-edit
                        </v-icon>
                    </v-btn>
                </template>
                <template #[`item.borrar`]="{ item }">
                    <v-btn color="red darken-4" fab small @click="borrarUsuario(item.id)">
                        <v-icon color="indigo lighten-4">
                            mdi-trash-can
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
                <v-card-title class="text-h5" style="background: blue; color: white;">
                    Users Crud
            </v-card-title>
            <v-card-text>Are you shure you want to delete the user?</v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="green darken-1"
                    text
                    @click="dialog = false"
                >
                    Disagree
                </v-btn>
                <v-btn
                    color="green darken-1"
                    text
                    @click="dialog = false"
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
            dialog: false
        }
    },
    created: function(){
        this.consultarUsuarios()
    },
    methods: {
        consultarUsuarios(){
            fetch('http://localhost:8888/')
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {
                this.usuariosBD = []
                if(typeof datosRespuesta[0].success === 'undefined'){
                    this.usuariosBD = datosRespuesta
                    THIS.usuariosBD.forEach( item => {
                        console.log(item)
                    })
                    //console.log(this.usuariosBD)
                }
            })
            .catch(console.log)
        },
        editarUsuario(usuario){
            console.log(usuario)
        },
        borrarUsuario(usuarioId){
            console.log(usuarioId)
            this.dialog = true
        }
    }
}
</script>