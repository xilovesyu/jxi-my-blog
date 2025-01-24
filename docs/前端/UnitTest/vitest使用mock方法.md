## Vitest 使用mock 方法

和 jest 类似的是，我们可以用vi.fn 来mock 函数，也可以用 vi.fn().mockXXX 来模拟返回值。

## 区别1

我们有时候会经常mock一个module, 但是要保留原来module里面的东西

jest 的写法是

```js
jest.mock('moduleA', () => {
    return {
        ...jest.requireActual('moduleA'),
        functionA: jest.fn()
    }
})
```

而在vi中，我们的写法是

```js
vi.mock('moduleA', async importOriginal => {
    return {
        ...(await importOriginal()),
        functionA: jest.fn()
    }
})
```

## 区别2

当我们要把mock 的函数放在顶部时，例如在上面例子，我们想把functionA的mock放在外面，在vi中我们需要用 vi.hoisted, 不然得话会报错 `vi Cannot access 'xxx' before initialization`

```js

const {mockFunctionA} = vi.hoisted(() => {
    return {
        mockFunctionA: vi.fn()
    }
})

vi.mock('moduleA', async importOriginal => {
    return {
        ...(await importOriginal()),
        functionA: mockFunctionA
    }
})
```

