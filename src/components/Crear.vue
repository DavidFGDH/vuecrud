<template>
    <div>
        <div class="text-h4 text-center pa-2">
            Crear un Usuario
        </div>

        <v-form
            ref="form"
            lazy-validation
            class="pa-10"
        >
        <v-text-field
            v-model="name"
            :counter="10"
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
            color="success"
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
    export default {
        data: () => ({
        name: '',
        nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        usuario: {}
}),

methods: {
    reset () {
        this.$refs.form.reset()
    },
    agregarUsuario(){
        console.log(this.name, this.email)
            var datosUsuario = {
                nombre: this.name,
                correo: this.email
            }
            console.log(JSON.stringify(datosUsuario))
            fetch('http://localhost:8888/?insertar=1',{
                method: "POST",
                body: JSON.stringify(datosUsuario)
            })
            .then(respuesta => respuesta.json())
            .then((datosRespuesta => {
                console.log(datosRespuesta)
                this.reset()
                window.location.href = 'listar'
            }))
        }
    },
}
</script>