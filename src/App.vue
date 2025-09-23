<template>
  <div class="app-container d-flex">
    <!-- Sidebar gauche (masquée sur login) -->
    <div
      v-if="$route.name !== 'Login'"
      class="d-flex flex-column sidebar border-end"
    >
      <!-- Logo en haut -->
      <div class="p-3 text-center border-bottom logo-container">
        <img src="@/assets/logo.png" alt="Logo">
      </div>

      <!-- Liens principaux -->
      <ul class="list-group list-group-flush flex-grow-1 mt-2">
        <li
          class="list-group-item link-item"
          v-for="link in mainLinks"
          :key="link.name"
          :class="{ active: $route.path === link.path }"
        >
          <router-link
            :to="link.path"
            class="d-flex align-items-center text-decoration-none text-dark"
          >
            <i :class="link.icon + ' me-2 fs-5'"></i>
            <span class="fs-6 fw-semibold">{{ link.name }}</span>
          </router-link>
        </li>
      </ul>

      <!-- Liens bas -->
      <ul class="list-group list-group-flush mb-2 mt-auto">
        <li
          class="list-group-item link-item"
          v-for="link in bottomLinks"
          :key="link.name"
          :class="{ active: $route.path === link.path }"
        >
          <router-link
            :to="link.path"
            class="d-flex align-items-center text-decoration-none text-dark"
          >
            <i :class="link.icon + ' me-2 fs-5'"></i>
            <span class="fs-6 fw-semibold">{{ link.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>

    <!-- Contenu principal -->
    <div class="flex-grow-1 content-area ">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
const mainLinks = [
  { name: 'Home', path: '/home', icon: 'bi-house' },
  { name: 'Clients', path: '/clients', icon: 'bi-people' },
  { name: 'Users', path: '/users', icon: 'bi-person-badge' },
  { name: 'Prescription', path: '/prescription', icon: 'bi-journal-medical' },
  { name: 'Articles', path: '/articles', icon: 'bi-box-seam' },
  { name: 'Stocks', path: '/stocks', icon: 'bi-stack' },
  { name: 'Factures', path: '/factures', icon: 'bi-receipt' },
  { name: 'Stats', path: '/stats', icon: 'bi-bar-chart' },
  { name: 'Fournisseur', path: '/fournisseur', icon: 'bi-truck' },
  { name: 'Magasin', path: '/magasin', icon: 'bi-shop' },
];

const bottomLinks = [
  { name: 'Params', path: '/params', icon: 'bi-gear' },
  { name: 'Aide', path: '/aide', icon: 'bi-question-circle' },
];
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
}

/* Container principal full-height */
.app-container {
  height: 100vh;
  overflow: hidden; /* pas de scroll global */
}

/* Sidebar avec palette dégradée */
.sidebar {
  width: 220px;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* background: linear-gradient(to bottom, #F1F1D3, #E3EBD0, #C7DDC5, #9FCDA8, #7DC2A5); */
  background:  #7DC2A5;
  overflow-y: auto; /* scroll si trop de liens */
}

/* Logo */
.logo-container img {
  width: 160px;
  height: auto;
}

/* Contenu principal scrollable */
.content-area {
  flex: 1;
  overflow-y: auto;
  height: 100%;
}

/* Items sidebar */
.link-item {
  border: none !important;
  background-color: transparent !important;
  padding: 14px 18px;
  transition: background 0.2s ease;
}

/* Hover */
.link-item:hover {
  background-color: rgba(255, 255, 255, 0.3)!important;
  cursor: pointer;
}

/* Actif : tout le li change */
.link-item.active {
  background-color: rgba(255, 255, 255, 0.3)!important;
  border-radius: 6px;
}

/* Responsive sidebar */
@media (max-width: 768px) {
  .sidebar {
    width: 70px;
  }
  .sidebar span {
    display: none;
  }
  .sidebar img {
    width: 50px;
  }
}
</style>
