# FormKit element plus

<a href="https://element-plus.org/">Element plus</a> for <a href="https://formkit.com/">FormKit.</a>

大部分组件是基于 <a href="https://element-plus.org/">Element plus</a>, 属性会直接传递到element plus组件.

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
const app = createApp(App)

import { plugin, defaultConfig } from '@formkit/vue'
import { createElementPlugin } from 'formkit-element-plus'
import { zh } from '@formkit/i18n'
import '@formkit/themes/genesis' // formkit主题

app.use(
  plugin,
  defaultConfig({
    // 设置语言为中文
    locales: { zh },
    locale: 'zh',
    plugins: [createElementPlugin()],
  }),
)
```

## 基础表单案例

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" v-model="data" @Submit="onSubmit">
    <FormKit
      type="el-input"
      name="name"
      label="姓名"
      validation="required"
    />
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

    <template #footer="{disabled}">
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
