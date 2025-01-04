# Collapse

## Introduction

The `Collapse` component is used to create collapsible content panels. It allows users to toggle the visibility of sections of content.

## Basic Usage

To use the `Collapse` component, you need to import it and define the collapsible panels.

:::demo

```vue
<template>
    <el-collapse v-model="activeNames">
        <el-collapse-item title="Title 1" name="1">
            <div>Content 1</div>
        </el-collapse-item>
        <!-- <el-collapse-item title="Title 2" name="2">
            <div>Content 2</div>
        </el-collapse-item> -->
    </el-collapse>
</template>

<script>
export default {
    data() {
        return {
            activeNames: ['1']
        };
    }
};
</script>
```

## Accordion Mode

The `Collapse` component can also be used in accordion mode, where only one panel can be expanded at a time.

```vue
<template>
    <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="Title 1" name="1">
            <div>Content 1</div>
        </el-collapse-item>
        <el-collapse-item title="Title 2" name="2">
            <div>Content 2</div>
        </el-collapse-item>
    </el-collapse>
</template>

<script>
export default {
    data() {
        return {
            activeName: '1'
        };
    }
};
</script>
```

## Customizing

You can customize the appearance and behavior of the `Collapse` component using various props and slots.

### Props

- `value / v-model`: Binding value, type: `string | array`, default: `[]`
- `accordion`: Whether to activate accordion mode, type: `boolean`, default: `false`

### Slots

- `title`: Custom content for the panel title

## Conclusion

The `Collapse` component is a versatile tool for managing the visibility of content sections. By using its various props and slots, you can create a customized and interactive user experience.