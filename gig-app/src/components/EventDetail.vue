<template>
  <div class="event-detail">
    <h1>{{ event.name }}</h1>
    <p>{{ event.description }}</p>
    <p>Data: {{ event.date }}</p>
    <p>Luogo: {{ event.location }}</p>
  </div>
</template>

<script>
export default {
  name: "EventDetail",
  data() {
    return {
      event: {
        id: 1,
        name: "Concerto Rock",
        description:
          "Concerto di musica rock con i migliori musicisti del mondo",
        date: "2024-10-25",
        location: "Arena di Milano",
      },
    };
  },
};
</script>

<style scoped>
.event-detail {
  padding: 1rem;
}
</style>
