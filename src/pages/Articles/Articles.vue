<template>
  <div class="container-fluid p-4" style="background-color: rgba(125, 194, 165, 0.3); min-height:100vh;">
    <!-- Header : Titre + bouton ajouter -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h1>Articles</h1>
      <button class="btn btn-success text-light" data-bs-toggle="modal" data-bs-target="#addArticleModal">
        Ajouter un article
      </button>
    </div>

    <!-- Barre de recherche + filtre catégorie -->
    <div class="row mb-4 g-2">
      <div class="col-md-8">
        <input type="text" v-model="search" class="form-control" placeholder="Rechercher un article...">
      </div>
      <div class="col-md-2">
        <select v-model="selectedCategory" class="form-select">
          <option value="">Toutes catégories</option>
          <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
        </select>
      </div>
      <div class="col-md-2">
        <button class="btn btn-success w-100" @click="searchArticle">Rechercher</button>
      </div>
    </div>

    <!-- Liste des articles -->
    <table class="table table-striped table-bordered">
      <thead class="table-light">
        <tr>
          <th>Nom</th>
          <th>Référence</th>
          <th>Type</th>
          <th>Fournisseur</th>
          <th>Description</th>
          <th>Prix Achat</th>
          <th>Prix Vente</th>
          <th>Stock</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in filteredArticles" :key="article.id">
          <td>{{ article.nom }}</td>
          <td>{{ article.reference }}</td>
          <td>{{ article.type }}</td>
          <td>{{ article.fournisseur }}</td>
          <td>{{ article.description }}</td>
          <td>{{ article.prixAchat }}</td>
          <td>{{ article.prixVente }}</td>
          <td>{{ article.stock }}</td>
          <td>
            <img :src="article.image" alt="Image article" style="width:50px; height:50px; object-fit:cover;">
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal Ajouter un article -->
    <div class="modal fade" id="addArticleModal" tabindex="-1" aria-labelledby="addArticleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addArticleModalLabel">Ajouter un article</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addArticle">
              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label">Nom</label>
                  <input type="text" v-model="newArticle.nom" class="form-control" required>
                </div>
                <div class="col-md-6">
                  <label class="form-label">Référence</label>
                  <input type="text" v-model="newArticle.reference" class="form-control">
                </div>
                <div class="col-md-6">
                  <label class="form-label">Type</label>
                  <select v-model="newArticle.type" class="form-select" required>
                    <option value="">Sélectionner un type</option>
                    <option v-for="type in types" :key="type" :value="type">{{ type }}</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label class="form-label">Fournisseur</label>
                  <input type="text" v-model="newArticle.fournisseur" class="form-control">
                </div>
                <div class="col-12">
                  <label class="form-label">Description</label>
                  <textarea v-model="newArticle.description" class="form-control"></textarea>
                </div>
                <div class="col-md-6">
                  <label class="form-label">Prix Achat</label>
                  <input type="number" v-model="newArticle.prixAchat" class="form-control">
                </div>
                <div class="col-md-6">
                  <label class="form-label">Prix Vente</label>
                  <input type="number" v-model="newArticle.prixVente" class="form-control">
                </div>
                <div class="col-md-6">
                  <label class="form-label">Stock</label>
                  <input type="number" v-model="newArticle.stock" class="form-control">
                </div>
                <div class="col-md-6">
                  <label class="form-label">Image</label>
                  <input type="file" @change="handleImageUpload" class="form-control">
                </div>
              </div>
              <div class="d-flex justify-content-end mt-3">
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
const selectedCategory = ref('')
const types = ['Monture', 'Verre', 'Lunette', 'Lunette de soleil', 'Lentille de contact', 'Accessoire', 'Service', 'Autre']
const categories = ['Monture', 'Verre', 'Lunette', 'Lunette de soleil', 'Lentille de contact', 'Accessoire', 'Service', 'Autre']

const articles = ref([
  { id:1, nom:'Monture Classic', reference:'M001', type:'Monture', fournisseur:'Fournisseur A', description:'Monture en métal', prixAchat:50, prixVente:80, stock:20, image:'' },
  { id:2, nom:'Lunette Soleil', reference:'L002', type:'Lunette de soleil', fournisseur:'Fournisseur B', description:'Lunette UV', prixAchat:70, prixVente:120, stock:15, image:'' },
])

const filteredArticles = computed(() => {
  return articles.value.filter(a => {
    const matchSearch = !search.value || a.nom.toLowerCase().includes(search.value.toLowerCase())
    const matchCategory = !selectedCategory.value || a.type === selectedCategory.value
    return matchSearch && matchCategory
  })
})

const newArticle = ref({ nom:'', reference:'', type:'', fournisseur:'', description:'', prixAchat:0, prixVente:0, stock:0, image:'' })

function addArticle() {
  const id = articles.value.length + 1
  articles.value.push({ id, ...newArticle.value })
  newArticle.value = { nom:'', reference:'', type:'', fournisseur:'', description:'', prixAchat:0, prixVente:0, stock:0, image:'' }
  
  const modalEl = document.getElementById('addArticleModal') as HTMLElement
  // const modal = bootstrap.Modal.getInstance(modalEl)
  // modal?.hide()
}

function handleImageUpload(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0]
  if(file) {
    newArticle.value.image = URL.createObjectURL(file)
  }
}

function searchArticle() {
  // filtrage automatique via computed
}
</script>
