<template>
  <header>
    <div  class="navbar">
      <p>Feranmi Mart</p>
      <div class="right-nav">
         <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Shop</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact Us</a></li>
      </ul>
      <i class="material-icons">local_grocery_store</i>
      </div>
    </div>
      <div class="mobile-nav">
      <p>Feranmi Mart</p>
      <div class="mobile-res">
      <i class="material-icons">local_grocery_store</i>
      <i class="material-icons" @click="showNav">menu</i>

      </div>
      </div>

  </header>

   <div  class="mobile-navbar" v-if="navBar">
         <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>

  
  
</template>

<script>
export default {

  data(){
    return{
      navBar:false
    }
  },
  methods: {
    showNav() {
      this.navBar = !this.navBar
    }
  }

}
</script>

<style scoped>
*{
padding: 0;
margin:0;
box-sizing: border-box;
}
ul{
  list-style:none;
  font-size: 17px;
  display: flex;
  gap: 2rem;
  
}
p{
  font-size: 17px;
}
ul li a{
  text-decoration: none;
}
.navbar{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 69px;
  width: 100%;
  background: #E3E6F3;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06) ;
}
.right-nav{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
}
.right-nav i{
  font: size 17px; ;

}


/* mobile section */

.mobile-nav{
  display: none;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 90%;
}
.mobile-res{
  display:none;
  gap:2rem;
}
.mobile-navbar ul {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border: solid red;
}


/* media query */
@media (max-width:799px) {
  .navbar{
    display: none;
  }
  .mobile-nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  background: #E3E6F3;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06) ;
  position: fixed;
  height:20px;
  transition:0.3s ;
}
.mobile-res{
  display:flex;
  gap:2rem;
}
.mobile-res i{
  color: #1a1a;
  font-size:24px;
  padding-left: 20px;
}
.mobile-res.active{
  right:0px;
}
}
</style>
