<template>
<div id="guest-form">
<form v-on:submit.prevent="handleSubmit">

<label>Name</label>
<input v-model="guest.name" type="text"/>

<label>Email</label>
<input v-model="guest.email" type="text"/>

<label>Address</label>
<input v-model="guest.address" type="text"/>

<label>Comment</label>
<input v-model="guest.comment" type="text"/>

<button>Submit</button>

</form>
</div>
</template>

<script>
export default {
    name: "guest-form",
    data() {
        return {
            guest: {
                name: '',
                email: '',
                address: '',
                comment: '',
            },
        }
    },
    methods: {
        handleSubmit() {
            console.log('handling submit')
            this.$emit('add:guest', this.guest)
        },
    },
}

</script>

<style scoped>
form {
    margin-bottom: 2rem;
}
</style>