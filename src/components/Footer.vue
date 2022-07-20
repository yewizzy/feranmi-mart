<template>
  <footer>
    <div class="col">
        <img class="logo" src="../assets/logo.png">
        <h4>Contact</h4>
        <p><strong>Address:</strong> 4B Education Close,Unilag Estate Isheri olowora</p>
        <p><strong>Phone:</strong> +2349084561758 /(+12) 012345</p>
        <p><strong>Hours:</strong>10:00- 18:00, Mon-Sat</p>
        <div class="follow">
            <h4>Follow us</h4>
            <div class="icon">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-pinterest"></i>
                <i class="fab fa-youtube"></i>
            </div>
        </div>
    </div>
    <div class="col">
        <h4>About</h4>
        <a href="">About us</a>
        <a href="">Delivery Information</a>
        <a href="">Privacy Policy</a>
        <a href="">Terms & Conditions</a>
        <a href="">Contact us</a>
    </div>
    <div class="col">
        <h4>My Account</h4>
        <a href="">Sign In</a>
        <a href="">View Cart</a>
        <a href="">My Wishlist</a>
        <a href="">Track My Order</a>
        <a href="">Help</a>
    </div>

    <div class="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div class="row">
            <img src="" alt="">
            <img src="" alt="">
        </div>
        <p>Secure Payment Gateways</p>
        <img src="" alt="">
    </div>

    <div class="copyright">
     <p>@2022, Feranmi Mart</p>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scope>
footer{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
footer .col{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
}
footer .logo{
    margin-bottom: 30px;
}


</style>