<template>

    <div class="px-detalle-background" >

      <div v-if="isLoading">
        
          <PxLoading />


      </div>

      <div v-else class="body__container">  
      <div class="body__profile ">
        <div styles="foto-format">
          <img src="../assets/fondo.jpg" alt="imagen header card" class="card-header">  
        </div>

        
          <div class="body__profile__photo card-footer-color">
            <!-- <div v-for="i in assets" :key="i.id" >  -->
              <img v-bind:src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${asset.id}.png`" alt="Perfil"
                class="img-background"
              />   
              
            <!-- </div> -->
          </div>
          <div class="card-tile-margin">
          
            <h1 class="name-color">{{asset.name}}</h1>
              <br>
            <div class="card-footer">
              <h1><span class="card-title">{{asset.stats[1].base_stat}}hp</span></h1>
              <p class="card-title">{{asset.base_experience}}xp</p>
            </div>
          </div>
          <div class="card-footer">
            <div class="card-footer-social">
              <h3>{{asset.stats[1].base_stat}}K</h3>
              <p>Ataque</p>
            </div>
            <div class="card-footer-social">
              <h3>{{asset.stats[3].base_stat}}K</h3>
              <p>Ataque Especial</p>
            </div>
            <div class="card-footer-social">
              <h3>{{asset.stats[2].base_stat}}K</h3>
              <p>Defensa</p>
            </div>
          </div>


        
      </div>
      </div>

      </div>
        


        
</template>

<script>
import PxLoading from '@/components/PxLoading';
export default {

    name:'PxDetalle',
    components: {
      PxLoading,
    },
    data(){
        return{
            title:"soy detalle",
        }
    },
    props: {
//este cant lo recibo de paginacion.vue
    asset: {
      default: null,
    },
    isLoading:{
      default:false,
    },
  },
}
</script>
<style>
/* transicion del loading */


/* estilos del px-detalle */
.px-detalle-background{
  background: url("../assets/fondo.jpg") no-repeat center center fixed;
        background-size: cover;
        -moz-background-size: cover;
        -webkit-background-size: cover;
        -o-background-size: cover;
  height: 731px;
}
/* card */
.body__container { 
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .body__profile {
        background: white;
        border-radius: 50px;
        padding: 1.5em 1.75em red;
        margin: 6em auto;
        max-width: 330px;
        box-shadow: 0px 3px 136px 0px rgba(88, 87, 119, 0.21);
    }
    .img-background{
      background-color: black;
    }
.card-tile-margin{
  margin-top: -7rem;
}
.card-footer h1 p{
  margin-top:6rem;
  padding-bottom:0rem;
}
.card-title{
  font-size: 1.8rem;
  text-transform: capitalize;
  color: hsl(0deg 0% 59%);
  font-weight: 400;
}
.name-color{
  color:white;
}
/* card footer     */
.card-footer{
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
}
.card-footer-color{
  background-color: red;
}

.card-footer-social{
    margin-top: 2rem;
    margin-bottom: 2rem;
}
.card-footer-social h3{
  font-weight: bolder;
  color:black;
}
/* foto */
.body__profile__photo img {
        border-radius: 50%;
        width: 200px;
        height: 200px;
        /* border: 15px solid white; */
        top: -100px;
        position: relative;
        box-shadow: 1px 2px 18px 4px rgb(226, 226, 226);
    }
.card-header {
  width: 100%;
  display: block;
  border-top-left-radius: 18%; 
  border-top-right-radius: 18%; 
  background-color: white;
  background-position: center;
	background-attachment: contain;
	background-size: cover;
}
.foto-format{
  
}
</style>