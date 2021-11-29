<template>
    <div class="Repo">
        <h1>GitHub Repository</h1>
        <div class="nodeTree">
    <h1>Repository List</h1>
    <div class="repoContent">
        <strong class="repoContent" v-for="a in $store.state.git.gitrepo " :key="a" >
            {{a.name}}<br>
        </strong>
    </div>
        
    <hr>
    <input id="id" type="text" placeholder="repository url" value="Juwon-Yun">
    <button @click="axiosClick" type="button">Check</button>
        </div>
    </div>
</template>
 
<script>
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'


export default {
    methods: {
        axiosClick() {
            // this.$store.dispatch('getRepoList')
        //    console.log(this.$store.state.git.gitrepo)
            
        },
        ...mapMutations([''
        
        ]),
        ...mapActions({
            getRepoList : 'git/getRepoList',
        }),
        
    },
    mounted() {
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
</style>