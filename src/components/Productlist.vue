<template>
  <section class="banner">
    <h4>Your Favourite Food Items Mart</h4>
    <h2>Save <span>70% off</span> - Buying at suppliers Price</h2>
    <button>Shop Now</button>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.banner{
  margin:40px 0;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url('../assets/food\ items.jpg');
  width:100%;
  height: 40vh;
  background-size:cover;
  background-position: center;
}
.banner h4{
  color: #fff;
  font-size: 35px;
}
.banner h2{
  color:rgb(211, 17, 17);
  font-size: 45px;
  padding: 10px 0;
}
.banner button{
  background-color: azure;
  color:#088178;
  border: 0;
  padding: 12px 80px 14px 65px;
  border-radius: 24px 24px 24px 24px;
  background-repeat:no-repeat;
  cursor: pointer;
  font-weight: 700;
  font-size: 20px;
  transition: 0.2s;
}
.banner button:hover{
  background: #088178;
  color: #fff;
}




@media (max-width:799px){
  .banner button{
    margin-bottom: 50px;
  }
}

</style>