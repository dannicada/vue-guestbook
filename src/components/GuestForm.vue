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
            submitting: false,
            error: false,
            success: false,
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
            this.submitting = true;
            this.clearStatus();
            //checking for no or invalid entry
            if (this.invalidName || this.invalidEmail || this.invalidAddress || this.invalidComment){
                this.error = true;
                return
                
                //testing error detection
                console.log("can't submit: input error");
                
            }
            //continues to submiting if no error found
            this.$emit('add:guest', this.guest)

            //reset form fields after submiting
            this.employee = {
                name: '',
                email: '',
                address: '',
                comment: '',
            }

            //success after emiting
            this.error = false
            this.success = true
            this.submitting = false

        },
        clearStatus() {
            this.success = false;
            this.error = false;
        },
    },
    computed: {
        invalidName() {
            return this.guest.name === '';
        },
        invalidEmail() {
            return this.guest.email === '';

        },
        invalidAddress() {
            return this.guest.address === '';

        },
        invalidComment() {
            return this.guest.comment === '';

        },
    },
}

</script>

<style scoped>
form {
    margin-bottom: 2rem;
}

[class*='-message'] {
    font-weight:500;
}

.error-message {
    color: #d33c40;
}

.success-message {
    color: #32a95d;
}
</style>