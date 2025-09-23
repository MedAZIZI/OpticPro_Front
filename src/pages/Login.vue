<template>
  <div class="login">
    <h1>Connexion</h1>
    <form @submit.prevent="handleLogin">
      <input v-model="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Mot de passe" />
      <button type="submit">Se connecter</button>
      <p v-if="error" style="color:red">{{ error }}</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import api from "@/services/api";

const router = useRouter();

const email = ref("");
const password = ref("");
const error = ref("");
const user = ref<any>(null);

const handleLogin = async () => {
  try {
    const res = await api.post("/login", {
      email: email.value,
      password: password.value,
    });

    localStorage.setItem("token", res.data.token);
    api.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
    localStorage.setItem("user", JSON.stringify(res.data.user));

    router.push({ name: "Home" });

    user.value = res.data.user;
    error.value = "";

  } catch (e) {
    error.value = "Email ou mot de passe incorrect.";
  }
};
</script>
