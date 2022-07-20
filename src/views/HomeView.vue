<template>
  <Navbar />
  <div class="hero">
    <div class="hero-3">
    <h4>Online Organic groceries</h4>
    <p>Your Favourite Food Delivered hot and Fresh</p>
    <p>On all Food items</p>
    <p>Helps You With the right Balanced Diet</p>
    <button>Shop Now</button>
    </div>
    <div class="side-view">
      <img src="../assets/crispy-kale-caesar-salad.jpg" alt="">
    </div>
  </div>

  <Dish />
  <productlist />
  <productifle />
  <Footer />
  <!-- <Checkout /> -->
  <!-- <Cart /> -->
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import Dish from '@/components/Dish'
import Productlist from '@/components/Productlist'
import Productifle from "@/components/Productifle"
import Footer from '@/components/Footer'
// import Checkout from "@/components/Checkout"
// import Cart from '@/views/Cart'
export default {
    name: 'HomeView',
    components:{
      Navbar,
      Dish,
      Productlist,
      Productifle,
      Footer,
        // Checkout,
        // Cart
    },
    data(){
      return{
       
      }
    }
}
</script>

<style scoped>
.hero{

  width: 100%;
  background-size: cover;
  background-position: top 25% right 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(20, 18, 18);
  overflow: hidden;
}
.hero-3{
padding: 0 60px;
}
.side-view img{
  width: 100%;
  background-size: cover;
  background-position: top 25% right 20%;
  height: 91vh;
  object-fit: cover;
}
.hero h4{
  padding-bottom: 15px;
  font-size: 60px;
}
.hero h2{
padding-bottom: 41px;
font-size: 17px;
}
.hero h1{
  font-size: 25px;
}
.hero p{
  font-size:18px;
}
.hero button{
background-color:#157347;
color:whitesmoke;
border: 0;
padding: 11px 13px;
border-radius: 42px 42px 42px 42px;
background-repeat:no-repeat;
cursor: pointer;
font-weight: 700;
font-size: 20px;
}
/* mobile responsiveness */
@media (max-width:799px) {
  .hero{
    display:flex;
    flex-direction: column;
    padding:0px 0px;
  }
  .hero-3{
padding-left: 81px;
width:50%;
}
.side-view{
  width:50%;
}
.side-view img{
  height: 21vh;
}
.hero h4{
  font-size:39px;
}
}
</style>
