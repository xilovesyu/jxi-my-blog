---
description: Markdown 基础语法
---

## **标题语法**

标题语法利用#来表示， #数量标题的级别，#表示大标题，也就是html中的`<h1>`, ##表示二级标题，也就是html中的`<h2>`。标题级别最多6级 。

注意在 #号后面加空格之后 再添加标题内容 如 `## 二级标题`

<hr/>

## **段落语法**

段落语法就是用空行分割开内容

<hr/>

## **换行语法**

在一行的末尾添加两个或多个空格，然后按回车键,即可创建一个换行(`<br>`)。但这是有争议的，因为很难在编辑器中直接看到空格，并且很多人在每个句子后面都会有意或无意地添加两个空格。由于这个原因，你可能要使用除结尾空格以外的其它方式来换行。

几乎每个 Markdown 应用程序都支持另一种换行方式：HTML 的 `<br>`标签。所以推荐使用这两种。

<hr/>

## **分割线语法**
分割线可以用三个星号，减号，或者 下划线组成

例子

****
---

---

## **强调语法**

强调语法 通过将文本设置为粗体或斜体来强调其重要性。****

粗体 通过**文字**来实现粗体 **粗体文字**

斜体 通过*文字* 实现斜体

粗体和斜体一起 通过 ***粗体和斜体*** 实现

<hr/>

## **引用语法**

利用> 来表示引用 

- 鲁迅说过xxx

<hr/>

## **列表语法**

可以将多个条目组织成有序或无序列表。
 
### **有序列表**

利用数字加英文点来表示有序列表。例如 1.

例子：

1. 第一点
2. 第二点

### **无序列表**

利用减号表示无序列表。例如 - 无序列表 

例子：

- item1
- item2
    
    - item 2.1

- item3

### **列表项中嵌套其他元素**

要在保留列表连续性的同时在列表中添加另一种元素，请将该元素缩进四个空格或一个制表符，如下例所示：

1. 第一点
2. 第二点

    第二点补充说明如下：
    
    > 鲁迅说过
3. 第三点

<hr/>

## **代码语法**

代码行可以用反引号来包裹内容实现。如果代码行里已经有反引号，那么用双反引号包裹内容。

例子

`代码行`

代码块 可以用三个 反引号来表示

```typescript
const a: string = '123'
```

---

## **链接语法**

链接文本放在中括号内，链接地址放在后面的括号中，链接title可选。

超链接Markdown语法代码：`[超链接显示名](超链接地址 "超链接title")`

例子：


[github官方网址](https://github.com "这是github官方网站")

### 网址和Email地址

使用尖括号可以很方便地把URL或者email地址变成可点击的链接。

```
<https://markdown.com.cn>
<fake@example.com>
```

---

## **图片语法**

要添加图像，请使用感叹号 (!), 然后在方括号增加替代文本，图片链接放在圆括号里，括号里的链接后可以增加一个可选的图片标题文本。

插入图片Markdown语法代码：

```
![图片alt](图片链接 "图片title")
```

例子：

![军大衣](./testPic.png "军大衣照片")


---

## **表格语法**

要添加表，请使用三个或多个连字符（---）创建每列的标题，并使用管道（|）分隔每列。您可以选择在表的任一端添加管道。

例子：


```
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |
```


| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |


### **对齐方式**

您可以通过在标题行中的连字符的左侧，右侧或两侧添加冒号（:），将列中的文本对齐到左侧，右侧或中心。

例子：

| Syntax On Test     | Description On Test | Comments On Test |
| :--- | :---: | ---: |
| Header      | centerAlign     | rightAlign |
| Paragraph   | centerAlign     | rightAlign |