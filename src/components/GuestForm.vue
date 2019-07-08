<template>
<div id="guest-form">
    <form novalidate class="md-layout" v-on:submit.prevent="handleSubmit">
        <md-card class="md-layout-item">
            <md-card-header>
            <div class="md-title">Guest Form</div>
            </md-card-header>

            <md-card-content>

                <div class="md-layout-item md-small-size-100">
                    <md-field :class= "{'md-invalid' : error && invalidName}">
                        <label for="name">Name</label>
                        <md-input ref="first" v-model="guest.name" @focus="clearStatus" @keypress="clearStatus"/>
                        <span class="md-error" v-if="invalidName && error">Name is required</span>
                    </md-field>
                </div>

                <div class="md-layout-item md-small-size-100">
                    <md-field :class= "{'md-invalid' : error && invalidEmail}">
                        <label for="name">Email</label>
                        <md-input type="email" v-model="guest.email" @focus="clearStatus"/>
                        <span class="md-error" v-if="invalidEmail && error">Email is required</span>
                    </md-field>
                </div>

                <div class="md-layout-item md-small-size-100">
                    <md-field :class= "{'md-invalid' : error && invalidAddress}">
                        <label for="name">Address</label>
                        <md-input v-model="guest.address" @focus="clearStatus"/>
                        <span class="md-error" v-if="invalidAddress && error">Address is required</span>
                    </md-field>
                </div>   

                <div class="md-layout-item md-small-size-100">
                    <md-field :class= "{'md-invalid' : error && invalidComment}">
                        <label for="name">Comment</label>
                        <md-input v-model="guest.comment" @focus="clearStatus"/>
                        <span class="md-error" v-if="invalidComment && this.error">Comment is required</span>
                    </md-field>
                </div>    
                
                <md-progress-bar md-mode="indeterminate"  v-show="this.submitting" />                              

            </md-card-content>

           

            <md-card-actions>
            <md-button type="submit" class="md-primary">Add Guest</md-button>
            </md-card-actions>

        </md-card>

<md-snackbar :md-active.sync="success">The Guest {{ lastGuest }} was saved successfully!</md-snackbar>


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
            this.submitting = true;

            window.setTimeout(() => {
            this.clearStatus();
            console.log('handling submit')
            //checking for no or invalid entry
            if (this.invalidName || this.invalidEmail || this.invalidAddress || this.invalidComment){
                this.error = true;
                //testing error detection
                console.log("can't submit: input error");
                this.submitting = false;
                return;
                
                
                
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

            this.clearStatus();
            this.submitting = false;
        
            //success after emiting
            this.error = false
            this.success = true

            },1500)
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
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
</style>