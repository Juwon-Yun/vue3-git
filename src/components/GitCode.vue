<template>
    <div class="gitCode">
        <div v-if="this.$store.state.git.selectedRepo !== null">
            <h1>{{this.$store.state.git.selectedRepo}}</h1>
        </div>
        <div v-else-if="this.$store.state.git.selectedRepo === null">
            <h1>{{this.file}}</h1>
        </div>

        <div class="fileContent" >
            <pre class="content" ><code>{{this.$store.state.git.decodeData}}</code></pre>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {

    data(){
        return{
            file : '파일명',
            s_decodeData : '',
        }
    },
    mutations :{
       
    },
    actions : {
        
    },
    methods: {
        ...mapMutations({
            getDecodeData : 'git/getDecodeData',
        }),

        input_S_decodeData(){
            this.s_decodeData = this.$store.state.git.decodeData.innerText
        },

    },
    mounted() {
        this.input_S_decodeData()
    },
    watch : {
        s_decodeData : function(){
            console.log('바꼇다')
        }
    },
}
</script>

<style>
.gitCode {
 height: 100%;
}

.fileContent{
    height: 100%;
    background-color: #2C2F3B;
    overflow: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    color: #eee;
    font-size: 25px;
}
.fileContent::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
}
</style>