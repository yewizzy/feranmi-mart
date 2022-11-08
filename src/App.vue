<template>
  <div id="app">
   
  </div>
    <router-view />
</template>

<script>
  import HomeView from '@/views/HomeView'
  export default{
    name: 'App',
    components:{
      HomeView
    },
    data(){
      return{

      }
    }
      
  }
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;0,800;1,300;1,500&display=swap');
  /* @import url('https://fonts.googleapis.com/css2?family=Sofia&display=swap'); */
  @import "./style.css";

#app{
 font-family: 'Work Sans', sans-serif;
 /* font-family:'Sofia'; */
  /* -webkit-font-smoothing: antialiased; */
  /* moz-osx-font-smoothing: grayscale; */      
}


</style>