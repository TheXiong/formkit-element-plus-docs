# 异步数据源

## 使用OptionsLoaderPlugin插件

```javascript
import { plugin, defaultConfig } from '@formkit/vue'
import {
  ElementPlusInputs,
  createOptionsLoaderPlugin, // [!code ++]
} from 'formkit-element-plus'
import { zh } from '@formkit/i18n'

app.use(
  plugin,
  defaultConfig({
    locales: { zh },
    locale: 'zh',
    inputs: {
      ...ElementPlusInputs,
    },
    plugins: [createOptionsLoaderPlugin()], // [!code ++]
  }),
)
```

## 基础用法

:::demo

```vue
<template>
  <FormKit
    ref="myForm"
    type="el-form"
    label-position="top"
    v-model="data"
    @submit="onSubmit"
  >
    <FormKit
      type="el-select"
      name="a"
      label="a"
      validation="required"
      :optionsLoader="optionsLoader"
    />

    <template #footer="{ disabled, node }">
      <el-button
        :loading="disabled"
        :disabled="disabled"
        type="primary"
        @click="node.submit"
        >提交</el-button
      >
    </template>
  </FormKit>

  <pre>{{ data }}</pre>
</template>

<script>
import { ref, defineComponent, watch } from 'vue'

export default defineComponent({
  name: 'InputDemo',
  setup() {
    const data = ref()
    const myForm = ref()

    const schema = [
      {
        $formkit: 'el-input',
        name: 'email',
        label: 'Email address',
        validation: 'required',
      },
    ]

    const onSubmit = () => {
      console.log(data.value, 'submited')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    }

    const optionsLoader = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            mercury: 'Mercury',
            venus: 'Venus',
            earth: 'Earth',
            mars: 'Mars',
            jupiter: 'Jupiter',
            saturn: 'Saturn',
            uranus: 'Uranus',
            neptune: 'Neptune',
          })
        }, 1000)
      })
    }

    return { data, myForm, onSubmit, optionsLoader }
  },
})
</script>
```

:::

## 联动加载

:::demo

```vue
<template>
  <FormKit
    ref="myForm"
    type="el-form"
    label-position="top"
    v-model="data"
    @submit="onSubmit"
  >
    <FormKit
      type="el-select"
      name="a"
      label="a"
      validation="required"
      :options="['1', '2']"
      id="a"
    />
    <FormKit
      type="el-select"
      name="b"
      label="b"
      validation="required"
      :optionsDepIds="['a']"
      :optionsLoader="optionsLoader"
    />

    <template #footer="{ disabled, node }">
      <el-button
        :loading="disabled"
        :disabled="disabled"
        type="primary"
        @click="node.submit"
        >提交</el-button
      >
    </template>
  </FormKit>

  <pre>{{ data }}</pre>
</template>

<script>
import { ref, defineComponent, watch } from 'vue'

export default defineComponent({
  name: 'InputDemo',
  setup() {
    const data = ref()
    const myForm = ref()

    const schema = [
      {
        $formkit: 'el-input',
        name: 'email',
        label: 'Email address',
        validation: 'required',
      },
    ]

    const onSubmit = () => {
      console.log(data.value, 'submited')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    }

    const optionsLoader = (depData) => {
      console.log(depData, 'depData')
      if(!depData?.a) {
        return []
      }
      if (depData?.a === '1') {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(['a1','b1','c1'])
          }, 1000)
        })
      } else{
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(['a2','b2','c2'])
          }, 1000)
        })
      }
    }

    return { data, myForm, onSubmit, optionsLoader }
  },
})
</script>
```

:::
