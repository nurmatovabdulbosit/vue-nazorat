import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/about',
			component: () => import('../views/About.vue')
		},
		{
			path: '/uchrashuvlar',
			component: () => import('../views/Uchrashuvlar.vue')
		},
		{
		path: '/muammo',
		component: () => import('../views/Muammo.vue')
		},
		{
			path: '/loyiha',
			component: () => import('../views/Loyihalar.vue')
	},
	{
		path: '/sohaloyiha',
		component: () => import('../views/Loyihalarsoha.vue')
	},
	{
		path: '/payments',
		component: () => import('../views/payments.vue')
	},
	],
})

export default router