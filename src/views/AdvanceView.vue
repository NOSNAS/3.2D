<template>
    <div class="myDiv">
      

      
      <svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke-width="4" fill="blue" /></svg>
      <canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;"></canvas>
      
      <svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke-width="4" fill="blue" /></svg>
      
      <form>
          <p>you can insert your details for register my website!</p>
          <label for="fname">register name:</label><br>
          <input type="text" id="fname" name="fname" value=""><br>
          <label for="lname">contact number:</label><br>
          <input type="text" id="lname" name="lname" value=""><br><br>
        </form> 

        <audio controls>
          <source src="welcome.ogg" type="audio/ogg">
          <source src="welcome.mp3" type="audio/mpeg">
        </audio>
        <br>
        

    <!-- <p>--templete syntax--</p> -->
    <div>WELCOME TO MY PORTFOLIO!</div>
    <div>{{ message }}</div>
    <div v-html="message1"></div>
    <div v-bind:id="dynamicID"> I find joy in the process of acquiring knowledge and am always eager to delve into new challenges</div>
    <div>{{1 + 0}}</div>
    <div>{{ message ? 'll' : 'no' }}</div>
    <!--methods-->
    <button @click="method_add">{{ count }}</button>
    <!--computed-->
    <br>
    <span>{{ ContainBook }}</span>
    <!--classes and style-->
    <div :class="{pink:true}">Beyond the classroom, I'm actively involved in Clubs, Extracurricular Activities, or Projects that allow me to apply theoretical concepts to real-world scenarios. </div>
    <div :class="{active: isActive}">This hands-on experience not only enhances my understanding, </div>
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }"> but also fuels my curiosity to explore innovative solutions. </div>
    <!--list rendering-->
    <p>--THINGS I LOVE--</p>
    	<ul>
        <li v-for="(value, key, index) in itemlist">
		    {{ index }}. {{ key }}: {{ value }}
		    </li>
      </ul>
    <p>the number of BLOG pages in list:</p>
    <span v-for="n in 5">{{ n }}</span>
    <!-- <p>*template and v-if*</p> -->
    <ul>
      <template v-for="todo in list">
        <li v-if="!todo.isComplete">
          {{ todo.name }}
        </li>
      </template>
    </ul>

    <!-- <p>*component*</p> -->
    <form v-on:submit.prevent="component">
    <label for="new-todo">Add more Blog number you want</label>
    <input
      v-model="list_of_things"
      id="new-todo"
    />
    <button>Add</button>
  </form>
  <ul>
    <todo-item
      v-for="(things, index) in todos"
      :key="things.id"
      :title="things.title"
      @remove="things.splice(index, 1)"
    ></todo-item>
  </ul>

  <!--Event Handling-->
	<p>click to add more numbers of blog in list:( {{ counter }} )</p>
  <button @click="counter++">Add number</button>
  <br>
	<button @click="method_handler">thankyou for your feedback</button>

  <!--Form Input Bindings-->
  <p>Anything you think that is controversial: {{ the_message }}</p>
  <input v-model="the_message" placeholder="input" />

	<input type="checkbox" id="checkbox" v-model="check_box" />
	<label for="checkbox">{{ check_box }}</label>

  <div>VALUE: {{ value }}</div>
  <input type="radio" id="love" value="love" v-model="value" />
  <label for="love">i like Sanson's portfolio</label>

  <input type="radio" id="hate" value="hate" v-model="value" />
  <label for="hate">i don't like Sanson's portfolio</label>
  <br>

  <span> OPTIONS: {{ options }}</span>
  <select v-model="options">
    <option disabled value="">choose a option</option>
    <option>Emil, Hans</option>
    <option>Mustermann, Max</option>
    <option>Tisch, Roman</option>
  </select>
  <br>

  <span>you can write a paragraph to our feedback:</span>
	<p style="white-space: pre-line;">{{ file }}</p>
	<textarea v-model="file" ></textarea>
  <br>
  
  <!-- <p>*v-model modifiers*</p> -->
  <input v-model.lazy="msg" />
  <p>{{ msg }}</p>
  <input v-model.number="age" />
  <p>{{ age }}</p>
  <input v-model.trim="gsm" />
  <p>{{ gsm }}</p>

  <!--watcher-->
  <p>
    Ask any questions for my portfolio and inser a question mark at the end:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>

  <!--components-->
  <div>
    <p>SANSON LI {{ receivedProp }}</p>
  </div>
  <FancyButton>
    SANSON LI <!-- slot content -->
 	</FancyButton>    
    
        <!--article and nav-->
        <article>
    <p>thankyou for visiting mr portfolio!</p>
    </article>

    <nav>
    <a href="/html/">SEE YOU </a>
    </nav>

    
    </div>

</template>

<script setup>

import { RouterLink, RouterView } from 'vue-router'
import { ref, watch } from 'vue';
import { reactive, computed } from 'vue'
import TodoItem from './component.vue'
import { defineProps } from 'vue';
import FancyButton from './prop.vue'

//templete syntax
const message = 'My academic journey has been a thrilling experience ';
const message1 = 'exposing me to a diverse range of subjects and cultivating a passion for IT.'
const dynamicID = 'id'
const objectOFattrs = {
  id: dynamicID,
  class:'container'
};
//method, ref, setup
const count = ref(0)
function method_add() {
  count.value++
}

//cpmputed
const author = reactive({
  name: 'kazuo ishiguro',
  books: [
    'Vue 2 - never let me go',
    'Vue 3 - mystery of math',
    'Vue 4 - holly from hell'
  ]
})

const ContainBook = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

//class and style
const isActive = ref(true);
const activeColor = ref('pink')
const fontSize = ref(30)

//list rendering 
const itemlist = reactive({
  product1: 'Glasses',
  product2: 'Backpack',
  product3: 'Phone'
})

const list = ref([
  { name: 'Task 1', isComplete: true },
  { name: 'Task 2', isComplete: true },
  { name: 'Task 3', isComplete: true },
]);

const list_of_things = ref('')
const todos = ref([])

let listid = 4

function component() {
  todos.value.push({
    id: listid++,
    title: list_of_things.value
  })
  list_of_things.value = ''
}


//Event Handling
const counter = ref(5)

const name = ref('Vue.js')

function method_handler(method) {
  alert(`Hello ${name.value}!`)
  // `event` is the native DOM event
  if (method) {
    alert(method.target.tagName)
  }
}

//input binding
const check_box = ref(true)

const value = ref('select a value')

const options = ref('')

const file = ref('')

const age = ref(0); 

//watcher
const question = ref('')
const answer = ref('insert your question ')

watch(question, async (question) => {
  if (question.indexOf('?') > -1) {
    answer.value = 'finding the answer..'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'sorry answer not find. ' + error
    }
  }
})

//component
const props = defineProps(['foo']);
const receivedProp = props.foo;

</script>
  
<style scoped>
.myDiv{
border:5px outset red;
  background-color: lightblue;
  text-align: center;
  height: 3000px;
}
</style>