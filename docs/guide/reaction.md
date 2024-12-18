# 联动

监听一个或多个字段的数据变化去控制另一个或者多个字段的状态

## 基础用法

监听“控制者”的值，控制“受控者”的显示隐藏
:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" v-model="data" @Submit="onSubmit">
    <FormKit
        type="el-select"
        name="select"
        label="控制者"
        :value="false"
        :options="[
            { value: true, label: '显示' },
            { value: false, label: '隐藏' },
        ]"
        validation="required"
    />
    <FormKit type="el-input" v-if="display" name="input" label="受控者" validation="required" />

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
import { ref, defineComponent, watch } from 'vue'

export default defineComponent({
  name: 'InputDemo',
  setup() {
    const data = ref()
    const myForm = ref()
    const display = ref(true)

    watch(()=>data.value?.select,()=>{
        display.value = data.value.select
    })

    const onSubmit = () => {
      console.log(data.value, 'submited')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    }

    return { data, myForm, onSubmit, display }
  },
})
</script>
```

:::
