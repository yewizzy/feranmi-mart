<template>
  <header class="navbar">
    <div class="container">
      <p>Feranmi Mart</p>
      <div class="right-nav">
        <div class="d-none d-md-none d-lg-block">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/shop">Shop</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contactus">Contact Us</router-link></li>
          </ul>
        </div>
       
        <button type="button" class="btn position-relative p-1 d-none d-md-none d-lg-block">
           <i
          class="material-icons"
          @click="addToCart()"
          >local_grocery_store</i
        >
          <span
            class="
              position-absolute
              top-0
              start-100
              translate-middle
              badge
              rounded-pill
              bg-danger
            "
          >
            {{ totalItems }}
          </span>
        </button>

        <div class="d-block d-md-block d-lg-none">
          <button type="button" class="btn position-relative p-1">
           <i
          class="material-icons"
          @click="addToCart()"
          >local_grocery_store</i
        >
          <span
            class="
              position-absolute
              top-0
              start-100
              translate-middle
              badge
              rounded-pill
              bg-danger
            "
          >
            {{ totalItems }}
          </span>
        </button>
          <i class="material-icons menu" @click="showNav">menu</i>
        </div>
      </div>
    </div>
    <transition name="toogle">
      <div class="mobile-navbar container d-lg-none" v-if="navBar">
        <ul>
          <li><font-awesome-icon icon="fa-solid fa-house" />Home</li>
          <li><font-awesome-icon icon="fa-solid fa-bag-shopping" /> Shop</li>
          <li><font-awesome-icon icon="fa-solid fa-blog" /> Blog</li>
          <li><font-awesome-icon icon="fa-solid fa-people-group" /> About</li>
          <li>
            <font-awesome-icon icon="fa-solid fa-address-book" /> Contact Us
          </li>
        </ul>
      </div>
    </transition>

  </header>
</template>

<script>
export default {
  data() {
    return {
      navBar: false,
    };
  },
  methods: {
    showNav() {
      this.navBar = !this.navBar;
    },
    addToCart() {
      this.$store.dispatch("addProductToCart");
    },
  },
  computed: {
    totalItems () {
      return JSON.parse(localStorage.getItem('product')).length
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
ul {
  list-style: none;
  font-size: 17px;
  display: flex;
  gap: 2rem;
}
p {
  font-size: 17px;
}
ul li a {
  text-decoration: none;
}
.navbar {
  width: 100%;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  position: fixed;
  z-index: 1;
  height: 76px;
  align-content: end;
}
.navbar > div:first-child {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.right-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
}
.right-nav i {
  font: size 17px;
}
.menu {
  margin-left: 20px;
}

/* mobile section */

.mobile-nav {
  display: none;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 90%;
}
.mobile-res {
  display: none;
  gap: 2rem;
}
.mobile-navbar ul {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.toogle-enter-from {
  opacity: 0;
}
.toogle-enter-to {
  opacity: 1;
}
.toogle-enter-active {
  transition: all 0.4s ease;
}
.toogle-leave-from {
  opacity: 1;
}
.toogle-leave-to {
  opacity: 0;
}
.toogle-leave-active {
  transition: all 0.4s ease;
}

/* media query */
@media (max-width: 799px) {
}

@media (min-width: 992px) {
}
@media (max-width: 991px) {
  .mobile-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    background: #e3e6f3;
  }
  .mobile-res {
    display: flex;
    gap: 2rem;
  }
  .mobile-res i {
    color: #1a1a;
    font-size: 24px;
    padding-left: 20px;
  }
  .mobile-res.active {
    right: 0px;
  }
  .mobile-navbar ul {
    background-color: white;
    width: 100%;
    margin-top: 30px;
    z-index: 1;
    padding: 0;
  }
}
</style>
