<template>
  <div id="app">
    <!-- <h1>{{title}}</h1> -->
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
#app{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  /* moz-osx-font-smoothing: grayscale; */

}
</style>