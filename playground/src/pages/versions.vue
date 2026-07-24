<template><div class="demo-page"><h2>Versions 版本号</h2><p class="demo-desc">版本号展示与切换组件。</p><div class="demo-section"><h3>基础用法</h3><div class="demo-block"><IdeaVersions currentVersion="v3.2.1" :versions="versions" /></div></div></div></template>
<script setup lang="ts">
const versions = [{ label: 'v3.2.0', value: 'v3.2.0', time: '2024-01-15' }, { label: 'v3.1.0', value: 'v3.1.0', time: '2023-12-01' }]
</script>