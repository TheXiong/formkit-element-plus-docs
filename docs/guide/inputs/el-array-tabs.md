# el-array-tabs

## 基础用法

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" v-model="data" @submit="onSubmit">
    <FormKit
      type="el-array-tabs"
      name="products"
      label="产品列表"
      validation="required"
      tab-position="top"
    >
      <FormKit
        type="el-input"
        name="name"
        label="产品名称"
        validation="required"
      />
      <FormKit
        type="el-input-number"
        name="price"
        label="价格"
        validation="required|number|min:0"
      />
      <FormKit
        type="el-textarea"
        name="description"
        label="描述"
        validation="required"
      />
      <FormKit
        type="el-input-number"
        name="stock"
        label="库存"
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
      products: [
        { name: '产品A', price: 100, description: '这是产品A的详细描述', stock: 200 },
        { name: '产品B', price: 200, description: '这是产品B的详细描述', stock: 300 },
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
<style>
.el-form-item .el-form-item {
    margin-bottom: 18px !important;
  }
</style>
```

:::

## 自定义标签页

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" v-model="data" @submit="onSubmit">
    <FormKit
      type="el-array-tabs"
      name="products"
      label="产品列表"
      validation="required"
      tab-position="left"
      :add-button-text="'添加产品'"
    >
      <FormKit
        type="el-input"
        name="name"
        label="产品名称"
        validation="required"
      />
      <FormKit
        type="el-input-number"
        name="price"
        label="价格"
        validation="required|number|min:0"
      />
      <FormKit
        type="el-textarea"
        name="description"
        label="描述"
        validation="required"
      />
      <FormKit
        type="el-input-number"
        name="stock"
        label="库存"
        validation="required|number|min:0"
      />
      <template #tab-label="{ index, item }">
        <div style="display: flex; align-items: center">
          <el-icon><Goods /></el-icon>
          <span style="margin-left: 5px">{{ item.name || `新产品 ${index + 1}` }}</span>
        </div>
      </template>
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
import { Goods } from '@element-plus/icons-vue'

export default defineComponent({
  name: 'InputDemo',
  components: { Goods },
  setup() {
    const data = ref({
      products: [
        { name: '产品A', price: 100, description: '这是产品A的详细描述', stock: 200 },
        { name: '产品B', price: 200, description: '这是产品B的详细描述', stock: 300 },
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
<style>
.el-form-item .el-form-item {
    margin-bottom: 18px !important;
  }
</style>
```

:::

## Attributes

| 参数           | 说明               | 类型     | 可选值                  | 默认值         |
| -------------- | ------------------ | -------- | ----------------------- | -------------- |
| min            | 最小项数           | number   | —                      | 0              |
| max            | 最大项数           | number   | —                      | —              |
| tabPosition    | 标签页位置         | string   | top/right/bottom/left  | 'top'          |
| type           | 标签类型           | string   | —                      | —              |
| stretch        | 是否自动拉伸       | boolean  | —                      | false          |
| closable       | 是否可关闭         | boolean  | —                      | false          |
| tabType        | 标签样式类型       | string   | card/border-card       | —              |
| showIndex      | 是否显示序号       | boolean  | —                      | false          |
| showCopy       | 是否显示复制按钮   | boolean  | —                      | false          |
| showRemove     | 是否显示删除按钮   | boolean  | —                      | true           |
| showAdd        | 是否显示添加按钮   | boolean  | —                      | true           |
| addLabel       | 添加按钮文字       | string   | —                      | '添加'         |
| addAttrs       | 添加按钮属性       | object   | —                      | {}             |
| help           | 帮助文本           | string   | —                      | —              |

其它 Tabs 属性参考 [Element Plus Tabs Attributes](https://element-plus.org/zh-CN/component/tabs.html#tabs-attributes) 