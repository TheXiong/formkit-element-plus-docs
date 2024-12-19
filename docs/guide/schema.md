# schema

## schema基础

https://formkit.com/zh/essentials/schema

## 基础用法

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" label-position="top" v-model="data" @submit="onSubmit">
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
        $formkit: 'el-input',
        name: 'email',
        label: 'Email address',
        validation: 'required',
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

## 简单布局

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" label-position="top" v-model="data" @submit="onSubmit">
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
        $el: 'div',
        attrs: {
          style: 'display: flex;gap:24px;',
        },
        children: [
          {
            $el: 'div',
            attrs: {
              style: 'flex:1',
            },
            children: [
              {
                $formkit: 'el-input',
                name: 'a',
                label: 'a',
                validation: 'required',
              },
            ],
          },
          {
            $el: 'div',
            attrs: {
              style: 'flex:1',
            },
            children: [
              {
                $formkit: 'el-input',
                name: 'b',
                label: 'b',
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

## 根据其它节点的值计算动态属性

首先给“被访问节点”添加id属性，通过$get方法获取节点实例。

### 案例1

下面案例将“a”的值作为“b”的label。

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" label-position="top" v-model="data">
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
        $formkit: 'el-input',
        name: 'a',
        label: 'a',
        validation: 'required',
        id: 'a',
      },
      {
        $formkit: 'el-input',
        name: 'b',
        label: '$get(a).value',
        validation: 'required',
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

### 案例2

“b”的label为”b-“和”a“的值拼接。

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" label-position="top" v-model="data" @submit="onSubmit">
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
        $formkit: 'el-input',
        name: 'a',
        label: 'a',
        validation: 'required',
        id: 'a1',
      },
      {
        $formkit: 'el-input',
        name: 'b',
        label: '$: "b-" + $get(a1).value',
        validation: 'required',
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

### 案例3

”a“的值为”h“时，“b”的label为”hh“，否则为”b“。

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" label-position="top" v-model="data" @submit="onSubmit">
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
        $formkit: 'el-input',
        name: 'a',
        label: 'a',
        validation: 'required',
        id: 'a1',
      },
      {
        $formkit: 'el-input',
        name: 'b',
        label: {
          if: '$get(a1).value == h',
          then: 'hh',
          else: 'b',
        },
        validation: 'required',
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

## 根据其它节点的值控制显隐

### 案例1

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" label-position="top" v-model="data" @submit="onSubmit">
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
        $formkit: 'el-select',
        name: 'a',
        label: 'a',
        options: ['显示', '隐藏'],
        validation: 'required',
        id: 'a',
      },
      {
        $formkit: 'el-input',
        name: 'b',
        label: 'b',
        if: '$get(a).value === 显示',
        validation: 'required',
        key: 'b',
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

### 案例2

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" label-position="top" v-model="data" @submit="onSubmit">
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
        $formkit: 'el-select',
        name: 'a',
        label: 'a',
        options: ['显示b', '显示c和d'],
        validation: 'required',
        id: 'a',
      },
      {
        if: '$get(a).value === 显示b',
        then: {
          $formkit: 'el-input',
          name: 'b',
          label: 'b',
          validation: 'required',
          key: 'b',
        },
        else: [
          {
            $formkit: 'el-input',
            name: 'c',
            label: 'c',
            validation: 'required',
            key: 'c',
          },
          {
            $formkit: 'el-input',
            name: 'd',
            label: 'd',
            validation: 'required',
            key: 'd',
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
