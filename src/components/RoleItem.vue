<template>
  <div class="item">
    <div class="avatar-wrapper">
      <slot name="avatar"></slot>
    </div>
    <div class="info">
      <div class="name">
        <slot name="name"></slot>
      </div>
      <div class="status">
        <slot name="status"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  align-items: flex-start;
  padding: 4px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.avatar-wrapper {
  width: 64px;
  height: 64px;
  border: 1px solid #ccc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}

.info {
  display: flex;
  flex-direction: column;
}

.name {
  font-size: 16px;
  font-weight: bold;
}

.status {
  font-size: 14px;
  color: gray;
}
</style>
