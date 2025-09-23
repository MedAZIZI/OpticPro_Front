import { defineStore } from 'pinia'
import api from '@/services/api'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as any
  }),
  getters: {
    isAuthenticated: (state) => !!state.user || !!localStorage.getItem('token')
  },
  actions: {
    setUser(u: any) { this.user = u; },
    async logout() {
      try {
        await api.post('/logout')
      } catch (e) { /* ignore */ }
      this.user = null
      localStorage.removeItem('token')
      delete api.defaults.headers.common['Authorization']
    }
  }
})
