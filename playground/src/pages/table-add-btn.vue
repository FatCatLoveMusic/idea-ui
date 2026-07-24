<template><div class="demo-page"><h2>Table Add</h2><p class="demo-desc">表格新增按钮。</p><div class="demo-section"><h3>基础用法</h3><div class="demo-block"><IdeaTableAddBtn @click="onAdd" /></div></div></div></template>
<script setup lang="ts">
function onAdd() { alert('点击新增') }
</script>