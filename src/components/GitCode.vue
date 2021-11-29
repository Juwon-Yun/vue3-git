<template>
    <div class="gitCode">
        <h1>파일명</h1>
        <div class="fileContent"></div>
    </div>
</template>

<script>
export default {

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
}
.fileContent::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
}
</style>