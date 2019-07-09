<template>
    <md-card md-with-hover md-alignment="centered" class="md-layout-item md-size-50 md-small-size-100">
      <md-ripple>
        <md-card-header>
          <div class="md-title">Admin Login</div>
        </md-card-header>

        <md-card-content>
            Please login to continue
        </md-card-content>

        <md-card-actions>
          <md-button @click.prevent="login">Login</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
</template>

<script>

import authService from '../../auth/authService'
export default {
  name: "login",
  methods : {
    login(){
      authService.login()
    }
  }
}
</script>