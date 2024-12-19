import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { plugin, defaultConfig } from "@formkit/vue";
import { ElementPlusInputs, createOptionsLoaderPlugin } from "formkit-element-plus";
import { zh } from '@formkit/i18n'

export function useFormkit(app) {
    app.use(ElementPlus)
    app.use(plugin, defaultConfig({
        locales: { zh },
        locale: 'zh',
        inputs: {
            ...ElementPlusInputs
        },
        plugins: [createOptionsLoaderPlugin()]
    }))
}