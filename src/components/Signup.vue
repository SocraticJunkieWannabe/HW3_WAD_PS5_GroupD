<template>
  <div>
    <Header />

    <main>
      <div class="form-section">
        <!-- Login Form -->
        <div v-if="currentForm === 'login'" id="container">
          <h2>Login</h2>
          <div>
            <div><input v-model="loginEmail" type="email" placeholder="Please enter an email address" required autofocus></div>
            <div><input v-model="loginPassword" type="password" placeholder="Please enter a password" required></div>
          </div>
          <div><button @click="handleLogin" :disabled="!isLoginValid">Login</button></div>
          <p>Don't have an account?</p>
          <button @click="showRegisterForm">Register</button>
        </div>

        <!-- Registration Form -->
        <div v-if="currentForm === 'register'" id="container">
          <h2>Register</h2>
          <div>
            <div><input v-model="regEmail" type="email" placeholder="Email" required autofocus></div>
            <div><input v-model="regPassword" type="password" placeholder="Password" required></div>
            <div><input v-model="regConfirmPassword" type="password" placeholder="Confirm Password" required></div>
          </div>
          <div><button @click="handleRegister" :disabled="!isRegistrationValid">Register</button></div>
          <button @click="showLoginForm">Back to Login</button>
        </div>

        <!-- Forgot Password Form -->
        <div v-if="currentForm === 'forgot'" id="container">
          <h2>Forgot Password</h2>
          <div>
            <div><input v-model="forgotEmail" type="email" placeholder="Please enter your email address" required autofocus></div>
            <button @click="handleResetPassword" :disabled="!isForgotPasswordValid">Reset Password</button>
            <button @click="showLoginForm">Back to Login</button>
          </div>
        </div>

        <button v-if="currentForm === 'login'" @click="showForgotPassword" id="forgot-password-button">Forgot password ?</button>
      </div>
    </main>
    
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'Signup',
  components: {
    Header,
    Footer
  },

  data() {
    return {
      currentForm: 'register',
      forgotEmail: '',
      loginEmail: '',
      loginPassword: '',
      regEmail: '',
      regPassword: '',
      regConfirmPassword: ''
    }
  },
  computed: {
    isForgotPasswordValid() {
      return this.forgotEmail.trim() !== '' && this.forgotEmail.includes('@');
    },
    isLoginValid() {
      return this.loginEmail.trim() !== '' && this.loginEmail.includes('@') && this.loginPassword.trim() !== '';
    },
    isRegistrationValid() {
      return this.regEmail.trim() !== '' && 
             this.regEmail.includes('@') && 
             this.regPassword.trim() !== '' && 
             this.regPassword === this.regConfirmPassword;
    }
  },
  methods: {
    showLoginForm() {
      this.currentForm = 'login';
    },
    showRegisterForm() {
      this.currentForm = 'register';
    },
    showForgotPassword() {
      this.currentForm = 'forgot';
    },
    handleLogin() {
      // Handle login logic
      window.location.href = 'index.html';
    },
    handleRegister() {
      // Handle registration logic
      window.location.href = 'index.html';
    },
    handleResetPassword() {
      // Handle reset password logic
      this.showLoginForm();
    }
  },
  mounted() {
    // Component is mounted and ready
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
