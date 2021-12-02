<template>
    <input type="text" v-model="searchText">
    <Tree 
    :nodes="data" 
    :search-text="searchText"
    :use-icon="true"
    />
    <!-- :use-checkbox="true" -->
    <!-- show-child-count -->
    <!-- use-row-delete -->
    <!-- @nodeExpanded="onUpdate" -->
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
        // onUpdate(e){
        //     console.log(e)
        // }
        onUpdate(e) {
            if(e.type === 'dir') {
                this.axios.then(res => {
                    for(let item of this.a) {
                        if(item.idx === e.idx) {

                            item.nodes.push(res.data)
                        }
                    }
                })
            } else if(e.type === 'file') {
                this.axios(e.url).then( ()=>{
                    // res.content.decodeBase64()
                    // $store에 보내야함 
                })
                // $store.state.file = decodeURI(content)
                return
            }
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
                    }else if(i.type === 'dir'){
                        this.axios.get(i.url, {
                                headers : {
                                    Authorization : `token ${key}`
                                }
                            }
                        )
                        .then( p_i_url => {
                            for(let j of p_i_url.data){
                                const arrayB = {
                                    idx : j.sha,
                                    label : j.name,
                                    type : j.type,
                                    url : j.url,
                                    nodes : [],
                                    content : null,
                                }

                                if(j.type === 'file'){
                                    arrayB.nodes = null
                                    arrayB.content = j.content

                                }else if(j.type === 'dir'){
                                    this.axios.get(j.url, {
                                        headers : {
                                            Authorization : `token ${key}`
                                        }
                                    }
                                ).then( p_j_url => {
                                        for(let k of p_j_url.data){
                                            const arrayC = {
                                                idx : k.sha,
                                                label : k.name,
                                                type : k.type,
                                                url : k.url,
                                                nodes : [],
                                                content : null,
                                            }
                                            if(k.type === 'file'){
                                                arrayC.nodes = null
                                                arrayC.content = k.content
                                            }else if(k.type === 'dir'){
                                                this.axios.get(k.url, {
                                                headers : {
                                                    Authorization : `token ${key}`
                                                        }
                                                    }
                                                ).then( p_k_url => {
                                                        for(let l of p_k_url.data){
                                                            const arrayD = {
                                                                idx : l.sha,
                                                                label : l.name,
                                                                type : l.type,
                                                                url : l.url,
                                                                nodes : [],
                                                                content : null,
                                                            }
                                                            if(l.type === 'file'){
                                                                arrayD.nodes = null
                                                                arrayD.content = l.content
                                                            }

                                                            arrayC.nodes.push(arrayD)
                                                        }
                                                }) // p_k_url axios
                                            }

                                            arrayB.nodes.push(arrayC)
                                        }
                                    })
                                }

                                arrayA.nodes.push(arrayB)
                            }// for j of
                        })
                    }// url axios

                    this.data.push(arrayA)
                    console.log(this.data)
                }// for i of

            })
        },

        pushArrayToJson(data){
          // 이시점에 json 배열로 변환후 state에 저장
          console.log(data)
          for(let i of data) {
            const a = {
              url: i.url,
              label: i.name,
              nodes: []
            }
            if( i.type ==='file'){
              a.nodes = null
            }
            // state.gitrepo.push(a)
          }

        //   return state.gitrepo = data
        },
    },
    mounted() {
        this.getFileList();
    },
}
</script>

<style>

</style>