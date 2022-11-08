<template>
<div class="login py-5 bg-light">
  <div class="container">
    <div class="row g-0">
      <div class="col-lg-5 shop">
        <img src="../assets/shoppingstore.png" class="img-fluid">
      </div>

      <div class="col-lg-7 text-center py-5 signin">
      <h1 >LOGIN</h1>
      
        <form  @submit.prevent="login">
      <div class="form-row py-3 pt-5">
        <div class="offset-1 col-lg-10">
       <!-- <label for="exampleInputEmail">Email Address</label> -->
      <input type="email"  class="inp px-3" placeholder="Email" v-model="email" >
      </div>
      </div>

      <div class="form-row py-3 pt-5">
        <div class="offset-1 col-lg-10">
       <!-- <label for="exampleInputPassword">Password</label> -->
      <input type="password"  class="inp px-3" placeholder="Password" v-model="password" >
      </div>
      </div>

      <div class="form-row py-3 ">
        <div class="offset-1 col-lg-10">
      <button type="submit" class="btn btn-primary btn-block">Sign In</button>
        </div>
       </div>
      <div class="form-row py-3 pt-5">
        <div class="offset-1 col-lg-10">
            <a href="#">Forgot Password</a>
        </div>
        </div>
      <div class="form-row py-3 pt-5">
        <div class="offset-1 col-lg-10">
        Don't have an account?<a><router-link to="/login">Signup</router-link></a>
      </div>
      </div>
      
    </form>
    </div>


 
  </div>
  </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.row{
  background: white;
  border-radius: 30px;
  /* width:50%; */
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
}
.shop img{
  border-top-left-radius:30px ;
  border-bottom-left-radius: 30px;
}
.signin h1{
  font-size: 30px;
  font-weight: 800;
}
  
  input[type="email"],
  input[type="password"] {
    height: 50px;
    width: 70%;
    outline:none;
    border: none;
    border-radius:60px ;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    /* background: azure;
    border: 2px solid #0db8de;
    margin-bottom: 25px; */
  }
  
  .card-title{
    font-weight: 900;
    padding-top: 20px;
  }
  .btn{
    background: #0db8de !important;
    font-size: 14px;
    width: 50%;
    height: 80%;
    border: none;
    outline: none;
    border-radius: 60px;
    font-weight: 600;
    text-align: center;

  }
  .signup{
    text-align: center;
    padding-top: 25px;
  }

</style>