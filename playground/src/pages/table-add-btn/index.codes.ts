export const basicCodeTs = `<template>
  <idea-table-add-btn @click="onAdd" />
</template>

<script setup lang="ts">
function onAdd() {
  alert('点击新增')
}
</script>`

export const basicCodeJs = `<template>
  <idea-table-add-btn @click="onAdd" />
</template>

<script setup>
function onAdd() {
  alert('点击新增')
}
</script>`

export const customCodeTs = `<template>
  <idea-table-add-btn text="新增记录" @click="onAdd" />
</template>

<script setup lang="ts">
function onAdd() {
  alert('点击新增')
}
</script>`

export const customCodeJs = `<template>
  <idea-table-add-btn text="新增记录" @click="onAdd" />
</template>

<script setup>
function onAdd() {
  alert('点击新增')
}
</script>`
