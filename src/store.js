import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
           issues:[
             {
              fileName:'12345.vue',
              content:'vue컴포넌트 에러났음',
              nickname:'윤주원',
              startDate:'2021-11-29',
              currentTime:'오늘',
              state:'bug',
             },
             {
              fileName:'12345.vue',
              content:'vue컴포넌트 에러났음',
              nickname:'윤주원',
              startDate:'2021-11-29',
              currentTime:'오늘',
              state:'bug',
             },
             {
              fileName:'12345.vue',
              content:'vue컴포넌트 에러났음',
              nickname:'윤주원',
              startDate:'2021-11-29',
              currentTime:'오늘',
              state:'bug',
             },
             {
              fileName:'12345.vue',
              content:'vue컴포넌트 에러났음',
              nickname:'윤주원',
              startDate:'2021-11-29',
              currentTime:'오늘',
              state:'bug',
             },
           ]
        }
    },
    mutations :{
        // Send Date
        sendselectDate(state, event){
          state.selectedDate = event
          return this.selectedDate;
        },

    },
    actions:{
      getRepoList(){
        console.log('하이')
        // const key = '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'
        // const id = document.querySelector('#id').value
        // const bBtn = document.querySelector('#backBtn')
    
      
    
        // bBtn.addEventListener('click', (e)=>{
    
        //     console.log(document.querySelector('#repoContent').innerHTML);
    
        //     document.querySelector('#repoContent').innerHTML = ' ';
            
        //     console.log(document.querySelector('#repoContent').innerHTML);
        //     console.log(e);
        //     console.log(id)
        //     console.log(key)
        // })
      },
    },
})

export default store;