<template>
    <div class="charlist">

        <stats-block></stats-block>

        <skills-block></skills-block>

        <cybernetics-block></cybernetics-block>

        <gear-block></gear-block>

        <weapons-block></weapons-block>

        <!-- <div class="check">
            <div v-for="i in 10">
                <input type="checkbox" :checked="i <= checkedCount"
                    @change="checkedCount = checkedCount < i ? i : i - 1">
            </div>
        </div> -->
    </div>
</template>

<script>
import StatsBlock from "@/listcomponent/StatsBlock.vue"
import SkillsBlock from "@/listcomponent/SkillsBlock.vue"
import CyberneticsBlock from "@/listcomponent/CyberneticsBlock.vue";
import GearBlock from "@/listcomponent/GearBlock.vue";
import WeaponsBlock from "@/listcomponent/WeaponsBlock.vue";

export default {
    components: { StatsBlock, SkillsBlock, CyberneticsBlock, GearBlock, WeaponsBlock, },
    data() {
        return {
            checkedCount: 0,
        }
    },
}
</script>

<style scoped>
.check {
    display: flex;
    flex-direction: row;
}
</style>