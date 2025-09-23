<template>
  <div class="container-fluid p-4" style="background-color: rgba(125, 194, 165, 0.3); min-height: 100vh;">
    <!-- Titre + boutons -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="fw-bold" style="color:#0B3966;">Prescriptions</h2>
      <div>
        <router-link to="/Add_prescription" class="btn btn-success me-2">
          <i class="bi bi-plus-circle me-1"></i> Ajouter une prescription
        </router-link>
        <button class="btn btn-warning">
          <i class="bi bi-bell me-1"></i> Rappel
        </button>
      </div>
    </div>

    <!-- Barre de recherche -->
    <div class="d-flex mb-4">
      <input 
        type="text" 
        class="form-control me-2" 
        placeholder="Rechercher une prescription..." 
        style="width:85%;"
      />
      <button class="btn btn-secondary">
        <i class="bi bi-search"></i>
      </button>
    </div>

    <!-- Liste des prescriptions -->
    <div class="card mb-4">
      <div class="card-body">
        <h5 class="card-title">Liste des prescriptions</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Prescription #1
            <span class="badge bg-primary rounded-pill">10/09/2025</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Prescription #2
            <span class="badge bg-primary rounded-pill">11/09/2025</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Bouton ajouter en bas -->
    <div class="text-center">
      <router-link to="/ajouter-prescription" class="btn btn-success btn-lg">
        <i class="bi bi-plus-circle me-1"></i> Ajouter une prescription
      </router-link>
    </div>
  </div>
</template>
