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
        a : ref([
            {
                idx:1, // sha로 push
                label: "src",
                type: "dir",
                url: "http",
                nodes: [ // axios 
                    {
                        label: "test.java",
                        type: "file",
                        url: null,
                        nodes: null
                    },
                    {
                        label: "vo",
                        type: "dir",
                        url: "http",
                        nodes: []
                    }
                ]
            },
            {
                idx:1, // sha로 push
                label: "src",
                type: "dir",
                content: null,
                url: "http",
                nodes: [ // axios 
                    {
                        label: "test.java",
                        type: "file",
                        content: "base64asdflaksdjfoies",
                        url: null,
                        nodes: null,
                    },
                    {
                        label: "vo",
                        type: "dir",
                        content: null,
                        url: "http",
                        nodes: null
                    }
                ]
            }
        ]),
            data : ref([]),
            searchText : ref(''),

        }
    },
    methods: {
        
        onUpdate(e) {
            this.axios.get(`${e.url}`, {
                    headers : {
                        Authorization : `token ${key}`
                    }
            })
            .then( res => {
                console.log(res)
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

    },
    mounted() {
        this.getFileList();
    },
}
</script>

<style>

</style>