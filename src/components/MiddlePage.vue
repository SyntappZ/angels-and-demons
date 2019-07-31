<template>
  <div class="midPage">
    <div class="background">
      <img class="bg-img" src="demon.jpg" alt />
      <div class="welcome-wrap">
        <div class="welcome">
          <h4 class="skewed">Welcome To Angels & Demons</h4>
        </div>

        <h5>
          Information on many types of demons,
          <br />or angels if thats how you are.
        </h5>
       <a href=""> <button class="btn">
          more info
          <i class="fas fa-arrow-right"></i>
        </button></a>
      </div>
    </div>

    <v-container grid-list-md text-center>
      <v-layout wrap>
        <v-flex xs12>
          <div class="title">
            <h4>demons & angels</h4>
          </div>
        </v-flex>
        <v-flex class="img-title-wrap" v-for="image in images" :key="image.title" xs12 sm12 md4 lg4>
          <div class="img-wrap">
            <img :src="image.url" alt />
          </div>
          <h3 class="img-title">{{ image.title }}</h3>
        </v-flex>

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
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Christianandapollyon.jpg/250px-Christianandapollyon.jpg",
          title: "Abaddon/Apollyon"
        },
        {
          url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Caacrinolaas.png/220px-Caacrinolaas.png",
          title: "Glasya-Labolas"
        },
        {
          url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Lilith_%28John_Collier_painting%29.jpg/220px-Lilith_%28John_Collier_painting%29.jpg",
          title: "Lilith"
        }
      ],
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
  }
};
</script>

<style scoped>
.midPage {
  text-align: center;
  width: 80%;
  margin: auto;
}

.background {
  width: 100%;
  position: relative;
}
.bg-img {
  width: 100%;
  object-fit: cover;
  object-position: 0 0;
  height: 70vh;
}
.welcome-wrap {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 100px;
  margin: auto;
  width: 50%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.welcome {
  width: 580px;
  height: 60px;
  line-height: 60px;
  background-color: rgb(255, 255, 255);
  transform: skew(20deg);
}
.skewed {
  font-family: Arial, Helvetica, sans-serif;
  transform: skew(-20deg);
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
}
.title {
  height: 60px;
  line-height: 60px;
  border-bottom: solid 3px #000;
  margin: 30px auto;
}
.title h4 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #000;
}
h5 {
  color: white;
  font-size: 19px;
  line-height: 25px;
  letter-spacing: 2px;
}
.btn {
  color: white;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  border: solid 1px white;
  padding: 15px 20px;
}

.img-title {
  text-align: center;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.img-wrap {
  width: 300px;
  height: 250px;
  margin: 10px auto;
  border: solid 3px #000;
}
.img-wrap img {
  width: 100%;
  object-fit: cover;
  object-position: 0 -30px;
  height: 244px;
  filter: grayscale(100%);
}
h1 {
  padding: 40px 0;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
}
.img-title-wrap {
  margin: 50px 0;
}
a {
  display: inline-block;
  color: #333;
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
  .midPage {
    width: 100%;
  }
  .bg-img {
    object-position: 100% 0;
  }
  .welcome-wrap {
    width: 100%;
    left: 0;
  }
  .welcome {
    background-color: rgba(255, 255, 255, 0.712);
  }
  .img-wrap {
    width: 500px;
    height: 450px;
  }
  .img-wrap img {
    height: 444px;
  }
}
@media (max-width: 600px) {
  .welcome {
    width: 80%;
  }
  .skewed {
    font-size: 16px;
  }
  h5 {
    font-size: 14px;
  }
  .img-wrap {
    width: 90%;
    height: 260px;
  }
  .img-wrap img {
    height: 254px;
  }
}
</style>
