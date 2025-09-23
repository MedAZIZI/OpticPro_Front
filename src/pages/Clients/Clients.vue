<!-- <template>
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
</style> -->

<template>
  <div class="container-fluid p-4 " style="background-color: rgba(125, 194, 165, 0.3); min-height: 100vh;">
    <!-- Header : Titre + bouton ajouter -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h1>Clients</h1>
      <button class="btn btn-success text-light" data-bs-toggle="modal" data-bs-target="#addClientModal">
        Ajouter un client
      </button>
    </div>

    <!-- Barre de recherche -->
    <div class="input-group mb-4">
      <input type="text" v-model="search" class="form-control" placeholder="Rechercher un client...">
      <button class="btn btn-success" @click="searchClient">Rechercher</button>
    </div>

    <!-- Liste des clients -->
    <table class="table table-striped table-bordered">
      <thead class="table-light">
        <tr>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Téléphone</th>
          <th>Email</th>
          <th>Adresse</th>
          <th>Date de naissance</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="client in filteredClients" :key="client.id">
          <td>{{ client.nom }}</td>
          <td>{{ client.prenom }}</td>
          <td>{{ client.telephone }}</td>
          <td>{{ client.email }}</td>
          <td>{{ client.adresse }}</td>
          <td>{{ client.dateNaissance }}</td>
          <td>{{ client.notes }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Modal pour ajouter un client -->
    <div class="modal fade" id="addClientModal" tabindex="-1" aria-labelledby="addClientModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addClientModalLabel">Ajouter un client</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addClient">
              <div class="mb-3">
                <label class="form-label">Nom</label>
                <input type="text" v-model="newClient.nom" class="form-control" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Prénom</label>
                <input type="text" v-model="newClient.prenom" class="form-control" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Téléphone</label>
                <input type="tel" v-model="newClient.telephone" class="form-control" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Date de naissance</label>
                <input type="date" v-model="newClient.dateNaissance" class="form-control">
              </div>
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" v-model="newClient.email" class="form-control">
              </div>
              <div class="mb-3">
                <label class="form-label">Adresse</label>
                <input type="text" v-model="newClient.adresse" class="form-control">
              </div>
              <div class="mb-3">
                <label class="form-label">Notes</label>
                <textarea v-model="newClient.notes" class="form-control"></textarea>
              </div>
              <div class="d-flex justify-content-end">
                <button type="submit" class="btn btn-success">Enregistrer</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const search = ref('')

const clients = ref([
  { id:1, nom:'Dupont', prenom:'Jean', telephone:'0600000000', email:'jean@exemple.com', adresse:'Paris', dateNaissance:'1990-01-01', notes:'VIP' },
  { id:2, nom:'Martin', prenom:'Claire', telephone:'0611111111', email:'claire@exemple.com', adresse:'Lyon', dateNaissance:'1985-05-05', notes:'' },
  // … autres clients
])

const filteredClients = computed(() => {
  if (!search.value) return clients.value
  return clients.value.filter(c =>
    c.nom.toLowerCase().includes(search.value.toLowerCase()) ||
    c.prenom.toLowerCase().includes(search.value.toLowerCase())
  )
})

const newClient = ref({
  nom:'', prenom:'', telephone:'', dateNaissance:'', email:'', adresse:'', notes:''
})

function addClient() {
  const id = clients.value.length + 1
  clients.value.push({ id, ...newClient.value })
  newClient.value = { nom:'', prenom:'', telephone:'', dateNaissance:'', email:'', adresse:'', notes:'' }
  // Fermer le modal Bootstrap
  // const modalEl = document.getElementById('addClientModal') as HTMLElement
  // const modal = bootstrap.Modal.getInstance(modalEl)
  // modal?.hide()
}

function searchClient() {
  // Rien à faire, la table se filtre automatiquement via computed
}
</script>

