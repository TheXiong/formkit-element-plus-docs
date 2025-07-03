# FormKit element plus

FormKit Element Plus 是一个将 <a href="https://element-plus.org/">Element Plus</a> 表单组件无缝集成到 <a href="https://formkit.com/">FormKit</a> 的插件，支持直接传递 Element Plus 的所有属性和事件，助力高效构建强大、灵活的表单界面。


## 安装

npm安装

```shell
npm i element-plus
npm i @formkit/vue
npm i @formkit/i18n
npm i formkit-element-plus
```

yarn安装

```shell
yarn add element-plus
yarn add @formkit/vue
yarn add @formkit/i18n
yarn add formkit-element-plus
```

## 全局设置

在入口main.ts文件中,全局注入FormKit、FormKitSchema和基于element-plus封装的输入组件。

```typescript
import { FormKitElementPlusPlugin } from "formkit-element-plus";
import { zh } from '@formkit/i18n'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);

app.use(ElementPlus);
app.use(FormKitElementPlusPlugin, {
    // set language
    locales: { zh },
    locale: 'zh'
})
```

## 基础表单案例

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" v-model="data" @submit="onSubmit">
    <FormKit type="el-input" name="name" label="姓名" validation="required" />
    <FormKit
      type="el-select"
      name="sex"
      label="性别"
      :options="[
        // 设置下拉框选项
        { value: '0', label: '女' },
        { value: '1', label: '男' },
      ]"
      validation="required"
    />

    <template #footer="{ disabled }">
      <FormKit type="submit" :disabled="disabled" />
    </template>
  </FormKit>

  <div>{{ data }}</div>
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'InputDemo',
  setup() {
    const data = ref()
    const myForm = ref()

    const onSubmit = () => {
      console.log(data.value, 'submited')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    }

    return { data, myForm, onSubmit }
  },
})
</script>
```

:::
