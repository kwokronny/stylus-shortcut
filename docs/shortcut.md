## 开发意图

开发中常见许多样式规则并不复杂，但应用范围广，相同规则需要重复编写，组件元素下大部分样式已根据类型组件的样式完成，局部元素调整即可时。通过变量生成的方式，也更易迭代应用于样式不多变的平台类前端等项目；也梳理生成常用的如栅格化，弹性盒子等样式，引入即可应用。

## 使用方式

```stylus
@import "~@yoz/stylus-shortcut/src/shortcut.styl"
```

## 自定义变量

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
yoz_prefix = '';
/**
 * 常用颜色
 * default variable by color
 */
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
/**
 * 常用线变量
 * default variable by line
 */
yoz_line = {
  so1: 1px solid yoz_color.border,
  do1: 1px dotted yoz_color.border,
  da1: 1px dashed yoz_color.border
};
/**
 * 常用阴影变量
 * default variable by shadow
 */
yoz_shadow = {
  s: 0 0 2px rgba(0, 0, 0, 0.6),
  m: 0 0 5px rgba(0, 0, 0, 0.6)
};
/**
 * 常用字体变量
 * default variable by font-family
 */
yoz_font_family = {
  sans: unquote('-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'),
  serif: unquote('serif')
};
/**
 * 常用字体大小与行距变量
 * default variable by font-size and line-height
 */
yoz_font_size = {
  s: 12px 20px,
  m: 14px 22px,
  b: 16px 24px,
  l: 18px 28px
};
/**
 * 常用间距变量
 * default variable by spacing
 */
yoz_spacing = {
  '5': 5px,
  '10': 10px,
  '20': 20px,
  '30': 30px
};
/**
 * 默认栅格化相关变量
 * default variable by grid system
 */
