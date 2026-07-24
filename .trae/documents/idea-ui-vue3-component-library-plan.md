# idea-ui Vue3 组件库创建计划

## 需求概述

在 `idea-ui` 目录下创建一个 Vue3 UI 组件库，要求：
- 代码结构与 Element Plus 保持一致
- 本地运行页面类似 Element Plus 官网 `https://element-plus.org/zh-CN/component/overview`，可以浏览各个组件
- 能够打包成 npm 包，包中不包含示例代码，只包含关键组件代码
- 组件基于 `web-framework`（Vue2 项目）中的纯 UI 组件转换而来，排除带有 API 接口调用的业务组件
- 支持多语言（中文简体、英文、繁体中文），支持国际化布局（LTR/RTL）
- 支持主题色切换

---

## 当前状态分析

### 源项目分析 (web-framework)

**源项目路径**: `c:\Users\22695\workpalce\code\EAP5\平台\web-framework`

**已有信息**:
- 是一个 Vue2 项目
- 在 `src/components/` 目录下有大量组件
- 已经存在多语言支持机制（zh-cn, en, zh-tw）
- 已经存在主题系统（default, blue, dark-blue, red）
- 组件使用了 element-ui 作为基础依赖

### 纯 UI 组件筛选结果

通过代码分析，以下组件不包含 API 调用或业务逻辑，属于纯 UI 组件，可以迁移：

#### src/components/ 目录下的纯 UI 组件

| 组件名 | 原路径 | 说明 |
|--------|--------|------|
| collapse-transition | `src/components/collapse-transition.js` | 折叠动画过渡 |
| sapi-move-module | `src/components/sapi-move-module.js` | 模块拖拽 |
| sapi-wheel-event | `src/components/sapi-wheel-event.js` | 滚轮事件处理 |
| sapi-simple-tree | `src/components/sapi-simple-tree/index.js` | 简单树 |
| sapi-scrollbar | `src/components/scrollbar/index.vue` + 子组件 | 自定义滚动条 |
| sapi-back-to-top | `src/components/sapi-back-to-top.vue` | 回到顶部 |
| sapi-card-image | `src/components/sapi-card-image.vue` | 卡片图片 |
| sapi-card-item | `src/components/sapi-card-item.vue` | 卡片项 |
| sapi-dialog | `src/components/sapi-dialog.vue` | 弹窗容器（可拖动） |
| sapi-drawer | `src/components/sapi-drawer.vue` | 抽屉 |
| sapi-filter-item | `src/components/sapi-filter-item.vue` | 过滤项 |
| sapi-form-collapses | `src/components/sapi-form-collapses.vue` | 表单一键折叠 |
| sapi-form-collapses-item | `src/components/sapi-form-collapses-item.vue` | 表单一键折叠项 |
| sapi-form-item | `src/components/sapi-form-item.vue` | 表单项 |
| sapi-form-panel | `src/components/sapi-form-panel.vue` | 表单面板 |
| sapi-link | `src/components/sapi-link.vue` | 链接包装 |
| sapi-markdown | `src/components/sapi-markdown.vue` | Markdown 渲染 |
| sapi-nodata | `src/components/sapi-nodata.vue` | 无数据提示 |
| sapi-post-nav | `src/components/sapi-post-nav.vue` | 文章导航 |
| sapi-skeleton | `src/components/sapi-skeleton.vue` | 骨架屏 |
| sapi-select-btn | `src/components/sapi-select-btn.vue` | 选择按钮 |
| sapi-app-code | `src/components/sapi-app-code.vue` | 应用代码展示 |
| sapi-autocomplete | `src/components/sapi-autocomplete.vue` | 自动完成 |
| sapi-date-time | `src/components/sapi-date-time.vue` | 日期时间展示 |
| sapi-video | `src/components/sapi-video.vue` | 视频播放器 |
| collapse | `src/components/collapse/index.vue` | 折叠面板 |
| edit-json | `src/components/edit-json/index.vue` | JSON 编辑器 |
| format | `src/components/format/index.vue` + `format.js` | 数据格式化展示 |
| button-group | `src/components/sapi-button-group/index.vue` + `group-item.vue` | 按钮组 |
| btn-table | `src/components/sapi-btn-table/index.vue` | 按钮表格 |
| sapi-card-list | `src/components/sapi-card-list/index.vue` | 卡片列表 |
| tabs | `src/components/tabs/index.vue` + `tab-pane.vue` | 标签页 |
| tree-new | `src/components/tree-new/index.vue` + `item.vue` | 新树组件 |
| treeGrid | `src/components/treeGrid/index.vue` + ... | 树形表格 |
| preview-file | `src/components/preview-file.vue` | 文件预览 |
| remote-dialog-page | `src/components/remote-dialog-page.vue` | 远程弹窗页面容器 |
| remote-dialog | `src/components/remote-dialog.vue` | 远程弹窗 |

