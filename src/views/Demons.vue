<template>
  <div class="demons">
    <pageDetails :list="getList" title="Demons" :images="demonImages" :religion="religion" />
  </div>
</template>

<script>
import pageDetails from "../components/PageDetails";
import demonsList from "../demons.js";
export default {
  components: {
    pageDetails
  },
  created() {
    this.$store.state.images = []
    let demons = demonsList.map(x => x.demon);
    let names = [];
    demons.forEach(x => {
      names.push(x.split("/")[0]);
    });

    demonsList.forEach((x, i) => {
      this.demons.push({
        title: x.demon.replace(/-/g, ' ').replace(/=/g, '-'),
        religion: x.religion,
        name: names[i].replace(/-/g, ' ').replace(/=/g, '-')
      });
    });
    if (window.innerWidth > 1500) {
      this.demonImages.length = 7;
    }

    let religions = this.demons
      .map(x => x.religion)
      .map(x =>
        x.replace(
          /mythology|demonology|eschatology|folklore|&|and|of|theology|or|None|,/gi,
          ""
        )
      )
      .join(" ")
      .split(" ")
      .filter(x => x != "");

    let types = [...new Set(religions)];

    for (let i = 0; i < types.length; i++) {
      this.religion.push({
        religion: types[i],
        amount: religions.filter(x => x == types[i]).length
      });
    }
  },
  data() {
    return {
      demons: [],
      religion: [],
      demonImages: [
        { img: "blackeyes.jpg" },
        { img: "demon2.jpg" },
        { img: "demon3.jpg" },
        { img: "demon4.jpg" },
        { img: "demon5.jpg" },
        { img: "demon6.jpg" },
        { img: "demon7.jpg" },
       
        { img: "demon9.jpg" }
      ]
    };
  },
  methods: {},
  computed: {
    getList() {
      return this.demons;
    }
  }
};
</script>

<style scoped>
.demons {
  background-color: rgb(240, 240, 240);
  border-top: solid 3px #333;
}
</style>
