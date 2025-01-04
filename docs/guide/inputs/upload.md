# upload

## 基础用法

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" v-model="data" @submit="onSubmit">
    <FormKit
      type="el-upload"
      name="upload"
      label="上传"
      validation="required"
      :auto-upload="false"
    >
      <el-button type="primary" size="small">select file</el-button>
    </FormKit>

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

## 单文件上传

limit大于0或者不传表示多文件，为1表示单文件

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" v-model="data" @submit="onSubmit">
    <FormKit
      type="el-upload"
      name="upload"
      label="上传"
      :limit="1"
      validation="required"
      :auto-upload="false"
    >
      <el-button type="primary" size="small">select file</el-button>
    </FormKit>

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

## 先上传，再提交url

valueType设置为url，不设置则为element plus的file对象

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" v-model="data" @submit="onSubmit">
    <FormKit
      type="el-upload"
      name="upload"
      label="上传"
      valueType="url"
      validation="required"
      :auto-upload="true"
      :http-request="request"
    >
      <el-button type="primary" size="small">select file</el-button>
    </FormKit>

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

    const request = (options) => {
      console.log(options, 'options')
      const { file, onSuccess, onError } = options

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            code: 200,
            data: {
              path: `http://127.0.0.1/${options.file.name}`,
            },
          })
        }, 2000)
      })
    }

    return { data, myForm, onSubmit, request }
  },
})
</script>
```

:::

## Attributes

| 参数      | 说明   | 类型   | 可选值   | 默认值 |
| --------- | ------ | ------ | -------- | ------ |
| valueType | 值类型 | string | file/url | file   |


其它属性参考 [Element Plus Upload Attributes](https://element-plus.org/zh-CN/component/upload.html#api)
