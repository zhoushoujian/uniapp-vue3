module.exports = {
  // 导出配置对象
  extends: [
    // 扩展基础配置
    'stylelint-config-standard', // 标准配置
    'stylelint-config-recommended-scss', // 推荐的 SCSS 配置
    'stylelint-config-recommended-vue', // 推荐的 Vue 配置
    'stylelint-config-prettier' // Prettier 配置
  ],
  plugins: ['stylelint-scss', 'stylelint-order'], // 插件列表
  ignoreFiles: [
    // 忽略检查的文件类型
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.json',
    '**/*.md'
  ],
  overrides: [
    // 若项目中存在scss文件，添加以下配置
    {
      files: '**/*.scss',
      customSyntax: 'postcss-scss'
    },
    {
      files: '**/*.nvue',
      customSyntax: 'postcss-html'
    }
  ],
  rules: {
    // 自定义规则
    'declaration-block-no-duplicate-properties': [true],
    'selector-class-pattern': null, // 选择器命名模式
    // 命名规范
    // 'selector-class-pattern': [
    //   // 类选择器命名模式
    //   '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
    //   {
    //     message: 'Expected class selector to be kebab-case' // 错误提示信息
    //   }
    // ],
    'import-notation': null,
    'order/properties-alphabetical-order': null, // 禁用按字母顺序排序属性
    'order/properties-order': [
      // 属性顺序配置
      [
        {
          properties: ['position', 'top', 'bottom', 'right', 'left', 'z-index'] // 定位属性
        },
        {
          properties: [
            // 显示和布局属性
            'display',
            'align-items',
            'justify-content',
            'visibility',
            'float',
            'clear',
            'overflow',
            'overflow-x',
            'overflow-y',
            'zoom'
          ]
        },
        {
          properties: [
            // 列表样式属性
            'list-style',
            'list-style-position',
            'list-style-type',
            'list-style-image'
          ]
        },
        {
          properties: [
            // 边距和边框属性
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom', // 修正拼写错误
            'margin-left',
            'box-sizing',
            'border',
            'border-style',
            'border-width',
            'border-color',
            'border-top-style',
            'border-top-width',
            'border-top-color',
            'border-right-style',
            'border-right-width',
            'border-right-color',
            'border-bottom-style',
            'border-bottom-width',
            'border-bottom-color',
            'border-left-style',
            'border-left-width',
            'border-left-color',
            'border-radius',
            'border-top-left-radius',
            'border-top-right-radius',
            'border-bottom-right-radius',
            'border-bottom-left-radius',
            'border-image',
            'border-image-source',
            'border-image-slice',
            'border-image-width',
            'border-image-outset',
            'border-image-repeat',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height'
          ]
        },
        {
          properties: [
            // 字体和文本属性
            'font',
            'font-family',
            'font-size',
            'font-weight',
            'font-style',
            'font-stretch',
            'line-height',
            'text-align',
            'vertical-align',
            'white-space',
            'text-decoration',
            'text-indent',
            'text-justify',
            'letter-spacing',
            'word-spacing',
            'text-transform',
            'text-overflow',
            'word-wrap',
            'word-break'
          ]
        },
        {
          properties: [
            // 背景和颜色属性
            'color',
            'background',
            'background-color',
            'background-image',
            'background-repeat',
            'background-attachment',
            'background-position',
            'background-position-x',
            'background-position-y',
            'background-clip',
            'background-origin',
            'background-size'
          ]
        },
        {
          properties: [
            // 过渡和动画属性
            'transition',
            'transition-delay',
            'transition-timing-function',
            'transition-duration',
            'transition-property',
            'transform',
            'transform-origin',
            'animation',
            'animation-name',
            'animation-duration',
            'animation-play-state',
            'animation-timing-function',
            'animation-delay',
            'animation-iteration-count',
            'animation-direction'
          ]
        },
        {
          properties: [
            // 其他属性
            'outline',
            'outline-width',
            'outline-style',
            'outline-color',
            'outline-offset',
            'opacity',
            'filter',
            'box-shadow',
            'text-shadow'
          ]
        },
        {
          properties: ['content', 'resize', 'cursor', 'user-select', 'pointer-events'] // 内容和其他交互属性
        }
      ],
      {
        emptyLineBeforeUnspecified: 'never' // 不在未指定属性前插入空行
      }
    ],

    // 配置颜色的十六进制表示形式
    'color-hex-case': 'lower', // 十六进制颜色小写
    'color-hex-length': 'short', // 使用短十六进制颜色
    // 'color-named': 'never', // 禁用命名颜色

    // 字体权重的表示形式
    'font-weight-notation': 'numeric', // 使用数字表示字体权重

    // 数字前导零的使用
    'number-leading-zero': 'always', // 总是使用前导零

    // 字符串引用类型
    'string-quotes': 'single', // 使用单引号

    // 禁止使用浏览器前缀
    'value-no-vendor-prefix': [
      // 禁止使用浏览器前缀
      true,
      {
        ignoreValues: [
          // 忽略特定值
          'placeholder',
          'input-placeholder',
          'text-fill-color',
          'line-clamp',
          'box-orient',
          'box'
        ]
      }
    ],

    // 值列表逗号前的换行
    'value-list-comma-newline-before': 'never-multi-line', // 多行时不换行

    // 值列表逗号前的空间
    'value-list-comma-space-before': null, // 总是在逗号前加空格

    // 声明后冒号后的换行
    'declaration-colon-newline-after': null, // 禁用声明后换行

    // 声明前感叹号前的空间
    'declaration-bang-space-before': null, // 总是在感叹号前加空格

    // 声明前感叹号后的空间
    'declaration-bang-space-after': null, // 总是在感叹号后加空格

    // 声明前冒号前的空间
    'declaration-colon-space-before': null, // 总是在冒号前加空格

    // 声明前冒号后的空间
    'declaration-colon-space-after': null, // 总是在冒号后加空格

    // 声明前的空行
    'declaration-empty-line-before': null, // 禁用声明前空行

    // 声明块分号前的换行
    'declaration-block-semicolon-newline-before': 'never-multi-line', // 多行时不换行

    // 禁止未知的 at-rule
    'at-rule-no-unknown': null, // 增强安全性

    // 禁止未知的单位
    'unit-no-unknown': null, // 增强安全性

    // 禁止空源文件
    'no-empty-source': null,

    // 规则前的空行
    'rule-empty-line-before': [
      // 规则前空行
      'always',
      {
        ignore: ['after-comment', 'first-nested'] // 忽略特定情况
      }
    ],

    // 禁止空块
    'block-no-empty': true, // 避免空块

    // 禁止降序选择器
    'no-descending-specificity': null,

    // 禁止未知的选择器伪类
    'selector-pseudo-class-no-unknown': null,

    // 禁止未知的属性
    'property-no-unknown': null,

    // 禁止缺少通用字体关键字
    'font-family-no-missing-generic-family-keyword': null,

    // 禁止未引用的字体名称
    'font-family-name-quotes': null,

    // 禁止未知的选择器伪元素
    'selector-pseudo-element-no-unknown': null,

    // 添加注释和统一缩进
    indentation: 2, // 缩进为两个空格
    'no-extra-semicolons': true, // 禁用多余的分号
    'no-eol-whitespace': true, // 禁用行尾空白字符
    'font-family-no-missing-generic-family-keyword': null,
    'value-keyword-case': null, // 在 css 中使用 v-bind，不报错
    'no-descending-specificity': null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
    'function-url-quotes': 'always', // 要求或禁止 URL 的引号 "always(必须加上引号)"|"never(没有引号)"
    'selector-class-pattern': null, // 关闭强制选择器类名的格式
    'property-no-unknown': null, // 禁止未知的属性(true 为不允许) // 'block-opening-brace-space-before': 'always', //大括号之前必须有一个空格或不能有空白符
    'value-no-vendor-prefix': null, // 关闭 属性值前缀 --webkit-box
    'property-no-vendor-prefix': null, // 关闭 属性前缀 -webkit-mask
    'scss/dollar-variable-pattern': null, // 禁用对 SCSS 变量命名模式的检查
    'scss/at-mixin-pattern': null, // 禁用对 SCSS 混合宏（mixin）命名模式的检查
    'selector-pseudo-class-no-unknown': [
      // 不允许未知的选择器
      true,
      {
        ignorePseudoClasses: ['global', 'v-deep', 'deep'] // 忽略属性，修改element默认样式的时候能使用到
      }
    ]
  }
}
