---
title: DiffEditor 对比编辑器
description:
type: 0
group: null
menuName: DiffEditor 对比编辑器
icon:
order: 17
---

## 基本使用

```schema: scope="body"
{
    "type": "form",
    "api": "/api/mock2/form/saveForm",
    "body": [
        {
            "type": "diff-editor",
            "name": "diff",
            "label": "Diff-Editor",
            "diffValue": "hello world",
            "value": "hello"
        }
    ]
}
```

## 禁用编辑器

左侧编辑器始终不可编辑，右侧编辑器可以通过设置`disabled`或`disabledOn`，控制是否禁用

```schema: scope="body"
{
    "type": "form",
    "api": "/api/mock2/form/saveForm",
    "body": [
        {
            "type": "diff-editor",
            "name": "diff",
            "label": "Diff-Editor",
            "diffValue": "hello world",
            "value": "hello",
            "disabledOn": "this.isDisabled"
        },
        {
            "type": "switch",
            "name": "isDisabled",
            "label": "是否禁用"
        }
    ]
}
```

## diff 数据域中的两个变量

如下例，左侧编辑器中的值，通过`"diffValue": "${value1}"`获取，右侧编辑器的值，通过设置`"name": "value2"`，自动映射数据域中`value2`的值

```schema: scope="body"
{
    "type": "form",
    "api": "/api/mock2/form/saveForm",
    "data": {
        "value1": "hello world",
        "value2": "hello wrold"
    },
    "body": [
        {
            "type": "diff-editor",
            "name": "value2",
            "label": "Diff-Editor",
            "diffValue": "${value1}"
        }
    ]
}
```

## 属性表

除了支持 [普通表单项属性表](./formitem#%E5%B1%9E%E6%80%A7%E8%A1%A8) 中的配置以外，还支持下面一些配置

| 属性名    | 类型          | 默认值       | 说明                                                                                        |
| --------- | ------------- | ------------ | ------------------------------------------------------------------------------------------- |
| language  | `string`      | `javascript` | 编辑器高亮的语言，可选 [支持的语言](./editor#%E6%94%AF%E6%8C%81%E7%9A%84%E8%AF%AD%E8%A8%80) |
| diffValue | [Tpl](../tpl) |              | 左侧值                                                                                      |

## 事件表

| 事件名称 | 事件参数        | 说明     |
| -------- | --------------- | -------- |
| focus    | `value: string` | 获取焦点 |
| blur     | `value: string` | 失去焦点 |

## 动作表

| 动作名称 | 动作配置                                 | 说明                                                   |
| -------- | ---------------------------------------- | ------------------------------------------------------ |
| clear    | -                                        | 清空                                                   |
| reset    | -                                        | 将值重置为`resetValue`，若没有配置`resetValue`，则清空 |
| focus    | -                                        | 获取焦点，焦点落在右侧编辑面板                         |
| setValue | `value: string` 更新的右侧编辑面板中的值 | 更新数据                                               |
