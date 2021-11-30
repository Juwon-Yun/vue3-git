<template>
<div class="issueDiv">
    <h1>Issue</h1>
    <div class="addIssue">
        <input type="text" name="" id="" size="60">
        <input type="button" name="" id="" value="등록">
    </div>
    <hr>
    <div class="Issues">
        <div class="getIssue" v-for="a in $store.state.git.issues" :key="a">
            {{a.fileName}} &nbsp; {{a.content}} <br>
            {{a.nickname}}&nbsp;{{a.startDate}}&nbsp;{{a.currentTime}}
            <input type="button" value="버그">
        </div>
    </div>

    <!-- 드롭다운 -->
</div>
</template>

<script>
export default {

}
</script>

<style>
.addIssue{
    height: 7vh;
    background-color: #2C2F3B;
    display: flex;
    justify-content: space-between;

}
.addIssue > input:nth-child(1){
    background: none;
    border: none;
    color: #eee;
    font-size: 18px;
}
.addIssue > input:nth-child(2){
    background-color: chocolate;
    border-radius: 15px;
    width: 5vw;
    height: 40px;
    color: #eee;
    margin-top: 18px;
    outline: none;
    border: none;
    cursor: pointer;
}
.Issues{
    height: 55vh;
    overflow: scroll;
}
.Issues::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
}
.getIssue{
    background-color: #2C2F3B;
    height: 7vh;
    overflow: hidden;
    color : #eee;
    margin-top: 5px;
}
</style>