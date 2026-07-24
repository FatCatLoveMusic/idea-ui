<template><div class="demo-page"><h2>Steps 步骤条</h2><p class="demo-desc">引导用户完成流程。</p><div class="demo-section"><h3>基础用法</h3><div class="demo-block"><IdeaSteps :steps="steps" :active="active" /></div></div></div></template>
<script setup lang="ts">
const steps = [{ title: '步骤一', description: '描述信息' }, { title: '步骤二', description: '描述信息' }, { title: '步骤三' }]
const active = 0
</script>