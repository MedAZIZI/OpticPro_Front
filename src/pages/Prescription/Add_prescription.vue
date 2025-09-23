<template>
  <div class="container-fluid p-4" style="background-color: rgba(125, 194, 165, 0.3); min-height: 100vh;">
    <!-- Titre -->
    <h2 class="fw-bold text-center mb-4" style="color:#0B3966;">Ajouter Prescription</h2>

    <!-- Formulaire centré 65% -->
    <div class="mx-auto" style="width:65%;">

      <!-- Client -->
      <section class="mb-4">
        <h5 class="fw-bold">Client</h5>
        <input type="text" class="form-control mb-2" placeholder="Rechercher un client..."/>
        <select class="form-select mb-2">
          <option selected>Choisir un client</option>
          <option>Client 1</option>
          <option>Client 2</option>
        </select>
        <div class="mt-2">Client sélectionné: <strong>Client 1</strong></div>
        <hr/>
      </section>

      <!-- Date + Mutuelle -->
      <section class="mb-4">
        <div class="row g-3">
          <div class="col-6">
            <label class="form-label">Date</label>
            <input type="date" class="form-control"/>
          </div>
          <div class="col-6">
            <label class="form-label">Mutuelle</label>
            <select class="form-select">
              <option selected>Choisir une mutuelle</option>
              <option>Mutuelle 1</option>
              <option>Mutuelle 2</option>
            </select>
          </div>
        </div>
        <hr/>
      </section>

      <!-- Prescription Verres -->
      <section class="mb-4">
        <h5 class="fw-bold">Prescription de verres</h5>

        <!-- Vision de loin -->
        <h6>Vision de loin</h6>
        <div class="row g-3 mb-3">
          <!-- Oeil gauche -->
          <div class="col-6">
            <h6>Oeil gauche</h6>
            <input type="text" class="form-control mb-1" placeholder="Sphere"/>
            <input type="text" class="form-control mb-1" placeholder="Cylindre"/>
            <input type="text" class="form-control mb-1" placeholder="Axe"/>
            <input type="text" class="form-control mb-1" placeholder="Addition"/>
            <input type="text" class="form-control mb-1" placeholder="EIP"/>
            <input type="text" class="form-control mb-1" placeholder="HP"/>
          </div>
          <!-- Oeil droit -->
          <div class="col-6">
            <h6>Oeil droit</h6>
            <input type="text" class="form-control mb-1" placeholder="Sphere"/>
            <input type="text" class="form-control mb-1" placeholder="Cylindre"/>
            <input type="text" class="form-control mb-1" placeholder="Axe"/>
            <input type="text" class="form-control mb-1" placeholder="Addition"/>
            <input type="text" class="form-control mb-1" placeholder="EIP"/>
            <input type="text" class="form-control mb-1" placeholder="HP"/>
          </div>
        </div>

        <!-- Vision de près -->
        <h6>Vision de près</h6>
        <div class="row g-3 mb-3">
          <div class="col-6">
            <h6>Oeil gauche</h6>
            <input type="text" class="form-control mb-1" placeholder="Sphere"/>
            <input type="text" class="form-control mb-1" placeholder="Cylindre"/>
            <input type="text" class="form-control mb-1" placeholder="Axe"/>
            <input type="text" class="form-control mb-1" placeholder="Addition"/>
            <input type="text" class="form-control mb-1" placeholder="EIP"/>
            <input type="text" class="form-control mb-1" placeholder="HP"/>
          </div>
          <div class="col-6">
            <h6>Oeil droit</h6>
            <input type="text" class="form-control mb-1" placeholder="Sphere"/>
            <input type="text" class="form-control mb-1" placeholder="Cylindre"/>
            <input type="text" class="form-control mb-1" placeholder="Axe"/>
            <input type="text" class="form-control mb-1" placeholder="Addition"/>
            <input type="text" class="form-control mb-1" placeholder="EIP"/>
            <input type="text" class="form-control mb-1" placeholder="HP"/>
          </div>
        </div>
        <hr/>
      </section>

      <!-- Lentilles -->
      <section class="mb-4">
        <h5 class="fw-bold">Prescription lentilles de contact</h5>
        <textarea class="form-control" rows="3" placeholder="Détails lentilles..."></textarea>
        <hr/>
      </section>

      <!-- Ordonnance Ophtalmo -->
      <section class="mb-4">
        <h5 class="fw-bold">Ordonnance d'Ophtalmologiste</h5>
        <textarea class="form-control" rows="3" placeholder="Détails ordonnance..."></textarea>
        <hr/>
      </section>

      <!-- Article -->
      <section class="mb-4">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <h5 class="fw-bold">Articles</h5>
          <button class="btn btn-primary" @click="openArticleModal">
            <i class="bi bi-plus-circle me-1"></i> Ajouter Article
          </button>
        </div>
        <hr/>
        <!-- Liste articles exemple -->
        <ul class="list-group mb-2">
          <li class="list-group-item">Article 1</li>
          <li class="list-group-item">Article 2</li>
        </ul>
      </section>

      <!-- Paiement -->
      <section class="mb-4">
        <h5 class="fw-bold">Paiement</h5>
        <div class="row g-3 mb-2">
          <div class="col-4">
            <label>Type de remise</label>
            <select class="form-select">
              <option>Remise %</option>
              <option>Remise fixe</option>
            </select>
          </div>
          <div class="col-4">
            <label>Valeur remise</label>
            <input type="number" class="form-control" />
          </div>
          <div class="col-4">
            <label>Montant remise calculé</label>
            <input type="text" class="form-control" readonly />
          </div>
        </div>

        <div class="mb-2">
          <button class="btn btn-success">Payer</button>
        </div>

        <ul class="list-group mb-2">
          <li class="list-group-item">Paiement #1</li>
          <li class="list-group-item">Paiement #2</li>
        </ul>

        <!-- Totaux -->
        <div class="row mb-2">
          <div class="col-6">Total initial:</div><div class="col-6 text-end">1000</div>
          <div class="col-6">Remise:</div><div class="col-6 text-end">100</div>
          <div class="col-6">Total à payer:</div><div class="col-6 text-end">900</div>
          <div class="col-6">Total payé:</div><div class="col-6 text-end">500</div>
        </div>
        <hr/>
        <div class="row mb-2">
          <div class="col-6">Reste à payer:</div><div class="col-6 text-end">400</div>
          <div class="col-6">Status:</div><div class="col-6 text-end">Non payé</div>
        </div>
      </section>

      <!-- Note -->
      <section class="mb-4">
        <h5 class="fw-bold">Note</h5>
        <textarea class="form-control" rows="2" placeholder="Ajouter une note..."></textarea>
      </section>

      <!-- Bouton enregistrer -->
      <div class="text-end">
        <button class="btn btn-primary btn-lg">
          <i class="bi bi-save me-1"></i> Enregistrer
        </button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const openArticleModal = () => {
  alert("Ouverture modal ajout article (à implémenter)");
};
</script>
