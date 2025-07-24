<template>
    <div class="home-page">
      <section class="section section-1">
        <div class="hero-text">
            <h1>Co-Creating the Ultimate Experiences</h1>
            <p>In a life of pure mobility</p>
            <el-button round class="about-btn">About Zeekr</el-button>
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
  
     
      <section class="section section-5"></section>
  
     
      <section class="section section-6"></section>
  
     
      <section class="section section-7">
        <h2>Latest News</h2>
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
  }
  
  .section-6 {
    background-image: url('@/assets/home5.png');
  }
  
  .section-7 {
    background-color: #fff;
    padding: 60px 24px;
    text-align: center;
  }
  
  .section-7 h2 {
    font-size: 28px;
    font-weight: bold;
    color: #000;
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
  