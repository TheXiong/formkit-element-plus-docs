# group 分组

用于处理对象类型数据结构，form本质也是group类型。

## 基础用法

输入表单内容，观察数据变化

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" v-model="data" @Submit="onSubmit">
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
    <div style="border:1px solid #ccc;padding:18px 18px 0 18px;margin-bottom: 18px">

      <FormKit name="child" type="group">
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
      </FormKit>
    </div>

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
