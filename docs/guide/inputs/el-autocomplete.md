# el-autocomplete

## 基础用法

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" v-model="data" @submit="onSubmit">
    <FormKit
      type="el-autocomplete"
      name="autocomplete"
      label="自动完成"
      validation="required"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
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
import { ref, defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'InputDemo',
  setup() {
    const data = ref()
    const myForm = ref()
    const restaurants = ref([])

    const createFilter = (queryString) => {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        )
      }
    }

    const loadAll = () => {
      return [
        { value: 'vue', link: 'https://github.com/vuejs/vue' },
        { value: 'element', link: 'https://github.com/ElemeFE/element' },
        { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
        { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
        { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
        { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
        { value: 'babel', link: 'https://github.com/babel/babel' },
      ]
    }

    const querySearch = (queryString, cb) => {
      const results = queryString
        ? restaurants.value.filter(createFilter(queryString))
        : restaurants.value
      // call callback function to return suggestions
      cb(results)
    }

    onMounted(() => {
      restaurants.value = loadAll()
    })

    const onSubmit = () => {
      console.log(data.value, 'submited')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    }

    return { data, myForm, onSubmit, querySearch }
  },
})
</script>
```

:::

## 自定义模板

:::demo

```vue
<template>
  <FormKit ref="myForm" type="el-form" v-model="data" @submit="onSubmit">
    <FormKit
      type="el-autocomplete"
      name="autocomplete"
      label="自动完成"
      validation="required"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
      value-key="link"
    >
      <template #default="{ item }">
        <div class="value">{{ item.value }}</div>
        <span class="link">{{ item.link }}</span>
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
import { ref, defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'InputDemo',
  setup() {
    const data = ref()
    const myForm = ref()
    const restaurants = ref([])

    const createFilter = (queryString) => {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        )
      }
    }

    const loadAll = () => {
      return [
        { value: 'vue', link: 'https://github.com/vuejs/vue' },
        { value: 'element', link: 'https://github.com/ElemeFE/element' },
        { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
        { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
        { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
        { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
        { value: 'babel', link: 'https://github.com/babel/babel' },
      ]
    }

    const querySearch = (queryString, cb) => {
      const results = queryString
        ? restaurants.value.filter(createFilter(queryString))
        : restaurants.value
      // call callback function to return suggestions
      cb(results)
    }

    onMounted(() => {
      restaurants.value = loadAll()
    })

    const onSubmit = () => {
      console.log(data.value, 'submited')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    }

    return { data, myForm, onSubmit, querySearch }
  },
})
</script>
```

:::

## Attributes

参考 [Element Plus Autocomplete Attributes](https://element-plus.org/zh-CN/component/autocomplete.html#autocomplete-attributes) 