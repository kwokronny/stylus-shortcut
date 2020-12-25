### 使用方式

```stylus
@import "~@yoz/stylus-shortcut/src/shortcut.styl"
```

### 自定义变量

在 `shortcut.styl` 文件前引用

```stylus
@import "your-variable-file.styl" //如有自定义情况时可引入自定义变量
@import "~@yoz/stylus-shortcut/src/shortcut.styl"
```

亦可在 `stylusOptions` 配置中全局引用
如: vue-cli@3 配置示例

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
          "your-custom-file.styl"
        ]
      }
    }
  }
  ...
}
```

自定义变量文件 `your-custom-file.styl`

> 变量成员可按规则自由设置，自定义变量将盖默认值

```stylus

// 默认常用颜色，
yoz_color = {
  primary: #1890ff,
  link: #1890ff,
  success: #52c41a,
  warning: #faad14,
  error: #f5222d,
  heading: rgba(black, 0.85),
  text: rgba(black, 0.65),
  sub_text: rgba(black, 0.45),
  disabled: #c5c8ce,
  border: #e8eaec
};
// 常用字体
yoz_font_family = {
  sans: unquote('-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'),
  serif: unquote('Noto Serif SC')
};
// 常用字体大小
yoz_font_size = {
  s: 12px 20px,
  m: 14px 24px,
  l: 18px 30px
};
// 常用间距大小
yoz_spacing = {
  '5': 5px,
  '10': 10px,
  '20': 20px,
  '30': 30px
};
```

- ### 文本

  - **字体**

    > 根据变量`yoz_font_family`中成员生成，默认值查看 `常用样式规则 > 自定义变量`

    - `text-f_${key}`

    如：

    ```stylus
      .text-f_sans{
        font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
      }

      .text-f_serif{
        font-family:Noto Serif SC;
      }
    ```

  - **颜色**

    > 根据变量`yoz_color`中成员生成，默认值查看 `常用样式规则 > 自定义变量`

    - `text-c_${key}`

    如：

    ```stylus
      .text-c_primary{
        color: #1890ff
      }

      .text-s_success{
        color: #52c41a
      }
      ...
    ```

  - **大小**

    > 根据变量`yoz_font_size`中成员生成，默认值查看 `常用样式规则 > 自定义变量`

    - `text-fl_${key}`

    如：

    ```stylus
      .text-fl_s {
        font-size: 12px;
        line-height: 20px;
      }
      .text-fl_m {
        font-size: 14px;
        line-height: 24px;
      }
      .text-fl_l {
        font-size: 18px;
        line-height: 30px;
      }
    ```

- ### 背景

  - **颜色**

    > 根据变量`yoz_color`中成员生成，默认值查看 `常用样式规则 > 自定义变量`

    - `bg-c_${key}`

    如：

    ```stylus
      .bg-c_primary{
        background-color: #1890ff
      }

      .bg-c_success{
        background-color: #52c41a
      }
      ...
    ```

- ### 边框

  - **颜色**

    > 根据变量`yoz_color`中成员生成，默认值查看 `常用样式规则 > 自定义变量`

    - `border-c_${key}`

    如：

    ```stylus
      .border-c_primary{
        border:1px solid #1890ff
      }

      .border-c_success{
        border:1px solid #52c41a
      }
      ...
    ```

  - **排列**
    - `text-a_l` 文本居左
    - `text-a_c` 文本居中
    - `text-a_r` 文本居右
    - `text-a_j` 文本平整

- ### 间距

  > 根据变量`yoz_spacing`中成员生成，默认值查看 `常用样式规则 > 自定义变量`

  - `spac-mv_${key}` 外间距 - 上下
  - `spac-mh_${key}` 外间距 - 左右
  - `spac-ml_${key}` 外间距 - 左
  - `spac-mr_${key}` 外间距 - 右
  - `spac-mt_${key}` 外间距 - 上
  - `spac-mb_${key}` 外间距 - 下
  - `spac-pv_${key}` 内间距 - 上下
  - `spac-ph_${key}` 内间距 - 左右
  - `spac-pl_${key}` 内间距 - 左
  - `spac-pr_${key}` 内间距 - 右
  - `spac-pt_${key}` 内间距 - 上
  - `spac-pb_${key}` 内间距 - 下

  如：

  ```stylus
    .spac-mv_10{
      margin-top:10px;
      margin-bottom:10px;
    }

    .spac-ph_10{
      padding-top:10px;
      padding-bottom:10px;
    }
    ...
  ```

- ### 浮动
  - `float-l` 左浮动
  - `float-r` 右浮动
  - `clearfix` 清除浮动
