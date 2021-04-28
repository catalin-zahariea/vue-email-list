var app = new Vue({
  el: "#root",
  data: {
    emailArray: [],
    emailGenerator: "https://flynn.boolean.careers/exercises/api/random/mail",
    emailArrayLength: 10,
  },
  methods: {
    emailGeneratorFunction(axiosUrl, length, array) {
      for (i = 0; i < length; i++) {
        axios.get(axiosUrl).then((response) => {
          const result = response.data;
          array.push(result.response);
        });
      }
    },
  },
  mounted() {
    this.emailGeneratorFunction(
      this.emailGenerator,
      this.emailArrayLength,
      this.emailArray
    );
  },
});
