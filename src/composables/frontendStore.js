import { ref } from 'vue'

const state = ref({})

const frontendStore = () => {
  // add state methods here

  return {
    state
  }
}

export default frontendStore