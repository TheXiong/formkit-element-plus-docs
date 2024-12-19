# 表格

## 基础用法

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" v-model="data" @submit="onSubmit">
    <FormKit
      type="el-array-table"
      name="table"
      label="table"
      addLabel="添加"
      :columns="columns"
    >
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

    const columns = [
      {
        $formkit: 'el-switch',
        name: 'a',
        label: `a`,
        inlinePrompt: true,
        value: true,
        columnWidth: '100px',
      },
      {
        $formkit: 'el-input',
        name: 'b',
        label: `b`,
      },
      {
        $formkit: 'el-select',
        name: 'c',
        label: 'c',
        options: [
          { label: '1', value: '1' },
          { label: '2', value: '3' },
          { label: '3', value: '4' },
        ],
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

    return { data, myForm, onSubmit, columns }
  },
})
</script>
```

:::

## schema用法

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" v-model="data" @submit="onSubmit">
    <FormKitSchema :schema="schema" />

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
        $formkit: 'el-array-table',
        name: 'table',
        label: 'table',
        addLabel: '添加',
        columns: [
          {
            $formkit: 'el-switch',
            name: 'a',
            label: `a`,
            inlinePrompt: true,
            value: true,
            columnWidth: '100px',
          },
          {
            $formkit: 'el-input',
            name: 'b',
            label: `b`,
          },
          {
            $formkit: 'el-select',
            name: 'c',
            label: 'c',
            options: [
              { label: '1', value: '1' },
              { label: '2', value: '3' },
              { label: '3', value: '4' },
            ],
          },
        ],
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

    return { data, myForm, onSubmit, schema }
  },
})
</script>
```

:::

## Attributes

| 参数          | 说明             | 类型    | 可选值       | 默认值 |
| ------------- | ---------------- | ------- | ------------ | ------ |
| min           | 最小条数         | number  | —            | 0      |
| max           | 最大条数         | number  | —            | —      |
| actionWidth   | 操作宽度         | string  | —            | —      |
| upControl     | 上移             | boolean | true / false | false  |
| downControl   | 下移             | boolean | true / false | false  |
| insertControl | 插入             | boolean | true / false | false  |
| removeControl | 删除             | boolean | true / false | true   |
| controlAttrs  | 操作按钮属性     | object  | —            | {}     |
| addLabel      | 添加标题         | string  | —            | add    |
| addAttrs      | 添加按钮属性     | object  | —            | {}     |
| addButton     | 是否显示添加按钮 | boolean | true / false | true   |
| help          | 帮助信息         | string  | —            | —      |
| columns       | 列配置           | Array   | —            | —      |

## Column Attributes

| 参数        | 说明   | 类型   | 可选值 | 默认值 |
| ----------- | ------ | ------ | ------ | ------ |
| columnWidth | 列宽度 | string | —      | —      |
