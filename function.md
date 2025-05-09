# GitHub 主页开发规划

## 整体布局

页面主要分为三个横向区域：

1.  **头图**
2.  **我的信息 (My Information)**
3.  **我的经历 (My Experience)**
4.  **我的作品 (My Works)**
   
- 整体色调：和图片C:\Users\Liweikai\Elijah-vvkk.github.io\Asset\头图.jpg的色调一致
- 组块风格：和保时捷官网的风格一致


## 一、头图
- 图片位置：C:\Users\Liweikai\Elijah-vvkk.github.io\Asset\头图.jpg
  - 剪切到合适的比例



## 二、 我的信息 (My Information)

此区域分为左右两栏。

### 1. 左栏 (Left Column)

垂直排布以下元素：

* **顶部：姓名**
    * 内容：李维凯 Weikai Li
* **中部：照片画廊 (Photo Gallery)**
    * **图片存储路径**：`C:\Users\Liweikai\Elijah-vvkk.github.io\Asset\photo\`
    * **显示效果**：
        * 多张照片在同一位置堆叠展示，一次仅显示一张。
        * 实现图片轮播效果。
    * **交互方式**：
        * 点击照片的左半部分：切换到上一张照片。
        * 点击照片的右半部分：切换到下一张照片。
* **底部：联系方式 (Contact Information)**
    * **布局**：多个社交媒体/联系方式的 Logo 水平横向排列。
    * **Logo 图片存储路径**：`C:\Users\Liweikai\Elijah-vvkk.github.io\Asset\icon\`
    * **交互 - 悬浮效果 (Hover Effect)**：
        * 当鼠标悬浮在任一 Logo 上时，显示一个提示框（Tooltip）。
        * 提示框内容：该 Logo 代表的联系方式名称及其对应的账号信息。
        * **账号信息**：
            * Bilibili: 南彦酱
            * 小红书: 414961428
            * 微信: elijahkkkkk
            * 邮箱: 723523592a@gmail.com
            * 微信公众号: 南彦酱
    * **交互 - 点击效果 (Click Effect)**：
        * **Bilibili**：点击 Logo 后，跳转到 Bilibili 主页。
            * 链接: `https://space.bilibili.com/238198339?spm_id_from=333.1387.0.0`
        * **小红书**：点击 Logo 后，跳转到小红书主页。
            * 链接: `https://www.xiaohongshu.com/user/profile/5b9a6ac012b8bf00012b5d94`
        * **邮箱**：点击 Logo 后，触发邮件客户端，自动填写收件人邮箱。
            * 邮箱地址: `723523592a@gmail.com` (mailto:723523592a@gmail.com)
        * **微信与微信公众号**：(通常无法直接跳转，考虑点击后显示二维码图片或提示用户搜索)

### 2. 右栏 (Right Column)

* **内容**：一段文字介绍。
    * 占位符文本示例："（在这里填写您的个人简介、专业领域、兴趣爱好等详细文字介绍）"

## 三、 我的经历 (My Experience)

此区域水平排布三个经历类别，每个类别内部的内容垂直展示。

* **类别**：`Home`, `Education`, `Career`
* **视觉连接**：在每个类别中，各个经历条目之间使用垂直线进行视觉连接。

### 1. Home (居住经历)

* **图片存储路径**：`C:\Users\Liweikai\Elijah-vvkk.github.io\Asset\city\`
* **条目布局规则**（适用于每个条目）：
    * 左侧：对应的图片。
    * 右侧：
        * 上方：大号字体显示地点名称。
        * 下方：小号字体显示关键词描述，各关键词之间使用短直线（或类似分隔符）连接。
* **内容与顺序**：
    1.  **昆明**
        * 图片：(指定昆明对应的图片文件名)
        * 关键词：家 - 冬 - 夏
    2.  **北京**
        * 图片：(指定北京对应的图片文件名)
        * 关键词：家 - 春 - 秋
    3.  **米兰**
        * 图片：(指定米兰对应的图片文件名)
        * 关键词：帕尔马火腿 - 气泡水
    4.  **圣保罗**
        * 图片：(指定圣保罗对应的图片文件名)
        * 关键词：夜之城

### 2. Education (教育经历)

* **图片存储路径**：`C:\Users\Liweikai\Elijah-vvkk.github.io\Asset\school\`
* **条目布局规则**：同 "Home" 区域。
* **内容与顺序**：
    1.  **云南师大附中**
        * 图片：(指定云南师大附中对应的图片文件名)
        * 关键词：西南联大 - 心灵家园
    2.  **北京大学 - 光华管理学院**
        * 图片：(指定北大光华对应的图片文件名)
        * 关键词：未来领导者 - 社会学 - 五四精神
    3.  **Bocconi University**
        * 图片：(指定Bocconi对应的图片文件名)
        * 关键词：CEMS - Innovation - Globalization

### 3. Career (职业经历)

* **图片存储路径**：`C:\Users\Liweikai\Elijah-vvkk.github.io\Asset\career\`
* **条目布局规则**：同 "Home" 区域。
* **内容与顺序**：
    1.  **Didi**
        * 图片：(指定Didi对应的图片文件名)
        * 关键词：EV - charging - strategy
    2.  **Porsche Consulting**
        * 图片：(指定Porsche Consulting对应的图片文件名)
        * 关键词：EV - charging - infrastructure
    3.  **MiraclePlus**
        * 图片：(指定MiraclePlus对应的图片文件名)
        * 关键词：Robotics - AI - venture

## 四、 我的作品 (My Works)

此区域以横向排列的“相框”样式展示一系列作品。

* **单个作品项布局规则**：
    * 顶部：作品图片。
    * 图片下方约四分之一处：覆盖一个半透明蒙版。
    * 蒙版上：显示作品名称。
* **交互**：点击作品图片或作品名称，均会打开对应的项目链接。

### 作品列表：

1.  **作品1**
    * **图片路径**：`C:\Users\Liweikai\Elijah-vvkk.github.io\Asset\work\Prompter.png`
    * **作品名称**：Prompter - 桌面AI提示词模板管理工具
    * **链接**：`https://kjwyqraohksf.sealoshzh.site/`
2.  **作品2**
    * **图片路径**：`C:\Users\Liweikai\Elijah-vvkk.github.io\Asset\work\视频.png`
    * **作品名称**：向阳而生 | 北大机车男的19-23，滇、川、新、青藏线
    * **链接**：`https://www.bilibili.com/video/BV1Gv421y7b8/`

---

**注意**:

* 请确保所有本地图片路径 (`C:\Users\Liweikai\...`) 在部署到 Github Pages 时会转换为项目内的相对路径 (例如 `Asset/photo/your_image.jpg`) 或可公开访问的 URL。Cursor 可能需要您手动调整或它会自动处理。
* 对于微信和微信公众号的点击效果，通常是在点击后弹出一个包含二维码的模态框或图片。
* “相框”样式和“垂直线连接”等视觉效果的具体实现方式，需要进一步与 Cursor 沟通或在 CSS 中定义。