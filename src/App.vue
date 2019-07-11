<template>
  <div id="app" class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar class="md-large md-dense">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
           

          <span><img alt="eHealth4everyone" src="//ehealth4everyone.com/wp-content/uploads/2015/08/ehealth_teal_green_70px.png"></span>
          </div>

          
        </div>

        <div class="md-toolbar-row">
          <md-tabs md-sync-route class="md-transparent">
            <md-tab to="/home" id="tab-home" class="md-button" md-label="Home"></md-tab>
            <md-tab to="/GuestForm" id="tab-form" md-label="add guest"></md-tab>
            <md-tab to="/GuestTable" id="tab-table" md-label="Manage guests"></md-tab>
          </md-tabs>
   
          <md-button v-if="isAuthenticated"  @click.prevent="logout" class="md-raised md-accent">Logout</md-button>

        </div>
        

      </md-app-toolbar>

      <md-app-content>
      <md-progress-bar v-show="loggingIn" md-mode="indeterminate" />
      
        <router-view   
          @add:guest="addGuest"
          @delete:guest="deleteGuest"
          @edit:guest="editGuest"
          v-bind:guests="guests" 
        >
        </router-view>

      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import GuestTable from './components/GuestTable.vue'
import GuestForm from './components/GuestForm.vue'
import Welcome from "./components/Welcome.vue"

export default {
  name: 'app',
  components: {
    GuestTable,
    GuestForm,
    Welcome,
  },
  data() {
    return {
      guests: [
        {
          id: 1,
          name: 'Fiona Gallagher',
          email: 'lifeoffiona@gmail.com',
          address: '57 ring road, south-side chigago',
          comment: 'complaints about previous service',
        },        
        {
          id: 2,
          name: 'David Stone',
          email: 'dstone@yahoo.com',
          address: '24 esasthill drive, manson',
          comment: 'business man'
        },
        {
          id: 3,
          name: 'Sammuel Ofordili',
          email: 'Sammy@gmail.com',
          address: 'behind bosso market, minna',
          comment: 'here to make enquiries about employment'
        },       

      ],
      isAuthenticated: false,
      loggingIn: false
      };
      
    },

async created() {
    try {
      await this.$auth.renewTokens();
    } catch (e) {
      console.log(e);
    }
  },

    methods: {
      addGuest(guest) {

        //testing the arrival of new guest 
        console.log(guest.name)
        
        const lastId = this.guests.length > 0 ? this.guests [this.guests.length -1].id : 0;
        const id = lastId + 1;
        const newGuest = {
          name: guest.name,
          email: guest.email,
          address: guest.address,
          comment: guest.comment,
          id: id
        };

        //testing the assignment of new id
        console.log(newGuest.id)

        this.guests.push(newGuest);
      },
      deleteGuest(id) {
        this.guests=this.guests.filter(
          guest => guest.id !==id
        )
      },
      editGuest(id, updatedGuest) {
          this.guests = this.guests.map(guest => guest.id === id ? updatedGuest : guest)
      },

      //authentication methods
    login() {
      this.$auth.login();
    },
    logout() {
      this.loggingIn=true;
      this.$auth.logOut();
    },
    handleLoginEvent(data) {
      this.isAuthenticated = data.loggedIn;
      this.profile = data.profile;
    }
    },
  }

</script>

<style lang="scss" scoped>
  .md-toolbar-row {
    margin-top: 24px;
  }
  .md-app-content {
    margin-top: 24px;
  }
</style>