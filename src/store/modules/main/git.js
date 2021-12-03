const git = {
    namespaced : true,
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
             },{
              fileName:'12345.vue',
              content:'vue컴포넌트 에러났음',
              nickname:'윤주원',
              startDate:'2021-11-29',
              currentTime:'오늘',
              state:'bug',
             },{
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
              fileName:'ddit.vue',
              content:'vue컴포넌트 에러났음',
              nickname:'권영채',
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
           something : '',
           decodeData : '',
        }
    },
    mutations :{
        // Send Date
        sendselectDate(state, event){
          state.selectedDate = event
        },

        setSomething (state, message) {
          state.something = message
        },
        
        setDecodeData(state, data){
          state.decodeData = data
        },

        getDecodeData(state){
          return state.decodeData
        },
      
        selectRepo(state, p_fileName){
          console.log(p_fileName)
          state.selectedRepo = p_fileName
        },
    },

    actions:{
      // getRepoList({ commit }) {
      //   axios.get('https://api.github.com/repos/Juwon-Yun/Algorithm/contents')
      //     .then( res =>{
      //         console.log(res.data)
      //         commit('overrideRepos', res.data)
      //     })
      // },
    },
}

export default git;