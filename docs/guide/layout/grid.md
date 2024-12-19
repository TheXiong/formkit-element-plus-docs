# 栅格

基于element plus的 row 和 col 组件进行布局

## 基础用法

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" v-model="data" @submit="onSubmit">
    <el-row>
      <el-col :span="12">
        <FormKit
          type="el-input"
          name="name"
          label="姓名"
          validation="required"
        />
      </el-col>
      <el-col :span="12">
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
      </el-col>
    </el-row>

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
        $cmp: 'el-row',
        children: [
          {
            $cmp: 'el-col',
            props: {
              span: 12,
            },
            children: [
              {
                $formkit: 'el-input',
                name: 'name',
                label: '姓名',
                validation: 'required',
              },
            ],
          },
          {
            $cmp: 'el-col',
            props: {
              span: 12,
            },
            children: [
              {
                $formkit: 'el-select',
                name: 'sex',
                label: '性别',
                options: [
                  // 设置下拉框选项
                  { value: '0', label: '女' },
                  { value: '1', label: '男' },
                ],
                validation: 'required',
              },
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
