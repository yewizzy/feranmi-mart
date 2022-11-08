<template>
<div class="controller">
  <div class="row  card-holder">
    <div class="text-center mb-2 pt-4">
            <h1>Sign Up</h1>
    </div>

    <form @submit.prevent="signup" class=" login-form">
        <div class="row">
            <div class=" d-flex col-md-12 text-center details-1">
                <label >First name</label>
                <input type="text" class="form-control form-control-lg" placeholder="">

                <label for="">Surname </label>
                <input type="text" class="form-control form-control-lg" placeholder="">
            </div>
            <div class=" d-flex col-md-12 text-center details-2">
                <label >Phone no:</label>
                <input type="text" class="form-control form-control-lg" placeholder="">

                <label for="">Gender </label>
                <select name="sex" id="sex">
                    <option value="male">Male</option>
                    <option value="female">female</option>
                </select>
            </div>

            <div class="col-sm-12 form-group">
                <label for="email">Email address</label>
                <input type="email" name="email" class="form-control form-control-lg" v-model="email">
            </div>

            <div class="col-sm-12 form-group">
                <label for="password">Password</label>
                <input type="password" name="password" class="form-control form-control-lg" v-model="password">
            </div>

             <div class="col-sm-6 form-register d-flex justify-content-center p-2">
                <button class="btn btn-primary btn-lg col-sm-4">Register</button>
            </div> 
            <!--  -->


        </div>
    </form>
  </div>
  </div>
</template>

<script>
// import slugify from 'slugify'
// import db from '@firebase/init'
// import { auth } from 'firebase/app';
import db from '../firebase/firebase'
import * as firebase from 'firebase'
export default {
data(){
    return{
        email: null,
        password: null,
    };
    
    },

methods:{
    signup(){
        console.log(db)
     firebase.default.auth().createUserWithEmailAndPassword(this.email, this.password).then (res=> {
        console.log(res)
        console.log(this.email, this.password)
     })
    }
}
  }

</script>

<style scoped>
.controller{
    background-color: #627D88;
    /* height:100vh; */
}
.card-holder{
    width:60%;
    margin: 0 auto;
    border: 3px solid whitesmoke;
     border-radius: 0px 0px 20px 20px;
     height:80vh;
    
}

</style>