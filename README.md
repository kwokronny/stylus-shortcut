# stylus 快捷方式
## 安装
  ```bash
  cnpm install @yoz/stylus-shortcut
  //测试
  npm run test 
  ```
## TODO
[ ] 增加阴影创建函数
[ ] 增加渐变创建函数
[ ] 增加响应式栅格化布局
[ ] 增加FLEX布局
[ ] 增加伪类创建函数

## 常用样式规则
 根据设计规范变量化后生成常用的字体大小及颜色相关样式规则的生成
  ### 使用方式
  ```stylus
  @import "~@yoz/stylus-shortcut/src/shortcut.styl"
  ```
  ### 自定义变量
  在 `shortcut.styl` 文件前引用
  ```stylus
  @import "your-theme-file.styl" //如有自定义情况时可引入自定义变量
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
            "@yoz/stylus-shortcut/src/mixin.styl"
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
    s: 12px,
    m: 14px,
    l: 18px
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
    - #### 字体
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
    - #### 颜色
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
    - #### 大小
      > 根据变量`yoz_font_size`中成员生成，默认值查看 `常用样式规则 > 自定义变量`
      - `text-s_${key}`
      
      如：
      ```stylus
        .text-s_s{
          font-size:12px;
        }

        .text-s_m{
          font-size:14px;
        }

        .text-s_l{
          font-size:18px;
        }
      ```
  - ### 背景
    - #### 颜色
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
    - #### 颜色
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
    - #### 排列
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

## 内置快捷函数
stylus配置中全局引入，主要简写在编写样式过程中，常见的样式属性依赖，如宽度常与高度同时被设置，背景颜色及文字颜色等。以减少编码量，加快工作效率。

如 vue-cli@3 配置示例
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
- ### 布局
  - #### l-wh(width, height, round)
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
      border-radius: 10px
    }
    ```

  - #### l-mh(left, right)
    > 设置水平外间距

    入参，示例同下
  - #### l-ph(left, right)
    > 设置垂直内间距

    | 入参名 | 值格式 | 是否可空 | 默认值   |
    | :----- | :----- | :------- | :------- |
    | left   | unit   | 否       |          |
    | right  | unit   | 是       | 入参left |

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


  - #### l-mv(left, right)
    > 设置垂直外间距

    入参，示例同下
  - #### l-pv(top, bottom)
    > 设置垂直内间距

    | 入参名 | 值格式 | 是否可空 | 默认值  |
    | :----- | :----- | :------- | :------ |
    | top    | unit   | 否       |         |
    | bottom | unit   | 是       | 入参top |

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

  - #### l-abso(left, top, rtl)
    > 快速设置绝对定位

    入参，示例同下
  - #### l-fixed(left, top, rtl)
    > 快速设置固定定位

    入参，示例同下
  - #### l-rela(left, top, rtl)
    > 快速设置相对定位

    | 入参名 | 值格式  | 是否可空 | 默认值 |
    | :----- | :------ | :------- | :----- |
    | left   | unit    | 是       |        |
    | top    | unit    | 是       |        |
    | rtl    | boolean | 是       | false  |

    Example:
    ```stylus
    .style {
      pos-abso: 50px 0 true;
    }
    .style1 {
      pos-rela: 50px 0;
    }
    .style2 {
      pos-fixed 50px 50px
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
      top: 0;
    }
    .style2 {
      position: fixed;
      left: auto;
      top: auto;
      right: auto;
      bottom: auto;
    }
    ```

- ### 文本
  - #### t-fl(size, lineHeight, align)
    > 快速设置以下属性 font-size, line-height, text-align

    | 入参名     | 值格式                  | 是否可空 | 默认值   |
    | :--------- | :---------------------- | :------- | :------- |
    | size       | unit                    | 否       |          |
    | lineHeight | unit                    | 是       | 入参size |
    | align      | left \| center \| right | 是       | left     |

    Example:
    ```stylus
    .style {
      t-fl: 50px;
    }
    .style1 {
      t-fl: 50px 60px center;
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
      text-align:center
    }
    ```
    
  - #### t-clamp(lineNum)
    > 设置超出省略

    | 入参名  | 值格式 | 是否可空 | 默认值 |
    | :------ | :----- | :------- | :----- |
    | lineNum | number | 否       |        |

    Example:
    ```stylus
    .style {
      t-clamp: 1;
    }
    .style1 {
      text-clamp: 3;
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

- ### 样式

    - #### s-bcb(bg, color, borderColor)
    > 快捷设置background,color和border(1px solid borderColor)

    | 入参名      | 值格式     | 是否可空 | 默认值 |
    | :---------- | :--------- | :------- | :----- |
    | lineNum     | hex \| url | 否       |        |
    | color       | hex        | 是       | 无     |
    | borderColor | hex        | 是       | 无     |

    Example:
    ```stylus
    .style {
      s-bcb: #f2f2f2 #000 #666;
    }
    .style1 {
      s-bcb: url('image_path') #000;
    }
    ```
    Result:
    ```css
    .style {
      background: #f2f2f2;
      color: #000;
      border-color: #666
    }
    .style1 {
      background: url('image_path');
      color: #000;
    }
    ```


  - #### s-bm(size, position, repeat)
    > 快捷设置背景的size,position和repeat

    | 入参名   | 值格式                 | 是否可空 | 默认值    |
    | :------- | :--------------------- | :------- | :-------- |
    | size     | background-size 值     | 否       | cover     |
    | position | background-position 值 | 是       | center    |
    | repeat   | background-repaeat 值  | 是       | no-repeat |

    Example:
    ```stylus
    .style {
      s-bcb: url('image_path');
      s-bm();
    }
    ```
    Result:
    ```css
    .style {
      background: url('image_path');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    ```

  - #### a-eff(name, duration, delay)
    > 快捷设置动效的name,duration和delay

    | 入参名   | 值格式    | 是否可空 | 默认值 |
    | :------- | :-------- | :------- | :----- |
    | name     | string    | 否       |        |
    | duration | time unit | 否       |        |
    | delay    | time unit | 是       | 0s     |

    示例同下

  - #### a-num(count)
    > 快捷设置动画的播放次数及结束后是否逆向播放

    | 入参名    | 值格式  | 是否可空 | 默认值   |
    | :-------- | :------ | :------- | :------- |
    | count     | string  | 是       | infinite |
    | alternate | boolean | 是       | false    |

    Example:
    ```stylus
    .style {
      anim: fade 1s .5s;
      anim-count: 2 true;
    }
    ```
    Result:
    ```css
    .style {
      animation-name: fade;
      animation-duration: 1s;
      animation-delay: .5s;

      animation-iteration-count: 2;
      animation-direction: alternate;
    }
    ```
