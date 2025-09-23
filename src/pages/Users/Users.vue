<template>
  <div class="container-fluid p-4" style="background-color: rgba(125, 194, 165, 0.3); min-height: 100vh;">
    <!-- Header : Titre + bouton ajouter -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h1>Utilisateurs</h1>
      <button class="btn btn-success text-light" data-bs-toggle="modal" data-bs-target="#addUserModal">
        Ajouter un utilisateur
      </button>
    </div>

    <!-- Barre de recherche -->
    <div class="input-group mb-4">
      <input type="text" v-model="search" class="form-control" placeholder="Rechercher un user...">
      <button class="btn btn-success" @click="searchUser">Rechercher</button>
    </div>

    <!-- Table des users -->
    <table class="table table-striped table-bordered">
      <thead class="table-light">
        <tr>
          <th>Nom complet</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in filteredUsers" :key="user.id">
          <td>{{ user.nomComplet }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role }}</td>
          <td>
            <button class="btn btn-sm btn-info me-1" @click="openViewModal(user)">
              <i class="bi bi-eye"></i>
            </button>
            <button class="btn btn-sm btn-warning me-1" @click="openEditModal(user)">
              <i class="bi bi-pencil"></i>
            </button>
            <button class="btn btn-sm btn-danger" @click="deleteUser(user.id)">
              <i class="bi bi-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal Ajouter user -->
    <div class="modal fade" id="addUserModal" tabindex="-1" aria-labelledby="addUserModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addUserModalLabel">Ajouter un user</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addUser">
              <div class="mb-3">
                <label class="form-label">Nom complet</label>
                <input type="text" v-model="newUser.nomComplet" class="form-control" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" v-model="newUser.email" class="form-control" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Role</label>
                <select v-model="newUser.role" class="form-select" required>
                  <option value="">Sélectionner un rôle</option>
                  <option value="Employé">Employé</option>
                  <option value="Manager">Manager</option>
                  <option value="Administrateur">Administrateur</option>
                </select>
              </div>
              <div class="mb-3">
                <label class="form-label">Mot de passe</label>
                <input type="password" v-model="newUser.password" class="form-control" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Confirmer mot de passe</label>
                <input type="password" v-model="newUser.confirmPassword" class="form-control" required>
              </div>
              <div class="d-flex justify-content-end">
                <button type="submit" class="btn btn-success">Enregistrer</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Visualiser user -->
    <div class="modal fade" id="viewUserModal" tabindex="-1" aria-labelledby="viewUserModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="viewUserModalLabel">Visualiser user</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
          </div>
          <div class="modal-body">
            <p><strong>Nom complet:</strong> {{ selectedUser.nomComplet }}</p>
            <p><strong>Email:</strong> {{ selectedUser.email }}</p>
            <p><strong>Role:</strong> {{ selectedUser.role }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Modifier user -->
    <div class="modal fade" id="editUserModal" tabindex="-1" aria-labelledby="editUserModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editUserModalLabel">Modifier user</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateUser">
              <div class="mb-3">
                <label class="form-label">Nom complet</label>
                <input type="text" v-model="selectedUser.nomComplet" class="form-control" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" v-model="selectedUser.email" class="form-control" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Role</label>
                <select v-model="selectedUser.role" class="form-select" required>
                  <option value="Employé">Employé</option>
                  <option value="Manager">Manager</option>
                  <option value="Administrateur">Administrateur</option>
                </select>
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

const users = ref([
  { id:1, nomComplet:'Jean Dupont', email:'jean@exemple.com', role:'Employé' },
  { id:2, nomComplet:'Claire Martin', email:'claire@exemple.com', role:'Manager' },
])

const filteredUsers = computed(() => {
  if(!search.value) return users.value
  return users.value.filter(u =>
    u.nomComplet.toLowerCase().includes(search.value.toLowerCase()) ||
    u.email.toLowerCase().includes(search.value.toLowerCase())
  )
})

const newUser = ref({ nomComplet:'', email:'', role:'', password:'', confirmPassword:'' })
const selectedUser = ref({ nomComplet:'', email:'', role:'' })

function addUser() {
  const id = users.value.length + 1
  users.value.push({ id, ...newUser.value })
  newUser.value = { nomComplet:'', email:'', role:'', password:'', confirmPassword:'' }

  // fermer modal
  const modalEl = document.getElementById('addUserModal') as HTMLElement
  // const modal = bootstrap.Modal.getInstance(modalEl)
  // modal?.hide()
}

function openViewModal(user:any) {
  selectedUser.value = { ...user }
  const modalEl = document.getElementById('viewUserModal') as HTMLElement
  // const modal = new bootstrap.Modal(modalEl)
  // modal.show()
}

function openEditModal(user:any) {
  selectedUser.value = { ...user }
  const modalEl = document.getElementById('editUserModal') as HTMLElement
  // const modal = new bootstrap.Modal(modalEl)
  // modal.show()
}

function updateUser() {
  // const index = users.value.findIndex(u => u.id === selectedUser.value.id)
  // if(index !== -1) users.value[index] = { ...selectedUser.value }

  // const modalEl = document.getElementById('editUserModal') as HTMLElement
  // const modal = bootstrap.Modal.getInstance(modalEl)
  // modal?.hide()
}

function deleteUser(id:number) {
  if(confirm('Voulez-vous vraiment supprimer cet utilisateur ?')) {
    users.value = users.value.filter(u => u.id !== id)
  }
}

function searchUser() {
  // filtrage automatique via computed
}
</script>
