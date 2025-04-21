# el-checkbox-group

## 基础用法

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" v-model="data" @submit="onSubmit">
    <FormKit
      type="el-checkbox-group"
      name="checkboxGroup"
      label="复选框组"
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
        label: '选项A',
        value: 'A',
      },
      {
        label: '选项B',
        value: 'B',
      },
      {
        label: '选项C',
        value: 'C',
      },
      {
        label: '禁用选项',
        value: 'D',
        disabled: true,
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

## 按钮样式

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" v-model="data" @submit="onSubmit">
    <FormKit
      type="el-checkbox-group"
      name="checkboxGroup"
      label="复选框组"
      validation="required"
      :options="options"
      button-style
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
        label: '选项A',
        value: 'A',
      },
      {
        label: '选项B',
        value: 'B',
      },
      {
        label: '选项C',
        value: 'C',
      },
      {
        label: '禁用选项',
        value: 'D',
        disabled: true,
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

## 尺寸控制

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" v-model="data" @submit="onSubmit">
    <FormKit
      type="el-checkbox-group"
      name="checkboxGroup"
      label="小尺寸"
      validation="required"
      :options="options"
      button-style
      size="small"
    />
    
    <FormKit
      type="el-checkbox-group"
      name="checkboxGroup2"
      label="默认尺寸"
      validation="required"
      :options="options"
      button-style
    />
    
    <FormKit
      type="el-checkbox-group"
      name="checkboxGroup3"
      label="大尺寸"
      validation="required"
      :options="options"
      button-style
      size="large"
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
        label: '选项A',
        value: 'A',
      },
      {
        label: '选项B',
        value: 'B',
      },
      {
        label: '选项C',
        value: 'C',
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

参考 [Element Plus CheckboxGroup Attributes](https://element-plus.org/zh-CN/component/checkbox.html#checkbox-group-attributes) 