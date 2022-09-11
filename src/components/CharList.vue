<template>
  <div class="charlist">
    <stats-block></stats-block>
    <skills-block></skills-block>
    <cybernetics-block></cybernetics-block>
    <gear-block></gear-block>
    <weapons-block></weapons-block>
    <char-bio></char-bio>
    <char-look></char-look>
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
</style>
