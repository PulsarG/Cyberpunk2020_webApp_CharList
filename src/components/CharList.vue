<template>
    <div class="charlist">

        <stats-block ></stats-block>

       <!--  <div class="head">

            <div class="allstats">

                <div class="nickblock">
                    <h1>{{ $store.state.Charstats.nick }}</h1>
                    <label class="nicklabel" for="nick"> <strong style="color: white">NAME</strong></label>
                    <input type="text" id="nick" class="nick" v-model="nick">
                </div>

                <div class="roleblock">
                    <label class="nicklabel" for="role"><strong style="color: white">ROLE</strong></label>
                    <select name="role" id="role" class="nick">
                        <option value="msk"><strong style="color: white">SELECT</strong></option>
                        <option value="msk"><strong style="color: white">Solo</strong></option>
                        <option value="msk"><strong style="color: white">Rocker</strong></option>
                        <option value="msk"><strong style="color: white">Netrunner</strong></option>
                        <option value="msk"><strong style="color: white">Media</strong></option>
                        <option value="msk"><strong style="color: white">Nomad</strong></option>
                        <option value="msk"><strong style="color: white">Fixer</strong></option>
                        <option value="msk"><strong style="color: white">Cop</strong></option>
                        <option value="msk"><strong style="color: white">Corp</strong></option>
                        <option value="msk"><strong style="color: white">Techie</strong></option>
                        <option value="msk"><strong style="color: white">Medtechie</strong></option>
                    </select>
                </div>

            </div>

            <div class="photo">

            </div>
        </div> -->

    </div>
</template>

<script>
import StatsBlock from "@/listcomponent/StatsBlock.vue"
export default {
    components: { StatsBlock },
    props: {
       
    },
    data() {
        return {
          
        }
    },
}
</script>

<style scoped>
.charlist {
    border: 1px solid black;
}

</style>