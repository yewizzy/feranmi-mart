<template>
<section class="product1">
  <h2>Dish Of the day</h2>
  <p>Nutriously cooked with healthy natural spice</p>
  <div class="pro-container">
    <div  v-for="(Recipe , index) in Recipes" :key="index" class="pro">
      <img :src="Recipe.image">
      <div class="des">
        <span class="tribe">{{Recipe.tribe}}</span>
        <h5 class="food">{{Recipe.food}}</h5>
        <div class="rev">
          <i class="star">{{Recipe.star}} </i>
        </div>
        <h4 class="price">&#8358;{{Recipe.price}}</h4>
      </div>
      <a href=""><i class="shop"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
         <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg></i></a>
    </div>

<!-- <img src="../assets/colourful.jpg" alt=""> -->

  </div>
  </section>
</template>





<script>
export default {
  name:'Dish',
  data(){
    return{
      Recipes:[
        {image: require('../assets/Brown-eggs.jpg'),tribe:'Northern dish', food:'Ikokore', star:'star', price: '2000',shop:''},
        {image: require('../assets/eat-2834549__480.jpg'), tribe:'Northern dish',food:'Ikokore', star:'star', price: '2000',shop:''},
        {image: require('../assets/colourful.jpg'), tribe:'Northern dish',food:'Ikokore', star:'star', price: '2000',shop:''},
        {image: require('../assets/Brown-eggs.jpg'),tribe:'Northern dish', food:'Ikokore', star:'star', price: '2000',shop:''},
        {image: require('../assets/Brown-eggs.jpg'),tribe:'Northern dish', food:'Ikokore', star:'star', price: '2000',shop:''},
        {image: require('../assets/Brown-eggs.jpg'),tribe:'Northern dish', food:'Ikokore', star:'star', price: '2000',shop:''},
         {image: require('../assets/Brown-eggs.jpg'),tribe:'Northern dish', food:'Ikokore', star:'star', price: '2000',shop:''},
        {image: require('../assets/Brown-eggs.jpg'),tribe:'Northern dish', food:'Ikokore', star:'star', price: '2000',shop:''},
        {image: require('../assets/Brown-eggs.jpg'),tribe:'Northern dish', food:'Ikokore', star:'star', price: '2000',shop:''},
        {image: require('../assets/Brown-eggs.jpg'),tribe:'Northern dish', food:'Ikokore', star:'star', price: '2000',shop:''},
        {image: require('../assets/Brown-eggs.jpg'),tribe:'Northern dish', food:'Ikokore', star:'star', price: '2000',shop:''},
        {image: require('../assets/Brown-eggs.jpg'),tribe:'Northern dish', food:'Ikokore', star:'star', price: '2000',shop:''}

        

      ]
    }
  }
}
</script>

<style>
.product1{
  text-align: center;
  padding:  040px;
}
.product1 .pro{
  width: 23%;
  min-width: 250px;
  padding: 0 12px;
  border: 1px solid #cce7d0;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.02);
  margin:15px 0;
  transition: 0.2s ease;
  position: relative;
}
.product1 .pro:hover{
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.06);

}
.product1 .pro img{
  width: 100%;
  border-radius: 20px;
}
.product1 .pro .des{
  text-align: start;
  padding:10px 0;
}
.product1 .pro .des span{
  color: #0606;
  font-size: 12px;
}
.product1 .pro .des h5{
  padding: 7px;
  color: #1a1a1a;
  font-size: 14px;
}
.product1 h2{
  padding: 7px;
  color: #1a1a1a;
  font-size: 25px;
}
.product1 p{
  font-size: 17px;
}
.product1 .pro .des i{
  font-size: 12px;
  color:rgba(243, 181, 25) ;
}
.product1 .pro .des h4{
  padding-top: 7px;
  font-size: 15px;
  font-weight: 700;
  color: #088178;
}
.product1 .pro .shop{
  width: 40px;
  height: 40px;
  line-height:40px;
  border-radius: 50px;
  background-color: #e8f6ae;
  font-weight:500;
  color: #088178;
  border: 1px solid #cce7d0;
  position: absolute;
  bottom: 20px;
  right: 10px;
}
.product1 .pro-container{
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  flex-wrap: wrap;
}
@media (max-width:799px){
  .product1 .pro-container{
    display: flex;
  justify-content: center;
  padding-top: 20px;
  flex-wrap: wrap;
  }
}
</style>