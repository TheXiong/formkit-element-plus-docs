# el-form

## 基础用法

:::demo

```vue
<template>
  <FormKit
    type="el-form"
    v-model="data"
    label-position="right"
    label-width="120px"
    @submit="onSubmit"
  >
    <FormKit
      type="el-input"
      name="name"
      label="姓名"
      validation="required"
      placeholder="请输入姓名"
    />
    
    <FormKit
      type="el-input"
      name="email"
      label="邮箱"
      validation="required|email"
      placeholder="请输入邮箱"
    />
    
    <FormKit
      type="el-select"
      name="region"
      label="地区"
      validation="required"
      :options="options"
    />

    <template #footer="{ disabled, node }">
      <div style="text-align: center; margin-top: 24px">
        <el-button @click="resetForm">重置</el-button>
        <el-button
          :loading="disabled"
          :disabled="disabled"
          type="primary"
          @click="node.submit"
          >提交</el-button
        >
      </div>
    </template>
  </FormKit>

  <div style="margin-top: 20px">表单数据: {{ data }}</div>
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'FormDemo',
  setup() {
    const data = ref({})
    
    const options = [
      {
        value: 'beijing',
        label: '北京',
      },
      {
        value: 'shanghai',
        label: '上海',
      },
      {
        value: 'guangzhou',
        label: '广州',
      },
    ]

    const onSubmit = () => {
      console.log(data.value, 'submitted')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    }
    
    const resetForm = () => {
      data.value = {}
    }

    return { data, options, onSubmit, resetForm }
  },
})
</script>
```

:::

## 行内表单

:::demo

```vue
<template>
  <FormKit
    type="el-form"
    v-model="data"
    inline
    @submit="onSubmit"
  >
    <FormKit
      type="el-input"
      name="name"
      label="姓名"
      validation="required"
      placeholder="请输入姓名"
    />
    
    <FormKit
      type="el-select"
      name="region"
      label="地区"
      validation="required"
      :options="options"
    />
    
    <FormKit
      type="el-date-picker"
      name="date"
      label="日期"
      validation="required"
    />

    <template #footer="{ disabled, node }">
      <el-button
        :loading="disabled"
        :disabled="disabled"
        type="primary"
        @click="node.submit"
        >查询</el-button
      >
    </template>
  </FormKit>

  <div style="margin-top: 20px">表单数据: {{ data }}</div>
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'FormDemo',
  setup() {
    const data = ref({})
    
    const options = [
      {
        value: 'beijing',
        label: '北京',
      },
      {
        value: 'shanghai',
        label: '上海',
      },
      {
        value: 'guangzhou',
        label: '广州',
      },
    ]

    const onSubmit = () => {
      console.log(data.value, 'submitted')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    }

    return { data, options, onSubmit }
  },
})
</script>
```

:::

## Attributes

参考 [Element Plus Form Attributes](https://element-plus.org/zh-CN/component/form.html#form-attributes) 