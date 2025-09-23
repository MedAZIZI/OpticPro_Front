<template>
  <div class="container-fluid p-4" style="background-color: rgba(125,194,165,0.3); min-height:100vh;">
    <!-- Header : Nom du magasin + date -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="fw-bold">Magasin OpticPro</h2>
      <div class="text-muted">{{ today }}</div>
          <h1>Bienvenue {{ user.name }} !</h1>

    </div>

    <!-- Titre du dashboard -->
    <h3 class="mb-4">Tableau de bord</h3>

    <!-- Indicateurs clés -->
    <div class="row mb-4">
      <div class="col-md-3 mb-3" v-for="indicator in indicators" :key="indicator.title">
        <div class="card text-white h-100" :style="{backgroundColor: indicator.color}">
          <div class="card-body d-flex justify-content-between align-items-center">
            <div>
              <h5 class="card-title">{{ indicator.title }}</h5>
              <h3>{{ indicator.value }}</h3>
            </div>
            <i :class="indicator.icon + ' fs-1'"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- Raccourcis rapides -->
    <h4 class="mb-3">Raccourcis</h4>
    <div class="row">
      <div class="col-md-2 col-6 mb-3" v-for="shortcut in shortcuts" :key="shortcut.title">
        <div class="card h-100 text-center p-3 shadow-sm cursor-pointer" @click="goTo(shortcut.path)">
          <i :class="shortcut.icon + ' fs-2 mb-2'"></i>
          <p class="mb-0 fw-semibold">{{ shortcut.title }}</p>
        </div>
      </div>
    </div>

    <!-- Optionnel : graphique ou notifications -->
    <div class="row mt-4">
      <div class="col-md-6 mb-3">
        <div class="card h-100 p-3">
          <h5>Stock par type</h5>
          <!-- Placeholder pour graphique -->
          <div class="d-flex justify-content-center align-items-center" style="height:200px; color: #999;">
            Graphique ici
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <div class="card h-100 p-3">
          <h5>Derniers clients ajoutés</h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="client in recentClients" :key="client.id">
              {{ client.nomComplet }} - {{ client.email }}
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref,onMounted } from 'vue'
import { useRouter } from 'vue-router'
const user = ref<{ name: string; email: string }>({ name: "", email: "" });

onMounted(() => {
  const stored = localStorage.getItem("user");
  if (stored) user.value = JSON.parse(stored);
});
const router = useRouter()

// Date actuelle
const today = new Date().toLocaleDateString('fr-FR', { weekday:'long', day:'numeric', month:'long', year:'numeric' })

// Indicateurs clés
const indicators = [
  { title:'Clients', value: 120, icon:'bi-people', color:'#0dcaf0' },
  { title:'Users', value: 12, icon:'bi-person-badge', color:'#198754' },
  { title:'Articles', value: 54, icon:'bi-box-seam', color:'#ffc107' },
  { title:'Stocks', value: 230, icon:'bi-stack', color:'#dc3545' },
]

// Raccourcis
const shortcuts = [
  { title:'Ajouter Client', icon:'bi-person-plus', path:'/clients' },
  { title:'Ajouter User', icon:'bi-person-badge-fill', path:'/users' },
  { title:'Ajouter Article', icon:'bi-box-seam', path:'/articles' },
  { title:'Ajouter Fournisseur', icon:'bi-truck', path:'/fournisseur' },
]

// Redirection
function goTo(path:string) {
  router.push(path)
}

// Exemple clients récents
const recentClients = [
  { id:1, nomComplet:'Jean Dupont', email:'jean@exemple.com' },
  { id:2, nomComplet:'Claire Martin', email:'claire@exemple.com' },
  { id:3, nomComplet:'Paul Durand', email:'paul@exemple.com' },
]
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
  transition: transform 0.2s ease;
}
.cursor-pointer:hover {
  transform: translateY(-5px);
}
</style>
