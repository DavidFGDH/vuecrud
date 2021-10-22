<template>
  <v-alert
      border="left"
      dense
      outlined
      prominent
      text
      dismissible
      type="success"
      v-if="Status===1"
  >
    {{ Texto }}
  </v-alert>
</template>

<script>
export default {
  props:{
    Status:Number,
    Texto:String
  }
}
</script>