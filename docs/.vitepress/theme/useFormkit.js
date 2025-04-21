import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { FormKitElementPlusPlugin } from "formkit-element-plus";
import { zh } from '@formkit/i18n'
import { Menu } from '@element-plus/icons-vue'

export function useFormkit(app) {
    app.use(ElementPlus)
    app.use(FormKitElementPlusPlugin, {
        locales: { zh },
        locale: 'zh'
    })
    app.component('Menu', Menu)
}