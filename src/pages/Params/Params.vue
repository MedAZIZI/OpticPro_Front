<template>
  <div class="en-dev">
    <h1>Page en cours de développement 🔧</h1>
    <img :src="lunettesImg" alt="Lunettes cassées" class="image" />
    <h2>Revenez bientôt, cette fonctionnalité sera disponible très vite 👓</h2>
  </div>
</template>

<script setup lang="ts">
import lunettesImg from '@/assets/lunettes.png'
</script>

<style scoped>
.en-dev {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 20px;
  background-image: url('@/assets/BG_img.jpg');
  background-size: cover;  
  background-position: center; 
  background-repeat: no-repeat;
}

.image {
  max-width: 300px;
  margin: 20px 0;
}
</style>
