<template>
  <div>
    <Navbar />
    <div class="hero container">
      <div class="hero-3">
        <h4>Online organic groceries</h4>
        <p>Your favourite food delivered hot <br>and fresh
            on all food<br> items
            helps you With the right balanced diet
        </p>
        <button>Shop Now</button>
      </div>
      <div class="side-view">
        <img src="../assets/crispy-kale-caesar-salad.jpg" alt="" />
      </div>
    </div>

    <Dish />
    <Productlist />
    <Productifle />
  
    <!-- <Footer /> -->
    <!-- <login />  -->
  
    <!-- <Memberly /> -->

    <!-- <Checkout /> -->
    <!-- <Cart /> -->
 </div>                                                                                                                                                                                                               

</template>

// <script>
import Navbar from "@/components/Navbar.vue";
import Dish from "@/components/Dish";
import Productlist from "@/components/Productlist";
import Productifle from "@/components/Productifle";

// import Footer from "@/components/Footer";
// import login from "@/components/Login"
// import Checkout from "@/components/Checkout"
// import Cart from '@/views/Cart'
export default {
  name: "HomeView",
  components: {
    Navbar,
    Dish,
    Productlist,
    Productifle,

    // Footer,
    // login,
     

    // Checkout,
    // Cart
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.body {
  border: 5px solid blue;
}

.hero {
  width: 100%;
  background-size: cover;
  background-position: top 25% right 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgb(20, 18, 18);
  overflow: hidden;
}
.hero-3 {
  /* padding: 0 60px; */
}
.side-view img {
  width: 400px;
  background-size: cover;
  background-position: top 25% right 20%;
  height: 91vh;
  object-fit: cover;
}
.hero h4 {
  /* padding-bottom: 15px; */
  margin-bottom: 20px;
  font-size: 50px;
}
.hero h2 {
  padding-bottom: 41px;
  font-size: 17px;
}
.hero h1 {
  font-size: 25px;
}
.hero p {
  font-size: 18px;
  margin-bottom: 20px;
  font-weight:400

}
.hero button {
  background-color: #157347;
  color: whitesmoke;
  border: 0;
  padding: 11px 13px;
  border-radius: 42px 42px 42px 42px;
  background-repeat: no-repeat;
  cursor: pointer;
  font-weight: 700;
  font-size: 20px;
}
.nav{
  display: flex;
  justify-content: space-between;
}

.register{
  display:flex;
  padding: 88px;
  align-content:center;
  justify-content: center;

}
.button1 {
  display:flex;
  background-color: #E6FFF8;
  color: rgb(24, 91, 24);
border: 1px solid green;
  padding: 28px 33px 24px 35px;
  border-radius: 24px 0px 2px 24px;
  cursor: pointer;
  font-weight: 700;
  font-size: 20px;
  margin-right: 15px;
}
.button2 {
  display:flex;
  background-color: #E6FFF8;
  color: rgb(24, 91, 24);
  border: 1px solid green;
  padding: 28px 33px 24px 35px;
  border-radius: 0px 24px 24px 2px;
  cursor: pointer;
  font-weight: 700;
  font-size: 20px;
}
/* mobile responsiveness */

@media (min-width: 992px){

}
@media (min-width: 768px) and (max-width: 991px){

}
@media (max-width:991px){
.hero {
    display: flex;
    flex-direction: column;
    padding: 0px 0px;
  }
  .hero-3 {
    /* padding-left: 81px; */
    width: 100%;
  }
  .side-view {
    width: 100%;
  }
  .side-view img {
    height: 37vh;
    width: 100%;
    background-size: cover;
    background-position: top 25% right 20%;
    object-fit: cover;
    margin-top:30px;
  }
  .hero h4 {
    font-size: 39px;
    margin-top: 100px;
  }
  .hero button {
    padding: 7px 11px;
    border-radius: 42px 42px 42px 42px;
    font-size: 20px;
  }
}
</style>
