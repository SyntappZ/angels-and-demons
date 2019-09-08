<template>
  <div class="angels">
    <pageDetails :list="getList" title="Angels" :images="angelImages" :religion="religion" />
  </div>
</template>

<script>
import pageDetails from "../components/PageDetails";
import angelsList from "../angels.js";
export default {
  components: {
    pageDetails
  },
  mounted() {
    let angels = angelsList.map(x => x.angel.replace(/,|\//, " "));
    let names = [];
    this.$store.state.images = [];
    angels.forEach(x => {
      if (x == "Harut" || x == "Marut") {
        names.push("Harut and Marut");
      } else if (x == "Munkar" || x == "Nakir") {
        names.push("Munkar and Nakir");
      } else {
        names.push(x.split(" ")[0]);
      }
    });

    angelsList.forEach((x, i) => {
      this.angels.push({
        title: x.angel.replace(/-/g, " "),
        religion: x.religion,
        name: names[i].replace(/-/g, " ")
      });
    });

    if (window.innerWidth > 1500) {
      this.angelImages.pop();
    }

    //religions

    let religions = this.angels.map(x => x.religion);
    let splitArr = religions
      .join(" ")
      .replace(/,/g, "")
      .split(" ")
      .sort();
    let types = [...new Set(splitArr)];

    for (let i = 0; i < types.length; i++) {
      this.religion.push({
        religion: types[i],
        amount: splitArr.filter(x => x == types[i]).length
      });
    }
  },

  data() {
    return {
      angels: [],
      religion: [],
      loaded: false,
      angelImages: [
        { img: "fallenAngel.jpg" },
        { img: "angel3.jpg" },
        { img: "angel4.jpg" }
      ]
    };
  },
  methods: {},
  computed: {
    getList() {
      return this.angels;
    }
  }
};
</script>

<style scoped>
.angels {
  background-color: rgb(240, 240, 240);
  border-top: solid 3px #333;
}
.loader {
  margin-top: 30px;
  text-align: center;
}
</style>
