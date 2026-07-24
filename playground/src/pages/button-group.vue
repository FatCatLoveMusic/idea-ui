<template><div class="demo-page"><h2>Button Group 按钮组</h2><p class="demo-desc">用于多选切换。</p><div class="demo-section"><h3>基础用法</h3><div class="demo-block"><IdeaButtonGroup :buttons="buttons" v-model="active" /></div></div></div></template>
<script setup lang="ts">
import { ref } from 'vue'
const active = ref('day')
const buttons = [{ label: '日', value: 'day' }, { label: '周', value: 'week' }, { label: '月', value: 'month' }]
</script>