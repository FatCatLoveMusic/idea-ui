export interface BasicCodeLabels {
	addAlert: string
}

export function createBasicCodeTs(l: BasicCodeLabels): string {
	return `<template>
  <idea-table-add-btn @click="onAdd" />
</template>

<script setup lang="ts">
function onAdd() {
  alert('${l.addAlert}')
}
<\/script>`
}

export function createBasicCodeJs(l: BasicCodeLabels): string {
	return `<template>
  <idea-table-add-btn @click="onAdd" />
</template>

<script setup>
function onAdd() {
  alert('${l.addAlert}')
}
<\/script>`
}

export interface CustomCodeLabels {
	customText: string
	addAlert: string
}

export function createCustomCodeTs(l: CustomCodeLabels): string {
	return `<template>
  <idea-table-add-btn text="${l.customText}" @click="onAdd" />
</template>

<script setup lang="ts">
function onAdd() {
  alert('${l.addAlert}')
}
<\/script>`
}

export function createCustomCodeJs(l: CustomCodeLabels): string {
	return `<template>
  <idea-table-add-btn text="${l.customText}" @click="onAdd" />
</template>

<script setup>
function onAdd() {
  alert('${l.addAlert}')
}
<\/script>`
}
