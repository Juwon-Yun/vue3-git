<template>
    <div class="Repo">
        <h1>GitHub Repository</h1>
        <div class="nodeTree">
            <button type="button" id="backBtn">back</button>
    <h1>commit List</h1>
    <div id="repoContent">123123</div>

    <hr>
    <input id="id" type="text" placeholder="repository url" value="Juwon-Yun">
    <button type="button">Check</button>
        </div>
    </div>
</template>
 
<script>

export default {
    mounted() {
        this.$store.actions.getRepoList()
    },
}

</script>
 
<style>
.nodeTree{
    height: 20vh;
    background-color: #2C2F3B;
}
#repoContent{
    color: #eee;
}
</style>