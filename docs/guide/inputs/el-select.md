# el-select

## 基础用法

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" v-model="data" @submit="onSubmit">
    <FormKit
      type="el-select"
      name="select"
      label="选择器"
      validation="required"
      :options="options"
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

  <div>{{ data }}</div>
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'InputDemo',
  setup() {
    const data = ref()
    const myForm = ref()
    const options = [
      {
        value: 'Option1',
        label: '选项1',
      },
      {
        value: 'Option2',
        label: '选项2',
      },
      {
        value: 'Option3',
        label: '选项3',
      },
      {
        value: 'Option4',
        label: '选项4',
      },
      {
        value: 'Option5',
        label: '选项5',
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

    return { data, myForm, onSubmit, options }
  },
})
</script>
```

:::

## 多选模式

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" v-model="data" @submit="onSubmit">
    <FormKit
      type="el-select"
      name="select"
      label="多选选择器"
      validation="required"
      :options="options"
      multiple
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

  <div>{{ data }}</div>
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'InputDemo',
  setup() {
    const data = ref()
    const myForm = ref()
    const options = [
      {
        value: 'Option1',
        label: '选项1',
      },
      {
        value: 'Option2',
        label: '选项2',
      },
      {
        value: 'Option3',
        label: '选项3',
      },
      {
        value: 'Option4',
        label: '选项4',
      },
      {
        value: 'Option5',
        label: '选项5',
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

    return { data, myForm, onSubmit, options }
  },
})
</script>
```

:::

## 禁用选项

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" v-model="data" @submit="onSubmit">
    <FormKit
      type="el-select"
      name="select"
      label="禁用选项"
      validation="required"
      :options="options"
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

  <div>{{ data }}</div>
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'InputDemo',
  setup() {
    const data = ref()
    const myForm = ref()
    const options = [
      {
        value: 'Option1',
        label: '选项1',
      },
      {
        value: 'Option2',
        label: '选项2',
        disabled: true,
      },
      {
        value: 'Option3',
        label: '选项3',
      },
      {
        value: 'Option4',
        label: '选项4',
        disabled: true,
      },
      {
        value: 'Option5',
        label: '选项5',
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

    return { data, myForm, onSubmit, options }
  },
})
</script>
```

:::

## Attributes

参考 [Element Plus Select Attributes](https://element-plus.org/zh-CN/component/select.html#select-attributes) 