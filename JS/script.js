const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: "Messaggio Stampato",
      Imgsrc:
        "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
      ImgClass: "ImgTest",
    };
  },
  methods: {},
});

app.mount("#app");
