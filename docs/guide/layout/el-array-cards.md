# el-array-cards

## 基础用法

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" v-model="data" @submit="onSubmit">
    <FormKit
      type="el-array-cards"
      name="contacts"
      label="联系人列表"
      validation="required"
    >
      <FormKit
        type="el-input"
        name="name"
        label="姓名"
        validation="required"
      />
      <FormKit
        type="el-input"
        name="phone"
        label="电话"
        validation="required"
      />
      <FormKit
        type="el-select"
        name="type"
        label="类型"
        validation="required"
        :options="options"
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
      contacts: [
        { name: '张三', phone: '13800138000', type: 'work' },
        { name: '李四', phone: '13900139000', type: 'home' },
      ],
    })
    const myForm = ref()
    
    const options = [
      { label: '工作', value: 'work' },
      { label: '家庭', value: 'home' },
      { label: '其他', value: 'other' },
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
<style>
.el-form-item .el-form-item {
    margin-bottom: 18px !important;
  }
</style>
```

:::

## 自定义卡片

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" v-model="data" @submit="onSubmit">
    <FormKit
      type="el-array-cards"
      name="contacts"
      label="联系人列表"
      validation="required"
      card-width="400px"
      :add-button-text="'添加联系人'"
    >
      <FormKit
        type="el-input"
        name="name"
        label="姓名"
        validation="required"
      />
      <FormKit
        type="el-input"
        name="phone"
        label="电话"
        validation="required"
      />
      <FormKit
        type="el-select"
        name="type"
        label="类型"
        validation="required"
        :options="options"
      />
      <template #card-header="{ index, item }">
        <div style="display: flex; justify-content: space-between; align-items: center">
          <span>联系人 #{{ index + 1 }}</span>
          <span v-if="item.type" class="el-tag el-tag--small" :class="getTagClass(item.type)">
            {{ getTypeName(item.type) }}
          </span>
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

export default defineComponent({
  name: 'InputDemo',
  setup() {
    const data = ref({
      contacts: [
        { name: '张三', phone: '13800138000', type: 'work' },
        { name: '李四', phone: '13900139000', type: 'home' },
      ],
    })
    const myForm = ref()
    
    const options = [
      { label: '工作', value: 'work' },
      { label: '家庭', value: 'home' },
      { label: '其他', value: 'other' },
    ]
    
    const getTagClass = (type) => {
      switch (type) {
        case 'work':
          return 'el-tag--success'
        case 'home':
          return 'el-tag--warning'
        case 'other':
          return 'el-tag--info'
        default:
          return ''
      }
    }
    
    const getTypeName = (type) => {
      switch (type) {
        case 'work':
          return '工作'
        case 'home':
          return '家庭'
        case 'other':
          return '其他'
        default:
          return ''
      }
    }

    const onSubmit = () => {
      console.log(data.value, 'submited')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    }

    return { data, myForm, onSubmit, options, getTagClass, getTypeName }
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

| 参数           | 说明               | 类型     | 可选值 | 默认值         |
| -------------- | ------------------ | -------- | ------ | -------------- |
| min            | 最小项数           | number   | —      | 0              |
| max            | 最大项数           | number   | —      | —              |
| controlAttrs   | 控制区域属性       | object   | —      | {}             |
| addLabel       | 添加按钮文字       | string   | —      | '添加'         |
| addAttrs       | 添加按钮属性       | object   | —      | {}             |
| addButton      | 是否显示添加按钮   | boolean  | —      | true           |
| help           | 帮助文本           | string   | —      | —              |

其它 El-Card 属性参考 [Element Plus Card Attributes](https://element-plus.org/zh-CN/component/card.html#card-attributes) 