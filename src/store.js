import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
           
        }
    },
    mutations :{
        // Send Date
        sendselectDate(state, event){
          state.selectedDate = event
          return this.selectedDate;
        },
    },
})

export default store;