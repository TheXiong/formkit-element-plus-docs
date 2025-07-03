# 验证

FormKit 通过允许你直接在输入项上声明验证规则，使前端验证变得简单。你可以使用内置的 20 多种生产级规则，也可以自定义规则。

## 声明规则

你可以通过 `validation` 属性为输入声明验证规则。支持两种语法：

### 字符串语法

用 `|` 分隔多个规则，部分规则可带参数（用 `:` 连接，多个参数用 `,` 分隔）：

```vue
<FormKit
  type="el-input"
  name="username"
  label="用户名"
  validation="required|length:5"
/>
```

### 数组语法

也可以用数组，每个元素是一个数组，第一个元素为规则名，后续为参数：

```js
validation=[
  ['required'],
  ['length', 5],
  ['matches', /^[a-zA-Z0-9]+$/]
]
```

## 显示错误

验证规则始终实时计算，但错误的"可见性"由 `validation-visibility` 属性控制：

| 可见性    | 描述                                  |
| --------- | ------------------------------------- |
| blur      | _(默认)_ 失去焦点后显示错误           |
| live      | 始终显示错误                          |
| dirty     | 用户修改输入值后显示错误              |
| submit    | 仅在尝试提交表单后显示错误            |

你可以在 form、group、list 级别通过 `config` 属性统一设置，也可单独覆盖。

## 自定义规则

你可以自定义验证规则：

```js
const monday = function (node) {
  return node.value === 'monday' || node.value === 'mon'
}
monday.blocking = false
monday.skipEmpty = false
monday.debounce = 20
monday.force = true

// 注册
createApp(App).use(plugin, defaultConfig({
  rules: { monday },
}))
```

使用：

```vue
<FormKit validation="required|monday" />
```

## 自定义消息

- 使用 `validation-label` 属性自定义字段名
- 使用 `validation-messages` 属性自定义规则消息
- 全局自定义消息可在插件注册时配置

```vue
<FormKit
  type="el-input"
  name="username"
  label="用户名"
  validation="required"
  validation-label="账号"
  :validation-messages="{ required: '请填写账号' }"
/>
```

全局自定义消息：

```js
createApp(App).use(plugin, defaultConfig({
  messages: {
    zh: {
      validation: {
        required({ name }) {
          return `请填写${name}字段。`
        }
      }
    }
  }
}))
```

如需更多详细用法和规则说明，请参考 [FormKit 官方验证文档](https://formkit.com/zh/essentials/validation)。

## 常用内置规则一览

| 规则名           | 说明                         | 示例                        |
|------------------|------------------------------|-----------------------------|
| required         | 必填                         | required                    |
| min              | 最小值/最小长度              | min:3                       |
| max              | 最大值/最大长度              | max:10                      |
| between          | 数值/长度在区间内            | between:1,10                |
| length           | 指定长度                     | length:5                    |
| email            | 邮箱格式                     | email                       |
| number           | 必须为数字                   | number                      |
| alpha            | 仅字母                       | alpha                       |
| alphanumeric     | 仅字母和数字                 | alphanumeric                |
| alpha-spaces     | 仅字母和空格                 | alpha-spaces                |
| url              | URL 格式                     | url                         |
| matches          | 正则匹配                     | matches:/^abc/              |
| starts_with      | 以指定内容开头               | starts_with:abc             |
| ends_with        | 以指定内容结尾               | ends_with:xyz               |
| contains         | 包含指定内容                 | contains:foo                |
| not              | 不等于指定值                 | not:bar                     |
| confirm          | 两个字段值一致               | confirm:password            |
| date_after       | 晚于指定日期                 | date_after:2023-01-01       |
| date_before      | 早于指定日期                 | date_before:2023-01-01      |
| date_between     | 日期在区间内                 | date_between:2023-01-01,2023-12-31 |
| date_format      | 日期格式                     | date_format:YYYY-MM-DD      |
| symbol           | 仅符号字符                   | symbol                      |
| uppercase        | 仅大写字母                   | uppercase                   |
| lowercase        | 仅小写字母                   | lowercase                   |
| contains_alpha   | 包含字母                     | contains_alpha              |
| contains_numeric | 包含数字                     | contains_numeric            |
| contains_symbol  | 包含符号                     | contains_symbol             |
| contains_uppercase | 包含大写字母               | contains_uppercase          |
| contains_lowercase | 包含小写字母               | contains_lowercase          |
| require_one      | 至少一个字段有值             | require_one:field1,field2   |

## 规则用法示例

### required
> 字段为必填项。
```vue
<FormKit type="el-input" name="username" validation="required" />
```

### min / max
> 限制最小/最大长度或数值。
```vue
<FormKit type="el-input" name="age" validation="min:18|max:99" />
```

### between
> 数值或长度在区间内。
```vue
<FormKit type="el-input" name="score" validation="between:60,100" />
```

### length
> 必须为指定长度。
```vue
<FormKit type="el-input" name="code" validation="length:6" />
```

### email
> 必须为邮箱格式。
```vue
<FormKit type="el-input" name="email" validation="email" />
```

### number
> 必须为数字。
```vue
<FormKit type="el-input" name="amount" validation="number" />
```

### alpha / alphanumeric / alpha-spaces
> 仅字母、字母数字、字母和空格。
```vue
<FormKit type="el-input" name="nickname" validation="alpha" />
<FormKit type="el-input" name="usercode" validation="alphanumeric" />
<FormKit type="el-input" name="fullname" validation="alpha-spaces" />
```

### url
> 必须为 URL 格式。
```vue
<FormKit type="el-input" name="website" validation="url" />
```

### matches
> 正则表达式匹配。
```vue
<FormKit type="el-input" name="custom" validation="matches:/^abc/" />
```

### confirm
> 两个字段值一致。
```vue
<FormKit type="password" name="password" validation="required" />
<FormKit type="password" name="confirm" validation="confirm:password" />
```

### date_after / date_before / date_between / date_format
> 日期相关规则。
```vue
<FormKit type="el-input" name="start" validation="date_after:2023-01-01" />
<FormKit type="el-input" name="end" validation="date_before:2024-01-01" />
<FormKit type="el-input" name="range" validation="date_between:2023-01-01,2023-12-31" />
<FormKit type="el-input" name="birthday" validation="date_format:YYYY-MM-DD" />
```

### contains_*
> 包含字母、数字、符号、大写、小写等。
```vue
<FormKit type="el-input" name="pwd" validation="contains_alpha|contains_numeric|contains_symbol" />
```

### not
> 不等于指定值。
```vue
<FormKit type="el-input" name="notfoo" validation="not:foo" />
```

### require_one
> 至少一个字段有值。
```vue
<FormKit type="el-input" name="phone" validation="require_one:email,phone" />
<FormKit type="el-input" name="email" validation="require_one:email,phone" />
```

---

如需所有规则的详细参数和行为说明，请参考 [FormKit 官方验证文档](https://formkit.com/zh/essentials/validation)。