#### src/pages/components/ 目录下的纯 UI 组件

| 组件名 | 原路径 | 说明 |
|--------|--------|------|
| divider-line | `src/pages/components/divider-line.vue` | 分割线 |
| sapi-empty-card | `src/pages/components/sapi-empty-card.vue` | 空状态卡片 |
| sapi-versions | `src/pages/components/sapi-versions.vue` | 版本号展示/切换 |
| table-add-btn | `src/pages/components/table-add-btn.vue` | 表格新增按钮 |
| table-tabs | `src/pages/components/table-tabs.vue` | 表格Tab切换 |
| stru-empty | `src/pages/components/stru-empty.vue` | 架构为空提示 |
| sapi-segment | `src/pages/components/sapi-segment/index.vue` + `sapi-segment-btn.vue` | 分段控制器(Segment) |
| sapi-steps | `src/pages/components/sapi-steps/index.vue` + `sapi-step.vue` | 步骤条(Steps) |
| sapi-simple-mark | `src/pages/components/sapi-simple-mark/index.vue` + `mark-item.js` | 时间轴/标记线(Timeline) |
| sapi-tile-filter | `src/pages/components/sapi-tile-filter.vue` | 平铺筛选器 |
| percentage-input | `src/pages/components/percentage-input.vue` | 百分比输入框（依赖 format 组件） |
| sapi-panel-step | `src/pages/components/sapi-panel-step/index.vue` + `step-item.vue` + `child-item.vue` + `step-tips.vue` + `slider.js` + `parentMove.js` | 面板步骤进度条 |

**总计纯 UI 组件：`src/components/` 35个 + `src/pages/components/` 12个 = 约 47 个**

---

**排除的组件（含 API/业务逻辑）**:

