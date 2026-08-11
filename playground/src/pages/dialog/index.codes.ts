export const basicCodeTs = `<template>
  <el-button @click="visible = true">打开 Dialog</el-button>
  <idea-dialog v-model="visible" title="提示">
    <p>这是一段内容</p>
    <p>这是一段内容</p>
    <p>这是一段内容</p>
  </idea-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>`

export const basicCodeJs = `<template>
  <el-button @click="visible = true">打开 Dialog</el-button>
  <idea-dialog v-model="visible" title="提示">
    <p>这是一段内容</p>
    <p>这是一段内容</p>
    <p>这是一段内容</p>
  </idea-dialog>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
</script>`

export const footerCodeTs = `<template>
  <el-button type="primary" @click="visible = true">打开带底部 Dialog</el-button>
  <idea-dialog v-model="visible" title="确认操作">
    <p>确定要执行此操作吗？</p>
    <template #footer>
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="visible = false">确定</el-button>
    </template>
  </idea-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>`

export const footerCodeJs = `<template>
  <el-button type="primary" @click="visible = true">打开带底部 Dialog</el-button>
  <idea-dialog v-model="visible" title="确认操作">
    <p>确定要执行此操作吗？</p>
    <template #footer>
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="visible = false">确定</el-button>
    </template>
  </idea-dialog>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
</script>`
