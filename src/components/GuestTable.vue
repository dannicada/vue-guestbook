<template>
<div id = "guest-table">
<p v-if="guests.length < 1" class="empty-table">
    no guests
</p>
<table v-else>
    <thead>
        <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Address</th>
        <th>Comment</th>
        <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="guest in guests" :key="guest.id">

        <td v-if="editing === guest.id">
            <input type = "text" v-model="guest.name"/>
        <td v-else>{{ guest.name }}</td>

        <td v-if="editing === guest.id">
            <input type = "text" v-model="guest.email"/>
        </td>
        <td v-else>{{guest.email}}</td>

        <td v-if="editing === guest.id">
            <input type = "text" v-model="guest.address"/>
        </td>
        <td v-else>{{guest.address}}</td>
        
        <td v-if="editing === guest.id">
            <input type = "text" v-model="guest.comment"/>
        </td>
        <td v-else>{{guest.comment}}</td>

        <td v-if="editing === guest.id">
            <button v-on:click="editGuest(guest)"> Save </button>
            <button v-on:click="cancelEdit(guest)" class="muted-button"> Cancel </button>
        </td>

        <td v-else>
        
            <button v-on:click="editMode(guest)"> Edit </button>
            <button v-on:click="$emit('delete:guest', guest.id)"> Delete</button>

        </td>
        </tr>
    </tbody>
</table>
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
            if (guest.name === '' || guest.email === '' || guest.address === '' || guest.comment === '') 
            return

            this.$emit('edit:guest',guest.id, guest)
            this.editing = null
        },
    },
}
</script>

<style scoped>
    button {
        margin: 0 0.5rem 0 0;
    }

    input {
        margin: 0;
    }

    .empty-table {
        text-align: center;
    }
    </style>