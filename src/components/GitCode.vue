<template>
    <div class="gitCode">
        <div v-if="this.$store.state.git.selectedFileName === '' ">
            <h1>File Name</h1>
        </div>
        <div v-else-if="this.$store.state.git.selectedFileName !== '' ">
            <h1>{{this.$store.state.git.selectedFileName}}</h1>
        </div>
        <div class="fileContent" >
            <!-- <ssh-pre language="js" copy-button @copied="onCopiedDoSomething"  label="Javascript" dark=true><pre>{{this.$store.state.git.decodeData}}</pre></ssh-pre> -->
            <!-- <ssh-pre language="js" reactive label="Javascript" dark >
                <template>
                    {{this.$store.state.git.decodeData}}
                </template>
            </ssh-pre>
            <ssh-pre language="html" reactive label="HTML">
                {{this.$store.state.git.decodeData}}
            </ssh-pre> -->
            <!-- <pre>
                {{this.$store.state.git.decodeData}}
            </pre> -->
            
            <!-- <input type="checkbox" v-model="lineNumbers"> Linenumbers -->
            <prism-editor
                class="my-editor"
                v-model="this.$store.state.git.decodeData"
                :highlight="highlighter"
                line-numbers
                ignoreTabKey
                language="JavaScript"
                readonly 
            >
            </prism-editor>
        </div>
    </div>
</template>


<script>
// npm i vue-prismjs 
// npm install vue-prism-editor@alpha

import { mapMutations } from 'vuex'
// import SshPre from 'simple-syntax-highlighter'
// import 'simple-syntax-highlighter/dist/sshpre.css'


  // import Prism Editor
  import { PrismEditor } from 'vue-prism-editor';
  import 'vue-prism-editor/dist/prismeditor.min.css'; // import the styles somewhere

  // import highlighting library (you can use any library you want just return html string)
  import { highlight, languages } from 'prismjs/components/prism-core';
  import 'prismjs/components/prism-clike';
  import 'prismjs/components/prism-javascript';
  import 'prismjs/themes/prism-dark.css'; // import syntax highlighting styles

export default {
    components : {
        // SshPre,
        PrismEditor,
    },
    data(){
        return{
            file : '파일명',
            s_decodeData : this.$store.state.git.decodeData,
            // lineNumbers: true,
        }
    },
    mutations :{
       
    },
    actions : {
        
    },
    methods: {
        highlighter(code){
            return highlight(code, languages.js)
        },

        ...mapMutations({
            getDecodeData : 'git/getDecodeData',
        }),
        input_S_decodeData(){
           console.log(this.s_decodeData)
           return this.s_decodeData = this.$store.state.git.decodeData
        },
    },
    mounted() {
        this.input_S_decodeData()
    },
    watch : {
        // s_decodeData : function(){
        //    this.input_S_decodeData()
        // }
    },
    updated(){
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
    color: rgb(161, 177, 192);
    font-size: 22px;
}
.my-editor{
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 17px;
    line-height: 1.5;
    padding: 5px;
}
.prism-editor__textarea:focus {
outline: none;
}

.fileContent::-webkit-scrollbar, .my-editor::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
}
.ssh-pre[data-label],
.ssh-pre{
    margin-top: 0px;
}

</style>