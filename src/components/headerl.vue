<template>
  <header class="navbar">
    <div class="nav-left">
      <img src="@/assets/logo.png" alt="Logo" class="icon" @click="topage('')" style="width: 28px; height: 28px; flex-shrink: 0; cursor: pointer;" />
      <nav class="nav-links">
        <p>Models</p>
        <p @click="topage('aboutus')">About Us</p>
        <p>News</p>
        <p>Stock</p>
      </nav>
    </div>
    <div class="nav-center">
      <img src="@/assets/zeekr.png" alt="Zeekr Logo" class="zeekr-logo" style="width: 229px; height: 82px; flex-shrink: 0;" />
    </div>
    <div class="nav-right">
      <nav class="nav-links">
      <p>Find a Dealer</p>
      <p>Book a Test Drive</p>
      <p>Register Your Interest</p>
      <div class="language-select">
        <img src="@/assets/language.png" alt="Language Icon" class="language-icon" />
        <span>Australia/English</span>
      </div>
    </nav>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
function topage(path) {
  router.push(`/${path}`)
}
</script>

<style scoped>
.navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 27px 24px;
  background-color: black;
  color: #FFF;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.nav-left,
.nav-center,
.nav-right {
  align-items: center;
  display: flex;
  flex: 1;
}
.nav-links p {
  margin-left: 20px;
  cursor: pointer;
}
.nav-links{
  text-decoration: none;
  color: #FFF;
  display: flex;
  align-items: center;
}

.nav-center .zeekr-logo {
  height: 20px;
  margin-left: 160px;
}

.nav-right {
  text-decoration: none;
  color: #FFF;
}

.language-select {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.language-icon {
  height: 16px;
  margin-right: 6px;
  margin-left: 20px;  
}
.nav-right .nav-links p {
  white-space: nowrap; 
  margin-left: 20px;  
}
</style>
