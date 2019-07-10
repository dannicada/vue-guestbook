<template>
  <div>
  <md-progress-bar md-mode="indeterminate" />
  </div>
</template>

<script>
export default {
  methods: {
    handleLoginEvent(data) {
      this.$router.push(data.state.target || "/GuestTable");
    }
  },
  created() {
    this.$auth.handleAuthentication();
  }
};
</script>