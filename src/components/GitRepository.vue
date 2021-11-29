<template>
    <div class="Repo">
        <h1>GitHub Repository</h1>
        <div class="nodeTree">
    <h1>Repository List</h1>
    <div class="repoContent">
        <strong  @click="selectRepo" v-for="a in $store.state.git.gitrepo " :key="a" >
            {{a.name}}<br>
        </strong>
    </div>
        
    <hr>
    <!-- <input id="id" type="text" placeholder="repository url" value="Juwon-Yun"> -->
    <button @click="axiosClick" type="button">Check</button>
        </div>
    </div>
</template>
 
<script>
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
import axios from 'axios' // eslint-disable-line no-unused-vars

export default {
    methods: {
        ...mapMutations({
            selectRepo : 'git/selectRepo',
        }),
        ...mapActions({
            getRepoList : 'git/getRepoList',
        }),
        axiosClick() {
            // this.$store.dispatch('getRepoList')
        //    console.log(this.$store.state.git.gitrepo)
            // $store.state.git.commit('selectRepo')
            // console.log(this.$store.state.git.commit('selectRepo'))
            // this.selectRepo()
            // console.log(this.selectRepo())
        },
        // getFilesByRepo(e){
        //     // e.target(e의 객체 자체를 의미함) => 이벤트 발생을 시키는 객체
        //     // console.log(e.target.innerText)
        //     console.log(e)
        //     this.axios.get(`https://api.github.com/repos/Juwon-Yun/${e.target.innerText}/contents`)
        //     .then((result) => {
        //         let code = `<ul>`
        //         result.data.forEach(element => {
        //             console.log(element.name)
        //             code += `<li>${element.name}</li>`
        //         });
        //         code += `</ul>`
        //         e.target.innerHTML += code
                
        //     }).catch((err) => {
        //         console.log(err)
        //     });

        // },
    },
    created() {
        // mapActions([
        //     this.$store.state.git.dispatch('getRepoList')
        // ]),
        // console.log(this.$store.state.git.mapActions)
        // console.log(this.getRepoList());
        this.getRepoList();
        // this.$store.modules.git.dispatch('getRepoList')
    },
    actions:{
        
    },
}

</script>
 
<style>
.nodeTree{
    height: 20vh;
    background-color: #2C2F3B;
}
.repoContent{
    color: #eee;
    overflow: hidden;
}
ul {
    padding-left: 20px;
}
</style>