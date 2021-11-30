import axios from 'axios'

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
           gitrepo : [],
           something : '',
           selectedRepo : '',
        }
    },
    mutations :{
        // Send Date
        sendselectDate(state, event){
          state.selectedDate = event
          return this.selectedDate;
        },
        overrideRepos(state, data){
          return state.gitrepo = data
        },

        setSomething (state, message) {
          state.something = message
        },

        selectRepo(state, p_fileName){
          console.log(p_fileName)
          state.selectedRepo = p_fileName
        },
        

    },
    actions:{
      getRepoList({ commit }) {
        axios.get('https://api.github.com/users/Juwon-Yun/repos')
          .then( res =>{
              commit('overrideRepos', res.data)
          })
      },
      // getFilesByRepo(e){
      //   console.log('Repo')
      //   console.log(e)
      //   axios.get(`https://api.github.com/repos/Juwon-Yun/${e.state}/contents`)
      //       .then((result) => {
      //           let code = `<ul>`
      //           result.data.forEach(element => {
      //               console.log(element.name)
      //               code += `<li>${element.name}</li>`
      //           });
      //           code += `</ul>`
      //           e.target.innerHTML += code
      //           // commit('overrideRepos', e.target.innerHTML)
      //       }).catch((err) => {
      //           console.log(err)
      //       });
      // }
    },
}

export default git;