<template>
  <div id="app" class="small-container">

    <Reveal/>

    <guest-form 
    @add:guest="addGuest"
    />
  
    <guest-table
    @delete:guest="deleteGuest"
    @edit:guest="editGuest"
    v-bind:guests="guests" 
    />


  </div>
</template>

<script>
import GuestTable from './components/GuestTable.vue'
import GuestForm from './components/GuestForm.vue'
import Reveal from "./components/Reveal.vue";

export default {
  name: 'app',
  components: {
    GuestTable,
    GuestForm,
    Reveal,
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
