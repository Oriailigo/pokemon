<template>
  <v-app>
    <v-main>
        <form class="pokemon-form">
            <label for="input" class="pokemon-label"><h1>Busca por nombre o número </h1></label>
            <div>
              <input
                @keydown.space.prevent
                @keydown.enter.prevent
                type="text"
                name="pokemon"
                v-model="pokemonID"
                placeholder="Busca tu pokemon"
                autocomplete="off"/>

                <v-btn @click="getBusqueda" class="ma-2" color="black darken-2" dark>
                  Buscar pokemon 
                </v-btn>
            </div>
        </form>

        <PxPaginacion  v-bind:increment="increment" v-bind:decrement="decrement" v-bind:cant="cant"/>
        <div class="alinear">

        <div class="content_alert">
          <div v-if="message">
          <PxAlert v-bind:texto="texto"/>
          </div>
        </div>
    </div>
    <div>
        <PxDetalle v-bind:asset="asset" v-bind:isLoading="isLoading" /> 
    </div>

      
    <PxFooter/>
      

      
    </v-main>
  </v-app>
</template>

<script>

import PxAlert from '@/components/PxAlert';
import PxPaginacion from '@/components/PxPaginacion';
import PxDetalle from '@/components/PxDetalle';

import PxFooter from '@/components/PxFooter';
import app from "@/app";
export default {
  name: 'App',

  components: {
    PxAlert,PxPaginacion,PxDetalle,PxFooter,
  },
  data() {
    return{
      asset: {},
      pokemonID:"",
      cant:1,
      message:false,
      isLoading: false,
      text:"",
    }
    
  },
  computed:{
    texto(){
      return this.text;
    }
  },
  created() {
    this.getCoin();
  },
  watch:{
    cant(newCant){
      if(newCant>0){
        this.getCoin(newCant)
      }
    }
  },
  methods: {
        increment() {
            this.message=false
            this.cant=this.cant+1
            console.log(this.cant)
            
            if(this.cant>8 ){
              this.cant=8
              this.message=true
              this.text=this.asset.name+" es el ultimo pokemon de la lista. No se puede seguir hacia adelante. Seleccione el botón anterior."
              
            }
            // if(this.cant>0){
            //   this.getCoin(this.cant)
            // }
        },
        decrement() {
            this.message=false
            this.cant=this.cant-1
            console.log(this.cant)
            if(this.cant<1){
              this.cant=1
              this.message=true
              this.text=this.asset.name+" es el ultimo pokemon de la lista. No se puede seguir hacia atrás. Seleccione el botón siguiente."
            }
            // if(this.cant>0){
            //   this.getCoin(this.cant)
            // }
        },
        getCoin() {
            this.isLoading=true
            // console.log(app.getPokemon(this.pokemonID))
            Promise.all([app.getPokemon(this.cant)])
              .then(([asset]) => {
                this.asset = asset;
              })
              .finally(() => (this.isLoading = false));
       },
       getBusqueda() {
          this.isLoading=true
          console.log(app.getPokemon(this.pokemonID))
          Promise.all([app.getPokemon(this.pokemonID)]) // no realizar una promesa, cuando se esta haciendo en el app.js
            .then(([asset]) => {
              if(asset.id<=8 & asset.id>=1){
                this.message=false
                this.asset = asset;
                this.cant=asset.id;
              }
              else{
                  this.message=true

                  this.text="Pokemon fuera de rango."
              }
            })
            .finally(() => (this.isLoading = false));
       }
    },
  
};
</script>
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  }
  /* input */
  /* caja a completar */
  .pokemon-form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background-image: url("assets/header_pokemon.png"); */
    background-color:red ;
    padding-top:2rem;
    padding-bottom: 2rem;
  }
  .pokemon-label{
    background-color: red;
    color:white;
    display: inline-block;
  }
  input[type=text], select {
  width: 25%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color: white;
}
/* mensajes de error */
.content_alert{
    position:absolute;
    /* margin-top: 0; */
    /* margin-left: 33rem; */
    position: absolute; 
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
  width: 70%; /* Need a specific value to work */

  }
  .alinear{
    justify-content: center;
  }
</style>
