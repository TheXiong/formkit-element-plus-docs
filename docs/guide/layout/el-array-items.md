# el-array-items

## 基础用法

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" v-model="data" @submit="onSubmit">
    <FormKit
      type="el-array-items"
      name="skills"
      label="技能列表"
      validation="required"
    >
      <FormKit
        type="el-input"
        name="name"
        label="技能名称"
        validation="required"
      />
      <FormKit
        type="el-rate"
        name="level"
        label="熟练度"
        show-score
        validation="required"
      />
      <FormKit
        type="el-input-number"
        name="years"
        label="使用年限"
        validation="required|number|min:0"
      />
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
    const data = ref({
      skills: [
        { name: 'JavaScript', level: 5, years: 5 },
        { name: 'Vue', level: 4, years: 3 },
      ],
    })
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

## Attributes

| 参数           | 说明               | 类型     | 可选值 | 默认值         |
| -------------- | ------------------ | -------- | ------ | -------------- |
| min            | 最小项数           | number   | —      | 0              |
| max            | 最大项数           | number   | —      | —              |
| showIndex      | 是否显示序号       | boolean  | —      | false          |
| insertControl  | 是否显示插入控制   | boolean  | —      | false          |
| removeControl  | 是否显示删除控制   | boolean  | —      | true           |
| addButton      | 是否显示添加按钮   | boolean  | —      | true           |
| controlAttrs   | 控制区域属性       | object   | —      | {}             |
| addLabel       | 添加按钮文字       | string   | —      | '添加'         |
| addAttrs       | 添加按钮属性       | object   | —      | {}             |
| help           | 帮助文本           | string   | —      | —              | 