`src/components/` 排除：
- sapi-choose-* (选择供应商、用户、员工等) - 都有 API 调用
- sapi-upload, sapi-imgs-upload - 有上传 API
- sapi-table - 含懒加载 API 调用
- sapi-form - 表单组件，与项目业务耦合
- sapi-select, sapi-area, sapi-area-multiple - 包含区域数据 API 调用
- sapi-export, sapi-export-direct - 包含导出 API
- sapi-import, sapi-base-import - 包含导入 API
- sapi-editor, sapi-common-editor, sapi-tinymce-editor - 需要后端配置
- idea-ai-chat - 包含 AI API 调用
- sapi-calendar - 包含日历数据 API 调用
- sapi-luckysheet - 需要后端
- sapi-code-editor - 需要后端
- sapi-chameleonic-group - 业务耦合
- online-chart/*（所有图表组件） - 业务相关
- idea-form-fill - 与业务表单耦合
- install.js, dialog.js, locale-component.js, register-layout.js, functional-render-sync.js - 只做注册/导出，不迁移

`src/pages/components/` 排除：
- license-remind - 有 API 调用 (`this.$get`)
- sapi-form-block - 有 API 调用、动态表单渲染
- upload-btn - 依赖 sapi-upload-extend（有上传 API）
- select-contract, select-corp, select-legal, select-project, select-supplier, select-user-project - 选择弹窗，含 API
- sapi-choose-contract, sapi-choose-material - 选择接口，含 API
- multi-choose-corp, choose-corp-multi, choose-supplierClass-multi - 多选，含 API
- left-tree-company - 左侧树，含 API
- contract-selection - 合同选择，含 API
- sapi-add-suppliers - 添加供应商，含 API
- chooice-fundPlan - 资金计划选择，含 API
- questionnaire-online - 在线问卷，含 API
- sapi-online-chart, sapi-online-form, sapi-online-list, sapi-online-step-form, sapi-online-tree-select-dialog - 在线动态组件，含 API
- sapi-select-visa - 签证选择，含 API
- sapi-distribution-map, sapi-drawing-map - 地图组件，业务相关
- multipleTreeSelect - 多选树，含 API
- purchase/ - 采购业务组件

### 现有国际化支持分析

web-framework 已支持三种语言：
- 中文简体 (zh-cn)
- 中文繁体 (zh-tw)
- 英文 (en)

国际化布局需要支持 LTR/RTL，参考文档: https://cloud.baidu.com/article/3846294

### 现有主题分析

web-framework 已使用 Less 变量定义主题：
- `@--color-primary`: 主色调 (#ED6F22)
- `@--color-success`: 成功色 (#46c620)
- `@--color-warning`: 警告色 (#ff8330)
- `@--color-danger`: 危险色 (#ff5651)
- `@--color-info`: 信息色 (#3acaf0)

支持多个主题切换。

---

## 项目结构设计 (遵循 Element Plus 风格)

```
idea-ui/
├── .github/                      # GitHub 配置
├── .husky/                       # Git hooks
├── docs/                         # 文档网站（类似 Element Plus 官网）
│   ├── components/               # 组件文档（每个组件一个文件）
│   ├── guide/                    # 指南文档
│   └── index.md                 # 首页
├── packages/                     # 组件源代码（npm 包发布内容）
│   ├── theme-chalk/             # 主题样式
│   │   ├── src/                 # 主题源代码
│   │   │   ├── common/          # 通用样式
│   │   │   ├── fonts/           # 图标字体
│   │   │   ├── variables/       # 颜色变量（不同主题）
│   │   │   └── *.less           # 各个组件样式
│   │   └── index.d.ts
│   │   └── package.json
│   ├── locale/                  # 国际化语言包
│   │   ├── zh-cn.ts            # 中文简体
│   │   ├── zh-tw.ts            # 中文繁体
│   │   ├── en.ts               # 英文
│   │   └── index.ts            # 语言入口
│   ├── components/             # 各个组件
│   │   ├── back-top/           # 回到顶部
│   │   │   ├── src/            # 组件源代码
│   │   │   │   └── back-top.vue
│   │   │   ├── index.ts        # 组件导出
│   │   │   └── package.json
│   │   ├── dialog/             # 弹窗
│   │   ├── drawer/             # 抽屉
│   │   ├── collapse/           # 折叠面板
│   │   ├── card/               # 卡片
│   │   ├── button-group/       # 按钮组
│   │   ├── tabs/               # 标签页
│   │   ├── tree/               # 树形
│   │   ├── scrollbar/          # 滚动条
│   │   ├── skeleton/           # 骨架屏
│   │   ├── markdown/           # Markdown
│   │   ├── no-data/            # 无数据
│   │   ├── form/               # 表单相关 (form-item, form-panel, form-collapses)
│   │   └── ... 其他纯UI组件
│   ├── hooks/                  # 组合式 API hooks
│   ├── utils/                  # 工具函数
│   ├── directives/             # 指令
│   ├── constants/              # 常量定义
│   ├── index.ts                # 主入口文件
│   └── package.json            # 根 package.json
├── playground/                  # 本地开发示例、组件预览
│   ├── src/
│   │   ├── App.vue             # 主应用（类似官网）
│   │   ├── main.ts             # 入口
│   │   ├── router.ts           # 路由
│   │   └── pages/              # 各个页面（组件预览页）
│   └── index.html
├── scripts/                     # 构建脚本
│   ├── build.ts                # 打包脚本
│   └── utils.ts                # 工具
├── .gitignore
├── .npmignore
├── README.md
├── package.json                # 项目根 package.json（包含 docs 开发依赖）
├── pnpm-workspace.yaml          # pnpm workspace 配置
├── tsconfig.json                # TypeScript 配置
├── vite.config.ts               # Vite 配置
└── vitest.config.ts             # Vitest 配置
```

---

## 具体变更和实现步骤

### 阶段 1: 初始化项目结构

| 文件/目录 | 操作 | 说明 |
|----------|------|------|
| `package.json` | 新建 | 项目根配置，设置工作空间、scripts |
| `pnpm-workspace.yaml` | 新建 | pnpm workspace 配置 |
| `tsconfig.json` | 新建 | TypeScript 配置 |
| `packages/package.json` | 新建 | 组件库根 package.json |
| `packages/index.ts` | 新建 | 组件库主入口 |

### 阶段 2: 迁移纯 UI 组件 (Vue2 → Vue3)

每个组件迁移需要:
1. 从 `web-framework` 复制源代码
2. 转换 Vue2 API 到 Vue3 Composition API
   - `export default { props, data, methods }` → `defineProps`, `defineEmits`, `ref`, `computed`
   - 移除 `this` 依赖
   - `$emit` → `defineEmits`
   - `this.$parent`, `this.$children` → `getCurrentInstance` 或 `provide/inject`
3. 添加 TypeScript 类型定义
4. 添加样式导入
5. 创建 `index.ts` 导出

需要迁移的组件清单（共 47 个）:

**`src/components/` 迁移 (35个)**:
1. **base 模块**: `back-top`, `collapse-transition`, `scrollbar`, `skeleton`, `no-data`
2. **布局模块**: `drawer`, `dialog`, `collapse`, `tabs`
3. **表单模块**: `form-item`, `form-panel`, `form-collapses`, `form-collapses-item`, `filter-item`, `select-btn`
4. **数据展示**: `card-image`, `card-item`, `card-list`, `tree-new`, `tree-grid`, `simple-tree`, `markdown`, `format`, `button-group`, `btn-table`, `link`, `app-code`, `date-time`
5. **其他**: `edit-json`, `preview-file`, `remote-dialog-page`, `remote-dialog`, `video`, `autocomplete`, `post-nav`, `move-module`, `wheel-event`

**`src/pages/components/` 迁移 (12个)**:
1. `divider-line` - 分割线
2. `empty-card` - 空状态卡片
3. `versions` - 版本号展示
4. `table-add-btn` - 表格新增按钮
5. `table-tabs` - 表格Tab切换
6. `stru-empty` - 架构为空提示
7. `segment` - 分段控制器 (sapi-segment)
8. `steps` - 步骤条 (sapi-steps)
9. `simple-mark` / `timeline` - 时间轴标记线 (sapi-simple-mark)
10. `tile-filter` - 平铺筛选器
11. `percentage-input` - 百分比输入框
12. `panel-step` - 面板步骤进度条 (sapi-panel-step)

### 阶段 3: 建立国际化系统

| 文件 | 操作 | 说明 |
|------|------|------|
| `packages/locale/` | 新建目录 | |
| `packages/locale/index.ts` | 新建 | 语言导出 |
| `packages/locale/zh-cn.ts` | 新建 | 从 web-framework 合并翻译 |
| `packages/locale/zh-tw.ts` | 新建 | 从 web-framework 合并翻译 |
| `packages/locale/en.ts` | 新建 | 从 web-framework 合并翻译 |
| `packages/hooks/use-locale.ts` | 新建 | 提供 locale hook |
| - | - | 添加 LTR/RTL 支持（CSS 变量方案） |

使用 CSS 变量方案实现国际化布局（参考百度文档）:
```css
:root {
  --direction: ltr;
  --start: left;
  --end: right;
  --flex-direction: row;
}
[dir="rtl"] {
  --direction: rtl;
  --start: right;
  --end: left;
  --flex-direction: row-reverse;
}
```

### 阶段 4: 建立主题系统

| 文件 | 操作 | 说明 |
|------|------|------|
| `packages/theme-chalk/` | 新建目录 | |
| `packages/theme-chalk/src/` | 新建目录 | |
| `packages/theme-chalk/src/common/` | 新建 | 通用基础样式 |
| `packages/theme-chalk/src/variables/` | 新建 | 变量文件 |
| `packages/theme-chalk/src/variables/light.less` | 新建 | 从 web-framework 迁移变量 |
| `packages/theme-chalk/src/variables/dark.less` | 新建 | 深色主题变量 |
| `packages/theme-chalk/src/index.less` | 新建 | 主题入口 |
| `packages/theme-chalk/src/*.less` | 新建 | 每个组件对应一个 less 文件 |

支持通过 CSS 变量动态切换主题色。

### 阶段 5: 创建文档网站 (playground)

类似于 Element Plus 官网:

| 文件 | 操作 | 说明 |
|------|------|------|
| `playground/` | 新建目录 | |
| `playground/index.html` | 新建 | HTML 入口 |
| `playground/src/main.ts` | 新建 | 应用入口 |
| `playground/src/App.vue` | 新建 | 根组件 |
| `playground/src/router.ts` | 新建 | 路由配置 |
| `playground/src/components/` | 新建 | 网站布局组件（侧边导航、头部等） |
| `playground/src/pages/` | 新建 | 各个组件预览页面 |

网站功能:
- 侧边栏导航列出所有组件
- 点击组件显示组件介绍、示例、API 文档
- 语言切换按钮（中文简体/繁体/英文）
- 主题色切换按钮
- RTL/LTR 切换演示

### 阶段 6: 配置打包

| 文件 | 操作 | 说明 |
|------|------|------|
| `vite.config.ts` | 新建 | Vite 配置 |
| `scripts/build.ts` | 新建 | 打包脚本 |
| `.npmignore` | 新建 | 配置排除示例代码、文档等 |

打包要求:
- 输出到 `dist/` 目录
- 支持 ES module 和 CommonJS
- 声明文件生成
- 样式单独打包
- 不包含 playground 示例代码和文档网站代码

---

## 假设与决策

1. **使用 Vite + TypeScript**: Element Plus 使用 Vite，我们也遵循，开发体验好，构建速度快。
2. **使用 pnpm workspace**: 更好的包管理，适合 monorepo 结构。
3. **Composition API 优先**: Vue3 推荐，所有组件使用 `<script setup>` 语法。
4. **保留原有 Less 变量系统**: 从 web-framework 迁移过来，减少变动。
5. **仅迁移纯 UI 组件**: 排除所有含 API 调用和业务逻辑的组件，只保留不依赖后端的纯展示/交互组件。
6. **多语言支持**: 使用运行时切换，不编译多语言包。
7. **主题支持**: 使用 CSS 变量实现动态切换，支持自定义主题色。

---

## 依赖关系

**必须依赖**:
- `vue`: ^3.0.0 (peer dependency)
- `typescript`: ^5.0.0

**可选依赖**:
- `element-plus`: 如果需要基于它扩展，但是我们是独立组件库

**开发依赖**:
- `vite`, `vitepress`, `@vitejs/plugin-vue`, `less`, `pnpm`

---

## 验证步骤

1. **依赖安装**: `pnpm install` 应该成功完成
2. **本地开发**: `pnpm dev` 应该能启动文档网站，访问 localhost 能看到类似 Element Plus 的组件浏览页面
3. **组件预览**: 每个组件页面应该能正确展示组件示例
4. **语言切换**: 切换语言应该能正确更新所有组件文本
5. **主题切换**: 切换主题色应该能正确更新颜色
6. **RTL 切换**: 切换 RTL/LTR 应该能正确调整布局方向
7. **打包**: `pnpm run build` 应该能成功打包出 npm 包
8. **包检查**: 打包后的 npm 包应该不包含 playground 和 docs，只包含编译后的组件代码

---

## 技术要点

### Vue2 转 Vue3 转换规则

| Vue2 Pattern | Vue3 Equivalent |
|-------------|----------------|
| `data() { return {} }` | `ref()` / `reactive()` |
| `props: {}` | `defineProps()` |
| `emit: {}` | `defineEmits()` |
| `this.$emit()` | `emit()` (from defineEmits) |
| `this.$parent` | `inject('parent')` |
| `this.$refs` | `ref()` in template |
| `.sync` | `v-model:propName` |
| `this.$router` | `useRouter()` |
| `mixins` | `composition-api` / `useXXX()` |

### CSS 变量实现 LTR/RTL

```css
.nav {
  float: var(--start);
}

[dir="rtl"] .nav {
  float: var(--end);
}

.container {
  display: flex;
  flex-direction: var(--flex-direction, row);
}

[dir="rtl"] .container {
  --flex-direction: row-reverse;
}

.icon-arrow {
  transform: scaleX(var(--scale-x, 1));
}

[dir="rtl"] .icon-arrow {
  --scale-x: -1;
}
```

### 主题色切换

通过 CSS 变量覆盖实现:

```css
:root {
  --el-color-primary: #ED6F22;
}

.theme-blue {
  --el-color-primary: #458aff;
}
```

---

## 全局方法处理方案

部分纯 UI 组件依赖 `this.$utils`、`this.$tips`、`this.$loading`、`this.$closeWaringTips` 等全局方法，需要将这些工具方法整合为一个全局对象，使用者**无需手动 import**即可在任何地方调用。

### 处理方式

1. 从 `web-framework` 中抽离这些全局方法的实现代码
2. 放入 `packages/utils/` 和 `packages/hooks/` 中实现具体逻辑
3. 提供一个统一的全局对象（如 `$idea`），聚拢所有工具方法
4. 在 `install()` 方法中通过 `app.config.globalProperties` 挂载，使用者无需 import 即可调用
5. 同时导出工具方法的独立引用，方便按需 tree-shaking

### 涉及的具体全局方法

| 方法 | 用途 | 实现位置 |
|-----|------|---------|
| `$idea.getMaxZIndex()` | 获取最大 z-index 值 | `packages/utils/z-index.ts` |
| `$idea.tips(el, text)` | 显示 tooltip 提示 | `packages/utils/tooltip.ts` |
| `$idea.closeTips(el)` | 关闭 tooltip 提示 | `packages/utils/tooltip.ts` |
| `$idea.loading(show)` | 显示/隐藏 loading 状态 | `packages/hooks/use-loading.ts` |
| `$idea.closeWarningTips(selector)` | 关闭表单错误提示 | `packages/utils/form.ts` |

### 全局挂载实现

```typescript
// packages/utils/index.ts — 统一导出
export { getMaxZIndex } from './z-index'
export { tips, closeTips } from './tooltip'
export { showLoading, hideLoading } from './loading'
// ...

// packages/defaults.ts — 全局对象定义
import * as utils from './utils'

export const $idea = {
  ...utils,
}

// packages/index.ts — install 入口
import type { App } from 'vue'
import { $idea } from './defaults'

export default {
  install(app: App) {
    // 挂载全局对象，使用者在 options API / template 中可通过 this.$idea 访问
    app.config.globalProperties.$idea = $idea

    // 注册所有组件...
  }
}
```

### 使用者使用方式

**Options API / template 中（无需 import）**：
```vue
<template>
  <div @click="$idea.tips($el, '提示文字')">点击</div>
</template>
<script>
export default {
  mounted() {
    this.$idea.getMaxZIndex()
  }
}
</script>
```

**Composition API 中**：
```vue
<script setup>
import { getCurrentInstance } from 'vue'

const instance = getCurrentInstance()
const zIndex = instance?.proxy?.$idea.getMaxZIndex()
</script>
```

**或直接 import（支持 tree-shaking）**：
```typescript
import { getMaxZIndex } from '@idea-ui/utils'
const zIndex = getMaxZIndex()
```

---

## 风险与注意事项

1. **部分组件使用了 DOM 直接操作**: Vue3 中需要使用 `ref` 访问 DOM，保持逻辑不变。
2. **命名转换**: `sapi-xxx` → `idea-xxx`，保持一致命名规范。
3. **tree shaking**: 确保支持按需导入。
