<template>
  <div>
    <p class="text-h5 text-center  text-primary"
       style="color: #2196f3">
      Universidad Tecnológica de Salamanca
    </p>
    <p class="text-h5 text-center  text-primary"
       style="color: #2196f3">
      Tecnologías de la Información, Área Desarrollo de Software Multiplataforma
    </p>
    <p class="text-h5 text-center text-primary"
       style="color: #2196f3">
      David Garcia Cano
    </p>
    <p class="text-h5 text-center  text-primary"
       style="color: #2196f3">
      Aplicaciones Web Orientada a Servicios
    </p>
    <p class="text-h4 text-center pa-3 text-primary"
    style="color: #0f6ed9">
    {{Texto}}</p>
  </div>
</template>

<script>
export default {
  props:{
    Texto:String
  }
}
</script>