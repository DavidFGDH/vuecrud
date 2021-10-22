<template>
  <v-app>
    <NavBar />
      
    <v-main>
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from "./components/Footer";
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
