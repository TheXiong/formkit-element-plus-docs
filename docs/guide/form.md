# form 表单

提供提交流程，以及提交过程的状态管理。

## 基础用法

基础的表单用法。

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" v-model="data" @Submit="onSubmit">
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

    <template #footer="{ disabled }">
      <FormKit type="submit" :disabled="disabled" />
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

## 自定义提交按钮

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" v-model="data" @Submit="onSubmit">
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

## 外部提交按钮

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" v-model="data" @Submit="onSubmit">
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

  <el-button
    :loading="isSubmiting"
    :disabled="isSubmiting"
    type="primary"
    @click="handleSubmit"
    >提交</el-button
  >
  <div>{{ data }}</div>
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'InputDemo',
  setup() {
    const data = ref()
    const myForm = ref()
    const isSubmiting = ref(false)

    const onSubmit = () => {
      console.log(data.value, 'submited')
      isSubmiting.value = true
      return new Promise((resolve) => {
        setTimeout(() => {
          isSubmiting.value = false
          resolve()
        }, 1000)
      })
    }

    const handleSubmit = () => {
      myForm.value.node.submit()
    }

    return { data, myForm, isSubmiting, onSubmit, handleSubmit }
  },
})
</script>
```

:::

## 对齐方式

根据你们的设计情况，来选择最佳的标签对齐方式。

:::demo

```vue
<template>
  <el-radio-group
    v-model="labelPosition"
    aria-label="label position"
    style="margin-bottom:24px"
  >
    <el-radio-button value="left">Left</el-radio-button>
    <el-radio-button value="right">Right</el-radio-button>
    <el-radio-button value="top">Top</el-radio-button>
  </el-radio-group>
  <FormKit
    ref="myForm"
    type="el-form"
    :labelPosition="labelPosition"
    labelWidth="100px"
    v-model="data"
    @Submit="onSubmit"
  >
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

    <template #footer="{ disabled }">
      <FormKit type="submit" :disabled="disabled" />
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
    const labelPosition = ref('right')

    const onSubmit = () => {
      console.log(data.value, 'submited')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    }

    return { data, myForm, labelPosition, onSubmit }
  },
})
</script>
```

:::

## 尺寸控制

根据你们的设计情况，来选择最佳的标签对齐方式。

:::demo

```vue
<template>
  <el-radio-group
    v-model="size"
    aria-label="size control"
    style="margin-bottom:24px"
  >
    <el-radio-button value="large">large</el-radio-button>
    <el-radio-button value="default">default</el-radio-button>
    <el-radio-button value="small">small</el-radio-button>
  </el-radio-group>
  <FormKit
    ref="myForm"
    type="el-form"
    :size="size"
    v-model="data"
    @Submit="onSubmit"
  >
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

    <template #footer="{ disabled, node }">
      <el-button
        :loading="disabled"
        :disabled="disabled"
        type="primary"
        :size="size"
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
    const size = ref('default')

    const onSubmit = () => {
      console.log(data.value, 'submited')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    }

    return { data, myForm, size, onSubmit }
  },
})
</script>
```

:::
