<template>
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
</template>

<script>
export default {

}
</script>

<style scoped>
.nicklabel {
    background-color: black;
    width: 20%;
}

.roleblock {
    margin-top: 3px;
    width: 100%;
    display: flex;
}
</style>