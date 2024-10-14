<template>
  <nav class="navbar">
    <div class="navbar-brand"></div>
    <ul class="navbar-menu">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/create-event">Crea Evento</router-link></li>
      <li><router-link to="/profile">Profilo</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  background-color: #42b983;
  padding: 1rem;
}

.navbar-menu {
  list-style-type: none;
  display: flex;
}

.navbar-menu li {
  margin-left: 1rem;
}
</style>
