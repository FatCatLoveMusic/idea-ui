<template>
  <div class="demo-page">
    <h2>Back Top 回到顶部</h2>
    <p class="demo-desc">返回页面顶部的操作按钮。</p>

    <div class="demo-section">
      <h3>基础用法</h3>
      <DemoBlock :code-ts="basicCodeTs" :code-js="basicCodeJs">
        <div ref="scrollContainer" class="scroll-demo" style="height: 300px; overflow-y: auto; position: relative;">
          <p v-for="i in 20" :key="i" class="scroll-item">滚动内容行 {{ i }}，向下滚动查看回到顶部按钮</p>
          <IdeaBackTop :visibility-height="100" :target="getScrollContainer" />
        </div>
      </DemoBlock>
    </div>

    <div class="demo-section">
      <h3>API</h3>
      <table class="api-table">
        <thead>
          <tr>
            <th>参数</th>
            <th>类型</th>
            <th>默认值</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>visibility-height</td>
            <td>number</td>
            <td>400</td>
            <td>滚动高度达到此值时显示按钮</td>
          </tr>
          <tr>
            <td>back-position</td>
            <td>number</td>
            <td>0</td>
            <td>回到顶部的位置</td>
          </tr>
          <tr>
            <td>custom-style</td>
            <td>object</td>
            <td>-</td>
            <td>自定义样式</td>
          </tr>
          <tr>
            <td>transition-name</td>
            <td>string</td>
            <td>fade</td>
            <td>过渡动画名称</td>
          </tr>
          <tr>
            <td>target</td>
            <td>function</td>
            <td>-</td>
            <td>设置滚动目标元素</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DemoBlock from '../../components/DemoBlock.vue'
import { basicCodeTs, basicCodeJs } from './index.codes'

const scrollContainer = ref<HTMLElement | null>(null)

const getScrollContainer = () => scrollContainer.value
</script>

<style scoped lang="less">
.scroll-demo {
  background: #f5f7fa;
  border-radius: 4px;
  padding: 16px;
}

.scroll-item {
  padding: 8px 0;
  color: #606266;
}

.api-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;

  th, td {
    padding: 12px 16px;
    text-align: left;
    border-bottom: 1px solid #e4e7ed;
    font-size: 14px;
  }

  th {
    background: #f5f7fa;
    font-weight: 600;
    color: #303133;
  }

  td {
    color: #606266;

    code {
      background: #f2f6fc;
      padding: 2px 6px;
      border-radius: 4px;
      font-family: monospace;
      font-size: 13px;
      color: #606266;
    }
  }

  tr:last-child td {
    border-bottom: none;
  }
}
</style>