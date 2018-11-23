import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Posts from '@/components/Posts'
import Lala from '@/components/Lala'
import NewPost from '@/components/NewPost'
import EditPost from '@/components/EditPost'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/lala',
      name: 'Lala',
      component: Lala
    },
    {
    	path: '/posts/new',
    	name: 'NewPost',
    	component: NewPost
    },
    {
    	path: '/posts/:id',
    	name: 'EditPost',
    	component: EditPost
    }
  ]
})
