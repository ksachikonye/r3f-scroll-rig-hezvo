// https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules
/// <reference path="../types/global.ts" />
import type { ScrollData } from '../scrollbar/SmoothScrollbarTypes'

export interface ScrollState {
  inViewport: boolean
  progress: number
  visibility: number
  viewport: number
}

export type Rect = {
  top: number
  bottom: number
  left: number
  right: number
  width: number
  height: number
}
export type Bounds = Rect & {
  x: number
  y: number
  positiveYUpBottom: number
}

export interface Tracker {
  rect: Rect | undefined
  scale: vec3 | undefined
  inViewport: boolean
  bounds: Bounds
  scrollState: ScrollState
  position: vec3
  update: (args?: { onlyUpdateInViewport?: boolean; scroll?: any }) => void
}

export interface TrackerOptions {
  rootMargin?: string
  threshold?: number
  autoUpdate?: boolean
  wrapper?: Window | HTMLDivElement
  [key: string]: any
}

export type UpdateCallback = {
  onlyUpdateInViewport?: boolean
  scroll?: ScrollData
}
