import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useRoleStore = defineStore('role', () => {
  const roles = ref([
    { id: 1, name: 'Admin', status: 'a1' },
    { id: 2, name: 'User', status: 'a2' },
    { id: 3, name: 'Guest', status: 'a6' }
  ])

  return { roles }
})
