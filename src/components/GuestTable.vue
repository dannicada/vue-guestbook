<template>
<div id = "guest-table">
<table>
    <thead>
        <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Address</th>
        <th>Comment</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="guest in guests" :key="guest.id">
        <td>{{ guest.name }}</td>
        <td>{{guest.email}}</td>
        <td>{{guest.address}}</td>
        <td>{{guest.comment}}</td>
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
</style>