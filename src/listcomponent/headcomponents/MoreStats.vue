<template>
    <div class="morestats">
        <div class="rep">
            <h4>REP</h4>
            <input type="text" class="morestatsinp">
        </div>

        <div class="rep">
            <h4>CURRENT IP</h4>
            <input type="text" class="morestatsinp">
        </div>

        <div class="rep">
            <h4>HUMANITY</h4>
            <input type="text" class="morestatsinp">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.morestats {
    display: flex;
    flex-direction: row;
    height: 10%;
}

.rep {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.morestatsinp {
    display: flex;
    width: 25%;
    height: 60%;
    margin-left: 3px;
}
</style>