<template>
  <div class="container-fluid py-4" style="background-color: rgba(125, 194, 165, 0.3); min-height: 100vh;">
    <!-- Titre haut gauche -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1 class="text-center flex-grow-1 fw-bold" style="color: #0B3966;font-size: 2.5rem; ">OpticPro</h1>
    </div>
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h4 class="fw-bold">Paramètres du magasin</h4>
    </div>

    <!-- Formulaire -->
    <div class="d-flex justify-content-center">
      <form class="bg-white shadow rounded p-4 w-75" style="max-width: 65%;">
        <!-- Informations générales -->
        <h5 class="mb-3">Informations générales</h5>
        <div class="row">

          <div class="col-md-6 mb-3">
            <label class="form-label fw-semibold">Nom du magasin</label>
            <input type="text" class="form-control" placeholder="Nom du magasin" />
          </div>
          <div class="col-md-6 mb-3">
            <label class="form-label fw-semibold">Logo du magasin</label>
            <input type="file" class="form-control" />
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label fw-semibold">Adresse</label>
          <input type="text" class="form-control" placeholder="Adresse" />
        </div>
        <div class="mb-3">
          <label class="form-label fw-semibold">Téléphone</label>
          <input type="text" class="form-control" placeholder="+212 ..." />
        </div>
        <div class="mb-3">
          <label class="form-label fw-semibold">Email</label>
          <input type="email" class="form-control" placeholder="exemple@mail.com" />
        </div>
        <div class="row">
          <div class="col-md-4 mb-3">
            <label class="form-label fw-semibold">RC</label>
            <input type="text" class="form-control" placeholder="Registre de commerce" />
          </div>
          <div class="col-md-4 mb-3">
            <label class="form-label fw-semibold">ICE</label>
            <input type="text" class="form-control" placeholder="ICE" />
          </div>
          <div class="col-md-4 mb-3">
            <label class="form-label fw-semibold">Code INPE</label>
            <input type="text" class="form-control" placeholder="INPE" />
          </div>
        </div>

        <!-- Séparateur -->
        <hr class="my-4" />

        <!-- Paramètres devise -->
        <h5 class="mb-3">Paramètres de devise</h5>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label class="form-label fw-semibold">Pays & Devise</label>
            <select class="form-select">
              <option value="ma">Maroc - MAD</option>
              <option value="fr">France - EUR</option>
              <option value="us">États-Unis - USD</option>
              <option value="uk">Royaume-Uni - GBP</option>
            </select>
          </div>
          <div class="col-md-6 mb-3">
            <label class="form-label fw-semibold">Symbole monétaire</label>
            <input type="text" class="form-control" placeholder="Ex: MAD, €, $" />
          </div>
        </div>

        <!-- Bouton -->
        <div class="text-end mt-4">
          <button type="submit" class="btn btn-success px-4">Enregistrer</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
// futur logique JS (soumission, binding, API, etc.)
</script>

<style scoped>
/* Ajuste la largeur max du formulaire */
form {
  background-color: #F1F1D3; /* couleur douce */
}
</style>
