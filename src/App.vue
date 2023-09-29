<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FooterComponent from './components/FooterComponent.vue';
</script>




<!-- Fix footer -->
<template>
  <div class="nav-container">
    <input type="checkbox" id="menu-toggle" class="menu-toggle">
    <label for="menu-toggle" class="dropdown-btn">Menu</label>
    <div class="links-container">
      <RouterLink class="nav-link" to="/">Home</RouterLink>
      <RouterLink class="nav-link" to="/intro">Intro</RouterLink>
      <RouterLink class="nav-link" to="/about">About</RouterLink>
      <RouterLink class="nav-link" to="/contact">Contact Us</RouterLink>
      <RouterLink class="nav-link" to="/login">Authorise</RouterLink>
      <RouterLink class="nav-link" to="/regester">Register</RouterLink>
      <RouterLink class="nav-link" to="/details">Details</RouterLink>
      <RouterLink class="nav-link" to="/advance">Advance</RouterLink>
      
    </div>
  </div>

  <div class="page-container">
    <div class="content-wrapper">
      
      <RouterView />
    </div>
    <footer class="amazing-footer">
      

  <FooterComponent/>
    </footer>
  </div>



</template>

<style scoped>

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

.content-wrapper {
  flex: 1; 
}


.nav-container {
  display: flex;
  justify-content: center;
  background-color: #2c3e50;
  padding: 10px 0;
  position: relative;
  flex-wrap: wrap;
}

.nav-link {
  text-decoration: none;
  color: #ecf0f1;
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 1.1em;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 4px;
}

.nav-link:hover {
  background-color: #34495e;
  color: #bdc3c7;
}

.router-link-active {
  color: #e74c3c;
  background-color: #c0392b;
  border-radius: 4px;
}

/* Mobile styles */
.menu-toggle {
  display: none; 
}

.dropdown-btn {
  display: none;
  background-color: #34495e;
  color: #ecf0f1;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.links-container {
  display: flex;
}

/* Media query for small screens */
@media (max-width: 768px) {
  .dropdown-btn {
    display: block;
  }

  .links-container {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #2c3e50;
  }

  .menu-toggle:checked + .dropdown-btn + .links-container {
    display: flex;
  }
}
</style>