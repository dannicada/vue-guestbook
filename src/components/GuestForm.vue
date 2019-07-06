<template>
<div id="guest-form">
<form v-on:submit.prevent="handleSubmit">

<label>Name</label>
<input 
ref = "first"
:class= "{'has-error' : submitting && invalidName}"
@focus="clearStatus"
@keypress="clearStatus"
v-model="guest.name" 
type="text"
/>

<label>Email</label>
<input 
:class= "{'has-error' : submitting && invalidEmail}"
@focus="clearStatus"
v-model="guest.email" 
type="text"
/>

<label>Address</label>
<input 
:class= "{'has-error' : submitting && invalidAddress}"
@focus="clearStatus"
v-model="guest.address" 
type="text"
/>

<label>Comment</label>
<input 
:class= "{'has-error' : submitting && invalidComment}"
@focus="clearStatus"
v-model="guest.comment" 
type="text"/>

<p v-if="error && submitting" class="error-message">
    ❗please fill out all required fields
</p>
<p v-if="success" class="success-message">
    ✅Guest successfully added
</p>
<md-snackbar :md-active.sync="success">The Guest {{ lastGuest }} was saved successfully!</md-snackbar>
<span class="md-error"  v-if="invalidComment && submitting">The comment is required</span>


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
            lastGuest: null,
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
                //testing error detection
                console.log("can't submit: input error");
                return
                
                
                
            }
            //continues to submitting if no error found
            this.$emit('add:guest', this.guest)
            this.lastGuest = `${this.guest.name}`


            //reset form fields after submitting
            this.guest = {
                name: '',
                email: '',
                address: '',
                comment: '',
            }
            this.$refs.first.focus()



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

<style lang="scss" scoped>
  small {
    display: block;
  }
</style>