<template>
  <div id="app" class="small-container">
    <guest-form @add:guest="addGuest"/>
    <h1>Guests</h1>
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

export default {
  name: 'app',
  components: {
    GuestTable,
    GuestForm,
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
      editGuest(id) {
          
      },
    },
  }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  background: #00935;
  border: 1px solid #009435;
}

.small-container {
  max-width:680px;
}
</style>
