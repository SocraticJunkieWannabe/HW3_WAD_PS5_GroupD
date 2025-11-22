<template>
  <div class="signup-page">
    <Signup />
  </div>
</template>

<script>
import Signup from '@/components/Signup.vue'

export default {
  name: 'SignupView',
  components: {
    Signup
  }
}
</script>

<style scoped>
.signup-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