yoz_grid_col = 24; // 自定义栅格数
yoz_grid_query = {
  normal: '',
  xs: 'max-width: 320px',
  sm: 'min-width: 768px',
  md: 'min-width: 992px',
  lg: 'min-width: 1200px',
  xl: 'min-width: 1920px'
};
```

# 文本

- **字体**

  > 根据变量`yoz_font_family`中成员生成，默认值查看 `快速开始 > 自定义变量`

  - `text-f_${name}`

  如：

  ```html
  <div class="text-f_sans">无衬线字体</div>
  <div class="text-f_serif">衬线字体</div>
  ```

- **颜色**

  > 根据变量`yoz_color`中成员生成，默认值查看 `快速开始 > 自定义变量`

  - `text-c_${color}`

  如：

  ```html
  <div class="text-c_primary">字体颜色primary</div>
  <div class="text-c_success">字体颜色success</div>
  ```

- **字体大小与行距**

  > 根据变量`yoz_font_size`中成员生成，默认值查看 `快速开始 > 自定义变量`

  - `text-sl_${name}`

  如：

  ```html
  <div class="text-sl_s">小字体</div>
  <div class="text-sl_m">常规字体</div>
  <div class="text-sl_l">大字体</div>
  ```

- **省略**

  - `text-clamp_1` 超出省略
  - `text-clamp_2` 超出 2 行省略
  - `text-clamp_3` 超出 3 行省略

  如：

  ```html
  <div class="text-clamp_1">
    君不见黄河之水天上来，奔流到海不复回。君不见高堂明镜悲白发，朝如青丝暮成雪。人生得意须尽欢，莫使金樽空对月。天生我材必有用，千金散尽还复来。烹羊宰牛且为乐，会须一饮三百杯。岑夫子，丹丘生，将进酒，杯莫停。与君歌一曲，请君为我倾耳听。钟鼓馔玉不足贵，但愿长醉不愿醒。古来圣贤皆寂寞，惟有饮者留其名。陈王昔时宴平乐，斗酒十千恣欢谑。主人何为言少钱，径须沽取对君酌。五花马、千金裘，呼儿将出换美酒，与尔同销万古愁。
  </div>
  <div class="text-clamp_2 spac-mv_20">
    君不见黄河之水天上来，奔流到海不复回。君不见高堂明镜悲白发，朝如青丝暮成雪。人生得意须尽欢，莫使金樽空对月。天生我材必有用，千金散尽还复来。烹羊宰牛且为乐，会须一饮三百杯。岑夫子，丹丘生，将进酒，杯莫停。与君歌一曲，请君为我倾耳听。钟鼓馔玉不足贵，但愿长醉不愿醒。古来圣贤皆寂寞，惟有饮者留其名。陈王昔时宴平乐，斗酒十千恣欢谑。主人何为言少钱，径须沽取对君酌。五花马、千金裘，呼儿将出换美酒，与尔同销万古愁。
  </div>
  <div class="text-clamp_3 spac-mv_20">
    君不见黄河之水天上来，奔流到海不复回。君不见高堂明镜悲白发，朝如青丝暮成雪。人生得意须尽欢，莫使金樽空对月。天生我材必有用，千金散尽还复来。烹羊宰牛且为乐，会须一饮三百杯。岑夫子，丹丘生，将进酒，杯莫停。与君歌一曲，请君为我倾耳听。钟鼓馔玉不足贵，但愿长醉不愿醒。古来圣贤皆寂寞，惟有饮者留其名。陈王昔时宴平乐，斗酒十千恣欢谑。主人何为言少钱，径须沽取对君酌。五花马、千金裘，呼儿将出换美酒，与尔同销万古愁。
  </div>
  ```

- **排列**

  | key | 对应值  | 说明     |
  | :-- | ------- | -------- |
  | l   | left    | 文本居左 |
  | c   | center  | 文本居中 |
  | r   | right   | 文本居右 |
  | j   | justify | 文本平整 |

  - `text-a_${key}` 文本居左

  如：

  ```html
  <div class="text-a_l">文本居左</div>
  <div class="text-a_c">文本居中</div>
  <div class="text-a_r">文本居右</div>
  <div class="text-a_j">文本平整文本平整文本平整文本平整文本平整文本平整文本平整文本平整文本平整文本平整文本平整文本平整文本平整文本平整文本平整文本平整文本平整文本平整</div>
  ```

# 背景

- **颜色**

  > 根据变量`yoz_color`中成员生成，默认值查看 `快速开始 > 自定义变量`

  - `bg-c_${color}`

  如：

  ```html
  <style>
    .bgcolor {
      width: 100px;
      height: 100px;
      color: #fff;
    }
  </style>
  <div class="bgcolor bg-c_primary spac-mv_10">常用背景色</div>
  <div class="bgcolor bg-c_success spac-mv_10">成功背景色</div>
  ```

- **填充模式**
  | key | 对应值 | 说明 |
  | :-- | ------------ | -------- |
  | cover | cover | 保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边 |
  | contain | contain | 保持宽高缩放图片，使图片的长边能完全显示出来 |
  | fill | 100% 100% | 拉伸图片，使图片填满元素 |

  - `bg-m_${key}`

  如：

  ```html
  <style>
    .bg {
      background-image: url(./bg.png);
      width: 100px;
      height: 100px;
    }
  </style>
  <div class="clearfix">
    <div class="bg float-l bg-m_cover spac-m_10"></div>
    <div class="bg float-l bg-m_contain spac-m_10"></div>
    <div class="bg float-l bg-m_fill spac-m_10"></div>
  </div>
  ```

# 边框

- **常用线条**

  > 根据变量`yoz_line`中成员生成，默认值查看 `快速开始 > 自定义变量`

  | key | 说明     |
  | :-- | -------- |
  | h   | 左右两边 |
  | v   | 上下两边 |
  | l   | 左       |
  | r   | 右       |
  | t   | 上       |
  | b   | 下       |

  - `line-${lineName}` 设置四边
  - `line-${lineName}_${key}`

  如：

  ```html
  <style>
    .line {
      width: 100px;
      height: 100px;
      background: #fcfcfc;
    }
  </style>
  <div class="clearfix">
    <div class="line float-l line-so1 spac-m_10"></div>
    <div class="line float-l line-da1_v spac-m_10"></div>
    <div class="line float-l line-da1_h spac-m_10"></div>
    <div class="line float-l line-do1_l spac-m_10"></div>
    <div class="line float-l line-do1_t spac-m_10"></div>
    <div class="line float-l line-do1_r spac-m_10"></div>
    <div class="line float-l line-do1_b spac-m_10"></div>
  </div>
  ```

# 间距

> 根据变量`yoz_spacing`中成员生成，默认值查看 `快速开始 > 自定义变量`

- `spac-${key}_${spacName}`

| key | 说明          |
| :-- | ------------- |
| mv  | 外间距 - 上下 |
| mh  | 外间距 - 左右 |
| ml  | 外间距 - 左   |
| mr  | 外间距 - 右   |
| mt  | 外间距 - 上   |
| mb  | 外间距 - 下   |
| pv  | 内间距 - 上下 |
| ph  | 内间距 - 左右 |
| pl  | 内间距 - 左   |
| pr  | 内间距 - 右   |
| pt  | 内间距 - 上   |
| pb  | 内间距 - 下   |

如：

```html
<style>
  .spac {
    width: 100px;
    height: 100px;
    background: #f2f2f2;
  }
