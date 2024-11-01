import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from './useComponents'
import { useFormkit } from './useFormkit'
import './style.css'
import Button from '../../../src/components/Button.vue'
import '../../../src/styles/index.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    useComponents(ctx.app)
    useFormkit(ctx.app)
    ctx.app.component(Button.name, Button)
  }
}
