<template>
    <div class="Repo">
        <h1>GitHub Repository</h1>
        <div class="nodeTree">
            <h1>Repository List</h1>
            <br>
            <div class="repoContent">
                <span  @click.stop="getFilesByRepo($event,index)" v-for="a,index in $store.state.git.gitrepo " :key="index" :id="`btn${index}`">
                    {{a.name}}<br>
                </span>
            </div>
        </div>
    </div>
</template>
 
<script>
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
import axios from 'axios' // eslint-disable-line no-unused-vars

const key = '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';

export default {
    data() {
        return {
        }
    },
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
            e.stopPropagation();

            let target = document.getElementById(`btn${index}`)// eslint-disable-line no-unused-vars
            // e.target과 btn${index} 가 다르면 return 
            if(e.target !== target) return

            this.axios.get(`https://api.github.com/repos/Juwon-Yun/${e.target.innerText}/contents`, {key})
            .then((result) => {
                // let code = `<ul>`
                console.log(result)
                result.data.forEach(element => {
                    console.log(element);
                    let ul = document.createElement('ul'); // eslint-disable-line no-unused-vars
                    let li = document.createElement('li');

                    // if(element.type === 'dir'){
                    li.innerHTML = `${element.name}`;
                    // }else if(element.type === 'file'){
                    //     li.innerHTML = `${element.name}+${element.type}`;
                    // } 
                    // console.log('this => ',this.sendFileContent)
                    li.setAttribute('data-repoName', element.name);

                    li.addEventListener('click', this.sendFileContent(element.name));

                    e.target.appendChild(ul);
                    ul.appendChild(li);
                });

                // for(let i = 0; i < result.data.length; i++){
                //     if(result.data[i].type === 'dir'){
                //         li.innerHTML = `${result.data[i].name} ! dir !`
                //     }else if(result.data[i].type === 'file'){
                //         // li.innerHTML = '';
                //         li.innerHTML = `${result.data[i].name} ! file !`;
                //     }
                //         // bind => 함수의 포인터를 만들어서 반환한다.
                //         // li.addEventListener('click', this.sendFileContent.bind(this, element.name));
                // }
                // result.data.forEach( (element) => {

                    // if(!document.querySelector('.repoContent').hasChildNodes){
                    //     // document.querySelector('.repoContent').children.removeAttribute('click');
                    //     code += `<li>하위 파일 및 폴더가 존재하지 않습니다.</li>`;
                    //     code += `</ul>`
                    //      e.target.innerHTML += code
                    //     console.log('return함')
                    //     return
                    // }

                   
                // });
            }).catch((err) => {
                console.log(err)
            });

        },

        sendFileContent(p_fileName){
            console.log('p_name =>  ',p_fileName)

            // for(const key in p_fileName){
            //     console.log(`${key} : ${p_fileName[key]}`)
            // }

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
    overflow: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}
.nodeTree::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
}
/* .nodeTree:hover{
    height: 40vh;
} */
.repoContent{
    color: #eee;
}
ul {
    padding-left: 20px;
}
li{
    padding-left: 20px;
    text-decoration: none;
}
</style>