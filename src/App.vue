<template>
  <div id="app" class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar class="md-large md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
           

            <span class="md-title">My Title</span>
          </div>

          
        </div>

        <div class="md-toolbar-row">
          <md-tabs class="md-primary">
            <md-tab id="tab-home" md-label="Home"> </md-tab>
            <md-tab id="tab-favorites" md-label="Add Guest" to="/GuestForm"></md-tab>
            <md-tab id="tab-posts" md-label="Manage Guests" to="/GuestTable"></md-tab>
            <md-tab id="tab-pages" md-label="Pages" to="/Reveal" ></md-tab>
          </md-tabs>
        </div>
      </md-app-toolbar>

      <md-app-content>
      
    
        <temp
          @add:guest="addGuest"
        />
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
import Reveal from "./components/Reveal.vue"
import Welcome from "./components/Welcome.vue"
import temp from "./components/temp.vue"

export default {
  name: 'app',
  components: {
    GuestTable,
    GuestForm,
    Reveal,
    Welcome,
    temp,
  },
  data() {
    return {
      guests: [
        {
          id: 1,
          name: 'ddd',
          email: 'dfdgdg',
          address: 'dddf',
          comment: 'dfg'
        },
        {
          id: 2,
          name: 'Sammuel Ofordili',
          email: 'Sammy@gmail.o',
          address: 'dff',
          comment: 'dgggg'
        },       
      ],
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
    },
  }

</script>

<style>
  

</style>
