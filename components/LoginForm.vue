

<template>
  <div class="login-card">
    <div class="logo">
      <img src="@/assets/logo.svg" alt="1Tool Logo" class="logo-image" />
    </div>

    <form @submit.prevent="handleLogin">
      <label class="label" for="email">E-mail</label>
      <input
        class="input-style"
        type="email"
        id="email"
        v-model="email"
        required
        @blur="emailTouched = true"
      />
      <p v-if="emailTouched && !email" class="error-message">E-mail is a required field</p>

      <label class="label" for="password">Password</label>
      <div class="password-container">
        <input
          class="input-style"
          :type="showPassword ? 'text' : 'password'"
          id="password"
          v-model="password"
          required
          @blur="passwordTouched = true"
        />
        <p v-if="passwordTouched && !password" class="error-message">Password is a required field</p>

        <span @click="togglePasswordVisibility" class="toggle-password">
          👁️
        </span>
      </div>

      <button type="submit">Login</button>
    </form>
    <footer>1Tool © 2024</footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      emailTouched: false,
      passwordTouched: false,
      showPassword: false,
    };
  },
  methods: {
    handleLogin() {
      if (this.email && this.password) {
        console.log('Email:', this.email, 'Password:', this.password);
               this.$store.dispatch('auth/login', true);

        this.$router.push('/seminars'); // Use Vue Router to navigate
      } else {
        console.error('Please fill in all required fields.');
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

  

<style scoped>
/* Same styles as the original */
.label {
  text-align: left;
  color: #888;
}
.login-card {
  width: 400px;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
}

.logo {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.logo-image {
  width: 150px; /* Adjust the logo size as needed */
  height: auto;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input-style {
  width: 100%;
  padding: 0.75rem;
  border: none; /* Remove all borders */
  border-bottom: 2px solid #ccc; /* Add only a bottom border */
  font-size: 1rem;
  outline: none; /* Remove outline to avoid default focus styling */
}

.input-style:focus {
  border-bottom: 2px solid #4a90e2; /* Highlight bottom border on focus */
}

.password-container {
  position: relative;
}

.toggle-password {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}

button {
  padding: 0.75rem;
  background: linear-gradient(90deg, #4a90e2, #6c63ff);
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: linear-gradient(90deg, #6c63ff, #4a90e2);
}

footer {
  margin-top: 1rem;
  color: #888;
  font-size: 0.9rem;
}

.error-message {
  text-align: left;
  color: #777;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}
</style>
