# list 列表

用于处理数组类型数据结构。

## 基础用法

输入表单内容，观察数据变化

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

    <FormKit name="items" type="list">
      <FormKit type="el-input" v-for="i in 5" :name="`item${i}`" :label="`item${i}`" validation="required" />
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
