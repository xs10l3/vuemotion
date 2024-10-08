import { defineAnimation } from '@vue-motion/core'

export interface Growable {
  progress?: number
}

export const grow = defineAnimation<object, Growable>(
  (context, progress) => {
    context.target.progress = progress
  },
)

export const destory = defineAnimation<object, Growable>(
  (context, progress) => {
    context.target.progress = 1 - progress
  },
)
