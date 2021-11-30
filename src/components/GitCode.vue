<template>
    <div class="gitCode">
        <h1>{{this.file}}</h1>
        <div class="fileContent" >
            <div class="content" >
                {{this.file}}
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
        iterSelectedRepo(state){
            this.file = state.selectRepo.forEach(element => {
            console.log('element =>  ',element);
                this.file = element
            });
        return this.file
        }
    },
    mounted() {
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