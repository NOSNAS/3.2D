<template>
  <div id="background">
    <div id="contain">
      <h1>Register</h1>

      <div class="form">
        <label>UserName：</label><input type="text" v-model.trim="name"><br/>
      </div>
      <div class="form">
        <label>Password：</label><input type="password" v-model.trim="password"><br/>
      </div>
      <div class="form">
        <label>Email：</label><input type="email" v-model.trim="mail"><br/>
      </div>
      <div class="form">
        <label>PhoneNum：</label><input type="tel" v-model.trim="tel"><br/>
      </div>
      <button @click.prevent="handlefinish">Register</button>
    </div>
  </div>
</template>

<style scoped>
#contain{
width: 580px;
height: 450px;
position: absolute;
top: 30%;
left: 50%;
transform: translate(-50%,-50%);
background:#00000090;
text-align: center;
border-radius: 20px;
}
#contain h1{
color: white;
}
.form{
color: white;
margin-left: 20%;
margin-top: 60px;
font-size: 20px;
text-align: left;
}
label{
float:left;
width: 5em;
margin-right: 1em;
text-align: right;
}
input,textarea{
margin-left: 10px;
padding: 4px;
border: solid 1px #4e5ef3;
outline: 0;
font: normal 13px/100% Verdana,Tahoma,sans-serif;
width: 200px;
height: 20px;
background:#f1f1f190;
box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
}
input:hover,textarea:hover,input:focus,textarea:focus{border-color:#0d0aa1;}
button{
position: relative;
height: 33px;
width: 150px;
background: rgba(35, 19, 252, 0.425);
border-radius: 10px;
margin-top: 38px;
box-shadow: none;
color: white;
margin-left: 40px;
}
</style>

<script>
export default {
  name:'regester',
  props: {
  msg: String
},
data(){
  return{
    name:"",
    password:"",
    mail:"",
    tel:""
};
},
methods:{

  handlefinish:function()
  {
    if(localStorage['name']===this.name)
    {
      alert("user already exist");
    }
    else if(this.name==='')
    {
      alert("username must be insert");
    }
    else{
      localStorage.setItem('name',this.name);
      localStorage.setItem('password',this.password);
      localStorage.setItem('mail',this.mail);
      localStorage.setItem('tel',this.tel);
      localStorage.setItem('s',"false");
      alert("register successfully");
      this.$router.replace('/login');
    }
  }
}
};
</script>