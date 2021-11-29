import { createStore } from 'vuex'
import axios from 'axios'

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
           ],
           gitrepo : [

           ],
           something : '',
           
        }
    },
    mutations :{
        // Send Date
        sendselectDate(state, event){
          state.selectedDate = event
          return this.selectedDate;
        },
        overrideRepos(state, data){

          // var temp = [...state.gitrepo];

          // temp.push(data)

          // state.gitrepo = temp;

          // console.log(temp)
          // console.log(state.gitrepo)
          
          return state.gitrepo.push(data)
        },
        setSomething (state, message) {
          state.something = message
        }
    },
    actions:{
      getRepoList({ commit }) {
        axios.get('https://api.github.com/users/Juwon-Yun/repos')
          .then( (res)=>{
      //       res.data.forEach(element => {
      //       commit('overrideRepos', element.name)
      //  });
              commit('overrideRepos', res.data)
          })
      },
    },
})

export default store;