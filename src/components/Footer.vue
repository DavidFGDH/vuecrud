<template>
  <div>
  <v-footer
      color="primary lighten-1"
      padless
  >
    <v-row
        justify="center"
        no-gutters
    >
      <v-col
          class="red darken-4  py-4 text-center white--text"
          cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>David Garcia Cano</strong>
      </v-col>
    </v-row>
  </v-footer>
  </div>
</template>
<script>

export default {

}
</script>