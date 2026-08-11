export const basicCodeTs = `<template>
  <IdeaTableAddBtn @click="onAdd" />
</template>

<script setup lang="ts">
function onAdd() {
  alert('点击新增')
}
</script>`

export const basicCodeJs = `<template>
  <IdeaTableAddBtn @click="onAdd" />
</template>

<script setup>
function onAdd() {
  alert('点击新增')
}
</script>`

export const customCodeTs = `<template>
  <IdeaTableAddBtn text="新增记录" @click="onAdd" />
</template>

<script setup lang="ts">
function onAdd() {
  alert('点击新增')
}
</script>`

export const customCodeJs = `<template>
  <IdeaTableAddBtn text="新增记录" @click="onAdd" />
</template>

<script setup>
function onAdd() {
  alert('点击新增')
}
</script>`
