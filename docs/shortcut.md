## 开发意图

开发中常见许多样式规则并不复杂，但应用范围广，相同规则需要重复编写，组件元素下大部分样式已根据类似组件的样式完成，局部元素调整即可时。通过变量生成的方式，也更易迭代应用于样式不多变的平台类前端等项目；也梳理生成常用的如栅格化，弹性盒子等样式，引入即可应用。

## 使用方式

```stylus
@import "~@hiyoz/stylus-shortcut"
```

## 自定义变量

在 `shortcut.styl` 文件中已通过 stylus 提供特性 `?=` 初始化默认变量，需要自定义变量时，仅需在引入此文件前引用自定义的变量文件覆盖对应的变量，即可按照新定义的变量生成样式。

```stylus
// 自定义变量模板
/**
 * 样式生成前缀，默认不添加前缀
 * 巧合下有冲突情况下，可为内置的样式规则增加前缀
 */
yoz_prefix ?= '';
/**
 * 常用颜色
 * default variable by color
 */
yoz_color ?= {
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
yoz_line ?= {
  so1: 1px solid yoz_color.border,
  do1: 1px dotted yoz_color.border,
  da1: 1px dashed yoz_color.border
};
/**
 * 常用圆角变量
 * default variable by border radius
 */
yoz_radius ?= {
  s: 4px,
  m: 8px,
  l: 20px,
  lr: 20px 0 0 0,
  c: 100%
};
/**
 * 常用阴影变量
 * default variable by shadow
 */
yoz_shadow ?= {
  s: 0 0 2px rgba(0, 0, 0, 0.6),
  m: 0 0 5px rgba(0, 0, 0, 0.6)
};
/**
 * 常用字体变量
 * default variable by font-family
 */
yoz_font_family ?= {
  sans: unquote('-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'),
  serif: unquote('serif')
};
/**
 * 常用字体大小与行距变量
 * default variable by font-size and line-height
 */
yoz_font_size ?= {
  s: 12px 20px,
  m: 14px 22px,
  b: 16px 24px,
  l: 18px 28px
};
/**
 * 常用间距变量
 * default variable by spacing
 */
yoz_spacing ?= {
  '5': 5px,
  '10': 10px,
  '20': 20px,
  '30': 30px,
  a: auto
};
/**
 * 默认栅格化相关变量
 * default variable by grid system
 */
  // 自定义栅格数
yoz_grid_col ?= 24;
// 栅格化 栅格间距
yoz_grid_gutter ?= {
  s: 10px,
  m: 20px
};
// 栅格化 响应式界限
yoz_grid_query ?= {
  l: 'max-width: 1200px', //超大屏 large
  m: 'max-width: 992px', //电脑 middle 1000以上基本为PC显示器，则用大中小等英文简写
  t: 'max-width: 768px', //平板 tablets
  p: 'max-width: 540px', //手机 phone
};
```

复制修改 变量模板后在 shortcut.styl 前引用即可

```stylus
@import "your-variable-file.styl" //自定义的变量文件
@import "~@yoz/stylus-shortcut/src/shortcut.styl"
```

可在 `stylusOptions` 配置中全局引用，方便项目中多样式文件可直接应用变量

如: vue-cli@3 配置

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

> 变量成员可按规则自由设置，自定义变量将盖默认值

## 常用

