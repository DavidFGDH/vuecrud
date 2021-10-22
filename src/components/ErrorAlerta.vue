<template>
  <v-alert
      border="left"
      dense
      dismissible
      outlined
      prominent
      text
      type="error"
      v-if="Status===2"
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