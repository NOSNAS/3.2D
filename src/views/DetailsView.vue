<template>
    <div>
      <!-- Personal Information Part -->
      <div id="container">
        <h1>Personal information</h1>
        <p><span>Name: </span>{{ sname }}</p>
        <p><span>Email: </span>{{ smail }}</p>
        <p><span>Phone NO.：</span>{{ stel }}</p>
        <button @click.prevent="logout">LOGOUT</button>
      </div>
  
      <!-- Blog Page Part  -->
      <div v-if="isAuth" id="blog-container">
        <div><input v-model="prefix" placeholder="Filter prefix"></div>
  
        <select size="5" v-model="selected">
          <option v-for="name in filteredNames" :key="name">{{ name }}</option>
        </select>
  
        <label>Name: <input v-model="first"></label>
        <label>Surname: <input v-model="last"></label>
  
        <div class="buttons">
          <button @click="create">Create</button>
          <button @click="update">Update</button>
          <button @click="del">Delete</button>
        </div>
      </div>
  
      <!-- List of Blogs (Always Displayed) -->
      <div>
        <h2>List of Blogs</h2>
        <ul>
          <li v-for="(blog, index) in blogs" :key="index">
            <router-link :to="'/blog/' + index">{{ blog }}</router-link>
          </li>
        </ul>
      </div>
  
      
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeView',
    data() {
      return {
        sname: localStorage.getItem('name'),
        smail: localStorage.getItem('mail'),
        stel: localStorage.getItem('tel'),
        isAuth: localStorage.getItem('s') === 'true', // Check if admin is logged in
  
        
        names: ['Emil, Hans', 'Mustermann, Max', 'Tisch, Roman'],
        selected: '',
        prefix: '',
        first: '',
        last: '',
        blogs: JSON.parse(localStorage.getItem('blogs')) || [], // List of blogs
      };
    },
    computed: {
      filteredNames() {
        return this.blogs.filter((n) =>
          n.toLowerCase().startsWith(this.prefix.toLowerCase())
        );
      },
    },
    methods: {
      create() {
        if (this.hasValidInput()) {
          const fullName = `${this.last}, ${this.first}`;
          if (!this.names.includes(fullName)) {
            this.names.push(fullName);
            this.first = this.last = '';
            // Add the new blog name to the list and store it in local storage
            this.blogs.push(fullName);
            localStorage.setItem('blogs', JSON.stringify(this.blogs));
          }
        }
      },
      update() {
        if (this.hasValidInput() && this.selected) {
          const i = this.blogs.indexOf(this.selected);
          this.blogs[i] = this.selected = `${this.last}, ${this.first}`;
          localStorage.setItem('blogs', JSON.stringify(this.blogs));
        }
      },
      del() {
        if (this.selected) {
          const blogIndex = this.blogs.indexOf(this.selected);
          if (blogIndex !== -1) {
            this.blogs.splice(blogIndex, 1);
            localStorage.setItem('blogs', JSON.stringify(this.blogs));
          }
          this.selected = this.first = this.last = '';
        }
      },
      hasValidInput() {
        return this.first.trim() && this.last.trim();
      },
      logout() {
        this.isAuth = false; // Modify login status
        localStorage.setItem('s', this.isAuth);
        this.$router.replace('/login'); // Redirect to the login page
      },
    },
  };
  </script>
  
  <style scoped>
  #container {
    width: 480px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #00000090;
    text-align: center;
    border-radius: 20px;
    margin-top: 10px;
    color: white;
  }
  
  #blog-container {
    position: absolute;
    top: 100px; 
    left: 35%; 
    padding: 20px;
  }
  
  p {
    font-size: 20px;
    margin-top: 20px;
    text-align: left;
    margin-left: 32%;
  }
  
  button {
    position: relative;
    height: 33px;
    width: 150px;
    background: rgba(35, 19, 252, 0.425);
    border-radius: 10px;
    margin-top: 10px;
    box-shadow: none;
    color: white;
    margin-left: 10px;
  }
  

  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  .router-link-active {
    font-weight: bold;
    color: blue; 
  }
  
  * {
    font-size: inherit;
  }
  
  input {
    display: block;
    margin-bottom: 10px;
  }
  
  select {
    float: left;
    margin: 0 1em 1em 0;
    width: 14em;
  }
  
  .buttons {
    clear: both;
    margin-top: 10px;
  }
  
  button + button {
    margin-left: 5px;
  }
  </style>
  