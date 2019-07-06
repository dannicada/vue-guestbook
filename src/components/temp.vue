<template>
  <div>
    <form  class="md-layout" @submit.prevent="handleSubmit">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Users</div>
        </md-card-header>

        <md-card-content>
            <md-field :class= "{'has-error' : submitting && invalidName}">
                <label for="first-name">Name</label>
                <md-input 
                    ref = "first"
                    @focus="clearStatus"
                    @keypress="clearStatus"
                    v-model="guest.name" 
                    type="text" 
                    :disabled="submitting"
                />
                <span class="md-error" v-if="invalidName && submitting">The name is required</span>
            </md-field>

         

            <md-field :class= "{'has-error' : submitting && invalidEmail}">
                <label for="email">Email</label>
                <md-input 
                    type="email" 
                    v-model="guest.email" 
                    :disabled="submitting" 
                    @focus="clearStatus"
                />
                <span class="md-error" v-if="invalidEmail && submitting">The email is required</span>
            </md-field>

            <md-field :class= "{'has-error' : submitting && invalidEmail}">
                <label for="email">Address</label>
                <md-input 
                    type="address" 
                    v-model="guest.address" 
                    :disabled="submitting" 
                    @focus="clearStatus"
                />                
                <span class="md-error"  v-if="invalidAddress && submitting">The address is required</span>
          </md-field>

            <md-field >
                <label for="email">Comment</label>
                <md-input 
                    type="text" 
                    v-model="guest.comment" 
                    :disabled="submitting" 
                    @focus="clearStatus"
                />                
                <span class="md-error"  v-if="invalidComment && submitting">The comment is required</span>
          </md-field>          

        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="submitting" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="submitting">Create user</md-button>
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
            console.log('handling submit')
            this.submitting = true;
            this.clearStatus();
            //checking for no or invalid entry
            if (this.invalidName || this.invalidEmail || this.invalidAddress || this.invalidComment){
                this.error = true;
                //testing error detection
                console.log("can't submit: input error");
                this.submitting = false;
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
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    
  }
</style>
