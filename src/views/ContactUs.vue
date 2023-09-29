<template>
  <div class="about-us-form">
    <h2>About Us Feedback</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>

      <div class="form-group">
        <label for="feedback">Feedback:</label>
        <textarea id="feedback" v-model="formData.feedback" required></textarea>
      </div>

      <!-- Apply the animation to the button -->
      <button type="submit" class="submit-button">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  feedback: ''
});

const handleSubmit = () => {

  console.log(formData.value);

  // Reset the form
  formData.value = {
    name: '',
    email: '',
    feedback: ''
  };
};
</script>

<style scoped>
.about-us-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 10px;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* Add the animation to the submit button */
.submit-button {
  padding: 10px 15px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  animation-name: buttonAnimation;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

@keyframes buttonAnimation {
  0%, 100% {
    background-color: #007BFF;
  }
  50% {
    background-color: brown;
  }
}
</style>
