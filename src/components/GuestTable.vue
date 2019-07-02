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
        <td>{{ guest.name }}</td>
        <td>{{guest.email}}</td>
        <td>{{guest.address}}</td>
        <td>{{guest.comment}}</td>
        <td>
            <button v-on:click="$emit('edit:guest', guest.id)"> Edit</button>
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
}
</script>

<style scoped>
    button {
        margin: 0 0.5rem 0 0;
    }
</style>