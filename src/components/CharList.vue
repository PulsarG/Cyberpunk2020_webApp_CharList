<template>
  <div class="charlist">
    <stats-block></stats-block>

    <skills-block></skills-block>

    <cybernetics-block></cybernetics-block>

    <gear-block></gear-block>

    <weapons-block></weapons-block>

    <char-bio> </char-bio>
    <char-look></char-look>
    <!-- <div class="check">
            <div v-for="i in 10">
                <input type="checkbox" :checked="i <= checkedCount"
                    @change="checkedCount = checkedCount < i ? i : i - 1">
            </div>
        </div> -->
  </div>
</template>

<script>
import StatsBlock from "@/listcomponent/StatsBlock.vue";
import SkillsBlock from "@/listcomponent/SkillsBlock.vue";
import CyberneticsBlock from "@/listcomponent/CyberneticsBlock.vue";
import GearBlock from "@/listcomponent/GearBlock.vue";
import WeaponsBlock from "@/listcomponent/WeaponsBlock.vue";
import CharBio from "@/listcomponent/CharBio.vue";
import CharLook from "@/listcomponent/CharLook.vue";

export default {
  components: {
    StatsBlock,
    SkillsBlock,
    CyberneticsBlock,
    GearBlock,
    WeaponsBlock,
    CharBio,
    CharLook,
  },
  data() {
    return {
      checkedCount: 0,
    };
  },
};
</script>

<style scoped>
.check {
  display: flex;
  flex-direction: row;
}
</style>
