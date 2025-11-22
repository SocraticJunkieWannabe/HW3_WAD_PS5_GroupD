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

            
            <div class="input-container">
              <input v-model="regEmail" type="email" placeholder="Email" required autofocus>
              <div v-if="regEmail && !isEmailValid" class="error-bubble">
                {{ emailErrorMessage }}
              </div>
            </div>


            <div class="input-container">
              <input v-model="regPassword" type="password" placeholder="Password" required>
              <div v-if="regPassword && passwordErrorMessage !== ''" class="error-bubble">
                {{ passwordErrorMessage }}
              </div>
            </div>

            <div class="input-container">
              <input v-model="regConfirmPassword" type="password" placeholder="Confirm Password" required>
              <div v-if="regConfirmPassword && !passwordsMatch" class="error-bubble">
                Passwords do not match
              </div>
            </div>
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

    isEmailValid() {
      return this.regEmail.trim() !== '' && this.regEmail.includes('@');
    },

    emailErrorMessage() {
      if (this.regEmail.trim() === '') {
        return 'Email is required';
      }
      if (!this.regEmail.includes('@')) {
        return 'Email must contain @';
      }
      return '';
    },

    
    passwordErrorMessage() {
      if (this.regPassword.trim() === '') {
        return '';
      }
      if (this.regPassword.length < 8) {
        return 'Password must be at least 8 characters';
      }
      if (this.regPassword.length > 15) {
        return 'Password must be no more than 15 characters';
      }
      if (!this.regPassword.includes('_')) {
        return 'Password must contain an underscore (_)';
      }
      if (!/[A-Z]/.test(this.regPassword)) {
        return 'Password must contain at least one uppercase letter';
      }
      if ((this.regPassword.match(/[a-z]/g) || []).length < 2) {
        return 'Password must contain at least 2 lowercase letters';
      }
      if (!/\d/.test(this.regPassword)) {
        return 'Password must contain at least one number';
      }
      if (!/^[A-Z]/.test(this.regPassword)) {
        return 'Password must start with an uppercase letter';
      }
      return '';
    },

    passwordsMatch() {
      return this.regPassword === this.regConfirmPassword;
    },


    isRegistrationValid() {
      return this.isEmailValid && 
             this.regPassword.trim() !== '' && 
             this.regPassword.length >= 8 &&
             this.regPassword.length <= 15 &&
             this.regPassword.includes('_') &&
             /[A-Z]/.test(this.regPassword) &&
             (this.regPassword.match(/[a-z]/g) || []).length >= 2 &&
             /\d/.test(this.regPassword) &&
             /^[A-Z]/.test(this.regPassword) &&
             this.passwordsMatch;
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

.input-container {
  position: relative;
  margin-bottom: 10px;
  display: block;
  width: fit-content;
  left: 43.5%;
}

.error-bubble {
  position: absolute;
  background-color: #ff6b6b;
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 12px;
  top: 50%;
  left: 100%;
  margin-left: 10px;
  transform: translateY(-50%);
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(251, 246, 246, 0.15);
  z-index: 10;
}


/* Arrow point attached to the error bubble */
.error-bubble::before {
  content: '';
  position: absolute;
  left: -6px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-right: 6px solid #ff6b6b;
}
</style>
