<template>
    <footer class="footer">
      <div class="footer-left">
        <div class="footer-logo">
          <img src="@/assets/logo.png" alt="Logo" style="width: 28px; height: 28px; flex-shrink: 0;" />
        </div>
        <div class="social-icons">
          <img src="@/assets/linkedin.png" alt="LinkedIn" />
          <img src="@/assets/facebook.png" alt="Facebook" />
          <img src="@/assets/ins.png" alt="Instagram" />
          <img src="@/assets/youtube.png" alt="YouTube" />
        </div>
        <div class="footer-copy">
          <p>© 2024 ZEEKR and/or its affiliates. All rights reserved.</p>
          <div class="footer-links">
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
  
      <div class="footer-right">
        <div class="footer-links-columns">
          <div class="column">
            <p>Zeekr X</p>
            <p>Zeekr 009</p>
          </div>
          <div class="column">
            <p>About Us</p>
            <p>News</p>
            <p>Find a Dealer</p>
            <p>Book a Test Drive</p>
            <p>Register Your Interest</p>
          </div>
        </div>
        <div class="disclaimer">
          <p>
            Disclaimer: Depending on where you are, information on this page may not be accurate for the models available in your local market. The availability of vehicle models, options, specifications and colours may vary from market to market and ZEEKR reserves the right to make changes without notice. Vehicles may be shown with optional equipment that is not available in all markets. Images and videos are for illustrative purposes only. This website is governed by ZEEKR’s Terms of use.
          </p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .footer {
    width: 100%;
    background-color: #000;
    color: #fff;
    padding: 44px 24px 35px 24px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 40px;
  }
  .footer-left,
  .footer-right {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 300px;
  }
  .social-icons {
    display: flex;
    gap: 20px;
    margin-top: 90px;
    margin-bottom: 100px;
  }
  .social-icons img {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  .footer-copy {
    color: #DDD;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .footer-links {
    margin-top: 8px;
    display: flex;  
  }
  .footer-links p {
    margin-right: 20px;
    text-decoration: none;
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .footer-links-columns {
    display: flex;
    gap: 200px;
    margin-bottom: 30px;
  }
  .footer-links-columns .column {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 16px;
    font-weight: 400;
  }
  .disclaimer {
    color: #DDD;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    text-align: justify;
    /* margin-bottom: 35px; */
  }
  </style>
  