- ### 线条 `line-{key}_{name}`

  ```stylus
    yoz_line = {
      name: [border-width] [border-style] [border-color],
    };
  ```

  > 根据变量`yoz_line`中成员生成，默认值可查看 [自定义变量](#自定义变量)，并提供下列对应关系生成对应的边线

  | key | 说明     |
  | :-- | -------- |
  | a   | 全边     |
  | h   | 左右两边 |
  | v   | 上下两边 |
  | l   | 左边     |
  | r   | 右边     |
  | t   | 上边     |
  | b   | 下边     |

  #### 示例

  ```html
  <div id="LineDemo" class="box line-a_so1"></div>
  ```

  <div class="flex-v">
    <div>设置边线：<span class="text-c_primary text-s_l">.line-<span id="LineDemoValue">a_so1</span></span></div>
    <label><input data-id="LineDemo" data-class="box line-" name="line" value="a_so1" type="radio" /> 实线全边线 [ line-so1 ] </label>
    <label><input data-id="LineDemo" data-class="box line-" name="line" value="v_do1" type="radio" /> 点线上下边线 [ line-do1_v ] </label>
    <label><input data-id="LineDemo" data-class="box line-" name="line" value="h_do1" type="radio" /> 点线左右边线 [ line-do1_h ] </label>
    <label><input data-id="LineDemo" data-class="box line-" name="line" value="l_da1" type="radio" /> 虚线左边线 [ line-da1_l ] </label>
    <label><input data-id="LineDemo" data-class="box line-" name="line" value="t_da1" type="radio" /> 虚线上边线 [ line-da1_t ] </label>
    <label><input data-id="LineDemo" data-class="box line-" name="line" value="r_da1" type="radio" /> 虚线右边线 [ line-da1_r ] </label>
    <label><input data-id="LineDemo" data-class="box line-" name="line" value="b_da1" type="radio" /> 虚线下边线 [ line-da1_b ] </label>
  </div>

- ### 间距 `spac-{key}_{name}`

  ```stylus
    yoz_spacing = {
      name: [spacing],
    };
  ```

  > 根据变量`yoz_spacing`中成员生成，默认值可查看 [自定义变量](#自定义变量)，并提供下列对应关系生成对应的边线

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

  #### 示例

  ```html
  <div class="clearfix">
    <div class="box bg-c_border float-l spac-m_10">外间距</div>
    <div class="box bg-c_border float-l spac-mv_10">外间距 - 上下</div>
    <div class="box bg-c_border float-l spac-mh_10">外间距 - 左右</div>
    <div class="box bg-c_border float-l spac-ml_10">外间距 - 左</div>
    <div class="box bg-c_border float-l spac-mr_10">外间距 - 右</div>
    <div class="box bg-c_border float-l spac-mt_10">外间距 - 上</div>
    <div class="box bg-c_border float-l spac-mb_10">外间距 - 下</div>
  </div>
  <div class="clearfix">
    <div class="box bg-c_border float-l spac-p_10">内间距</div>
    <div class="box bg-c_border float-l spac-pv_10">内间距 - 上下</div>
    <div class="box bg-c_border float-l spac-ph_10">内间距 - 左右</div>
    <div class="box bg-c_border float-l spac-pl_10">内间距 - 左</div>
    <div class="box bg-c_border float-l spac-pr_10">内间距 - 右</div>
    <div class="box bg-c_border float-l spac-pt_10">内间距 - 上</div>
    <div class="box bg-c_border float-l spac-pb_10">内间距 - 下</div>
  </div>
  ```

- ### 圆角 `radius-{name}`

  ```stylus
    yoz_radius = {
      name: [radiusValue],
    };
  ```

  > 根据变量`yoz_radius`中成员生成，默认值可查看 [自定义变量](#自定义变量)

  #### 示例

  ```html
  <div class="flex-h flex-jc_sa">
    <div class="box bg-c_border radius-s"></div>
    <div class="box bg-c_border radius-m"></div>
    <div class="box bg-c_border radius-l"></div>
    <div class="box bg-c_border radius-lr"></div>
    <div class="box bg-c_border radius-c"></div>
  </div>
  ```

- ### 阴影 `shadow-{name}`

  ```stylus
    yoz_shadow = {
      name: [shadowValue],
    };
  ```

  > 根据变量`yoz_shadow`中成员生成，默认值可查看 [自定义变量](#自定义变量)

  #### 示例

  ```html
  <div class="flex-h flex-jc_sa">
    <div class="box shadow-s"></div>
    <div class="box shadow-m"></div>
  </div>
  ```

  - ### 浮动

  - `float-l` 左浮动
  - `float-r` 右浮动
  - `clearfix` 清除浮动

  #### 示例

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

## 文本

- ### 字体 `text-f_{name}`

  ```stylus
  yoz_font_family = {
    name: unquote([font_family]), //unquote为stylus内置去除引号函数
  };
  ```

  > 根据变量`yoz_font_family`中成员生成，默认值可查看 [自定义变量](#自定义变量)

  #### 示例

  ```html
  <div class="text-f_sans">无衬线字体</div>
  <div class="text-f_serif">衬线字体</div>
  ```

- ### 颜色 `text-c_{name}`

  ```stylus
  yoz_color = {
    name: [color]
  };
  ```

  > 根据变量`yoz_color`中成员生成，默认值可查看 [自定义变量](#自定义变量)

  #### 示例

  ```html
  <div class="text-c_primary">字体颜色primary</div>
  <div class="text-c_success">字体颜色success</div>
  <div class="text-c_warning">字体颜色warning</div>
  <div class="text-c_sub_text">字体颜色sub_text</div>
  ```

- ### 字体大小与行距 `text-s_{name}`

  ```stylus
  yoz_font_size = {
    name: [font-size] [line-height]
  };
  ```

  > 根据变量`yoz_font_size`中成员生成，默认值可查看 [自定义变量](#自定义变量)

  #### 示例

  ```html
  <div class="text-s_s">小字体</div>
  <div class="text-s_m">常规字体</div>
  <div class="text-s_l">大字体</div>
  ```

- ### 排列 `text-a_{key}`

  > 默认提供下列对应关系。

  | key | 对应值  | 说明     |
  | :-- | ------- | -------- |
  | l   | left    | 文本居左 |
  | c   | center  | 文本居中 |
  | r   | right   | 文本居右 |
  | j   | justify | 文本平整 |

  #### 示例

  ```html
  <div id="textAlignDemo">
    君不见黄河之水天上来，奔流到海不复回。<br />
    君不见高堂明镜悲白发，朝如青丝暮成雪。<br />
    人生得意须尽欢，莫使金樽空对月。<br />
    天生我材必有用，千金散尽还复来。<br />
    烹羊宰牛且为乐，会须一饮三百杯。<br />
    岑夫子，丹丘生，将进酒，杯莫停。<br />
    与君歌一曲，请君为我倾耳听。<br />
    钟鼓馔玉不足贵，但愿长醉不愿醒。<br />
    古来圣贤皆寂寞，惟有饮者留其名。<br />
    陈王昔时宴平乐，斗酒十千恣欢谑。<br />
    主人何为言少钱，径须沽取对君酌。<br />
    五花马、千金裘，呼儿将出换美酒，与尔同销万古愁。<br />
  </div>
  ```

  <div class="flex-v">
    <div>设置文本对齐：<span class="text-c_primary text-s_l">.text-a_<span id="textAlignDemoValue">l</span></span></div>
    <label><input data-id="textAlignDemo" data-class="text-a_" name="align" value="l" type="radio" /> 文本居左</label>
    <label><input data-id="textAlignDemo" data-class="text-a_" name="align" value="r" type="radio" /> 文本居中</label>
    <label><input data-id="textAlignDemo" data-class="text-a_" name="align" value="c" type="radio" /> 文本居右</label>
    <label><input data-id="textAlignDemo" data-class="text-a_" name="align" value="j" type="radio" /> 文本平整</label>
  </div>

- ### 省略 `text-clamp_{1~6}`

  > 默认提供 1 到 6 行的超出省略样式，需注意兼容情况。

  #### 示例

  ```html
  <div id="textClampDemo" class="text-clamp_1">
    君不见黄河之水天上来，奔流到海不复回。<br />
    君不见高堂明镜悲白发，朝如青丝暮成雪。<br />
    人生得意须尽欢，莫使金樽空对月。<br />
    天生我材必有用，千金散尽还复来。<br />
    烹羊宰牛且为乐，会须一饮三百杯。<br />
    岑夫子，丹丘生，将进酒，杯莫停。<br />
    与君歌一曲，请君为我倾耳听。<br />
    钟鼓馔玉不足贵，但愿长醉不愿醒。<br />
    古来圣贤皆寂寞，惟有饮者留其名。<br />
    陈王昔时宴平乐，斗酒十千恣欢谑。<br />
    主人何为言少钱，径须沽取对君酌。<br />
    五花马、千金裘，呼儿将出换美酒，与尔同销万古愁。<br />
  </div>
  ```

  <div class="flex-v">
    <div>设置超出省略：<span class="text-c_primary text-s_l">.text-clamp_<span id="textClampDemoValue">1</span></span></div>
    <label><input data-id="textClampDemo" data-class="text-clamp_" name="clamp" value="1" type="radio" /> 超1行省略</label>
    <label><input data-id="textClampDemo" data-class="text-clamp_" name="clamp" value="2" type="radio" /> 超2行省略</label>
    <label><input data-id="textClampDemo" data-class="text-clamp_" name="clamp" value="3" type="radio" /> 超3行省略</label>
    <label><input data-id="textClampDemo" data-class="text-clamp_" name="clamp" value="4" type="radio" /> 超4行省略</label>
    <label><input data-id="textClampDemo" data-class="text-clamp_" name="clamp" value="5" type="radio" /> 超5行省略</label>
    <label><input data-id="textClampDemo" data-class="text-clamp_" name="clamp" value="6" type="radio" /> 超6行省略</label>
  </div>

## 背景

- ### 颜色`bg-c_{name}`

  ```stylus
  yoz_color = {
    name: [color]
  };
  ```

  > 根据变量`yoz_color`中成员生成，默认值可查看 [自定义变量](#自定义变量)

  #### 示例

  ```html
  <div class="flex-h flex-jc_sa">
    <div class="box bg-c_primary"></div>
    <div class="box bg-c_success"></div>
    <div class="box bg-c_warning"></div>
    <div class="box bg-c_link"></div>
    <div class="box bg-c_disabled"></div>
  </div>
  ```

- ### 填充模式 `bg-m_{key}`

  > 默认提供下列对应关系。

  | key     | 对应值    | 说明                                                   |
  | :------ | --------- | ------------------------------------------------------ |
  | cover   | cover     | 保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边 |
  | contain | contain   | 保持宽高缩放图片，使图片的长边能完全显示出来           |
  | fill    | 100% 100% | 拉伸图片，使图片填满元素                               |

  #### 示例

  ```html
  <div style="background-image: url(./img/bg.png);" id="BgModeDemo" class="box bg-m_cover"></div>
  <div class="spac-mv_20">
    <div>
      设置背景填充模式：<span class="text-c_primary text-s_l">.bg-m_<span id="BgModeDemoValue">cover</span></span>
    </div>
    <label><input data-id="BgModeDemo" data-class="box bg-m_" name="bgMode" value="cover" type="radio" /> cover</label>
    <label><input data-id="BgModeDemo" data-class="box bg-m_" name="bgMode" value="contain" type="radio" /> contain</label>
    <label><input data-id="BgModeDemo" data-class="box bg-m_" name="bgMode" value="fill" type="radio" /> fill</label>
  </div>
  ```

## 弹性盒子

- ### 主轴设定 `flex-{key}`

  | key | 对应值         | 说明         |
  | :-- | -------------- | ------------ |
  | h   | row            | 水平方向     |
  | hr  | row-reverse    | 水平方向反转 |
  | v   | column         | 垂直方向     |
  | vr  | column-reverse | 垂直方向反转 |

  #### 示例

  ```html
  <div id="FlexDirectionDemo" class="flex-h">
    <div class="box bg-c_border spac-m_10">1</div>
    <div class="box bg-c_border spac-m_10">2</div>
    <div class="box bg-c_border spac-m_10">3</div>
    <div class="box bg-c_border spac-m_10">4</div>
    <div class="box bg-c_border spac-m_10">5</div>
  </div>
  ```

  <div>
    <div>主轴设定：<span class="text-c_primary text-s_l">.flex-<span id="FlexDirectionDemoValue">h</span></span></div>
    <label><input data-id="FlexDirectionDemo" data-class="flex-" name="flex-" value="h" type="radio" /> flex-h</label>
    <label><input data-id="FlexDirectionDemo" data-class="flex-" name="flex-" value="hr" type="radio" /> flex-hr</label>
    <label><input data-id="FlexDirectionDemo" data-class="flex-" name="flex-" value="v" type="radio" /> flex-v</label>
    <label><input data-id="FlexDirectionDemo" data-class="flex-" name="flex-" value="vr" type="radio" /> flex-vr</label>
  </div>

- ### 主轴对齐和分布 - `flex-jc_{key}`

  | key | 对应值        | 说明                                                     |
  | :-- | ------------- | -------------------------------------------------------- |
  | fs  | flex-start    | 从行首起始位置开始排列                                   |
  | c   | center        | 居中排列                                                 |
  | fe  | flex-end      | 从行尾位置开始排列                                       |
  | sa  | space-around  | 均匀排列每个元素，每个元素周围分配相同的空间             |
  | sb  | space-between | 均匀排列每个元素，首个元素放置于起点，末尾元素放置于终点 |
  | se  | space-evenly  | 均匀排列每个元素，每个元素之间的间隔相等                 |

  #### 示例

  ```html
  <div id="FlexJustifyContentDemo" class="flex-h flex-jc_fs">
    <div class="box bg-c_border spac-m_10">1</div>
    <div class="box bg-c_border spac-m_10">2</div>
    <div class="box bg-c_border spac-m_10">3</div>
    <div class="box bg-c_border spac-m_10">4</div>
    <div class="box bg-c_border spac-m_10">5</div>
  </div>
  ```

  <div>
    <div>主轴设定：<span class="text-c_primary text-s_l">.flex-jc_<span id="FlexJustifyContentDemoValue">h</span></span></div>
    <label><input data-id="FlexJustifyContentDemo" data-class="flex-h flex-jc_" name="flexJustifyContent" value="fs" type="radio" /> flex-jc_fs[flex-start]</label>
    <label><input data-id="FlexJustifyContentDemo" data-class="flex-h flex-jc_" name="flexJustifyContent" value="fe" type="radio" /> flex-jc_fe[flex-end]</label>
    <label><input data-id="FlexJustifyContentDemo" data-class="flex-h flex-jc_" name="flexJustifyContent" value="c" type="radio" /> flex-jc_c[center]</label>
    <label><input data-id="FlexJustifyContentDemo" data-class="flex-h flex-jc_" name="flexJustifyContent" value="sa" type="radio" /> flex-jc_sa[space-around]</label>
    <label><input data-id="FlexJustifyContentDemo" data-class="flex-h flex-jc_" name="flexJustifyContent" value="sb" type="radio" /> flex-jc_sb[space-between]</label>
    <label><input data-id="FlexJustifyContentDemo" data-class="flex-h flex-jc_" name="flexJustifyContent" value="se" type="radio" /> flex-jc_se[space-evenly]</label>
  </div>

  - ### 垂直主轴对齐和分布 `flex-ac_{key}`

    > 如果所有 flex 子项只有一行，则 align-content 属性是没有任何效果的。

  | key | 对应值        | 说明                                                     |
  | :-- | ------------- | -------------------------------------------------------- |
  | fs  | flex-start    | 从行首起始位置开始排列                                   |
  | c   | center        | 居中排列                                                 |
  | fe  | flex-end      | 从行尾位置开始排列                                       |
  | sa  | space-around  | 均匀排列每个元素，每个元素周围分配相同的空间             |
  | sb  | space-between | 均匀排列每个元素，首个元素放置于起点，末尾元素放置于终点 |
  | se  | space-evenly  | 均匀排列每个元素，每个元素之间的间隔相等                 |

  #### 示例

  ```html
  <div id="FlexAlignContentDemo" class="flex-h flex-w_w flex-ac_fs" style="background:rgba(0,0,0,0.2); height:500px; width:300px;">
    <div class="box bg-c_border spac-m_10">1</div>
    <div class="box bg-c_border spac-m_10">2</div>
    <div class="box bg-c_border spac-m_10">3</div>
    <div class="box bg-c_border spac-m_10">4</div>
    <div class="box bg-c_border spac-m_10">5</div>
  </div>
  ```

  <div class="flex-v">
    <div>垂直主轴对齐和分布：<span class="text-c_primary text-s_l">.flex-ac_<span id="FlexAlignContentDemoValue">fs</span></span></div>
    <label><input data-id="FlexAlignContentDemo" data-class="flex-h flex-w_w flex-ac_" name="flexAlignContent" value="fs" type="radio" /> flex-ac_fs[flex-start]</label>
    <label><input data-id="FlexAlignContentDemo" data-class="flex-h flex-w_w flex-ac_" name="flexAlignContent" value="fe" type="radio" /> flex-ac_fe[flex-end]</label>
    <label><input data-id="FlexAlignContentDemo" data-class="flex-h flex-w_w flex-ac_" name="flexAlignContent" value="c" type="radio" /> flex-ac_c[center]</label>
    <label><input data-id="FlexAlignContentDemo" data-class="flex-h flex-w_w flex-ac_" name="flexAlignContent" value="sa" type="radio" /> flex-ac_sa[space-around]</label>
    <label><input data-id="FlexAlignContentDemo" data-class="flex-h flex-w_w flex-ac_" name="flexAlignContent" value="sb" type="radio" /> flex-ac_sb[space-between]</label>
    <label><input data-id="FlexAlignContentDemo" data-class="flex-h flex-w_w flex-ac_" name="flexAlignContent" value="se" type="radio" /> flex-ac_se[space-evenly]</label>
  </div>

- ### 主轴垂直方向对齐 `flex-ai_{key}`

  | key | 对应值     | 说明                                         |
  | :-- | ---------- | -------------------------------------------- |
  | fs  | flex-start | 从行首起始位置开始排列                       |
  | c   | center     | 居中排列                                     |
  | fe  | flex-end   | 从行尾位置开始排列                           |
  | st  | stretch    | 均匀排列每个元素，每个元素周围分配相同的空间 |

  #### 示例

  ```html
  <div id="FlexAliginItemsDemo" class="flex-h">
    <div style="min-height:100px; height:auto;" class="box bg-c_border spac-mr_10 spac-mb_10">1</div>
    <div style="min-height:120px; height:auto;" class="box bg-c_border spac-mr_10 spac-mb_10">2</div>
    <div style="min-height:150px; height:auto;" class="box bg-c_border spac-mr_10 spac-mb_10">3</div>
    <div style="min-height:160px; height:auto;" class="box bg-c_border spac-mr_10 spac-mb_10">4</div>
    <div style="min-height:100px; height:auto;" class="box bg-c_border spac-mr_10 spac-mb_10">5</div>
  </div>
  ```

  <div class="flex-v">
    <div>主轴垂直方向对齐：<span class="text-c_primary text-s_l">.flex-ai_<span id="FlexAliginItemsDemoValue">st</span></span></div>
    <label><input data-id="FlexAliginItemsDemo" data-class="flex-h flex-ai_" name="flexAlignItems" value="st" type="radio" /> flex-ai_st[stretch]</label>
    <label><input data-id="FlexAliginItemsDemo" data-class="flex-h flex-ai_" name="flexAlignItems" value="fs" type="radio" /> flex-ai_s[flex-start]</label>
    <label><input data-id="FlexAliginItemsDemo" data-class="flex-h flex-ai_" name="flexAlignItems" value="fe" type="radio" /> flex-ai_e[flex-end]</label>
    <label><input data-id="FlexAliginItemsDemo" data-class="flex-h flex-ai_" name="flexAlignItems" value="c" type="radio" /> flex-ai_c[center]</label>
  </div>

- ### 子项主轴垂直方向对齐 `flex-as_{key}`

  | key | 对应值     | 说明                                         |
  | :-- | ---------- | -------------------------------------------- |
  | fs  | flex-start | 从行首起始位置开始排列                       |
  | c   | center     | 居中排列                                     |
  | fe  | flex-end   | 从行尾位置开始排列                           |
  | st  | stretch    | 均匀排列每个元素，每个元素周围分配相同的空间 |

  #### 示例

  ```html
  <div class="flex-h flex-ai_s">
    <div id="FlexAliginSelfDemo" style="min-height:100px; height:auto;" class="box bg-c_primary spac-mr_10 spac-mb_10">1</div>
    <div style="min-height:120px; height:auto;" class="box bg-c_border spac-mr_10 spac-mb_10">2</div>
    <div style="min-height:150px; height:auto;" class="box bg-c_border spac-mr_10 spac-mb_10">3</div>
    <div style="min-height:160px; height:auto;" class="box bg-c_border spac-mr_10 spac-mb_10">4</div>
    <div style="min-height:100px; height:auto;" class="box bg-c_border spac-mr_10 spac-mb_10">5</div>
  </div>
  ```

  <div class="flex-v">
    <div>子项主轴垂直方向对齐：<span class="text-c_primary text-s_l">.flex-ai_<span id="FlexAliginSelfDemoValue">st</span></span></div>
    <label><input data-id="FlexAliginSelfDemo" data-class="box bg-c_primary spac-mr_10 spac-mb_10 flex-as_" name="flexAlignItems" value="st" type="radio" /> flex-as_st[stretch]</label>
    <label><input data-id="FlexAliginSelfDemo" data-class="box bg-c_primary spac-mr_10 spac-mb_10 flex-as_" name="flexAlignItems" value="fs" type="radio" /> flex-as_s[flex-start]</label>
    <label><input data-id="FlexAliginSelfDemo" data-class="box bg-c_primary spac-mr_10 spac-mb_10 flex-as_" name="flexAlignItems" value="fe" type="radio" /> flex-as_e[flex-end]</label>
    <label><input data-id="FlexAliginSelfDemo" data-class="box bg-c_primary spac-mr_10 spac-mb_10 flex-as_" name="flexAlignItems" value="c" type="radio" /> flex-as_c[center]</label>
  </div>

- ### 容器换行 `flex-w_{key}`

  | key   | 对应值       | 说明     |
  | :---- | ------------ | -------- |
  | n     | nowrap       | 不换行   |
  | w     | wrap         | 换行     |
  | w_rtl | wrap-reverse | 反转换行 |

  #### 示例

  ```html
  <div id="flexWrapDemo" class="bg-c_sub_text flex-h">
    <div class="box bg-c_border spac-m_10">1</div>
    <div class="box bg-c_border spac-m_10">2</div>
    <div class="box bg-c_border spac-m_10">3</div>
    <div class="box bg-c_border spac-m_10">4</div>
    <div class="box bg-c_border spac-m_10">5</div>
    <div class="box bg-c_border spac-m_10">6</div>
    <div class="box bg-c_border spac-m_10">7</div>
    <div class="box bg-c_border spac-m_10">8</div>
    <div class="box bg-c_border spac-m_10">9</div>
    <div class="box bg-c_border spac-m_10">10</div>
    <div class="box bg-c_border spac-m_10">11</div>
    <div class="box bg-c_border spac-m_10">12</div>
    <div class="box bg-c_border spac-m_10">13</div>
    <div class="box bg-c_border spac-m_10">14</div>
    <div class="box bg-c_border spac-m_10">15</div>
  </div>
  ```

  <div class="flex-v">
    <div>容器换行设定：<span class="text-c_primary text-s_l">.flex-w_<span id="flexWrapDemoValue">n</span></span></div>
    <label><input data-id="flexWrapDemo" data-class="bg-c_sub_text flex-h flex-w_" name="flexWrap" value="n" type="radio" /> flex-w_n[nowrap]</label>
    <label><input data-id="flexWrapDemo" data-class="bg-c_sub_text flex-h flex-w_" name="flexWrap" value="w" type="radio" /> flex-w_w[wrap]</label>
    <label><input data-id="flexWrapDemo" data-class="bg-c_sub_text flex-h flex-w_" name="flexWrap" value="w_rtl" type="radio" /> flex-w_w_rtl[wrap-reverse]</label>
  </div>

- ### 伸展填充 `flex-fill`

  #### 示例

  ```html
  <div class="flex-h">
    <div class="box bg-c_border spac-mr_10 flex-fill">伸展填充</div>
    <div class="box bg-c_border"></div>
  </div>
  ```

## 栅格化

- ### 栅格化实现 `row[-flex]`

  > 通过浮动或弹性盒子实现栅格化系统

  #### 示例

  ```html
  <div>float实现grid <b class="text-c_primary">.row</b></div>
  <div class="row gutter-s">
    <div class="col-6 bg-c_border">.col-6</div>
    <div class="col-6 bg-c_border">.col-6</div>
    <div class="col-ml_6 col-6 col-g bg-c_border">.col-6.col-ml_6</div>
    <!-- <div class="col-ml_2 bg-c_border">伸展填充</div> -->
  </div>
  <div class="spac-mt_20">flex实现grid <b class="text-c_primary">.row-flex</b></div>
  <div class="row-flex gutter-s">
    <div class="col-6 bg-c_border">.col-6</div>
    <div class="col-ml_6 col-6 col-g bg-c_border">.col-6.col-ml_6</div>
    <div class="col-6 bg-c_border">.col-6</div>
  </div>
  ```

- ### 栅格间距 `gutter-{name}`

  ```stylus
    yoz_grid_gutter = {
      name: [gutter],
    };
  ```

  > 根据变量`yoz_grid_gutter`中成员生成，默认值可查看 [自定义变量](#自定义变量)

  #### 示例

  ```html
  <div>变量设定的 [s] 间距 <b class="text-c_primary">.gutter-s</b></div>
  <div class="row gutter-s line-a_so1 spac-pv_10">
    <div class="col-6"><div class="line-a_so1">.col-6</div></div>
    <div class="col-6"><div class="line-a_so1">.col-6</div></div>
    <div class="col-6"><div class="line-a_so1">.col-6</div></div>
    <div class="col-6"><div class="line-a_so1">.col-6</div></div>
  </div>
  <div class="spac-mt_20">变量设定的 [m] 间距 <b class="text-c_primary">.gutter-m</b></div>
  <div class="row gutter-m line-a_so1 spac-pv_10">
    <div class="col-6"><div class="line-a_so1">.col-6</div></div>
    <div class="col-6"><div class="line-a_so1">.col-6</div></div>
    <div class="col-6"><div class="line-a_so1">.col-6</div></div>
    <div class="col-6"><div class="line-a_so1">.col-6</div></div>
  </div>
  ```

- ### 栅格块 `col-{0~num}`

  ```stylus
      yoz_grid_col = [num];//数字，默认24

  ```

  > 根据变量`yoz_grid_col`分割，默认值可查看 [自定义变量](#自定义变量)

  #### 示例

  ```html
  <div class="row line-a_so1 spac-p_10">
    <div class="col-0"><div class="line-a_so1">.col-0</div></div>
    <div class="col-2"><div class="line-a_so1">.col-2</div></div>
    <div class="col-4"><div class="line-a_so1">.col-4</div></div>
    <div class="col-6"><div class="line-a_so1">.col-6</div></div>
    <div class="col-12"><div class="line-a_so1">.col-12</div></div>
  </div>
  ```

- ### 栅格块偏移 `col-{ml|mr}_{0~num}`

  | key | 说明   |
  | :-- | ------ |
  | ml  | 左占位 |
  | mr  | 右占位 |

  #### 示例

  ```html
  <div class="row line-a_so1 spac-p_10">
    <div class="col-0"><div class="line-a_so1">.col-0</div></div>
    <div class="col-4"><div class="line-a_so1">.col-4</div></div>
    <div class="col-2"><div class="line-a_so1">.col-2</div></div>
    <div class="col-4"><div class="line-a_so1">.col-4</div></div>
    <div class="col-10 col-ml_4"><div class="line-a_so1">.col-10.col-ml_4</div></div>
    <div class="col-6 col-mr_6"><div class="line-a_so1">.col-12.col-mr_2</div></div>
    <div class="col-12"><div class="line-a_so1">.col-12</div></div>
  </div>
  ```

- ### 响应式栅格块

  - `col-{media}-{0~num}`
  - `col-{media}-[ml|mr]_{0~num}`

  ```stylus
    yoz_grid_query = { // 因生成顺序会影响响应式规则的优先级，所以需要按屏幕宽度由大到小排列，数值最小的应用 max-width
      media: 'min-width: [screenWidth]',
      media: 'max-width: [screenWidth]',
    };
  ```

  | key | 对应值            | 说明     |
  | :-- | ----------------- | -------- |
  | l   | max-width: 1200px | 大屏     |
  | m   | max-width: 992px  | 小显示器 |
  | t   | max-width: 768px  | 平板     |
  | p   | max-width: 540px  | 手机     |

  > 根据变量`yoz_grid_query`分割，默认值可查看 [自定义变量](#自定义变量)

  #### 示例

  ```htm
  <div class="row gutter-s">
    <div class="col-p-24 col-t-0 col-0"><div class="line-a_so1 text-clamp_1">.col-p-24.col-t-0.col-0</div></div>
    <div class="col-p-12 col-p-ml_12 col-t-24 col-2"><div class="line-a_so1 text-clamp_1">.col-p-12.col-p-ml_12.col-t-24.col-2</div></div>
    <div class="col-p-12 col-p-mr_12 col-t-24 col-4"><div class="line-a_so1 text-clamp_1">.col-p-12.col-p-mr_12.col-t-24.col-4</div></div>
    <div class="col-p-24 col-t-12 col-6"><div class="line-a_so1 text-clamp_1">.col-p-24.col-t-12.col-6</div></div>
    <div class="col-p-24 col-t-12 col-12"><div class="line-a_so1 text-clamp_1">.col-p-24.col-t-12.col-12</div></div>
  </div>
  ```

  <div class="row">
    <div id="GridMediaDemo" class="col-24">
      <iframe style="height: 200px" src="./media.html"></iframe>
    </div>
  </div>

  <div class="flex-v">
    <label><input data-id="GridMediaDemo" data-class="col-" name="gridMedia" value="24" type="radio" /> 电脑</label>
    <label><input data-id="GridMediaDemo" data-class="col-" name="gridMedia" value="12" type="radio" /> 平板</label>
    <label><input data-id="GridMediaDemo" data-class="col-" name="gridMedia" value="8" type="radio" /> 手机</label>
  </div>
