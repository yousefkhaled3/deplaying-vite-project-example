<template>
  <h1 class="text-center mt-5 mb-5">about</h1>
  <MyContent />
  <div class="container mt-5">
    <div class="drag-area">
      <img class="about-picther" src="../image/static-img.png" />
      <input
        type="file"
        class="file"
        name="file"
        ref="fileInput"
        multiple
        @change="onfileselect"
      />
    </div>
    <div class="about-preview">
      <div class="image" v-for="(image, index) in images" :key="index">
        <span class="delete" @click="deleteimage(index)">&times;</span>
        <img class="img-about" :src="image.url" />
      </div>
    </div>
  </div>
  <MyFooter />
</template>

<script>
import MyContent from "@/components/MyContent.vue";
import MyFooter from "@/components/MyFotter.vue";

export default (await import("vue")).defineComponent({
  data() {
    return {
      images: [],
      isdragging: false,
    };
  },
  methods: {
    selectfiles() {
      this.$refs.fileInput.click();
    },
    onfileselect(event) {
      const files = event.target.files;
      if (files.length === 0) return;
      for (let i = 0; i < files.length; i++) {
        if (files[i].type.split("/")[0] != "image") continue;
        if (!this.images.some((e) => e.name === files[i].name)) {
          this.images.push({
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          });
        }
      }
    },
    deleteimage(index) {
      this.images.splice(index, 1);
    },
  },
  components: {
    MyContent,
    MyFooter,
  },
});
</script>
