<script setup lang="ts">
import { defineProps, provide } from 'vue'
import { figure } from './widgets/figure.ts'

const props = defineProps<{
  width: number
  height: number
  minWidth: number
  minHeight: number
  scale: number
}>()

provide('motion-width', props.width)
provide('motion-height', props.height)
</script>

<template>
  <svg
    :viewBox="`0 0 ${width} ${height}`" style="background-color: black;" :style="{
      transform: `scale(${props.scale})`,
      minWidth: `${props.minWidth}px`,
      minHeight: `${props.minHeight}px`,
    }"
  >
    <g v-bind="figure({ x: width / 2, y: height / 2 })">
      <slot />
    </g>
  </svg>
</template>
