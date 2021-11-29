<template>
  <div class="container">
    <nav>
      <a href="#">KanBoo</a>
    </nav> 
    <GitAndIssue/>
  </div>
</template>

<script>
import GitAndIssue from './components/GitAndIssue.vue'

export default {
  name: 'App',
  components: {
    GitAndIssue,
  },
  
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #16161A;
}

nav {
  widows: 100%;
  height: 70px;
  background: #75757529;
  color: #ffffff;
}

</style>