<template>
    <input type="text" v-model="searchText">
    <Tree 
    :search-text="searchText"
    :use-icon="true"
    @nodeExpanded="onUpdate"
    :nodes="data" 
    />
    <!-- :use-checkbox="true" -->
    <!-- show-child-count -->
    <!-- use-row-delete -->
</template>

<script>
import { ref } from 'vue';
import Tree from 'vue3-tree'
import "vue3-tree/dist/style.css";

// name, type, file => content, dir => url, 
const key = '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';

export default {
    components : {
        Tree,
    },

    data() {
        return {
            data : ref([]),
            searchText : ref(''),
            encodedData : '',
            decodedData : '',
        }
    },
    methods: {
        
        onUpdate(e) {
            if(e.type === 'file'){
                this.sendContent(e)
                return
            }
            this.axios.get(`${e.url}`, {
                    headers : {
                        Authorization : `token ${key}`
                    }
            })
            .then( res => {
                for(let i of res.data){
                    const a = {
                        idx : i.sha,
                        label : i.name,
                        type : i.type,
                        url : i.url,
                        nodes : [],
                        content : null,
                    }
                    if(i.type === 'file'){
                        a.nodes = null
                        a.content = i.content
                    }

                    e.nodes.push(a)
                }
            })
        },

        sendContent(e){
            this.axios.get(`${e.url}`, {
                    headers : {
                        Authorization : `token ${key}`
                    }
            })
            .then( res => {
                // for(let i of res.data){
                    // const a = {
                    //     idx : i.sha,
                    //     label : i.name,
                    //     type : i.type,
                    //     url : i.url,
                    //     nodes : [],
                    //     content : null,
                    // }
                    // if(i.type === 'file'){
                    //     a.nodes = null
                    //     a.content = i.content
                    // }

                    // e.nodes.push(a)
                // }
                // console.log( (res.data) )
                console.log(res)

                this.encodedData = res.data.content

                this.decodeData()
            })
        },

        getFileList() {
            this.axios.get('https://api.github.com/repos/Juwon-Yun/kanboo_my_work/contents', {
                    headers : {
                        Authorization : `token ${key}`
                    }
                })
            .then( res =>{
                for(let i of res.data){
                    const arrayA = {
                        idx : i.sha,
                        label : i.name,
                        type : i.type,
                        url : i.url,
                        nodes : [],
                        content : null,
                    }
                    if(i.type === 'file'){
                        arrayA.nodes = null
                        arrayA.content = i.content
                    }
                    this.data.push(arrayA)
                }// for i of
            })
        },

        decodeData(){
            this.decodedData =  atob(this.encodedData)

            console.log( this.decodedData )
        }
    },


    mounted() {
        this.getFileList();
    },
}
</script>

<style>

</style>