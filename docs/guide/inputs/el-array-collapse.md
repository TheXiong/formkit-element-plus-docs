# el-array-collapse

## 基础用法

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" v-model="data" @submit="onSubmit">
    <FormKit
      type="el-array-collapse"
      name="sections"
      label="文档章节"
      validation="required"
    >
      <FormKit
        type="el-input"
        name="title"
        label="章节标题"
        validation="required"
      />
      <FormKit
        type="el-textarea"
        name="content"
        label="章节内容"
        validation="required"
      />
      <FormKit
        type="el-input-number"
        name="order"
        label="排序"
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
      sections: [
        { title: '章节一', content: '这是章节一的详细内容...', order: 1 },
        { title: '章节二', content: '这是章节二的详细内容...', order: 2 },
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

## 自定义折叠面板

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" v-model="data" @submit="onSubmit">
    <FormKit
      type="el-array-collapse"
      name="sections"
      label="文档章节"
      validation="required"
      :add-button-text="'添加章节'"
    >
      <FormKit
        type="el-input"
        name="title"
        label="章节标题"
        validation="required"
      />
      <FormKit
        type="el-textarea"
        name="content"
        label="章节内容"
        validation="required"
      />
      <FormKit
        type="el-input-number"
        name="order"
        label="排序"
        validation="required|number|min:0"
      />
      <template #panel-header="{ index, item }">
        <div style="display: flex; align-items: center">
          <el-icon><Document /></el-icon>
          <span style="margin-left: 5px">{{ item.title || `新章节 ${index + 1}` }}</span>
          <span style="margin-left: 10px; color: #999; font-size: 12px">
            (排序: {{ item.order || '未设置' }})
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
import { Document } from '@element-plus/icons-vue'

export default defineComponent({
  name: 'InputDemo',
  components: { Document },
  setup() {
    const data = ref({
      sections: [
        { title: '章节一', content: '这是章节一的详细内容...', order: 1 },
        { title: '章节二', content: '这是章节二的详细内容...', order: 2 },
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

| 参数           | 说明               | 类型     | 可选值 | 默认值         |
| -------------- | ------------------ | -------- | ------ | -------------- |
| min            | 最小项数           | number   | —      | 0              |
| max            | 最大项数           | number   | —      | —              |
| controlAttrs   | 控制区域属性       | object   | —      | {}             |
| addLabel       | 添加按钮文字       | string   | —      | '添加'         |
| addAttrs       | 添加按钮属性       | object   | —      | {}             |
| addButton      | 是否显示添加按钮   | boolean  | —      | true           |
| help           | 帮助文本           | string   | —      | —              |

其它 Collapse 属性参考 [Element Plus Collapse Attributes](https://element-plus.org/zh-CN/component/collapse.html#collapse-attributes) 