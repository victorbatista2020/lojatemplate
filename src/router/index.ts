import { createRouter, createWebHistory } from 'vue-router'
import About from '@/components/About.vue'
import Address from '@/components/Address.vue'
import Contact from '@/components/Contact.vue'
import Service from '@/components/Service.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'About',      
      component: About
    },
    {
      path: '/',
      name: 'Address',      
      component: Address
    },
    {
      path: '/',
      name: 'Contact',      
      component: Contact
    },
    {
      path: '/',
      name: 'Service',      
      component: Service
    },
  
  ]
})

export default router
