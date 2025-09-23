<template>
  <div class="container-fluid p-4" style="background-color: rgba(125,194,165,0.3); min-height:100vh;">
    <!-- Header : Titre + bouton ajouter -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h1>Fournisseurs</h1>
      <button class="btn btn-success text-light" data-bs-toggle="modal" data-bs-target="#addFournisseurModal">
        Ajouter un fournisseur
      </button>
    </div>

    <!-- Barre de recherche -->
    <div class="input-group mb-4">
      <input type="text" v-model="search" class="form-control" placeholder="Rechercher un fournisseur...">
      <button class="btn btn-success" @click="searchFournisseur">Rechercher</button>
    </div>

    <!-- Table des fournisseurs -->
    <table class="table table-striped table-bordered">
      <thead class="table-light">
        <tr>
          <th>Nom</th>
          <th>Personne à contacter</th>
          <th>Email</th>
          <th>Adresse</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="f in filteredFournisseurs" :key="f.id">
          <td>{{ f.nom }}</td>
          <td>{{ f.contact }}</td>
          <td>{{ f.email }}</td>
          <td>{{ f.adresse }}</td>
          <td>{{ f.notes }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Modal Ajouter Fournisseur -->
    <div class="modal fade" id="addFournisseurModal" tabindex="-1" aria-labelledby="addFournisseurModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addFournisseurModalLabel">Ajouter un fournisseur</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addFournisseur">
              <div class="mb-3">
                <label class="form-label">Nom du Fournisseur</label>
                <input type="text" v-model="newFournisseur.nom" class="form-control" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Personne à contacter</label>
                <input type="text" v-model="newFournisseur.contact" class="form-control">
              </div>
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" v-model="newFournisseur.email" class="form-control">
              </div>
              <div class="mb-3">
                <label class="form-label">Adresse</label>
                <input type="text" v-model="newFournisseur.adresse" class="form-control">
              </div>
              <div class="mb-3">
                <label class="form-label">Notes</label>
                <textarea v-model="newFournisseur.notes" class="form-control"></textarea>
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

const fournisseurs = ref([
  { id:1, nom:'Fournisseur A', contact:'Jean Dupont', email:'contact@fournisseurA.com', adresse:'Paris', notes:'Livraison rapide' },
  { id:2, nom:'Fournisseur B', contact:'Claire Martin', email:'contact@fournisseurB.com', adresse:'Lyon', notes:'' },
])

const filteredFournisseurs = computed(() => {
  if(!search.value) return fournisseurs.value
  return fournisseurs.value.filter(f =>
    f.nom.toLowerCase().includes(search.value.toLowerCase()) ||
    f.contact.toLowerCase().includes(search.value.toLowerCase()) ||
    f.email.toLowerCase().includes(search.value.toLowerCase())
  )
})

const newFournisseur = ref({ nom:'', contact:'', email:'', adresse:'', notes:'' })

function addFournisseur() {
  const id = fournisseurs.value.length + 1
  fournisseurs.value.push({ id, ...newFournisseur.value })
  newFournisseur.value = { nom:'', contact:'', email:'', adresse:'', notes:'' }

  // fermer modal
  const modalEl = document.getElementById('addFournisseurModal') as HTMLElement
  // const modal = bootstrap.Modal.getInstance(modalEl)
  // modal?.hide()
}

function searchFournisseur() {
  // filtrage automatique via computed
}
</script>
