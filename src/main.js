import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"




/* add fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


/* add specific icon styles */
import { faInstagram, faTwitter,faPinterest, faSquareYoutube} from '@fortawesome/free-brands-svg-icons'
import { faUserSecret, faHouse, faBagShopping, faBlog, faPeopleGroup, faAddressBook, faStar, faBell, faCalendar, faWallet, faUserPlus, faCopyright} from '@fortawesome/free-solid-svg-icons'



/* add each imported icon to the library */
library.add( faUserSecret, faHouse, faBagShopping, faBlog, faPeopleGroup, faAddressBook, faTwitter, faInstagram, faPinterest, faSquareYoutube, faStar, faBell, faCalendar, faWallet, faUserPlus, faCopyright)




createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(store)
.use(router)
.mount('#app')

// import "bootstrap/dist/js/boostrap.js"

