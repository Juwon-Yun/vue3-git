<template>
<div class="gitContainer">
  <div class="leftDiv">
      <GitRepository/>
      <Issue/>
  </div>
  <div class="rightDiv">
      <GitCode/>
  </div>
</div>
</template>

<script>
import GitRepository from './GitRepository.vue'
import Issue from './Issue.vue'
import GitCode from './GitCode.vue'

export default {
    components:{
        GitRepository,
        Issue,
        GitCode,
    },
}
</script>

<style>
.gitContainer{
    display: flex;
}

h1{
    color: #eee;
}

</style>