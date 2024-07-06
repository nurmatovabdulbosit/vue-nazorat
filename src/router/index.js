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
			path: '/gip',
			component: () => import('../views/Gip.vue')
		},
		{
			path: '/rip',
			component: () => import('../views/Rip.vue')
		},
		{
			path: '/muammo',
			component: () => import('../views/Muammo.vue')
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
			path: '/yakun',
			component: () => import('../views/Yakun.vue')
	},
	{
		path: '/rejaloyiha',
		component: () => import('../views/Rejaloyiha.vue')
	},
	
	],
})

export default router