</style>
<div class="clearfix">
  <div class="spac float-l spac-m_10">外间距</div>
  <div class="spac float-l spac-mv_10">外间距 - 上下</div>
  <div class="spac float-l spac-mh_10">外间距 - 左右</div>
  <div class="spac float-l spac-ml_10">外间距 - 左</div>
  <div class="spac float-l spac-mr_10">外间距 - 右</div>
  <div class="spac float-l spac-mt_10">外间距 - 上</div>
  <div class="spac float-l spac-mb_10">外间距 - 下</div>
</div>
<div class="clearfix">
  <div class="spac float-l spac-p_10">内间距</div>
  <div class="spac float-l spac-pv_10">内间距 - 上下</div>
  <div class="spac float-l spac-ph_10">内间距 - 左右</div>
  <div class="spac float-l spac-pl_10">内间距 - 左</div>
  <div class="spac float-l spac-pr_10">内间距 - 右</div>
  <div class="spac float-l spac-pt_10">内间距 - 上</div>
  <div class="spac float-l spac-pb_10">内间距 - 下</div>
</div>
```

# 弹性盒子

- **容器设定**

  | key   | 对应值         | 说明         |
  | :---- | -------------- | ------------ |
  | h     | row            | 水平方向     |
  | h_rtl | row-reverse    | 水平方向     |
  | v     | column         | 垂直方向     |
  | v_rtl | column-reverse | 垂直反转方向 |

  - `flex-${key}`

  如

  ```css
  .flex-h {
    display: flex;
    flex-direction: row;
  }
  .flex-h_rtl {
    display: flex;
    flex-direction: row-reverse;
  }
  ...
  ```

- **容器换行**

  | key | 对应值       | 说明     |
  | :-- | ------------ | -------- |
  | n   | nowrap       | 不换行   |
  | w   | wrap         | 换行     |
  | wr  | wrap-reverse | 反转换行 |

  - `flex-w_${key}`

  如

  ```css
  .flex-w_n {
    flex-wrap: nowrap;
  }
  .flex-w_w {
    flex-wrap: wrap;
  }
  .flex-w_wr {
    flex-wrap: wrap-reverse;
  }
  ```

- **水平对齐**

  | key | 对应值        | 说明     |
  | :-- | ------------- | -------- |
  | s   | stretch       |          |
  | fs  | flex-start    |          |
  | fe  | flex-end      |          |
  | c   | center        | 居中排列 |
  | sa  | space-around  |          |
  | se  | space-evenly  |          |
  | sb  | space-between |          |

  - `flex-jc_${key}`
  - `flex-ac_${key}`
    如

  ```css
  .flex-jc_sb {
    justify-content: space-between;
  }
  .flex-ac_c {
    align-content: center;
  }
  ...
  ```

# 栅格化

# 浮动

- `float-l` 左浮动
- `float-r` 右浮动
- `clearfix` 清除浮动

如：

```html
<style>
  .float {
    width: 100px;
    height: 100px;
    background: #f2f2f2;
  }
</style>
<div class="float float-r spac-mb_10">右浮动</div>
<div class="clearfix">
  <div class="float float-l">左浮动</div>
  <div class="float float-r">右浮动</div>
</div>
```
