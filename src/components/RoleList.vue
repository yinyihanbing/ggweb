<script setup lang="ts">
import { useRoleStore } from '../stores/roleStore'
import RoleItem from './RoleItem.vue'

const roleStore = useRoleStore()
</script>

<template>
  <div class="role-list">
    <RoleItem v-for="role in roleStore.roles" :key="role.id" v-bind="role">
      <template #avatar>
        <img class="avatar" src="@/assets/default_head.png" width="64" height="64" />
      </template>
      <template #name>{{ role.name }}</template>
      <template #status>{{ role.status }}</template>
    </RoleItem>
  </div>
</template>

<style scoped>
.role-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
}
</style>
