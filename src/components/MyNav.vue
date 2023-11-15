<template>
  <div class="header">
    <div class="container">
      <div class="header-content">
        <div class="select-elment">
          <select
            class="select-language"
            v-model="$i18n.locale"
            v-on:change="changevalue"
          >
            <option
              v-for="locale in $i18n.availableLocales"
              :key="`locale- ${locale} `"
              :value="locale"
            >
              {{ locale }}
            </option>
          </select>
        </div>
        <nav>
          <router-link to="/">{{ $t("Home") }}</router-link> |
          <router-link to="/about">{{ $t("About") }}</router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changevalue() {
      localStorage.setItem("locale", this.$i18n.locale);
      if (localStorage.getItem("locale")) {
        this.$i18n.locale = localStorage.getItem("locale");
      }
      if (localStorage.getItem("locale") == "ar") {
        document.querySelector("body").style.direction = "rtl";
      }
      if (localStorage.getItem("locale") == "en") {
        document.querySelector("body").style.direction = "ltr";
      }
    },
  },
};
</script>
