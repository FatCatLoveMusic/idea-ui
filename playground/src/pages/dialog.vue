<template>
  <div class="demo-page">
    <h2>Dialog 弹窗</h2>
    <p class="demo-desc">模态弹窗，支持可拖拽的对话框组件。</p>

    <div class="demo-section">
      <h3>基础用法</h3>
      <div class="demo-block">
        <button class="demo-btn" @click="visible = true">打开 Dialog</button>
        <IdeaDialog v-model="visible" title="提示" @close="visible = false">
          <p>这是一段内容</p>
          <p>这是一段内容</p>
          <p>这是一段内容</p>
        </IdeaDialog>
      </div>
    </div>

    <div class="demo-section">
      <h3>自定义底部</h3>
      <div class="demo-block">
        <button class="demo-btn" @click="visible2 = true">打开带底部 Dialog</button>
        <IdeaDialog v-model="visible2" title="确认操作">
          <p>确定要执行此操作吗？</p>
          <template #footer>
            <button class="demo-btn demo-btn--default" @click="visible2 = false">取消</button>
            <button class="demo-btn demo-btn--primary" @click="visible2 = false">确定</button>
          </template>
        </IdeaDialog>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
const visible2 = ref(false)
</script>

<style scoped>
.demo-btn {
  padding: 8px 16px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  font-size: 14px;
  color: #606266;
}
.demo-btn--primary {
  background: #ED6F22;
  color: #fff;
  border-color: #ED6F22;
}
.demo-btn--default {
  background: #fff;
  color: #606266;
}
</style>