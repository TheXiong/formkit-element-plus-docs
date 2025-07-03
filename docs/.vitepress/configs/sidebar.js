export default {
  '/api/': getApiSidebar(),
  '/components/': getComponentsSidebar(),
  '/guide/': getGuideSidebar()
}

function getApiSidebar() {
  return [
    {
      text: '功能',
      collapsible: true,
      items: [
        {
          text: '已实现',
          link: '/api/'
        },
      ]
    }
  ]
}

function getComponentsSidebar() {
  return [
    {
      text: '组件',
      items: [
        {
          text: 'Input 输入框',
          link: '/components/input'
        },
        {
          text: 'Tabs 标签页',
          link: '/components/tabs'
        },
        {
          text: 'Modal 对话框',
          link: '/components/modal'
        },
        {
          text: 'Tag 标签',
          link: '/components/tag'
        },
        {
          text: 'Vue 引用组件',
          link: '/components/vue'
        },
        {
          text: 'Vue Script',
          link: '/components/vue-script'
        }
      ]
    }
  ]
}

function getGuideSidebar() {
  return [
    {
      text: '介绍',
      // collapsed: true,
      items: [
        {
          text: '快速上手',
          link: '/guide/',
        },
        {
          text: 'Formkit组件',
          link: '/guide/formkitComponent',
        },
      ]
    },
    {
      text: '基础',
      // collapsed: true,
      items: [
        {
          text: '表单',         
          link: '/guide/form',
        },
        {
          text: '分组',
          link: '/guide/group',
        },
        {
          text: '列表',
          link: '/guide/list',
        },
        {
          text: '校验',
          link: '/guide/validation',
        },
        {
          text: '数据源',
          link: '/guide/datasource',
        },
        {
          text: '联动',
          link: '/guide/reaction',
        },
        {
          text: 'schema',
          link: '/guide/schema',
        },
      ]
    },
    {
      text: '布局',
      // collapsed: true,
      items: [
        {
          text: '栅格',
          link: '/guide/layout/grid',
        },
        {
          text: 'el-array-table',
          link: '/guide/layout/el-array-table',
        },
        {
          text: 'el-array-cards',
          link: '/guide/layout/el-array-cards',
        },
        {
          text: 'el-array-collapse',
          link: '/guide/layout/el-array-collapse',
        },
        {
          text: 'el-array-items',
          link: '/guide/layout/el-array-items',
        },
        {
          text: 'el-array-tabs',
          link: '/guide/layout/el-array-tabs',
        },
      ]
    },
    {
      text: '输入',
      // collapsed: true,
      items: [
        {
          text: 'el-cascader',
          link: '/guide/inputs/el-cascader',
        },
        {
          text: 'el-rate',
          link: '/guide/inputs/el-rate',
        },
        {
          text: 'el-select',
          link: '/guide/inputs/el-select',
        },
        {
          text: 'el-autocomplete',
          link: '/guide/inputs/el-autocomplete',
        },
        {
          text: 'el-upload',
          link: '/guide/inputs/upload',
        },
        {
          text: 'el-tree-select',
          link: '/guide/inputs/el-tree-select',
        },
        {
          text: 'el-checkbox',
          link: '/guide/inputs/el-checkbox',
        },
        {
          text: 'el-radio-group',
          link: '/guide/inputs/el-radio-group',
        },
        {
          text: 'el-slider',
          link: '/guide/inputs/el-slider',
        },
        {
          text: 'el-textarea',
          link: '/guide/inputs/el-textarea',
        },
        {
          text: 'el-time-select',
          link: '/guide/inputs/el-time-select',
        },
        {
          text: 'el-time-picker',
          link: '/guide/inputs/el-time-picker',
        },
        {
          text: 'el-date-picker',
          link: '/guide/inputs/el-date-picker',
        },
        {
          text: 'el-date-range-picker',
          link: '/guide/inputs/el-date-range-picker',
        },
        {
          text: 'el-transfer',
          link: '/guide/inputs/el-transfer',
        },
        {
          text: 'el-checkbox-group',
          link: '/guide/inputs/el-checkbox-group',
        },
        {
          text: 'el-tree',
          link: '/guide/inputs/el-tree',
        }
      ]
    }
  ]
}

