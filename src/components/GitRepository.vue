<template>
    <div class="Repo">
        <h1>GitHub Repository</h1>
        <div class="nodeTree">
    <h1>Repository List</h1>
    <div class="repoContent">
        <!-- @click.stop => 이벤트 버블링을 막을수있는 vue 문법  -->
        <strong  @click.stop="getFilesByRepo($event,index)" v-for="a,index in $store.state.git.gitrepo " :key="index" :id="`btn${index}`">
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

const key = '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';

export default {
    methods: {
        ...mapMutations({
            selectRepo : 'git/selectRepo',
            sendFileContent : 'git/sendFileContent',

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
        getFilesByRepo(e,index){
        // getFilesByRepo(e){
            // e.target(e의 객체 자체를 의미함) => 이벤트 발생을 시키는 객체
            // console.log(e.target.innerText)
            // console.log(index)
            let ul = document.createElement('ul'); // eslint-disable-line no-unused-vars
            let li = document.createElement('li');
            e.stopPropagation();

            let target = document.getElementById(`btn${index}`)// eslint-disable-line no-unused-vars
            // e.target과 btn${index} 가 다르면 return 
            if(e.target !== target) return

            this.axios.get(`https://api.github.com/repos/Juwon-Yun/${e.target.innerText}/contents`, {key})
            .then((result) => {
                let code = `<ul>`
                result.data.forEach( (element) => {

                    if(!document.querySelector('.repoContent').hasChildNodes){
                        // document.querySelector('.repoContent').children.removeAttribute('click');
                        code += `<li>하위 파일 및 폴더가 존재하지 않습니다.</li>`;
                        code += `</ul>`
                         e.target.innerHTML += code
                        console.log('return함')
                        return
                    }

                    // console.log(element.type)
                    if(element.type === 'dir'){
                        li.innerHTML = `${element.name} ! dir !`
                    }else{
                        // li.innerHTML = '';
                        li.innerHTML = `${element.name} ! file !`;
                    }
                        // bind => 함수의 포인터를 만들어서 반환한다.
                        // li.addEventListener('click', this.sendFileContent.bind(this, element.name));
                        console.log('this => ',this.sendFileContent)
                        li.addEventListener('click', this.sendFileContent);

                        e.target.appendChild(ul);
                        ul.appendChild(li);
                });
                
                
            }).catch((err) => {
                console.log(err)
            });

        },

        sendFileContent(p_fileName){
          alert(p_fileName)
          console.log('sendFileContentd에용 ',p_fileName)
          this.selectRepo(p_fileName)
        },

        isDir(){

        }
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
li{
    padding-left: 20px;
    text-decoration: none;
}
</style>