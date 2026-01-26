<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>

<template>
  <div class="card">
    <h3 v-if="title" class="card-title">{{ title }}</h3>
    <div class="card-content">
      <slot>Default content goes here...</slot>
    </div>
    <div class="card-actions" v-if="$slots.actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: white;
  border-radius: 16px; /* slightly more rounded for modern look */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 24px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(240, 240, 240, 0.8);
  max-width: 400px;
  font-family: system-ui, -apple-system, sans-serif;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-color: rgba(220, 220, 220, 1);
}

.card-title {
  margin: 0 0 12px;
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  letter-spacing: -0.025em;
}

.card-content {
  color: #4b5563;
  line-height: 1.625;
  font-size: 1rem;
}

.card-actions {
  margin-top: 24px;
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  border-top: 1px solid #f3f4f6;
  padding-top: 16px;
}
</style>
