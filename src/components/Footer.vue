<template>
  
    <div class="container">
        <img class="logo" src="../assets/orangy.jpg">
        <h4>Contact</h4>
        <p><strong>Address:</strong> 4B Education Close,Unilag Estate Isheri olowora</p>
        <p><strong>Phone:</strong> +2349084561758 /(+12) 012345</p>
        <p><strong>Hours:</strong>10:00- 18:00, Mon-Sat</p>
        <div class="follow">
            <h4>Follow us</h4>
                <ul>
                 <li> <font-awesome-icon icon="fa-brands fa-square-facebook" />facebook</li>
                  <li> <font-awesome-icon icon="fa-brands fa-twitter" /></li>
                 <li> <font-awesome-icon icon="fa-brands fa-instagram" /> </li>
                <li> <font-awesome-icon icon="fa-brands fa-pinterest-p" /></li>
                 <li><font-awesome-icon icon="fa-brands fa-square-youtube" /> Youtube</li>
                </ul>
            </div>

    </div>
    
</template>

<script>
// import {ref} from "vue"
export default {
//  setup(){
//       const showP =ref(false)
//       return{
//         showP
//       }
//     }
}
</script>

<style scope>
.footer{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.footer .col{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
}
.footer .logo{
    margin-bottom: 30px;
}
.follow h4{
    font-size: 14px;
    padding-bottom:20px;
}
.follow p{
    font-size: 13px;
    margin:0 0 8px 0;
}
.followa {
    font-size: 13px;
    text-decoration: none;
    margin: 0 0 8px 0;
    color:black;
}

</style>