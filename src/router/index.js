import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')
const Login = () => import('views/login/Login')
//  重写路由的push方法
// 解决两次访问相同路由地址报错

const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
};


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path:'/detail/:iid',
    component:Detail
  },
  {
    path:'/login',
    component:Login
  }

]

const router = new VueRouter({
  routes,
  mode:'history',
  // scrollBehavior (to, from, savedPosition){
  //   //return desired position}
  //   if (to.hash) {
  //     return {
  //       selector: to.hash
  //     }
  //   }
    
  // }
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition && to.meta.keepAlive) {
  //     return savedPosition;
  //   }
  //   return { x: 0, y:0 };
  // }
})

export default router
