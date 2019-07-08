<template>
    <div>
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">GuestBook</div>
          <div class="md-subhead">A simple guest book application</div>
        </md-card-header>

        <md-card-content>
            Welcome to ehealth4everyone please continue as guest to fill in basic information or login as administrator to manage records
        </md-card-content>
        <md-card-actions>
          <md-button to= "/GuestForm" class="md-primary">Guest</md-button>
          <md-button to="/login" class="md-primary">Admin</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
    </div>
</template>
