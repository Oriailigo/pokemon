<template>
    <v-container >
          <v-alert 
            type="error"
            variant="tonal"
        > {{texto}} </v-alert>
    </v-container>
  </template>
  
  <script>
    export default {
      name: 'PxAlert',
      data: () => ({
      }),
      props: {
//este cant lo recibo de paginacion.vue
    texto: {
      default: "",
    },
    text_increment: {
      default: "",
    },
    text_buscador:{
      default:"",
    },
    asset: {
      default: {},
    },
  },

    }
  </script>
  <style>

  </style>
  