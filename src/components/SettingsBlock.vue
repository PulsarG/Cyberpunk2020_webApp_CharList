<template>
  <div class="settings">
    <div>
      <h4>Авторасчет СТАТов</h4>
    </div>
    <div>
      <label class="checkbox-green">
        <input type="checkbox" disabled />
        <span
          class="checkbox-green-switch"
          data-label-on="On"
          data-label-off="Off"
        ></span>
      </label>
    </div>
    <div>
      <h4>Авторасчет Брони</h4>
    </div>
    <div>
      <label class="checkbox-green">
        <input type="checkbox" disabled />
        <span
          class="checkbox-green-switch"
          data-label-on="On"
          data-label-off="Off"
        ></span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openSettings() {
      if (!this.isOpenSettings) {
        this.isOpenSettings = true;
      } else {
        this.isOpenSettings = false;
      }
    },
  },
};
</script>

<style scoped>
h4 {
  color: orange;
}
.settings {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.checkbox-green {
  display: inline-block;
  height: 28px;
  line-height: 28px;
  margin-right: 10px;
  position: relative;
  vertical-align: middle;
  font-size: 14px;
  user-select: none;
}
.checkbox-green .checkbox-green-switch {
  display: inline-block;
  height: 28px;
  width: 90px;
  box-sizing: border-box;
  position: relative;
  border-radius: 2px;
  background: #848484;
  transition: background-color 0.3s cubic-bezier(0, 1, 0.5, 1);
}
.checkbox-green .checkbox-green-switch:before {
  content: attr(data-label-on);
  display: inline-block;
  box-sizing: border-box;
  width: 45px;
  padding: 0 12px;
  position: absolute;
  top: 0;
  left: 45px;
  text-transform: uppercase;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 10px;
  line-height: 28px;
}
.checkbox-green .checkbox-green-switch:after {
  content: attr(data-label-off);
  display: inline-block;
  box-sizing: border-box;
  width: 44px;
  border-radius: 1px;
  position: absolute;
  top: 1px;
  left: 1px;
  z-index: 5;
  text-transform: uppercase;
  text-align: center;
  background: white;
  line-height: 26px;
  font-size: 10px;
  color: #777;
  transition: transform 0.3s cubic-bezier(0, 1, 0.5, 1);
}
.checkbox-green input[type="checkbox"] {
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.checkbox-green input[type="checkbox"]:checked + .checkbox-green-switch {
  background-color: #70c767;
}
.checkbox-green input[type="checkbox"]:checked + .checkbox-green-switch:before {
  content: attr(data-label-off);
  left: 0;
}
.checkbox-green input[type="checkbox"]:checked + .checkbox-green-switch:after {
  content: attr(data-label-on);
  color: #4fb743;
  transform: translate3d(44px, 0, 0);
}

/* Hover */
.checkbox-green
  input[type="checkbox"]:not(:disabled)
  + .checkbox-green-switch:hover {
  cursor: pointer;
}
.checkbox-green
  input[type="checkbox"]:not(:disabled)
  + .checkbox-green-switch:hover:after {
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4);
}

/* Disabled */
.checkbox-green input[type="checkbox"]:disabled + .checkbox-green-switch {
  opacity: 0.6;
  filter: grayscale(50%);
}

/* Focus */
.checkbox-green.focused .checkbox-green-switch:after {
  box-shadow: inset 0px 0px 4px #ff5623;
}
</style>
