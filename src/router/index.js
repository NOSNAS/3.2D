import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
    ,
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactUs.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AuthView.vue')
    },
    {
      path: '/regester',
      name: 'regester',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegisterView.vue.vue')
    },
    {
      path: '/details',
      name: 'details',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DetailsView.vue')
    },
    {
      path: '/advance',
      name: 'advance',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AdvanceView.vue')
    },
    {
      path: '/intro',
      name: 'intro',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/intro.vue')
    },
  ]
})


router.beforeEach((to,from,next)=>
{
  //登录及注册页面可以直接进入,而主页面需要分情况
  if(to.path=='/login')
  {
    next();
    console.log(localStorage.s);
  }
  else if(to.path=='/regester')
  {
    next();
  }
  else
  {
    if(from.path=="/login")//从登录页面可以直接通过登录进入主页面
    {
      next();
    }
    else{
        //从/进入,如果登录状态是true，则直接next进入主页面
          if(localStorage.s === "true")
            {
              next();
              console.log(localStorage['s'])
            }
        else {//如果登录状态是false，那么跳转至登录页面,需要登录才能进入主页面
          next('/login');
          console.log("需要登录")
        }
    }
  }
})

export default router