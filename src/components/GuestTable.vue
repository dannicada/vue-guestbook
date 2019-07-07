<template>
<div id = "guest-table">
<p v-if="guests.length < 1" class="empty-table">
    no guests
</p>
<md-table md-card  v-else>
    <md-table-toolbar>
        <h1 class="md-title">Guests</h1>
    </md-table-toolbar>

    <md-table-row>
    <md-table-head md-numeric>ID</md-table-head>
    <md-table-head>Name</md-table-head>
    <md-table-head>Email</md-table-head>
    <md-table-head>Address</md-table-head>
    <md-table-head>Comment</md-table-head>
    <md-table-head>Actions</md-table-head>
    </md-table-row>

      <md-table-row v-for="guest in guests" :key="guest.id">
            <md-table-cell md-numeric>{{guest.id}}</md-table-cell>

            <md-table-cell v-if="editing === guest.id">
                <md-field>
                    <md-input type="text" v-model="guest.name"/>
                </md-field>
            </md-table-cell>
            <md-table-cell v-else>{{guest.name}}</md-table-cell>

            <md-table-cell v-if="editing === guest.id">
                <md-field>
                    <md-input type="email" v-model="guest.email"/>
                </md-field>            
            </md-table-cell>
            <md-table-cell v-else>{{guest.email}}</md-table-cell>
            
            <md-table-cell v-if="editing === guest.id">
                <md-field>
                    <md-input type="text" v-model="guest.address"/>
                </md-field>            
            </md-table-cell>
            <md-table-cell v-else>{{guest.address}}</md-table-cell>

            <md-table-cell v-if="editing === guest.id">
                <md-field>
                    <md-input type="text" v-model="guest.comment"/>
                </md-field>            
            </md-table-cell>
            <md-table-cell v-else>{{guest.comment}}</md-table-cell>

            <md-table-cell v-if="editing === guest.id">
            <md-button v-on:click="editGuest(guest)"  class="md-fab md-mini md-plain">
                <md-icon>save</md-icon>
                </md-button>
                
                <md-button v-on:click="cancelEdit(guest)" class="md-fab md-mini md-plain">
                <md-icon>cancel</md-icon>
                </md-button>
            </md-table-cell>
            <md-table-cell v-else>
                <md-button v-on:click="editMode(guest)" :disabled="editing" class="md-fab md-mini md-plain">
                <md-icon>edit</md-icon>
                </md-button>
                <md-button v-on:click="$emit('delete:guest', guest.id)" :disabled="editing" class="md-fab md-mini md-plain">
                <md-icon> delete </md-icon>
                </md-button>
            </md-table-cell>
      </md-table-row>
    
     
   
</md-table md-card>
</div>
</template>

<script>
export default {
    name: 'guest-table',
    props: {
        guests: Array,
    },
    data() {
        return {
            editing: null,
        }
    },
    methods: {
        editMode(guest) {
            this.cachedGuest = Object.assign({}, guest)
            this.editing = guest.id
        },

        cancelEdit(guest) {
            Object.assign(guest,this.cachedGuest)
            this.editing = null;
        },

        editGuest(guest) {
            if (guest.name === '' || guest.email === '' || guest.address === '' || guest.comment === ''){ 
            return
            }

            this.$emit('edit:guest',guest.id, guest)
            this.editing = null
        },
    },
}
</script>

<style lang="scss" scoped>

  
</style>
    </style>