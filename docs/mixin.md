> stylus 配置中全局引入，简写样式过程，常见的样式属性设置，如宽度常与高度通常同时被设置，背景颜色及文字颜色等。以减少编码量，加快工作效率。

## 使用方式

如 vue-cli@3 配置示例，在 stylus-loader 中配置 import 做到全局引入

```javascript
//vue.config.js
modules.export={
  ...
  css: {
    // 配置css模块
    loaderOptions: {
      // 向预处理器 Loader 传递配置选项
      stylus: {
        import: [
          "@yoz/stylus-shortcut/src/mixin.styl"
        ]
      }
    }
  }
  ...
}
```

## 布局

- **l-wh(width, height, round)**

  > 设置宽高

  | 入参名 | 值格式 | 是否可空 | 默认值 |
  | :----- | :----- | :------- | :----- |
  | width  | unit   | 否       |        |
  | height | unit   | 是       | width  |
  | radius | unit   | 是       | 0      |

  Example:

  ```stylus
  .style {
    l-wh: 50px 30px 10px;
  }
  ```

  Result:

  ```css
  .style {
    width: 50px;
    height: 30px;
    border-radius: 10px;
  }
  ```

- **l-mh(left, right)**

  > 设置水平外间距

  入参，示例同下

- **l-ph(left, right)**

  > 设置垂直内间距

  | 入参名 | 值格式 | 是否可空 | 默认值    |
  | :----- | :----- | :------- | :-------- |
  | left   | unit   | 否       |           |
  | right  | unit   | 是       | 入参 left |

  Example:

  ```stylus
  .style {
    l-mh: 50px 0;
    l-ph: 50px 0;
  }
  .style1 {
    l-mh: 50px;
    l-ph: 50px;
  }
  ```

  Result:

  ```css
  .style {
    margin-left: 50px;
    margin-right: 0;

    padding-left: 50px;
    padding-right: 0;
  }
  .style1 {
    margin-left: 50px;
    margin-right: 50px;

    padding-left: 50px;
    padding-right: 0;
  }
  ```

- **l-mv(left, right)**

  > 设置垂直外间距

  入参，示例同下

- **l-pv(top, bottom)**

  > 设置垂直内间距

  | 入参名 | 值格式 | 是否可空 | 默认值   |
  | :----- | :----- | :------- | :------- |
  | top    | unit   | 否       |          |
  | bottom | unit   | 是       | 入参 top |

  Example:

  ```stylus
  .style {
    l-mv: 50px 0;
    l-pv: 50px 0;
  }
  .style1 {
    l-mv: 50px;
    l-pv: 50px;
  }
  ```

  Result:

  ```css
  .style {
    margin-top: 50px;
    margin-bottom: 0;

    padding-top: 50px;
    padding-bottom: 0;
  }
  .style1 {
    margin-top: 50px;
    margin-bottom: 50px;

    padding-top: 50px;
    padding-bottom: 50px;
  }
  ```

- **l-abs(left, top, rtl)**

  > 快速设置绝对定位

  入参，示例同下

- **l-fix(left, top, rtl)**

  > 快速设置固定定位

  入参，示例同下

- **l-rel(left, top, rtl)**

  > 快速设置相对定位

  通常定位会皆由 `x`,`y` 两个值完成元素在视图中的定位，故增加第三个值 `dir` 完成相对于矩形中四个角的 `x` 与 `y` 。

  | 入参名 | 值格式         | 是否可空 | 默认值 |
  | :----- | :------------- | :------- | :----- |
  | x      | unit           | 是       | auto   |
  | y      | unit           | 是       | auto   |
  | dir    | lt\|rt\|lb\|rb | 是       | lt     |

  Example:

  ```stylus
  .style {
    l-abs: 50px 0 'rb';
  }
  .style1 {
    l-rel: 50px 0 'lb';
  }
  .style2 {
    l-fix: 50px 50px
  }
  ```

  Result:

  ```css
  .style {
    position: absolute;
    right: 50px;
    bottom: 0;
  }
  .style1 {
    position: relative;
    left: 50px;
    bottom: 0;
  }
  .style2 {
    position: fixed;
    left: 50px;
    top: 50px;
  }
  ```

## 文本

- **t-fl(size, lineHeight, align)**

  > 快速设置以下属性 font-size, line-height, color

  | 入参名     | 值格式 | 是否可空 | 默认值    |
  | :--------- | :----- | :------- | :-------- |
  | size       | unit   | 否       |           |
  | lineHeight | unit   | 是       | 入参 size |
  | color      | rgba   | 是       |           |

  Example:

  ```stylus
  .style {
    t-fl: 50px;
  }
  .style1 {
    t-fl: 50px 60px #333;
  }
  ```

  Result:

  ```css
  .style {
    font-size: 50px;
    line-height: 50px;
  }
  .style1 {
    font-size: 50px;
    line-height: 60px;
    color: #333;
  }
  ```

- **t-clamp(lineNum)**

  > 设置超出省略, lineNum 为 2 后需注意兼容情况。

  | 入参名  | 值格式 | 是否可空 | 默认值 |
  | :------ | :----- | :------- | :----- |
  | lineNum | number | 否       |        |

  Example:

  ```stylus
  .style {
    t-clamp: 1;
  }
  .style1 {
    t-clamp: 3;
  }
  ```

  Result:

  ```css
  .style {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .style1 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
  }
  ```

## 样式

- **s-bg(bg, size, position, repeat)**
  > 快捷设置 background

| 入参名   | 值格式                     | 是否可空 | 默认值    |
| :------- | :------------------------- | :------- | :-------- |
| bg       | 等同于 background          | 否       |           |
| size     | 等同于 background-size     | 是       | cover     |
| position | 等同于 background-position | 是       | center    |
| repeat   | 等同于 background-repaeat  | 是       | no-repeat |

Example:

```stylus
.style {
  s-bg: #f2f2f2;
}
.style1 {
  s-bcb: url('image_path');
}
```

Result:

```css
.style {
  background: #f2f2f2;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.style1 {
  background: url("image_path");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
```

## 动画

- **a-eff(name, duration, delay)**

  > 快捷设置动效的 name,duration 和 delay

  | 入参名   | 值格式    | 是否可空 | 默认值 |
  | :------- | :-------- | :------- | :----- |
  | name     | string    | 否       |        |
  | duration | time unit | 否       |        |
  | delay    | time unit | 是       | 0s     |

  示例同下

- **a-loop(count)**

  > 快捷设置动画的播放次数及结束后是否逆向播放

  | 入参名    | 值格式  | 是否可空 | 默认值   |
  | :-------- | :------ | :------- | :------- |
  | count     | string  | 是       | infinite |
  | alternate | boolean | 是       | false    |

  Example:

  ```stylus
  .style {
    a-eff: fade 1s .5s;
    a-loop: 2 true;
  }
  ```

  Result:

  ```css
  .style {
    animation-name: fade;
    animation-duration: 1s;
    animation-delay: 0.5s;

    animation-iteration-count: 2;
    animation-direction: alternate;
  }
  ```
