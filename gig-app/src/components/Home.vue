<template>
  <div class="home">
    <h1>Eventi Disponibili</h1>
    <div class="event-list">
      <div v-for="event in events" :key="event.id" class="event-card">
        <h2>{{ event.name }}</h2>
        <p>{{ event.description }}</p>
        <router-link :to="'/event/' + event.id"
          >Visualizza Dettagli</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      events: [
        {
          id: 1,
          name: "Concerto Rock",
          description: "Un grande concerto di musica rock.",
        },
        {
          id: 2,
          name: "Mostra d’Arte",
          description: "Esposizione di opere di artisti locali.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.event-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
.event-card {
  border: 1px solid #ddd;
  padding: 1rem;
}
</style>
