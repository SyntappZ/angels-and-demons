<template>
  <div class="background">
    <img class="bg-img" :src="bgImg" alt />
    <div class="welcome-wrap">
      <div class="welcome">
        <h4 class="skewed">{{ theSkew }}</h4>
      </div>

      <h5>
      Information on many types of demons, <br> or angels if thats what you like.
      </h5>
      <a href="https://en.wikipedia.org/wiki/Demonology" target="_blank">
        <button class="btn">
          more info
          <i class="fas fa-arrow-right"></i>
        </button>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  props: ['imgText', 'bgImg', 'theSkew']
};
</script>

<style scoped>
.background {
  width: 100%;
  position: relative;
  
}
.bg-img {
  width: 100%;
  object-fit: cover;
  object-position: 0 0;
  height: 90vh;
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

@media (max-width: 1024px) {
  
  .bg-img {
    object-position: 100% 0;
    height:60vh;
  }
  .welcome-wrap {
    width: 100%;
    left: 0;
  }
  .welcome {
    background-color: rgba(255, 255, 255, 0.712);
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
}
</style>
