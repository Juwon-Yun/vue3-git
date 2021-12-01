<template>
    <div class="gitCode">
        <div v-if="this.$store.state.git.selectedRepo !== null">
            <h1>{{this.$store.state.git.selectedRepo}}</h1>
        </div>
        <div v-else-if="this.$store.state.git.selectedRepo === null">
            <h1>{{this.file}}</h1>
        </div>

        <div class="fileContent" >
            <div class="content" >
                {{this.$store.state.git.selectedRepo}}
            </div>
        </div>
    </div>
</template>

<script>

export default {

    data(){
        return{
            file : '파일명',
        }
    },
    mutations :{
     
    },
    actions : {

    },
    methods: {
        
    },
    mounted() {
    },
    watch : {

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