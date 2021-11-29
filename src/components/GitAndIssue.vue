<template>
<div class="gitContainer">
  <div class="leftDiv">
      <GitRepository/>
      <!-- <Issue/> -->
  </div>
  <div class="rightDiv">
      <GitCode/>
  </div>
</div>
</template>

<script>
import GitRepository from './GitRepository.vue'
// import Issue from './Issue.vue'
import GitCode from './GitCode.vue'

export default {
    components:{
        GitRepository,
        // Issue,
        GitCode,
    },
}
</script>

<style>
.gitContainer{
    padding: 10px 40px;
    display: flex;
    height: 85%;
    justify-content: space-between;
}
.leftDiv{
    width: 45%;
}
.rightDiv{
    width: 50%;
    height: 100%;
}

h1{
    color: #eee;
}

</style>