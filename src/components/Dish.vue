<template>
<section class="product1 container">
  <h2>Dish Of the day</h2>
  <p>Nutriously cooked with healthy natural spice</p>
  <div class="cards container">
    <div  v-for="(Recipe, index) in Recipes" :key="index" class="card">
      <img :src="Recipe.image" class="images">
       <div class="card-content">
        <p class="tribe">{{Recipe.tribe}}</p>
        <p class="food">{{Recipe.food}}</p>
        <div class="rev">
          <span v-for="(star, index) in Recipe.star" :key="index" class="star" ><font-awesome-icon icon="fa-solid fa-star" /></span>
        </div>
        <div class="card-info">
        <h5 class="price">&#8358;{{Recipe.price}}</h5>
        <i class="material-icons c-pointer" @click="addToCart(Recipe)">local_grocery_store</i>
      </div>
       </div>
    </div>

  
  </div>
  </section>

</template>





<script>
export default {
  name:'Dish',
  data(){
    return{
      selectedItems: [],
      Recipes:[
        {image: require('../assets/Brown-eggs.jpg'),tribe:'Northern dish', food:'Moimoi', star: 2, price: '4500',shop:''},
        {image: require('../assets/eat-2834549__480.jpg'), tribe:'Northern dish',food:'Ikokore', star:3, price: '2000',shop:''},
        {image: require('../assets/colourful.jpg'), tribe:'Northern dish',food:'Akara', star:3, price: '1500',shop:''},
        {image: require('../assets/Brown-eggs.jpg'),tribe:'Northern dish', food:'Ikokore', star:'3', price: '2000',shop:''},
        {image: require('../assets/Brown-eggs.jpg'),tribe:'Northern dish', food:'Ikokore', star:'star', price: '2000',shop:''},
        {image: require('../assets/Brown-eggs.jpg'),tribe:'Northern dish', food:'Ikokore', star:'star', price: '2000',shop:''},
         {image: require('../assets/Brown-eggs.jpg'),tribe:'Northern dish', food:'Ikokore', star:'star', price: '2000',shop:''},
        {image: require('../assets/Brown-eggs.jpg'),tribe:'Northern dish', food:'Ikokore', star:'star', price: '2000',shop:''},
        {image: require('../assets/Brown-eggs.jpg'),tribe:'Northern dish', food:'Ikokore', star:'star', price: '2000',shop:''},
        {image: require('../assets/Brown-eggs.jpg'),tribe:'Northern dish', food:'Ikokore', star:'star', price: '2000',shop:''},
        {image: require('../assets/Brown-eggs.jpg'),tribe:'Northern dish', food:'Ikokore', star:'star', price: '2000',shop:''},
        {image: require('../assets/Brown-eggs.jpg'),tribe:'Northern dish', food:'Ikokore', star:'star', price: '2000',shop:''}
        
      ],     
    }
  },
  methods: {
    addToCart (recipe){
      // this.$store.dispatch( 'addRecipeToCart', {
      //   recipe:this.recipe,
      //   quantity:1
      // })
      // Route / Navigation Guard
    
      this.selectedItems.push(recipe)
      const value = JSON.stringify(this.selectedItems)
      localStorage.setItem('product', value)
    }
  }
   
}
</script>

<style scoped>

.cards{
  margin: 0 auto;
  max-width:1000px;
  display: grid;
  grid-template-columns: repeat(4, 1fr );
  padding:15px;
  border-radius: 20px 20px 0px 0px;
  gap: 20px;
  
}
.card{
  
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  border-radius:  0px 0px 20px 20px;
}
.images{
  height: 30vh;
}
.card img {
  width:100%;
  display:block;
  object-fit:cover;
  /* border-radius: 20px 20px 0px 0px; */
}
 .card-info{
  /* padding:15px; */
  display:flex;
  justify-content: space-between;
  font-size: 14px;
  align-items: center;
  border-radius: 0px 0px 20px 20px;
  background-color: #eeeeee9e;
 }
  .card-info i {
    display:flex;
    color:green;
    margin-right:8px;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background-color: #e8f6ae;
    color: #088178;
   justify-content: center;
   align-items: center;
  }
  .tribe, .food, .rev, .price {
    padding: 0px 10px;
  }
  
  .card-content{
    border-radius: 0px 0px 20px 20px;
    /* background-color: red; */
  }
@media (min-width: 992px){
.cards{ 
  display: grid;
  grid-template-columns: repeat(4, 1fr );
 }
}
@media (min-width: 768px) and (max-width: 991px){
.cards{ 
  display: grid;
  grid-template-columns: repeat(3, 1fr );
 }
 .product1 h2 {
  text-align: center;
}
.product1 p{
  text-align: center;
}
}
@media (max-width:767px){
 .cards{ 
  display: grid;
  grid-template-columns: repeat(2, 1fr );
 }
}
@media (max-width:567px) {
  .cards{
  display: grid;
  grid-template-columns: 1fr;
  padding:15px;
  gap: 20px;
  
}
}
</style>