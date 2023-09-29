<template>
  <div id="background">
      <div class="container">
          <form action="">
            <h1>Login</h1>
            <div class="form">
                <div class="item">
                  <label>UserName：</label><input type="text" name="username" v-model.trim="name" placeholder="Please Enter User Name">
                  
                  <br/>
                </div>
                <div class="item">
                  <label>Password：</label><input type="password" name="password" v-model.trim="password" placeholder="Enter Password">
                  <br/>
                </div>
                <div class="keep">
                  <input @click="handlesave" id="yes" type="radio" value="0" ><!-- 点击选中 -->
                  <label for="yes">KeepLoginStatus</label>
                </div>
            </div>
            
          </form>
                <button  type="submit" @click.prevent="handlelogin">Login            </button>
                
                <button  @click.prevent="handleregister">Register</button>
                <router-view></router-view>
      </div>
  </div>
  </template>
   
  <style scoped>
   
  .container{
    width: 480px;
    height: 300px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    background:#00000090;
    text-align: center;
    border-radius: 20px;
    margin-top: 10px;
  }
  .container h1{
    color: aliceblue;
    margin-left: 20px;
  }
  .item {
    color: white;
    margin-left: 15%;
    margin-top: 35px;
    font-size: 20px;
    text-align: left;
  }
  .item label{
    float:left;
    width: 5em;
    margin-right: 1em;
    text-align: right;
  }
  input{
    margin-left: -5px;
    padding: 4px;
    border: solid 1px #4e5ef3;
    outline: 0;
    font: normal 13px/100% Verdana,Tahoma,sans-serif;
    width: 200px;
    height: 23px;
    background:#f1f1f190;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
  }
  button{
    position: relative;
    height: 33px;
    width: 100px;
    background: rgba(35, 19, 252, 0.425);
    border-radius: 10px;
    margin-top: 18px;
    box-shadow: none;
    color: white;
    margin-left: 40px;
    margin-right: 10px;
   
  }
  .keep{
    color: white;
  }
  .keep input{
    width: 15px;
    height: 15px;
    margin-top: 7px;
    margin-left: 10px;
    margin-right: 10px;
  }
   
  </style>
   
  <script>
  export default {
    data(){
      return{
        name:"",
        password:"",
        st:"false",
      };
    },
    methods:{
      handlelogin:function()
      {
        
        if(this.name===localStorage['name'] && this.password===localStorage['password'])
         {
           this.$router.replace('/details');
         } 
         else if(this.name==='')
         {
           alert('insert a name for register');
         }
         else if(this.password==='')
         {
           alert('must insert a password');
         }
        else{
           alert('account does not exist plz register');
          }
      },
      handleregister:function()
      {
        this.$router.replace('/regester')
      },
      
      handlesave:function(){
        this.st="true";
        localStorage.setItem('s',this.st);
        console.log(localStorage.s);
      }
    }
  };
  </script>