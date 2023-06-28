import { ref } from 'vue'

const state = ref({})

export const backendStore = () => {
  // add state methods here

  return {
    state
  }
}

export default backendStore