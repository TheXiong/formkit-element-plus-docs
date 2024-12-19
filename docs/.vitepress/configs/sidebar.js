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
      items: [
        {
          text: '栅格',
          link: '/guide/layout/grid',
        },
        {
          text: '表格',
          link: '/guide/layout/table',
        },
      ]
    }
  ]
}

