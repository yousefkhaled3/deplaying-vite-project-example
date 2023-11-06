<template>
  <div class="header">
    <div class="container">
      <div class="header-content">
        <div class="select-elment">
          <select
            class="select-language"
            v-model="val"
            v-on:change="changevalue"
          >
            <option value="en">en</option>
            <option value="khaled">ar</option>
          </select>
        </div>
        <nav>
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: localStorage.getItem("select-value"),
    };
  },
  methods: {
    changevalue() {
      localStorage.setItem("select-value", this.val);
    },
  },
};
</script>
