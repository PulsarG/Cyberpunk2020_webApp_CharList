<template>
    <div class="stats">
        <div class="titlestats">
            <label for="" class="statslabel"><strong style="color: white">STATS</strong></label>
            <div></div>
        </div>

        <div class="statscount">
            <div class="statsrow">
                <div class="stat">
                    <label for="stat" class="statlabel"> <strong>INT</strong> </label>
                    <input type="number" name="stat" id="stat" class="statinp">
                </div>
                <div class="stat">
                    <label for="stat" class="statlabel"> <strong>REF</strong> </label>
                    <input type="number" name="stat" id="stat" class="statinp">
                </div>
                <div class="stat">
                    <label for="stat" class="statlabel"> <strong>TECH</strong> </label>
                    <input type="number" name="stat" id="stat" class="statinp">
                </div>
                <div class="stat">
                    <label for="stat" class="statlabel"> <strong>COOL</strong> </label>
                    <input type="number" name="stat" id="stat" class="statinp">
                </div>
            </div>
            <div class="statsrow">
                <div class="stat">
                    <label for="stat" class="statlabel"> <strong>ATTR</strong> </label>
                    <input type="number" name="stat" id="stat" class="statinp">
                </div>
                <div class="stat">
                    <label for="stat" class="statlabel"> <strong>LUCK</strong> </label>
                    <input type="number" name="stat" id="stat" class="statinp">
                </div>
                <div class="stat">
                    <label for="stat" class="statlabel"> <strong>MA</strong> </label>
                    <input type="number" name="stat" id="stat" class="statinp">
                </div>
                <div class="stat">
                    <label for="stat" class="statlabel"> <strong>BODY</strong> </label>
                    <input type="number" name="stat" id="stat" class="statinp">
                </div>
            </div>
            <div class="statsrow">
                <div class="stat">
                    <label for="stat" class="statlabel"> <strong>EMP</strong> </label>
                    <input type="number" name="stat" id="stat" class="statinp">
                </div>
                <div class="stat">
                    <label for="stat" class="statlabel"> <strong>Run</strong> </label>
                    <input type="number" name="stat" id="stat" class="statinp">
                </div>
                <div class="stat">
                    <label for="stat" class="statlabel"> <strong>Leap</strong> </label>
                    <input type="number" name="stat" id="stat" class="statinp">
                </div>
                <div class="stat">
                    <label for="stat" class="statlabel"> <strong>Lift</strong> </label>
                    <input type="number" name="stat" id="stat" class="statinp">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.statslabel {
    background-color: black;
    width: 15%;
    margin-top: 3px;
    display: flex;
}

.stats {
    display: flex;
    flex-direction: column;
}

.statscount {
    display: flex;
    flex-direction: column;
}

.statsrow {
    display: flex;
    flex-direction: row;
    margin-top: 3px;
}

.stat {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.statinp {
    width: 30%;
    height: 25px;
}

.statlabel {
    margin-right: 10px;
}
</style>