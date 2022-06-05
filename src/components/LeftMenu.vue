<template>
    <div class="menu">

        <div class="title">
            <h2>Меню и Персонажи</h2>
        </div>

        <div class="mainmenu">

            <h1>CYBERPUNK</h1>
            <button class="btn">2020</button>
            <button class="btn" disabled>RED (soon)</button>

        </div>

        <div>

            <chars-block class="cb" :Chars="Chars"></chars-block>

            <settings-block class="sett"></settings-block>
        </div>
    </div>

    <div class="foott">

        <div class="footer">
            <a href="" style="color: white">by Github.com/PulsarG / 2022</a>
        </div>
    </div>

</template>

<script>
import SettingsBlock from "@/components/SettingsBlock.vue";
import CharsBlock from "@/components/CharsBlock.vue";
export default {
    components: { SettingsBlock, CharsBlock, },
    props: {
        Chars: Array,
    },
}
</script>

<style scoped>

.title {
    margin-left: 110%;
    width: 220px;
}

.menu {
    display: flex;
    flex-direction: column;
}

.btn {
    width: 50%;
    height: 5vh;
}

.mainmenu {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.footer {
    /* position: absolute;
    bottom: 5%; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.foott {
    position: absolute;
    bottom: 5%;
    width: 100%;
}

.cb {
    width: 50%;
    margin-top: 10%;
}

.sett {
    width: 50%;
    margin-top: 10%;
}

h1 {
    color: white;
}
</style>