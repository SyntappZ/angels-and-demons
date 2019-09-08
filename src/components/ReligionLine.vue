<template>
  <div>
    <div class="bg">
      <div class="line">
        <h3>Angel Religions</h3>
        <v-sparkline
          class="spark"
          :value="value"
          color="#fff"
          :smooth="radius || false"
          :padding="padding"
          :line-width="width"
          :stroke-linecap="lineCap"
          :fill="fill"
          :type="type"
          :show-labels="true"
          :labels="labels"
          label-size="4"
         
        ></v-sparkline>
      </div>
    </div>
    <div class="myth">
      <v-container grid-list-md text-center>
        <v-layout wrap>
          <v-flex xs12>
            <div class="title">
              <h4>Mythology links</h4>
            </div>
          </v-flex>

          <v-flex v-for="link in mythology" :key="link.title" xs12 sm6 md4 lg2>
            <a :href="link.url" target="_blank">{{ link.title }}</a>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
import angelsList from "../angels.js";

export default {
  data() {
    return {
      angels: [],
      religion: [],
      labels: [],
      width: 8,
      radius: 0,
      padding: 6,
      lineCap: "round",
      color: "#fff",
      value: [],
      fill: false,
      type: "bar",
      mythology: [
        {
          url: "https://en.wikipedia.org/wiki/Akkadian_literature#Mythology",
          title: "Akkadian"
        },
        {
          url: "https://en.wikipedia.org/wiki/Greek_mythology",
          title: "Greek"
        },
        {
          url: "https://en.wikipedia.org/wiki/Christian_mythology",
          title: "Christian"
        },
        {
          url: "https://en.wikipedia.org/wiki/Hindu_mythology",
          title: "Hindu"
        },
        {
          url: "https://en.wikipedia.org/wiki/Japanese_mythology",
          title: "Japanese"
        },
        {
          url:
            "https://en.wikipedia.org/wiki/Mythologies_of_the_indigenous_peoples_of_the_Americas",
          title: "Americas"
        }
      ]
    };
  },
  created() {
    let angels = angelsList.map(x => x.angel.replace(/,|\//, " "));
    let names = [];

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
  mounted() {
    this.value = this.religion.map(x => x.amount);
    this.labels = this.religion.map(x => x.religion);

   
  },
  computed: {
    
  }
};
</script>

<style  scoped>
.bg {
  width: 100%;
  background-color: #111;
}
.line {
  width: 80%;
  margin: auto;
  text-align: center;
  padding-top: 50px;
  color: white;
  background: rgba(167, 167, 167, 0.062);
  outline: white solid 1px;
  letter-spacing: 0.2px;
}
.myth {
  width: 80%;
  margin: auto;
  text-align: center;
  color: white;
}
h3 {
  padding: 20px 0;
  letter-spacing: 2px;
  font-weight: 100;
}
.spark {
  margin-top: 50px;
  padding-bottom: 40px;
}
.title {
  height: 60px;
  line-height: 60px;
  margin: 50px auto;
}
.title h4 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #000;
}

.title h4:before,
.title h4:after {
  background-color: rgb(0, 0, 0);
  content: "";
  display: inline-block;
  height: 3px;
  position: relative;
  vertical-align: middle;
  width: 20%;
  margin: 0 10px;
}

a {
  display: inline-block;
  color: #222;
  text-decoration: none;
  padding: 10px 0;
  margin: 20px 0;
  transition: 0.3s;
}
a:hover {
  text-shadow: 0 0 10px #333;
  letter-spacing: 1px;
}
@media (max-width: 1024px) {
  .line,
  .myth {
    width: 100%;
  }
  .title h4:before,
  .title h4:after {
    width: 50px;
  }
}

@media (max-width: 600px) {
  .line,
  .myth {
    width: 100%;
    outline: none;
  }
  .title h4 {
    font-size: 18px;
    border-bottom: #000 solid 3px;
  }
  .title h4:before,
  .title h4:after {
    width: 0;
  }
  .title {
    margin: 0 auto 40px auto;
    border-bottom: solid;
    width: 80%;
  }
  a {
    border: solid 2px #333;
    width: 80%;
    padding: 15px 0;
    margin: 5px 0;
    transition: 0.3s;
  }
}
</style>