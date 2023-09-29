<template>
    <section class="about-me-page">
      <div class="profile-image">
        <img src="../assets/images/images.jpg" alt="Your Name" class="hover-effect">
      </div>
      <h1 class="title">SANSON LI</h1>
    <img class="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU" alt="profile">

    <div class="row">
      <!--Language  -->
      <div class="column">
        <h2 class="section-title">Language Skills</h2>
        <div class="skill">
          <p class="subject">English</p>
          <div class="progress">
            <div class="progress-bar" style="width: 100%"></div>
          </div>
        </div>
        <div class="skill">
          <p class="subject">Japanese</p>
          <div class="progress">
            <div class="progress-bar" style="width: 50%"></div>
          </div>
        </div>
        <div class="skill">
          <p class="subject">Cantonese</p>
          <div class="progress">
            <div class="progress-bar" style="width: 100%"></div>
          </div>
        </div>
        <div class="skill">
          <p class="subject">Mandarin</p>
          <div class="progress">
            <div class="progress-bar" style="width: 100%"></div>
          </div>
        </div>
      </div>

      <!-- software -->
      <div class="column">
        <h2 class="section-title">ADDITIONAL SKILLS</h2>
        <table class="software-table">
          <tr>
            <th>Live2D</th>
            <td><img class="software-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Live2D_logo.svg/1024px-Live2D_logo.svg.png"></td>
            <th>3DS Max</th>
            <td><img class="software-icon" src="data:image/png;base64,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"></td>
            <th>Photo Shop</th>
            <td><img class="software-icon" src="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/ca/37/9f/ca379fb1-ee70-3679-4fba-b9fa0dd6fd8f/AppIcon-0-1x_U007emarketing-0-7-0-0-85-220.png/230x0w.webp"></td>
            <th>Adobe illustrator</th>
            <td><img class="software-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1200px-Adobe_Illustrator_CC_icon.svg.png"></td>
            <th>Excel</th>
            <td><img class="software-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/640px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png"></td>
          </tr>
        </table>
      </div>
    </div>
    </section>
  </template>
  
  <script setup>
 
  </script>
  
  <style scoped>
  .about-me-page {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    font-family: 'Arial', sans-serif;
    max-width: 1200px;
    margin: 0 auto;
    background-color: #f4f4f4;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .profile-image {
    flex: 1;
    padding-right: 50px;
  }
  
  .profile-image img.hover-effect {
    max-width: 100%;
    border-radius: 50%;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .profile-image img.hover-effect:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
  
  .about-content {
    flex: 2;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
  }
  
  .about-content h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
  }
  
  .about-content p {
    margin-bottom: 20px;
    line-height: 1.6;
  }
  
  .about-content a {
    color: #e74c3c;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .about-content a:hover {
    color: #c0392b;
  }
  
  .download-btn {
    display: inline-block;
    background-color: #e74c3c;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .download-btn:hover {
    background-color: #c0392b;
  }
  .content {
  text-align: center;
  padding: 20px;
}

.title {
  font-size: 36px;
  margin-top: 20px;
}

.profile {
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 50%;
  max-width: 200px;
  height: auto;
}

.row {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.column {
  flex: 0.48;
}

.section-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.skill {
  margin-bottom: 20px;
}

.subject {
  font-size: 18px;
  margin-bottom: 10px;
}

.progress {
  background-color: #ddd;
  height: 20px;
  border-radius: 10px;
  position: relative;
}

.progress-bar {
  background-color: #333;
  height: 100%;
  border-radius: 10px;
}

.software-table {
  margin: 0 auto;
  margin-top: 20px;
  text-align: center;
}

.software-table th,
.software-table td {
  padding: 10px;
}

.software-icon {
  width: 50px;
  height: auto;
}
  </style>