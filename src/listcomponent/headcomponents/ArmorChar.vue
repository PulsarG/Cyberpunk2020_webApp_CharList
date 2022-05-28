<template>
    <div class="armorblock">
        <div class="armortitle">
            <div class="armortitleone">
                <strong style="color: white">Location</strong>
            </div>
            <div class="armortitleone">
                <strong style="color: white">Armor SP</strong>
            </div>
        </div>

        <div class="armorstat">
            <div class="armorlocation">
                <div class="armor"><strong>Head <br> 1</strong></div>
                <div class="armor"><strong>Torso <br> 2-4</strong></div>
                <div class="armor"><strong>R. Arm <br> 5</strong></div>
                <div class="armor"><strong>L. Arm <br> 6</strong></div>
                <div class="armor"><strong>R. Leg <br> 7-8</strong></div>
                <div class="armor"><strong>L. Leg <br> 9-0</strong></div>
            </div>
            <div class="armorlocation">
                <div class="armor"><input type="number" name="" id="" class="armorinp"></div>
                <div class="armor"><input type="number" name="" id="" class="armorinp"></div>
                <div class="armor"><input type="number" name="" id="" class="armorinp"></div>
                <div class="armor"><input type="number" name="" id="" class="armorinp"></div>
                <div class="armor"><input type="number" name="" id="" class="armorinp"></div>
                <div class="armor"><input type="number" name="" id="" class="armorinp"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.armorblock {
    display: flex;
    flex-direction: row;
    margin-top: 3px;
}

.armortitle {
    display: flex;
    flex-direction: column;
    width: 20%;
    /*  border: 2px solid blue; */
}

.armortitleone {
    height: 40px;
    margin: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;

}

.armorstat {
    display: flex;
    flex-direction: column;
    width: 80%;
}

.armorlocation {
    display: flex;
    flex-direction: row;
}

.armor {
    border: 1px solid black;
    width: 20%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.armorinp {
    display: flex;
    width: 90%;
    height: 90%;
}
</style>