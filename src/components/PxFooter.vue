<template>
  <div class="container-full">
    
      <footer>
        <v-card
          flat
          tile
          width="100%"
          class="black lighten-1 text-center"
        >
  
          <v-divider></v-divider>
  
          <v-card-text class="white--text">
            © {{ new Date().getFullYear() }} — <strong>Oriana Ailigo</strong> — Hecho con amor con Vue 💚
          </v-card-text>
        </v-card>
      </footer>
  
      
  </div>


  </template>
<script>
 export default {
    name: 'PxFooter',
    data: () => ({
    }),
  }
</script>
<style>
.container-full{

    margin-left: auto;
    margin-right: auto;
    padding: 1rem;
    max-width: 100%;
    /* position: absolute; */
    background-color: black;
}

</style>