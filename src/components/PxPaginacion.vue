<template>
    <div class="px-paginacion-background px-paginacion-y"> 
        <v-btn @click="decrement( )" class="ma-2" color="red darken-2" dark >
            <v-icon dark left>
                mdi-arrow-left
            </v-icon>
            Anterior
        </v-btn>
        <div class="contain-label">
            <v-label class="label-color">{{ cant }}</v-label>
        </div>

        
        <v-btn @click="increment( )" class="ma-2" color="red darken-2" dark >
            siguiente 
            <v-icon dark right>
                mdi-arrow-right
            </v-icon>
        </v-btn>

        

    </div>
</template>

<script>

export default {
    name:'PxPaginacion',
    data() {
        return{
            title: 'soy el componente paginacion',
           
        }
    },
    props: {
    //este assets es el que se crea en app.vue
       
        increment:{
            type:Function,
        },
        decrement:{
            type:Function,
        },
        cant:{
            default:0,
        }
    },  

}
</script>
<style>
.contain-label{
    height: 2rem;
    width: 2rem;
    background-color: azure;
    margin-top:0.5rem;
}
.label-color{
    background-color:white;
}
.px-paginacion-background{
  background-color: black;
  display: flex;
  justify-content: center;

}
.px-paginacion-y{
    padding-bottom: 2rem;
    padding-top:2rem;
}
</style>