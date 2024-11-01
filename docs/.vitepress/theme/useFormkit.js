import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { plugin, defaultConfig } from "@formkit/vue";
import { createElementPlugin, createOptionsLoaderPlugin } from "formkit-element-plus";
import { zh } from '@formkit/i18n'
import '@formkit/themes/genesis'

export function useFormkit(app) {
    app.use(ElementPlus)
    app.use(plugin, defaultConfig({
        locales: { zh },
        locale: 'zh',
        plugins: [createElementPlugin(), createOptionsLoaderPlugin()]
    }))
}