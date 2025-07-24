<template>
    <div class="home-page">
      <section class="section section-1">
        <div class="hero-text">
            <h1>Co-Creating the Ultimate Experiences</h1>
            <p>In a life of pure mobility</p>
            <el-button round class="about-btn" @click="topage('aboutus')">About Zeekr</el-button>
        </div>
      </section>
      <section class="section section-2">
        <div class="hero-text-2">
            <h1>A New Era Begins</h1>
            <p>Chatswood Grand Opening</p>
        </div>
      </section>
      <section class="section section-3">
        <div class="section-3-text">
            <p class="main-text">Through design, technology, and innovation, we encourage everyone to re-imagine luxury electric automobiles.</p>
            <p class="highlight-text"><span class="black-text">We are </span><span class="orange-text">Zeekr.</span></p>
        </div>
      </section>
      <section class="section section-4">
        <div class="section-4-text">
            <p>Explore Our Models</p>
        </div>
      </section>
      <section class="section section-5">
        <div class="section-5-content">
            <h1 class="zeekr-title">ZEEKR X</h1>
            <p class="zeekr-subtitle">Luxury Urban Cross SUV</p>
            <div class="zeekr-buttons-l">
                <el-button round class="transparent-btn">Learn More</el-button>
                <el-button round class="light-btn">Book a Test Drive</el-button>
            </div>
        </div>
      </section>
      <section class="section section-6">
        <div class="section-6-content">
            <h1 class="zeekr-title">ZEEKR 009</h1>
            <p class="zeekr-subtitle">Pure Electric Luxury MPV</p>
            <div class="zeekr-buttons-r">
                <el-button class="transparent-btn" round>Learn More</el-button>
                <el-button class="light-btn" round>Book a Test Drive</el-button>
            </div>
        </div>
      </section>
      <section class="section section-7">
        <p>Latest News</p>
      </section>
  
   
      <section class="section section-8">
        <div class="picture-grid">
          <div class="picture-card">
            <img src="@/assets/picture1.png" alt="Picture 1" />
            <p>内容 1</p>
          </div>
          <div class="picture-card">
            <img src="@/assets/picture2.png" alt="Picture 2" />
            <p>内容 2</p>
          </div>
          <div class="picture-card">
            <img src="@/assets/picture3.png" alt="Picture 3" />
            <p>内容 3</p>
          </div>
          <div class="picture-card">
            <img src="@/assets/picture4.png" alt="Picture 4" />
            <p>内容 4</p>
          </div>
        </div>
      </section>
  
      
      <section class="section section-9"></section>
    </div>
  </template>
  
  <script setup>
 import { useRouter } from 'vue-router';
 const router = useRouter()
 function topage(path) {
  router.push(`/${path}`)
}
  </script>
  
  <style scoped>
.home-page {
  width: 100%;
  font-family: "Zeekr Text", sans-serif;
}
.section {
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
}  
.section-1 {
  background-image: url('@/assets/home1.png');
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 100px 24px;
  color: #fff;
  width: 100%;
}
.hero-text {
  width: 100%;
}
.hero-text h1 {
  color: #FFF;
  text-align: center;
  font-size: 82px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.hero-text p {
  color: #FFF;
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 33px;
}
.about-btn {
  border-radius: 35px;
  border: 1px solid #FFF;
  background: #000;
  box-shadow: 0px 4px 5px 0px rgba(31, 27, 26, 0.40);
  color: #FFF;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.section-2 {
  background-image: url('@/assets/home2.png');
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 100px 24px;
  color: #fff;
  width: 100%;
}
.hero-text-2 h1 {
  color: var(--Cream, #FFFBF3);
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.hero-text-2 p {
  color: var(--Cream, #FFFBF3);
  text-align: center;
  font-size: 55px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.section-3 {
  background-image: url('@/assets/home3.png');
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 100px 24px;
  width: 100%;
}
.section-3-text {
  max-width: 1000px;
}
.main-text {
  color: #000;
  font-family: "Zeekr Headline", sans-serif;
  font-size: 45px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 40px;
}
.highlight-text {
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: "Zeekr Headline", sans-serif;
}
.black-text {
  color: #000;
}
.orange-text {
  color: #FF5841;
} 
.section-4 {
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  min-height: 300px;
}
.section-4-text {
    color: #000;
    text-align: center;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.section-5 {
  background-image: url('@/assets/home4.png');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding: 100px 60px;
  color: #fff;
}
.section-5-content {
  max-width: 1000px;
}
.zeekr-title {
  color: #FFF;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.zeekr-subtitle {
  color: #FFF;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.zeekr-buttons-l {
  margin-top: 30px;
  display: flex;
  gap: 16px;
}
.transparent-btn {
  background-color: transparent;
  border-color: #FFFFFF;
  color: #fff;
  padding: 10px 24px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.light-btn {
  background-color: #fff;
  color: #000;
  border: none;
  padding: 10px 24px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
} 
.section-6 {
  background-image: url('@/assets/home5.png');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 100px 60px;
  color: #fff;
}

.section-6-content {
  max-width: 1000px;
  text-align: right;
}
.zeekr-buttons-r {
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  margin-top: 30px;
}
.section-7 {
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  min-height: 300px;
}
.section-7 p {
  color: #000;
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
  
  .section-8 {
    background-color: #fff;
    padding: 60px 24px;
  }
  
  .picture-grid {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .picture-card {
    flex: 1;
    min-width: 200px;
    text-align: center;
  }
  
  .picture-card img {
    max-width: 100%;
    height: auto;
    margin-bottom: 12px;
  }
  
  .section-9 {
    background-color: #fff;
    height: 120px;
  }
  </style>
  