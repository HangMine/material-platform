# Changelog

<a name="1.11.93-rc.0"></a>
## 1.11.93-rc.0 (2020-06-13)

### Added

- ✨ 修改rancher pipline [11011e1]
- ✨ SJS-730 [01b2fd9]
- ✨ fix SJS-749 CLOSED [10051c3]
- ✨ 修复邮箱校验失效的bug [f5c65c9]
- ✨ 修复目录复制粘贴失败的bug [1d5db2a]
- ✨ 目录分页功能 [74ae132]
- ✨ 修复面料预览图打不开的bug [6a76d12]
- ✨ 修复一些类型错误 [9abd9b2]
- ✨ 修复邀请的时候传漏了groupAppId [1311961]
- ✨ 客户端线稿鞋款下载功能 [03a9a16]
- ✨ 列表性能优化 [dd474e5]
- ✨ 模型edgeArr改造 [2c3630b]
- ✨ 商家主页迭代，新增多个分类面料入口 [bf0b6c3]
- ✨ 商城首页接口 [748adb9]
- ✨ 商城列表接口 [5dc6fa2]
- ✨ 商城首页banner [c65db2d]
- ✨ 修复面料库拖动不了到文件夹的bug [1df8f24]
- ✨ 商城导航栏功能 [6d5bc52]
- ✨ 面料商城导航栏组件 [f1984de]
- ✨ 更新d4增加钻石类型面料 [f2a6f5e]
- ✨ 增加oss是否加密的标识符 [4ec820b]

### Changed

- 💄 navbaritem的active状态样式修改 [e54f49d]
- 💄 fix bug SJS-756 修复面料商城样式问题 [a16d1bc]
- 💄 fix SJS-194 CLOSED [d3242aa]
- 🎨 FIX SJS-745 CLOSED 修改rule，显示必填项（*） [65572c9]
- 🎨 修改rule，显示必填项（*） [f924ba2]
- 💬 优化两个翻译文案 [fcd16da]
- 🚨 修复eslint报错 [b459880]
- 💄 修改sidebar label字体大小 [2d57abd]
- 💄 修改主页的sidebar和header [cecf534]
- 💄 修改sidebar [44bcd9a]
- 💄 去掉列表页搜索栏的最大长度限制 [e654659]
- 🎨 删除不必要的log， 修改文本 [a3545fe]
- 💬 补充翻译 [88094f1]
- 💄 解决材料商城搜索样式bug [ec53666]
- 🎨 FIX SJS-716 SJS-704 SJS-695 修改意见反馈验证表格方法，修改css [64e99f0]
- 💄 FIX SJS-718 CLOSED [dc03adc]
- 💄 FIX SJS-718 CLOSED [b60722f]
- 💄 修改提交成功组件文本显示 [4ecf79f]
- 💄 修改意见反馈tooltip颜色使其与其他统一 [d37b024]
- 💄 FIX SJS-709 CLOSED 修改scrollbar样式 [eb38d81]
- 💄 修改了意见反馈相关的文本显示 [374c896]
- 💄 优化面料商城样式 [f2d0649]
- 🎨 修改意见反馈图片上传功能，提交完整图片链接 [f0bbbc2]
- 💄 搜索筛选框样式调整 [e7ddba1]
- 🎨 修复线稿下载代码错误的bug [b503c41]
- 💄 fix SJS-695 CLOSED 添加padding, 使页面更加贴合UI设计 [5219891]
- 💄 优化创建ws和删除ws时的交互 [179f3bd]
- 💬 更新翻译 [802d202]
- 🎨 优化目录分隔符的逻辑 [06e0099]
- 💄 调整渲染页搜索栏旁的icon container的大小 [ae73320]
- 💄 更新目录系统样式 [2a4864b]
- 🎨 优化商家主页图片自适应 [d0ff8d4]
- 💄 修复设置弹框的ui问题 [70f3a44]
- 💄 弹出框的标题集体改成左对齐 [217d009]
- 💄 设置入库面料的系统文件夹图标 [c0a2e6e]
- 💄 修复新建文件按钮点击完有一个框的问题 [cfdd19b]
- 💄 修复商家主页ui问题 [8380c9c]
- 🎨 删除不需要的代码 [32189db]
- 💄 修复部分ui问题 [8b30953]
- 🚨 调整import/sort规则并且修复lint报错 [735f062]
- 💄 修改attachment中图片显示大小 [1581823]
- 🎨 修改商家主页(包括设计师视图)的header返回按钮 [da26757]
- 🎨 修改商家后台预览面料的调整路径 [37dcbab]
- 💄 修改了意见反馈在pc端的css格式 [9b85d55]
- 💄 调整商品详情页样式 [863d878]
- 💄 修复搜索筛选、gototop组件ui问题（样式优化） [42770f4]
- 🎨 接入意见反馈后端接口 [a68fa7c]
- 💄 修复UIbug [79f03c2]
- 💄 添加英语翻译 [be1bc3c]
- 🚨 去掉部分类型错误 [037c687]
- 🎨 添加提交成功组件, 添加qt url, 修改了组件逻辑 [e7b537f]
- 💄 增加icon, 成功页面的图片 [ed77277]
- 💄 解决UI问题 [1f145af]
- 💄 让搜索筛选框的内容居中 [5c55f47]
- ⚡ 进一步优化List的multi属性(取消ref) [a7a4845]
- ⚡ 优化ctrl键多选导致全体子组件update的问题 [a6e22f1]
- 🎨 整理三次优化后的代码结构，添加注释 [67933f1]
- ⚡ 优化目录列表拖拽操作性能 [6122747]
- ⚡ 优化file-list catalog的复制剪切拖拽操作性能 [c7982af]
- ⚡ 优化file-list catalog的点选和框选操作性能 [dc835cb]
- 🎨 修改客户端方法逻辑 [ff3871e]
- 🎨 修复面料上传时，4ddat文件路径没有导致面料到鞋模型上有问题 [6614ced]
- 🎨 面料详情图片浏览不包含模型 [4cdbd2b]
- 🔧 修改rancher的配置 [542b335]
- 🎨 修改客户端方法逻辑 [fdb898c]
- 🔧 增加qps环境 [c452c23]
- 🔧 更新rancher-pipline.yml [446bdbc]
- 🔧 去掉uat和prod对代理路径的无必要的配置 [75950d0]
- ⏪ 替换d4的操作修改 [3cd3baa]

### Removed

- 🔥 去除rancher master分支的deploy [8e67497]

### Fixed

- 🐛 补上商品管理竖杠的问题的缺漏处理的情况 [4bfa258]
- 🐛 修复路由跳转错误的bug [09f3746]
- 🐛 修复客户端打开线稿提示错误的bug [a47c151]
- 🐛 fix SJS-701 CLOSED [a445575]
- 🐛 fixbug SJS-726 修复2d线稿提示功能错误的bug [5e34519]
- 🐛 解决客户端线稿下载没有进度的问题 [c18478d]
- 🐛 fixbug SJS-442 [ea6d76d]
- 🐛 fix SJS-751 CLOSED [b16cf76]
- 🐛 fix SJS-751 CLOSED [792bce6]
- 🐛 fix SJS-680. 修复面料入口标签筛选没有读取英文关键字的bug [3453e42]
- 🐛 修复qt路由跳转商家后台商品管理页面错误问题 [fc97d95]
- 🐛 修复客户端线稿下载bug [7a7d13a]
- 🐛 增加商品管理页竖杠的显示条件判断 [06be588]
- 🐛 fixbug SJS-726 添加web2d线稿提示弹窗 [1b1886d]
- 🐛 修复列表页搜索栏placeholder没有国际化的问题 [1bbbdad]
- 🐛 fix SJS-732 CLOSED [e35dfd2]
- 🐛 修复客户端打开模型报错的bug [767dcd0]
- 🐛 修复多出workspace 的bug [d3de50d]
- 🐛 fix SJS-729. 修改商家后台goods-manager的路由结构 [bee7cb8]
- 🐛 增加商家主页搜索框提示语翻译 [fe3f9cb]
- 🐛 修复my design和my material 拼多了系统目录的bug [9e2e481]
- 🐛 修复qt判断错误的bug [c241d8c]
- 🐛 解决返回路由跳转错误的bug [1a1f438]
- 🐛 修复分页后切换catalog不能正常加载的bug [c0fb792]
- 🐛 fixbug SJS-740 [f289dc3]
- 🐛 修复hostData为null的bug [9fd6048]
- 🐛 修复商家后台部分页面跳到qt的bug [cb3deb2]
- 🐛 fixbug SJS-676 [81c5751]
- 🐛 fixbug SJS-727 [6a602dd]
- 🐛 fix SJS-736, SJS-735, SJS-721, SJS-715. 优化翻译，优化商家主页导航路径 [14d55b4]
- 🐛 优化面料Item控制栏样式 [b849166]
- 🐛 修复材料商城搜索错误的bug [57c9e7d]
- 🐛 fix bug SJS-713 解决上传入口bug [1f58661]
- 🐛 fix bug SJS-702 [5a9265f]
- 🐛 修复客户端打开鞋款执行错误的bug [e67912f]
- 🐛 解决客户端打开模型的bug [b9d6488]
- 🐛 fix SJS-703. 优化商家主页preview路由重定向问题 [d2cf020]
- 🐛 修复虚拟账号可以搜索ws的bug [1eb53f1]
- 🐛 修复客户端模型打开错误的bug [b048595]
- 🐛 选择国家改为选择国家/地区 [1d98932]
- 🐛 修复面料商品详情页跳转到商家首页的路径 [ff90fe7]
- 🐛 修复面料item色卡板按钮hover不高亮的bug [7d2af19]
- 🐛 fix SJS-697. 修复商家主页返回路径错误问题 [ba9cb0b]
- 🐛 fix SJS-662 CLOSED [1ccef8b]
- 🐛 fix SJS-570 CLOSED 去掉缩放滑块的动画 [acf8ab0]
- 🐛 修复商家面料点击色卡板跳转错误问题，去掉色卡板返回按钮 [9f39fca]
- 🐛 现在面料首页最多加载120个 [1a15e34]
- 🐛 use-callback修改阈值为0.9 [ebfe37f]
- 🐛 国家部分区分中英文 [8a93a3d]
- 🐛 fix SJS-670 CLOSED [917aaae]
- 🐛 解决没有触发滚动加载的bug [239f966]
- 🐛 fix SJS-654 CLOSED [03b20b7]
- 🐛 解决面料商城重复加载面料的bug [402b1de]
- 🐛 fix QLHG-53 CLOSED [0ba2d46]
- 🐛 fix SJS-693 SJS-692 CLOSED 更改提示语，以底层组件提示语为准 [ab55415]
- 🐛 SJS-667 [84aeb72]
- 🐛 修复进入不了文件夹的bug [8f9b072]
- 🐛 fix SJS-450. 修复面料色系的翻译问题 [2553a86]
- 🐛 修复商品管理页ui问题 [d923969]
- 🐛 修复商家主页图片点击没有正确筛选的问题 [c3f9127]
- 🐛 SJS-671 [a6232b6]
- 🐛 SJS-666 [e8db270]
- 🐛 SJS-649 [c8cadb3]
- 🐛 修复面料商城面料不是打开新窗口的bug [957497e]
- 🐛 屏蔽上传逻辑 [0d34501]
- 🐛 修复替换图片后不能显示新图片的bug [3a4f1dc]
- 🐛  [098bc48]
- 🐛  [4483628]
- 🐛 变更@all图片名称为at-all以解决uat无法显示此图片的问题（oss上@曾是关键字） [0a71d6a]
- 🐛 解决商城列表数据不对导致无限加载的bug [b945827]
- 🐛 尝试修复渲染页打开评论时打开了消息中心的弹窗问题 [9b972f5]
- 🐛 更改上传pdf和图片的右键图标 [7336e34]
- 🐛 修复面料详情富文本图片超出显示范围的bug [1db6551]
- 🐛 SJS-659 [6b09ed5]
- 🐛 修复小部分类型报错 [3f1c0a6]
- 🐛 让渲染页的搜索筛选改为全局搜索筛选 [b625f24]
- 🐛 修复setting出发其他setting变化导致刷新的bug [36ee220]
- 🐛 SJS-596 [38dc5ae]
- 🐛 SJS-650 [49ce429]
- 🐛 补充和修改几个翻译文本 [3bb6f87]
- 🐛 修改en.json Creator or Created &#x3D;&gt; Creator [a70bb76]
- 🐛 修复离线渲染拿不到最新版本鞋款ID的bug [143d5bf]
- 🐛 修复离线渲染拿不到最新版本鞋款ID的bug [ec05bba]
- 🐛 补充和修改几个翻译文本 [79107cd]
- ✏️  [81e27c4]
- 🐛 修复面料库无法筛选的bug [b8612fd]
- 🐛 修改en.json Creator or Created &#x3D;&gt; Creator [ec5fd4b]
- 🐛 修复100404没有国际化的问题 [e642439]
- ✏️ demension &#x3D;&gt; dimension [6bfc09c]
- 🐛 修复离线渲染获取的shoeid错误的bug [0b8c682]
- 🐛 修复客户端面料详情色卡版跳转错误的bug [4a6006e]
- 🐛 修复离线渲染获取的shoeid错误的bug [5985207]
- 🐛 修复客户端面料详情色卡版跳转错误的bug [7b83906]
- 🐛 修改渲染页Rendering &#x3D;&gt; Cloud Renderer [00dae14]
- 🐛 修改渲染页Rendering &#x3D;&gt; Cloud Renderer [f2c4758]
- 🐛 fix SJS-624 补充几个遗漏的翻译 [a1e1087]
- 🐛 fix SJS-624 补充几个遗漏的翻译 [0191201]
- 🐛 revert b5e003b67c9c12b85accec15d2496ae5e85311f4 SJS-450 [e6a2429]
- 🐛 修复保存图标缺失的bug [0d9a170]
- 🐛 修复上传没有传递 material type的bug [b85628d]
- 🐛 修复material info的一些报错以及放大可能失效的bug [4027f9b]
- 🐛 修复panel list里获取relateId接口传入0的bug [97905a7]
- 🐛 临时去掉debounce避免跨组件使用的时候导致某些值缺失的问题 [372abe0]
- 🐛 修复create board顶级目录不能拖动的bug [bb5d57e]
- 🐛 修复OSS_SIGN报错的bug [455915c]
- 🐛 修复上传时因传递id为空参数时，导致无法创建文件夹问题 [9aca1e7]
- 🐛 修复OSS_SIGN报错的bug [08d6591]
- 🐛 修复合并上传材质页面错误导致的问题 [75f13ad]

### Miscellaneous

-  Merge branch &#x27;test&#x27; into uat [bc7636f]
-  Merge branch &#x27;1.12.0&#x27; into test [cec26af]
-  Merge branch &#x27;1.12.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.12.0 [a001d51]
-  Merge branch &#x27;1.12.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.12.0 [3a98e73]
-  Merge branch &#x27;1.12.0&#x27; of 192.168.19.2:front-end/demon-home into 1.12.0 [3c580f0]
-  Merge branch &#x27;dannny&#x27; into 1.12.0 [36573ec]
-  Merge branch &#x27;1.12.0&#x27; into test [bef8f94]
-  Merge branch &#x27;1.12.0&#x27; of 192.168.19.2:front-end/demon-home into 1.12.0 [03c4d3e]
-  Merge branch &#x27;dannny&#x27; into 1.12.0 [4a4fcf4]
-  Merge branch &#x27;1.12.0&#x27; of 192.168.19.2:front-end/demon-home into 1.12.0 [745141f]
-  Merge remote-tracking branch &#x27;origin/1.12.0&#x27; into dannny [acd4024]
-  Merge branch &#x27;1.12.0&#x27; of 192.168.19.2:front-end/demon-home into 1.12.0 [9bcedb7]
-  Merge branch &#x27;yexy&#x27; into 1.12.0 [fde4fa6]
-  Merge branch &#x27;yexy&#x27; of http://192.168.19.2/front-end/demon-home into yexy [292a467]
-  Merge branch &#x27;dannny&#x27; into 1.12.0 [95e4c95]
-  Merge branch &#x27;1.12.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.12.0 [9896ac5]
-  Merge branch &#x27;1.12.0&#x27; into test [e922fc1]
-  Merge branch &#x27;test&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into test [4be9dc8]
-  Merge remote-tracking branch &#x27;origin/1.12.0&#x27; into dannny [ae61bca]
-  Merge branch &#x27;1.12.0&#x27; of http://192.168.19.2/front-end/demon-home into 1.12.0 [742b518]
-  Merge remote-tracking branch &#x27;origin/1.12.0&#x27; into yexy [959608e]
-  Merge remote-tracking branch &#x27;origin&#x27; into yexy [3cc2dbf]
-  Merge branch &#x27;1.12.0&#x27; into test [a8af6cf]
-  Merge branch &#x27;1.12.0&#x27; of 192.168.19.2:front-end/demon-home into 1.12.0 [b91ccd4]
-  Merge branch &#x27;1.12.0&#x27; into test [11dc05b]
-  Merge branch &#x27;1.12.0&#x27; of http://192.168.19.2/front-end/demon-home into yexy [75b1af6]
-  Merge branch &#x27;1.12.0&#x27; into test [c48d38d]
-  Merge branch &#x27;1.12.0&#x27; into test [df67685]
-  Merge branch &#x27;1.12.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.12.0 [c0f3e89]
-  Merge branch &#x27;1.12.0&#x27; into test [0102ab2]
-  Merge branch &#x27;1.12.0&#x27; of 192.168.19.2:front-end/demon-home into 1.12.0 [3683cfb]
-  Merge branch &#x27;1.12.0&#x27; into test [4cacdd1]
-  Merge commit &#x27;f289dc3ebc7fd979bd550104f2151024b2709848&#x27; into test [4588ca6]
-  Merge remote-tracking branch &#x27;origin/1.12.0&#x27; into dannny [675641b]
-  Merge branch &#x27;1.12.0&#x27; of http://192.168.19.2/front-end/demon-home into yexy [c38ed00]
-  Merge branch &#x27;1.12.0&#x27; into test [376c669]
-  Merge branch &#x27;1.12.0&#x27; into test [7d0984c]
-  Merge remote-tracking branch &#x27;origin/1.12.0&#x27; into dannny [857e3b3]
-  Merge branch &#x27;yexy&#x27; into 1.12.0 [e390cf8]
-  Merge branch &#x27;1.12.0&#x27; into test [a347141]
-  Merge branch &#x27;1.12.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.12.0 [e5c2bc1]
-  Merge branch &#x27;1.12.0&#x27; of http://192.168.19.2/front-end/demon-home into yexy [9eed9b3]
-  Merge branch &#x27;dannny&#x27; into 1.12.0 [8647b79]
-  Merge branch &#x27;1.12.0&#x27; of http://192.168.19.2/front-end/demon-home into yexy [f63fa6e]
-  :lipstick&quot; FIX SJS-709 CLOSED 修改scrollbar样式 [d492a34]
-  Merge branch &#x27;1.12.0&#x27; into test [5f003fb]
-  Merge remote-tracking branch &#x27;origin/1.12.0&#x27; into dannny [707dc2c]
-  Merge branch &#x27;1.12.0&#x27; of http://192.168.19.2/front-end/demon-home into yexy [62ba5fd]
-  Merge branch &#x27;1.12.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.12.0 [2ca2814]
-  Merge branch &#x27;dannny&#x27; into 1.12.0 [9d00ab9]
-  Merge branch &#x27;1.12.0&#x27; of http://192.168.19.2/front-end/demon-home into yexy [8a1b5c3]
-  Merge branch &#x27;1.12.0&#x27; of 192.168.19.2:front-end/demon-home into 1.12.0 [c27089b]
-  Merge branch &#x27;1.12.0&#x27; into test [a837ef3]
-  Merge branch &#x27;1.12.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.12.0 [970ff0a]
-  Merge branch &#x27;1.12.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.12.0 [4b5bfd2]
-  Merge remote-tracking branch &#x27;origin/1.12.0&#x27; into dannny [5a62682]
-  Merge branch &#x27;1.12.0&#x27; of 192.168.19.2:front-end/demon-home into 1.12.0 [23a2415]
-  Merge remote-tracking branch &#x27;origin/1.12.0&#x27; into dannny [cef7b9d]
-  Merge branch &#x27;1.12.0&#x27; of http://192.168.19.2/front-end/demon-home into yexy [7e48689]
-  Merge branch &#x27;1.12.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.12.0 [c9eaa25]
-  Merge branch &#x27;1.12.0&#x27; into test [519b144]
- 🔀 合并1.12.0到dannny [b68bc86]
-  Merge branch &#x27;1.12.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.12.0 [7aec343]
-  Merge remote-tracking branch &#x27;origin/1.12.0&#x27; into test [6f12400]
-  Merge branch &#x27;1.12.0&#x27; of 192.168.19.2:front-end/demon-home into 1.12.0 [55a7f70]
-  Merge branch &#x27;1.12.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.12.0 [965b0fb]
-  Merge branch &#x27;1.12.0&#x27; of 192.168.19.2:front-end/demon-home into 1.12.0 [3e2822b]
-  Merge branch &#x27;1.12.0&#x27; of http://192.168.19.2/front-end/demon-home into yexy [5af3f0d]
-  Merge branch &#x27;1.12.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.12.0 [19d92bd]
-  Merge branch &#x27;1.12.0&#x27; of 192.168.19.2:front-end/demon-home into 1.12.0 [ac0ab4a]
-  Merge branch &#x27;1.12.0&#x27; into test [ef0f7d5]
- 🔀 合并1.12.0 [40e427e]
-  Merge branch &#x27;1.12.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.12.0 [b84ac35]
-  Merge branch &#x27;1.12.0&#x27; into test [938d78e]
-  Merge branch &#x27;dannny&#x27; into 1.12.0 [5b5d36c]
-  Merge remote-tracking branch &#x27;origin/1.12.0&#x27; into dannny [6eac02e]
-  Merge branch &#x27;1.12.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.12.0 [4054f8c]
-  Merge branch &#x27;1.12.0&#x27; of http://192.168.19.2/front-end/demon-home into yexy [1cb4ff3]
-  Merge branch &#x27;dannny&#x27; into 1.12.0 [b51f00c]
-  Merge branch &#x27;1.12.0&#x27; of 192.168.19.2:front-end/demon-home into 1.12.0 [7381212]
-  Merge branch &#x27;1.12.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.12.0 [c73a807]
- 📝 新增备案号 [ea12c0c]
-  Merge branch &#x27;afei-cata&#x27; into 1.12.0 [45bd0aa]
-  Merge branch &#x27;1.12.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.12.0 [a81c63f]
-  Merge branch &#x27;1.11.0&#x27; into 1.12.0 [fa41a61]
-  Merge branch &#x27;uat&#x27; [d76b2a7]
-  Merge branch &#x27;1.11.0&#x27; into uat [aa312ee]
-  Merge branch &#x27;1.12.0&#x27; into test [e63453b]
-  Merge branch &#x27;1.11.0&#x27; into 1.12.0 [e2fae9b]
-  Merge branch &#x27;1.12.0&#x27; into dannny [da6bfaa]
-  Merge branch &#x27;1.12.0&#x27; into test [a889773]
-  Merge branch &#x27;1.11.0&#x27; into 1.12.0 [d7ce75a]
-  Merge branch &#x27;1.11.0&#x27; into uat [b59496d]
-  Merge branch &#x27;1.11.0&#x27; of 192.168.19.2:front-end/demon-home into 1.11.0 [c47e596]
-  Merge branch &#x27;uat&#x27; into 1.11.0 [cacdd10]
-  Merge branch &#x27;1.12.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.12.0 [591e7a7]
-  Merge branch &#x27;1.12.0&#x27; of 192.168.19.2:front-end/demon-home into 1.12.0 [ab0be97]
-  Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into test [2f9b7a6]
-  Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into test [1f88331]
-  Merge branch &#x27;uat&#x27; [fa2d366]
-  Merge branch &#x27;test&#x27; into uat [7e1915a]
-  Merge branch &#x27;1.11.0&#x27; into test [9bd3f96]
-  Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into test [87ebe1a]
-  Merge branch &#x27;test&#x27; of gitlab.4dshoetech.local:front-end/demon-home into test [0ab3dd2]
- 🔀 处理合并问题 [6b09668]
-  Update .rancher-pipeline.yml file [7491d65]
-  Merge branch &#x27;1.11.0&#x27; into uat [bd067b0]
-  Update .rancher-pipeline.yml file [e9acb86]
-  Update .rancher-pipeline.yml file [a0eff83]
-  Merge remote-tracking branch &#x27;origin/1.8.0&#x27; [d15e5c3]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.local:front-end/demon-home [b0c8d5e]
-  Merge branch &#x27;uat&#x27; [76f1818]
-  Merge branch &#x27;uat&#x27; [99db1e3]
-  Merge branch &#x27;uat&#x27; [fd31c47]
-  Merge branch &#x27;1.7.0&#x27; [2358ec1]
- 🔀 合并分支 [7498939]
-  Merge branch &#x27;1.5.0&#x27; [f615f34]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.local:front-end/demon-home [6af4d01]
-  Merge branch &#x27;1.5.0&#x27; [89f1399]
-  Update .rancher-pipeline.yml file [27ddd95]
-  Update .rancher-pipeline.yml file [b7dc2ec]
-  Update .rancher-pipeline.yml file [3f1c72d]
-  Merge branch &#x27;1.5.0&#x27; [f6ac120]
-  Merge branch &#x27;1.5.0&#x27; [9677c3f]
- 🔀 合并分支 [4d2af2b]
- 🔀 合并分支 [dff9ab9]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [c785356]
-  Update .rancher-pipeline.yml file [789dade]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [480e2af]
- 🔀 合并分支 [9a6ba96]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [a1150d7]
-  Update .rancher-pipeline.yml file [1e59f5b]
-  Merge remote-tracking branch &#x27;origin/uat&#x27; [a8ce55b]
-  Merge branch &#x27;1.2.0&#x27; [d7b0242]
-  Merge branch &#x27;1.2.0&#x27; [7dfafd6]
-  Merge branch &#x27;1.2.0&#x27; [c8b1d05]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [4936e30]
-  Update .rancher-pipeline.yml file [9fce6c3]


<a name="1.11.93-alpha.0"></a>
## 1.11.93-alpha.0 (2020-06-04)

### Added

- ✨ 修复获取公司信息逻辑错误导致的报错 [2675b33]
- ✨ 将钢笔strokeCap改为round [0cd638b]
- ✨ 添加面料详情部分中英文翻译 [45098d9]
- ✨ 更新d4 [6900f16]

### Changed

- 🎨 优化error-handler的showError文案选择逻辑 [fb86ccc]
- 🎨 移除几个废弃文件，添加图片import的.d.ts声明 [8452861]
- 🎨 删除没有用的代码 [3a41c1c]
- ⬆️ 更新d4版本 [a0fa01e]
- 🎨 优化面料详情代码 [63e02be]
- 🎨 修复上传面料进度条异常问题 [291ad42]
- 💄 校准了标注模式的鼠标中心点定位 [5a70bea]
- 🎨 优化登录时邀请无效的提示 [d46133f]
- 🎨 补充商家主页翻译，以及两个错误提示语翻译 [23b8c27]
- 💬 更新国际化 [039e790]
- 💄 修复面料编辑页样式错误 [5aaf2d2]
- 🚨 修复eslint的部分错误 [25bad40]
- 💄 修改rte iconfont的icon [e71c386]
- 💄 解决商品详情预览组件部分样式错误的bug [40ae935]
- 💄 调整面料详情中的UI [523a1a5]
- 🎨 获取面料详情中模型展示的接口数据结构调整，调整数据处理的方式 [a5c7bff]

### Removed

- 🔇 去掉不必要的console [c386735]

### Fixed

- 🐛 修复面料上传没有带4ddat文件路径，导致面料渲染到模型上异常 [947f976]
- 🐛 revert b5e003b67c9c12b85accec15d2496ae5e85311f4 SJS-450 [e68f6fa]
- 🐛 修复获取公司信息没有更新的bug [15292ef]
- 🐛 KHD-279 编辑鞋子详情页类型信息，保存后没即时刷新，重新打开和所编辑的信息不对,出现非类型字段 [5cd308b]
- 🐛 SJS-482【面料详情】UI问题汇总 [d3c984a]
- 🐛 SJS-535 详情页上传图片预览时，未能实现点击哪个图片查看哪个图片的功能 [ab6e15a]
- 🐛 修复上传或编辑附件后，查看附件时要刷过两轮才显示的问题 [0396aa3]
- 🐛 修复商品详情客户端下的兼容问题 [714c3ed]
- 🐛 fix SJS-450 修复面料选择色系后显示仍然为英文的bug [b5e003b]
- 🐛 解决部分国际化问题 [451733a]
- 🐛 修复删除标注失效的bug [63225b6]
- 🐛 fix SJS-191 CLOSED 修复云渲染弹窗英文模式下一个小样式问题 [4908200]
- 🐛 fix SJS-532 [6ed2431]
- 🐛 fix SJS-528 [10c6a93]
- 🐛 修复面料详情页预览图片的bug [a4cd065]
- 🐛 修复富文本的样式以及上传问题 [5cddd9b]
- 🐛 fix SJS-401 CLOSED 修复面料商城找相似页面第一款商品不能放大预览的bug [a24fc14]
- 🐛 fix bug SJS-540 商品详情页图片组件bug [8af3f97]
- 🐛 fix bug SJS#543 [8356a71]
- 🐛 修复渲染页是空白的问题 [bba69c2]
- 🐛 fix bug #SJS-498 材料商城查看面料详情应为单击进入 [6160437]
- 🐛 无限加载做容错处理 [39193a5]
- 🐛 给渲染页增加搜索筛选功能 [4775758]
- 🐛 fix SJS-528 [14bbfab]
- 🐛 修复一些样式问题 [45628fa]
- 🐛 fix SJS-521 [27aa6eb]
- 🐛 修复材质详情页编辑报错，渲染页放大查看材质悬浮球预览图无反应 [d6a38d9]
- 🐛 进入标注模式后底下的文字显示不匹配的问题 [e687c50]
- 🐛 面料详情的附件功能仅上传者可编辑 [eb95a06]
- 🐛 商品详情限制图片视频宽度为100% [5b6ef5a]
- 🐛 修复查看历史版本，看到缩略图失败的版本，后面几点的版本缩略图都是失败的问题 [1a5a0bd]
- 🐛 解决商品详情样式bug [83c69e9]
- 🐛 修复面料详情页标签和花纹不要允许空格键入的问题 [c9f7f5f]
- 🐛 修复UI提的问题 [79dd00e]
- 🐛 解决商品预览模型样式错误的bug [412b9f8]
- 🐛 fix SJS-415 [d8fa064]
- 🐛 fix SJS-393 [34bb788]
- 🐛 fix SJS-398 [6657844]
- 🐛 fix SJS-405 [8b4114a]
- 🐛 修复company类型描述错误的bug [0cbbb78]
- 🐛 解决商品详情预览页色卡板接口错误的bug [5cc10d9]
- 🐛 fix SJS-400 [1b15b5e]
- 🐛 解决商家后台活动tab显示错误的bug [9284391]
- 🐛 fix SJS-502 [e277afe]
- 🐛 修复面料库可以上传图片的bug [e64d7e5]
- 🐛 SJS-522 [4ae8983]
- 🐛 更新离线渲染模型图 [f1d7aa9]
- 🐛 SJS-513 [80a7572]
- 🐛 修复dialog-injector缺少closeWith的bug [9587d82]
- 🐛 解决无法上传视频的bug [8f3529f]
- 🐛 修复部分搜索筛选框的bug [f572c9f]
- 🐛 修复商品详情色卡板样式错误的bug [589a618]
- 🐛 修复商家后台面料列表排序错误的bug [9c62afc]
- 🐛 调整i18n的引入位置 [a43edf7]
- 🐛 解决没有keepalive保存面料商城页的bug [ccb0c4b]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into dannny [f2bf74f]
-  Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into dannny [d8fe55c]
-  Merge branch &#x27;1.11.0&#x27; into dannny [00cde79]
-  Merge branch &#x27;1.11.0&#x27; of 192.168.19.2:front-end/demon-home into 1.11.0 [3be5413]
-  Merge branch &#x27;1.11.0&#x27; of 192.168.19.2:front-end/demon-home into 1.11.0 [ca71309]
-  Merge branch &#x27;dannny&#x27; into 1.11.0 [ea165b3]
-  Merge branch &#x27;1.11.0&#x27; of 192.168.19.2:front-end/demon-home into 1.11.0 [49ab4c7]
-  Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into dannny [f993b48]
-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [15b004c]
-  Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into dannny [e874f9e]
-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [e90ffc6]
-  Merge branch &#x27;stephen&#x27; into 1.11.0 [8f925ab]
-  Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into dannny [7de961f]
-  Merge branch &#x27;1.11.0&#x27; of 192.168.19.2:front-end/demon-home into 1.11.0 [505fa49]
-  Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into dannny [50ba7e9]
-  Merge branch &#x27;1.11.0&#x27; of 192.168.19.2:front-end/demon-home into 1.11.0 [cf7aa43]
-  Merge branch &#x27;1.11.0&#x27; of 192.168.19.2:front-end/demon-home into 1.11.0 [c5ea6e0]
-  Merge branches &#x27;1.11.0&#x27; and &#x27;1.11.0&#x27; of 192.168.19.2:front-end/demon-home into 1.11.0 [b7479dd]
-  Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into dannny [bc546f2]
-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [35516be]
-  Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into dannny [94a217b]
-  Merge branch &#x27;dannny&#x27; into 1.11.0 [1967384]


<a name="1.11.92-alpha.0"></a>
## 1.11.92-alpha.0 (2020-05-28)

### Added

- ✨ 客户端商品详情弹窗 [8f8b58e]
- ✨ 客户端商品详情弹窗 [b4d27cf]
- ✨ 优化富文本的逻辑 [962b64b]

### Changed

- 💄 修改面料详情中的UI问题 [71bb5f9]

### Removed

- 🔥 删除面料部分文件 [3d3c64d]

### Fixed

- 🐛 修复文件路径找不到的问题 [e8cd6c0]
- 🐛 修复面料详情滚动条问题 [edc7da5]
- 🐛 获取公司信息接口修改为从登录、app1中获取 [844aeb8]
- 🐛 修复打开library商品详情的bug [e5d3fa7]
- 🐛 解决library打不开商品详情的bug [0f560e3]
- 🐛 解决发布功能错误的bug [5f0d88b]
- 🐛 解决标签显示错误的bug [e9db6c6]
- 🐛 修复图片视频上传bug [cb42a63]
- 🐛 修复商家信息公司资质初始化错误的bug [13db64b]
- 🐛 修复商家信息和商家主页初始化异常的bug [94d67e3]
- 🐛 修复编辑商品时报错的bug [169c933]
- 🐛 修复面料详情显示错误的bug [e8014d6]
- 🐛 修复无货标签显示错误的bug [bc8cf05]
- 🐛 修复本地文件无法在上传时预览的问题 [3ae55a9]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into dannny [5796bd4]
-  Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into dannny [c8015d8]
-  Merge branch &#x27;stephen&#x27; into 1.11.0 [49bae91]
-  Merge branch &#x27;stephen&#x27; into 1.11.0 [67f0390]
-  Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into dannny [f8eac24]
-  Merge branch &#x27;stephen&#x27; into 1.11.0 [fbdb3d7]


<a name="1.11.90-alpha.0"></a>
## 1.11.90-alpha.0 (2020-05-27)

### Changed

- 💄 调整面料轮播图中的样式 [a2cee7d]

### Fixed

- 🐛 删除供应商面料详情页的导航 [61fc418]

### Miscellaneous

-  Merge branch &#x27;stephen&#x27; into 1.11.0 [dcdd440]
-  Merge branch &#x27;1.11.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.11.0 [8eedef9]


<a name="1.11.89-alpha.0"></a>
## 1.11.89-alpha.0 (2020-05-27)

### Added

- ✨ 供应商的面料详情页 [88565a5]

### Changed

- 🎨 加一个临时的商家面料返回导航 [0a69b59]

### Fixed

- 🐛 修复编辑面料选择模型错误的bug [66186db]
- 🐛 修复编辑商品图片逻辑 [050ff9a]

### Miscellaneous

- 🔀 Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into dannny [659bb91]
- 🔀 合并 origin/1.11.0 [b9fde43]


<a name="1.11.88-alpha.0"></a>
## 1.11.88-alpha.0 (2020-05-27)

### Added

- ✨ 修改设计师端浏览的商家主页 [74fc75b]
- ✨ 完善商家主页的样式和交互 [90d8154]
- ✨ 开发商家主页功能 [dfe745b]
- ✨ 完成商家资质编辑上传和预览 [4c20d57]
- ✨ 新增商家信息编辑功能 [28af80c]
- ✨ 编辑面料页面中，模型没预览时截图功能 [c6cfd50]

### Changed

- 🎨 增加资质上传数量限制，增加删除操作，优化样式 [8430d76]
- 🎨 优化商家信息页样式，提取国际化 [ee22a12]
- 🎨 修改商家主页编辑状态的上传弹窗 [c6646a4]
- 🎨 修改设计师视角的商家搜索框，调整一些样式和交互细节 [c4f6fa0]
- 🎨 调整商家后台页面结构和路由 [132e132]
- ⬆️ loadModel补上了重置位置，渲染阴影灯光和背景修改为与pc一致 [2918aa7]
- 🚨 修复一些eslint报错 [c3344f0]

### Miscellaneous

-  Merge branch &#x27;stephen&#x27; into 1.11.0 [dcd612a]


<a name="1.11.87-alpha.0"></a>
## 1.11.87-alpha.0 (2020-05-27)

### Added

- ✨ 富文本功能优化 [7f4b131]

### Changed

- 💄 调整图片的边距 [91022f7]
- 💄 调整快捷方式的图标 [b1b0ea4]

### Fixed

- 🐛 修复多个批注历史记录没有清除的bug [0d4192c]


<a name="1.11.86-alpha.0"></a>
## 1.11.86-alpha.0 (2020-05-27)

### Added

- ✨ 添加面料编辑页中，模型选择后能截图的功能 [5140ad6]
- ✨ 商品详情 [5c26d96]
- ✨ 改造tagsauto组件 [7a20a57]

### Changed

- 🎨 对接搜索筛选接口，修复部分相关的问题 [e7f2c90]
- 🎨 面料轮播图添加carouselSetActiveItem方法，滚动到指定的index [752b86b]
- 🎨 根据最新的D4，上传面料的逻辑 [46f9d66]
- ⬆️ 更新D4: 重构上传面料的逻辑 [6004c8d]
- 💄 调整面料轮播图中的组件交互样式；创建放大镜icon组件； [6d1b8c9]
- 🎨 修复保存面料编辑内容时，部分数据会丢失的问题 [de48c7a]
- 🎨 简化上传面料的代码逻辑（渲染部件接口异常，待完善） [5054b69]
- 🎨 调整面料上传的路由配置 [c207b18]

### Fixed

- 🐛 解决字典组件报错的bug [228c08c]
- 🐛 修复面料预览图bug [a5bd450]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [65b2934]
-  Merge branch &#x27;dannny&#x27; into 1.11.0 [6605f91]
-  Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into dannny [a77a723]
- 🚧 商品详情页预览图片 [5b91615]
-  Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into stephen [0e09ac1]
-  Merge branch &#x27;stephen-upload-material&#x27; into stephen [f28c39f]


<a name="1.11.85-alpha.0"></a>
## 1.11.85-alpha.0 (2020-05-25)

### Added

- ✨ 新增快捷方式的二进制文件支持（目前仅支持图片和pdf，图标待补） [da24f6d]
- ✨ 面料编辑中视频上传和视频浏览的功能 [e74bdab]
- ✨ 新增列表页搜索筛选功能，等待接口完成后对接 [6f27a99]
- ✨ 对接上传选择面料模型和面料图片附件的接口 [1be2e0d]
- ✨ 富文本上传功能 [bd99783]
- ✨ 创建上传图片和浏览上传图片列表组件 [ac7d41b]
- ✨ 商品编辑部分页面 [4003e8f]
- ✨ 创建选择框类型的通用组件 [189af73]
- ✨ 创建鞋模型纯浏览的组件 [d988779]
- ✨ 优化bezier功能，增加delete/backtrace删除点和esc取消选择 [0fb2709]
- ✨ get-allow方法 [032b1eb]
- ✨ 富文本组件 [29a8dbf]

### Changed

- 💄 调整上传面料附件组件的样式 [1f574a6]
- 🎨 创建鞋款组件加载进度的组件 [d97138d]
- 🍱 更新图标库 [8db9f9f]
- 🚨 修复一些eslint的错误 [ac1e798]
- 🎨 调整面料详情中的轮播交互 [6a003dc]
- 🎨 后端改了鞋款详情getShoeInfo里面返回的tags格式，配合修改展示，以及替换增加删除tags操作的组件 [a79de30]
- 🎨 增加搜索筛选框内容过多时的省略 [53b0029]
- 💄 调整选择框组件的ui交互(1) [e8afe2c]
- 💄 调整选择框组件的ui交互 [cceacee]
- 🎨 优化面料商-我的主页公司类型的字典接口，支持国际化 [5cbd78e]

### Fixed

- 🐛 修复鞋款相册版本号错误的bug [fc4131a]
- 🐛 修复筛选器props报错问题 [6cdc371]
- 🐛 设置弹窗的修改文案添加中文翻译 [327da66]
- ✏️ 修复no script标签里的错字 [939e816]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.11.0 [59e97e9]
-  Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into stephen [9d4b28c]
-  Merge branch &#x27;uat&#x27; into 1.11.0 [02daf59]
-  Merge branch &#x27;uat&#x27; into 1.11.0 [a9435a5]
-  Merge branch &#x27;uat&#x27; into 1.11.0 [64f4c2d]
- 🚧 面料编辑图片视频模型 [62e9ab1]
-  Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into dannny [16aa870]
- 🚧 商品编辑对接接口 [c1281ff]
-  Merge branch &#x27;onion2&#x27; into 1.11.0 [5bd8425]
-  Merge branch &#x27;stephen&#x27; into 1.11.0 [f90cb07]
-  Merge branch &#x27;onion2&#x27; into 1.11.0 [74eb484]
- 🚧 面料商品编辑页面 [f061409]
-  Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into stephen [036af47]
-  Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into dannny [65ed1ec]
- 🔀 Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into dannny [14e5b43]
-  Merge branch &#x27;uat-fix&#x27; into 1.11.0 [13bad60]


<a name="1.11.84-alpha.0"></a>
## 1.11.84-alpha.0 (2020-05-24)

### Fixed

- 🐛 修复文本标注没有自动聚焦的bug [e5f57ea]
- 🐛 修复回退没有记录delete的bug [6be184c]

### Miscellaneous

-  Merge branch &#x27;uat&#x27; into 1.11.0 [02daf59]


<a name="1.11.83-alpha.0"></a>
## 1.11.83-alpha.0 (2020-05-24)

### Added

- ✨ 新增快捷方式的二进制文件支持（目前仅支持图片和pdf，图标待补） [da24f6d]
- ✨ 面料编辑中视频上传和视频浏览的功能 [e74bdab]
- ✨ 新增列表页搜索筛选功能，等待接口完成后对接 [6f27a99]
- ✨ 对接上传选择面料模型和面料图片附件的接口 [1be2e0d]
- ✨ 富文本上传功能 [bd99783]
- ✨ 创建上传图片和浏览上传图片列表组件 [ac7d41b]
- ✨ 创建选择框类型的通用组件 [189af73]
- ✨ 创建鞋模型纯浏览的组件 [d988779]
- ✨ 优化bezier功能，增加delete/backtrace删除点和esc取消选择 [0fb2709]
- ✨ get-allow方法 [032b1eb]
- ✨ 富文本组件 [29a8dbf]

### Changed

- 🚨 修复一些eslint的错误 [ac1e798]
- 🎨 调整面料详情中的轮播交互 [6a003dc]
- 🎨 后端改了鞋款详情getShoeInfo里面返回的tags格式，配合修改展示，以及替换增加删除tags操作的组件 [a79de30]
- 🎨 增加搜索筛选框内容过多时的省略 [53b0029]
- 💄 调整选择框组件的ui交互(1) [e8afe2c]
- 💄 调整选择框组件的ui交互 [cceacee]
- 🎨 优化面料商-我的主页公司类型的字典接口，支持国际化 [5cbd78e]

### Fixed

- 🐛 修复筛选器props报错问题 [6cdc371]
- 🐛 设置弹窗的修改文案添加中文翻译 [327da66]
- ✏️ 修复no script标签里的错字 [939e816]

### Miscellaneous

-  Merge branch &#x27;uat&#x27; into 1.11.0 [a9435a5]
-  Merge branch &#x27;uat&#x27; into 1.11.0 [64f4c2d]
-  Merge branch &#x27;onion2&#x27; into 1.11.0 [5bd8425]
-  Merge branch &#x27;stephen&#x27; into 1.11.0 [f90cb07]
-  Merge branch &#x27;onion2&#x27; into 1.11.0 [74eb484]
-  Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into stephen [036af47]
-  Merge branch &#x27;uat-fix&#x27; into 1.11.0 [13bad60]


<a name="1.11.77-rc.2"></a>
## 1.11.77-rc.2 (2020-05-24)

### Added

- ✨ 优化钢笔工具的交互，并且将去点和选择点的交互反转 [0fb9670]
- ✨ 修复批注工具在历史版本预览页的各自bug [be9f380]
- ✨ 修复钢笔工具的一些细节问题以及增加回退的功能 [d0b73ff]
- ✨ 优化bezier功能，增加delete/backtrace删除点和esc取消选择 [8046fac]


<a name="1.11.82-alpha.0"></a>
## 1.11.82-alpha.0 (2020-05-22)

### Added

- ✨ 新增快捷方式的二进制文件支持（目前仅支持图片和pdf，图标待补） [da24f6d]
- ✨ 面料编辑中视频上传和视频浏览的功能 [e74bdab]
- ✨ 对接上传选择面料模型和面料图片附件的接口 [1be2e0d]
- ✨ 创建上传图片和浏览上传图片列表组件 [ac7d41b]
- ✨ 创建选择框类型的通用组件 [189af73]
- ✨ 创建鞋模型纯浏览的组件 [d988779]

### Changed

- 🎨 调整面料详情中的轮播交互 [6a003dc]
- 💄 调整选择框组件的ui交互(1) [e8afe2c]
- 💄 调整选择框组件的ui交互 [cceacee]

### Miscellaneous

-  Merge branch &#x27;onion2&#x27; into 1.11.0 [5bd8425]
-  Merge branch &#x27;stephen&#x27; into 1.11.0 [f90cb07]
-  Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into stephen [036af47]


<a name="1.11.81-alpha.0"></a>
## 1.11.81-alpha.0 (2020-05-22)

### Changed

- 🎨 后端改了鞋款详情getShoeInfo里面返回的tags格式，配合修改展示，以及替换增加删除tags操作的组件 [a79de30]


<a name="1.11.80-alpha.0"></a>
## 1.11.80-alpha.0 (2020-05-22)

### Added

- ✨ 新增列表页搜索筛选功能，等待接口完成后对接 [6f27a99]
- ✨ 富文本上传功能 [bd99783]

### Changed

- 🎨 增加搜索筛选框内容过多时的省略 [53b0029]

### Fixed

- 🐛 修复筛选器props报错问题 [6cdc371]
- ✏️ 修复no script标签里的错字 [939e816]

### Miscellaneous

-  Merge branch &#x27;onion2&#x27; into 1.11.0 [74eb484]


<a name="1.11.79-alpha.0"></a>
## 1.11.79-alpha.0 (2020-05-20)

### Added

- ✨ 优化bezier功能，增加delete/backtrace删除点和esc取消选择 [0fb2709]


<a name="1.11.78-alpha.0"></a>
## 1.11.78-alpha.0 (2020-05-20)

### Added

- ✨ get-allow方法 [032b1eb]
- ✨ 富文本组件 [29a8dbf]

### Changed

- 🎨 优化面料商-我的主页公司类型的字典接口，支持国际化 [5cbd78e]

### Fixed

- 🐛 设置弹窗的修改文案添加中文翻译 [327da66]

### Miscellaneous

-  Merge branch &#x27;uat-fix&#x27; into 1.11.0 [13bad60]


<a name="1.11.77-rc.1"></a>
## 1.11.77-rc.1 (2020-05-20)

### Changed

- 🚨 修复eslint的报错 [4a10f7c]

### Fixed

- 🐛 更新d4：改暗默认材质 [66160e2]
- 🚑 修复标准顺序倒序的问题 [df52ccc]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; into uat [89a7586]


<a name="1.11.77-rc.0"></a>
## 1.11.77-rc.0 (2020-05-20)

### Fixed

- 🐛 修改商家后台面料详情&#x27;保存&#x27;按钮为&#x27;收藏&#x27; [0457a1d]
- 🐛 fix en.json重复key的问题 [33ddfde]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; into uat [dd62cc1]
-  Merge branch &#x27;1.11.0&#x27; into uat [7f903a7]
-  Merge branch &#x27;1.11.0&#x27; into uat [9630ab8]
-  Merge branch &#x27;1.11.0&#x27; into uat [7949cc1]
-  Merge branch &#x27;1.11.0&#x27; into uat [252cc83]
-  Merge branch &#x27;1.11.0&#x27; into uat [06fbdab]


<a name="1.11.77-alpha.0"></a>
## 1.11.77-alpha.0 (2020-05-20)

### Changed

- 🎨 修复标注布局样式的bug [6c65c9b]

### Fixed

- 🐛 修复一些布局的bug [dbfff54]


<a name="1.11.76-rc.0"></a>
## 1.11.76-rc.0 (2020-05-19)

### Added

- ✨ 尝试修复标注点数字全部一样的bug [b52feb4]

### Changed

- 🚨 修复一些eslint的错误 [c53e582]
- 🎨 调整面料上传的路由配置 [6496ed5]

### Fixed

- 🐛 修复面料上传和更新的时间有误的问题 [768f62f]
- 🐛 修复打开系统初始化的面料的面料详情页报错的问题 [90c74d8]
- 🐛 修复客户端鞋款相册权限错误的bug [f47f8d4]
- 🐛 修复进入标注模式后底下的文字显示没有按UI的设计图的问题 [075cf81]
- 🐛 修复渲染页切换高清版没有发送请求的问题（暂时隐藏该功能入口） [7ba2a0f]
- 🐛 修复上传面料头部栏缺失的问题 [00f7b69]
- 🐛 修改商家后台面料详情&#x27;保存&#x27;按钮为&#x27;收藏&#x27; [0457a1d]
- 🐛 fix en.json重复key的问题 [33ddfde]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; into uat [9630ab8]
-  Merge branch &#x27;1.11.0&#x27; into uat [7949cc1]
-  Merge branch &#x27;stephen&#x27; into 1.11.0 [b3b3832]
-  Merge branch &#x27;1.11.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.11.0 [20f0e37]
-  Merge branch &#x27;1.11.0&#x27; into uat [252cc83]
-  Merge branch &#x27;1.11.0&#x27; into uat [06fbdab]


<a name="1.11.76-alpha.0"></a>
## 1.11.76-alpha.0 (2020-05-19)

### Changed

- 🎨 补充字段判空 [73abfb5]


<a name="1.11.75-alpha.0"></a>
## 1.11.75-alpha.0 (2020-05-19)

### Changed

- 🎨 修改获取鞋款详情接口，改成bff-center的接口 [91e3854]
- 🎨 对接后端错误码 [73abc86]

### Fixed

- 🐛 修复客户端鞋款相册权限错误的bug [737bccd]
- 🐛 把catalog筛选功能加回去 [6a8edc2]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.11.0 [d82fee4]
-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [0c22c90]


<a name="1.11.73-alpha.0"></a>
## 1.11.73-alpha.0 (2020-05-19)

### Changed

- 🔧 增加sit环境 [41e2855]


<a name="1.11.72-beta.0"></a>
## 1.11.72-beta.0 (2020-05-19)

### Fixed

- 🐛 修复翻译显示错误的bug [90efabf]


<a name="1.11.71-beta.0"></a>
## 1.11.71-beta.0 (2020-05-19)

### Fixed

- 🐛 修复无法下载大文件的bug [bdb40fc]


<a name="1.11.70-beta.0"></a>
## 1.11.70-beta.0 (2020-05-19)

### Fixed

- 🐛 修复翻译错误 [f488f43]


<a name="1.11.69-beta.0"></a>
## 1.11.69-beta.0 (2020-05-19)

### Fixed

- 🐛 修复客户端bug [02b605c]


<a name="1.11.68-rc.0"></a>
## 1.11.68-rc.0 (2020-05-18)

### Fixed

- 🐛 修改商家后台面料详情&#x27;保存&#x27;按钮为&#x27;收藏&#x27; [0457a1d]
- 🐛 fix en.json重复key的问题 [33ddfde]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; into uat [252cc83]
-  Merge branch &#x27;1.11.0&#x27; into uat [06fbdab]


<a name="1.11.68-beta.0"></a>
## 1.11.68-beta.0 (2020-05-18)

### Fixed

- 🐛 修复客户端面料商品详情没有显示商家主页按钮的bug [50ed274]


<a name="1.11.67-beta.0"></a>
## 1.11.67-beta.0 (2020-05-18)

### Fixed

- 🐛 修复客户端面料商城bug [e5aa606]


<a name="1.11.66-beta.0"></a>
## 1.11.66-beta.0 (2020-05-18)

### Fixed

- 🐛 解决客户端弹窗消息逻辑错误的bug [1d6a043]


<a name="1.11.65-beta.0"></a>
## 1.11.65-beta.0 (2020-05-18)

### Fixed

- 🐛 关闭面料商品窗口给客户端发送更新信息 [e542796]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.11.0 [cc02048]


<a name="1.11.64-rc.0"></a>
## 1.11.64-rc.0 (2020-05-18)

### Fixed

- 🐛 修改商家后台面料详情&#x27;保存&#x27;按钮为&#x27;收藏&#x27; [0457a1d]
- 🐛 fix en.json重复key的问题 [33ddfde]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; into uat [06fbdab]


<a name="1.11.64-beta.0"></a>
## 1.11.64-beta.0 (2020-05-18)

### Added

- ✨ 更新d4 [37045f6]

### Changed

- 🔧 将githd换成gitlens [c6c4d8c]


<a name="1.11.63-beta.0"></a>
## 1.11.63-beta.0 (2020-05-18)

### Added

- ✨ 新增面料商品弹窗页面 [9174e04]

### Fixed

- ✏️ 修复英文library拼写错误 [28071af]
- 🐛 禁用面料库粘贴功能 [f6a931b]
- 🐛 鞋款信息编辑页, 造价单位添加中英切换 [5638e25]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.11.0 [015551e]
-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [5f83ecf]


<a name="1.11.62-beta.0"></a>
## 1.11.62-beta.0 (2020-05-18)

### Added

- ✨ 将uat和production分支的默认bump release参数改为release [d442159]

### Changed

- ⚡ 修改语言处改为按语言显示，而非按当前语言显示 [ee6b011]
- 🎨 更新收藏夹交互：现在切换到收藏夹标签即可刷新列表 [5ccd071]

### Fixed

- 🐛 fix en.json重复key的问题 [655afc0]
- 🐛 修改商家后台&#x27;保存&#x27;按钮为&#x27;收藏&#x27;, 补充error [7597b08]
- 🐛 修复二进制文件可以拖到快捷方式栏的问题 [92d0b31]
- 🐛 修复群聊中的成员管理显示全部删除按钮的bug [714668f]
- 🐛 修复收藏面料接口没有错误处理的bug [b868a55]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [5787c38]
-  Merge branch &#x27;1.11.0&#x27; of 192.168.19.2:front-end/demon-home into 1.11.0 [8fccc5c]
-  Merge branch &#x27;uat&#x27; into 1.11.0 [d586d47]
-  Merge branch &#x27;uat&#x27; into 1.11.0 [ce14d6b]


<a name="1.11.60-rc.1"></a>
## 1.11.60-rc.1 (2020-05-18)

### Fixed

- 🐛 修改商家后台面料详情&#x27;保存&#x27;按钮为&#x27;收藏&#x27; [0457a1d]
- 🐛 fix en.json重复key的问题 [33ddfde]


<a name="1.11.61-beta.0"></a>
## 1.11.61-beta.0 (2020-05-18)

### Added

- ✨ 将uat和production分支的默认bump release参数改为release [d442159]

### Changed

- 🎨 更新收藏夹交互：现在切换到收藏夹标签即可刷新列表 [5ccd071]

### Fixed

- 🐛 修复群聊中的成员管理显示全部删除按钮的bug [714668f]
- 🐛 修复收藏面料接口没有错误处理的bug [b868a55]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of 192.168.19.2:front-end/demon-home into 1.11.0 [8fccc5c]
-  Merge branch &#x27;uat&#x27; into 1.11.0 [d586d47]
-  Merge branch &#x27;uat&#x27; into 1.11.0 [ce14d6b]


<a name="1.11.60-rc.0"></a>
## 1.11.60-rc.0 (2020-05-16)

### Added

- ✨ 标注功能顺序号 [fe763da]

### Changed

- ⬆️ 更新D4: 改了和4ddat效果对齐的问题 [a03d3d9]
- ⏪ 修复由于合并的错误版本号的bug [4401fef]

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Fixed

- 🐛 临时打开面料库粘贴功能 [1bd1358]
- 🐛 修改qt.js文件中属性错误导致编译错误的问题 [1d511c7]
- 🐛 增加is-route-qt判断方法并且修复进入qt历史弹窗报错 [bd34dc9]

### Miscellaneous

- 🔀 Merge branch &#x27;1.11.0&#x27; into uat [75b6397]
-  Merge branch &#x27;1.11.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.11.0 [d20599e]
-  Merge branch &#x27;1.11.0&#x27; of 192.168.19.2:front-end/demon-home into 1.11.0 [3ada096]
-  Update .rancher-pipeline.yml file [a4c17d4]
-  Merge branch &#x27;uat&#x27; of 192.168.19.2:front-end/demon-home into uat [33b0a92]
-  Merge branch &#x27;1.11.0&#x27; into uat [1547109]
- 🔀 Merge branch &#x27;1.11.0&#x27; into uat [b6ae4e6]
-  Merge branch &#x27;1.10.0&#x27; into uat [4ed27c6]
- 🔀 Merge branch &#x27;1.10.0&#x27; into uat [476e249]
- 🔀 Merge branch &#x27;1.10.0&#x27; into uat [93ae5ca]
- 🔀 Merge branch &#x27;1.10.0&#x27; into uat [be7cabb]
-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into uat [e9eb7aa]
-  Merge remote-tracking branch &#x27;origin/uat&#x27; into uat [2a88439]
-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into uat [e581f73]
-  Update .rancher-pipeline.yml file [861f535]
- 🔀 Merge branch &#x27;1.10.0&#x27; into uat [9d92d95]
-  Merge remote-tracking branch &#x27;origin/uat-anta-poc&#x27; into uat [c0a608b]
-  Merge branch &#x27;qt-offline&#x27; into uat [7d99cb7]
-  Merge branch &#x27;qt-offline&#x27; into uat [c6785cc]
-  Merge branch &#x27;qt-offline&#x27; into uat [4139e24]
-  Update .rancher-pipeline.yml file [1ec95d8]
-  Merge branch &#x27;1.9.0&#x27; into uat [28c3d07]
- 🔀 合并1.9.0 [1526cfc]
-  Update .rancher-pipeline.yml file [cd839a1]
-  Merge branch &#x27;qt-offline&#x27; into uat [77067a1]
-  Merge remote-tracking branch &#x27;origin/1.9.0&#x27; into uat [d412ab6]
- 🔀 合并qt-offline分支代码 [4453088]
-  Merge branch &#x27;qt-offline&#x27; into uat [ac6f004]
-  Merge branch &#x27;1.8.0&#x27; into uat [191c939]
-  Merge branch &#x27;1.8.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.8.0 [e210129]
-  Merge branch &#x27;1.8.0&#x27; into uat [73d9dc8]
-  Merge branch &#x27;1.8.0&#x27; into uat [ebc2dd4]
-  Merge branch &#x27;1.7.0&#x27; into uat [feb9e0d]
-  Merge branch &#x27;1.7.0&#x27; into uat [4ce3288]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.local:front-end/demon-home into uat [55adcb7]
-  Merge branch &#x27;1.7.0&#x27; into uat [09969d4]
-  Merge branch &#x27;1.7.0&#x27; into uat [3d19ebe]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.local:front-end/demon-home into uat [9ae0848]
-  Merge branch &#x27;1.7.0&#x27; into uat [4ea0d67]
-  Merge branch &#x27;1.7.0&#x27; into uat [e9f0dc6]
-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into uat [7d049c7]
-  Merge branch &#x27;1.7.0&#x27; into uat [17a4708]
-  Merge branch &#x27;1.7.0&#x27; into uat [6bc0e2f]
-  Merge branch &#x27;1.7.0&#x27; into uat [61f7882]
-  Merge branch &#x27;1.7.0&#x27; into uat [49eba00]
-  Merge branch &#x27;1.7.0&#x27; into uat [80e0139]
-  Merge branch &#x27;1.7.0&#x27; into uat [bcbe7eb]
-  Merge branch &#x27;1.7.0&#x27; into uat [6455809]
- 🔀 合并分支 [3faf5a8]
-  Merge branch &#x27;1.7.0&#x27; into uat [8a0dfb7]
- 🔀 合并代码 [77fa741]
-  Merge branch &#x27;1.7.0&#x27; into uat [8bf336e]
-  Merge branch &#x27;1.7.0&#x27; into uat [7c5e2ec]
- 🔀 合并代码 [b997a1a]
-  Merge branch &#x27;1.7.0&#x27; into uat [ee3dc08]
-  Merge branch &#x27;1.7.0&#x27; into uat [237dcd1]
- 🔀 合并分支 [161cc6b]
-  Merge branch &#x27;1.6.1&#x27; into uat [11c9a7b]
-  Merge branch &#x27;1.6.1&#x27; into uat [3870414]
-  Merge branch &#x27;1.6.1&#x27; into uat [99ade98]
-  Merge branch &#x27;1.6.1&#x27; into uat [d7ace2f]
-  Merge branch &#x27;1.6.1&#x27; into uat [3a6d179]
-  Merge branch &#x27;1.6.1&#x27; into uat [1f0f905]
-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.11.59-beta.0"></a>
## 1.11.59-beta.0 (2020-05-16)

### Fixed

- 🐛 修复上传面料的币种显示不完全的bug [9ec8027]
- 🐛 修复鞋款相册复制、下载权限错误的bug [8a88491]
- 🐛 修复未选中就复制时会报错的问题 [53b9e49]
- 🐛 修复商家后台页面在客户端的bug [cf4b4f1]
- 🐛 修复执行离线渲染后，需要手动点击Design album按钮才能查看的问题 [0b2ae66]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.11.0 [445a2f4]
-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [747fc7a]
-  Merge branch &#x27;1.11.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.11.0 [64d5445]
-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [a32d2ca]


<a name="1.11.58-beta.0"></a>
## 1.11.58-beta.0 (2020-05-16)

### Fixed

- 🐛 调整pdf的下载url路径 [9465f35]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [bd9a798]


<a name="1.11.57-beta.0"></a>
## 1.11.57-beta.0 (2020-05-16)

### Fixed

- 🐛 修复面料商城、商家后台在客户端的兼容问题 [d1121b1]
- 🐛 修复主账号执行360或相机视角渲染后,用子账号登录后，也可删除主账号渲染的图片的问题 [b7cb88d]
- 🐛 修改邀请内部人员的报错提示，修改个别翻译 [b4dadf0]
- 🐛 fix SJS-225 [2a3a387]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.11.0 [f7664dc]
-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [d544882]
-  Merge branch &#x27;1.11.0&#x27; of 192.168.19.2:front-end/demon-home into 1.11.0 [235b4bc]
- 📝 增加一些备注 [81769dc]


<a name="1.11.57-rc.0"></a>
## 1.11.57-rc.0 (2020-05-16)

### Changed

- 🎨 让右键下载适配qt [3cdd698]
- ⬆️ 更新D4: 修复保存鞋模型截图不全的问题 [8231487]
- ⬆️ 更新D4: 改了和4ddat效果对齐的问题 [a03d3d9]
- ⏪ 修复由于合并的错误版本号的bug [4401fef]

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Fixed

- 🐛 修复主账号执行360或相机视角渲染后,用子账号登录后，也可删除主账号渲染的图片的问题 [b7cb88d]
- 🐛 修改邀请内部人员的报错提示，修改个别翻译 [b4dadf0]
- 🐛 fix SJS-225 [2a3a387]
- 🐛 让商家后台的搜索在切换tab时清空 [8ff608c]
- 🐛 修改qt.js文件中属性错误导致编译错误的问题 [1d511c7]
- 🐛 增加is-route-qt判断方法并且修复进入qt历史弹窗报错 [bd34dc9]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [d544882]
-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [e815ce3]
-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [d335f44]
-  Merge branch &#x27;uat&#x27; of 192.168.19.2:front-end/demon-home into uat [33b0a92]
-  Merge branch &#x27;1.11.0&#x27; into uat [1547109]
-  Merge branch &#x27;1.11.0&#x27; of 192.168.19.2:front-end/demon-home into 1.11.0 [235b4bc]
- 📝 增加一些备注 [81769dc]
- 🔀 Merge branch &#x27;1.11.0&#x27; into uat [b6ae4e6]
-  Merge branch &#x27;1.10.0&#x27; into uat [4ed27c6]
- 🔀 Merge branch &#x27;1.10.0&#x27; into uat [476e249]
- 🔀 Merge branch &#x27;1.10.0&#x27; into uat [93ae5ca]
- 🔀 Merge branch &#x27;1.10.0&#x27; into uat [be7cabb]
-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into uat [e9eb7aa]
-  Merge remote-tracking branch &#x27;origin/uat&#x27; into uat [2a88439]
-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into uat [e581f73]
-  Update .rancher-pipeline.yml file [861f535]
- 🔀 Merge branch &#x27;1.10.0&#x27; into uat [9d92d95]
-  Merge remote-tracking branch &#x27;origin/uat-anta-poc&#x27; into uat [c0a608b]
-  Merge branch &#x27;qt-offline&#x27; into uat [7d99cb7]
-  Merge branch &#x27;qt-offline&#x27; into uat [c6785cc]
-  Merge branch &#x27;qt-offline&#x27; into uat [4139e24]
-  Update .rancher-pipeline.yml file [1ec95d8]
-  Merge branch &#x27;1.9.0&#x27; into uat [28c3d07]
- 🔀 合并1.9.0 [1526cfc]
-  Update .rancher-pipeline.yml file [cd839a1]
-  Merge branch &#x27;qt-offline&#x27; into uat [77067a1]
-  Merge remote-tracking branch &#x27;origin/1.9.0&#x27; into uat [d412ab6]
- 🔀 合并qt-offline分支代码 [4453088]
-  Merge branch &#x27;qt-offline&#x27; into uat [ac6f004]
-  Merge branch &#x27;1.8.0&#x27; into uat [191c939]
-  Merge branch &#x27;1.8.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.8.0 [e210129]
-  Merge branch &#x27;1.8.0&#x27; into uat [73d9dc8]
-  Merge branch &#x27;1.8.0&#x27; into uat [ebc2dd4]
-  Merge branch &#x27;1.7.0&#x27; into uat [feb9e0d]
-  Merge branch &#x27;1.7.0&#x27; into uat [4ce3288]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.local:front-end/demon-home into uat [55adcb7]
-  Merge branch &#x27;1.7.0&#x27; into uat [09969d4]
-  Merge branch &#x27;1.7.0&#x27; into uat [3d19ebe]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.local:front-end/demon-home into uat [9ae0848]
-  Merge branch &#x27;1.7.0&#x27; into uat [4ea0d67]
-  Merge branch &#x27;1.7.0&#x27; into uat [e9f0dc6]
-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into uat [7d049c7]
-  Merge branch &#x27;1.7.0&#x27; into uat [17a4708]
-  Merge branch &#x27;1.7.0&#x27; into uat [6bc0e2f]
-  Merge branch &#x27;1.7.0&#x27; into uat [61f7882]
-  Merge branch &#x27;1.7.0&#x27; into uat [49eba00]
-  Merge branch &#x27;1.7.0&#x27; into uat [80e0139]
-  Merge branch &#x27;1.7.0&#x27; into uat [bcbe7eb]
-  Merge branch &#x27;1.7.0&#x27; into uat [6455809]
- 🔀 合并分支 [3faf5a8]
-  Merge branch &#x27;1.7.0&#x27; into uat [8a0dfb7]
- 🔀 合并代码 [77fa741]
-  Merge branch &#x27;1.7.0&#x27; into uat [8bf336e]
-  Merge branch &#x27;1.7.0&#x27; into uat [7c5e2ec]
- 🔀 合并代码 [b997a1a]
-  Merge branch &#x27;1.7.0&#x27; into uat [ee3dc08]
-  Merge branch &#x27;1.7.0&#x27; into uat [237dcd1]
- 🔀 合并分支 [161cc6b]
-  Merge branch &#x27;1.6.1&#x27; into uat [11c9a7b]
-  Merge branch &#x27;1.6.1&#x27; into uat [3870414]
-  Merge branch &#x27;1.6.1&#x27; into uat [99ade98]
-  Merge branch &#x27;1.6.1&#x27; into uat [d7ace2f]
-  Merge branch &#x27;1.6.1&#x27; into uat [3a6d179]
-  Merge branch &#x27;1.6.1&#x27; into uat [1f0f905]
-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.11.55-beta.0"></a>
## 1.11.55-beta.0 (2020-05-16)

### Fixed

- 🐛 更新logo图标 [52f1c26]
- 🐛 修复360图片压缩包下载错误的bug [7b3b98c]
- 🐛 修复虚拟账号不应该能进入我的鞋款和我的面料的问题 [0962ff8]
- 🐛 修复当WS空间为空时（无创建空间，也不加入任何空间，空间数为0），进不去WS页面的问题 [7226937]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [4bdea42]
-  Merge branch &#x27;1.11.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.11.0 [3e8d394]


<a name="1.11.54-beta.0"></a>
## 1.11.54-beta.0 (2020-05-16)

### Fixed

- 🐛 增加拖拽上传的权限限制 [8f017a4]
- 🐛 隐藏客户端快捷方式入口 [ecd6832]
- 🐛 修复客户端面料库路由错误的bug [e5be93c]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [5046864]


<a name="1.11.53-beta.0"></a>
## 1.11.53-beta.0 (2020-05-16)

### Fixed

- 🐛 预览时标注功能 [e683f39]
- 🐛 修复没有编辑过的模型点击云渲染不用提示保存的问题 [3f02b34]
- 🐛 修复渲染相册完成后点击下载按钮，没有把图片下载的问题 [d9fc340]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of 192.168.19.2:front-end/demon-home into 1.11.0 [2916f85]
-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [8b8e6f0]


<a name="1.11.52-beta.0"></a>
## 1.11.52-beta.0 (2020-05-16)

### Changed

- 🎨 去除部分catalog的console [d5aaa49]
- ♻️ 整理缩放计算逻辑 [5e90949]

### Fixed

- 🐛 增加新建ws延迟的交互 [0ca48a3]
- 🐛 修复oss上传content-type不对的bug [78fc381]
- 🐛 修复3d标注不同设备定位不准确问题 [d9517ad]
- 🐛 修复隐藏功能丢失的bug [74323d4]
- 🐛 去掉createBoard相关上传功能 [e8b8897]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [d52d519]
-  Merge branch &#x27;1.11.0&#x27; of 192.168.19.2:front-end/demon-home into 1.11.0 [7d25b9d]


<a name="1.11.51-beta.0"></a>
## 1.11.51-beta.0 (2020-05-15)

### Fixed

- 🐛 面料详情UI问题汇总 [bd1c7b9]
- 🐛 修复虚拟账号没有查看面料商城和library的权限的问题 [6752571]
- 🐛 修复上传鞋模型中鞋款图片没做大小限制的问题 [951d236]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [9db7caa]


<a name="1.11.50-beta.0"></a>
## 1.11.50-beta.0 (2020-05-15)

### Added

- ✨ 补充后端定义的error code，暂时没有翻译 [3c55c63]

### Fixed

- 🐛 修改翻译 [f1b75a7]
- 🐛 隐藏文件列表的排序入口 [b6e44a2]
- 🐛 校验拖拽上传和右键上传的文件格式，不合法的不会上传 [07a8e92]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [e400b92]


<a name="1.11.49-beta.0"></a>
## 1.11.49-beta.0 (2020-05-15)

### Changed

- 💄 调整element-ui 中el-input的padding值改为10 [6b74c30]

### Fixed

- 🐛 图片查看的滚轮交互调整 [7dd0fda]
- 🐛 修复3d标注和鞋款相册图标一直会处与打开了状态的问题 [926516f]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [67354cb]


<a name="1.11.48-beta.0"></a>
## 1.11.48-beta.0 (2020-05-15)

### Changed

- ⬆️ 更新D4: 调整保存鞋模型时，截图的角度与pc端一致 [a06d92e]
- 🎨 调整保存时，截图的比例与客户端一致 [b137b54]

### Fixed

- 🐛 优化邀请成员报错提示 [d9ddde6]
- 🐛 修复library的面料不能通过点击面料渲染的问题 [a9d84d5]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [b168158]


<a name="1.11.46-beta.0"></a>
## 1.11.46-beta.0 (2020-05-15)

### Added

- ✨ 增加拖拽上传功能 [9ee122e]

### Changed

- 🎨  [f0287b9]

### Fixed

- 🐛 修复重命名没有权限控制的bug [2cbf37e]
- 🐛 修复memberselector默认选中角色的错误 [379d91c]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [de6c742]
-  Merge branch &#x27;1.11.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.11.0 [363cb01]


<a name="1.11.45-beta.0"></a>
## 1.11.45-beta.0 (2020-05-15)

### Fixed

- 🐛 补充翻译，增加虚拟账号过期状态判断显示 [d76e862]


<a name="1.11.44-beta.0"></a>
## 1.11.44-beta.0 (2020-05-15)

### Fixed

- 🐛 修复错误时，转跳的bug [5015b0f]
- 🐛 修复面料在鞋模型修改记录异常问题 [1e684f1]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of 192.168.19.2:front-end/demon-home into 1.11.0 [fa9d5dd]
-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [de5dfd2]


<a name="1.11.43-beta.0"></a>
## 1.11.43-beta.0 (2020-05-15)

### Changed

- 💄 修复部分样式bug [db987e5]

### Fixed

- 🐛 补充翻译 [6a04f38]
- 🐛 补充翻译 [364c347]


<a name="1.11.42-beta.0"></a>
## 1.11.42-beta.0 (2020-05-15)

### Added

- ✨ 新增面料商城、面料库、商家后台客户端页面路由 [098d073]

### Fixed

- 🐛 修复被踢出登录路由不转跳的bug [36a8041]
- 🐛 修复切换列表后，滚动加载有时会失效的问题 [f47cd9b]
- 🐛 隐藏上传文件的入口，在导航条增加上传图片和pdf的入口 [4e716c5]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into dannny [c88fe12]
-  Merge branch &#x27;1.11.0&#x27; of 192.168.19.2:front-end/demon-home into 1.11.0 [a31f5bf]
-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [2e890cd]


<a name="1.11.41-beta.0"></a>
## 1.11.41-beta.0 (2020-05-14)

### Fixed

- 🐛 修复WS翻译错漏 [3df0132]


<a name="1.11.40-beta.0"></a>
## 1.11.40-beta.0 (2020-05-14)

### Fixed

- 🐛 修复点机图片无法打开的bug [b1b7007]
- 🐛 修复面料详情没有色卡图标的bug [9fc21b1]
- 🐛 修复权限判断错误的bug [d1dc822]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [35e2b14]
-  Merge branch &#x27;1.11.0&#x27; into dannny [4720430]


<a name="1.11.39-beta.0"></a>
## 1.11.39-beta.0 (2020-05-14)

### Changed

- ⬆️ 更新D4库：4ddat json格式不统一导致的无法正确加载鞋模型的问题 [4756f11]

### Fixed

- 🐛 调转右键下载（实际行为是打开）和双击pdf（实际为下载）的行为，改为右键下载双击打开 [fcf9a2d]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [d4719ca]
-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [58f5b16]


<a name="1.11.38-beta.0"></a>
## 1.11.38-beta.0 (2020-05-14)

### Added

- ✨ 新增上传图片和上传pdf，及其相关的文件功能 [3a79e33]

### Fixed

- 🐛 修复渲染页, 商家后台, 个人中心, 上传鞋款/面料, 登录页.翻译汇总的bug [3196e63]
- 🐛 临时处理权限错误信息undefined的问题 [f2a2bca]
- 🐛 补充遗漏的翻译 [fcdc0bc]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [beca3ff]


<a name="1.11.37-beta.0"></a>
## 1.11.37-beta.0 (2020-05-14)

### Added

- ✨ 优化钢笔工具的一些交互以及修复一些问题 [a51e93b]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of 192.168.19.2:front-end/demon-home into 1.11.0 [dfafd42]


<a name="1.11.36-beta.0"></a>
## 1.11.36-beta.0 (2020-05-14)

### Added

- ✨ 部件的edgeArr参数过大，单独请求接口获取；在获取模型全部部件接口中不再返回 [18c8c88]

### Changed

- ⬆️ 更新D4: 添加updateEdgeArr方法用于接收单个部件的edgeArr在2D显示 [2945fb5]
- 💄 更换新logo [9005f8e]

### Fixed

- 🐛 修复材料商城列表没有loading的bug [eaebf7b]
- 🐛 修复鞋款详情数据结构更改，用户信息缺失的问题 [2237361]

### Miscellaneous

-  Merge branch &#x27;stephen&#x27; into 1.11.0 [c0a3856]


<a name="1.11.36-rc.0"></a>
## 1.11.36-rc.0 (2020-05-14)

### Changed

- ⬆️ 更新D4: 改了和4ddat效果对齐的问题 [a03d3d9]
- ⏪ 修复由于合并的错误版本号的bug [4401fef]

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Fixed

- 🐛 修改qt.js文件中属性错误导致编译错误的问题 [1d511c7]
- 🐛 增加is-route-qt判断方法并且修复进入qt历史弹窗报错 [bd34dc9]

### Miscellaneous

- 🔀 Merge branch &#x27;1.11.0&#x27; into uat [b6ae4e6]
-  Merge branch &#x27;1.10.0&#x27; into uat [4ed27c6]
- 🔀 Merge branch &#x27;1.10.0&#x27; into uat [476e249]
- 🔀 Merge branch &#x27;1.10.0&#x27; into uat [93ae5ca]
- 🔀 Merge branch &#x27;1.10.0&#x27; into uat [be7cabb]
-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into uat [e9eb7aa]
-  Merge remote-tracking branch &#x27;origin/uat&#x27; into uat [2a88439]
-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into uat [e581f73]
-  Update .rancher-pipeline.yml file [861f535]
- 🔀 Merge branch &#x27;1.10.0&#x27; into uat [9d92d95]
-  Merge remote-tracking branch &#x27;origin/uat-anta-poc&#x27; into uat [c0a608b]
-  Merge branch &#x27;qt-offline&#x27; into uat [7d99cb7]
-  Merge branch &#x27;qt-offline&#x27; into uat [c6785cc]
-  Merge branch &#x27;qt-offline&#x27; into uat [4139e24]
-  Update .rancher-pipeline.yml file [1ec95d8]
-  Merge branch &#x27;1.9.0&#x27; into uat [28c3d07]
- 🔀 合并1.9.0 [1526cfc]
-  Update .rancher-pipeline.yml file [cd839a1]
-  Merge branch &#x27;qt-offline&#x27; into uat [77067a1]
-  Merge remote-tracking branch &#x27;origin/1.9.0&#x27; into uat [d412ab6]
- 🔀 合并qt-offline分支代码 [4453088]
-  Merge branch &#x27;qt-offline&#x27; into uat [ac6f004]
-  Merge branch &#x27;1.8.0&#x27; into uat [191c939]
-  Merge branch &#x27;1.8.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.8.0 [e210129]
-  Merge branch &#x27;1.8.0&#x27; into uat [73d9dc8]
-  Merge branch &#x27;1.8.0&#x27; into uat [ebc2dd4]
-  Merge branch &#x27;1.7.0&#x27; into uat [feb9e0d]
-  Merge branch &#x27;1.7.0&#x27; into uat [4ce3288]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.local:front-end/demon-home into uat [55adcb7]
-  Merge branch &#x27;1.7.0&#x27; into uat [09969d4]
-  Merge branch &#x27;1.7.0&#x27; into uat [3d19ebe]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.local:front-end/demon-home into uat [9ae0848]
-  Merge branch &#x27;1.7.0&#x27; into uat [4ea0d67]
-  Merge branch &#x27;1.7.0&#x27; into uat [e9f0dc6]
-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into uat [7d049c7]
-  Merge branch &#x27;1.7.0&#x27; into uat [17a4708]
-  Merge branch &#x27;1.7.0&#x27; into uat [6bc0e2f]
-  Merge branch &#x27;1.7.0&#x27; into uat [61f7882]
-  Merge branch &#x27;1.7.0&#x27; into uat [49eba00]
-  Merge branch &#x27;1.7.0&#x27; into uat [80e0139]
-  Merge branch &#x27;1.7.0&#x27; into uat [bcbe7eb]
-  Merge branch &#x27;1.7.0&#x27; into uat [6455809]
- 🔀 合并分支 [3faf5a8]
-  Merge branch &#x27;1.7.0&#x27; into uat [8a0dfb7]
- 🔀 合并代码 [77fa741]
-  Merge branch &#x27;1.7.0&#x27; into uat [8bf336e]
-  Merge branch &#x27;1.7.0&#x27; into uat [7c5e2ec]
- 🔀 合并代码 [b997a1a]
-  Merge branch &#x27;1.7.0&#x27; into uat [ee3dc08]
-  Merge branch &#x27;1.7.0&#x27; into uat [237dcd1]
- 🔀 合并分支 [161cc6b]
-  Merge branch &#x27;1.6.1&#x27; into uat [11c9a7b]
-  Merge branch &#x27;1.6.1&#x27; into uat [3870414]
-  Merge branch &#x27;1.6.1&#x27; into uat [99ade98]
-  Merge branch &#x27;1.6.1&#x27; into uat [d7ace2f]
-  Merge branch &#x27;1.6.1&#x27; into uat [3a6d179]
-  Merge branch &#x27;1.6.1&#x27; into uat [1f0f905]
-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.11.35-beta.0"></a>
## 1.11.35-beta.0 (2020-05-14)

### Changed

- 💄 更换复制鞋款链接的样式 [849a070]
- 🎨 优化放大镜组件缩放效果 [edd3734]

### Fixed

- 🐛 补充遗漏的翻译 [e7fb314]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.11.0 [457e6a8]
-  Merge branch &#x27;stephen&#x27; into 1.11.0 [f433f24]


<a name="1.11.34-beta.0"></a>
## 1.11.34-beta.0 (2020-05-14)

### Fixed

- 🐛 整合产品给的翻译补充 [c7c1923]
- 🐛 补充测试汇总的翻译缺漏 [cd15e3f]


<a name="1.11.33-beta.0"></a>
## 1.11.33-beta.0 (2020-05-13)

### Fixed

- 🐛 修复allsettled方法报错的bug [b583163]
- 🐛 解决客户端下载的bug [5c3eac6]
- 🐛 补充遗漏的翻译 [bd0ea0b]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.11.0 [fa885be]


<a name="1.11.32-beta.0"></a>
## 1.11.32-beta.0 (2020-05-13)

### Fixed

- 🐛 尝试修复Promise.allSettled [89921c9]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of 192.168.19.2:front-end/demon-home into 1.11.0 [77ec61d]


<a name="1.11.30-beta.0"></a>
## 1.11.30-beta.0 (2020-05-13)

### Fixed

- 🐛 修复客户端传过来的数据会被changMaterialType函数覆盖的问题 [15e4f9c]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [f716c26]


<a name="1.11.29-beta.0"></a>
## 1.11.29-beta.0 (2020-05-13)

### Added

- ✨ 鞋款图片下载功能 [fb0fc6c]

### Fixed

- 🐛 修复发起渲染弹窗样式错误的bug [4dc2f9f]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into dannny [8bd3396]


<a name="1.11.28-beta.0"></a>
## 1.11.28-beta.0 (2020-05-13)

### Fixed

- 🐛 修复改错的flag [a060e11]


<a name="1.11.27-beta.0"></a>
## 1.11.27-beta.0 (2020-05-13)

### Added

- ✨ 修复createBoard重命名失效的bug [c7a96f3]

### Changed

- 🎨 显示客户端传递的图片在页面以便调试图片空白的问题 [c65f206]
- 🎨 产品补充中英翻译 [d36cce1]

### Fixed

- 🐛 把部分漏了的workspace相关的文本抽出来或翻译 [0715193]
- 🐛 修复部分翻译遗漏问题 [6af1e4f]
- 🐛 修复发起渲染弹窗在客户端样式不正确的bug [c4c9d8d]
- 🐛 修复了标注的一些问题，完善了一些细节 [60e0055]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [c9a8158]
-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [1bb7f30]
-  Merge branch &#x27;1.11.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.11.0 [4919e6e]
-  Merge branch &#x27;1.11.0&#x27; of 192.168.19.2:front-end/demon-home into 1.11.0 [9448d5f]


<a name="1.11.26-beta.0"></a>
## 1.11.26-beta.0 (2020-05-13)

### Changed

- 🎨 传给客户端的文件块参数拆分三个参数来传递 [ab993c2]

### Fixed

- 🐛 修复发起渲染页在客户端样式错误的bug [e08d409]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [99747c9]
-  Merge branch &#x27;dannny&#x27; into 1.11.0 [ba7e1bf]


<a name="1.11.25-beta.0"></a>
## 1.11.25-beta.0 (2020-05-13)

### Fixed

- 🐛 修复async导致传递客户端函数报错问题 [e0f8874]


<a name="1.11.24-beta.0"></a>
## 1.11.24-beta.0 (2020-05-13)

### Added

- ✨ 将上传面料中传给客户端的文件切换传递 [8b8871c]

### Fixed

- 🐛 抽离部分缺漏的商家后台的文本 [ff4f545]

### Miscellaneous

-  Merge branch &#x27;stephen&#x27; into 1.11.0 [5b9b671]
-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [494a54b]


<a name="1.11.23-beta.0"></a>
## 1.11.23-beta.0 (2020-05-13)

### Added

- ✨ 更新面料商城和library权限控制 [460b9f0]

### Changed

- 💄 更新Iiconfont和渲染页图标 [7dcbcbb]

### Fixed

- 🐛 修复点击标签不生效的bug [311a62a]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into dannny [274ba82]
-  Merge branch &#x27;1.11.0&#x27; of 192.168.19.2:front-end/demon-home into 1.11.0 [974ec1b]


<a name="1.11.22-beta.0"></a>
## 1.11.22-beta.0 (2020-05-12)

### Fixed

- 🐛 修复客户端加载4ddat文件在鞋模型上没有效果的问题 [6cb39b5]


<a name="1.11.21-beta.0"></a>
## 1.11.21-beta.0 (2020-05-12)

### Fixed

- 🐛 修复客户端捕获事件有时接收不到的问题 [d6a21fd]


<a name="1.11.20-beta.0"></a>
## 1.11.20-beta.0 (2020-05-12)

### Added

- ✨ 钢笔工具的功能 [90a961e]

### Changed

- 🎨 上传面料添加图片显示，查找问题出错 [0edd6e1]
- ⚡ 改进内部外部和虚拟成员列表，改为分页加载 [f08f4c7]

### Fixed

- 🐛 部分字典接口变更（跟随后端） [c91d091]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [544dd3a]
-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [c1902c3]


<a name="1.11.19-beta.0"></a>
## 1.11.19-beta.0 (2020-05-12)

### Changed

- 🎨 调整上传面料与客户端传递文件的数据格式 [5deb78c]


<a name="1.11.18-beta.0"></a>
## 1.11.18-beta.0 (2020-05-12)

### Changed

- 🎨 与客户端传递数据的方式 [0f50380]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [c864790]


<a name="1.11.17-beta.0"></a>
## 1.11.17-beta.0 (2020-05-12)

### Changed

- 🎨 补充360度导出页面的翻译 [569886c]
- 🎨 补充catalog.ts的翻译 [93802d4]


<a name="1.11.16-beta.0"></a>
## 1.11.16-beta.0 (2020-05-12)

### Changed

- 🎨 与客户端传递数据改为ArrayBuffer [efb3d52]


<a name="1.11.15-beta.0"></a>
## 1.11.15-beta.0 (2020-05-12)

### Changed

- 🎨 上传面料调整回数据流传递给客户端 [d37c0d5]
- 💄 更新离线渲染样式 [ec23835]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [808e8e9]
-  Merge branch &#x27;1.11.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.11.0 [215c9aa]


<a name="1.11.14-beta.0"></a>
## 1.11.14-beta.0 (2020-05-12)

### Changed

- 🎨 上传面料增加断点 [bb165a0]


<a name="1.11.13-beta.0"></a>
## 1.11.13-beta.0 (2020-05-12)

### Fixed

- 🐛 修复面料上传，this指向导致客户端报错的问题 [93dcbbb]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [60cad7f]


<a name="1.11.12-beta.0"></a>
## 1.11.12-beta.0 (2020-05-12)

### Fixed

- 🐛 补充NavigationTools漏掉的翻译 [e90384d]


<a name="1.11.11-beta.0"></a>
## 1.11.11-beta.0 (2020-05-12)

### Changed

- 🎨 调整上传面料中与客户端的交互逻辑 [aa897d5]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [7f5f073]


<a name="1.11.10-beta.0"></a>
## 1.11.10-beta.0 (2020-05-12)

### Changed

- 🎨 修改翻译，workspace改为协作空间 [dec8652]


<a name="1.11.9-beta.0"></a>
## 1.11.9-beta.0 (2020-05-12)

### Added

- ✨ 离线渲染鞋款相册刷新功能 [df8b40e]

### Changed

- 💄 优化离线渲染样式 [785848c]
- 🎨 合并产品给的中文翻译，修正部分英文 [67760d1]
- 💄 更新发起渲染页样式 [9059f81]
- 🎨 补充翻译，主要是Header和file-list [c0d7155]

### Fixed

- 🐛 补充几个翻译 [8ba7d1b]
- 🐛 解决客户端打开360预览图无法关闭的bug [4697b68]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.11.0 [ca9f330]
-  Merge branch &#x27;1.11.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.11.0 [746848e]


<a name="1.11.8-beta.0"></a>
## 1.11.8-beta.0 (2020-05-12)

### Added

- ✨ 在客户端上传面料时，4ddat文件解析会把合成三种图片也解析出来 [565a19e]

### Changed

- ⬆️ 更新D4: 改了和4ddat效果对齐的问题 [630e9a5]

### Fixed

- 🐛 修复侧边栏高亮有误的问题 [69b83a8]

### Miscellaneous

-  Merge branch &#x27;stephen&#x27; into 1.11.0 [7c94bbb]
-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [e7970ed]
-  Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into stephen [6fc1be8]
-  Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into stephen [3136d14]


<a name="1.11.7-beta.0"></a>
## 1.11.7-beta.0 (2020-05-12)

### Fixed

- 🐛 修复客户端360渲染图错误的bug [26cd2bb]
- 🐛 修复登录页时，url传参为en时会循环刷新的bug [ae541e0]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.11.0 [7861572]


<a name="1.11.6-beta.0"></a>
## 1.11.6-beta.0 (2020-05-12)

### Fixed

- 🐛 让登录页能根据时区确定是否默认语言设置为中文 [8f7ebce]
- 🐛 解决客户端打开360渲染图报错的bug [695d441]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [58c078c]


<a name="1.11.5-beta.0"></a>
## 1.11.5-beta.0 (2020-05-12)

### Changed

- 🎨 合并产品给的中文翻译，修正部分英文翻译 [fad70d8]

### Fixed

- 🐛 国际化-查漏补缺 [efd9a7c]
- 🐛 国际化-查漏补缺 [9b59ccc]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.11.0 [1592461]


<a name="1.11.4-beta.0"></a>
## 1.11.4-beta.0 (2020-05-12)

### Fixed

- 🐛 修复客户端查看360°预览渲染图报错的bug [7ea0309]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into dannny [c9c989e]


<a name="1.11.3-beta.0"></a>
## 1.11.3-beta.0 (2020-05-12)

### Changed

- 🎨 完成validator国际化 [58e465a]
- 🎨 补充components国际化，基本完成 [801992d]

### Fixed

- 🐛 修复顶替登录后不断刷新的bug [0e8947f]
- 🐛 修复notification中request和refused遗漏的bug [5a10ee4]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [eb1aad8]


<a name="1.11.2-beta.0"></a>
## 1.11.2-beta.0 (2020-05-11)

### Changed

- 🎨 完善设置里切换语言的交互 [d4e2466]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [045e6bf]


<a name="1.11.1-beta.0"></a>
## 1.11.1-beta.0 (2020-05-11)

### Added

- ✨ 渲染图复制链接功能 [9e38d10]
- ✨ 新增语言设置，实现中英切换，并实现相应的工具、对接读写接口、实现url传参读取 [c29b6f3]
- ✨ 客户端预览360°渲染图 [29bad2c]

### Changed

- 🎨 完成components中dialog, form及其他几个小模块的国际化 [6eb0956]

### Fixed

- 🐛 补充漏掉的翻译，修复imageViewer的i18n注入问题 [ad3daa6]
- 🐛 修复functional组件中无 [e80fdd2]
- 🐛 401和403的错误码变更为100401和100403（跟随后端） [60ca54e]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; into dannny [8dc08bc]
-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [5524f1c]


<a name="1.11.0-beta.0"></a>
## 1.11.0-beta.0 (2020-05-11)

### Added

- ✨ 360渲染图查看功能 [f697662]
- ✨ 画册渲染图360度预览页面 [a9e3d82]
- ✨ 鞋款图册列表接口更换数据结构 [136bac3]
- ✨ 360出图相关逻辑 [0fc6acf]
- ✨ 国际化方案 [12deebf]
- ✨ 优化normalize-component的逻辑 [39eb504]

### Changed

- 💄 更新iconfont [d32d11a]
- 🎨 完成components/form模块国际化 [46d9f18]
- 🎨 完成error中codeMessage的国际化 [5432bc7]
- 🎨 完成/service和/applications两个静态页面的翻译 [396f80d]
- 🎨 合并中文翻译 [a76b070]
- 🎨 优化部分英文翻译 [1b89237]
- 🎨 完成notification模块国际化 [a1fb128]
- 🎨 完成help-center目录下文件的国际化 [e0f3ebf]
- 🎨 完成guide目录下组件的国际化 [af5c7dd]
- 💄 调整发起渲染弹窗样式 [c60b00f]
- 💄 渲染图册样式 [6ad868b]
- 💄 更新鞋款图册样式 [d0cf5c6]
- 🎨 完成upload-model模块的国际化 [2bc8a40]
- 🎨 完成material目录的国际化 [6adb15c]
- 🎨 恢复en.json [fb338f4]
- 🎨 完成Login模块国际化 [989804a]
- 🎨 补充model原来没国际化的部分内容 [f705505]
- 🎨 国际化model目录下的文本 [aa82a60]
- 🎨 国际化，完成material-mall模块 [6ebec7a]
- 🎨 修改几个定义的位置 [f04326c]
- 🎨 完成profile下所有子模块的国际化（除了applications） [f9d6274]
- 🎨 拖拽面料到鞋模型上的接口也是调用面料详情的接口 [a9565c9]
- ⚡ 项目中放大镜组件添加响应鼠标滚动和键盘+-事件来缩放图片功能 [b764165]
- 🎨 补充file-list中部分缺失的国际化内容 [e7dde30]
- 🎨 完成profile-account模块的国际化 [c7f1308]
- 🎨 实现大部分文件系统组件的国际化 [5e15fa0]
- 🎨 删除面料详情中的注释代码 [547a8b6]
- 🎨 渲染相册中的任务已经全部渲染完成后，不再请求接口 [caa43c4]
- 🎨 定义en.json模块顺序 [aeac59b]
- 🎨 更新新手指引文档部分内容 [b35e1cc]
- 🚨 修复一些类型错误 [26126ed]
- 🎨 增加ImageViewer的类型声明 [f968b9f]
- 🚨 修复一些类型错误 [ec29e6b]
- 🔧 vetur增加html的校验 [5543feb]
- 🎨 面料详情组件写成composition-api方法 [6d255d3]
- 🎨 调整面料详情页面中数据结构 [5812b39]

### Removed

- 🔥 删除上版本面料模块多余的代码 [9364a20]

### Fixed

- 🐛 补充部分model的国际化内容 [49166e4]
- 🐛 修复合并1.11.0的错误 [0af0a52]
- 🐛 修改面料详情props undefine 导致报错问题；修改ts语法报错 [be9c693]
- 🐛 完成file-list文件夹的国际化 [bb10343]
- 🐛 开始国际化 [fc1fb7c]
- 🐛 修复部分imageviewer类型报错 [f517c3d]
- 🐛 修复拖拽逻辑错误的bug [cd33394]

### Miscellaneous

-  Merge branch &#x27;1.11.0&#x27; into dannny [6154fc3]
-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [e7d2816]
- 🔀 Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into dannny [db467ee]
-  Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into afei [71c81ae]
- 🔀 Merge branch &#x27;1.11.0&#x27; into dannny [436f3f5]
-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [32edc31]
-  Merge branch &#x27;stephen&#x27; into 1.11.0 [4461239]
- 🔀 合并1.11.0 [2762eea]
-  Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into stephen [a1b521d]
-  Merge branch &#x27;stephen&#x27; into 1.11.0 [243eb98]
-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [95f275b]
-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [9221875]
-  添加部分国际化 [edb740e]
-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [61f285b]
-  Merge branch &#x27;stephen-1.10.0-ts&#x27; into stephen [8f2b49a]
-  Merge remote-tracking branch &#x27;origin/1.11.0&#x27; into stephen [2aa8697]
-  Merge branch &#x27;stephen&#x27; into 1.11.0 [db7e85f]
- 🔀 合并1.11.0 [4402512]
- 🏷️ 解决typescript报错问题 [5adeb87]
-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [68003a2]
-  Merge branch &#x27;1.11.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.11.0 [6499dff]
-  Merge branch &#x27;1.10.0&#x27; into 1.11.0 [3dc1233]
-  Merge branch &#x27;dannny&#x27; into 1.11.0 [9cc5907]
- 🏷️ 添加ts类型，解决ts报错的问题 [14b48a0]
-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [bae949e]
-  Merge branch &#x27;1.11.0&#x27; of 192.168.19.2:front-end/demon-home into 1.11.0 [d1bec40]
-  Merge branch &#x27;1.11.0&#x27; into dannny [37e2981]
-  Merge branch &#x27;1.10.0&#x27; into 1.11.0 [31f1916]
- 🔀 合并1.10.0 [a922b41]


<a name="1.10.60-rc.0"></a>
## 1.10.60-rc.0 (2020-04-30)

### Fixed

- 🐛 修复以图搜图样式错误 [6055f0f]

### Miscellaneous

-  Merge branch &#x27;1.10.0&#x27; into uat [4ed27c6]


<a name="1.10.59-rc.0"></a>
## 1.10.59-rc.0 (2020-04-30)

### Changed

- 💄 修复面料商城样式bug [3570d9d]
- ⏪ 修复由于合并的错误版本号的bug [4401fef]

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Fixed

- 🐛 修改qt.js文件中属性错误导致编译错误的问题 [1d511c7]
- 🐛 增加is-route-qt判断方法并且修复进入qt历史弹窗报错 [bd34dc9]

### Miscellaneous

- 🔀 Merge branch &#x27;1.10.0&#x27; into uat [476e249]
- 🔀 Merge branch &#x27;1.10.0&#x27; into uat [93ae5ca]
- 🔀 Merge branch &#x27;1.10.0&#x27; into uat [be7cabb]
-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into uat [e9eb7aa]
-  Merge remote-tracking branch &#x27;origin/uat&#x27; into uat [2a88439]
-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into uat [e581f73]
-  Update .rancher-pipeline.yml file [861f535]
- 🔀 Merge branch &#x27;1.10.0&#x27; into uat [9d92d95]
-  Merge remote-tracking branch &#x27;origin/uat-anta-poc&#x27; into uat [c0a608b]
-  Merge branch &#x27;qt-offline&#x27; into uat [7d99cb7]
-  Merge branch &#x27;qt-offline&#x27; into uat [c6785cc]
-  Merge branch &#x27;qt-offline&#x27; into uat [4139e24]
-  Update .rancher-pipeline.yml file [1ec95d8]
-  Merge branch &#x27;1.9.0&#x27; into uat [28c3d07]
- 🔀 合并1.9.0 [1526cfc]
-  Update .rancher-pipeline.yml file [cd839a1]
-  Merge branch &#x27;qt-offline&#x27; into uat [77067a1]
-  Merge remote-tracking branch &#x27;origin/1.9.0&#x27; into uat [d412ab6]
- 🔀 合并qt-offline分支代码 [4453088]
-  Merge branch &#x27;qt-offline&#x27; into uat [ac6f004]
-  Merge branch &#x27;1.8.0&#x27; into uat [191c939]
-  Merge branch &#x27;1.8.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.8.0 [e210129]
-  Merge branch &#x27;1.8.0&#x27; into uat [73d9dc8]
-  Merge branch &#x27;1.8.0&#x27; into uat [ebc2dd4]
-  Merge branch &#x27;1.7.0&#x27; into uat [feb9e0d]
-  Merge branch &#x27;1.7.0&#x27; into uat [4ce3288]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.local:front-end/demon-home into uat [55adcb7]
-  Merge branch &#x27;1.7.0&#x27; into uat [09969d4]
-  Merge branch &#x27;1.7.0&#x27; into uat [3d19ebe]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.local:front-end/demon-home into uat [9ae0848]
-  Merge branch &#x27;1.7.0&#x27; into uat [4ea0d67]
-  Merge branch &#x27;1.7.0&#x27; into uat [e9f0dc6]
-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into uat [7d049c7]
-  Merge branch &#x27;1.7.0&#x27; into uat [17a4708]
-  Merge branch &#x27;1.7.0&#x27; into uat [6bc0e2f]
-  Merge branch &#x27;1.7.0&#x27; into uat [61f7882]
-  Merge branch &#x27;1.7.0&#x27; into uat [49eba00]
-  Merge branch &#x27;1.7.0&#x27; into uat [80e0139]
-  Merge branch &#x27;1.7.0&#x27; into uat [bcbe7eb]
-  Merge branch &#x27;1.7.0&#x27; into uat [6455809]
- 🔀 合并分支 [3faf5a8]
-  Merge branch &#x27;1.7.0&#x27; into uat [8a0dfb7]
- 🔀 合并代码 [77fa741]
-  Merge branch &#x27;1.7.0&#x27; into uat [8bf336e]
-  Merge branch &#x27;1.7.0&#x27; into uat [7c5e2ec]
- 🔀 合并代码 [b997a1a]
-  Merge branch &#x27;1.7.0&#x27; into uat [ee3dc08]
-  Merge branch &#x27;1.7.0&#x27; into uat [237dcd1]
- 🔀 合并分支 [161cc6b]
-  Merge branch &#x27;1.6.1&#x27; into uat [11c9a7b]
-  Merge branch &#x27;1.6.1&#x27; into uat [3870414]
-  Merge branch &#x27;1.6.1&#x27; into uat [99ade98]
-  Merge branch &#x27;1.6.1&#x27; into uat [d7ace2f]
-  Merge branch &#x27;1.6.1&#x27; into uat [3a6d179]
-  Merge branch &#x27;1.6.1&#x27; into uat [1f0f905]
-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.10.58-rc.0"></a>
## 1.10.58-rc.0 (2020-04-30)

### Changed

- 💄 调整批注列表模块的样式 [cca01b8]
- ⏪ 修复由于合并的错误版本号的bug [4401fef]

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Fixed

- 🐛 材料商城样式修改 [23a7df2]
- 🐛 修复模型纯预览页面中的加载水印功能报错的问题 [459870d]
- 🐛 修改qt.js文件中属性错误导致编译错误的问题 [1d511c7]
- 🐛 增加is-route-qt判断方法并且修复进入qt历史弹窗报错 [bd34dc9]

### Miscellaneous

- 🔀 Merge branch &#x27;1.10.0&#x27; into uat [93ae5ca]
-  Merge branch &#x27;1.10.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.10.0 [1a65932]
-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [786673d]
- 🔀 Merge branch &#x27;1.10.0&#x27; into uat [be7cabb]
-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into uat [e9eb7aa]
-  Merge remote-tracking branch &#x27;origin/uat&#x27; into uat [2a88439]
-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into uat [e581f73]
-  Update .rancher-pipeline.yml file [861f535]
- 🔀 Merge branch &#x27;1.10.0&#x27; into uat [9d92d95]
-  Merge remote-tracking branch &#x27;origin/uat-anta-poc&#x27; into uat [c0a608b]
-  Merge branch &#x27;qt-offline&#x27; into uat [7d99cb7]
-  Merge branch &#x27;qt-offline&#x27; into uat [c6785cc]
-  Merge branch &#x27;qt-offline&#x27; into uat [4139e24]
-  Update .rancher-pipeline.yml file [1ec95d8]
-  Merge branch &#x27;1.9.0&#x27; into uat [28c3d07]
- 🔀 合并1.9.0 [1526cfc]
-  Update .rancher-pipeline.yml file [cd839a1]
-  Merge branch &#x27;qt-offline&#x27; into uat [77067a1]
-  Merge remote-tracking branch &#x27;origin/1.9.0&#x27; into uat [d412ab6]
- 🔀 合并qt-offline分支代码 [4453088]
-  Merge branch &#x27;qt-offline&#x27; into uat [ac6f004]
-  Merge branch &#x27;1.8.0&#x27; into uat [191c939]
-  Merge branch &#x27;1.8.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.8.0 [e210129]
-  Merge branch &#x27;1.8.0&#x27; into uat [73d9dc8]
-  Merge branch &#x27;1.8.0&#x27; into uat [ebc2dd4]
-  Merge branch &#x27;1.7.0&#x27; into uat [feb9e0d]
-  Merge branch &#x27;1.7.0&#x27; into uat [4ce3288]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.local:front-end/demon-home into uat [55adcb7]
-  Merge branch &#x27;1.7.0&#x27; into uat [09969d4]
-  Merge branch &#x27;1.7.0&#x27; into uat [3d19ebe]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.local:front-end/demon-home into uat [9ae0848]
-  Merge branch &#x27;1.7.0&#x27; into uat [4ea0d67]
-  Merge branch &#x27;1.7.0&#x27; into uat [e9f0dc6]
-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into uat [7d049c7]
-  Merge branch &#x27;1.7.0&#x27; into uat [17a4708]
-  Merge branch &#x27;1.7.0&#x27; into uat [6bc0e2f]
-  Merge branch &#x27;1.7.0&#x27; into uat [61f7882]
-  Merge branch &#x27;1.7.0&#x27; into uat [49eba00]
-  Merge branch &#x27;1.7.0&#x27; into uat [80e0139]
-  Merge branch &#x27;1.7.0&#x27; into uat [bcbe7eb]
-  Merge branch &#x27;1.7.0&#x27; into uat [6455809]
- 🔀 合并分支 [3faf5a8]
-  Merge branch &#x27;1.7.0&#x27; into uat [8a0dfb7]
- 🔀 合并代码 [77fa741]
-  Merge branch &#x27;1.7.0&#x27; into uat [8bf336e]
-  Merge branch &#x27;1.7.0&#x27; into uat [7c5e2ec]
- 🔀 合并代码 [b997a1a]
-  Merge branch &#x27;1.7.0&#x27; into uat [ee3dc08]
-  Merge branch &#x27;1.7.0&#x27; into uat [237dcd1]
- 🔀 合并分支 [161cc6b]
-  Merge branch &#x27;1.6.1&#x27; into uat [11c9a7b]
-  Merge branch &#x27;1.6.1&#x27; into uat [3870414]
-  Merge branch &#x27;1.6.1&#x27; into uat [99ade98]
-  Merge branch &#x27;1.6.1&#x27; into uat [d7ace2f]
-  Merge branch &#x27;1.6.1&#x27; into uat [3a6d179]
-  Merge branch &#x27;1.6.1&#x27; into uat [1f0f905]
-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.10.58-beta.0"></a>
## 1.10.58-beta.0 (2020-04-30)

### Fixed

- 🐛 修复客户端路由报错的bug [e842c9d]


<a name="1.10.57-beta.0"></a>
## 1.10.57-beta.0 (2020-04-30)

### Fixed

- 🐛 修复客户端切换页面错误的bug [aad6af4]
- 🐛 修复qt批注列表页面中的读取数据的router数据的问题 [79a99dc]

### Miscellaneous

-  Merge branch &#x27;1.10.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.10.0 [15126f8]


<a name="1.10.56-beta.0"></a>
## 1.10.56-beta.0 (2020-04-30)

### Changed

- 🎨 调整批注类型与QT页面的通讯方法 [a1fe520]

### Miscellaneous

-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [62e4e67]


<a name="1.10.46-rc.0"></a>
## 1.10.46-rc.0 (2020-04-30)

### Added

- ✨ 以图搜图功能 [20e1d69]
- ✨ 调整批注列表页的代码，给QT项目调用页面 [9514c18]

### Changed

- ⏪ 修复由于合并的错误版本号的bug [4401fef]

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Fixed

- 🐛 修复从个人中心进入鞋款预览显示批注的问题 [9c0e46d]
- 🐛 修复鞋模型纯预览有时打不开的问题 [16517f5]
- 🐛 修改qt.js文件中属性错误导致编译错误的问题 [1d511c7]
- 🐛 增加is-route-qt判断方法并且修复进入qt历史弹窗报错 [bd34dc9]

### Miscellaneous

- 🔀 Merge branch &#x27;1.10.0&#x27; into uat [be7cabb]
-  Merge branch &#x27;1.10.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.10.0 [6ff6146]
-  Merge branch &#x27;stephen&#x27; into 1.10.0 [fe56544]
-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into uat [e9eb7aa]
-  Merge remote-tracking branch &#x27;origin/uat&#x27; into uat [2a88439]
-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into uat [e581f73]
-  Update .rancher-pipeline.yml file [861f535]
- 🔀 Merge branch &#x27;1.10.0&#x27; into uat [9d92d95]
-  Merge remote-tracking branch &#x27;origin/uat-anta-poc&#x27; into uat [c0a608b]
-  Merge branch &#x27;qt-offline&#x27; into uat [7d99cb7]
-  Merge branch &#x27;qt-offline&#x27; into uat [c6785cc]
-  Merge branch &#x27;qt-offline&#x27; into uat [4139e24]
-  Update .rancher-pipeline.yml file [1ec95d8]
-  Merge branch &#x27;1.9.0&#x27; into uat [28c3d07]
- 🔀 合并1.9.0 [1526cfc]
-  Update .rancher-pipeline.yml file [cd839a1]
-  Merge branch &#x27;qt-offline&#x27; into uat [77067a1]
-  Merge remote-tracking branch &#x27;origin/1.9.0&#x27; into uat [d412ab6]
- 🔀 合并qt-offline分支代码 [4453088]
-  Merge branch &#x27;qt-offline&#x27; into uat [ac6f004]
-  Merge branch &#x27;1.8.0&#x27; into uat [191c939]
-  Merge branch &#x27;1.8.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.8.0 [e210129]
-  Merge branch &#x27;1.8.0&#x27; into uat [73d9dc8]
-  Merge branch &#x27;1.8.0&#x27; into uat [ebc2dd4]
-  Merge branch &#x27;1.7.0&#x27; into uat [feb9e0d]
-  Merge branch &#x27;1.7.0&#x27; into uat [4ce3288]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.local:front-end/demon-home into uat [55adcb7]
-  Merge branch &#x27;1.7.0&#x27; into uat [09969d4]
-  Merge branch &#x27;1.7.0&#x27; into uat [3d19ebe]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.local:front-end/demon-home into uat [9ae0848]
-  Merge branch &#x27;1.7.0&#x27; into uat [4ea0d67]
-  Merge branch &#x27;1.7.0&#x27; into uat [e9f0dc6]
-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into uat [7d049c7]
-  Merge branch &#x27;1.7.0&#x27; into uat [17a4708]
-  Merge branch &#x27;1.7.0&#x27; into uat [6bc0e2f]
-  Merge branch &#x27;1.7.0&#x27; into uat [61f7882]
-  Merge branch &#x27;1.7.0&#x27; into uat [49eba00]
-  Merge branch &#x27;1.7.0&#x27; into uat [80e0139]
-  Merge branch &#x27;1.7.0&#x27; into uat [bcbe7eb]
-  Merge branch &#x27;1.7.0&#x27; into uat [6455809]
- 🔀 合并分支 [3faf5a8]
-  Merge branch &#x27;1.7.0&#x27; into uat [8a0dfb7]
- 🔀 合并代码 [77fa741]
-  Merge branch &#x27;1.7.0&#x27; into uat [8bf336e]
-  Merge branch &#x27;1.7.0&#x27; into uat [7c5e2ec]
- 🔀 合并代码 [b997a1a]
-  Merge branch &#x27;1.7.0&#x27; into uat [ee3dc08]
-  Merge branch &#x27;1.7.0&#x27; into uat [237dcd1]
- 🔀 合并分支 [161cc6b]
-  Merge branch &#x27;1.6.1&#x27; into uat [11c9a7b]
-  Merge branch &#x27;1.6.1&#x27; into uat [3870414]
-  Merge branch &#x27;1.6.1&#x27; into uat [99ade98]
-  Merge branch &#x27;1.6.1&#x27; into uat [d7ace2f]
-  Merge branch &#x27;1.6.1&#x27; into uat [3a6d179]
-  Merge branch &#x27;1.6.1&#x27; into uat [1f0f905]
-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.10.54-beta.0"></a>
## 1.10.54-beta.0 (2020-04-30)

### Added

- ✨ 新增indexDB缓存ctm文件的功能，但经过商量，用处可能不大，所以暂时注释掉了 [d390e80]

### Fixed

- 🐛 修复客户端复制错误的bug [e569ec3]
- 🐛 修复商家主页logo一定加载失败的问题 [941ec07]

### Miscellaneous

-  Merge branch &#x27;1.10.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.10.0 [52412d9]


<a name="1.10.53-beta.0"></a>
## 1.10.53-beta.0 (2020-04-29)

### Fixed

- 🐛 修复拖拽文件到workspace错误的bug [43a0450]

### Miscellaneous

-  Merge branch &#x27;1.10.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.10.0 [85dedf4]


<a name="1.10.52-beta.0"></a>
## 1.10.52-beta.0 (2020-04-29)

### Changed

- 🎨 版本相关的api接口调整，对应调整相应的接口 [c752fd6]
- 🎨 版本相关的api接口调整，对应调整相应的接口(遗漏一个接口) [6bbc58d]


<a name="1.10.51-beta.0"></a>
## 1.10.51-beta.0 (2020-04-29)

### Fixed

- 🐛 修复验证码登录时重复发送check请求的bug [d6b5f2e]


<a name="1.10.49-beta.0"></a>
## 1.10.49-beta.0 (2020-04-29)

### Added

- ✨ 优化邮箱动态校验组件的逻辑，增加mode&#x3D;checkExist，检测邮箱是否为已注册的合法账号 [f7f5270]

### Changed

- 🎨 版本相关的api接口调整，对应调整相应的接口 [984657c]

### Fixed

- 🐛 修复验证码登录的邮箱校验逻辑；修复重置密码时强度校验 [be89373]


<a name="1.10.48-beta.0"></a>
## 1.10.48-beta.0 (2020-04-29)

### Added

- ✨ 新增邮箱验证码登录，密码登录加入用户账号锁定逻辑&quot;&quot; [b89e21e]
- ✨ 新增邮箱验证码登录，密码登录加入用户账号锁定逻辑&quot; [5414350]

### Changed

- ♻️ 优化error-handler：把表单错误元素的focus转移到validation中；showError时优先使用显式指定的message [7154080]
- 💄 完善UI [e5869a3]

### Fixed

- 🐛 移除邮箱验证码登录时的邮箱校验 [e3d9b9a]
- 🐛 修复注册/修改密码（包括子账号）时密码强度校验的bug [b27f8f8]
- 🐛 修复客户端新增聊天窗口样式错误的bug [3981b17]
- 🐛 修复拖拽逻辑错误的bug [43fdc50]
- 🐛 修复拖动材质到文件夹，无法剪切的bug [3ca9f40]
- 🐛 修正register接口路径 [3995cce]

### Miscellaneous

-  Merge branch &#x27;1.10.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.10.0 [c613a71]


<a name="1.10.46-beta.0"></a>
## 1.10.46-beta.0 (2020-04-29)

### Added

- ✨ 新增邮箱验证码登录，密码登录加入用户账号锁定逻辑 [cc93df6]
- ✨ 增加注册页和修改密码时的密码强度校验 [e5a0f57]

### Changed

- 💄 修改面料详情的样式 [3813a54]
- 💄 调整上传页面的UI [5d892f3]
- ⬆️ 更新4d.js， 修改读取4ddat的路径 [5e72f35]

### Fixed

- 🐛 返回 dialogResult [7b94de6]
- 🐛 修复qt打开双重面料框的bug [50b4ecb]
- 🐛 修复获取面料解析地址时，先判断是否地址类：oss， pine [ac4b3c6]

### Miscellaneous

-  Merge branch &#x27;1.10.0&#x27; of 192.168.19.2:front-end/demon-home into 1.10.0 [d62a5db]
-  Merge branch &#x27;stephen&#x27; into 1.10.0 [cb89264]


<a name="1.10.45-rc.0"></a>
## 1.10.45-rc.0 (2020-04-28)

### Changed

- ⏪ 修复由于合并的错误版本号的bug [4401fef]

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Fixed

- 🐛 修改qt.js文件中属性错误导致编译错误的问题 [1d511c7]
- 🐛 增加is-route-qt判断方法并且修复进入qt历史弹窗报错 [bd34dc9]

### Miscellaneous

- 🔀 Merge branch &#x27;1.10.0&#x27; into uat [9d92d95]
-  Merge remote-tracking branch &#x27;origin/uat-anta-poc&#x27; into uat [c0a608b]
-  Merge branch &#x27;qt-offline&#x27; into uat [7d99cb7]
-  Merge branch &#x27;qt-offline&#x27; into uat [c6785cc]
-  Merge branch &#x27;qt-offline&#x27; into uat [4139e24]
-  Update .rancher-pipeline.yml file [1ec95d8]
-  Merge branch &#x27;1.9.0&#x27; into uat [28c3d07]
- 🔀 合并1.9.0 [1526cfc]
-  Update .rancher-pipeline.yml file [cd839a1]
-  Merge branch &#x27;qt-offline&#x27; into uat [77067a1]
-  Merge remote-tracking branch &#x27;origin/1.9.0&#x27; into uat [d412ab6]
- 🔀 合并qt-offline分支代码 [4453088]
-  Merge branch &#x27;qt-offline&#x27; into uat [ac6f004]
-  Merge branch &#x27;1.8.0&#x27; into uat [191c939]
-  Merge branch &#x27;1.8.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.8.0 [e210129]
-  Merge branch &#x27;1.8.0&#x27; into uat [73d9dc8]
-  Merge branch &#x27;1.8.0&#x27; into uat [ebc2dd4]
-  Merge branch &#x27;1.7.0&#x27; into uat [feb9e0d]
-  Merge branch &#x27;1.7.0&#x27; into uat [4ce3288]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.local:front-end/demon-home into uat [55adcb7]
-  Merge branch &#x27;1.7.0&#x27; into uat [09969d4]
-  Merge branch &#x27;1.7.0&#x27; into uat [3d19ebe]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.local:front-end/demon-home into uat [9ae0848]
-  Merge branch &#x27;1.7.0&#x27; into uat [4ea0d67]
-  Merge branch &#x27;1.7.0&#x27; into uat [e9f0dc6]
-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into uat [7d049c7]
-  Merge branch &#x27;1.7.0&#x27; into uat [17a4708]
-  Merge branch &#x27;1.7.0&#x27; into uat [6bc0e2f]
-  Merge branch &#x27;1.7.0&#x27; into uat [61f7882]
-  Merge branch &#x27;1.7.0&#x27; into uat [49eba00]
-  Merge branch &#x27;1.7.0&#x27; into uat [80e0139]
-  Merge branch &#x27;1.7.0&#x27; into uat [bcbe7eb]
-  Merge branch &#x27;1.7.0&#x27; into uat [6455809]
- 🔀 合并分支 [3faf5a8]
-  Merge branch &#x27;1.7.0&#x27; into uat [8a0dfb7]
- 🔀 合并代码 [77fa741]
-  Merge branch &#x27;1.7.0&#x27; into uat [8bf336e]
-  Merge branch &#x27;1.7.0&#x27; into uat [7c5e2ec]
- 🔀 合并代码 [b997a1a]
-  Merge branch &#x27;1.7.0&#x27; into uat [ee3dc08]
-  Merge branch &#x27;1.7.0&#x27; into uat [237dcd1]
- 🔀 合并分支 [161cc6b]
-  Merge branch &#x27;1.6.1&#x27; into uat [11c9a7b]
-  Merge branch &#x27;1.6.1&#x27; into uat [3870414]
-  Merge branch &#x27;1.6.1&#x27; into uat [99ade98]
-  Merge branch &#x27;1.6.1&#x27; into uat [d7ace2f]
-  Merge branch &#x27;1.6.1&#x27; into uat [3a6d179]
-  Merge branch &#x27;1.6.1&#x27; into uat [1f0f905]
-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.10.45-beta.0"></a>
## 1.10.45-beta.0 (2020-04-28)

### Fixed

- 🐛 非创建者不能修改面料属性字段 [736d365]


<a name="1.10.44-beta.0"></a>
## 1.10.44-beta.0 (2020-04-28)

### Fixed

- 🐛 修复面料单位错误的bug [995e523]
- 🐛 修复渲染页library项判断错误的bug [1b9caf2]


<a name="1.10.43-beta.0"></a>
## 1.10.43-beta.0 (2020-04-28)

### Changed

- 💬 更新材料商城翻译文本 [b6b23d6]

### Fixed

- 🐛 修复bug 固定文件夹的位置应该固定不变，不受任何因素影响 [69ff484]
- 🐛 供应商端渲染页删除library项 [090730d]
- 🐛 让商家主页里的go back返回为All product列表 [e65ebf0]
- 🐛 修复面料商品详情花纹标签不显示的bug [7bfb494]
- 🐛 列表页右键菜单没有静音的bug [f9dd4d7]
- ✏️ material library改成material mart [ce2f63d]
- 🐛 修复muted不生效的bug [4106f62]

### Miscellaneous

-  Merge branch &#x27;1.10.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.10.0 [68b5c5d]
-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [8e53c7a]
-  Merge branch &#x27;1.10.0&#x27; of 192.168.19.2:front-end/demon-home into 1.10.0 [341dee9]
-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [6125d91]


<a name="1.10.42-beta.0"></a>
## 1.10.42-beta.0 (2020-04-28)

### Added

- ✨ 修复错误处理不显示错误，或者消息丢失的bug [4f4e1fe]

### Changed

- 🔧 将测试环境public path改为/ [ac3ef68]
- ♻️ 优化：表单校验后focus到错误元素 [35c68dd]

### Removed

- 🔥 去掉一些无用代码 [6b8861b]

### Fixed

- 🐛  [7c7a603]
- 🐛 修复AppError类message无法赋值的bug [2bae34a]
- 🐛 修复catalog参数重命名的bug [f2fb027]

### Miscellaneous

-  Merge branch &#x27;1.10.0&#x27; of 192.168.19.2:front-end/demon-home into 1.10.0 [af7b134]
-  Merge branch &#x27;1.10.0&#x27; of 192.168.19.2:front-end/demon-home into 1.10.0 [d84dc36]


<a name="1.10.41-beta.0"></a>
## 1.10.41-beta.0 (2020-04-28)

### Added

- ✨ 恢复客户端面料下载功能 [7dd75f4]
- ✨ 缺少ws id的bug [477f9c0]

### Changed

- 🎨 分享跳转到IM功能 [9c45e60]
- 💄 增加商家主页的默认商家logo，当错误或未设logo时显示 [d28dfb8]
- 💄 调整商家主页的logo框的大小，即使图片加载失败，也不会坍塌 [82c6cfa]
- 🎨 优化商品详情代码 [533a099]

### Fixed

- 🐛 更换IM catalog接口 [4d313a3]
- 🐛 更新在IM获取文件信息的接口 [aa6ccc8]
- 🐛 更新在IM获取文件信息的接口 [86f75fd]
- 🐛 更换删除文件接口 [5baf1b1]
- 🐛 修复快捷方式进入渲染页会出bug的问题 [35bd4cc]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.10.0 [375eea6]
-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [1b474e7]
-  Merge branch &#x27;dannny&#x27; into 1.10.0 [e8ca19a]
-  Merge branch &#x27;1.10.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.10.0 [5c27fff]
-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into dannny [6c66777]
-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [d8807e2]


<a name="1.10.40-beta.0"></a>
## 1.10.40-beta.0 (2020-04-27)

### Changed

- 🎨 配置渲染鞋款页面中，虚拟账号的批注、云渲染和相册的按钮对应workspace的权限 [52b9814]

### Fixed

- 🐛 临时去掉anta的配置 [50de07d]
- 🐛 面料商城面料详情标签不可以编辑 [8971566]

### Miscellaneous

-  Merge branch &#x27;1.10.0&#x27; of 192.168.19.2:front-end/demon-home into 1.10.0 [42494da]
-  Merge branch &#x27;1.10.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.10.0 [e391075]
-  Merge branch &#x27;stephen&#x27; into 1.10.0 [9b71a98]


<a name="1.10.39-beta.0"></a>
## 1.10.39-beta.0 (2020-04-27)

### Added

- ✨ catalogInfoModel增加一个modelType [99ea62d]

### Fixed

- 🐛 fix KHD-115 [bae9119]
- 🐛 修改host对ws页面的转跳链接 [7ee9d10]
- 🐛 修复商家主页面料列表排序后组件复用的bug [1b0cbd0]

### Miscellaneous

-  Merge branch &#x27;1.10.0&#x27; of 192.168.19.2:front-end/demon-home into 1.10.0 [3737389]
-  Merge branch &#x27;1.10.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.10.0 [359db33]


<a name="1.10.38-beta.0"></a>
## 1.10.38-beta.0 (2020-04-27)

### Fixed

- 🐛 屏蔽libaray剪切和粘贴的功能 [7aad65b]

### Miscellaneous

-  Merge branch &#x27;1.10.0&#x27; of 192.168.19.2:front-end/demon-home into 1.10.0 [d20a1cf]


<a name="1.10.37-beta.0"></a>
## 1.10.37-beta.0 (2020-04-27)

### Changed

- 💄 删除面料预览页面中的取消按钮 [b258270]
- 🎨 Qt相关的dialog页面，添加一个字段标示记录当前弹框的类型 [d4ff0d7]
- ⬆️ 更新D4: 修复enableAO.json 文件导致渲染失败的问题 [18ae3a0]
- 🎨 渲染图册相关接口变动，相应调整接口 [e43e17b]

### Fixed

- 🐛 修复编辑面料后，在面料预览页面没有同步更新的问题 [b9521cc]

### Miscellaneous

-  Merge branch &#x27;stephen&#x27; into 1.10.0 [eb7b2da]
-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [f34c693]


<a name="1.10.36-beta.0"></a>
## 1.10.36-beta.0 (2020-04-27)

### Fixed

- 🐛 修复错误等级计算错误导致报错的bug [9d33e7a]
- 🐛 修复拖动catalog到ws报错的bug [14ddd7b]
- 🐛 去除商家主页的价格排序功能 [a7996ae]

### Miscellaneous

-  Merge branch &#x27;1.10.0&#x27; of 192.168.19.2:front-end/demon-home into 1.10.0 [44ba319]
-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [6cd3c0f]


<a name="1.10.35-beta.0"></a>
## 1.10.35-beta.0 (2020-04-27)

### Fixed

- 🐛 修复面料详情bug [9ac8f7c]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.10.0 [2579492]


<a name="1.10.34-beta.0"></a>
## 1.10.34-beta.0 (2020-04-27)

### Added

- ✨ 增加qt ws列表中转路由 [83f4c5b]
- ✨ 添加标签页面的修改权限控制 [5d73e75]

### Changed

- ⚡ 移动到的功能 [2d5eec8]
- ⬆️ 更新D4: 材质处理还有一些服装的需求 [3faa9f8]
- 🎨 调整面料上传的代码 [a9c1aeb]
- 🎨 面料标签组件添加是否编辑状态传递参数 [bc632c0]

### Miscellaneous

-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [8c7aa63]
-  Merge branch &#x27;stephen&#x27; into 1.10.0 [8b7a126]


<a name="1.10.33-beta.0"></a>
## 1.10.33-beta.0 (2020-04-27)

### Fixed

- 🐛 商家主页放大镜功能补上 [8af9446]
- 🐛 商家主页时间排序字段变更 [cfd7b66]
- ✏️ 把perview订正为preview [65e2117]
- 🐛 修复找相似接口缺少参数的bug [cbe71bb]
- 🐛 修复收藏夹商品详情接口传参错误的bug [ae146d8]
- ✏️  [7b25b34]
- 🐛 修复提高点击量参数错误的bug [772a079]
- 🐛 商品管理页把待更新和删除列表tab改成图标 [361caa3]
- 🐛 修复商家主页没有返回商家面料的问题 [7220dce]
- 🐛 修复面料详情样式错误的bug [c233aef]

### Miscellaneous

-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [11e26fb]
-  Merge branch &#x27;1.10.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.10.0 [be84fb1]


<a name="1.10.32-beta.0"></a>
## 1.10.32-beta.0 (2020-04-26)

### Changed

- 🎨 将属于商品的面料详情组件拆分出来 [f878fdf]

### Fixed

- 🐛 商品管理页all栏增加默认排序参数 [4fd6c3f]
- 🐛 修复面料颜色组件第一次进去，导致面料编辑页面异常报错的问题 [e30c017]
- 🐛 添加商城首页没有搜索结果时的预设页面 [19cf6cb]
- 🐛 修复搜索相同内容搜索按钮无效的bug [2683cb3]

### Miscellaneous

-  Merge branch &#x27;1.10.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.10.0 [050f2ac]
-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [561e48f]
-  Merge branch &#x27;1.10.0&#x27; into dannny [c9ef9bf]


<a name="1.10.31-beta.0"></a>
## 1.10.31-beta.0 (2020-04-26)

### Added

- ✨ fix MLSC-92 [7b150ca]

### Changed

- 🎨 新的轮播图组件补上放大镜功能 [33d97c7]

### Fixed

- 🐛 修复library中面料详细信息接口错误的bug [2a18443]
- 🐛 修复非2D鞋款发起离线渲染时，八个视角隐藏的问题 [9f9b279]

### Miscellaneous

-  Merge branch &#x27;1.10.0&#x27; of 192.168.19.2:front-end/demon-home into 1.10.0 [c4d4efd]
-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [8c46a1f]
-  Merge branch &#x27;dannny&#x27; into 1.10.0 [a1f9635]


<a name="1.10.30-beta.0"></a>
## 1.10.30-beta.0 (2020-04-26)

### Changed

- 🎨 调整上传面料的参数，把4ddat解压的matJson也存入renderArgements中 [fd2c247]
- 🎨 修改面料轮播图组件用element-ui自带的组件 [76d1d09]
- ♻️ 修复一些ts编译时报错 [c9362f1]
- 💄 添加公司logo为空的预设图片 [b40e084]
- 💄 上传面料页的上传图片要求的提示按钮应该去掉 [26d2851]
- 🎨 添加渲染发起任务的页面，兼容2D鞋款的情况 [70b5975]

### Removed

- 🔇 去掉一些没必要的console [65486c4]

### Fixed

- 🐛 修复在我的面料打开面料详情时出现有无货标识的bug [2facb0d]

### Miscellaneous

-  Merge branch &#x27;stephen&#x27; into 1.10.0 [09b9dd5]
-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [6742ffc]
-  Merge branch &#x27;1.10.0&#x27; of 192.168.19.2:front-end/demon-home into 1.10.0 [0bf0a03]
-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [51065a3]
-  Merge branch &#x27;dannny&#x27; into 1.10.0 [a5a25a1]
-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into 1.10.0 [55352e1]
- 🏷️ 解决材料商城ts类型报错问题 [ef98701]


<a name="1.10.29-beta.0"></a>
## 1.10.29-beta.0 (2020-04-26)

### Fixed

- 🐛 修复列表页灰边的bug [3b44498]


<a name="1.10.28-beta.0"></a>
## 1.10.28-beta.0 (2020-04-26)

### Fixed

- 🐛 修复qt上传报错 [7bf4b8d]


<a name="1.10.27-beta.0"></a>
## 1.10.27-beta.0 (2020-04-26)

### Added

- ✨ 修改复制的api [d835644]

### Miscellaneous

-  Merge branch &#x27;1.10.0&#x27; of 192.168.19.2:front-end/demon-home into 1.10.0 [e58aa40]


<a name="1.10.26-beta.0"></a>
## 1.10.26-beta.0 (2020-04-26)

### Changed

- 🎨 上传面料中的cancel和save按钮，在qt项目中响应不同的事件 [576d8c3]
- 🎨 上传面料中workspaceId用url传入的id [05aea12]

### Fixed

- 🐛 修复自动路由没有传meta的bug [656f751]


<a name="1.10.25-beta.0"></a>
## 1.10.25-beta.0 (2020-04-26)

### Fixed

- 🐛 修复鞋款保存没有保存成功的问题 [f886266]

### Miscellaneous

-  Merge branch &#x27;stephen&#x27; into 1.10.0 [538fdf4]


<a name="1.10.24-beta.0"></a>
## 1.10.24-beta.0 (2020-04-24)

### Added

- ✨ 调整catalog navigationTools的文案以及样式 [94d1f5f]

### Fixed

- 🐛 修复 blur的报错 [b8131a2]


<a name="1.10.23-beta.0"></a>
## 1.10.23-beta.0 (2020-04-24)

### Fixed

- 🐛 修复library拖动报错的bug [d557f22]

### Miscellaneous

-  Merge branch &#x27;1.10.0&#x27; of 192.168.19.2:front-end/demon-home into 1.10.0 [acd8191]


<a name="1.10.22-beta.0"></a>
## 1.10.22-beta.0 (2020-04-24)

### Fixed

- 🐛 修复vue-error-injector报错 [4519aeb]

### Miscellaneous

-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [13980e3]


<a name="1.10.21-beta.0"></a>
## 1.10.21-beta.0 (2020-04-24)

### Added

- ✨ 更换复制catalog的api [b4eb251]

### Changed

- 🚨 去掉一些eslint的报错 [3953c2f]
- 💬 更新catalog模块的翻译 [6a0e086]
- 🎨 调整部分上传面料页面代码结构 [199e2df]

### Removed

- 🔥 删除不必要的组件 [e41431d]

### Fixed

- 🐛 调整商品管理页的交互 [69975e0]
- 🐛 修复AppError.handle丢失的bug [2ee01f6]

### Miscellaneous

-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [b282010]
-  Merge branch &#x27;1.10.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.10.0 [f0c6a95]
-  Merge branch &#x27;stephen-ts&#x27; into 1.10.0 [eed6d69]
-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into dannny [d4e793c]


<a name="1.10.20-beta.0"></a>
## 1.10.20-beta.0 (2020-04-24)

### Added

- ✨ 商品管理页新增更新列表和删除列表功能 [ce40ac7]
- ✨ 面料商城图片预览功能 [77bbdda]

### Changed

- 🎨 调整use-callback……组件的变量声明 [5921eb7]
- 🎨 修复面料编辑单位错乱和缺失thickness字段编辑的问题 [5b27e60]
- 🎨 上传面料时，把4ddat文件路径传入参数中 [87f8208]
- 🎨 调整面料详情中轮播图的代码 [918e341]
- 💄 修改标签组件的样式；可以通过参数设置是否可以编辑 [1bd1202]

### Fixed

- 🐛 修复合并代码出现的错误 [3b9d9fd]
- 🐛 修复页面跳转removeListener报错 [0959efa]
- 🐛 修复渲染页createBoard图片错误的bug [10a67ca]
- ✏️ 商家后台英文化 [e7861b9]

### Miscellaneous

-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [651a700]
-  Merge branch &#x27;1.10.0&#x27; of 192.168.19.2:front-end/demon-home into 1.10.0 [4e383a8]
- 🏷️ 修复use-loader的类型错误 [675a132]
- 🔀 合并代码 [71ae871]
-  Merge branch &#x27;stephen&#x27; into 1.10.0 [6d9110e]
-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [2f75843]


<a name="1.10.19-beta.0"></a>
## 1.10.19-beta.0 (2020-04-24)

### Added

- ✨ 渲染页面面料库的功能 [a654a3e]
- ✨ use-loader到处loader类型 [cdea386]
- ✨ sync增加一个对象输入方式 [946e107]
- ✨ 允许clipboard和dragging-data command为空 [1dae084]

### Miscellaneous

- 🔀 修复合并冲突 [006b7f2]
-  Merge branch &#x27;1.10.0&#x27; of 192.168.19.2:front-end/demon-home into 1.10.0 [ecdabac]
- 🏷️ 增加catalog的一些类型 [fcea991]


<a name="1.10.18-beta.0"></a>
## 1.10.18-beta.0 (2020-04-24)

### Changed

- 💄 删除面料详情中的多余标签内容 [ad8ffdb]

### Fixed

- 🐛 上传面料页面，输入框保留了上一次输入信息的问题 [211ad66]

### Miscellaneous

-  Merge branch &#x27;stephen&#x27; into 1.10.0 [e7f815a]


<a name="1.10.17-beta.0"></a>
## 1.10.17-beta.0 (2020-04-24)

### Changed

- 💬 更新翻译文本 [cce5fcb]
- ♻️ 重构路由为ts，并且加入缓存机制 [3473ea7]
- 💄 更新iconfont [14561fd]

### Fixed

- 🐛 让快捷方式的面料使用新的面料详情 [c2dad68]
- 🐛 修复可以重复添加相同快捷方式的问题 [5faca9b]
- 🐛 修复侧边栏面料库前边有个框框的问题 [f83f0aa]
- 🐛 修复获取供应商列表错误的bug [b923355]
- 🐛 修复未上架不能上架的bug [fb520c9]
- 🐛 修复侧边栏有时没有显示对应的高亮的bug [5a4cec0]

### Miscellaneous

-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [5938813]
-  Merge branch &#x27;1.10.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.10.0 [e7aa820]
-  Merge branch &#x27;1.10.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.10.0 [fefbf1d]
-  Merge branch &#x27;dannny&#x27; into 1.10.0 [3488908]
-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [fc46075]
-  Merge branch &#x27;1.10.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.10.0 [4ce0da0]
-  Merge branch &#x27;1.10.0&#x27; of http://192.168.19.2/front-end/demon-home into 1.10.0 [e6cd254]
-  Merge branch &#x27;1.10.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.10.0 [fcea4dc]


<a name="1.10.16-beta.0"></a>
## 1.10.16-beta.0 (2020-04-24)

### Changed

- 🎨 修改面料详情中标签修改的交互 [88dd733]
- 🎨 新增company的model和loader，并在header里set，在侧边栏get，并对侧边栏里商家后台、面料库和面料商城做角色限制，非特定角色将不会显示入口 [7779efe]

### Fixed

- 🐛 修复找相似页面逻辑错误的bug [77b9ea6]
- 🐛 修复渲染页面中面料列表打开面料详情报错问题 [f29eca5]
- 🐛 修复拖拽面料到鞋模型无法渲染的问题 [499514f]
- 🐛 修复切换账号登录时，公司信息model没更新导致侧边栏显示错误的bug [83ea8df]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.10.0 [bbb4fa6]
-  Merge branch &#x27;stephen&#x27; into 1.10.0 [cf45f2b]
-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [939fc04]


<a name="1.10.15-beta.0"></a>
## 1.10.15-beta.0 (2020-04-24)

### Fixed

- 🐛 解决materialItem图片显示错误的bug [52222ef]

### Miscellaneous

-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [9d7094b]
-  Merge branch &#x27;1.10.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.10.0 [561c1a1]
-  Merge branch &#x27;dannny&#x27; into 1.10.0 [4560615]


<a name="1.10.14-beta.0"></a>
## 1.10.14-beta.0 (2020-04-24)

### Added

- ✨ 增加配置 [e334a71]

### Changed

- 🎨 修复面料编辑页中编辑后无法同步数据的问题 [23091b6]

### Fixed

- 🐛 修复面料编辑中国家选项无法读取数据的问题 [f4e3fbf]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into stephen [cd48a75]
-  Merge branches &#x27;1.10.0&#x27; and &#x27;1.10.0&#x27; of 192.168.19.2:front-end/demon-home into 1.10.0 [39a3f07]


<a name="1.10.13-beta.0"></a>
## 1.10.13-beta.0 (2020-04-24)

### Fixed

- 🐛 商品管理页图片字段跟随后端变更 [d7dad21]


<a name="1.10.12-beta.0"></a>
## 1.10.12-beta.0 (2020-04-23)

### Added

- ✨ 对面料中数字类型做非负数校验 [af3e73f]
- ✨ 增加一个is-function工具 [e92b4b9]
- ✨ 自动路由增加meta [a0bb535]

### Changed

- 🎨 面料详情颜色类型时，把对应的颜色也显示出来 [c575532]
- 🎨 上传面料时添加一个解析文件的进度条 [b35cf71]
- 💄 上传按钮改成图标 [bc71dff]

### Fixed

- 🐛 修改materialItem部分字段 [6b2e95e]
- 🐛 修复面料轮播图中左右滑动状态颠倒的问题 [0619463]
- 🐛 给没有公司名时加上默认值 [e0becbb]
- ✏️ 把上架下架字眼改为设为上架和设为下架 [276d011]
- 🐛 修复自动路由的类型错误 [7b5b36f]
- 🐛 修复请求user Info 用错地址的bug [d7ed08c]

### Miscellaneous

-  Merge branch &#x27;stephen&#x27; into 1.10.0 [d6ebf08]
-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [8f5a7a2]
-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into stephen [5ab6c07]
-  Merge branch &#x27;dannny&#x27; into 1.10.0 [98a4de3]
-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into stephen [ee40433]
-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [421d806]
-  Merge branch &#x27;1.10.0&#x27; of 192.168.19.2:front-end/demon-home into 1.10.0 [10a8c7b]


<a name="1.10.11-beta.0"></a>
## 1.10.11-beta.0 (2020-04-23)

### Added

- ✨ 优化错误处理 [4fb993a]
- ✨ 商城首页 [d2a317a]

### Fixed

- 🐛 修复面料详情中轮播图图片顺序不对的问题 [1417a7c]
- 🐛 修改有无货判断 [490ae6b]
- 🐛 修复面料详情中无法看到单位内容的问题 [8babd7c]
- 🐛 面料商城 [c94507d]
- 🐛 修复全局找不到errorHandler的bug [db9249e]

### Miscellaneous

-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [d324f44]
-  Merge branch &#x27;dannny&#x27; into 1.10.0 [1dfd830]
-  Merge branch &#x27;1.10.0&#x27; of 192.168.19.2:front-end/demon-home into 1.10.0 [cdd69b3]
-  Merge branch &#x27;1.10.0&#x27; into dannny [55e2b53]


<a name="1.10.8-beta.0"></a>
## 1.10.8-beta.0 (2020-04-23)

### Changed

- 🎨 处理文件合并冲突 [dfa7c67]
- 🎨 修复上传面料中存在的问题 [286fccf]
- ⬆️ 更新D4库版本 [7661ba6]

### Miscellaneous

-  Merge branch &#x27;stephen-material-1.10.0&#x27; into 1.10.0 [4347cfe]
-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into 1.10.0 [d2e73a7]


<a name="1.10.7-beta.0"></a>
## 1.10.7-beta.0 (2020-04-23)

### Fixed

- 🐛 商品管理页对接图片 [05ed836]


<a name="1.10.6-beta.0"></a>
## 1.10.6-beta.0 (2020-04-23)

### Fixed

- 🐛 修复商品管理里，查看详情时打开固定一个面料的问题 [7647ff2]
- 🐛 修复public的header里company type变更产生的问题 [1078ffb]

### Miscellaneous

-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [f6a75ef]


<a name="1.10.5-beta.0"></a>
## 1.10.5-beta.0 (2020-04-23)

### Changed

- 🎨 完善面料详情阅览中字典数据展示问题 [8873487]
- 🎨 把buttonHome的a改为router-link以解决未知报错 [1ea4afe]

### Removed

- 🔥 去掉一些冗余代码 [3aeaadb]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into stephen-material-1.10.0 [462ceff]
-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [c6aa2e9]


<a name="1.10.4-beta.0"></a>
## 1.10.4-beta.0 (2020-04-23)

### Fixed

- 🐛 修复qt没有收到parentId的bug [017f0e5]
- 🐛 修复errorHandler没有显示错误信息的bug [d923222]
- 🐛 修复由于样式导致的不能拖动的bug [6b653ad]


<a name="1.10.3-beta.0"></a>
## 1.10.3-beta.0 (2020-04-23)

### Added

- ✨ 将qt打开的api改为json [226f6ff]
- ✨ history模块的push和replace回跳过undefined的error [78c9c6b]
- ✨ 创建字典类型缓存中心 [0407ae0]
- ✨ 避免跨ws赋值报错 [20395db]

### Changed

- 🎨 公司列表 [4ec296c]
- 🎨 调整滚动加载组件的销毁逻辑 [2fa5c61]
- 🎨 完善上传面料和面料详情的功能 [65d3111]
- 🎨 调整滚动加载组件的逻辑 [611c545]
- 🎨 修改头部面料上传入口 [45230e6]

### Fixed

- 🐛 商城首页逻辑修改 [a5a5a86]
- 🐛 调整catalog的一些样式 [36df782]
- 🐛 修复catalog切换目录没有清楚选择的bug [7989c1e]
- 🐛 Promise.allSettled 兼容处理 [cf0c155]

### Miscellaneous

-  Merge branch &#x27;1.10.0&#x27; of 192.168.19.2:front-end/demon-home into 1.10.0 [605ad7f]
-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [e187edb]
-  Merge branch &#x27;1.10.0&#x27; of 192.168.19.2:front-end/demon-home into 1.10.0 [cf02d9b]
-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into stephen-material-1.10.0 [54e14a9]
-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [220f1bc]
-  Merge branch &#x27;1.10.0&#x27; of 192.168.19.2:front-end/demon-home into 1.10.0 [0ee6c11]
-  Merge branch &#x27;1.10.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.10.0 [e887c3b]
- 🏷️ 修复jsx-utils的类型bug [5049a2f]
-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into stephen-material-1.10.0 [3af14f6]


<a name="1.10.2-beta.0"></a>
## 1.10.2-beta.0 (2020-04-22)

### Added

- ✨ 面料item字段修改 [32a8ee7]

### Changed

- 🎨 完善上传页面的功能 [97a5b84]
- 🎨 优化面料商城逻辑 [85d0969]

### Fixed

- 🐛 修改获取收藏接口 [f5a3f34]
- 🐛 修复复制粘贴报错 [a07db3a]

### Miscellaneous

-  Merge branch &#x27;1.10.0&#x27; into dannny [c1c00fb]
- 🚧 面料商城 [bf95992]
-  Merge branch &#x27;stephen-material-1.10.0&#x27; into 1.10.0 [8571a81]
-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into dannny [3b70617]
- 🚧 优化面料商城首页逻辑 [3fa1227]


<a name="1.10.1-beta.0"></a>
## 1.10.1-beta.0 (2020-04-22)

### Changed

- ♻️ 修改catalog的请求url并且修复createboard拖动以及菜单报错的bug [445359d]

### Fixed

- 🐛 修复面料库报错 [128da86]
- 🐛 修复catalog缩略图缺失的bug [f216736]
- ✏️ 修改部分错误表述 [f6db699]
- 🐛 修复catalog查看图报错的bug [3ec6a1d]
- 🐛 调整商家主页面料的滚动加载逻辑 [df37b28]

### Miscellaneous

-  Merge branch &#x27;1.10.0&#x27; of 192.168.19.2:front-end/demon-home into 1.10.0 [0a6cb88]
-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [e49ffb2]
-  Merge branch &#x27;1.10.0&#x27; of 192.168.19.2:front-end/demon-home into 1.10.0 [56244b3]
-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [71e861a]


<a name="1.10.0-beta.0"></a>
## 1.10.0-beta.0 (2020-04-22)

### Added

- ✨ 优化右键菜单的权限 [c4cdc1f]
- ✨ 修改面料库调用的api [a03a638]
- ✨ 给商品管理的增加查看详情的操作 [04238e6]
- ✨ 更新面料库的权限 [da64b4d]
- ✨ 对接面料详情修改的相关接口 [c316ba8]
- ✨ 面料详情添加/取消收藏 [44b5541]
- ✨ 面料详情收藏功能 [b15e750]
- ✨ 面料库功能 [74c4872]
- ✨ 增加面料库的入口以及修复一些bug [ef3c6b9]
- ✨ 新增商家找色卡版功能 [df557bd]
- ✨ 让供应商的materialItem在商家主页的列表中emit找色卡的事件 [7d4aef9]
- ✨ 对接面料详情预览相关接口 [6a75f42]
- ✨ 完善商家管理和我的主页，增加入口，完成大部分功能 [4258594]
- ✨ 优化shortcut的逻辑 [55f6708]
- ✨ 创建面料详情浏览页面组件及样式交互 [c11330f]
- ✨ 创建面料详情编辑页面相关的组件和样式交互 [866830e]
- 🎉 新增商家主页和商品管理的框架页面 [b081a39]
- ✨ 创建面料上传中选择颜色组件 [3a9619f]

### Changed

- 🎨 去除设计师视觉和供应商视觉下商家主页的找相似功能 [b070f4b]
- 🎨 调整设计师视觉下的商家主页的返回上一级，改为返回面料商城 [47b5d36]
- 🎨 给设计师视觉的商家主页加了header [54970b9]
- 🎨 完善上传面料页面（添加loading状态、成功提示、字段缺失修复） [fe434ee]
- 🎨 把flex：1传递到商品管理页的列表中 [5c2e8f5]
- 🎨 单位类型字段展示文本对接新的接口字段 [139dbab]
- 💄 调整商品管理搜索栏样式 [81074cb]
- 💄 调整商品管理tab高亮的条件判断 [05efbd4]
- 💄 调整商品管理的表格样式，增加current-page属性 [228ae12]
- 🎨 修改面料上传中颜色选择组件 [515462d]
- 🎨 将新手指引已读状态保存到localstorage [98efe91]
- 🎨 对接单位字典相关接口；修改以往传事件的方法统一为 chang [82ef28b]
- 🎨 修改面料上传调整面料参数的小数点扩大到4位 [1688d87]
- 🎨 渲染图册功能相关添加权限控制 [8de9941]
- 🎨 将面料上传图片后预览在鞋款上效果的代码迁移到新面料上传中 [3b2f8a5]
- ⚡ 优化clipboard以及draggingData [25c8884]
- 🎨 对上传面料表单添加校验功能 [c07a5c3]
- 🎨 面料上传中的颜色渲染组件，点击范围扩大；在初始化时，也传递出值给父组件 [11596b2]
- ♻️ 去除.draggingData [5cd335a]
- ♻️ 重构目录组件以及合并部分技术盏 [a5d82bd]
- 🎨 调整相册放大图片通过localstorage存储 [3aabb25]
- ♻️ 替换插件以及优化路由 [ebf23a0]
- 🎨 调整商家后台的结构，在列表页增加商家后台的侧边栏入口 [3700687]
- ♻️ 重构store并且替换替换部分ts的技术盏 [168f432]
- 🎨 配置sidebar路由 [de9488c]
- 🎨 面料上传页面的样式布局调整和对表单进行简单校验 [53b19c5]
- 🎨 调整面料上传相关的组件的代码 [54d9296]
- 💄 更新iconfont [092733c]
- 🎨 撤销放大镜中的定时器 [faee12b]
- 🎨 调整相册没有在渲染没完成的图片不能加入放大镜中 [95276cd]
- 🎨 将时间中的小时格式转为24小时制 [2d3cd94]
- 🎨 完善上传面料页面中的代码 [06facec]
- 🎨 删除User.updateSessions方法 [b3ffdb1]
- 🎨 调整qt放大镜页面监听关闭时间时，必须在viewerObject初始化成功后再监听 [baba2c0]
- 💄 调整渲染配置的页面的高度为0 [756a6b8]

### Removed

- 🔥 清理一些旧的pageFileList的逻辑 [8625882]
- 🔥 去掉一些没必要的console [c862c8b]
- 🔥 去掉一些没必要的console [7e48df8]
- 🔥 去掉没必要的store [0d2402d]

### Fixed

- 🐛 调整设计师视觉下商家主页商品的找相似的参数 [8d325cf]
- 🐛 修改上传入口 [e4d004a]
- 🐛 修复token过期时无法进入登录页的问题 [0507c41]
- 🐛 修复closeWith不生效的bug [7749ac4]
- 🐛 改善文件夹是否为空的判断逻辑 [0265b05]
- 🐛 将catalog挂在到store [3e9e2dd]
- 🐛 修复弹框重复滚动条以及面料弹窗双重滚动的bug [d504a50]
- 🐛 修复列表页部分功能丢失以及报错的bug [3cb0050]
- 🐛 修复订货会入口丢失的bug [283c925]
- 🐛 修复一些权限重构导致的残余问题 [36c83c5]
- 🐛 修复面料详情中轮播图指示错乱和放大镜没有放大当前打开图片的问题 [b825491]
- 🐛 修复权限默认值的判断错误的bug [134968a]
- 🐛 修复客户端双击鞋款无法打开的问题 [1f90f27]
- 🐛 修复相册图片过多打开放大镜空白的问题（cookies长度限制问题） [1bf6f43]
- 🐛 修复双击面料没有打开面料详情的问题 [7bbed2b]
- 🐛 通过传递是否最外层有滚动条的参数，控制渲染设置是否有滚动条的情况 [ef406ef]

### Miscellaneous

-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [4860cfe]
-  Merge branch &#x27;1.10.0&#x27; of 192.168.19.2:front-end/demon-home into 1.10.0 [f182089]
-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [711fea3]
-  Merge branch &#x27;1.10.0&#x27; of 192.168.19.2:front-end/demon-home into 1.10.0 [6259883]
-  Merge branch &#x27;1.10.0&#x27; of 192.168.19.2:front-end/demon-home into 1.10.0 [9d89b8b]
-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [70902ca]
-  Merge branch &#x27;stephen-material-1.10.0&#x27; into 1.10.0 [1da9b10]
-  Merge branch &#x27;1.10.0&#x27; of 192.168.19.2:front-end/demon-home into 1.10.0 [97bf0e4]
-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [02a5b93]
-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into dannny [fec1278]
-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into dannny [6a554dc]
-  Merge branch &#x27;1.10.0&#x27; of 192.168.19.2:front-end/demon-home into 1.10.0 [39bc9d4]
-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [96a4323]
-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into dannny [bc27a82]
- 🚧 面料商城 [a7cf80b]
-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into stephen-material-1.10.0 [b36f70a]
-  Merge branch &#x27;stephen&#x27; into stephen-material-1.10.0 [1f4190a]
-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into stephen-material-1.10.0 [7bb86f0]
-  Merge branch &#x27;stephen&#x27; of gitlab.4dshoetech.local:front-end/demon-home into stephen [b1e507c]
-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into onion1.10.0 [3c4f76e]
- 🔀 合并1.10.0 [14b8203]
- 🚧 优化面料商城逻辑 [33db979]
-  Update .rancher-pipeline.yml file [9ec2c28]
-  Merge branch &#x27;stephen&#x27; into stephen-material-1.10.0 [506adf2]
-  Merge branch &#x27;1.10.0&#x27; of 192.168.19.2:front-end/demon-home into 1.10.0 [4a9fa30]
-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into dannny [d49d4a0]
-  Merge branch &#x27;onion1.10.0&#x27; into 1.10.0 [026a8d3]
-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into dannny [ff76ce2]
- 🚧 更新面料商城 [8376fed]
-  Merge branch &#x27;1.10.0&#x27; into onion1.10.0 [6f99278]
-   [4ee627c]
-  Merge branch &#x27;onion1.10.0&#x27; into 1.10.0 [02110c6]
-  Merge branch &#x27;1.10.0&#x27; into dannny [282ee84]
- 🚧 更新面料商城页面 [e6cb474]
-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into 1.10.0 [5b508b3]
-  Merge branch &#x27;dannny&#x27; into 1.10.0 [e9ec181]
-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into 1.10.0 [9496dff]
-  Merge branch &#x27;1.10.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.10.0 [2fab4ce]


<a name="1.9.1-beta.0"></a>
## 1.9.1-beta.0 (2020-04-15)

### Added

- ✨ 面料上传页面的布局 [2e18def]
- ✨ 添加面料上传的新路由 [d5f288f]
- ✨ 创建批注为空时，占位图文的组件 [2febf35]
- ✨ 将批注的逻辑抽离出单独一个文件来处理 [ff7d7e9]
- ✨ web端添加渲染图册中的渲染配置功能 [91e4466]
- ✨ 修复im断开后不断重试的bug [ff4c583]
- ✨ scroll 转成 ts [9d56f06]
- ✨ 优化im自动重连逻辑 [d5c02b4]
- ✨ 增加面料修改的系统消息 [6f3a784]
- ✨ 增加单位选择功能 [6ba1d98]
- ✨ 对接以图搜图的功能 [0e3aa77]
- ✨ 历史台账页面的交互和接口对接 [48032e2]
- ✨ 出库记录统计表 [d64aa71]
- ✨ 将订货会的逻辑转移到user [1fc5852]
- ✨ 调整路由和anta-poc的基础样式 [aa710d9]
- ✨ 导出台账功能 [02f130c]
- ✨ qt增加转跳钩子 [076df58]
- ✨ 增加材料目录的入口 [f201220]
- ✨ 出入库接口、历史台账 [9e85b68]
- ✨ 调试打印样品的功能 [07dda44]
- ✨ 增加台账路由 [a767bb7]
- ✨ 导航 [512c2df]
- ✨ 基本的布局 [5994c91]
- ✨ 进销存接口 [d510de5]
- ✨ 安装composition-api [8bcdd95]
- ✨ 引入安踏poc的智能分析页 [47b5ec7]
- ✨ poc的router-view [2164642]
- ✨ 增加utils/axios [30a4236]
- ✨ 将安踏 台账相关的页面迁移到该项目下 [2525cde]
- ✨ 增加anta的路由 [f78acce]
- ✨ 增加use-loader [3469b36]
- ✨ 合并运营平台的技术栈 [025c6a6]

### Changed

- 💄 调整纯模型页面批注侧边栏的样式 [68d112a]
- 💄 调整模型纯预览页面的样式布局 [cff8920]
- ♻️ 整理store并且删除一些没必要的store [25fedfd]
- 🔧 将bump默认改为patch [1d7a354]
- 💄 修复渲染设置页面弹框长度不适应的问题 [700b325]
- 🎨 放大镜默认放大为原图的两倍 [e09c94a]
- 🎨 调整相册中的放大镜的图片通过localstorage来传递 [6b8ba16]
- 🎨 修改渲染相册中的渲染参数配置 [e45f024]
- 🎨 修改渲染相册的渲染参数 [12c5744]
- 🎨 根据接口调整，渲染相册相关的接口都要在headers 添加 groupAppId &#x3D; workspaceId [1b6c1ec]
- 🎨 发现新的渲染图册任务时，如果没有检测到变化；在当前版本发起渲染任务 [aafaac0]
- 💄 设置messageBox按钮样式 [00616f9]
- 🎨 对安踏项目中历史台账部分的代码转为TS [3184dfb]
- 🎨 将安踏项目中的历史台账页面转为ts [21bda5f]
- 🎨 修改安踏历史台账页面的代码 [6798e7b]
- 💄 修改登录模块订阅成功时的提示语 [6ad7875]
- ⬆️ 更新D4 1.5.24版本，修复模型换材质变暗的bug [9a5bd99]
- 🎨 修改日期格式 [8e6d1fb]
- 🚚 迁移use-closest的位置 [af692e5]
- 💄 渲染相册加载数据时，添加loading动画 [adaf868]
- 💄 更新新增材料样式 [b4ccb2e]
- 💄 修改已图修图的图标 [dfa0b3f]
- 🎨 为修改scrollbar width做准备 [b3f43d5]
- 🔧 优化配置 [07c7887]
- 💄 优化分析页的UI和交互 [cf5dbb8]
- 🎨 重新调整打印样品卡的界面逻辑和从新对接接口 [e9bc695]
- 💄 优化task-order的样式 [1aaa250]
- ⬆️ 更新最新的D4代码，修复Id识别不了的问题 [bc63a83]
- ♻️ 重构fileList sidebar [6bac200]
- ⬆️ 更新最新的D4代码，提升固定三款鞋的渲染效果； [9324857]
- 🎨 调整台账页面的布局；添加特卖和报废的交互 [c04a757]
- ♻️ 重构路由相关工具 [ac390c0]
- 🔧 将默认环境设置为test [07989f5]

### Removed

- 🔇 删除log [9586088]
- ➖ 去掉质量管理 [13a08e1]

### Fixed

- 🚑 修复弹框组件中，出现v-modal遮罩层导致最右侧滚动条无法滚动问题 [3e85074]
- 🐛 修复渲染相册按钮时，弹出加载中状态导致出现滚动条的问题 [c125207]
- 🐛 修复IM bug [0bf03f1]
- 🐛 更换获取私聊对象信息的方式 [d5b37e8]
- 🐛 修复面料详情中轮播切换颠倒的问题 [adcd3c8]
- 🐛 修复面料详情中轮播图左右切换逻辑颠倒的问题 [8f47a05]
- 🐛 更换私聊用户头像获取方式 [6cedf9e]
- 🐛 修复相册中显示图片压缩的效果， 调整显示方式为contain [b5a0a70]
- 🐛 修复安踏项目中打印样品卡时，出现日期格式错乱的问题 [6742ef9]
- 🐛 出入库表单时间默认当前时间 [77cf7e5]
- 🐛 修复安踏项目中导出台账csv文件时，出现科学计数法和日期格式错乱的问题 [93890e7]
- 🐛 修复IM会在登录页自动重连的bug [c6741c8]
- 🐛 修复在列表页中快捷功能进入渲染页没有携带catalogId，导致多个接口报错的问题 [6ed4b29]
- 🐛 删除不必要的debugger [14bcc30]
- 🐛 修复web端渲染图册任务在鞋款没有发烧变化时没有发起渲染的问题 [6054ebe]
- 🐛 修复web端渲染图册任务在当前版本发起渲染任务的问题 [4829954]
- 🐛 解决首次登录多次请求群聊列表的 bug [0633b78]
- 🐛 修复群聊人数不现实的bug [f9d45c7]
- 🐛 修改群聊人数获取方式 [2f63e1d]
- 🐛 修复历史版本列表图片比例不对的bug [8de2c36]
- 🐛 修复客户端历史版本没有请求ws权限的bug [441ea61]
- 🐛 修复序号列宽度太小的问题 [982499f]
- 🐛 修复材质详情页面，由于表单校验不通过导致无法修改的问题 [1634a54]
- 🐛 再次修复模型渲染时，不在中央的问题 [22c8667]
- 🐛 任务订单加入一些基本交互 [83f2ebb]
- 🐛 修复im connect 单例导致的bug [4fde157]
- 🐛 修复模型渲染时，不在中央的问题 [01020ea]
- 🐛 修复渲染相册在不同部署环境下地址错误，导致无法打开的问题； [663de23]
- ✏️ 修改修改面料信息提醒的字眼 [977a350]
- 🐛 修复没有权限拖拽到WS时报错信息不对的bug [51c95df]
- 🐛 修复路由函数错误的bug [0954faf]
- 🐛 修复样品打印没有传对应属性会显示双括号的问题 [2699e7e]
- 🐛 修复时间格式错误的bug [59aa0c6]
- 🐛 修复时间格式错误的bug [83659ee]
- 🐛 修复合并代码导致样品打印功能错误的问题 [366f63b]
- 🐛 调整样式 [7f849e0]
- 🐛 修复左侧导航由于路由变更导致的空白的bug [6cd85fc]
- 🐛 修复新增行报错的bug [53fd82e]
- 🐛 修复分析页项内容较多时宽度过高的问题 [0347b73]
- 🐛 更新特卖和报废状态 [e85a680]
- 🐛 避免没有找到refName导致的ci报错 [05a3b69]
- 🐛 修复eslint错误 [fc10929]
- 🐛 更新路由 [c7e2fa2]
- 🐛 将 rancher mode 改为uat [b17b8ec]
- 🐛 sidebar 目录名字修改 [39baf6b]
- 🐛 修复分析数据表宽度过长的问题、优化数据图表 [9b459ef]
- 🐛 _goToPage &#x3D;&gt; _gotoPage [2a0fc81]
- 🐛 去掉一些没必要的路由 [46bbcd5]
- 🐛 把图接上 [fa2d69b]
- 🐛 修复循环引用的bug [3d4d967]
- 🐛 修复缺少text-caret的bug [2d6e411]
- 🐛 修复由于相册图片为空时，导致放大镜组件编译错误导致无法显示的问题 [a9629a5]
- 🐛 修复QT环境下打开历史版本弹框显示空白的问题 [2dd3bed]
- 🐛 修复版本中没有任何渲染图册时，没有显示空的文本提示问题 [9130c47]
- 🐛 修复在QT界面是，渲染相册页面会多出一个标题的问题 [84c0fd0]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.10.0&#x27; into 1.10.0 [b0809d2]
-  Merge branch &#x27;uat-anta-poc&#x27; into stephen [a8ad031]
-  Merge remote-tracking branch &#x27;origin/uat-anta-poc&#x27; into anta-poc [7f80d60]
-  Merge branch &#x27;anta-poc&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into anta-poc [06a9f34]
-  Merge branch &#x27;anta-poc&#x27; of gitlab.4dshoetech.local:front-end/demon-home into anta-poc [e374f6b]
-  Merge branch &#x27;anta-poc&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into anta-poc [9ce9169]
-  Merge branch &#x27;anta-poc&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into anta-poc [3c2d0dc]
-  Merge branch &#x27;anta-poc&#x27; of gitlab.4dshoetech.local:front-end/demon-home into anta-poc [005612d]
-  Merge branch &#x27;anta-poc&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into anta-poc [e77013e]
-  Merge branch &#x27;stephen&#x27; into anta-poc [a163b90]
-  Merge branch &#x27;anta-poc&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into anta-poc [12325f2]
-  Merge branch &#x27;anta-poc&#x27; of gitlab.4dshoetech.local:front-end/demon-home into anta-poc [28bb077]
-  Merge branch &#x27;anta-poc&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into anta-poc [c86f516]
-  Merge branch &#x27;anta-danny&#x27; into anta-poc [8a45d00]
-  Merge branch &#x27;anta-poc&#x27; of gitlab.4dshoetech.local:front-end/demon-home into anta-poc [f93e0e7]
-  Merge branch &#x27;anta-poc&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into anta-poc [c642fcb]
-  Merge branch &#x27;anta-poc&#x27; into anta-danny [e4cece4]
-  Merge branch &#x27;anta-poc&#x27; of gitlab.4dshoetech.local:front-end/demon-home into anta-poc [c9da712]
-  Merge branch &#x27;anta-poc&#x27; of gitlab.4dshoetech.local:front-end/demon-home into anta-poc [95ae20e]
-  Merge branch &#x27;anta-poc&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into anta-poc [970a0c9]
-  Merge branch &#x27;anta-poc&#x27; of gitlab.4dshoetech.local:front-end/demon-home into anta-poc [c6f3e80]
-  Merge branch &#x27;1.10.0&#x27; into anta-poc [935a5c0]
-  Merge branch &#x27;anta-poc&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into anta-poc [9653632]
-  Merge branch &#x27;stephen&#x27; into anta-poc [4a20bf7]
-  Merge branch &#x27;anta-poc&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into anta-poc [7ad7579]
-  Merge branch &#x27;anta-poc&#x27; of gitlab.4dshoetech.local:front-end/demon-home into anta-poc [f1c4f1c]
-  Merge branch &#x27;anta-poc&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into anta-poc [7eb6216]
-  Merge branch &#x27;anta-danny&#x27; into anta-poc [e95e0c1]
-  Merge branch &#x27;anta-poc&#x27; of gitlab.4dshoetech.local:front-end/demon-home into anta-poc [08e7e8c]
-  Merge branch &#x27;stephen&#x27; into anta-poc [f29fd32]
-  Merge branch &#x27;anta-poc&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into anta-poc [76678e4]
-  Merge branch &#x27;anta-poc&#x27; of gitlab.4dshoetech.local:front-end/demon-home into anta-poc [7d6aba5]
-  Merge remote-tracking branch &#x27;origin/stephen&#x27; into anta-poc [7e5d8af]
-  Merge branch &#x27;anta-danny&#x27; into anta-poc [f61f9af]
-  Merge branch &#x27;anta-poc&#x27; of gitlab.4dshoetech.local:front-end/demon-home into anta-poc [1644b48]
-  Merge branch &#x27;1.10.0&#x27; into anta-poc [5d48933]
-  Merge branch &#x27;anta-poc&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into anta-poc [9428ac3]
-  Merge branch &#x27;anta-poc&#x27; of gitlab.4dshoetech.local:front-end/demon-home into anta-poc [9b1e02e]
-  Merge branch &#x27;1.10.0&#x27; into anta-poc [6d1cdf1]
-  Merge branch &#x27;anta-poc&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into anta-poc [5e6384c]
-  Merge branch &#x27;anta-poc&#x27; of gitlab.4dshoetech.local:front-end/demon-home into anta-poc [62278ad]
-  Update .rancher-pipeline.yml file [617f08c]
-  Merge remote-tracking branch &#x27;origin/stephen&#x27; into anta-poc [815bf55]
- 🔀 合并1.10.0的修改 [bbf5b62]
-  Merge branch &#x27;1.10.0&#x27; into anta-poc [1d76a50]
-  Merge branch &#x27;anta-poc&#x27; of gitlab.4dshoetech.local:front-end/demon-home into anta-poc [10d77a1]
-  Merge branch &#x27;anta-danny&#x27; into anta-poc [8a90828]
-  Merge branch &#x27;1.10.0&#x27; into anta-poc [2b908ee]
-  Merge branch &#x27;1.10.0&#x27; into anta-poc [baeda03]
-  Merge branch &#x27;anta-poc&#x27; of gitlab.4dshoetech.local:front-end/demon-home into anta-poc [7222751]
-  Merge branch &#x27;anta-poc&#x27; of gitlab.4dshoetech.local:front-end/demon-home into anta-poc [cf3396b]
-  Merge remote-tracking branch &#x27;origin/anta-poc&#x27; into stephen [f486698]
-  Merge branch &#x27;1.10.0&#x27; into anta-poc [c005fce]
-  Merge remote-tracking branch &#x27;origin/1.9.0&#x27; into anta-poc [0232ed5]
-  Merge branch &#x27;anta-danny&#x27; into anta-poc [c983164]
-  Merge branch &#x27;anta-poc&#x27; of gitlab.4dshoetech.local:front-end/demon-home into anta-poc [5c9444d]
-  Merge branch &#x27;anta-poc&#x27; of gitlab.4dshoetech.local:front-end/demon-home into anta-poc [00dc0f9]
- 🔀 合并分支 [6bd4d27]
-  Merge branch &#x27;anta-poc&#x27; into anta-danny [310abc5]
-  Merge branch &#x27;stephen&#x27; of gitlab.4dshoetech.local:front-end/demon-home into stephen [98ceae2]
-  Merge branch &#x27;1.10.0&#x27; into anta-poc [c83a14e]
-  Merge branch &#x27;anta-poc&#x27; of gitlab.4dshoetech.local:front-end/demon-home into anta-poc [defc22c]
-  Merge branch &#x27;1.10.0&#x27; into anta-poc [ad5cedb]
- 🏷️ 将vue和jsx两个d.ts抽出来 [e1bfa54]
- 📦 更新D4插件库到1.5.21版本 [b1c491f]
-  Update .rancher-pipeline.yml file [59cf817]


<a name="1.9.0-beta.37"></a>
## 1.9.0-beta.37 (2020-04-01)

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.9.0&#x27; into 1.9.0 [c641fe0]
-  Update .rancher-pipeline.yml file [e351924]


<a name="1.9.0-beta.36"></a>
## 1.9.0-beta.36 (2020-04-01)

### Added

- ✨ web端也添加渲染相册预览功能 [f8ac117]

### Changed

- 🍱 更新离线渲染中的图标库 [7a5d2c6]

### Miscellaneous

-  Merge branch &#x27;stephen&#x27; into 1.9.0 [2480a15]


<a name="1.9.0-beta.35"></a>
## 1.9.0-beta.35 (2020-04-01)

### Changed

- 💄 调整离线渲染的文本为英文；调整放大镜的图标的颜色 [ba6bfa5]

### Removed

- 🔥 渲染页版本、评论弹窗增加close按钮 [8ed3a2b]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.9.0&#x27; into 1.9.0 [94319e4]


<a name="1.9.0-beta.34"></a>
## 1.9.0-beta.34 (2020-03-31)

### Changed

- 🎨 调整相册弹框的数据通过cookies传递 [5f45594]


<a name="1.9.0-beta.33"></a>
## 1.9.0-beta.33 (2020-03-31)

### Changed

- 🎨 调整接口参数核对出错导致渲染相册不能出现的问题 [7824063]

### Miscellaneous

-  Merge branch &#x27;qt-offline&#x27; into 1.9.0 [41d0fb0]


<a name="1.9.0-beta.32"></a>
## 1.9.0-beta.32 (2020-03-31)

### Changed

- 🎨 调整QT的事件触发引入util/exec中的方法 [741d734]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.9.0&#x27; into 1.9.0 [b68dd6d]


<a name="1.9.0-beta.31"></a>
## 1.9.0-beta.31 (2020-03-31)

### Fixed

- 🐛 修复我的面料中我的上传无法粘贴的问题 [ffd5dbb]

### Miscellaneous

-  Merge branch &#x27;1.9.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.9.0 [4a8f994]


<a name="1.9.0-beta.30"></a>
## 1.9.0-beta.30 (2020-03-31)

### Fixed

- 🐛 调整QT接收事件的方法 [2b7d780]

### Miscellaneous

-  Merge branch &#x27;qt-offline&#x27; into 1.9.0 [4def59f]


<a name="1.9.0-beta.29"></a>
## 1.9.0-beta.29 (2020-03-31)

### Changed

- 🎨 渲染配置保存时，发送关闭事件时，传递 render 参数 [fd21e6f]
- 🎨 QT放大镜页面的数据通过storage传递 [194e818]

### Removed

- 🔥 创建放大镜QT使用的组件 [f16b5e4]

### Miscellaneous

-  Merge branch &#x27;qt-offline&#x27; into 1.9.0 [281f907]
-  Merge remote-tracking branch &#x27;origin/1.9.0&#x27; into 1.9.0 [daf01a2]


<a name="1.9.0-beta.28"></a>
## 1.9.0-beta.28 (2020-03-31)

### Changed

- 🎨 更新英文翻译 [ef83428]


<a name="1.9.0-beta.27"></a>
## 1.9.0-beta.27 (2020-03-30)

### Fixed

- 🐛 修复相册中匹配完后，删除用户信息数组中已匹配的数据导致的逻辑错误 [f04107f]
- 🐛 修复上传参数错误的bug [20445b8]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.9.0&#x27; into 1.9.0 [5116421]


<a name="1.9.0-beta.26"></a>
## 1.9.0-beta.26 (2020-03-30)

### Fixed

- 🐛 修复上传到运营平台接口参数错误的bug [cbcdd73]
- 🐛 优化get-ext的逻辑，避免bug [6d9dc68]

### Miscellaneous

-  Merge branch &#x27;1.9.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.9.0 [ce9065e]
-  Merge branch &#x27;1.9.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.9.0 [1a0ae94]


<a name="1.9.0-beta.25"></a>
## 1.9.0-beta.25 (2020-03-30)

### Added

- ✨ 插件相册浏览弹框的路由和组件（部分） [f366fe3]
- ✨ 对接渲染相册相关的接口 [18dfee1]
- ✨ 添加根据用户ID获取相关用户信息的API [8d8d9f1]
- ✨ 添加相册为空时，显示相关的图文 [72fded5]
- ✨ 抽离出相册图片渲染的处理不同状态的组件 [ecce6c6]
- ✨ 渲染页面添加模型的示例图片，切换比例时，对应的显示相应的图片 [5833a3e]
- ✨ 添加离线渲染模块与QT方面的路由配置 [f57bcfd]

### Changed

- 🎨 调整删除渲染相册的接口参数；对接删除当个相册的接口 [c80b800]
- 💄 更新确认弹窗样式 [9518180]
- 💄 调整渲染设置页面的滚动条的问题 [1fca278]
- 🎨 上传时，组织上传的参数；选择相册视角最少要选中一个； [d8cbdb5]
- 🍱 添加渲染设置相关的图片 [f22ab10]
- 💄 渲染相册弹框的样式交互 [c034f90]
- 💄 渲染设置弹框的样式交互 [fd62631]

### Fixed

- 🐛 修复右键复制、粘贴和快捷键删除的错误 [0894197]
- 🐛 修复关闭弹框时，通知QT关闭窗口 [610209a]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.9.0&#x27; into 1.9.0 [db30aa2]
-  Merge branch &#x27;dannny&#x27; into 1.9.0 [c518632]
-  Merge branch &#x27;1.9.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.9.0 [06da64f]


<a name="1.9.0-beta.24"></a>
## 1.9.0-beta.24 (2020-03-30)

### Fixed

- 🐛 修复上传接口参数不对的bug [ba391f5]
- 🐛 修改运营平台上传页面的appType不对的bug [b08a294]
- 🐛 更换confirm为confirmBool [cc8d5e1]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.9.0 [5f9a223]


<a name="1.9.0-rc.0"></a>
## 1.9.0-rc.0 (2020-03-27)

### Added

- ✨ 渲染页面添加模型的示例图片，切换比例时，对应的显示相应的图片 [5833a3e]
- ✨ 添加离线渲染模块与QT方面的路由配置 [f57bcfd]

### Changed

- 💄 更换标注图标 [0140dbb]
- 💄 设置IM对话框最大最小宽度 [69a702e]
- 🍱 添加渲染设置相关的图片 [f22ab10]
- 💄 渲染相册弹框的样式交互 [c034f90]
- 💄 渲染设置弹框的样式交互 [fd62631]
- 🔧 i18n插件配置 [51e55b8]
- ⏪ 修复由于合并的错误版本号的bug [4401fef]

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Fixed

- 🐛 修改qt.js文件中属性错误导致编译错误的问题 [1d511c7]
- 🐛 增加is-route-qt判断方法并且修复进入qt历史弹窗报错 [bd34dc9]

### Miscellaneous

-  Merge branch &#x27;1.9.0&#x27; into uat [28c3d07]
-  Merge branch &#x27;1.9.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.9.0 [26cedcb]
-  Merge branch &#x27;1.9.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.9.0 [9b7e8e6]
- 🔀 合并1.9.0 [1526cfc]
-  Update .rancher-pipeline.yml file [cd839a1]
-  Merge branch &#x27;qt-offline&#x27; into uat [77067a1]
-  Merge remote-tracking branch &#x27;origin/1.9.0&#x27; into uat [d412ab6]
- 🔀 合并qt-offline分支代码 [4453088]
-  Merge branch &#x27;qt-offline&#x27; into uat [ac6f004]
-  Merge branch &#x27;1.8.0&#x27; into uat [191c939]
-  Merge branch &#x27;1.8.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.8.0 [e210129]
-  Merge branch &#x27;1.8.0&#x27; into uat [73d9dc8]
-  Merge branch &#x27;1.8.0&#x27; into uat [ebc2dd4]
-  Merge branch &#x27;1.7.0&#x27; into uat [feb9e0d]
-  Merge branch &#x27;1.7.0&#x27; into uat [4ce3288]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.local:front-end/demon-home into uat [55adcb7]
-  Merge branch &#x27;1.7.0&#x27; into uat [09969d4]
-  Merge branch &#x27;1.7.0&#x27; into uat [3d19ebe]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.local:front-end/demon-home into uat [9ae0848]
-  Merge branch &#x27;1.7.0&#x27; into uat [4ea0d67]
-  Merge branch &#x27;1.7.0&#x27; into uat [e9f0dc6]
-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into uat [7d049c7]
-  Merge branch &#x27;1.7.0&#x27; into uat [17a4708]
-  Merge branch &#x27;1.7.0&#x27; into uat [6bc0e2f]
-  Merge branch &#x27;1.7.0&#x27; into uat [61f7882]
-  Merge branch &#x27;1.7.0&#x27; into uat [49eba00]
-  Merge branch &#x27;1.7.0&#x27; into uat [80e0139]
-  Merge branch &#x27;1.7.0&#x27; into uat [bcbe7eb]
-  Merge branch &#x27;1.7.0&#x27; into uat [6455809]
- 🔀 合并分支 [3faf5a8]
-  Merge branch &#x27;1.7.0&#x27; into uat [8a0dfb7]
- 🔀 合并代码 [77fa741]
-  Merge branch &#x27;1.7.0&#x27; into uat [8bf336e]
-  Merge branch &#x27;1.7.0&#x27; into uat [7c5e2ec]
- 🔀 合并代码 [b997a1a]
-  Merge branch &#x27;1.7.0&#x27; into uat [ee3dc08]
-  Merge branch &#x27;1.7.0&#x27; into uat [237dcd1]
- 🔀 合并分支 [161cc6b]
-  Merge branch &#x27;1.6.1&#x27; into uat [11c9a7b]
-  Merge branch &#x27;1.6.1&#x27; into uat [3870414]
-  Merge branch &#x27;1.6.1&#x27; into uat [99ade98]
-  Merge branch &#x27;1.6.1&#x27; into uat [d7ace2f]
-  Merge branch &#x27;1.6.1&#x27; into uat [3a6d179]
-  Merge branch &#x27;1.6.1&#x27; into uat [1f0f905]
-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.9.0-beta.22"></a>
## 1.9.0-beta.22 (2020-03-27)

### Changed

- 💄 更新IM的UI和交互 [5daa291]

### Removed

- 🔇 去掉不必要的log [b993dda]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.9.0 [b8965de]


<a name="1.9.0-beta.21"></a>
## 1.9.0-beta.21 (2020-03-27)

### Changed

- 💄 调整部分样式和过渡动画 [303a752]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.9.0 [5346896]


<a name="1.9.0-beta.20"></a>
## 1.9.0-beta.20 (2020-03-27)

### Fixed

- 🐛 修复退出标注模式后标注弹窗不消失的bug [69ccfcd]
- 🐛 修复运营平台跳过来，上传后没有关闭页面的bug [fdede7e]


<a name="1.9.0-beta.19"></a>
## 1.9.0-beta.19 (2020-03-26)

### Fixed

- 🐛 修复IM蒙版显示错误的bug [df8ea55]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.9.0 [822fb72]


<a name="1.9.0-beta.18"></a>
## 1.9.0-beta.18 (2020-03-26)

### Fixed

- 🐛 修复批注模块bug [98045cc]


<a name="1.9.0-beta.17"></a>
## 1.9.0-beta.17 (2020-03-26)

### Changed

- ⬆️ 更新D4依赖 [b390518]

### Fixed

- 🐛 修复群标题没有显示群人数 [b44ab19]
- 🐛 修复群名没有显示群人数的bug [d9c76ea]
- 🐛 修复创建群组时，群名称长度没有校验的bug [8ab72e6]
- 🐛 修复WS列表栏显示错误的bug [408ad77]
- 🐛 修改批注的权限和修改鞋模型的相同 [133495f]
- 🐛 修复虚拟账号修改群名系统消息没有显示用户名的bug [8c0481b]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.9.0 [40eaf8a]
-  Merge remote-tracking branch &#x27;origin/1.9.0&#x27; into 1.9.0 [d23a3c0]
-  Merge branch &#x27;stephen&#x27; into 1.9.0 [96c0ff4]
-  Merge branch &#x27;dannny&#x27; into 1.9.0 [dc7e46b]


<a name="1.9.0-beta.16"></a>
## 1.9.0-beta.16 (2020-03-26)

### Fixed

- 🐛 修复虚拟帐号作为群主没有删除成员权限的bug [112ce9e]
- 🐛 修复邀请多个人员只显示一条消息的bug [0e8cb4e]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.9.0 [3c5077b]
-  Merge branch &#x27;1.9.0&#x27; into dannny [fe438ad]


<a name="1.9.0-beta.15"></a>
## 1.9.0-beta.15 (2020-03-26)

### Changed

- 💄 批注模型下的鼠标状态改为自定义的图标 [bb75b3a]
- 💄 更改批注的图标 [0cf9cef]
- 🍱 更新iconfont文件 [ea79fad]
- ⬆️ 更新D4插件，修复批注图标和批注位置偏移问题 [e70afa5]

### Fixed

- 🐛 修复第一次渲染批注不能点击的问题 [e38ee78]
- 🐛 修复批注自能在workspace中的鞋模型才能编辑的控制；每次进入渲染页面，默认是拖拽面料模式； [9c5839d]

### Miscellaneous

-  Merge branch &#x27;stephen&#x27; into 1.9.0 [a417bc4]
-  Merge remote-tracking branch &#x27;origin/1.9.0&#x27; into stephen [59fbf59]


<a name="1.9.0-beta.14"></a>
## 1.9.0-beta.14 (2020-03-26)

### Changed

- 💄 更新IM成员列表样式 [2789e87]
- 💄 更新IM样式 [6f44dc9]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.9.0 [12a5d2e]


<a name="1.9.0-beta.13"></a>
## 1.9.0-beta.13 (2020-03-25)

### Fixed

- 🐛 修改群名为原群名，系统消息不通知 [4dfb75b]
- 🐛 修复改名弹窗点击回车自动submit的bug [7b9d6f2]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.9.0 [ddd6739]
-  Merge branch &#x27;dannny&#x27; into 1.9.0 [531dbca]


<a name="1.9.0-beta.12"></a>
## 1.9.0-beta.12 (2020-03-25)

### Fixed

- 🐛 修复IM用户信息显示错误的bug [64727f1]
- 🐛 修复IM修改群名逻辑错误的bug [be1edec]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.9.0 [107958b]


<a name="1.9.0-beta.10"></a>
## 1.9.0-beta.10 (2020-03-25)

### Fixed

- 🐛 修复群聊list没有更新的bug [3bed0a4]
- 🐛 修复以非域名方式登录会报错的问题 [a4097ad]

### Miscellaneous

-  Merge branch &#x27;1.9.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.9.0 [2af6420]
-  Merge branch &#x27;1.9.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.9.0 [95a415f]


<a name="1.9.0-beta.9"></a>
## 1.9.0-beta.9 (2020-03-25)

### Fixed

- 🐛 修复没有清除token的bug [3fda02f]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.9.0 [5d97abc]


<a name="1.9.0-beta.8"></a>
## 1.9.0-beta.8 (2020-03-25)

### Added

- ✨ 添加IM操作权限 [1bd1be3]

### Changed

- 🎨 批注相关的接口都带上groupAppId参数 [84a1df8]
- 💄 优化样式 [aa30a8f]

### Miscellaneous

-  Merge branch &#x27;stephen&#x27; into 1.9.0 [e0caa2f]
-  Merge remote-tracking branch &#x27;origin/1.9.0&#x27; into 1.9.0 [2afb0e8]
-  Merge remote-tracking branch &#x27;origin/1.9.0&#x27; into dannny [548a34e]


<a name="1.9.0-beta.7"></a>
## 1.9.0-beta.7 (2020-03-24)

### Added

- ✨ 点击不是当前版本批注时，打开历史版本页面 [d69907c]
- ✨ 添加只有自己创建的批注才能删除的逻辑 [e656d94]

### Changed

- 🎨 历史版本中批注功能切换时，显示和隐藏鞋模式上的批注 [994581b]
- 🎨 添加批注未完成时，单击其他模型其他位置删除当前未完成的批注 [2280fe4]
- 🎨 创建批注时，自动获取焦点 [872832b]
- 💄 调整操作记录的样式 [e2516b4]


<a name="1.9.0-beta.6"></a>
## 1.9.0-beta.6 (2020-03-24)

### Added

- ✨ 在鞋模型上的批注显示框上也能删除批注 [3e916db]
- ✨ 批注未创建完成的，在鞋模型上清除批注点 [a6776d8]

### Changed

- 💄 根据UI要求，修改渲染页面的部分UI布局 [17df8be]
- 💄 根据设计稿修改批注相关样式交互 [52447d0]

### Removed

- 🔥 添加点击左侧批注时，对应模型上也显示改批注的内容 [b14cba3]

### Miscellaneous

- 🔀 处理合并版本冲突 [b2219d3]
-  Merge remote-tracking branch &#x27;origin/1.9.0&#x27; into 1.9.0 [c18e0b7]


<a name="1.9.0-beta.5"></a>
## 1.9.0-beta.5 (2020-03-24)

### Added

- ✨ IM群管理功能 [c2d4398]
- ✨ IM新增系统消息功能 [aa54d6a]

### Changed

- 🎨 群聊名称修改的方式改为从成员列表中触发 [90a2c29]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.9.0&#x27; into dannny [56e44e0]
-  Merge branch &#x27;1.9.0&#x27; into dannny [36b1560]


<a name="1.9.0-beta.4"></a>
## 1.9.0-beta.4 (2020-03-24)

### Added

- ✨ 抽离批注创建的组件 [c5134ab]

### Changed

- 🎨 更新D4文件，在创建批注时，根据坐标显示对应的创建弹框位置 [f6df3c2]
- 💄 调整批注相关的图标、空情况的占位符、提示文本、英文翻译等 [3f51620]
- 🍱 更新iconfont最新的版本 [c4a035e]
- 🎨 调整渲染页批注功能的交互的细节 [6856221]

### Miscellaneous

-  Merge branch &#x27;stephen&#x27; into 1.9.0 [e4e3afc]


<a name="1.9.0-beta.3"></a>
## 1.9.0-beta.3 (2020-03-23)

### Changed

- 🎨 浏览历史版本鞋模型下批注的功能交互细节修改和侧边显示隐藏对应的逻辑 [add57e3]

### Miscellaneous

-  Merge branch &#x27;stephen&#x27; into 1.9.0 [a344fb7]
- 📦 更新D4库到1.5.7 [bcea221]


<a name="1.9.0-beta.2"></a>
## 1.9.0-beta.2 (2020-03-21)

### Added

- ✨ 抽离出单个批注的组件 [115d10a]
- ✨ 批注模型下，完善创建、浏览批注模式的切换逻辑 [3689d89]
- ✨ 对接渲染页批注相关的业务逻辑 [3c44710]
- ✨ 添加批注相关的API [6f68fc8]
- ✨ IM新增创建群聊、私聊、群管理等功能 [add278a]
- ✨ 创建上传面料中选择标签的组件 [75711fd]
- ✨ 创建单数字和单位组件，用于对接新的上传数据字典类型； [9ef0640]
- ✨ 创建延迟响应的input基本组件； [996cbf4]
- ✨ 个人空间增加WS列表栏部件 [b740d41]

### Changed

- 💄 完善查看历史版本中批注阅览的功能（样式和接口对接） [36fc457]
- 💄 调整批注侧边栏的样式 [6cec00a]
- 🔧 升级D4插件指定1.5.6版本 [467adee]
- 🎨 对表单校验器的代码进行调整 [11c47b6]
- 💄 历史版本预览页面批注功能的样式交互 [9bd85c3]
- 💄 批注功能渲染页相关的交互样式 [1dbc57a]
- 🎨 对element生产表单校验规则的代码改为TS，延用elem相关的校验规则进行校验 [efff7f5]
- 🎨 将validator中的代码转为TS [925c9a4]

### Miscellaneous

-  Merge branch &#x27;stephen&#x27; into 1.9.0 [b9402ce]
-  Merge remote-tracking branch &#x27;origin/1.9.0&#x27; into stephen [fca569f]
-  Merge remote-tracking branch &#x27;origin/1.8.0&#x27; into stephen [07e5675]
- 🔀 合并1.8.0IM代码 [3f0c176]
-  Merge remote-tracking branch &#x27;origin/1.9.0&#x27; into 1.9.0 [6be86b0]
-  Merge branch &#x27;1.9.0&#x27; into dannny [df43581]


<a name="1.9.0-beta.1"></a>
## 1.9.0-beta.1 (2020-03-20)

### Added

- ✨ 对接渲染页批注相关的业务逻辑 [3c44710]
- ✨ 添加批注相关的API [6f68fc8]

### Changed

- 🔧 升级D4插件指定1.5.6版本 [467adee]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.9.0&#x27; into 1.9.0 [6be86b0]


<a name="1.9.0-beta.0"></a>
## 1.9.0-beta.0 (2020-03-20)

### Added

- ✨ IM新增创建群聊、私聊、群管理等功能 [add278a]
- ✨ 创建上传面料中选择标签的组件 [75711fd]
- ✨ 创建单数字和单位组件，用于对接新的上传数据字典类型； [9ef0640]
- ✨ 创建延迟响应的input基本组件； [996cbf4]
- ✨ 个人空间增加WS列表栏部件 [b740d41]

### Changed

- 🎨 对表单校验器的代码进行调整 [11c47b6]
- 💄 历史版本预览页面批注功能的样式交互 [9bd85c3]
- 💄 批注功能渲染页相关的交互样式 [1dbc57a]
- 🎨 对element生产表单校验规则的代码改为TS，延用elem相关的校验规则进行校验 [efff7f5]
- 🎨 将validator中的代码转为TS [925c9a4]

### Miscellaneous

-  Merge branch &#x27;1.9.0&#x27; into dannny [df43581]


<a name="1.8.0-rc.2"></a>
## 1.8.0-rc.2 (2020-03-21)

### Fixed

- 🐛 增加is-route-qt判断方法并且修复进入qt历史弹窗报错 [bd34dc9]
- 🐛 合并1.8.0 [1a8eb6e]

### Miscellaneous

-  Merge branch &#x27;1.8.0&#x27; into uat [191c939]
-  Merge branch &#x27;1.8.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.8.0 [e210129]
-  Merge branch &#x27;1.8.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.8.0 [4432b8b]
-  Merge branch &#x27;dannny&#x27; into 1.8.0 [a1b0c58]


<a name="1.8.0-rc.1"></a>
## 1.8.0-rc.1 (2020-03-21)

### Changed

- 🎨 完善邀请加入公司链接时，提示文本错误和登录后显示权限异常的bug的逻辑 [becb98f]
- ⏪ 修复由于合并的错误版本号的bug [4401fef]

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Fixed

- 🐛 IM临时多窗口方案 [6a83942]
- 🐛 修复详情页评论编辑失败问题 [097f5cb]
- 🐛 修复邀请加入公司链接时，提示文本错误和登录后显示权限异常的问题 [c1604e0]
- 🐛 临时修复跨窗口复制的bug [73390ff]

### Miscellaneous

-  Merge branch &#x27;1.8.0&#x27; into uat [73d9dc8]
-  Merge branch &#x27;1.8.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.8.0 [517f41a]
-  Merge branch &#x27;1.8.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.8.0 [69034f2]
-  Merge branch &#x27;1.8.0&#x27; into uat [ebc2dd4]
-  Merge branch &#x27;1.7.0&#x27; into uat [feb9e0d]
-  Merge branch &#x27;1.7.0&#x27; into uat [4ce3288]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.local:front-end/demon-home into uat [55adcb7]
-  Merge branch &#x27;1.7.0&#x27; into uat [09969d4]
-  Merge branch &#x27;1.7.0&#x27; into uat [3d19ebe]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.local:front-end/demon-home into uat [9ae0848]
-  Merge branch &#x27;1.7.0&#x27; into uat [4ea0d67]
-  Merge branch &#x27;1.7.0&#x27; into uat [e9f0dc6]
-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into uat [7d049c7]
-  Merge branch &#x27;1.7.0&#x27; into uat [17a4708]
-  Merge branch &#x27;1.7.0&#x27; into uat [6bc0e2f]
-  Merge branch &#x27;1.7.0&#x27; into uat [61f7882]
-  Merge branch &#x27;1.7.0&#x27; into uat [49eba00]
-  Merge branch &#x27;1.7.0&#x27; into uat [80e0139]
-  Merge branch &#x27;1.7.0&#x27; into uat [bcbe7eb]
-  Merge branch &#x27;1.7.0&#x27; into uat [6455809]
- 🔀 合并分支 [3faf5a8]
-  Merge branch &#x27;1.7.0&#x27; into uat [8a0dfb7]
- 🔀 合并代码 [77fa741]
-  Merge branch &#x27;1.7.0&#x27; into uat [8bf336e]
-  Merge branch &#x27;1.7.0&#x27; into uat [7c5e2ec]
- 🔀 合并代码 [b997a1a]
-  Merge branch &#x27;1.7.0&#x27; into uat [ee3dc08]
-  Merge branch &#x27;1.7.0&#x27; into uat [237dcd1]
- 🔀 合并分支 [161cc6b]
-  Merge branch &#x27;1.6.1&#x27; into uat [11c9a7b]
-  Merge branch &#x27;1.6.1&#x27; into uat [3870414]
-  Merge branch &#x27;1.6.1&#x27; into uat [99ade98]
-  Merge branch &#x27;1.6.1&#x27; into uat [d7ace2f]
-  Merge branch &#x27;1.6.1&#x27; into uat [3a6d179]
-  Merge branch &#x27;1.6.1&#x27; into uat [1f0f905]
-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.8.0-rc.0"></a>
## 1.8.0-rc.0 (2020-03-16)

### Changed

- ⏪ 修复由于合并的错误版本号的bug [4401fef]

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Fixed

- 🐛 修复新手教程样式错误bug [e81f87b]

### Miscellaneous

-  Merge branch &#x27;1.8.0&#x27; into uat [ebc2dd4]
-  Merge remote-tracking branch &#x27;origin/dannny&#x27; into 1.8.0 [0694b99]
-  Merge branch &#x27;1.7.0&#x27; into uat [feb9e0d]
-  Merge branch &#x27;1.7.0&#x27; into uat [4ce3288]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.local:front-end/demon-home into uat [55adcb7]
-  Merge branch &#x27;1.7.0&#x27; into uat [09969d4]
-  Merge branch &#x27;1.7.0&#x27; into uat [3d19ebe]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.local:front-end/demon-home into uat [9ae0848]
-  Merge branch &#x27;1.7.0&#x27; into uat [4ea0d67]
-  Merge branch &#x27;1.7.0&#x27; into uat [e9f0dc6]
-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into uat [7d049c7]
-  Merge branch &#x27;1.7.0&#x27; into uat [17a4708]
-  Merge branch &#x27;1.7.0&#x27; into uat [6bc0e2f]
-  Merge branch &#x27;1.7.0&#x27; into uat [61f7882]
-  Merge branch &#x27;1.7.0&#x27; into uat [49eba00]
-  Merge branch &#x27;1.7.0&#x27; into uat [80e0139]
-  Merge branch &#x27;1.7.0&#x27; into uat [bcbe7eb]
-  Merge branch &#x27;1.7.0&#x27; into uat [6455809]
- 🔀 合并分支 [3faf5a8]
-  Merge branch &#x27;1.7.0&#x27; into uat [8a0dfb7]
- 🔀 合并代码 [77fa741]
-  Merge branch &#x27;1.7.0&#x27; into uat [8bf336e]
-  Merge branch &#x27;1.7.0&#x27; into uat [7c5e2ec]
- 🔀 合并代码 [b997a1a]
-  Merge branch &#x27;1.7.0&#x27; into uat [ee3dc08]
-  Merge branch &#x27;1.7.0&#x27; into uat [237dcd1]
- 🔀 合并分支 [161cc6b]
-  Merge branch &#x27;1.6.1&#x27; into uat [11c9a7b]
-  Merge branch &#x27;1.6.1&#x27; into uat [3870414]
-  Merge branch &#x27;1.6.1&#x27; into uat [99ade98]
-  Merge branch &#x27;1.6.1&#x27; into uat [d7ace2f]
-  Merge branch &#x27;1.6.1&#x27; into uat [3a6d179]
-  Merge branch &#x27;1.6.1&#x27; into uat [1f0f905]
-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.8.0-beta.21"></a>
## 1.8.0-beta.21 (2020-03-13)

### Added

- ✨ 修复清除不了token的bug [78db77e]

### Changed

- 💄 微调WS中，搜索ws显示结果的样式 [076de8c]

### Fixed

- 🐛 CLOSE bug#2908 修改群名为空，接口返回400 [2b8b569]
- 🐛 修复登出不了的bug [e3ff8e3]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.8.0&#x27; into 1.8.0 [34ac5c2]
-  Merge branch &#x27;1.8.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.8.0 [0f60cbe]


<a name="1.8.0-beta.20"></a>
## 1.8.0-beta.20 (2020-03-13)

### Fixed

- 🐛 取消校验token就是登录的判断 [04c8f40]


<a name="1.8.0-beta.19"></a>
## 1.8.0-beta.19 (2020-03-13)

### Fixed

- 🐛 CLOSE bug#3038 WS投递成功后的提示语，WS名字前加一个 # 号 [cf24434]
- 🐛 CLOSE bug#3039 修改虚拟账号的信息弹窗密码为必填项导致不能只修改公司名 [3830aaa]
- 🐛 CLOSE bug#933 【列表页】点击“返回”按钮不可退出系统 [964f675]


<a name="1.8.0-beta.18"></a>
## 1.8.0-beta.18 (2020-03-12)

### Changed

- 💄 修改列表页面中放大镜的样式 [36561de]

### Fixed

- 🐛 CLOSE bug#3026 通过邀请链接登录已存在的WS，登录后默认应该定位在进入WS页面 [46d0890]


<a name="1.8.0-beta.17"></a>
## 1.8.0-beta.17 (2020-03-12)

### Fixed

- 🐛 CLOSE bug#3005 自己的评论不能再次编辑和删除了 [0cb0611]
- 🐛 CLOSE bug#2952 评论@别人不应该能@自己 [474dd88]
- 🐛 CLOSE bug#2969 【workspace】guest用户移动workspace文件，无权限时，显示相关提示语 [4a346b7]
- 🐛 CLOSE bug#2981 【workspace】材质被同workspace成员删除，另一成员双击打开时，无对应提示 [51b8ded]


<a name="1.8.0-beta.16"></a>
## 1.8.0-beta.16 (2020-03-12)

### Changed

- 💄 更新部分样式 [dc4e4a2]

### Fixed

- 🐛 CLOSE bug#2984 子账号登录，WS页面空时，没有显示空页面 [782e08e]
- 🐛 CLOSE bug#2994  帮助中心】Materialize &amp; Detail My Designs第三步不显示鞋款，需移动鼠标后才显示；第四步拖材质到鞋款上，鞋款没对应变化 [5b65ca3]

### Miscellaneous

-  Merge branch &#x27;stephen&#x27; into 1.8.0 [c811989]
-  Merge remote-tracking branch &#x27;origin/1.8.0&#x27; into 1.8.0 [267e05d]
-  Merge branch &#x27;dannny&#x27; into 1.8.0 [1ecad2c]


<a name="1.8.0-beta.15"></a>
## 1.8.0-beta.15 (2020-03-12)

### Changed

- 💄 按UI要求，修改workspace页面的背景颜色和调整workspace时，workspace sidebar 交互的细节； [ee3d81a]

### Fixed

- 🐛 CLOSE bug#3010 【渲染页】拖动一个材质，拖动样式有误 [87ba6dc]
- 🐛 CLOSE bug#3008 渲染页，拖动材料到鞋款，提示无法获取索引 [877091b]
- 🐛 修复shortcut错误 [702d98a]
- 🐛 CLOSE bug#2958 WS列表栏重命名的形式全部改为弹框形式 [fa85b3b]

### Miscellaneous

-  Merge branch &#x27;stephen&#x27; into 1.8.0 [3c60b5d]
-  Merge remote-tracking branch &#x27;origin/1.8.0&#x27; into stephen [a807d01]
-  Merge branch &#x27;1.8.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.8.0 [f4774f7]


<a name="1.8.0-beta.14"></a>
## 1.8.0-beta.14 (2020-03-12)

### Fixed

- 🐛 CLOSE bug#2908 修改群名为空，接口返回400；对修改出错的问题处理； [eaba102]
- 🐛 CLOSE bug 【个人信息】输入邮箱会提示不能输入特殊符号 [0babb4b]
- 🐛 CLOSE bug#2985 右键鞋款添加到快捷键，点击快捷键提示错误信息 [906487d]

### Miscellaneous

-  Merge branch &#x27;stephen&#x27; into 1.8.0 [eb85fd2]
-  Merge remote-tracking branch &#x27;origin/1.8.0&#x27; into 1.8.0 [373f09f]
-  Merge branch &#x27;1.8.0&#x27; into dannny [73d78ba]


<a name="1.8.0-beta.13"></a>
## 1.8.0-beta.13 (2020-03-11)

### Changed

- 🎨 调整鞋模型部分接口的url地址 [e1a19f2]

### Fixed

- 🐛 CLOSE bug#2971 修复创建虚拟账号时，对公司字段做校验 [6a3c249]


<a name="1.8.0-beta.12"></a>
## 1.8.0-beta.12 (2020-03-11)

### Changed

- 🎨 调整鞋模型编辑的接口（id统一改为relateId) [0b1b980]

### Removed

- 🔇 去掉不必要的log [d57455b]

### Fixed

- 🐛 修复字段类型组件修改后，导致部分表单无法选中选项的问题 [2eacb3c]
- 🐛 CLOSE bug#2983 新创建WS，弹出添加成员对话框，添加成功后提示不正确 [5e613d2]
- 🐛 CLOSE bug#2975 拖动鞋款到快捷键没有反应 [01ca0c2]
- 🐛 CLOSE bug#2982修复文件夹不能拖拽的bug [c86a95d]
- 🐛 CLOSE bug#2973 【workspace】用户已被remove出workspace，再次进入workspace空间，页面显示”暂无查看权限 [6881a04]
- 🐛 CLOSE bug#2981 【workspace】材质被同workspace成员删除，另一成员双击打开时，无对应提示 [d8ed44e]
- 🐛 更新workspace为空的翻译 [0da8cef]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.8.0&#x27; into stephen [64ee34e]
-  Merge branch &#x27;1.8.0&#x27; into dannny [67d73ff]
-  Merge branch &#x27;1.8.0&#x27; into dannny [91452e1]
-  Merge branch &#x27;1.8.0&#x27; into dannny [a113d2d]


<a name="1.8.0-beta.11"></a>
## 1.8.0-beta.11 (2020-03-11)

### Changed

- 🎨 调整鞋款和材质修改的接口 [626ca1f]
- 🎨 对创建workspace和虚拟账号修改公司名称的进行空字符校验 [dea3d2e]
- 💄 修改部分页面的样式 [b7b18bc]

### Fixed

- 🐛 CLOSE bug#2980 【workspace】用户被降级，邀请成员没有触发文言提示 [f6ea90b]
- 🐛 修复前后内容为空校验RegExp错误导致很多表单内容页面报错问题 [ee1bba8]
- 🐛 修复新手教程跳转闪屏的问题 [99a2b53]

### Miscellaneous

-  Merge branch &#x27;stephen&#x27; into 1.8.0 [447078b]
-  Merge remote-tracking branch &#x27;origin/1.8.0&#x27; into 1.8.0 [a421418]
-  Merge branch &#x27;1.8.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.8.0 [99e7f9f]


<a name="1.8.0-beta.10"></a>
## 1.8.0-beta.10 (2020-03-11)

### Fixed

- 🐛 CLOSE bug#2966 【workspace】搜索64字符内容，不能正确搜索出workspace，显示没换行 [c481c28]
- 🐛 CLOSE bug#2961 【workspace】搜索workspace，点击进入对应的workspace，搜索框应关闭 [1bfe505]
- 🐛 CLOSE bug#2962 【workspace】搜索栏保留历史搜索记录 [54e4547]
- 🐛 CLOSE bug#2959 搜索在点击但是没有输入内容时不用显示搜索结果的展示框，只有输入内容后再显示这个搜索内容展示框 [9a2ae29]
- 🐛 CLOSE bug#2960 【WS列表】创建按钮和搜索按钮的间距过大 [4380c00]
- 🐛 CLOSE bug#2957 workspace重命名，全选的时候鼠标在窗口外释放的时候，重命名窗口会取消 [faf9767]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.8.0&#x27; into stephen [3004c24]


<a name="1.8.0-beta.9"></a>
## 1.8.0-beta.9 (2020-03-10)

### Changed

- 🎨 更新拖拽样式 [a60c4e0]

### Miscellaneous

-  Merge branch &#x27;1.8.0&#x27; into dannny [e6a23af]


<a name="1.8.0-beta.8"></a>
## 1.8.0-beta.8 (2020-03-10)

### Changed

- 🎨 更新翻译 [d6aeb62]

### Fixed

- 🐛 修复新手教程跳过按钮错误的bug [7c50d7a]
- 🐛 修复添加shortcut时报错的bug [22686f8]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.8.0 [6a0ffdd]
-  Merge remote-tracking branch &#x27;origin/1.8.0&#x27; into dannny [761b30f]


<a name="1.8.0-beta.6"></a>
## 1.8.0-beta.6 (2020-03-10)

### Fixed

- 🐛 修复计算cookie-domain不对的bug [0fc3c62]


<a name="1.8.0-beta.5"></a>
## 1.8.0-beta.5 (2020-03-10)

### Changed

- 🎨 对部分目录的接口删除参数relativeId [f32b3d0]

### Fixed

- 🐛 修复cookie拿document.domain不对的bug [eafbca8]
- 🐛 修复get-cookie-domain不对的bug [ccb2265]
- 🐛 修复拖拽文件到workspace错误的bug [14e636e]
- 🐛 优化拖拽错误提示代码 [ec4a58a]
- 🐛 CLOSE bug#2950 用户搜索时，没有数据时没有情况旧数据 [2cb4a74]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.8.0&#x27; into 1.8.0 [694a325]
-  Merge branch &#x27;1.8.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.8.0 [fd7fda6]
-  Merge remote-tracking branch &#x27;origin/1.8.0&#x27; into dannny [2c058ff]


<a name="1.8.0-beta.4"></a>
## 1.8.0-beta.4 (2020-03-10)

### Changed

- 🎨 将路由部分的代码转为TS语法 [986b491]
- 🎨 更新英文翻译 [4566a7f]

### Fixed

- 🐛 修复后端接口修改导致接口报错的问题（重新对接文件夹相关操作） [8579b46]
- 🐛 修复鞋款详情关闭时，弹出异常报错问题 [62b6e50]
- 🍎 修复mac下，ts文件无法找到vue文件问题 [9e19f8f]

### Miscellaneous

-  Merge branch &#x27;stephen&#x27; into 1.8.0 [2a06176]
-  Merge remote-tracking branch &#x27;origin/1.8.0&#x27; into stephen [c0ffc60]
-  Merge branch &#x27;1.8.0&#x27; into dannny [fc0a9f3]


<a name="1.8.0-beta.2"></a>
## 1.8.0-beta.2 (2020-03-10)

### Added

- ✨ 将上传模块的页面独立到单个路由中 [79802d2]

### Changed

- 🔧 修改eslint file [236a9db]
- 🎨 workspace列表导航栏数据调整为用vue-orm的数据 [4d2c9e0]

### Miscellaneous

-  Merge branch &#x27;stephen&#x27; into 1.8.0 [f7ad8de]
-  Merge remote-tracking branch &#x27;origin/1.8.0&#x27; into stephen [490c35b]


<a name="1.8.0-beta.1"></a>
## 1.8.0-beta.1 (2020-03-10)

### Added

- ✨ 添加权限异常时的弹框报错 [7f48331]

### Changed

- 🎨 调整在删除最后一个workspace时，空workspaced的提示图文 [1e7b6ba]

### Fixed

- 🐛 修改在workspace登出后，换一个账号登录导致登录不上的问题； [4ded51d]
- 🐛 修复workspace成员为空时，或搜索结果为空时，一直会用loading的问题 [d128bec]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.8.0&#x27; into 1.8.0 [eed4be6]


<a name="1.8.0-beta.0"></a>
## 1.8.0-beta.0 (2020-03-09)

### Changed

- 🎨 更新拖拽到可投放区域时的样式 [8462959]
- 🎨 调整workspace搜索功能的代码逻辑 [b1c552f]
- 🎨 修改workspace重命名的逻辑和对接其接口 [3144260]
- 🎨 更新新手教程 [c8d6366]

### Fixed

- 🐛 修复新手教程的bug [fe78eac]

### Miscellaneous

-  Merge branch &#x27;1.8.0&#x27; into dannny [aac675e]
-  Merge branch &#x27;1.8.0&#x27; into dannny [cb32c69]


<a name="1.7.3"></a>
## 1.7.3 (2020-03-02)

### Added

- ✨ 更新d4增加钻石类型面料 [f2a6f5e]
- ✨ 增加oss是否加密的标识符 [4ec820b]

### Changed

- 🔧 更新rancher-pipline.yml [446bdbc]
- 🔧 去掉uat和prod对代理路径的无必要的配置 [75950d0]
- ⏪ 替换d4的操作修改 [3cd3baa]

### Removed

- 🔥 去除rancher master分支的deploy [8e67497]

### Fixed

- 🐛 修复保存图标缺失的bug [0d9a170]
- 🐛 修复上传没有传递 material type的bug [b85628d]
- 🐛 修复material info的一些报错以及放大可能失效的bug [4027f9b]
- 🐛 修复panel list里获取relateId接口传入0的bug [97905a7]
- 🐛 临时去掉debounce避免跨组件使用的时候导致某些值缺失的问题 [372abe0]
- 🐛 修复create board顶级目录不能拖动的bug [bb5d57e]
- 🐛 修复OSS_SIGN报错的bug [455915c]
- 🐛 修复上传时因传递id为空参数时，导致无法创建文件夹问题 [9aca1e7]
- 🐛 修复OSS_SIGN报错的bug [08d6591]
- 🐛 修复合并上传材质页面错误导致的问题 [75f13ad]

### Miscellaneous

-  Merge branch &#x27;uat&#x27; [76f1818]
-  Merge branch &#x27;uat&#x27; [99db1e3]
-  Merge branch &#x27;uat&#x27; [fd31c47]
-  Merge branch &#x27;1.7.0&#x27; [2358ec1]
- 🔀 合并分支 [7498939]
-  Merge branch &#x27;1.5.0&#x27; [f615f34]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.local:front-end/demon-home [6af4d01]
-  Merge branch &#x27;1.5.0&#x27; [89f1399]
-  Update .rancher-pipeline.yml file [27ddd95]
-  Update .rancher-pipeline.yml file [b7dc2ec]
-  Update .rancher-pipeline.yml file [3f1c72d]
-  Merge branch &#x27;1.5.0&#x27; [f6ac120]
-  Merge branch &#x27;1.5.0&#x27; [9677c3f]
- 🔀 合并分支 [4d2af2b]
- 🔀 合并分支 [dff9ab9]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [c785356]
-  Update .rancher-pipeline.yml file [789dade]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [480e2af]
- 🔀 合并分支 [9a6ba96]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [a1150d7]
-  Update .rancher-pipeline.yml file [1e59f5b]
-  Merge remote-tracking branch &#x27;origin/uat&#x27; [a8ce55b]
-  Merge branch &#x27;1.2.0&#x27; [d7b0242]
-  Merge branch &#x27;1.2.0&#x27; [7dfafd6]
-  Merge branch &#x27;1.2.0&#x27; [c8b1d05]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [4936e30]
-  Update .rancher-pipeline.yml file [9fce6c3]


<a name="1.7.2"></a>
## 1.7.2 (2020-02-28)

### Added

- ✨ 更新d4增加钻石类型面料 [f2a6f5e]
- ✨ 增加oss是否加密的标识符 [4ec820b]

### Changed

- 🔧 更新rancher-pipline.yml [446bdbc]
- 🔧 去掉uat和prod对代理路径的无必要的配置 [75950d0]
- ⏪ 替换d4的操作修改 [3cd3baa]

### Removed

- 🔥 去除rancher master分支的deploy [8e67497]

### Fixed

- 🐛 修复保存图标缺失的bug [0d9a170]
- 🐛 修复上传没有传递 material type的bug [b85628d]
- 🐛 修复material info的一些报错以及放大可能失效的bug [4027f9b]
- 🐛 修复panel list里获取relateId接口传入0的bug [97905a7]
- 🐛 临时去掉debounce避免跨组件使用的时候导致某些值缺失的问题 [372abe0]
- 🐛 修复create board顶级目录不能拖动的bug [bb5d57e]
- 🐛 修复OSS_SIGN报错的bug [455915c]
- 🐛 修复上传时因传递id为空参数时，导致无法创建文件夹问题 [9aca1e7]
- 🐛 修复OSS_SIGN报错的bug [08d6591]
- 🐛 修复合并上传材质页面错误导致的问题 [75f13ad]

### Miscellaneous

-  Merge branch &#x27;uat&#x27; [99db1e3]
-  Merge branch &#x27;uat&#x27; [fd31c47]
-  Merge branch &#x27;1.7.0&#x27; [2358ec1]
- 🔀 合并分支 [7498939]
-  Merge branch &#x27;1.5.0&#x27; [f615f34]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.local:front-end/demon-home [6af4d01]
-  Merge branch &#x27;1.5.0&#x27; [89f1399]
-  Update .rancher-pipeline.yml file [27ddd95]
-  Update .rancher-pipeline.yml file [b7dc2ec]
-  Update .rancher-pipeline.yml file [3f1c72d]
-  Merge branch &#x27;1.5.0&#x27; [f6ac120]
-  Merge branch &#x27;1.5.0&#x27; [9677c3f]
- 🔀 合并分支 [4d2af2b]
- 🔀 合并分支 [dff9ab9]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [c785356]
-  Update .rancher-pipeline.yml file [789dade]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [480e2af]
- 🔀 合并分支 [9a6ba96]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [a1150d7]
-  Update .rancher-pipeline.yml file [1e59f5b]
-  Merge remote-tracking branch &#x27;origin/uat&#x27; [a8ce55b]
-  Merge branch &#x27;1.2.0&#x27; [d7b0242]
-  Merge branch &#x27;1.2.0&#x27; [7dfafd6]
-  Merge branch &#x27;1.2.0&#x27; [c8b1d05]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [4936e30]
-  Update .rancher-pipeline.yml file [9fce6c3]


<a name="1.7.1"></a>
## 1.7.1 (2020-02-26)

### Added

- ✨ 更新d4增加钻石类型面料 [f2a6f5e]
- ✨ 增加oss是否加密的标识符 [4ec820b]

### Changed

- ⏪ 修复由于合并的错误版本号的bug [4401fef]
- 🔧 更新rancher-pipline.yml [446bdbc]
- 🔧 去掉uat和prod对代理路径的无必要的配置 [75950d0]
- ⏪ 替换d4的操作修改 [3cd3baa]

### Removed

- 🔥 去除rancher master分支的deploy [8e67497]
- 🔥 uat分支去除自动发布 [2a53b39]

### Fixed

- 🐛 修复保存图标缺失的bug [0d9a170]
- 🐛 修复上传没有传递 material type的bug [b85628d]
- 🐛 修复material info的一些报错以及放大可能失效的bug [4027f9b]
- 🐛 修复panel list里获取relateId接口传入0的bug [97905a7]
- 🐛 临时去掉debounce避免跨组件使用的时候导致某些值缺失的问题 [372abe0]
- 🐛 修复create board顶级目录不能拖动的bug [bb5d57e]
- 🐛 修复OSS_SIGN报错的bug [455915c]
- 🐛 修复上传时因传递id为空参数时，导致无法创建文件夹问题 [9aca1e7]
- 🐛 修复OSS_SIGN报错的bug [08d6591]
- 🐛 修复合并上传材质页面错误导致的问题 [75f13ad]

### Miscellaneous

-  Merge branch &#x27;uat&#x27; [fd31c47]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.local:front-end/demon-home into uat [9ae0848]
-  Merge branch &#x27;1.7.0&#x27; into uat [4ea0d67]
-  Merge branch &#x27;1.7.0&#x27; into uat [e9f0dc6]
-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into uat [7d049c7]
-  Merge branch &#x27;1.7.0&#x27; into uat [17a4708]
-  Merge branch &#x27;1.7.0&#x27; [2358ec1]
-  Merge branch &#x27;1.7.0&#x27; into uat [6bc0e2f]
-  Merge branch &#x27;1.7.0&#x27; into uat [61f7882]
-  Merge branch &#x27;1.7.0&#x27; into uat [49eba00]
-  Merge branch &#x27;1.7.0&#x27; into uat [80e0139]
-  Merge branch &#x27;1.7.0&#x27; into uat [bcbe7eb]
-  Merge branch &#x27;1.7.0&#x27; into uat [6455809]
- 🔀 合并分支 [3faf5a8]
-  Merge branch &#x27;1.7.0&#x27; into uat [8a0dfb7]
- 🔀 合并代码 [77fa741]
-  Merge branch &#x27;1.7.0&#x27; into uat [8bf336e]
-  Merge branch &#x27;1.7.0&#x27; into uat [7c5e2ec]
- 🔀 合并代码 [b997a1a]
-  Merge branch &#x27;1.7.0&#x27; into uat [ee3dc08]
-  Merge branch &#x27;1.7.0&#x27; into uat [237dcd1]
- 🔀 合并分支 [161cc6b]
- 🔀 合并分支 [7498939]
-  Merge branch &#x27;1.6.1&#x27; into uat [11c9a7b]
-  Merge branch &#x27;1.6.1&#x27; into uat [3870414]
-  Merge branch &#x27;1.6.1&#x27; into uat [99ade98]
-  Merge branch &#x27;1.6.1&#x27; into uat [d7ace2f]
-  Merge branch &#x27;1.6.1&#x27; into uat [3a6d179]
-  Merge branch &#x27;1.6.1&#x27; into uat [1f0f905]
-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; [f615f34]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.local:front-end/demon-home [6af4d01]
-  Merge branch &#x27;1.5.0&#x27; [89f1399]
-  Update .rancher-pipeline.yml file [27ddd95]
-  Update .rancher-pipeline.yml file [b7dc2ec]
-  Update .rancher-pipeline.yml file [3f1c72d]
-  Merge branch &#x27;1.5.0&#x27; [f6ac120]
-  Merge branch &#x27;1.5.0&#x27; [9677c3f]
- 🔀 合并分支 [4d2af2b]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
- 🔀 合并分支 [dff9ab9]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [c785356]
-  Update .rancher-pipeline.yml file [789dade]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [480e2af]
- 🔀 合并分支 [9a6ba96]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [a1150d7]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]
-  Update .rancher-pipeline.yml file [1e59f5b]
-  Merge remote-tracking branch &#x27;origin/uat&#x27; [a8ce55b]
-  Merge branch &#x27;1.2.0&#x27; [d7b0242]
-  Merge branch &#x27;1.2.0&#x27; [7dfafd6]
-  Merge branch &#x27;1.2.0&#x27; [c8b1d05]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [4936e30]
-  Update .rancher-pipeline.yml file [9fce6c3]


<a name="1.7.0"></a>
## 1.7.0 (2020-02-24)

### Added

- ✨ 更新d4增加钻石类型面料 [f2a6f5e]
- ✨ 增加oss是否加密的标识符 [4ec820b]

### Changed

- 🔧 更新rancher-pipline.yml [446bdbc]
- 🔧 去掉uat和prod对代理路径的无必要的配置 [75950d0]
- ⏪ 替换d4的操作修改 [3cd3baa]

### Removed

- 🔥 去除rancher master分支的deploy [8e67497]

### Fixed

- 🐛 修复保存图标缺失的bug [0d9a170]
- 🐛 修复上传没有传递 material type的bug [b85628d]
- 🐛 修复material info的一些报错以及放大可能失效的bug [4027f9b]
- 🐛 修复panel list里获取relateId接口传入0的bug [97905a7]
- 🐛 临时去掉debounce避免跨组件使用的时候导致某些值缺失的问题 [372abe0]
- 🐛 修复create board顶级目录不能拖动的bug [bb5d57e]
- 🐛 修复OSS_SIGN报错的bug [455915c]
- 🐛 修复上传时因传递id为空参数时，导致无法创建文件夹问题 [9aca1e7]
- 🐛 修复OSS_SIGN报错的bug [08d6591]
- 🐛 修复合并上传材质页面错误导致的问题 [75f13ad]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; [2358ec1]
- 🔀 合并分支 [7498939]
-  Merge branch &#x27;1.5.0&#x27; [f615f34]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.local:front-end/demon-home [6af4d01]
-  Merge branch &#x27;1.5.0&#x27; [89f1399]
-  Update .rancher-pipeline.yml file [27ddd95]
-  Update .rancher-pipeline.yml file [b7dc2ec]
-  Update .rancher-pipeline.yml file [3f1c72d]
-  Merge branch &#x27;1.5.0&#x27; [f6ac120]
-  Merge branch &#x27;1.5.0&#x27; [9677c3f]
- 🔀 合并分支 [4d2af2b]
- 🔀 合并分支 [dff9ab9]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [c785356]
-  Update .rancher-pipeline.yml file [789dade]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [480e2af]
- 🔀 合并分支 [9a6ba96]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [a1150d7]
-  Update .rancher-pipeline.yml file [1e59f5b]
-  Merge remote-tracking branch &#x27;origin/uat&#x27; [a8ce55b]
-  Merge branch &#x27;1.2.0&#x27; [d7b0242]
-  Merge branch &#x27;1.2.0&#x27; [7dfafd6]
-  Merge branch &#x27;1.2.0&#x27; [c8b1d05]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [4936e30]
-  Update .rancher-pipeline.yml file [9fce6c3]


<a name="1.7.0-beta.80"></a>
## 1.7.0-beta.80 (2020-03-07)

### Added

- ✨ 在workspace列表中添加重命名功能 [d167baa]
- ✨ 创建 basecontextmenu 组件 [7debf40]
- ➕ 引入animate.css插件 [e2805a8]

### Changed

- 🎨 修改全局ContextMenu组件传参数方式 [40c915d]
- 🎨 将右点击显示菜单的逻辑，放到vue根组件中（app.vue) [9493f4a]
- 🎨 添加workspace Item中hover状态 [3e682bc]
- 🎨 重构workspace页面中workspace列表组件 [432f56f]
- 🎨 对部分共享数据放入到Vuex中 [b917eca]
- 🎨 解决workspace位置拖拽和文件拖拽的冲突 [4eeeed4]
- 💄 按设计稿调整空workspace情况下的样式 [15a03a6]
- 🍱 添加没有workspace的站位默认图片 [0e4a116]

### Removed

- ➖ 修整校验器，以及去除不必要的代码 [0203bb5]

### Fixed

- 🐛 修复因目录接口参数改动，导致获取目录失败的问题 [34a8608]
- 🐛 提交漏了一些文件 [94d2518]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.8.0&#x27; into stephen [57e002a]
-  Merge branch &#x27;1.8.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.8.0 [845bb95]
-  Merge remote-tracking branch &#x27;origin/dannny&#x27; into 1.8.0 [2fe8bbd]
-  Merge remote-tracking branch &#x27;origin/1.8.0&#x27; into stephen [dfe1317]
-  Merge remote-tracking branch &#x27;origin/1.8.0&#x27; into stephen [ddbfaeb]


<a name="1.7.0-beta.79"></a>
## 1.7.0-beta.79 (2020-03-06)

### Added

- ✨ 添加workspace中搜索功能和搜索结果展示组件 [c7ff2fd]
- ✨ 添加新的动画效果到全局style中 [85792fa]
- ✨ 登录改为通过cookie的单点登录 [f64c706]
- ✨ 更新workspace展开收起按钮样式 [80524d0]
- ✨ 添加搜索workspace的API [8cb6dfd]
- ✨ 新增文件拖拽进文件夹复制功能 [83e23e4]
- ✨ 新增workspace列表伸缩、文件拖拽到workspace的功能 [101fbca]
- ✨ 当workspace数量为空时，显示空的提示图片和文字（大概布局和功能） [55ee249]
- ✨ 某个workspace添加成员成功时，添加成功提示语 [8018854]
- ✨ 账号模块中的虚拟账号列表添加公司字段，包含对该字段的修改功能 [4330839]

### Changed

- 🎨 更新新手教程流程 [b5c2690]
- 🎨 重构创建新workspace组件的代码逻辑和样式布局 [651563c]
- 🎨 增加复制/剪切后提示的功能 [c18da83]
- 🚚 ommit-undefined &#x3D;&gt; omit-undefined [32e91ff]
- 🎨 优化登录页面中的form组件表单校验的方法（promise) [1026629]
- 🎨 修改列表页面的默认展示方式为详情模式 [434bf9f]
- 🔧 增加webpack.resolve.config.js [d5ccd38]
- 🎨 修改登录时如果有邀请交互时，当邀请者已经在workspace中也可以登录成功 [a8b96c3]
- 🎨 简化登录路由中的props传值的代码 [818ec0b]
- 🔧 npm ignore 去掉src [d9a92b0]
- 🔧 更新yarnrc，package.json [2a84bce]

### Fixed

- 🐛 修复展开workspace按钮样式bug [f6a6822]
- 🐛 修复未读消息接口多次请求的bug [414ab96]
- 🐛 修改qt路由中账号模块路由命名重名的问题 [28dd6cb]
- 🐛 修复package name错误的bug [4912c44]
- 🐛 CLOSE bug#2877 高分屏下，色款展示全时，下拉箭头不显示 [16d5aa2]
- 🐛 CLOSE bug#2878 空白状态时，图标居中，并且透明度降低80% [b8d57cc]

### Miscellaneous

-  Merge branch &#x27;stephen&#x27; into 1.8.0 [8c65b63]
-  Merge branch &#x27;1.8.0&#x27; into dannny [5619b9a]
-  Merge branch &#x27;1.8.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.8.0 [dc4eff6]
-  Merge remote-tracking branch &#x27;origin/1.8.0&#x27; into stephen [0acfabc]
-  Merge branch &#x27;1.8.0&#x27; into dannny [47459db]
-  Merge branch &#x27;1.7.0&#x27; into 1.8.0 [d02eb5d]
- 📦 package 去掉private [4a05663]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [03789b8]
-  Merge branch &#x27;dannny&#x27; into 1.7.0 [4b058a7]


<a name="1.7.0-rc.19"></a>
## 1.7.0-rc.19 (2020-02-28)

### Changed

- ⏪ 修复由于合并的错误版本号的bug [4401fef]

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; into uat [feb9e0d]
-  Merge branch &#x27;1.7.0&#x27; into uat [4ce3288]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.local:front-end/demon-home into uat [55adcb7]
-  Merge branch &#x27;1.7.0&#x27; into uat [09969d4]
-  Merge branch &#x27;1.7.0&#x27; into uat [3d19ebe]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.local:front-end/demon-home into uat [9ae0848]
-  Merge branch &#x27;1.7.0&#x27; into uat [4ea0d67]
-  Merge branch &#x27;1.7.0&#x27; into uat [e9f0dc6]
-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into uat [7d049c7]
-  Merge branch &#x27;1.7.0&#x27; into uat [17a4708]
-  Merge branch &#x27;1.7.0&#x27; into uat [6bc0e2f]
-  Merge branch &#x27;1.7.0&#x27; into uat [61f7882]
-  Merge branch &#x27;1.7.0&#x27; into uat [49eba00]
-  Merge branch &#x27;1.7.0&#x27; into uat [80e0139]
-  Merge branch &#x27;1.7.0&#x27; into uat [bcbe7eb]
-  Merge branch &#x27;1.7.0&#x27; into uat [6455809]
- 🔀 合并分支 [3faf5a8]
-  Merge branch &#x27;1.7.0&#x27; into uat [8a0dfb7]
- 🔀 合并代码 [77fa741]
-  Merge branch &#x27;1.7.0&#x27; into uat [8bf336e]
-  Merge branch &#x27;1.7.0&#x27; into uat [7c5e2ec]
- 🔀 合并代码 [b997a1a]
-  Merge branch &#x27;1.7.0&#x27; into uat [ee3dc08]
-  Merge branch &#x27;1.7.0&#x27; into uat [237dcd1]
- 🔀 合并分支 [161cc6b]
-  Merge branch &#x27;1.6.1&#x27; into uat [11c9a7b]
-  Merge branch &#x27;1.6.1&#x27; into uat [3870414]
-  Merge branch &#x27;1.6.1&#x27; into uat [99ade98]
-  Merge branch &#x27;1.6.1&#x27; into uat [d7ace2f]
-  Merge branch &#x27;1.6.1&#x27; into uat [3a6d179]
-  Merge branch &#x27;1.6.1&#x27; into uat [1f0f905]
-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.7.0-beta.78"></a>
## 1.7.0-beta.78 (2020-02-28)

### Fixed

- 🐛 修复客户端修改个人资料页面错误的bug [683cd20]
- 🐛 避免qt 版本弹框报错 [79a3645]
- 🐛 修复IM代码错误bug [854cd1f]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.7.0 [0894783]
-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into dannny [1edba9a]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [43c9c5e]


<a name="1.7.0-beta.77"></a>
## 1.7.0-beta.77 (2020-02-28)

### Fixed

- 🐛 CLOSE bug#2858 打开IM系统时，专注模式的按钮顶置了 [e3911c2]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into dannny [51971da]


<a name="1.7.0-rc.18"></a>
## 1.7.0-rc.18 (2020-02-28)

### Changed

- ⏪ 修复由于合并的错误版本号的bug [4401fef]

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; into uat [4ce3288]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.local:front-end/demon-home into uat [55adcb7]
-  Merge branch &#x27;1.7.0&#x27; into uat [09969d4]
-  Merge branch &#x27;1.7.0&#x27; into uat [3d19ebe]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.local:front-end/demon-home into uat [9ae0848]
-  Merge branch &#x27;1.7.0&#x27; into uat [4ea0d67]
-  Merge branch &#x27;1.7.0&#x27; into uat [e9f0dc6]
-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into uat [7d049c7]
-  Merge branch &#x27;1.7.0&#x27; into uat [17a4708]
-  Merge branch &#x27;1.7.0&#x27; into uat [6bc0e2f]
-  Merge branch &#x27;1.7.0&#x27; into uat [61f7882]
-  Merge branch &#x27;1.7.0&#x27; into uat [49eba00]
-  Merge branch &#x27;1.7.0&#x27; into uat [80e0139]
-  Merge branch &#x27;1.7.0&#x27; into uat [bcbe7eb]
-  Merge branch &#x27;1.7.0&#x27; into uat [6455809]
- 🔀 合并分支 [3faf5a8]
-  Merge branch &#x27;1.7.0&#x27; into uat [8a0dfb7]
- 🔀 合并代码 [77fa741]
-  Merge branch &#x27;1.7.0&#x27; into uat [8bf336e]
-  Merge branch &#x27;1.7.0&#x27; into uat [7c5e2ec]
- 🔀 合并代码 [b997a1a]
-  Merge branch &#x27;1.7.0&#x27; into uat [ee3dc08]
-  Merge branch &#x27;1.7.0&#x27; into uat [237dcd1]
- 🔀 合并分支 [161cc6b]
-  Merge branch &#x27;1.6.1&#x27; into uat [11c9a7b]
-  Merge branch &#x27;1.6.1&#x27; into uat [3870414]
-  Merge branch &#x27;1.6.1&#x27; into uat [99ade98]
-  Merge branch &#x27;1.6.1&#x27; into uat [d7ace2f]
-  Merge branch &#x27;1.6.1&#x27; into uat [3a6d179]
-  Merge branch &#x27;1.6.1&#x27; into uat [1f0f905]
-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.7.0-beta.76"></a>
## 1.7.0-beta.76 (2020-02-28)

### Changed

- 💄 更换导出按钮loading样式 [61a8e40]

### Fixed

- 🐛 CLOSE bug#2862 解决点评数据页面打不开的问题 [6552f0d]
- 🐛 CLOSE bug#2864 订货会客户端去掉退出登录功能 [7b04348]
- 🐛 CLOSE bug#2859 在订货会打开没有模型的鞋款，进入到渲染页显示加载失败 [0430a68]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into dannny [666b4e0]


<a name="1.7.0-rc.17"></a>
## 1.7.0-rc.17 (2020-02-27)

### Changed

- 🔧 将package.json里边的npm换成yarn [ab708aa]
- ⏪ 修复由于合并的错误版本号的bug [4401fef]

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Fixed

- 🐛 避免没有collocation的容错 [90d0a26]
- 🐛 修复error有时不响应错误的bug [ee9652f]

### Miscellaneous

-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.local:front-end/demon-home into uat [55adcb7]
-  Merge branch &#x27;1.7.0&#x27; into uat [09969d4]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [ca5a517]
-  Merge branch &#x27;1.7.0&#x27; into uat [3d19ebe]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.local:front-end/demon-home into uat [9ae0848]
-  Merge branch &#x27;1.7.0&#x27; into uat [4ea0d67]
-  Merge branch &#x27;1.7.0&#x27; into uat [e9f0dc6]
-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into uat [7d049c7]
-  Merge branch &#x27;1.7.0&#x27; into uat [17a4708]
-  Merge branch &#x27;1.7.0&#x27; into uat [6bc0e2f]
-  Merge branch &#x27;1.7.0&#x27; into uat [61f7882]
-  Merge branch &#x27;1.7.0&#x27; into uat [49eba00]
-  Merge branch &#x27;1.7.0&#x27; into uat [80e0139]
-  Merge branch &#x27;1.7.0&#x27; into uat [bcbe7eb]
-  Merge branch &#x27;1.7.0&#x27; into uat [6455809]
- 🔀 合并分支 [3faf5a8]
-  Merge branch &#x27;1.7.0&#x27; into uat [8a0dfb7]
- 🔀 合并代码 [77fa741]
-  Merge branch &#x27;1.7.0&#x27; into uat [8bf336e]
-  Merge branch &#x27;1.7.0&#x27; into uat [7c5e2ec]
- 🔀 合并代码 [b997a1a]
-  Merge branch &#x27;1.7.0&#x27; into uat [ee3dc08]
-  Merge branch &#x27;1.7.0&#x27; into uat [237dcd1]
- 🔀 合并分支 [161cc6b]
-  Merge branch &#x27;1.6.1&#x27; into uat [11c9a7b]
-  Merge branch &#x27;1.6.1&#x27; into uat [3870414]
-  Merge branch &#x27;1.6.1&#x27; into uat [99ade98]
-  Merge branch &#x27;1.6.1&#x27; into uat [d7ace2f]
-  Merge branch &#x27;1.6.1&#x27; into uat [3a6d179]
-  Merge branch &#x27;1.6.1&#x27; into uat [1f0f905]
-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.7.0-beta.75"></a>
## 1.7.0-beta.75 (2020-02-27)

### Added

- ✨ 更新导出excel功能 [3a918e4]

### Fixed

- 🐛 CLOSE bug#2854  群聊重命名鼠标点击外部区域应该也能命名成功 [4421ac7]
- 🐛 CLOSE bug#2848 数据统计的意向数据，切换已提交和未提交tab时，出现闪屏，如附件 [ba14072]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into dannny [15c197b]
-  Merge branch &#x27;1.7.0&#x27; into dannny [5f8d361]
-  Merge branch &#x27;stephen&#x27; into 1.7.0 [3e02b44]
-  Merge branch &#x27;dannny&#x27; into 1.7.0 [ef7a051]


<a name="1.7.0-beta.74"></a>
## 1.7.0-beta.74 (2020-02-27)

### Added

- ✨ 增加上传页文件过大的判断 [a582cc5]

### Fixed

- 🐛 CLOSE bug#2839 小屏幕鞋款列表的图片没有自适应 [c27d1a8]
- 🐛 CLOSE bug#2855 评论按钮补充一下多态 [96179c4]
- 🐛 CLOSE bug#2851 导航栏固定在顶部 [69077ab]
- 🐛 CLOSE bug# 2850【数据统计】未选中是灰色 [4734edf]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into stephen [3ae975b]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [b9eef3a]


<a name="1.7.0-beta.73"></a>
## 1.7.0-beta.73 (2020-02-27)

### Fixed

- 🐛 CLOSE bug#2834 鞋款数量指示器的总数是全部鞋的总数 [558444f]
- 🐛 CLOSE bug#2843 修复FILA详情页刷新后左右箭头消失的问题 [ddf6c36]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into stephen [4b63948]


<a name="1.7.0-beta.72"></a>
## 1.7.0-beta.72 (2020-02-27)

### Added

- ✨ 增加一个OSS文件路径计算器 [6e3854c]

### Changed

- 🎨 调整点评数据表格交互 [91f5394]

### Fixed

- 🐛 调整数据统计模块代码 [839ca4a]
- 🐛 CLOSE bug#2835 修复订货会详情页箭头显示错误问题 [4e1fa19]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.7.0 [f91024b]
-  Merge branch &#x27;1.7.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.7.0 [52fffe8]
-  Merge branch &#x27;dannny&#x27; into 1.7.0 [58596eb]


<a name="1.7.0-beta.71"></a>
## 1.7.0-beta.71 (2020-02-27)

### Changed

- 🎨 撤下banner图&amp;更换评论输入框文案 [03610d0]


<a name="1.7.0-beta.69"></a>
## 1.7.0-beta.69 (2020-02-26)

### Changed

- 🎨 将部分标签名改为更贴切的语义化标签 [0262869]
- 💄 数据分析页面loading样式修改 [72fe64a]
- 💄 数据分析页面添加过度动画效果 [bf91fcf]
- 💄 common.css文件添加flex-1样式 [2f230d1]

### Fixed

- 🐛 解决销售员top10表格数据错误问题 [fd94210]
- 🐛 更换路由meta：浏览器标签名 [d362067]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.7.0 [54d349a]
-  Merge branch &#x27;dannny&#x27; into 1.7.0 [4292dc4]


<a name="1.7.0-rc.16"></a>
## 1.7.0-rc.16 (2020-02-26)

### Changed

- ⏪ 修复由于合并的错误版本号的bug [4401fef]

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; into uat [3d19ebe]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.local:front-end/demon-home into uat [9ae0848]
-  Merge branch &#x27;1.7.0&#x27; into uat [4ea0d67]
-  Merge branch &#x27;1.7.0&#x27; into uat [e9f0dc6]
-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into uat [7d049c7]
-  Merge branch &#x27;1.7.0&#x27; into uat [17a4708]
-  Merge branch &#x27;1.7.0&#x27; into uat [6bc0e2f]
-  Merge branch &#x27;1.7.0&#x27; into uat [61f7882]
-  Merge branch &#x27;1.7.0&#x27; into uat [49eba00]
-  Merge branch &#x27;1.7.0&#x27; into uat [80e0139]
-  Merge branch &#x27;1.7.0&#x27; into uat [bcbe7eb]
-  Merge branch &#x27;1.7.0&#x27; into uat [6455809]
- 🔀 合并分支 [3faf5a8]
-  Merge branch &#x27;1.7.0&#x27; into uat [8a0dfb7]
- 🔀 合并代码 [77fa741]
-  Merge branch &#x27;1.7.0&#x27; into uat [8bf336e]
-  Merge branch &#x27;1.7.0&#x27; into uat [7c5e2ec]
- 🔀 合并代码 [b997a1a]
-  Merge branch &#x27;1.7.0&#x27; into uat [ee3dc08]
-  Merge branch &#x27;1.7.0&#x27; into uat [237dcd1]
- 🔀 合并分支 [161cc6b]
-  Merge branch &#x27;1.6.1&#x27; into uat [11c9a7b]
-  Merge branch &#x27;1.6.1&#x27; into uat [3870414]
-  Merge branch &#x27;1.6.1&#x27; into uat [99ade98]
-  Merge branch &#x27;1.6.1&#x27; into uat [d7ace2f]
-  Merge branch &#x27;1.6.1&#x27; into uat [3a6d179]
-  Merge branch &#x27;1.6.1&#x27; into uat [1f0f905]
-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.7.0-beta.68"></a>
## 1.7.0-beta.68 (2020-02-26)

### Changed

- 🎨 调整部分chart参数 [8498909]
- 🎨 调试FILA项目中的轮播图不能无效循环的问题 [2e55e41]

### Fixed

- 🐛 修复由于版本冲突导致的上传入口不对的bug [9c2aad6]
- 🐛 CLOSE bug#2818 在意向订单页页面，数量输入空，按回车键，页面跳转到数据空页面 [3d29a36]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into stephen [5bcfc8d]
-  Merge branch &#x27;dannny&#x27; into 1.7.0 [8fea0b0]


<a name="1.7.0-beta.67"></a>
## 1.7.0-beta.67 (2020-02-26)

### Added

- ✨ 增加导出评论数据按钮 [bb16365]
- ✨ 增加点评数据页面 [f5504cd]

### Changed

- 🎨 调整数据统计模块代码 [586f73c]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; into dannny [2b9bcf5]
-  Merge branch &#x27;1.7.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.7.0 [8f5b18e]
-  Merge branch &#x27;dannny&#x27; into 1.7.0 [1defcc3]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [0f60002]
- 📦 更新lock，让vue-gesture-frame通过nexus下载 [d122336]


<a name="1.7.0-beta.66"></a>
## 1.7.0-beta.66 (2020-02-26)

### Added

- ✨ 增加点评数据页面 [f5504cd]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.7.0 [8f5b18e]
-  Merge branch &#x27;dannny&#x27; into 1.7.0 [1defcc3]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [0f60002]
- 📦 更新lock，让vue-gesture-frame通过nexus下载 [d122336]


<a name="1.7.0-rc.15"></a>
## 1.7.0-rc.15 (2020-02-25)

### Changed

- ⏪ 修复由于合并的错误版本号的bug [4401fef]

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Miscellaneous

-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.local:front-end/demon-home into uat [9ae0848]
-  Merge branch &#x27;1.7.0&#x27; into uat [4ea0d67]
-  Merge branch &#x27;1.7.0&#x27; into uat [e9f0dc6]
-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into uat [7d049c7]
-  Merge branch &#x27;1.7.0&#x27; into uat [17a4708]
-  Merge branch &#x27;1.7.0&#x27; into uat [6bc0e2f]
-  Merge branch &#x27;1.7.0&#x27; into uat [61f7882]
-  Merge branch &#x27;1.7.0&#x27; into uat [49eba00]
-  Merge branch &#x27;1.7.0&#x27; into uat [80e0139]
-  Merge branch &#x27;1.7.0&#x27; into uat [bcbe7eb]
-  Merge branch &#x27;1.7.0&#x27; into uat [6455809]
- 🔀 合并分支 [3faf5a8]
-  Merge branch &#x27;1.7.0&#x27; into uat [8a0dfb7]
- 🔀 合并代码 [77fa741]
-  Merge branch &#x27;1.7.0&#x27; into uat [8bf336e]
-  Merge branch &#x27;1.7.0&#x27; into uat [7c5e2ec]
- 🔀 合并代码 [b997a1a]
-  Merge branch &#x27;1.7.0&#x27; into uat [ee3dc08]
-  Merge branch &#x27;1.7.0&#x27; into uat [237dcd1]
- 🔀 合并分支 [161cc6b]
-  Merge branch &#x27;1.6.1&#x27; into uat [11c9a7b]
-  Merge branch &#x27;1.6.1&#x27; into uat [3870414]
-  Merge branch &#x27;1.6.1&#x27; into uat [99ade98]
-  Merge branch &#x27;1.6.1&#x27; into uat [d7ace2f]
-  Merge branch &#x27;1.6.1&#x27; into uat [3a6d179]
-  Merge branch &#x27;1.6.1&#x27; into uat [1f0f905]
-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.7.0-beta.65"></a>
## 1.7.0-beta.65 (2020-02-25)

### Added

- ✨ 抽离Atable的member列表，不写两块个地方 [9247166]


<a name="1.7.0-beta.64"></a>
## 1.7.0-beta.64 (2020-02-25)

### Added

- ✨ 评论增加personal [8ca1379]

### Fixed

- 🐛 修复意向单数据跳转逻辑错误的bug [412339c]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [78777ba]
-  Merge branch &#x27;1.7.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.7.0 [c457569]


<a name="1.7.0-rc.14"></a>
## 1.7.0-rc.14 (2020-02-25)

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; into uat [e9f0dc6]
-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into uat [7d049c7]
-  Merge branch &#x27;1.7.0&#x27; into uat [17a4708]
-  Merge branch &#x27;1.7.0&#x27; into uat [6bc0e2f]
-  Merge branch &#x27;1.7.0&#x27; into uat [61f7882]
-  Merge branch &#x27;1.7.0&#x27; into uat [49eba00]
-  Merge branch &#x27;1.7.0&#x27; into uat [80e0139]
-  Merge branch &#x27;1.7.0&#x27; into uat [bcbe7eb]
-  Merge branch &#x27;1.7.0&#x27; into uat [6455809]
- 🔀 合并分支 [3faf5a8]
-  Merge branch &#x27;1.7.0&#x27; into uat [8a0dfb7]
- 🔀 合并代码 [77fa741]
-  Merge branch &#x27;1.7.0&#x27; into uat [8bf336e]
-  Merge branch &#x27;1.7.0&#x27; into uat [7c5e2ec]
- 🔀 合并代码 [b997a1a]
-  Merge branch &#x27;1.7.0&#x27; into uat [ee3dc08]
-  Merge branch &#x27;1.7.0&#x27; into uat [237dcd1]
- 🔀 合并分支 [161cc6b]
-  Merge branch &#x27;1.6.1&#x27; into uat [11c9a7b]
-  Merge branch &#x27;1.6.1&#x27; into uat [3870414]
-  Merge branch &#x27;1.6.1&#x27; into uat [99ade98]
-  Merge branch &#x27;1.6.1&#x27; into uat [d7ace2f]
-  Merge branch &#x27;1.6.1&#x27; into uat [3a6d179]
-  Merge branch &#x27;1.6.1&#x27; into uat [1f0f905]
-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.7.0-beta.63"></a>
## 1.7.0-beta.63 (2020-02-25)

### Added

- ✨ 数据分析添加loading和空数据页 [a4cf878]

### Fixed

- 🐛 CLOSE bug#2810 [6fe3e9a]
- 🐛 CLOSE bug#2807 优化意向单统计数据页面逻辑 [06fdbb6]
- 🐛 CLOSE bug#2813 [06a9b77]
- 🐛 CLOSE bug#2812 优化数据统计-&gt;意向单页面逻辑 [62e3c1b]
- 🐛 修复数据分析-&gt;未下单详情刷新没有数据的bug [fff6333]


<a name="1.7.0-rc.13"></a>
## 1.7.0-rc.13 (2020-02-25)

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into uat [7d049c7]
-  Merge branch &#x27;1.7.0&#x27; into uat [17a4708]
-  Merge branch &#x27;1.7.0&#x27; into uat [6bc0e2f]
-  Merge branch &#x27;1.7.0&#x27; into uat [61f7882]
-  Merge branch &#x27;1.7.0&#x27; into uat [49eba00]
-  Merge branch &#x27;1.7.0&#x27; into uat [80e0139]
-  Merge branch &#x27;1.7.0&#x27; into uat [bcbe7eb]
-  Merge branch &#x27;1.7.0&#x27; into uat [6455809]
- 🔀 合并分支 [3faf5a8]
-  Merge branch &#x27;1.7.0&#x27; into uat [8a0dfb7]
- 🔀 合并代码 [77fa741]
-  Merge branch &#x27;1.7.0&#x27; into uat [8bf336e]
-  Merge branch &#x27;1.7.0&#x27; into uat [7c5e2ec]
- 🔀 合并代码 [b997a1a]
-  Merge branch &#x27;1.7.0&#x27; into uat [ee3dc08]
-  Merge branch &#x27;1.7.0&#x27; into uat [237dcd1]
- 🔀 合并分支 [161cc6b]
-  Merge branch &#x27;1.6.1&#x27; into uat [11c9a7b]
-  Merge branch &#x27;1.6.1&#x27; into uat [3870414]
-  Merge branch &#x27;1.6.1&#x27; into uat [99ade98]
-  Merge branch &#x27;1.6.1&#x27; into uat [d7ace2f]
-  Merge branch &#x27;1.6.1&#x27; into uat [3a6d179]
-  Merge branch &#x27;1.6.1&#x27; into uat [1f0f905]
-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.7.0-beta.62"></a>
## 1.7.0-beta.62 (2020-02-25)

### Added

- ✨ 数据分析增加系列分析、销售员分析页面 [322e269]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.7.0 [d56ac7d]


<a name="1.7.0-rc.12"></a>
## 1.7.0-rc.12 (2020-02-24)

### Added

- ✨ 优化Detail，不请求version详情 [c79773f]

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; into uat [17a4708]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [9699b49]
-  Merge branch &#x27;1.7.0&#x27; into uat [6bc0e2f]
-  Merge branch &#x27;1.7.0&#x27; into uat [61f7882]
-  Merge branch &#x27;1.7.0&#x27; into uat [49eba00]
-  Merge branch &#x27;1.7.0&#x27; into uat [80e0139]
-  Merge branch &#x27;1.7.0&#x27; into uat [bcbe7eb]
-  Merge branch &#x27;1.7.0&#x27; into uat [6455809]
- 🔀 合并分支 [3faf5a8]
-  Merge branch &#x27;1.7.0&#x27; into uat [8a0dfb7]
- 🔀 合并代码 [77fa741]
-  Merge branch &#x27;1.7.0&#x27; into uat [8bf336e]
-  Merge branch &#x27;1.7.0&#x27; into uat [7c5e2ec]
- 🔀 合并代码 [b997a1a]
-  Merge branch &#x27;1.7.0&#x27; into uat [ee3dc08]
-  Merge branch &#x27;1.7.0&#x27; into uat [237dcd1]
- 🔀 合并分支 [161cc6b]
-  Merge branch &#x27;1.6.1&#x27; into uat [11c9a7b]
-  Merge branch &#x27;1.6.1&#x27; into uat [3870414]
-  Merge branch &#x27;1.6.1&#x27; into uat [99ade98]
-  Merge branch &#x27;1.6.1&#x27; into uat [d7ace2f]
-  Merge branch &#x27;1.6.1&#x27; into uat [3a6d179]
-  Merge branch &#x27;1.6.1&#x27; into uat [1f0f905]
-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.7.0-beta.61"></a>
## 1.7.0-beta.61 (2020-02-24)

### Fixed

- 🐛 CLOSE bug#2792 [f468748]
- 🐛 CLOSE bug#2793 [89d90d2]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [1ff3cfc]


<a name="1.7.0-rc.11"></a>
## 1.7.0-rc.11 (2020-02-23)

### Changed

- 💄 调整专注模式的布局 [cb5f5f6]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; into uat [6bc0e2f]


<a name="1.7.0-rc.10"></a>
## 1.7.0-rc.10 (2020-02-22)

### Changed

- ♻️ 优化评论的架构以及将订购会的评论针对collocation而不是catalogId [e8cb7f2]

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; into uat [61f7882]
-  Merge branch &#x27;1.7.0&#x27; into uat [49eba00]
-  Merge branch &#x27;1.7.0&#x27; into uat [80e0139]
-  Merge branch &#x27;1.7.0&#x27; into uat [bcbe7eb]
-  Merge branch &#x27;1.7.0&#x27; into uat [6455809]
- 🔀 合并分支 [3faf5a8]
-  Merge branch &#x27;1.7.0&#x27; into uat [8a0dfb7]
- 🔀 合并代码 [77fa741]
-  Merge branch &#x27;1.7.0&#x27; into uat [8bf336e]
-  Merge branch &#x27;1.7.0&#x27; into uat [7c5e2ec]
- 🔀 合并代码 [b997a1a]
-  Merge branch &#x27;1.7.0&#x27; into uat [ee3dc08]
-  Merge branch &#x27;1.7.0&#x27; into uat [237dcd1]
- 🔀 合并分支 [161cc6b]
-  Merge branch &#x27;1.6.1&#x27; into uat [11c9a7b]
-  Merge branch &#x27;1.6.1&#x27; into uat [3870414]
-  Merge branch &#x27;1.6.1&#x27; into uat [99ade98]
-  Merge branch &#x27;1.6.1&#x27; into uat [d7ace2f]
-  Merge branch &#x27;1.6.1&#x27; into uat [3a6d179]
-  Merge branch &#x27;1.6.1&#x27; into uat [1f0f905]
-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.7.0-beta.60"></a>
## 1.7.0-beta.60 (2020-02-22)

### Added

- ✨ 增加导出数据接口 [f2ba1d6]
- ✨ 上传增加4ds上传 [d480dd2]

### Changed

- 💄 调整专注模式的样式以及图标 [68a6bd4]

### Fixed

- 🐛 修复IM消息99+时显示不正确的bug [6669383]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.7.0 [489b21a]


<a name="1.7.0-rc.9"></a>
## 1.7.0-rc.9 (2020-02-22)

### Changed

- 🎨 数据分析添加导出数据按钮 [d48123b]
- 💄 调整detail的一些样式 [f3b4510]
- 🎨 隐藏协同空间的消息接收的设置项 [97afaad]

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Fixed

- 🐛 修复鞋款详情弹框中部分组件中的key为动态random()字符串时导致组件不断渲染的问题 [0540a39]
- 🐛 修复已提交意向订单时还可再点提交的bug [f345223]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; into uat [49eba00]
-  Merge branch &#x27;1.7.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.7.0 [87aeabc]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [57cca6d]
-  Merge branch &#x27;stephen&#x27; into 1.7.0 [5faf9ce]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [5c3aa23]
-  Merge branch &#x27;1.7.0&#x27; into uat [80e0139]
-  Merge branch &#x27;1.7.0&#x27; into uat [bcbe7eb]
-  Merge branch &#x27;1.7.0&#x27; into uat [6455809]
- 🔀 合并分支 [3faf5a8]
-  Merge branch &#x27;1.7.0&#x27; into uat [8a0dfb7]
- 🔀 合并代码 [77fa741]
-  Merge branch &#x27;1.7.0&#x27; into uat [8bf336e]
-  Merge branch &#x27;1.7.0&#x27; into uat [7c5e2ec]
- 🔀 合并代码 [b997a1a]
-  Merge branch &#x27;1.7.0&#x27; into uat [ee3dc08]
-  Merge branch &#x27;1.7.0&#x27; into uat [237dcd1]
- 🔀 合并分支 [161cc6b]
-  Merge branch &#x27;1.6.1&#x27; into uat [11c9a7b]
-  Merge branch &#x27;1.6.1&#x27; into uat [3870414]
-  Merge branch &#x27;1.6.1&#x27; into uat [99ade98]
-  Merge branch &#x27;1.6.1&#x27; into uat [d7ace2f]
-  Merge branch &#x27;1.6.1&#x27; into uat [3a6d179]
-  Merge branch &#x27;1.6.1&#x27; into uat [1f0f905]
-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.7.0-beta.59"></a>
## 1.7.0-beta.59 (2020-02-22)

### Added

- ✨ 详情页调整间距，增加sku-picker的下箭头 [463ad15]
- ✨ scrollable增加一些列方法以及事件参数，用于不同业务的开展 [04ddc87]
- ✨ 新增qt的订货会3d模式跳转 [a847af7]
- ✨ 对接如果时主账号和子账号时，没有添加意向单的权限控制 [4e49b44]

### Changed

- 💄 调整首页详情页baseimage的fit值以适配更好的视图展示 [d16601c]
- 🎨 优化数据统计路由代码 [f1ff381]

### Fixed

- 🐛 让低版本浏览器支持scrollTo [4018e17]
- 🐛 loading-mixin避免错误的调用loadingveil [571b819]
- 🐛 去掉oss生成缩略图的scale-down模式 [c680885]
- 🐛 修复baseImage生成缩略图模糊的bug [80bcc64]
- 🐛 CLOSE bug#2670 [2edb0e3]
- 🐛 将意向单中的鞋码分隔符统一按空格分隔 [6a83588]
- 🐛 CLOSE bug#2788 [c1a9090]
- 🐛 CLOSE bug#2767 修复qt端文件列表只有一行时，选中项会很高 [936b67d]
- 🐛 优化点击已/未提交订单标签时多次请求的问题 [5f68063]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [709b30b]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [cfc7bc3]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [56ebbf6]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [5ab33b8]
-  Merge branch &#x27;1.7.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.7.0 [c73be44]
-  Merge branch &#x27;dannny&#x27; into 1.7.0 [e6956a5]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [e560648]
-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into stephen [3622f66]


<a name="1.7.0-beta.58"></a>
## 1.7.0-beta.58 (2020-02-22)

### Changed

- 🎨 开放设置入口 [3b9b6fa]

### Fixed

- 🐛 让订货会的3d入口设为qt端限定 [dd3ca9a]
- 🐛 订货会的专注模式设为web才显示 [8270bde]
- 🐛 让订货会详情页的滚动条在qt内生效（用scrollLeft） [33b6814]
- 🐛 修复订货会订单详情返回跳转错误的bug [feba5aa]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.7.0 [1b0f74b]
-  Merge branch &#x27;1.7.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.7.0 [6e91186]
-  Merge branch &#x27;dannny&#x27; into 1.7.0 [8c0b0e7]


<a name="1.7.0-rc.8"></a>
## 1.7.0-rc.8 (2020-02-22)

### Added

- ✨ 增加专注模式 [ebc8ede]

### Changed

- 🍱 更新图标 [faa6c73]

### Fixed

- 🐛 当无法使用scrollTo时使用scrollLeft（目前指qt环境） [c02b748]
- 🐛 禁止qt端拖拽改变协同空间顺序（qt无法触发dragend事件，会导致错误） [10623a8]
- 🐛 CLOSE bug#2157 [834bf84]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; into uat [80e0139]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [05e563f]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [d1d1592]


<a name="1.7.0-rc.7"></a>
## 1.7.0-rc.7 (2020-02-21)

### Changed

- 🎨 增加isQt方法，在根vue中注入到provide中 [75da6cb]
- 🎨 删除console [9fd0e1f]

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Fixed

- 🐛 CLOSE bug#2782 更新订单页跳转逻辑 [fef26e4]
- 🐛 修复在客户端下im、订货会的显示bug [1bc3874]
- 🐛 避免oss在大屏或高分屏上下载不了大图的bug [27229aa]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; into uat [bcbe7eb]
-  Merge branch &#x27;dannny&#x27; into 1.7.0 [468e1a0]
-  Merge branch &#x27;dannny&#x27; into 1.7.0 [49bd98c]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [8c84455]
-  Merge branch &#x27;1.7.0&#x27; into uat [6455809]
- 🔀 合并分支 [3faf5a8]
-  Merge branch &#x27;1.7.0&#x27; into uat [8a0dfb7]
- 🔀 合并代码 [77fa741]
-  Merge branch &#x27;1.7.0&#x27; into uat [8bf336e]
-  Merge branch &#x27;1.7.0&#x27; into uat [7c5e2ec]
- 🔀 合并代码 [b997a1a]
-  Merge branch &#x27;1.7.0&#x27; into uat [ee3dc08]
-  Merge branch &#x27;1.7.0&#x27; into uat [237dcd1]
- 🔀 合并分支 [161cc6b]
-  Merge branch &#x27;1.6.1&#x27; into uat [11c9a7b]
-  Merge branch &#x27;1.6.1&#x27; into uat [3870414]
-  Merge branch &#x27;1.6.1&#x27; into uat [99ade98]
-  Merge branch &#x27;1.6.1&#x27; into uat [d7ace2f]
-  Merge branch &#x27;1.6.1&#x27; into uat [3a6d179]
-  Merge branch &#x27;1.6.1&#x27; into uat [1f0f905]
-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.7.0-rc.6"></a>
## 1.7.0-rc.6 (2020-02-21)

### Added

- ✨ im增加自动重连 [7dd53cf]

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Fixed

- 🐛 CLOSE bug#2625 [f9169a4]
- 🐛 CLOSE bug#2785 [e75b0c7]
- 🐛 CLOSE bug#2757 在意向订单中打开详情，重新打开一个新的浏览器窗口 ，不要刷新页面 [6d34659]
- 🐛 CLOSE bug#2781 修复IM名称过长时不显示重命名图标的bug [6998d78]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; into uat [6455809]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [aa4c5df]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [8c8f9b0]
-  Merge branch &#x27;stephen&#x27; into 1.7.0 [d864eab]
-  Merge branch &#x27;1.7.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.7.0 [eab9b1c]
-  Merge branch &#x27;dannny&#x27; into 1.7.0 [ff42b63]
- 🔀 合并分支 [3faf5a8]
-  Merge branch &#x27;1.7.0&#x27; into uat [8a0dfb7]
- 🔀 合并代码 [77fa741]
-  Merge branch &#x27;1.7.0&#x27; into uat [8bf336e]
-  Merge branch &#x27;1.7.0&#x27; into uat [7c5e2ec]
- 🔀 合并代码 [b997a1a]
-  Merge branch &#x27;1.7.0&#x27; into uat [ee3dc08]
-  Merge branch &#x27;1.7.0&#x27; into uat [237dcd1]
- 🔀 合并分支 [161cc6b]
-  Merge branch &#x27;1.6.1&#x27; into uat [11c9a7b]
-  Merge branch &#x27;1.6.1&#x27; into uat [3870414]
-  Merge branch &#x27;1.6.1&#x27; into uat [99ade98]
-  Merge branch &#x27;1.6.1&#x27; into uat [d7ace2f]
-  Merge branch &#x27;1.6.1&#x27; into uat [3a6d179]
-  Merge branch &#x27;1.6.1&#x27; into uat [1f0f905]
-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.7.0-beta.55"></a>
## 1.7.0-beta.55 (2020-02-21)

### Changed

- 🎨 调整分析图表显示标题的长度和图表的高度 [e06e3cc]
- 💄 更新数据统计没有数据时的样式 [c13f333]

### Fixed

- 🐛 修复数据分析表单没有显示颜色的bug [6423f55]
- 🐛 CLOSE bug#2762 点击横幅跳转到 没有权限页面 [bffe5ba]
- 🐛 解决合并冲突 [d3dc746]
- 🐛 解决合并冲突 [a3b8b03]
- 🐛 修复gestureframe锁轴锁错的bug [cd45806]
- 🐛 修复im红点不生效的bug [e2028b6]
- 🐛 CLOSE bug#2745 调整数据分析表格样式 [4f51a6e]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into stephen [a7a2cec]
-  Merge branch &#x27;1.7.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.7.0 [4f7fa61]
-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into stephen [0a4c44e]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [fe369c8]


<a name="1.7.0-beta.54"></a>
## 1.7.0-beta.54 (2020-02-21)

### Fixed

- 🐛 修复 FILA详情页路由修改后，意向单模块没有同步修改，导致页面调整详情页失败的问题 [497cba3]


<a name="1.7.0-rc.5"></a>
## 1.7.0-rc.5 (2020-02-21)

### Added

- ✨ 详情页底下改为全部形体 [ab46897]

### Changed

- 💄 订货会详情页UI调整 [d1a55b8]
- 💄 调整数据统计图表的样式；添加分析图表的标题； [772828d]

### Fixed

- 🐛 修复代码错误 [164f26a]
- 🐛 解决合并冲突 [6931fd4]
- 🐛 修复路由没有携带workspaceId导致的bug [e301a9d]
- 🐛 调整数据统计模块 [fdc8fc6]
- 🐛 CLOSE bug#2746 意向订单--&gt;联系电话，提交不能少低于6个字符，输入3个字符也可以提交成功 [d55e3f8]
- 🐛 修复添加成员时的搜索，只输入一个字符时不触发搜索接口的bug [6a8ef75]
- 🐛 当banner无链接时不跳转 [bfc19d5]
- 🐛 CLOSE bug#2755  意向订单，鞋款后面需要加 ： [e902951]
- 🐛 CLOSE bug#2757 在意向订单中打开详情，重新打开一个新的浏览器窗口 ，不要刷新页面 [0bcb590]

### Miscellaneous

- 🔀 合并分支 [3faf5a8]
-  Merge branch &#x27;dannny&#x27; into 1.7.0 [1c30c7a]
-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into stephen [73a3050]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [a003bf3]
-  Merge branch &#x27;stephen&#x27; into 1.7.0 [1647146]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [4623fd6]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [fabf4b9]
-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into stephen [a765428]


<a name="1.7.0-rc.4"></a>
## 1.7.0-rc.4 (2020-02-21)

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; into uat [8a0dfb7]
- 🔀 合并代码 [77fa741]
-  Merge branch &#x27;1.7.0&#x27; into uat [8bf336e]
-  Merge branch &#x27;1.7.0&#x27; into uat [7c5e2ec]
- 🔀 合并代码 [b997a1a]
-  Merge branch &#x27;1.7.0&#x27; into uat [ee3dc08]
-  Merge branch &#x27;1.7.0&#x27; into uat [237dcd1]
- 🔀 合并分支 [161cc6b]
-  Merge branch &#x27;1.6.1&#x27; into uat [11c9a7b]
-  Merge branch &#x27;1.6.1&#x27; into uat [3870414]
-  Merge branch &#x27;1.6.1&#x27; into uat [99ade98]
-  Merge branch &#x27;1.6.1&#x27; into uat [d7ace2f]
-  Merge branch &#x27;1.6.1&#x27; into uat [3a6d179]
-  Merge branch &#x27;1.6.1&#x27; into uat [1f0f905]
-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.7.0-beta.53"></a>
## 1.7.0-beta.53 (2020-02-21)

### Fixed

- 🐛 CLOSE bug#2746 意向订单--&gt;联系电话，提交不能少低于6个字符，输入3个字符也可以提交成功 [d55e3f8]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into stephen [73a3050]


<a name="1.7.0-beta.52"></a>
## 1.7.0-beta.52 (2020-02-21)

### Added

- ✨ 详情页底下改为全部形体 [ab46897]

### Changed

- 💄 订货会详情页UI调整 [d1a55b8]

### Fixed

- 🐛 修复添加成员时的搜索，只输入一个字符时不触发搜索接口的bug [6a8ef75]
- 🐛 当banner无链接时不跳转 [bfc19d5]
- 🐛 CLOSE bug#2755  意向订单，鞋款后面需要加 ： [e902951]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [a003bf3]
-  Merge branch &#x27;stephen&#x27; into 1.7.0 [1647146]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [4623fd6]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [fabf4b9]


<a name="1.7.0-beta.51"></a>
## 1.7.0-beta.51 (2020-02-21)

### Added

- ✨ gestureframe锁住垂直方向选择循环 [c4b3bb8]

### Changed

- 💄 调整数据统计图表的样式；添加分析图表的标题； [772828d]
- 💄 调整FILA中数据分析中的统计图的样式 [542799a]

### Fixed

- 🐛 CLOSE bug#2757 在意向订单中打开详情，重新打开一个新的浏览器窗口 ，不要刷新页面 [0bcb590]
- 🐛 临时修复详情页底下缩略图地址错误的问题 [7a57f66]
- 🐛 修复订单详情缩略图模糊的问题 [04d83e8]
- 🐛 优化表单样式并且修复重置缩略图失效的bug [ce9e302]
- 🐛 CLOSE bug#2760 修复数据分析页面没有数据时显示错误的bug [08bbba5]
- 🐛 修复数据分析权限逻辑错误的bug [d7ed087]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into stephen [a765428]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [39b97e4]
-  Merge branch &#x27;dannny&#x27; into 1.7.0 [4f29d9d]
-  Merge branch &#x27;dannny&#x27; into 1.7.0 [75fad6f]
-  Merge branch &#x27;1.7.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.7.0 [f90a0eb]
-  Merge branch &#x27;dannny&#x27; into 1.7.0 [8e384b6]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [345fdc7]


<a name="1.7.0-rc.3"></a>
## 1.7.0-rc.3 (2020-02-20)

### Added

- ✨ 增加3d显示的判断 [4dc2afe]

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Miscellaneous

- 🔀 合并代码 [77fa741]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [66ae653]
-  Merge branch &#x27;1.7.0&#x27; into uat [8bf336e]
-  Merge branch &#x27;1.7.0&#x27; into uat [7c5e2ec]
- 🔀 合并代码 [b997a1a]
-  Merge branch &#x27;1.7.0&#x27; into uat [ee3dc08]
-  Merge branch &#x27;1.7.0&#x27; into uat [237dcd1]
- 🔀 合并分支 [161cc6b]
-  Merge branch &#x27;1.6.1&#x27; into uat [11c9a7b]
-  Merge branch &#x27;1.6.1&#x27; into uat [3870414]
-  Merge branch &#x27;1.6.1&#x27; into uat [99ade98]
-  Merge branch &#x27;1.6.1&#x27; into uat [d7ace2f]
-  Merge branch &#x27;1.6.1&#x27; into uat [3a6d179]
-  Merge branch &#x27;1.6.1&#x27; into uat [1f0f905]
-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.7.0-beta.50"></a>
## 1.7.0-beta.50 (2020-02-20)

### Fixed

- 🐛 修复非主管人员可以看到数据分析标签的bug [d8f971f]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.7.0 [e661c57]


<a name="1.7.0-rc.2"></a>
## 1.7.0-rc.2 (2020-02-20)

### Added

- ✨ 订单详情增加鞋款预览图 [72fdf49]
- ✨ 在FILA分析页面添加echart图表 [e312a28]
- ✨ 增加缩略图上传以及调整sku位置 [3b84ee2]
- ✨ 创建echart相关的组件 [c4c6924]
- ✨ loading可以修改文字 [44098f4]

### Changed

- 🔧 添加echarts 和 vue-echarts 库 [1297a96]

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Fixed

- 🐛 修复虚拟账号生成水印报错的bug [9d7bd45]
- 🐛 修复oss/utils对sdtc-public-picture域名的判断错误的问题 [804580c]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; into uat [8bf336e]
-  Merge branch &#x27;1.7.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.7.0 [81f8b21]
-  Merge branch &#x27;1.7.0&#x27; into uat [7c5e2ec]
- 🔀 合并代码 [b997a1a]
-  Merge branch &#x27;stephen&#x27; into 1.7.0 [1503c20]
-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into stephen [537d92f]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [8fe6f74]
-  Merge branch &#x27;1.7.0&#x27; into uat [ee3dc08]
-  Merge branch &#x27;1.7.0&#x27; into uat [237dcd1]
- 🔀 合并分支 [161cc6b]
-  Merge branch &#x27;1.6.1&#x27; into uat [11c9a7b]
-  Merge branch &#x27;1.6.1&#x27; into uat [3870414]
-  Merge branch &#x27;1.6.1&#x27; into uat [99ade98]
-  Merge branch &#x27;1.6.1&#x27; into uat [d7ace2f]
-  Merge branch &#x27;1.6.1&#x27; into uat [3a6d179]
-  Merge branch &#x27;1.6.1&#x27; into uat [1f0f905]
-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.7.0-beta.48"></a>
## 1.7.0-beta.48 (2020-02-20)

### Added

- ✨ 更新数据统计模块 [c904f83]
- ✨ 新增修改聊天群名功能 [6f3c549]
- ✨ 避免socket断了之后退出登录报错 [f168c62]
- ✨ scrollable 增加scroll方法 [8a406d5]

### Changed

- ⚡ 把获取个人的上传文件夹信息改为点击header的上传时才获取 [787b323]
- 💄 优化错误显示的位置 [677c180]

### Fixed

- 🐛 CLOSE bug#2751 IM入口添加未读提醒 [be02eae]
- 🐛 CLOSE bug#2154 [ccbec89]
- 🐛 修复im没有自动插入session的bug [181ca38]

### Miscellaneous

-  Merge branch &#x27;onion&#x27; into 1.7.0 [0002163]
-  Merge branch &#x27;dannny&#x27; into 1.7.0 [92e933c]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [6958527]
-  Merge branch &#x27;onion&#x27; into 1.7.0 [c9c319b]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [a90913a]


<a name="1.7.0-beta.47"></a>
## 1.7.0-beta.47 (2020-02-20)

### Added

- ✨ 抽取FILA项目的基本按钮组件 BaseButton [e220587]

### Changed

- 🎨 框选改为包裹才选中的模式 [1f63e16]
- 💄 修改意向单中的按钮使用BaseButton组件；修改部分按钮的交互样式 [7b663f5]
- 💄 让订货会列表滚动按钮在可滚动时才显示 [c823e06]

### Removed

- 🔇 清理console [49d3d82]

### Fixed

- 🐛 CLOSE bug#2693, bug#2690 [2b977bf]
- 🐛 修复首页列表渲染时报错的bug [fa5aa2c]

### Miscellaneous

-  Merge branch &#x27;onion&#x27; into 1.7.0 [a5cbfe6]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [d234fe7]
-  Merge branch &#x27;1.7.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.7.0 [85d9f37]
-  Merge branch &#x27;onion&#x27; into 1.7.0 [ca524f7]


<a name="1.7.0-rc.1"></a>
## 1.7.0-rc.1 (2020-02-20)

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; into uat [ee3dc08]
-  Merge branch &#x27;1.7.0&#x27; into uat [237dcd1]
- 🔀 合并分支 [161cc6b]
-  Merge branch &#x27;1.6.1&#x27; into uat [11c9a7b]
-  Merge branch &#x27;1.6.1&#x27; into uat [3870414]
-  Merge branch &#x27;1.6.1&#x27; into uat [99ade98]
-  Merge branch &#x27;1.6.1&#x27; into uat [d7ace2f]
-  Merge branch &#x27;1.6.1&#x27; into uat [3a6d179]
-  Merge branch &#x27;1.6.1&#x27; into uat [1f0f905]
-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.7.0-beta.46"></a>
## 1.7.0-beta.46 (2020-02-20)

### Added

- ✨ 增加右键平移，并且放大后可以旋转 [fa45038]
- ✨ 优化im消息排重规则 [efcf6b7]

### Changed

- 💄 CLOSE bug#2735 [b950e0a]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [3857ea6]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [5fb8436]


<a name="1.7.0-beta.45"></a>
## 1.7.0-beta.45 (2020-02-20)

### Added

- ✨ sidebar逻辑入口判断优化 [c5779fd]

### Fixed

- 🐛 CLOSE bug#2744 意向订单提交成功后，页面没有刷新，导致再次点击提交订单报错 [2f4d998]
- 🐛 CLOSE bug#2746 未提交意向单表单校验添加开头和结尾不能有空格的校验 [edc3f05]
- 🐛 将globalThis临时替换为global [83bd5c0]
- 🐛 CLOSE bug#2742 提交意向订单成功后，提示英文信息（英文提示翻译不太对） [3a27c48]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into stephen [2f906d6]


<a name="1.7.0-rc.0"></a>
## 1.7.0-rc.0 (2020-02-20)

### Fixed

- 🐛 修复首页sideBar读取配置地址错误的bug [6dd2f35]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; into uat [237dcd1]


<a name="1.7.0-beta.44"></a>
## 1.7.0-beta.44 (2020-02-19)

### Added

- ✨ 添加意向单的时候添加colorId [c61864a]
- ✨ 意向单模块的图片和名称点击可以跳转对应的详情页面 [b2f4618]

### Changed

- 💄 意向单订单模块按UI要求，调整按钮点击等状态下的样式 [aaa10f2]

### Fixed

- 🐛 订单预览页面路由添加workspaceId [ec6057f]
- 🐛 CLOSE bug#2740 意向订单图片还是被拉伸了 [60f8556]
- 🐛 首页接口逻辑优化 [91889d2]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into stephen [cd21a82]
-  Merge branch &#x27;1.7.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.7.0 [123e48a]
-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into stephen [d2e97c7]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [1062f15]
-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into stephen [8a6bb23]
-  Merge branch &#x27;dannny&#x27; into 1.7.0 [c290218]


<a name="1.7.0-beta.43"></a>
## 1.7.0-beta.43 (2020-02-19)

### Added

- ✨ 设置banner跳转 [91e9c02]

### Changed

- 💄 隐藏首页的滚动条，兼容火狐 [e6b74dd]

### Fixed

- 🐛 修复详情页标题太长的问题 [58f2263]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [f035c61]


<a name="1.7.0-beta.42"></a>
## 1.7.0-beta.42 (2020-02-19)

### Added

- ✨ 抽离配置 [2117054]

### Changed

- 💄 评论为空时根据参数显示fila的图和文字与否 [c0f51cc]
- 🎨 调整无评论时的文字 [98e9526]
- 🔧 将个人分支改为staging [b85fa76]
- 🎨 加上评论的空评论时的i18n [ea23fc1]

### Fixed

- 🐛 CLOSE bug#2734 [bb91592]
- 🐛 订货会SideBar挑错了链接 [0971d48]
- 🐛 CLOSE bug#2732 bug#2737 [7b48fa8]
- 🐛 关订货会banner的border-radius [d953bbf]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [dbf3fcc]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [23f38bf]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [b8595d0]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [8d80d3c]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [6fe1279]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [edf2c18]


<a name="1.7.0-beta.41"></a>
## 1.7.0-beta.41 (2020-02-19)

### Added

- ✨ 详情页图片增加可放大预览功能 [6f069f7]

### Fixed

- 🐛 修复改漏了路径导致的图片不能访问的bug [2f40b02]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [29b5aaf]
-  Merge branch &#x27;1.7.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.7.0 [8fd3744]
-  Merge branch &#x27;dannny&#x27; into 1.7.0 [e203911]


<a name="1.7.0-beta.40"></a>
## 1.7.0-beta.40 (2020-02-19)

### Added

- ✨ 迁移collocations路径 [003a230]
- ✨ header加入wsId [0078852]

### Removed

- 🔥 隐藏协同空间入口 [8d4ec04]

### Fixed

- 🐛 修复无法启动的bug [e1daf13]


<a name="1.7.0-beta.39"></a>
## 1.7.0-beta.39 (2020-02-19)

### Added

- ✨ 增加侧边栏的订货会入口 [7fd5bd1]

### Fixed

- 🐛 尝试修复baseimage获取不到宽高时的问题 [74bb01b]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [869e952]


<a name="1.7.0-beta.38"></a>
## 1.7.0-beta.38 (2020-02-19)

### Fixed

- 🐛 CLOSE bug#2724 修复订单页刷新报错的bug [a85609b]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.7.0 [13186cf]


<a name="1.7.0-beta.37"></a>
## 1.7.0-beta.37 (2020-02-19)

### Changed

- ⚡ 增加静态的banner图 [73818a0]
- 🎨 订货会banner图改为一张 [832bb81]

### Fixed

- 🐛 CLOSE bug#2091 修复最近浏览记录必须要点击2次才会显示出来的问题 [182f144]
- 🐛 CLOSE bug#2726 意向订单数据量太大时，页面数据显示不全 [8f36746]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [c333842]
-  Merge branch &#x27;stephen&#x27; into 1.7.0 [c8f3d26]


<a name="1.7.0-beta.36"></a>
## 1.7.0-beta.36 (2020-02-19)

### Fixed

- 🐛 修复360图轴长算错的bug [720bdd4]
- 🐛 修复已提交意向单页面中，数据鞋款系列下没有鞋款时，不显示鞋款的表单 [a158dc7]
- 🐛 CLOSE bug#2650 添加最近浏览记录在下屏幕下显示不全时的hover文字提示 [1166bc1]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [269f437]
-  Merge branch &#x27;stephen&#x27; into 1.7.0 [5228617]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [f22d3a4]


<a name="1.7.0-beta.35"></a>
## 1.7.0-beta.35 (2020-02-19)

### Added

- ➕ 添加 gsap 库（js的动画效果） [7388788]

### Changed

- 🎨 对意向单中的数字添加千分位分隔符的显示方式 [47c4f97]
- 💄 未提交意向单页面添加删除鞋款时的动画效果 [a085e11]
- 🎨 将未提交意向单的表单校验逻辑分离独立；表单校验的提示改未中文； [5cceda0]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into stephen [0530632]


<a name="1.7.0-beta.34"></a>
## 1.7.0-beta.34 (2020-02-19)

### Added

- ✨ 上一个下一个系列的逻辑 [1647185]
- ✨ 修复D4操作的时候报错的bug [750bd2f]
- ✨ 修复部分浏览器对RegExp一些处理错误的bug [9438dd9]

### Fixed

- 🐛 让重命名协同空间超字数时有提示 [31acd8d]
- 🐛 CLOSE bug#2708 [8f83f06]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [3665091]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [132181d]
-  Merge branch &#x27;1.7.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.7.0 [cb1a535]
-  Merge branch &#x27;dannny&#x27; into 1.7.0 [bd1fece]


<a name="1.7.0-beta.33"></a>
## 1.7.0-beta.33 (2020-02-19)

### Added

- ✨ 增加无权限查看页面 [ce5d0d7]

### Changed

- 💄  [bc58cdc]
- 💄 确保订货会首页图片是16/9的 [e688bea]

### Fixed

- 🐛 修复默认xy轴错误的bug [4a2aee9]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [e78ca70]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [f2bbe7f]


<a name="1.7.0-beta.32"></a>
## 1.7.0-beta.32 (2020-02-19)

### Fixed

- 🐛 CLOSE bug#2706 [d1f85c1]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.7.0 [f7a5e9d]
-  Merge branch &#x27;dannny&#x27; into 1.7.0 [db7ce4b]


<a name="1.7.0-beta.31"></a>
## 1.7.0-beta.31 (2020-02-19)

### Changed

- 💄 调整已提交意向单页面的UI，效果更逼近原型图 [604bc68]
- 💄 调整未提交意向单页面的UI，效果更逼近原型图 [2d70c83]
- 💄 订货会首页间距调整、标题高度调整 [aabaca0]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [8442943]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [6985dc7]


<a name="1.7.0-beta.30"></a>
## 1.7.0-beta.30 (2020-02-19)

### Added

- ✨ oss地址修改 [917362e]
- ✨ 上传功能开放 [e79ddc1]

### Fixed

- 🐛 避免空的thumbnailname生成出空图片 [008e6fe]
- 🐛 CLOSE bug#2709 [90341c9]
- 🐛 CLOSE #2710 [df0a1f5]
- 🐛 CLOSE bug#2681 [f8c1af5]


<a name="1.7.0-beta.29"></a>
## 1.7.0-beta.29 (2020-02-18)

### Added

- ✨ 订货会首页添加滚动功能 [c0089d7]

### Changed

- 💄 更新部分动画效果、样式 [e1ab18f]

### Fixed

- 🐛 CLOSE bug#2685 [0e9e09a]
- 🐛 CLOSE bug#2679 更新详情页ui问题 [c7e1018]
- 🐛 去掉多余的图片 [d6fe115]
- 🐛 CLOSE bug #2707 修复数据统计模块部分字段错误的bug [fb19eeb]
- 🐛 修复im获取会话列表错误的bug [44b7f86]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.7.0 [3a47ec3]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [3304bd7]
-  Merge branch &#x27;dannny&#x27; into 1.7.0 [e5cea33]


<a name="1.7.0-beta.28"></a>
## 1.7.0-beta.28 (2020-02-18)

### Changed

- 💄 调整订货会dropdownmenu的padding [bfa39de]

### Fixed

- 🐛 调整评论的时间的右margin [a455696]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [752c06b]


<a name="1.7.0-beta.27"></a>
## 1.7.0-beta.27 (2020-02-18)

### Fixed

- 🐛 CLOSE #bug2702 在意向订单页面，将一个系列鞋款全部删除完，列表明没有被删除 [70c342c]
- 🐛 CLOSE bug#2678 [ff487f4]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into stephen [f554e7e]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [9b36c98]


<a name="1.7.0-beta.26"></a>
## 1.7.0-beta.26 (2020-02-18)

### Added

- ✨ 意向单为空时，显示默认的图片和文本 [fe7f9cf]

### Fixed

- 🐛 CLOSE bug#2673 bug#2687 意向订单提交页面，+-数据量后，共计数量没有联动变化 [6493e63]
- 🐛 CLOSE bug#2682 在意向订单页面，点击删除按钮，没有弹出提示 [61994b3]
- 🐛 CLOSE bug#2684 意向订单页面，点击‘提交意向单’弹出框，按钮显示折叠 [39ef4f3]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into stephen [3539b77]


<a name="1.7.0-beta.25"></a>
## 1.7.0-beta.25 (2020-02-18)

### Changed

- 💄 更新数据统计部分ui [8f2f324]

### Fixed

- 🐛 CLOSE bug#2691 修复member不能删除虚拟账号的问题 [3d1368a]
- 🐛 修复订货会首页数据格式兼容的bug [0bddf2a]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.7.0 [16168d4]


<a name="1.7.0-beta.24"></a>
## 1.7.0-beta.24 (2020-02-18)

### Changed

- 💄 更新数据统计页面样式 [06f6938]

### Fixed

- 🐛 订货会虚拟账号隐藏数据统计入口 [f83aa5d]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.7.0 [d2d32f2]


<a name="1.7.0-beta.23"></a>
## 1.7.0-beta.23 (2020-02-18)

### Added

- ✨ FILA项目中的顶部导航，虚拟账号时隐藏数据统计的路由 [4f6fce1]

### Miscellaneous

-  Merge branch &#x27;stephen&#x27; into 1.7.0 [d3f526a]


<a name="1.7.0-beta.22"></a>
## 1.7.0-beta.22 (2020-02-18)

### Changed

- 🎨 开放协同空间的设置入口 [1dc248b]
- 🚨 修复eslint的报错 [a647032]
- 💄 优化ProductList的样式 [2e5167e]
- 💄 详情底下选择鞋款的名字缺少padding [0a5a192]

### Fixed

- 🐛 增加订货会图片错误样式 [bcdc159]
- 🐛 修复订货会意向订单第二步时，顶部导航栏的意向订单没有高亮的问题 [f922025]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [d6b2fef]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [f5cc61d]


<a name="1.7.0-beta.21"></a>
## 1.7.0-beta.21 (2020-02-18)

### Added

- ✨ 未提交意向单页面添加表单校验、鞋款为零校验；提交时，添加再次询问框 [0797548]
- ✨ 添加手机类型的表单校验规则 [6a9250a]
- ✨ 抽取意向单中客户信息表单提交的组件 [e31b6ee]
- ✨ 增加路由鉴权错误时跳到404 [b59552c]
- ✨ 将workspaceId判断的逻辑放到index [fd319bc]
- ✨ 订购会整体路由修改，增加远程获取的workspaceId [01de355]
- ✨ 上传size改成tags [8c2b7f1]
- ✨ 新增toast提示工具 [3cfdaa7]

### Changed

- 🔧 修改eslint中 no-unreachable 为warning，开发过程中注释代码时不会编译不通 [f2dcb93]
- 🔧 修改eslint中 no-unused-vars 为warning，开发过程中注释代码时不会编译不通过 [26122ad]
- 💄 订货会首页UI调整 [a288756]
- 💄 更新iconfont文件 [7d8fbc5]
- 🎨 将订货会home请求及数据提升到index处理 [525ba78]
- 🎨 简化意向单的路由名称 [5c021c9]
- 🔧 修改eslint中 no-unused-expressions 规则，支持ternary operation [50b8031]
- 💄 订货会logo变更 [ba7d4fa]
- 💄 修改订货会顶部栏字体颜色 [a7f4571]
- 🎨 将点击意向单导航到哪个页面的逻辑移动到路由配置js文件里 [1d2c3d0]

### Fixed

- 🐛 修复im获取错误chatList的bug [8c9e637]
- 🐛 header的首页入口改为index [d326f0a]
- 🐛 创建客服会话接口添加groupAppId [1d5e12c]
- 🐛 更新意向订单列表接口参数名 [1b9d1ce]
- 🐛 订货会路由调整 [774e1b6]
- 🐛 点击添加到意向单时增加toast效果 [f50e11c]
- 🐛 修复跳转数据统计订单详情页面的bug [7393624]

### Miscellaneous

-  Merge branch &#x27;stephen&#x27; into 1.7.0 [0a7decd]
-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into stephen [f19af8f]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [b235add]
-  Merge branch &#x27;1.7.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.7.0 [a0ab3f1]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [30af46a]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [ac28c49]
-  Merge branch &#x27;dannny&#x27; into 1.7.0 [ed59b95]
- 🔀 解决冲突 [695916c]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [d2047b1]
-  Merge branch &#x27;dannny&#x27; into 1.7.0 [dccdeae]
-  Merge branch &#x27;onion&#x27; into 1.7.0 [05fb675]


<a name="1.7.0-beta.20"></a>
## 1.7.0-beta.20 (2020-02-18)

### Changed

- 🎨 优化数据分析路由逻辑 [44b7307]

### Fixed

- 🐛 修复路由错误 [5310c5d]
- 🐛 数据分析隐藏我的客户标签&#x27; [3689edd]
- 🐛 修复header切换动来动去的问题 [fccd975]
- 🐛 提交订购单之后详情应该不能添加 [d3e5694]
- 🐛 修复数据分析接口问题 [afd6b3b]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.7.0 [6656a84]
-  Merge branch &#x27;dannny&#x27; into 1.7.0 [84d2fe7]
-  Merge branch &#x27;dannny&#x27; into 1.7.0 [400c004]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [c7479e6]
-  Merge branch &#x27;1.7.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.7.0 [f031897]
-  Merge branch &#x27;1.7.0&#x27; into dannny [a0c5b4e]


<a name="1.7.0-beta.19"></a>
## 1.7.0-beta.19 (2020-02-18)

### Changed

- 💄 修复导航显示问题 [84953f7]


<a name="1.7.0-beta.18"></a>
## 1.7.0-beta.18 (2020-02-17)

### Added

- ✨ 完成FILA头部意向单导航根据是否提交意向打开对应的页面单 [b5b9a4c]

### Changed

- 🎨 图片用BaseImage组件 [ab1784e]
- 🎨 调整意向提交时，添加数量和删除鞋款的逻辑 [7524789]
- 🎨 完善提交意向单时的交互效果 [217084f]

### Miscellaneous

-  Merge branch &#x27;stephen&#x27; into 1.7.0 [da61222]


<a name="1.7.0-beta.17"></a>
## 1.7.0-beta.17 (2020-02-17)

### Added

- ✨ 详情意向单添加简单的反馈 [943d8d3]
- ✨ 增加登录页的redirect参数 [1c90078]

### Changed

- 💄 增加评论的加载效果 [a91192b]
- 💄 意向单和3d按钮的样式修改 [7517acf]

### Fixed

- 🐛 解决合并冲突 [9f9ae57]
- 🐛 解决订货会导航刷新时的显示问题、扩大导航的可选择范围 [73991b4]
- 🐛 修复history对于同一域名转换path的错误 [815262c]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.7.0 [190b2ba]
- 🚧 数据统计模块开发 [f28fdc3]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [64efb6e]
-  新增登出操作 [bfc2fd7]


<a name="1.7.0-beta.16"></a>
## 1.7.0-beta.16 (2020-02-17)

### Added

- ✨ 对接FILA意向单中未提交订单的接口 [0803f6e]
- ✨ 对接已提交意向单的接口 [8938c44]
- ✨ 对接FILA意向单列表接口和添加意向单相关接口到api [932606e]

### Changed

- 🎨 修改FILA上传页面中默认sku数量为4；sku颜色和名称的字段是相同的 [a8ae758]
- 🎨 修改添加FILA鞋款详情中意向单接口中的参数 [3af2b51]

### Fixed

- 🐛 修复代码错误 [31f66c0]
- 🐛 解决合并冲突 [6c9cc88]
- 🐛 解决合并冲突 [d94ae34]
- 🐛 修复列表页转跳地址不对的bug [9296553]
- 🐛 修复FILA上传页面中上传参数错误的问题 [7438903]

### Miscellaneous

-  Merge branch &#x27;stephen&#x27; into 1.7.0 [916321c]
- 🚧 订货会数据统计 [9cbcbce]
-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into stephen [cb98a02]


<a name="1.7.0-beta.15"></a>
## 1.7.0-beta.15 (2020-02-17)

### Added

- ✨ 修改缩放倍数并且提供更高的缩放尺寸 [595e602]


<a name="1.7.0-beta.14"></a>
## 1.7.0-beta.14 (2020-02-17)

### Fixed

- 🐛 修复详情页version传错workspaceId [b31ece1]


<a name="1.7.0-beta.13"></a>
## 1.7.0-beta.13 (2020-02-17)

### Added

- ✨ 评论调整，新增fila版样式，fila版评论只读，输入框变更 [a9a5f39]

### Changed

- 🎨 创建虚拟账号时添加companyName字段 [3b2c77f]

### Fixed

- 🐛 修复缺少图片或者图片报错的bug [9aa661a]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [417247f]


<a name="1.7.0-beta.12"></a>
## 1.7.0-beta.12 (2020-02-17)

### Added

- ✨ 提交详情页360图的样式 [5927413]
- ✨ 添加数据统计页面 [dd7e26a]
- ✨ 调整详情页的数据结构以及样式 [92eebed]

### Changed

- 💄 更新iconfont文件 [3f17f3d]

### Fixed

- 🐛 解决合并冲突 [2031fc4]
- 🐛 解决合并冲突 [2827d44]
- 🐛 修复Image fit参数对应oss缩略图生成方式不对的bug [6829ebe]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [8f88507]
- 🚧 更新订货会首页 [ad7b519]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [e51ea8e]


<a name="1.7.0-beta.11"></a>
## 1.7.0-beta.11 (2020-02-17)

### Added

- ✨ 对接FILA上传页面的接口 [ccd40f2]
- ✨ FILA上传模块的UI界面 [1be80f8]
- ✨ 添加FILA项目的上传页面的路由配置 [5f993ae]

### Changed

- 💄 详情页添加媒体查询，以适配笔记本 [d31821e]

### Fixed

- 🐛 env上缺少mode [154fc7f]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into stephen [150937d]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [7036d77]
-  Merge branch &#x27;stephen&#x27; into 1.7.0 [a1d705a]
-  隐藏协同空间设置的入口 [aeccfbc]


<a name="1.7.0-beta.10"></a>
## 1.7.0-beta.10 (2020-02-17)

### Changed

- 💄 UI调整，让页面更贴近1.7.0的UI稿 [e1d2205]
- 💄 设置页宽度设置最小值 [7836014]

### Fixed

- 🐛 修复panellist的文件夹和文件的间隔的产生条件 [5429f47]

### Miscellaneous

-  Merge branch &#x27;onion&#x27; into 1.7.0 [e2f80b9]
-  Merge branch &#x27;onion&#x27; of gitlab.4dshoetech.local:front-end/demon-home into onion [a6da858]


<a name="1.7.0-beta.9"></a>
## 1.7.0-beta.9 (2020-02-16)

### Added

- ✨ 添加意向单功能 [b3fc343]


<a name="1.7.0-beta.8"></a>
## 1.7.0-beta.8 (2020-02-16)

### Added

- ✨ 订购会详情页的绑定 [809e9ad]
- ✨ 增加一个生成多维数组的工具 [ee0a336]
- ✨ 评论组件优化布局，使其可以适配订购会需求 [ba7c938]
- ✨ el-dialog增加flex布局，应对不同的组件需要 [c8257ea]

### Changed

- 💄 修改baseImage的默认背景颜色 [85e0376]

### Fixed

- 🐛 将aspect-width改成jsx，并且让其可以注入class和style [22790c5]
- 🐛 axios增加对ur的判断，避免报错 [614af14]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [971c50f]
- 🏷️ 增加部分类型定义 [5ce1b2e]


<a name="1.7.0-beta.7"></a>
## 1.7.0-beta.7 (2020-02-16)

### Added

- ✨ 整合IM到订货会 [ee3640f]
- ✨ 对接设置接口 [078e703]

### Changed

- 💄 更新图标库 [131e36c]

### Fixed

- 🐛 修复订货会IM没有创建客服会话的bug [0d1ca7c]
- 🐛 解决订货会首页接口路径错误的bug [f0431ad]
- 🐛 当浏览器推送的设置变更时把新值放在localstorage中 [7dc3880]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.7.0 [e30208d]
-  Merge branch &#x27;dannny&#x27; into 1.7.0 [c69c229]
-  Merge branch &#x27;dannny&#x27; into 1.7.0 [0042bc4]
-  Merge branch &#x27;1.7.0&#x27; of 192.168.19.2:front-end/demon-home into 1.7.0 [4d016b4]


<a name="1.7.0-beta.5"></a>
## 1.7.0-beta.5 (2020-02-15)

### Added

- ✨ 订货会中未提交的意向订单页面，删除某个鞋款在意向订单列表的逻辑 [a04bfd9]
- ✨ 订货会中未提交的意向订单页面，添加提交时的确认弹框的逻辑 [6cda188]
- ✨ 实现订货会中未提交意向订单页面的鞋款数量增减时，合计数量同步变化功能 [f93dbed]
- ✨ 在订货会中意向订单模块，抽离单个鞋款的公共组件 [1c1eb03]
- ✨ 订货会中的意向订单-已提交页面的样式布局 [8c56d57]
- ✨ 创建订货会中意向单模块的页面；删除收藏模块的代码 [e9fde79]
- ✨ 添加订货会中意向单模块的路由 [3611c4e]
- ✨ 订货会中意向单模块未提交页面的界面布局 [f31bd91]
- ✨ 添加订货会的收藏的路由 [8a289cd]

### Changed

- 💄 添加鼠标hover时，在项目中的公共样式 [a173791]
- 💄 订货会项目全局添加背景为白色 [4a98a6a]
- 💄 订货会中意向订单-未提交页面的底部改为悬浮状态 [c8ced3d]
- 💄 添加浮动和flex布局相关的公共样式 [50d7be1]
- 🎨 修改订货会中头部导航的路由跳转 [f5444ed]
- 💄 调整订购会的部分样式 [cf6045e]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.7.0&#x27; into stephen [71416ad]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [cfc4805]
-  Merge remote-tracking branch &#x27;origin/dannny&#x27; into stephen [114ae86]


<a name="1.7.0-beta.4"></a>
## 1.7.0-beta.4 (2020-02-14)

### Changed

- 💄 抽离ProductList [3521f98]
- 💄 guest禁止添加的样式调整 [b856d57]

### Fixed

- 🐛 CLOSE bug#2655 创建虚拟账号时选择日期时最后一天不能选的问题 [f3a6a32]
- 🐛 CLOSE bug#2654 修复owner可以删除自己的bug [90c11d6]

### Miscellaneous

-  Merge branch &#x27;onion&#x27; into 1.7.0 [6180ebe]
-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [ad6fb98]


<a name="1.7.0-beta.3"></a>
## 1.7.0-beta.3 (2020-02-14)

### Added

- ✨ 订购会详情页 [a5faba2]
- ✨ 增加一个aspect-width组件 [783ff08]
- ➕ 增加vue-gesture-frame [5c83255]
- ✨ 增加row column两个组件 [15c3288]

### Changed

- 💄 优化scrollable的样式 [3c8f043]

### Fixed

- 🐛 添加禁用guest的添加、邀请、创建并关联协同空间的功能 [adb91bb]
- 🐛 CLOSE bug#2648 修复member不能删除guest成员的bug [f37714b]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.7.0 [1e5c7c9]
-  Merge branch &#x27;onion&#x27; into 1.7.0 [8db6cd9]
-  Merge branch &#x27;dannny&#x27; into 1.7.0 [b0f5e74]
- 🚧 订货会首页页面和路由 [f99a14c]


<a name="1.7.0-beta.2"></a>
## 1.7.0-beta.2 (2020-02-13)

### Changed

- 💄 限制添加协同空间成员时搜索面板的最大高度 [8583e12]
- 🎨 调整im-&gt;unread相关代码 [3b9dc90]

### Fixed

- 🐛 修复添加成员搜索添加后，列表刷新没刷到新成员的问题 [cc9ab11]

### Miscellaneous

-  Merge branch &#x27;1.7.0&#x27; of 192.168.19.2:front-end/demon-home into 1.7.0 [b335a3d]
-  Merge branch &#x27;1.7.0&#x27; of http://192.168.19.2/front-end/demon-home into 1.7.0 [f38337c]


<a name="1.7.0-beta.1"></a>
## 1.7.0-beta.1 (2020-02-13)

### Added

- ✨ 协同空间添加成员时增加搜索功能，调整原有组建的逻辑 [b003d68]
- ✨ 添加协同空间的设置页面和其入口，等待后端接口 [07a721f]
- ✨ 完成成员卡片的功能，调通修改权限、删除成员、添加成员、邀请成员和创建虚拟账号功能，增加成员身份标识（创建者和管理员） [e7c11d7]
- ✨ 增加点击成员列表中的成员，弹出成员卡片的功能，样式待调整 [e1ad015]
- ✨ 现在IM可以在路由参数上添加groupId打开对应的chat [b76b045]
- ✨ 重写hookErrorHandler,结合FlexibleError,并整合error.js [ad31f28]

### Changed

- 🎨 应对1.7.0需求，修改部分原有功能 [5e2f58c]
- ⚡ 优化block-error以及增加临时的flexible-error [6747bd4]

### Fixed

- 🐛 CLOSE bug#2566 [adf01d8]
- 🐛 CLOSE bug#2616 [b0214cc]
- 🐛 CLOSE bug#2281 [6d3025a]

### Miscellaneous

-  Merge branch &#x27;onion&#x27; into 1.7.0 [c6e3c0a]
- 📝 罗列中间逻辑比较复杂的模块，准备画数据流向图 [c535aa2]
- 📝 调整新人指引文档的内容，把代码相关的内容指向README.md，让指引文档的属性更偏向内容和逻辑，而非具体的代码实现 [6103564]
- 📝 以代码层面的入门文档为目标重写README.md [a3f65a8]
- 📝 调整文档样式 [676493f]
- 📝 调整目录样式 [e8cbb2b]
- 📝 继续完善新人指引文档 [78cc564]
- 📝 继续完善新人指引文档 [e4b011c]
- 📝 完善新手指引 [ff1897c]
- 📝 增加对新人用文档，写了第一部分的内容 [b6542ee]


<a name="1.7.0-beta.0"></a>
## 1.7.0-beta.0 (2020-02-07)

### Added

- ✨ 重写hookErrorHandler,结合FlexibleError,并整合error.js [ad31f28]

### Changed

- ⚡ 优化block-error以及增加临时的flexible-error [6747bd4]

### Fixed

- 🐛 CLOSE bug#2566 [adf01d8]
- 🐛 CLOSE bug#2616 [b0214cc]
- 🐛 CLOSE bug#2281 [6d3025a]


<a name="1.6.0"></a>
## 1.6.0 (2020-02-07)

### Added

- ✨ 更新d4增加钻石类型面料 [f2a6f5e]
- ✨ 增加oss是否加密的标识符 [4ec820b]

### Changed

- 🔧 更新rancher-pipline.yml [446bdbc]
- 🔧 去掉uat和prod对代理路径的无必要的配置 [75950d0]
- ⏪ 替换d4的操作修改 [3cd3baa]

### Removed

- 🔥 去除rancher master分支的deploy [8e67497]

### Fixed

- 🐛 修复保存图标缺失的bug [0d9a170]
- 🐛 修复上传没有传递 material type的bug [b85628d]
- 🐛 修复material info的一些报错以及放大可能失效的bug [4027f9b]
- 🐛 修复panel list里获取relateId接口传入0的bug [97905a7]
- 🐛 临时去掉debounce避免跨组件使用的时候导致某些值缺失的问题 [372abe0]
- 🐛 修复create board顶级目录不能拖动的bug [bb5d57e]
- 🐛 修复OSS_SIGN报错的bug [455915c]
- 🐛 修复上传时因传递id为空参数时，导致无法创建文件夹问题 [9aca1e7]
- 🐛 修复OSS_SIGN报错的bug [08d6591]
- 🐛 修复合并上传材质页面错误导致的问题 [75f13ad]

### Miscellaneous

- 🔀 合并分支 [7498939]
-  Merge branch &#x27;1.5.0&#x27; [f615f34]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.local:front-end/demon-home [6af4d01]
-  Merge branch &#x27;1.5.0&#x27; [89f1399]
-  Update .rancher-pipeline.yml file [27ddd95]
-  Update .rancher-pipeline.yml file [b7dc2ec]
-  Update .rancher-pipeline.yml file [3f1c72d]
-  Merge branch &#x27;1.5.0&#x27; [f6ac120]
-  Merge branch &#x27;1.5.0&#x27; [9677c3f]
- 🔀 合并分支 [4d2af2b]
- 🔀 合并分支 [dff9ab9]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [c785356]
-  Update .rancher-pipeline.yml file [789dade]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [480e2af]
- 🔀 合并分支 [9a6ba96]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [a1150d7]
-  Update .rancher-pipeline.yml file [1e59f5b]
-  Merge remote-tracking branch &#x27;origin/uat&#x27; [a8ce55b]
-  Merge branch &#x27;1.2.0&#x27; [d7b0242]
-  Merge branch &#x27;1.2.0&#x27; [7dfafd6]
-  Merge branch &#x27;1.2.0&#x27; [c8b1d05]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [4936e30]
-  Update .rancher-pipeline.yml file [9fce6c3]


<a name="1.6.1-rc.6"></a>
## 1.6.1-rc.6 (2020-02-19)

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Miscellaneous

- 🔀 合并分支 [161cc6b]
-  Merge branch &#x27;1.6.1&#x27; into uat [11c9a7b]
-  Merge branch &#x27;1.6.1&#x27; into uat [3870414]
-  Merge branch &#x27;1.6.1&#x27; into uat [99ade98]
-  Merge branch &#x27;1.6.1&#x27; into uat [d7ace2f]
-  Merge branch &#x27;1.6.1&#x27; into uat [3a6d179]
-  Merge branch &#x27;1.6.1&#x27; into uat [1f0f905]
-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.6.1-rc.5"></a>
## 1.6.1-rc.5 (2020-02-07)

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Miscellaneous

-  Merge branch &#x27;1.6.1&#x27; into uat [11c9a7b]
-  Merge branch &#x27;1.6.1&#x27; into uat [3870414]
-  Merge branch &#x27;1.6.1&#x27; into uat [99ade98]
-  Merge branch &#x27;1.6.1&#x27; into uat [d7ace2f]
-  Merge branch &#x27;1.6.1&#x27; into uat [3a6d179]
-  Merge branch &#x27;1.6.1&#x27; into uat [1f0f905]
-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.6.1-beta.26"></a>
## 1.6.1-beta.26 (2020-02-07)

### Fixed

- 🐛 避免缺少msrc导致的无法打开图片预览的报错 [f9d22d0]


<a name="1.6.1-rc.4"></a>
## 1.6.1-rc.4 (2020-02-07)

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Miscellaneous

-  Merge branch &#x27;1.6.1&#x27; into uat [3870414]
-  Merge branch &#x27;1.6.1&#x27; into uat [99ade98]
-  Merge branch &#x27;1.6.1&#x27; into uat [d7ace2f]
-  Merge branch &#x27;1.6.1&#x27; into uat [3a6d179]
-  Merge branch &#x27;1.6.1&#x27; into uat [1f0f905]
-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.6.1-beta.25"></a>
## 1.6.1-beta.25 (2020-02-07)

### Added

- ✨ 块状错误组件 [a98e7ec]

### Changed

- 🎨 优化列表预览的逻辑，避免url为空的错误 [7041163]
- 🔧 将lint-stage的命令改成yarn lint [c602d62]


<a name="1.6.1-rc.3"></a>
## 1.6.1-rc.3 (2020-02-06)

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Miscellaneous

-  Merge branch &#x27;1.6.1&#x27; into uat [d7ace2f]
-  Merge branch &#x27;1.6.1&#x27; into uat [3a6d179]
-  Merge branch &#x27;1.6.1&#x27; into uat [1f0f905]
-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.6.1-beta.24"></a>
## 1.6.1-beta.24 (2020-02-06)

### Changed

- 🎨 去除一些eslint-disable [ebf605e]
- 🔧 调整eslint规则 [eeec913]
- 🎨 去除一些eslint-disable [d12a785]

### Fixed

- 🐛 修复cli不识别部分指令的bug [9bd7047]
- 🐛 修复接口修改到鞋模式无法保存的问题 [d0e6ed6]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.6.1&#x27; into stephen [98b0584]


<a name="1.6.1-rc.2"></a>
## 1.6.1-rc.2 (2020-02-06)

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Miscellaneous

-  Merge branch &#x27;1.6.1&#x27; into uat [3a6d179]
-  Merge branch &#x27;1.6.1&#x27; into uat [1f0f905]
-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.6.1-beta.23"></a>
## 1.6.1-beta.23 (2020-02-04)

### Changed

- 💄 #CLOSE bug2565 修复放大缩小按钮样式不正确的bug [27a3486]
- 🎨 优化tsconfig.json [1dc6797]

### Fixed

- 🐛 CLOSE bug#2580 [9ec16ff]
- 🐛 CLOSE bug#2574 [8dec092]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.6.1 [97cfc0a]


<a name="1.6.1-beta.22"></a>
## 1.6.1-beta.22 (2020-01-21)

### Added

- ✨ 增加OmittedDisplayer的健壮性 [ac6c588]
- ✨ 框选组件增加包裹模式，完全框住才选中 [33b887e]

### Changed

- 🎨 优化协同空间侧边栏的逻辑 [ac76d6b]
- 💄 文件列表页增加渐变、协同空间侧边栏宽度改为在这个组件内定义 [9289677]

### Fixed

- 🐛 修复能创建协同空间时按钮的样式问题 [cb8a6af]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.6.1&#x27; into onion [d9e6755]
-  Merge branch &#x27;1.6.1&#x27; into onion [a705f70]


<a name="1.6.1-rc.1"></a>
## 1.6.1-rc.1 (2020-01-21)

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Miscellaneous

-  Merge branch &#x27;1.6.1&#x27; into uat [1f0f905]
-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.6.1-beta.21"></a>
## 1.6.1-beta.21 (2020-01-21)

### Changed

- 🎨 修改IM弹窗结构 [da6ab16]

### Fixed

- 🐛 修复im没等待开启就绑定事件的bug [1b72e32]
- 🐛 修复管道地址打开图片预览器挂掉的bug [a4e36b4]
- 🐛 让管道的图片可以通过thumb的处理 [a9d4fa0]
- 🐛 让用户登录就马上连上im [a5d4514]
- 🐛 鞋模型渲染页面对保存按钮添加相应的权限控制 [8934fdf]

### Miscellaneous

-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [541eff9]
-  Merge branch &#x27;1.6.1&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.6.1 [298b961]
-  Merge branch &#x27;stephen&#x27; into 1.6.1 [13311f7]


<a name="1.6.1-rc.0"></a>
## 1.6.1-rc.0 (2020-01-21)

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Miscellaneous

-  Merge branch &#x27;1.6.1&#x27; into uat [2e6d64c]
- 🔀 合并分支 [71e881f]
-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.6.1-beta.20"></a>
## 1.6.1-beta.20 (2020-01-21)

### Added

- 👷‍♂️ 增加bump支持version [c979913]


<a name="1.6.1-beta.19"></a>
## 1.6.1-beta.19 (2020-01-21)

### Fixed

- 🐛 修复im里边panel-item受store的影响的bug [e1648c5]
- 🐛 修复点击IM按钮tips弹窗多次触发的bug [0695f87]

### Miscellaneous

-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [11e682f]
-  Merge branch &#x27;1.6.1&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.6.1 [fbef0aa]
-  Merge branch &#x27;dannny&#x27; into 1.6.1 [9bb9e4c]
-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [e62f3e2]
- 🏷️ 将update-list转换为ts [b163d57]


<a name="1.6.1-beta.18"></a>
## 1.6.1-beta.18 (2020-01-20)

### Changed

- ♻️ 拆解并抽离public的东西，将其拆分到不同的地方 [88f6686]

### Fixed

- 🐛 【面料详情】查看面料详情的缩略图，到时点解无效的要显示不可点击状态 [9be2106]
- 🐛 【账号中心】子账号不应该拥有编辑主账号和其他子账号的权限 [2da920c]
- ✏️ 将部分模块转成ts [964fcc3]
- 🐛 修复虚拟帐号首次登录没有IM按钮没有提示的bug [086febd]
- 🐛 邀请成员到公司时标题显示为公司名 [6f98d59]

### Miscellaneous

- 🏷️ 将一些模块转换为ts [709af4f]
-  Merge branch &#x27;onion&#x27; into 1.6.1 [0ae1fe3]
-  Merge branch &#x27;dannny&#x27; into 1.6.1 [997b95d]
-  Merge branch &#x27;1.6.1&#x27; into onion [72f957c]


<a name="1.6.1-beta.17"></a>
## 1.6.1-beta.17 (2020-01-19)

### Fixed

- 🐛 【账号中心】公司列表里主账号对于自身账号是不应该拥有操作的功能的 [9351d4c]
- 🐛 【鞋款详情】非上传者在权限允许的情况仅能编辑名字、标签和notes这三项而已 [57ffd1c]
- 🐛 guest角色无法编辑鞋款/面料详情，把编辑键置灰了 [cc8197f]
- 🐛 修复个人中心修改当前登录用户信息中修改部门传递name参数的问题 [7df2c0e]
- 🐛 修复查看面料详情的缩略图，切换视图的功能键交互有问题 [ce271c2]
- 🐛 修改导出excel，输入Due Date 和 Notes，导出excel后没有显示数据的问题 [db6baf3]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.6.1&#x27; into stephen [d6030d1]


<a name="1.6.1-beta.16"></a>
## 1.6.1-beta.16 (2020-01-19)

### Changed

- 💄 修改协同空间顶部栏部分按钮没有权限操作时的样式 [a8629e7]

### Fixed

- 🐛 CLOSE bug#2550 让成员头像+名字中的名字的优先顺序，先显示账号名再显示邮箱 [9480a90]
- 🐛 修复转跳404的bug [e1caf5d]
- 🚑 隐藏新建虚拟账号里的发送图片选项 [003e573]

### Miscellaneous

-  Merge branch &#x27;onion&#x27; into 1.6.1 [ba30e09]
-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [b640ab8]


<a name="1.6.1-beta.15"></a>
## 1.6.1-beta.15 (2020-01-19)

### Fixed

- 🐛 CLOSE bug#2548 修复协同空间里回退时，顶部栏可能会消失的问题 [1326097]
- 🐛 CLOSE bug#2547 bug#2546 修复点击导航栏浏览记录时的一些bug [7f2c074]


<a name="1.6.1-beta.14"></a>
## 1.6.1-beta.14 (2020-01-19)

### Added

- ✨ 增加hover时可显示全名的，本身可设定最长宽度，超过显示省略的组件omittedDisplayer [6454961]
- ➕ 增加ts-toolbelt [e561f48]
- ✨ 增加im gif功能以及修复消息后缀名计算失效的bug [f03d4c4]
- ✨ qt增加个人中心页面 [2e4c639]
- ✨ 增加一个专门用于ts的keys方法 [28caca7]
- ✨ 增加一个判断管道的方法 [63049df]
- ✨ 增加协同空间成员的省略和展开功能 [4741237]
- ✨ 将im整合到新版workspace上 [1dd16f4]
- ✨ 将IM改为局部弹窗模式 [cf28f46]
- ✨ 重构协同空间列表，改为左边，新增协同空间设置栏和顶端的协同空间操作栏，侧边栏逻辑优化 [89269b5]
- ✨ sideSlider新增宽度选项 [2cb3692]
- ✨ 增加消息中心定时刷新功能 [97d33e5]
- ✨ 增加输入框粘贴文件的功能 [0169c08]
- ✨ 改造优化前端im消息时间戳的机制，避免重复 [4380150]
- ✨ im图片消息增加长宽字段，避免不必要的边界查询 [b6f2a4f]
- ✨ 增加im的emoji功能 [80ffc68]
- ✨ error 增加 instance 来提供handler的调用实例 [3461883]
- ✨ 增加一些元祖类型的泛型工具 [c4ffb40]
- ✨ im 增加图片预览功能 [0a5ea39]
- ✨ 用eval-source-map代替(none)作为devtool的选项 [1e3b52f]
- ✨ 优化im对catalogElem的处理 [63d7a87]
- ✨ 增加右下角IM图标新消息红点功能 [7667c89]
- ✨ 将im初始化提取到用户模块 [58f76e0]
- ✨ 新增IM新消息workspace红点功能 [9a601f4]
- ✨ 离线未读的功能 [8a7e060]
- ✨ 添加虚拟帐号首次进入时的IM功能提示 [b6772b4]
- ✨ hookErrorHandler的childrenErrors从data改为computed（需vue-reactive-children支持），并增加重试功能，默认不开启 [a0db96a]
- ✨ 增加一个vue-reactive-children插件 [daa2c10]
- ✨ 创建材质类型的局部过滤器 [8fd2ef7]
- ✨ 在材质详情中抽离出两个基本静态的button类型 [d8c39c3]
- ✨ 引入 material  storage 文件，处理材质数据组件共享问题 [58e219f]
- ✨ 给hookErrorHandler增加查找最小错误组件的功能，当出现多个错误时，只在一个大组件处理 [15dbad6]
- ✨ hookErrorHandler增加组件自定义错误图片和说明选项 [97d9570]

### Changed

- 💄 调整筛选栏样式，使其在较小分辨率下（笔记本的1368x768）正常显示，不超出屏幕 [00b07c8]
- 💄 CLOSE bug#2474 改进创建ws的组件的样式 [d383fb7]
- 💄 调整IM内的字体颜色 [e682143]
- 🔧 禅道地址改成ip [1a73dcd]
- 💄 调整im样式 [f2c2c32]
- 🎨 成员管理（增删改操作）ORM化 [4674a14]
- 🎨 将normalize的逻辑转移到DataCollector [d34efa3]
- 💄 修改问号图片的样式；创建IconQuestion组件 [4577614]
- 💄 修复协同空间列表无法滚动的问题 [e29839a]
- ♻️ 修改详情弹框中的workspace权限设置 [b9d84d8]
- ♻️ 修改workspace权限修改中需要调整的接口 [96df627]
- 🔧 修复devServer不改变Origin的bug [2903ee2]
- 🔧 更新npmrc和yarnrc让一般的package都走nexus [778543d]
- 💄 修复横向滚动时ws侧边栏在文件列表下方的问题 [4c87170]
- 💄 修复横向滚动时ws侧边栏在文件列表下方的问题 [efbda5b]
- 🔧 修改开发环境REMOTE_DOMAIN [c3fdc81]
- 🔧 增加dev环境的env [038fa92]
- 🔧 修改禅道地址 [cbee621]
- 🔧 修改nexus上npm的地址 [85461ed]
- 🔧 配置到内网的test [2afa9b2]
- 🔧 优化env配置，以及https的参数配置 [5c2f747]
- 🔧 优化env配置，以及https的参数配置 [889ee2f]
- 🎨 调整系统权限控制的相关页面，已调整完毕 [7419887]
- ♻️ 调整权限相关的部分接口参数 [d20bba7]
- 🎨 对接最新的帐户权限接口 [c55b7c0]
- 💄 调整协同空间成员展示的样式 [872fa6f]
- 🎨 去除WorkspaceORM文件的部分方法，改为使用mixin [a24e33a]
- 🔧 优化env的逻辑 [6d5ce0e]
- 🔧 将console的eslint规则统一改成warn [32bc997]
- 💄 点击创建ws后将焦点从创建按钮上移开 [7d2a5bb]
- 💄 给ws列表增加右边的边界 [b673558]
- 🎨 去除原右下角的操作记录按钮，移到ws顶部条的右边 [93eb86b]
- 🚚 将signComponent迁移出oss工具，并且改为ts，以便数据管道的改造 [2aaeb5a]
- 🎨 解决整合IM到workspace产生的问题 [83c0408]
- 🔧 打开gateway [3f4bd8c]
- 🎨 将未读数方法添加到User中 [3503a79]
- 🎨 删除不必要的代码 [02ec33f]
- 🔧 暂时去掉gateway [08d0edb]
- ⬆️ 更新yarn.lock [6b4959e]
- 💄 更新图标字体和样式文件 [97573ac]
- ⚡ 改进hookErrorHandler里查找最小错误等价数的算法 [c9bbdfe]
- 🔧 配合后端部署gateway，修改axios的basepath和vue-cli的proxy [28e43dc]
- ⬆️ 升级vue-cli以及相关依赖以及sass-loader [e1fce6e]
- 🎨 修复一个eslint的错误 [b4a9ad3]
- 🍱 临时把D2/D4放到本地 [87bf393]
- ⬆️ 升级typescript-eslint/parser [90f6434]
- 🎨 将一些模块转换为ts [407fe1d]
- 🎨 将一些代码装换成ts [32a7dd6]
- 🎨 优化panel三件套的结构以及逻辑 [849170a]
- ⚡ 把tree组件的keep-alive去掉，把其父组件的v-if改为v-show [679f9b4]
- 💄 使面料详情的大图可以切换 [939a666]
- 🎨 修改im功能调用方式，改为从user中获取session [698b2aa]
- 🔧 eslint 增加在js对ts文件的识别 [a12d05b]
- 🎨 由于ts不支持tc39 private fields，暂时用_代替# [2afa7d4]
- 🎨 对D4的引用的mixin 进行调整 [6bcb4b0]
- 🏗️ 增加typescript相关工具链，初始化项目的ts入口 [4ebe23e]
- 💄 对详情页面的UI微调 [f0b32d2]
- 🎨 对材质详情页面中的逻辑用组件形式进行分离，简化业务的耦合 [2ebaed7]
- 🎨 对材质详情抽离出几个局部的组件，分离页面的逻辑 [387b8b8]
- 🎨 扩展CustomCollapse组件的功能；调整该组件为functional [40341de]
- ♻️ 上传材质和材质详情的表单校验引用同一份校验文件 [6905acb]
- ♻️ 调整数组单位组件的捕获键盘的时间调整为500ms [d82443f]

### Breaking changes

- 💥 整理vue-loading的逻辑，避免跟element的 [6a4be29]

### Removed

- 🔇 去掉没必要的console [42adb3c]
- ➖ 去掉没必要的api [c9801ff]
- ➖ 去掉不必要的console [b0000a7]
- 🔥 去掉VersionList的type&#x3D;ts [055621f]
- 🔥 去掉vue-async [ff7d173]
- 🔥 删除原本的Cooperate及其依赖组件 [4fafb6f]

### Fixed

- 🐛 CLOSE bug#2103 bug#2444 修复原来部分地方因名字太长而省略，hover却没显示名字的问题 [8f5d821]
- 🐛 调整样式，当没权限时，也显示对应项目，但点击无效且具有无效的样式 [f4da010]
- 🐛 虚拟账号也显示新增ws的组件，只是不能点击 [e7e65bf]
- 🐛 CLOSE bug#2457 群设置的成员搜索中：搜索前的状态，在搜索后取消搜索行为，恢复状态，搜索时固定展开 [4da9062]
- 🐛 修复分享文件不会默认打开分享的聊天窗口的bug [a212731]
- 🐛 修复分享文件合并发送的问题，现在文件逐条发送 [90d13ce]
- 🐛 CLOSE bug#2457 bug#2458 在成员管理有增删改操作时，群设置的成员列表会跟着刷新 [970ee4a]
- 🐛 对改版的workspace页面修改部分权限错乱问题 [342b99d]
- 🐛 修复虚拟账号可以创建协同空间的bug [22897b4]
- 🐛 让侧边栏每项内容根据各自的权限判断是否可用 [ec8b758]
- 🐛 close bug#2439 修复登录后默认打开ws的问题 [aae4af7]
- 🐛 修复群设置的搜索失效问题 [273b6c6]
- 🐛 修改详情权限控制中不是创建者不能修改一般字段的问题^C [19f5d2f]
- 🐛 修复侧边栏上移的bug [319f934]
- 🐛 修复header改为fixed后造成的问题 [a1fd4eb]
- 🐛 修复缺少VUE_APP_API_DOMAIN导致ws连不上的问题 [f604802]
- 🐛 修复ws地址不对的bug [a90da4c]
- 🐛 修改系统配置中大小写不敏感导致的问题 [44f577e]
- 🐛 修复im没连接以及发不出消息的bug [75740f8]
- 🐛 close bug#2262 修复具有邮箱的虚拟账号，显示在成员管理列表时，用户名一栏显示错字段的问题 [f14d851]
- 🐛 解决合并代码后无法打开IM的bug [e25afc0]
- 🐛 解决合并冲突 [99c924f]
- 🐛 修复未读图标显示错误的bug [b30f395]
- 🚑 使用带有backend的url [1e37358]
- 🐛 修复调两次协同空间成员管理的接口的bug [022a3dc]
- 🐛 将im的协议改成相对当前协议，并且避免im初始化失败导致整体失败的bug [f9e5242]
- 🐛 改善协同空间排序的成功率，并修改刷新前进入不是列表第一个ws，但刷新后会跳到第一个ws的bug [b0d4f94]
- 🐛 修复imag-viewer对图片获取边界缓存时出错的bug进行修复 [2281686]
- 🚑 迁移部分d.ts到typings文件夹 [6f26dc0]
- 🐛 给修改协同空间名称操作增加权限 [b1e40af]
- 🐛 解决合并冲突 [62c2763]
- 🐛 修复收缩屏幕宽度时ws会坍塌的bug [937c855]
- 🐛 修复改为使用ORM后协同空间列表的拖动排序无效的问题 [d1b4845]
- 🐛 修复合并的时候冲突导致的文件删除又回来的bug [ae726e7]
- 🐛 axios增加不需token的接口的判断方法 [0b26633]
- 🐛 修复 bug@2349 [a0b9769]
- 🐛 修复在firefox浏览器下IM输入框显示不正确的bug [c03b3e2]
- 🐛 修复图片precache出现计算错误的bug [9a8a4f5]
- 🐛 转换一些模块到ts，并且修复一些bug [cd1af96]
- 🐛 避免im发送成功后闪烁的bug [fbb02cc]
- 🚑 修改材质和鞋模型中的文本错误问题 [78526f1]
- 🐛 修复file-like的缺失 [861a6ba]
- 🐛 修复dialogify弹窗关闭按钮被内容挡住的bug [f445526]
- 🐛 修复评论At 的头像没有签名的bug [74d371f]
- 🐛 修复面料详情框看不了图的bug [fd39733]
- 🐛 修复上传文件组件提示格式错误仍旧上传的bug，IM消息新增gif文件类型 [7c739de]
- 🐛 避免没有绑定preview的时候出现预览的图标 [e374651]
- 🐛 im发送前加入时间戳，避免视图渲染滚动出错 [2f113d8]
- 🐛 修复im缺少签名的bug [5f449c5]
- 🐛 修复缩略图缺少签名导致缩放ImageViewer的时候动画出现烂图的bug [305753a]
- 🐛 修复退出后im没有中断以及重新登录后没有更新用户的问题 [c03bdc5]
- 🐛 修复D4界面滚动时背景和D4渲染框同时滚动的问题 [852506c]
- 🐛 修复部分材质详情修改时，没有发送请求的问题 [f0f1990]
- 🐛 生成并绑定虚拟账号的弹窗的文案修正（原来打错字了） [96ce513]
- 🐛 修复框选不了的bug [c395584]
- 🐛 修复列表面料双击报错的bug [a736266]
- 🐛 修复IM图标红点显示不正确的bug [7e1cbb4]
- 🐛 修复工具函数错误 [2adf773]
- 🐛 修复oss getImageInfo的部分类型错误，并且去掉不必要console [9ff86f8]
- 🐛 修复im接收信息缺少预加载导致的滚动距离不正确的bug [4fe8bac]
- 🐛 开放IM相关功能 [29dc214]
- 🐛 调整hookErrorHandler的合并策略 [28d36d3]
- 🚑 将router-view-key改为LayoutBase [8c0c434]
- 🐛 列表页侧边栏翻译变更 [6a257f3]
- 🐛 解决hookErrorHandler报错问题 [7db7545]

### Miscellaneous

-  Merge branch &#x27;1.6.0&#x27; into 1.6.1 [b804b11]
-  Merge branch &#x27;1.5.0&#x27; into 1.6.0 [105c806]
-  Merge branch &#x27;1.6.1&#x27; into onion [1a32ae0]
-  Merge branch &#x27;onion&#x27; into 1.6.1 [101636f]
-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [b0157f9]
-  Merge branch &#x27;1.6.0&#x27; into 1.6.1 [63b658f]
-  Merge branch &#x27;1.6.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.0 [612c0dd]
-  Merge branch &#x27;1.5.0&#x27; into 1.6.0 [8482265]
-  Merge branch &#x27;dannny&#x27; into 1.6.1 [2ce8629]
-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [7a4f385]
-  Merge branch &#x27;onion&#x27; into 1.6.1 [6077c75]
-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [2b2e238]
- 🏷️ 将configable转换为ts [f89266d]
-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [b39b2d4]
-  Merge branch &#x27;onion&#x27; into 1.6.1 [2d2d1a4]
-  Merge remote-tracking branch &#x27;origin/1.6.1&#x27; into stephen [3adf8ad]
-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [649f1b2]
-  Merge remote-tracking branch &#x27;origin/1.6.0&#x27; into 1.6.1 [933877c]
-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [478b9a1]
-  Merge branch &#x27;1.6.0&#x27; into 1.6.1 [ce5bc39]
-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [795f3ea]
-  Update .rancher-pipeline.yml file [db1c67b]
-  Update .rancher-pipeline.yml file [5cfc67d]
-  Update deployment.yaml [becb122]
-  Update deployment.yaml [7bc93b7]
-  Merge remote-tracking branch &#x27;origin/1.6.1&#x27; into stephen [35aadb2]
-  Merge branch &#x27;1.5.0&#x27; into 1.6.1 [ecc7cd1]
-  Merge branch &#x27;1.5.0&#x27; into 1.6.0 [742fcfa]
-  Merge remote-tracking branch &#x27;origin/1.6.1&#x27; into stephen [3939839]
-  Merge branch &#x27;1.6.1&#x27; into onion [562e26a]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into 1.6.1 [54c22e2]
-  Merge branch &#x27;1.6.1&#x27; into onion [f4728a9]
-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [69fef1e]
-  Merge remote-tracking branch &#x27;origin/1.6.1&#x27; into stephen [a0c5d57]
-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [0b969f2]
-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [882d525]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into 1.6.1 [92590b2]
-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [5e5f247]
-  Merge remote-tracking branch &#x27;origin/1.6.1&#x27; into stephen [a4ac607]
-  Merge branch &#x27;onion&#x27; into 1.6.1 [07fe4cc]
-  Merge remote-tracking branch &#x27;origin/1.6.1&#x27; into stephen [a1c798c]
-  Merge branch &#x27;1.6.1&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.6.1 [60fd47d]
-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [9bc662a]
-  Merge branch &#x27;onion&#x27; into 1.6.1 [12a19f7]
- 🏷️ 将open-window转成ts [0764c38]
-  Merge branch &#x27;1.6.1&#x27; into dannny [10c7fe5]
-  Merge remote-tracking branch &#x27;origin/1.6.1&#x27; into onion [c4050bf]
- 💡 给协同空间排序添加部分注释 [fcf220e]
-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [d2ff5da]
-  Merge remote-tracking branch &#x27;origin/1.6.1&#x27; into onion [69d1f98]
- 🔀 解决合并冲突 [6baf5e5]
-  Merge branch &#x27;1.6.0&#x27; into 1.6.1 [d6dee21]
- 🔀 合并分支 [1e9fc83]
- 🔀 合并分支 [a2d7c8d]
- 🔀 合并分支 [8439ad3]
-  Merge branch &#x27;1.6.0&#x27; into 1.6.1 [861a55a]
-  Merge branch &#x27;1.6.0&#x27; into 1.6.1 [bde4eaf]
-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [501cbaf]
-  Merge branch &#x27;1.6.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.0 [54f799e]
- 🏷️ 增加lodash的类型 [b6d2f08]
-  Merge branch &#x27;1.6.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.6.0 [d825960]
-  Update .rancher-pipeline.yml file [4cd37cc]
-  Update .rancher-pipeline.yml file [53bdba4]
-  Merge branch &#x27;1.6.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.0 [87ded47]
-  Merge branch &#x27;hotfix-1.6.0&#x27; into 1.6.0 [4a1a11e]
-  Merge branch &#x27;1.6.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.6.0 [48f5daa]
-  Merge branch &#x27;1.6.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.6.0 [c2a8de2]
-  Merge branch &#x27;stephen&#x27; into 1.6.0 [8688f8d]
-  Merge remote-tracking branch &#x27;origin/1.6.0&#x27; into stephen [f82d1f1]
-  Merge remote-tracking branch &#x27;origin/1.6.0&#x27; into stephen [e66e108]
-  Merge branch &#x27;1.5.0&#x27; into 1.6.0 [b25a18a]
-  Merge branch &#x27;1.6.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.6.0 [cc69501]
-  Merge branch &#x27;dannny&#x27; into 1.6.0 [2bfd977]
-  Merge branch &#x27;1.6.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.6.0 [0547137]
-  Merge branch &#x27;dannny&#x27; into 1.6.0 [250006a]
-  Merge branch &#x27;1.5.0&#x27; into 1.6.0 [79f61ea]
-  Merge branch &#x27;1.5.0&#x27; into 1.6.0 [4373397]
-  Merge branch &#x27;1.6.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.6.0 [2c16efa]
- 🏷️ 将一些工具转换为ts [b52d264]
-  Merge branch &#x27;dannny&#x27; into 1.6.0 [918a28e]
- 🏷️ 将部分工具转换为ts [cf95a26]
- 🏷️ 将filters转换为ts [3dc8fdc]
-  Merge branch &#x27;1.5.0&#x27; into 1.6.0 [2f71ac0]
-  Merge branch &#x27;1.6.0&#x27; into dannny [9daa1c0]
-  Merge remote-tracking branch &#x27;origin/1.6.0&#x27; into onion [9d90c27]
-  Merge remote-tracking branch &#x27;origin/1.6.0&#x27; into stephen [580a05c]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into 1.6.0 [1e39610]
-  Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into 1.6.0 [ebb1a57]
- 📝 变更部分翻译文本 [a788557]


<a name="1.6.1-beta.13"></a>
## 1.6.1-beta.13 (2020-01-19)

### Changed

- ⬆️ 更新D4依赖，修复由于BitmapImage不兼容导致的浏览器加载失败 [2856dfb]
- 💄 调整筛选栏样式，使其在较小分辨率下（笔记本的1368x768）正常显示，不超出屏幕 [00b07c8]

### Miscellaneous

-  Merge branch &#x27;1.6.0&#x27; into 1.6.1 [b804b11]
-  Merge branch &#x27;1.5.0&#x27; into 1.6.0 [105c806]
-  Merge branch &#x27;1.6.1&#x27; into onion [1a32ae0]


<a name="1.6.1-beta.12"></a>
## 1.6.1-beta.12 (2020-01-17)

### Changed

- 💄 CLOSE bug#2474 改进创建ws的组件的样式 [d383fb7]

### Fixed

- 🐛 调整样式，当没权限时，也显示对应项目，但点击无效且具有无效的样式 [f4da010]
- 🐛 虚拟账号也显示新增ws的组件，只是不能点击 [e7e65bf]
- 🐛 CLOSE bug#2457 群设置的成员搜索中：搜索前的状态，在搜索后取消搜索行为，恢复状态，搜索时固定展开 [4da9062]

### Miscellaneous

-  Merge branch &#x27;onion&#x27; into 1.6.1 [101636f]


<a name="1.6.1-beta.11"></a>
## 1.6.1-beta.11 (2020-01-17)

### Changed

- 💄 调整IM内的字体颜色 [e682143]
- 🔧 禅道地址改成ip [1a73dcd]
- 💄 调整im样式 [f2c2c32]

### Fixed

- 🐛 修复由于D4改动，api不兼容导致的水印异常的bug [5852af2]
- 🐛 修复分享文件不会默认打开分享的聊天窗口的bug [a212731]
- 🐛 修复分享文件合并发送的问题，现在文件逐条发送 [90d13ce]

### Miscellaneous

-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [b0157f9]
-  Merge branch &#x27;1.6.0&#x27; into 1.6.1 [63b658f]
-  Merge branch &#x27;1.6.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.0 [612c0dd]
-  Merge branch &#x27;1.5.0&#x27; into 1.6.0 [8482265]
-  Merge branch &#x27;dannny&#x27; into 1.6.1 [2ce8629]
-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [7a4f385]


<a name="1.6.1-beta.10"></a>
## 1.6.1-beta.10 (2020-01-17)

### Added

- ➕ 增加ts-toolbelt [e561f48]
- ✨ 增加im gif功能以及修复消息后缀名计算失效的bug [f03d4c4]

### Changed

- 🎨 成员管理（增删改操作）ORM化 [4674a14]

### Fixed

- 🐛 CLOSE bug#2457 bug#2458 在成员管理有增删改操作时，群设置的成员列表会跟着刷新 [970ee4a]
- 🐛 修复虚拟账号可以创建协同空间的bug [22897b4]
- 🐛 让侧边栏每项内容根据各自的权限判断是否可用 [ec8b758]

### Miscellaneous

-  Merge branch &#x27;onion&#x27; into 1.6.1 [6077c75]
-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [2b2e238]
- 🏷️ 将configable转换为ts [f89266d]


<a name="1.6.1-beta.9"></a>
## 1.6.1-beta.9 (2020-01-17)

### Added

- ✨ qt增加个人中心页面 [2e4c639]

### Changed

- 🎨 将normalize的逻辑转移到DataCollector [d34efa3]

### Fixed

- 🐛 对改版的workspace页面修改部分权限错乱问题 [342b99d]

### Miscellaneous

-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [b39b2d4]


<a name="1.6.1-beta.8"></a>
## 1.6.1-beta.8 (2020-01-16)

### Changed

- 💄 修改问号图片的样式；创建IconQuestion组件 [4577614]

### Fixed

- 🐛 close bug#2439 修复登录后默认打开ws的问题 [aae4af7]
- 🐛 修复群设置的搜索失效问题 [273b6c6]

### Miscellaneous

-  Merge branch &#x27;onion&#x27; into 1.6.1 [2d2d1a4]
-  Merge remote-tracking branch &#x27;origin/1.6.1&#x27; into stephen [3adf8ad]
-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [649f1b2]
-  Merge remote-tracking branch &#x27;origin/1.6.0&#x27; into 1.6.1 [933877c]
-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [478b9a1]
-  Merge branch &#x27;1.6.0&#x27; into 1.6.1 [ce5bc39]
-  Update .rancher-pipeline.yml file [5cfc67d]
-  Update deployment.yaml [becb122]
-  Merge branch &#x27;1.5.0&#x27; into 1.6.0 [742fcfa]


<a name="1.6.1-beta.7"></a>
## 1.6.1-beta.7 (2020-01-16)

### Added

- ✨ 增加一个专门用于ts的keys方法 [28caca7]
- ✨ 增加一个判断管道的方法 [63049df]
- ✨ 增加协同空间成员的省略和展开功能 [4741237]
- ✨ 将im整合到新版workspace上 [1dd16f4]
- ✨ 将IM改为局部弹窗模式 [cf28f46]
- ✨ 重构协同空间列表，改为左边，新增协同空间设置栏和顶端的协同空间操作栏，侧边栏逻辑优化 [89269b5]
- ✨ sideSlider新增宽度选项 [2cb3692]
- ✨ 增加消息中心定时刷新功能 [97d33e5]
- ✨ 增加输入框粘贴文件的功能 [0169c08]
- ✨ 改造优化前端im消息时间戳的机制，避免重复 [4380150]
- ✨ im图片消息增加长宽字段，避免不必要的边界查询 [b6f2a4f]
- ✨ 增加im的emoji功能 [80ffc68]
- ✨ error 增加 instance 来提供handler的调用实例 [3461883]
- ✨ 增加一些元祖类型的泛型工具 [c4ffb40]
- ✨ im 增加图片预览功能 [0a5ea39]
- ✨ 用eval-source-map代替(none)作为devtool的选项 [1e3b52f]
- ✨ 优化im对catalogElem的处理 [63d7a87]
- ✨ 增加右下角IM图标新消息红点功能 [7667c89]
- ✨ 将im初始化提取到用户模块 [58f76e0]
- ✨ 新增IM新消息workspace红点功能 [9a601f4]
- ✨ 离线未读的功能 [8a7e060]
- ✨ 添加虚拟帐号首次进入时的IM功能提示 [b6772b4]
- ✨ hookErrorHandler的childrenErrors从data改为computed（需vue-reactive-children支持），并增加重试功能，默认不开启 [a0db96a]
- ✨ 增加一个vue-reactive-children插件 [daa2c10]
- ✨ 创建材质类型的局部过滤器 [8fd2ef7]
- ✨ 在材质详情中抽离出两个基本静态的button类型 [d8c39c3]
- ✨ 引入 material  storage 文件，处理材质数据组件共享问题 [58e219f]
- ✨ 给hookErrorHandler增加查找最小错误组件的功能，当出现多个错误时，只在一个大组件处理 [15dbad6]
- ✨ hookErrorHandler增加组件自定义错误图片和说明选项 [97d9570]

### Changed

- 💄 修复协同空间列表无法滚动的问题 [e29839a]
- ♻️ 修改详情弹框中的workspace权限设置 [b9d84d8]
- ♻️ 修改workspace权限修改中需要调整的接口 [96df627]
- 🔧 修复devServer不改变Origin的bug [2903ee2]
- 🔧 更新npmrc和yarnrc让一般的package都走nexus [778543d]
- 💄 修复横向滚动时ws侧边栏在文件列表下方的问题 [4c87170]
- 💄 修复横向滚动时ws侧边栏在文件列表下方的问题 [efbda5b]
- 🔧 修改开发环境REMOTE_DOMAIN [c3fdc81]
- 🔧 增加dev环境的env [038fa92]
- 🔧 修改禅道地址 [cbee621]
- 🔧 修改nexus上npm的地址 [85461ed]
- 🔧 配置到内网的test [2afa9b2]
- 🔧 优化env配置，以及https的参数配置 [5c2f747]
- 🔧 优化env配置，以及https的参数配置 [889ee2f]
- 🎨 调整系统权限控制的相关页面，已调整完毕 [7419887]
- ♻️ 调整权限相关的部分接口参数 [d20bba7]
- 🎨 对接最新的帐户权限接口 [c55b7c0]
- 💄 调整协同空间成员展示的样式 [872fa6f]
- 🎨 去除WorkspaceORM文件的部分方法，改为使用mixin [a24e33a]
- 🔧 优化env的逻辑 [6d5ce0e]
- 🔧 将console的eslint规则统一改成warn [32bc997]
- 💄 点击创建ws后将焦点从创建按钮上移开 [7d2a5bb]
- 💄 给ws列表增加右边的边界 [b673558]
- 🎨 去除原右下角的操作记录按钮，移到ws顶部条的右边 [93eb86b]
- 🚚 将signComponent迁移出oss工具，并且改为ts，以便数据管道的改造 [2aaeb5a]
- 🎨 解决整合IM到workspace产生的问题 [83c0408]
- 🔧 打开gateway [3f4bd8c]
- 🎨 将未读数方法添加到User中 [3503a79]
- 🎨 删除不必要的代码 [02ec33f]
- 🔧 暂时去掉gateway [08d0edb]
- ⬆️ 更新yarn.lock [6b4959e]
- 💄 更新图标字体和样式文件 [97573ac]
- ⚡ 改进hookErrorHandler里查找最小错误等价数的算法 [c9bbdfe]
- 🔧 配合后端部署gateway，修改axios的basepath和vue-cli的proxy [28e43dc]
- ⬆️ 升级vue-cli以及相关依赖以及sass-loader [e1fce6e]
- 🎨 修复一个eslint的错误 [b4a9ad3]
- 🍱 临时把D2/D4放到本地 [87bf393]
- ⬆️ 升级typescript-eslint/parser [90f6434]
- 🎨 将一些模块转换为ts [407fe1d]
- 🎨 将一些代码装换成ts [32a7dd6]
- 🎨 优化panel三件套的结构以及逻辑 [849170a]
- ⚡ 把tree组件的keep-alive去掉，把其父组件的v-if改为v-show [679f9b4]
- 💄 使面料详情的大图可以切换 [939a666]
- 🎨 修改im功能调用方式，改为从user中获取session [698b2aa]
- 🔧 eslint 增加在js对ts文件的识别 [a12d05b]
- 🎨 由于ts不支持tc39 private fields，暂时用_代替# [2afa7d4]
- 🎨 对D4的引用的mixin 进行调整 [6bcb4b0]
- 🏗️ 增加typescript相关工具链，初始化项目的ts入口 [4ebe23e]
- 💄 对详情页面的UI微调 [f0b32d2]
- 🎨 对材质详情页面中的逻辑用组件形式进行分离，简化业务的耦合 [2ebaed7]
- 🎨 对材质详情抽离出几个局部的组件，分离页面的逻辑 [387b8b8]
- 🎨 扩展CustomCollapse组件的功能；调整该组件为functional [40341de]
- ♻️ 上传材质和材质详情的表单校验引用同一份校验文件 [6905acb]
- ♻️ 调整数组单位组件的捕获键盘的时间调整为500ms [d82443f]

### Breaking changes

- 💥 整理vue-loading的逻辑，避免跟element的 [6a4be29]

### Removed

- 🔇 去掉没必要的console [42adb3c]
- ➖ 去掉没必要的api [c9801ff]
- ➖ 去掉不必要的console [b0000a7]
- 🔥 去掉VersionList的type&#x3D;ts [055621f]
- 🔥 去掉vue-async [ff7d173]
- 🔥 删除原本的Cooperate及其依赖组件 [4fafb6f]

### Fixed

- 🐛 修改详情权限控制中不是创建者不能修改一般字段的问题^C [19f5d2f]
- 🐛 修复侧边栏上移的bug [319f934]
- 🐛 修复header改为fixed后造成的问题 [a1fd4eb]
- 🐛 修复缺少VUE_APP_API_DOMAIN导致ws连不上的问题 [f604802]
- 🐛 修复ws地址不对的bug [a90da4c]
- 🐛 修改系统配置中大小写不敏感导致的问题 [44f577e]
- 🐛 修复im没连接以及发不出消息的bug [75740f8]
- 🐛 close bug#2262 修复具有邮箱的虚拟账号，显示在成员管理列表时，用户名一栏显示错字段的问题 [f14d851]
- 🐛 解决合并代码后无法打开IM的bug [e25afc0]
- 🐛 解决合并冲突 [99c924f]
- 🐛 修复未读图标显示错误的bug [b30f395]
- 🚑 使用带有backend的url [1e37358]
- 🐛 修复调两次协同空间成员管理的接口的bug [022a3dc]
- 🐛 将im的协议改成相对当前协议，并且避免im初始化失败导致整体失败的bug [f9e5242]
- 🐛 改善协同空间排序的成功率，并修改刷新前进入不是列表第一个ws，但刷新后会跳到第一个ws的bug [b0d4f94]
- 🐛 修复imag-viewer对图片获取边界缓存时出错的bug进行修复 [2281686]
- 🚑 迁移部分d.ts到typings文件夹 [6f26dc0]
- 🐛 给修改协同空间名称操作增加权限 [b1e40af]
- 🐛 解决合并冲突 [62c2763]
- 🐛 修复收缩屏幕宽度时ws会坍塌的bug [937c855]
- 🐛 修复改为使用ORM后协同空间列表的拖动排序无效的问题 [d1b4845]
- 🐛 修复合并的时候冲突导致的文件删除又回来的bug [ae726e7]
- 🐛 axios增加不需token的接口的判断方法 [0b26633]
- 🐛 修复 bug@2349 [a0b9769]
- 🐛 修复在firefox浏览器下IM输入框显示不正确的bug [c03b3e2]
- 🐛 修复图片precache出现计算错误的bug [9a8a4f5]
- 🐛 转换一些模块到ts，并且修复一些bug [cd1af96]
- 🐛 避免im发送成功后闪烁的bug [fbb02cc]
- 🚑 修改材质和鞋模型中的文本错误问题 [78526f1]
- 🐛 修复file-like的缺失 [861a6ba]
- 🐛 修复dialogify弹窗关闭按钮被内容挡住的bug [f445526]
- 🐛 修复评论At 的头像没有签名的bug [74d371f]
- 🐛 修复面料详情框看不了图的bug [fd39733]
- 🐛 修复上传文件组件提示格式错误仍旧上传的bug，IM消息新增gif文件类型 [7c739de]
- 🐛 避免没有绑定preview的时候出现预览的图标 [e374651]
- 🐛 im发送前加入时间戳，避免视图渲染滚动出错 [2f113d8]
- 🐛 修复im缺少签名的bug [5f449c5]
- 🐛 修复缩略图缺少签名导致缩放ImageViewer的时候动画出现烂图的bug [305753a]
- 🐛 修复退出后im没有中断以及重新登录后没有更新用户的问题 [c03bdc5]
- 🐛 修复D4界面滚动时背景和D4渲染框同时滚动的问题 [852506c]
- 🐛 修复部分材质详情修改时，没有发送请求的问题 [f0f1990]
- 🐛 生成并绑定虚拟账号的弹窗的文案修正（原来打错字了） [96ce513]
- 🐛 修复框选不了的bug [c395584]
- 🐛 修复列表面料双击报错的bug [a736266]
- 🐛 修复IM图标红点显示不正确的bug [7e1cbb4]
- 🐛 修复工具函数错误 [2adf773]
- 🐛 修复oss getImageInfo的部分类型错误，并且去掉不必要console [9ff86f8]
- 🐛 修复im接收信息缺少预加载导致的滚动距离不正确的bug [4fe8bac]
- 🐛 开放IM相关功能 [29dc214]
- 🐛 调整hookErrorHandler的合并策略 [28d36d3]
- 🚑 将router-view-key改为LayoutBase [8c0c434]
- 🐛 列表页侧边栏翻译变更 [6a257f3]
- 🐛 解决hookErrorHandler报错问题 [7db7545]

### Miscellaneous

-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [795f3ea]
-  Update .rancher-pipeline.yml file [db1c67b]
-  Update deployment.yaml [7bc93b7]
-  Merge remote-tracking branch &#x27;origin/1.6.1&#x27; into stephen [35aadb2]
-  Merge branch &#x27;1.5.0&#x27; into 1.6.1 [ecc7cd1]
-  Merge remote-tracking branch &#x27;origin/1.6.1&#x27; into stephen [3939839]
-  Merge branch &#x27;1.6.1&#x27; into onion [562e26a]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into 1.6.1 [54c22e2]
-  Merge branch &#x27;1.6.1&#x27; into onion [f4728a9]
-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [69fef1e]
-  Merge remote-tracking branch &#x27;origin/1.6.1&#x27; into stephen [a0c5d57]
-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [0b969f2]
-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [882d525]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into 1.6.1 [92590b2]
-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [5e5f247]
-  Merge remote-tracking branch &#x27;origin/1.6.1&#x27; into stephen [a4ac607]
-  Merge branch &#x27;onion&#x27; into 1.6.1 [07fe4cc]
-  Merge remote-tracking branch &#x27;origin/1.6.1&#x27; into stephen [a1c798c]
-  Merge branch &#x27;1.6.1&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.6.1 [60fd47d]
-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [9bc662a]
-  Merge branch &#x27;onion&#x27; into 1.6.1 [12a19f7]
- 🏷️ 将open-window转成ts [0764c38]
-  Merge branch &#x27;1.6.1&#x27; into dannny [10c7fe5]
-  Merge remote-tracking branch &#x27;origin/1.6.1&#x27; into onion [c4050bf]
- 💡 给协同空间排序添加部分注释 [fcf220e]
-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [d2ff5da]
-  Merge remote-tracking branch &#x27;origin/1.6.1&#x27; into onion [69d1f98]
- 🔀 解决合并冲突 [6baf5e5]
-  Merge branch &#x27;1.6.0&#x27; into 1.6.1 [d6dee21]
- 🔀 合并分支 [1e9fc83]
- 🔀 合并分支 [a2d7c8d]
- 🔀 合并分支 [8439ad3]
-  Merge branch &#x27;1.6.0&#x27; into 1.6.1 [861a55a]
-  Merge branch &#x27;1.6.0&#x27; into 1.6.1 [bde4eaf]
-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [501cbaf]
-  Merge branch &#x27;1.6.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.0 [54f799e]
- 🏷️ 增加lodash的类型 [b6d2f08]
-  Merge branch &#x27;1.6.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.6.0 [d825960]
-  Update .rancher-pipeline.yml file [4cd37cc]
-  Update .rancher-pipeline.yml file [53bdba4]
-  Merge branch &#x27;1.6.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.0 [87ded47]
-  Merge branch &#x27;hotfix-1.6.0&#x27; into 1.6.0 [4a1a11e]
-  Merge branch &#x27;1.6.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.6.0 [48f5daa]
-  Merge branch &#x27;1.6.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.6.0 [c2a8de2]
-  Merge branch &#x27;stephen&#x27; into 1.6.0 [8688f8d]
-  Merge remote-tracking branch &#x27;origin/1.6.0&#x27; into stephen [f82d1f1]
-  Merge remote-tracking branch &#x27;origin/1.6.0&#x27; into stephen [e66e108]
-  Merge branch &#x27;1.5.0&#x27; into 1.6.0 [b25a18a]
-  Merge branch &#x27;1.6.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.6.0 [cc69501]
-  Merge branch &#x27;dannny&#x27; into 1.6.0 [2bfd977]
-  Merge branch &#x27;1.6.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.6.0 [0547137]
-  Merge branch &#x27;dannny&#x27; into 1.6.0 [250006a]
-  Merge branch &#x27;1.5.0&#x27; into 1.6.0 [79f61ea]
-  Merge branch &#x27;1.5.0&#x27; into 1.6.0 [4373397]
-  Merge branch &#x27;1.6.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.6.0 [2c16efa]
- 🏷️ 将一些工具转换为ts [b52d264]
-  Merge branch &#x27;dannny&#x27; into 1.6.0 [918a28e]
- 🏷️ 将部分工具转换为ts [cf95a26]
- 🏷️ 将filters转换为ts [3dc8fdc]
-  Merge branch &#x27;1.5.0&#x27; into 1.6.0 [2f71ac0]
-  Merge branch &#x27;1.6.0&#x27; into dannny [9daa1c0]
-  Merge remote-tracking branch &#x27;origin/1.6.0&#x27; into onion [9d90c27]
-  Merge remote-tracking branch &#x27;origin/1.6.0&#x27; into stephen [580a05c]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into 1.6.0 [1e39610]
-  Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into 1.6.0 [ebb1a57]
- 📝 变更部分翻译文本 [a788557]


<a name="1.6.1-beta.6"></a>
## 1.6.1-beta.6 (2020-01-16)

### Changed

- 🔧 修复devServer不改变Origin的bug [2903ee2]

### Fixed

- 🐛 修复侧边栏上移的bug [319f934]
- 🐛 修复header改为fixed后造成的问题 [a1fd4eb]

### Miscellaneous

-  Merge branch &#x27;1.6.1&#x27; into onion [562e26a]


<a name="1.6.1-beta.5"></a>
## 1.6.1-beta.5 (2020-01-16)

### Changed

- 🔧 更新npmrc和yarnrc让一般的package都走nexus [778543d]

### Fixed

- 🐛 修复缺少VUE_APP_API_DOMAIN导致ws连不上的问题 [f604802]


<a name="1.6.1-beta.4"></a>
## 1.6.1-beta.4 (2020-01-16)

### Changed

- 💄 修复横向滚动时ws侧边栏在文件列表下方的问题 [4c87170]
- 💄 修复横向滚动时ws侧边栏在文件列表下方的问题 [efbda5b]
- 🔧 修改开发环境REMOTE_DOMAIN [c3fdc81]
- 🔧 增加dev环境的env [038fa92]
- 🔧 修改禅道地址 [cbee621]
- 🔧 修改nexus上npm的地址 [85461ed]
- 🔧 配置到内网的test [2afa9b2]
- 🔧 优化env配置，以及https的参数配置 [5c2f747]
- 🔧 优化env配置，以及https的参数配置 [889ee2f]
- 🎨 调整系统权限控制的相关页面，已调整完毕 [7419887]
- ♻️ 调整权限相关的部分接口参数 [d20bba7]
- 🎨 对接最新的帐户权限接口 [c55b7c0]
- 🎨 解决整合IM到workspace产生的问题 [83c0408]
- 🎨 将未读数方法添加到User中 [3503a79]

### Fixed

- 🐛 修复ws地址不对的bug [a90da4c]
- 🐛 修改系统配置中大小写不敏感导致的问题 [44f577e]
- 🐛 修复im没连接以及发不出消息的bug [75740f8]
- 🐛 close bug#2262 修复具有邮箱的虚拟账号，显示在成员管理列表时，用户名一栏显示错字段的问题 [f14d851]
- 🐛 解决合并代码后无法打开IM的bug [e25afc0]
- 🐛 解决合并冲突 [99c924f]
- 🐛 修复未读图标显示错误的bug [b30f395]
- 🐛 解决合并冲突 [62c2763]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/onion&#x27; into 1.6.1 [54c22e2]
-  Merge branch &#x27;1.6.1&#x27; into onion [f4728a9]
-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [69fef1e]
-  Merge remote-tracking branch &#x27;origin/1.6.1&#x27; into stephen [a0c5d57]
-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [0b969f2]
-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [882d525]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into 1.6.1 [92590b2]
-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [5e5f247]
-  Merge remote-tracking branch &#x27;origin/1.6.1&#x27; into stephen [a4ac607]
-  Merge branch &#x27;onion&#x27; into 1.6.1 [07fe4cc]
-  Merge remote-tracking branch &#x27;origin/1.6.1&#x27; into stephen [a1c798c]
-  Merge branch &#x27;1.6.1&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.6.1 [60fd47d]
-  Merge branch &#x27;1.6.1&#x27; into dannny [10c7fe5]


<a name="1.6.1-beta.2"></a>
## 1.6.1-beta.2 (2020-01-15)

### Added

- ✨ 增加一个专门用于ts的keys方法 [28caca7]

### Changed

- 🔧 优化env的逻辑 [6d5ce0e]
- 🔧 将console的eslint规则统一改成warn [32bc997]

### Fixed

- 🐛 将im的协议改成相对当前协议，并且避免im初始化失败导致整体失败的bug [f9e5242]
- 🐛 修复imag-viewer对图片获取边界缓存时出错的bug进行修复 [2281686]

### Miscellaneous

-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [9bc662a]


<a name="1.6.1-beta.1"></a>
## 1.6.1-beta.1 (2020-01-15)

### Added

- ✨ 增加一个判断管道的方法 [63049df]
- ✨ 增加协同空间成员的省略和展开功能 [4741237]

### Changed

- 💄 调整协同空间成员展示的样式 [872fa6f]
- 🎨 去除WorkspaceORM文件的部分方法，改为使用mixin [a24e33a]
- 💄 点击创建ws后将焦点从创建按钮上移开 [7d2a5bb]
- 💄 给ws列表增加右边的边界 [b673558]
- 🎨 去除原右下角的操作记录按钮，移到ws顶部条的右边 [93eb86b]
- 🚚 将signComponent迁移出oss工具，并且改为ts，以便数据管道的改造 [2aaeb5a]

### Fixed

- 🚑 使用带有backend的url [1e37358]
- 🐛 修复调两次协同空间成员管理的接口的bug [022a3dc]
- 🐛 改善协同空间排序的成功率，并修改刷新前进入不是列表第一个ws，但刷新后会跳到第一个ws的bug [b0d4f94]
- 🚑 迁移部分d.ts到typings文件夹 [6f26dc0]
- 🐛 给修改协同空间名称操作增加权限 [b1e40af]

### Miscellaneous

-  Merge branch &#x27;onion&#x27; into 1.6.1 [12a19f7]
- 🏷️ 将open-window转成ts [0764c38]


<a name="1.6.1-beta.0"></a>
## 1.6.1-beta.0 (2020-01-14)

### Added

- ✨ 将im整合到新版workspace上 [1dd16f4]
- ✨ 将IM改为局部弹窗模式 [cf28f46]
- ✨ 重构协同空间列表，改为左边，新增协同空间设置栏和顶端的协同空间操作栏，侧边栏逻辑优化 [89269b5]
- ✨ sideSlider新增宽度选项 [2cb3692]
- ✨ 增加消息中心定时刷新功能 [97d33e5]
- ✨ 增加输入框粘贴文件的功能 [0169c08]
- ✨ 改造优化前端im消息时间戳的机制，避免重复 [4380150]
- ✨ im图片消息增加长宽字段，避免不必要的边界查询 [b6f2a4f]
- ✨ 增加im的emoji功能 [80ffc68]
- ✨ error 增加 instance 来提供handler的调用实例 [3461883]
- ✨ 增加一些元祖类型的泛型工具 [c4ffb40]
- ✨ im 增加图片预览功能 [0a5ea39]
- ✨ 用eval-source-map代替(none)作为devtool的选项 [1e3b52f]
- ✨ 优化im对catalogElem的处理 [63d7a87]
- ✨ 增加右下角IM图标新消息红点功能 [7667c89]
- ✨ 将im初始化提取到用户模块 [58f76e0]
- ✨ 新增IM新消息workspace红点功能 [9a601f4]
- ✨ 离线未读的功能 [8a7e060]
- ✨ 添加虚拟帐号首次进入时的IM功能提示 [b6772b4]
- ✨ hookErrorHandler的childrenErrors从data改为computed（需vue-reactive-children支持），并增加重试功能，默认不开启 [a0db96a]
- ✨ 增加一个vue-reactive-children插件 [daa2c10]
- ✨ 创建材质类型的局部过滤器 [8fd2ef7]
- ✨ 在材质详情中抽离出两个基本静态的button类型 [d8c39c3]
- ✨ 引入 material  storage 文件，处理材质数据组件共享问题 [58e219f]
- ✨ 给hookErrorHandler增加查找最小错误组件的功能，当出现多个错误时，只在一个大组件处理 [15dbad6]
- ✨ hookErrorHandler增加组件自定义错误图片和说明选项 [97d9570]

### Changed

- 🔧 打开gateway [3f4bd8c]
- 🎨 删除不必要的代码 [02ec33f]
- 🔧 暂时去掉gateway [08d0edb]
- ⬆️ 更新yarn.lock [6b4959e]
- 💄 更新图标字体和样式文件 [97573ac]
- ⚡ 改进hookErrorHandler里查找最小错误等价数的算法 [c9bbdfe]
- 🔧 配合后端部署gateway，修改axios的basepath和vue-cli的proxy [28e43dc]
- ⬆️ 升级vue-cli以及相关依赖以及sass-loader [e1fce6e]
- 🎨 修复一个eslint的错误 [b4a9ad3]
- 🍱 临时把D2/D4放到本地 [87bf393]
- ⬆️ 升级typescript-eslint/parser [90f6434]
- 🎨 将一些模块转换为ts [407fe1d]
- 🎨 将一些代码装换成ts [32a7dd6]
- 🎨 优化panel三件套的结构以及逻辑 [849170a]
- ⚡ 把tree组件的keep-alive去掉，把其父组件的v-if改为v-show [679f9b4]
- 💄 使面料详情的大图可以切换 [939a666]
- 🎨 修改im功能调用方式，改为从user中获取session [698b2aa]
- 🔧 eslint 增加在js对ts文件的识别 [a12d05b]
- 🎨 由于ts不支持tc39 private fields，暂时用_代替# [2afa7d4]
- 🎨 对D4的引用的mixin 进行调整 [6bcb4b0]
- 🏗️ 增加typescript相关工具链，初始化项目的ts入口 [4ebe23e]
- 💄 对详情页面的UI微调 [f0b32d2]
- 🎨 对材质详情页面中的逻辑用组件形式进行分离，简化业务的耦合 [2ebaed7]
- 🎨 对材质详情抽离出几个局部的组件，分离页面的逻辑 [387b8b8]
- 🎨 扩展CustomCollapse组件的功能；调整该组件为functional [40341de]
- ♻️ 上传材质和材质详情的表单校验引用同一份校验文件 [6905acb]
- ♻️ 调整数组单位组件的捕获键盘的时间调整为500ms [d82443f]

### Breaking changes

- 💥 整理vue-loading的逻辑，避免跟element的 [6a4be29]

### Removed

- 🔇 去掉没必要的console [42adb3c]
- ➖ 去掉没必要的api [c9801ff]
- ➖ 去掉不必要的console [b0000a7]
- 🔥 去掉VersionList的type&#x3D;ts [055621f]
- 🔥 去掉vue-async [ff7d173]
- 🔥 删除原本的Cooperate及其依赖组件 [4fafb6f]

### Fixed

- 🐛 修复收缩屏幕宽度时ws会坍塌的bug [937c855]
- 🐛 修复改为使用ORM后协同空间列表的拖动排序无效的问题 [d1b4845]
- 🐛 修复合并的时候冲突导致的文件删除又回来的bug [ae726e7]
- 🐛 axios增加不需token的接口的判断方法 [0b26633]
- 🐛 修复 bug@2349 [a0b9769]
- 🐛 修复在firefox浏览器下IM输入框显示不正确的bug [c03b3e2]
- 🐛 修复图片precache出现计算错误的bug [9a8a4f5]
- 🐛 转换一些模块到ts，并且修复一些bug [cd1af96]
- 🐛 避免im发送成功后闪烁的bug [fbb02cc]
- 🚑 修改材质和鞋模型中的文本错误问题 [78526f1]
- 🐛 修复file-like的缺失 [861a6ba]
- 🐛 修复dialogify弹窗关闭按钮被内容挡住的bug [f445526]
- 🐛 修复评论At 的头像没有签名的bug [74d371f]
- 🐛 修复面料详情框看不了图的bug [fd39733]
- 🐛 修复上传文件组件提示格式错误仍旧上传的bug，IM消息新增gif文件类型 [7c739de]
- 🐛 避免没有绑定preview的时候出现预览的图标 [e374651]
- 🐛 im发送前加入时间戳，避免视图渲染滚动出错 [2f113d8]
- 🐛 修复im缺少签名的bug [5f449c5]
- 🐛 修复缩略图缺少签名导致缩放ImageViewer的时候动画出现烂图的bug [305753a]
- 🐛 修复退出后im没有中断以及重新登录后没有更新用户的问题 [c03bdc5]
- 🐛 修复D4界面滚动时背景和D4渲染框同时滚动的问题 [852506c]
- 🐛 修复部分材质详情修改时，没有发送请求的问题 [f0f1990]
- 🐛 生成并绑定虚拟账号的弹窗的文案修正（原来打错字了） [96ce513]
- 🐛 修复框选不了的bug [c395584]
- 🐛 修复列表面料双击报错的bug [a736266]
- 🐛 修复IM图标红点显示不正确的bug [7e1cbb4]
- 🐛 修复工具函数错误 [2adf773]
- 🐛 修复oss getImageInfo的部分类型错误，并且去掉不必要console [9ff86f8]
- 🐛 修复im接收信息缺少预加载导致的滚动距离不正确的bug [4fe8bac]
- 🐛 开放IM相关功能 [29dc214]
- 🐛 调整hookErrorHandler的合并策略 [28d36d3]
- 🚑 将router-view-key改为LayoutBase [8c0c434]
- 🐛 列表页侧边栏翻译变更 [6a257f3]
- 🐛 解决hookErrorHandler报错问题 [7db7545]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.6.1&#x27; into onion [c4050bf]
- 💡 给协同空间排序添加部分注释 [fcf220e]
-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [d2ff5da]
-  Merge remote-tracking branch &#x27;origin/1.6.1&#x27; into onion [69d1f98]
- 🔀 解决合并冲突 [6baf5e5]
-  Merge branch &#x27;1.6.0&#x27; into 1.6.1 [d6dee21]
- 🔀 合并分支 [1e9fc83]
- 🔀 合并分支 [a2d7c8d]
- 🔀 合并分支 [8439ad3]
-  Merge branch &#x27;1.6.0&#x27; into 1.6.1 [861a55a]
-  Merge branch &#x27;1.6.0&#x27; into 1.6.1 [bde4eaf]
-  Merge branch &#x27;1.6.1&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.1 [501cbaf]
-  Merge branch &#x27;1.6.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.0 [54f799e]
- 🏷️ 增加lodash的类型 [b6d2f08]
-  Merge branch &#x27;1.6.0&#x27; of http://gitlab.4dshoetech.local/front-end/demon-home into 1.6.0 [d825960]
-  Update .rancher-pipeline.yml file [4cd37cc]
-  Update .rancher-pipeline.yml file [53bdba4]
-  Merge branch &#x27;1.6.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.6.0 [87ded47]
-  Merge branch &#x27;hotfix-1.6.0&#x27; into 1.6.0 [4a1a11e]
-  Merge branch &#x27;1.6.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.6.0 [48f5daa]
-  Merge branch &#x27;1.6.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.6.0 [c2a8de2]
-  Merge branch &#x27;stephen&#x27; into 1.6.0 [8688f8d]
-  Merge remote-tracking branch &#x27;origin/1.6.0&#x27; into stephen [f82d1f1]
-  Merge remote-tracking branch &#x27;origin/1.6.0&#x27; into stephen [e66e108]
-  Merge branch &#x27;1.5.0&#x27; into 1.6.0 [b25a18a]
-  Merge branch &#x27;1.6.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.6.0 [cc69501]
-  Merge branch &#x27;dannny&#x27; into 1.6.0 [2bfd977]
-  Merge branch &#x27;1.6.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.6.0 [0547137]
-  Merge branch &#x27;dannny&#x27; into 1.6.0 [250006a]
-  Merge branch &#x27;1.5.0&#x27; into 1.6.0 [79f61ea]
-  Merge branch &#x27;1.5.0&#x27; into 1.6.0 [4373397]
-  Merge branch &#x27;1.6.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.6.0 [2c16efa]
- 🏷️ 将一些工具转换为ts [b52d264]
-  Merge branch &#x27;dannny&#x27; into 1.6.0 [918a28e]
- 🏷️ 将部分工具转换为ts [cf95a26]
- 🏷️ 将filters转换为ts [3dc8fdc]
-  Merge branch &#x27;1.5.0&#x27; into 1.6.0 [2f71ac0]
-  Merge branch &#x27;1.6.0&#x27; into dannny [9daa1c0]
-  Merge remote-tracking branch &#x27;origin/1.6.0&#x27; into onion [9d90c27]
-  Merge remote-tracking branch &#x27;origin/1.6.0&#x27; into stephen [580a05c]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into 1.6.0 [1e39610]
-  Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into 1.6.0 [ebb1a57]
- 📝 变更部分翻译文本 [a788557]


<a name="1.6.0-beta.5"></a>
## 1.6.0-beta.5 (2020-01-07)

### Removed

- 🔇 去掉没必要的console [42adb3c]

### Fixed

- 🐛 修复评论At 的头像没有签名的bug [74d371f]
- 🐛 修复面料详情框看不了图的bug [fd39733]
- 🐛 修复上传文件组件提示格式错误仍旧上传的bug，IM消息新增gif文件类型 [7c739de]
- 🐛 避免没有绑定preview的时候出现预览的图标 [e374651]
- 🐛 im发送前加入时间戳，避免视图渲染滚动出错 [2f113d8]

### Miscellaneous

-  Merge branch &#x27;1.6.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.6.0 [48f5daa]


<a name="1.6.0-beta.4"></a>
## 1.6.0-beta.4 (2020-01-07)

### Changed

- 🎨 对D4的引用的mixin 进行调整 [6bcb4b0]

### Fixed

- 🐛 修复im缺少签名的bug [5f449c5]
- 🐛 修复缩略图缺少签名导致缩放ImageViewer的时候动画出现烂图的bug [305753a]
- 🐛 修复D4界面滚动时背景和D4渲染框同时滚动的问题 [852506c]
- 🐛 修复部分材质详情修改时，没有发送请求的问题 [f0f1990]

### Miscellaneous

-  Merge branch &#x27;1.6.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.6.0 [c2a8de2]
-  Merge branch &#x27;stephen&#x27; into 1.6.0 [8688f8d]
-  Merge remote-tracking branch &#x27;origin/1.6.0&#x27; into stephen [f82d1f1]
-  Merge remote-tracking branch &#x27;origin/1.6.0&#x27; into stephen [e66e108]


<a name="1.6.0-beta.3"></a>
## 1.6.0-beta.3 (2020-01-07)

### Added

- ✨ 增加im的emoji功能 [80ffc68]
- ✨ error 增加 instance 来提供handler的调用实例 [3461883]
- ✨ 增加一些元祖类型的泛型工具 [c4ffb40]

### Changed

- 🎨 将一些代码装换成ts [32a7dd6]

### Removed

- ➖ 去掉没必要的api [c9801ff]

### Fixed

- 🐛 修复退出后im没有中断以及重新登录后没有更新用户的问题 [c03bdc5]


<a name="1.6.0-beta.2"></a>
## 1.6.0-beta.2 (2020-01-06)

### Added

- ✨ im 增加图片预览功能 [0a5ea39]
- ✨ 用eval-source-map代替(none)作为devtool的选项 [1e3b52f]
- ✨ 优化im对catalogElem的处理 [63d7a87]
- ✨ 增加右下角IM图标新消息红点功能 [7667c89]
- ✨ 将im初始化提取到用户模块 [58f76e0]
- ✨ 新增IM新消息workspace红点功能 [9a601f4]
- ✨ 离线未读的功能 [8a7e060]
- ✨ 添加虚拟帐号首次进入时的IM功能提示 [b6772b4]
- ✨ 增加一个vue-reactive-children插件 [daa2c10]
- ✨ 创建材质类型的局部过滤器 [8fd2ef7]
- ✨ 在材质详情中抽离出两个基本静态的button类型 [d8c39c3]
- ✨ 引入 material  storage 文件，处理材质数据组件共享问题 [58e219f]
- ✨ 给hookErrorHandler增加查找最小错误组件的功能，当出现多个错误时，只在一个大组件处理 [15dbad6]
- ✨ hookErrorHandler增加组件自定义错误图片和说明选项 [97d9570]

### Changed

- 🎨 优化panel三件套的结构以及逻辑 [849170a]
- 🎨 修改im功能调用方式，改为从user中获取session [698b2aa]
- 🔧 eslint 增加在js对ts文件的识别 [a12d05b]
- 🎨 由于ts不支持tc39 private fields，暂时用_代替# [2afa7d4]
- 🏗️ 增加typescript相关工具链，初始化项目的ts入口 [4ebe23e]
- 💄 对详情页面的UI微调 [f0b32d2]
- 🎨 对材质详情页面中的逻辑用组件形式进行分离，简化业务的耦合 [2ebaed7]
- 🎨 对材质详情抽离出几个局部的组件，分离页面的逻辑 [387b8b8]
- 🎨 扩展CustomCollapse组件的功能；调整该组件为functional [40341de]
- ♻️ 上传材质和材质详情的表单校验引用同一份校验文件 [6905acb]
- ♻️ 调整数组单位组件的捕获键盘的时间调整为500ms [d82443f]

### Breaking changes

- 💥 整理vue-loading的逻辑，避免跟element的 [6a4be29]

### Removed

- ➖ 去掉不必要的console [b0000a7]
- 🔥 去掉VersionList的type&#x3D;ts [055621f]
- 🔥 去掉vue-async [ff7d173]
- 🔥 删除原本的Cooperate及其依赖组件 [4fafb6f]

### Fixed

- 🐛 修复框选不了的bug [c395584]
- 🐛 修复列表面料双击报错的bug [a736266]
- 🐛 修复IM图标红点显示不正确的bug [7e1cbb4]
- 🐛 修复工具函数错误 [2adf773]
- 🐛 修复oss getImageInfo的部分类型错误，并且去掉不必要console [9ff86f8]
- 🐛 修复im接收信息缺少预加载导致的滚动距离不正确的bug [4fe8bac]
- 🐛 开放IM相关功能 [29dc214]
- 🚑 将router-view-key改为LayoutBase [8c0c434]
- 🐛 列表页侧边栏翻译变更 [6a257f3]
- 🐛 解决hookErrorHandler报错问题 [7db7545]

### Miscellaneous

-  Merge branch &#x27;1.5.0&#x27; into 1.6.0 [b25a18a]
-  Merge branch &#x27;1.6.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.6.0 [cc69501]
-  Merge branch &#x27;dannny&#x27; into 1.6.0 [2bfd977]
-  Merge branch &#x27;1.6.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.6.0 [0547137]
-  Merge branch &#x27;dannny&#x27; into 1.6.0 [250006a]
-  Merge branch &#x27;1.5.0&#x27; into 1.6.0 [79f61ea]
-  Merge branch &#x27;1.5.0&#x27; into 1.6.0 [4373397]
-  Merge branch &#x27;1.6.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.6.0 [2c16efa]
- 🏷️ 将一些工具转换为ts [b52d264]
-  Merge branch &#x27;dannny&#x27; into 1.6.0 [918a28e]
- 🏷️ 将部分工具转换为ts [cf95a26]
- 🏷️ 将filters转换为ts [3dc8fdc]
-  Merge branch &#x27;1.5.0&#x27; into 1.6.0 [2f71ac0]
-  Merge branch &#x27;1.6.0&#x27; into dannny [9daa1c0]
-  Merge remote-tracking branch &#x27;origin/1.6.0&#x27; into stephen [580a05c]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into 1.6.0 [1e39610]
-  Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into 1.6.0 [ebb1a57]
- 📝 变更部分翻译文本 [a788557]


<a name="1.6.0-beta.1"></a>
## 1.6.0-beta.1 (2020-01-06)

### Added

- ✨ im 增加图片预览功能 [0a5ea39]
- ✨ 用eval-source-map代替(none)作为devtool的选项 [1e3b52f]
- ✨ 优化im对catalogElem的处理 [63d7a87]
- ✨ 增加右下角IM图标新消息红点功能 [7667c89]
- ✨ 将im初始化提取到用户模块 [58f76e0]
- ✨ 新增IM新消息workspace红点功能 [9a601f4]
- ✨ 离线未读的功能 [8a7e060]
- ✨ 添加虚拟帐号首次进入时的IM功能提示 [b6772b4]
- ✨ 增加一个vue-reactive-children插件 [daa2c10]
- ✨ 创建材质类型的局部过滤器 [8fd2ef7]
- ✨ 在材质详情中抽离出两个基本静态的button类型 [d8c39c3]
- ✨ 引入 material  storage 文件，处理材质数据组件共享问题 [58e219f]
- ✨ 给hookErrorHandler增加查找最小错误组件的功能，当出现多个错误时，只在一个大组件处理 [15dbad6]
- ✨ hookErrorHandler增加组件自定义错误图片和说明选项 [97d9570]

### Changed

- 🎨 优化panel三件套的结构以及逻辑 [849170a]
- 🎨 修改im功能调用方式，改为从user中获取session [698b2aa]
- 🔧 eslint 增加在js对ts文件的识别 [a12d05b]
- 🎨 由于ts不支持tc39 private fields，暂时用_代替# [2afa7d4]
- 🏗️ 增加typescript相关工具链，初始化项目的ts入口 [4ebe23e]
- 💄 对详情页面的UI微调 [f0b32d2]
- 🎨 对材质详情页面中的逻辑用组件形式进行分离，简化业务的耦合 [2ebaed7]
- 🎨 对材质详情抽离出几个局部的组件，分离页面的逻辑 [387b8b8]
- 🎨 扩展CustomCollapse组件的功能；调整该组件为functional [40341de]
- ♻️ 上传材质和材质详情的表单校验引用同一份校验文件 [6905acb]
- ♻️ 调整数组单位组件的捕获键盘的时间调整为500ms [d82443f]

### Breaking changes

- 💥 整理vue-loading的逻辑，避免跟element的 [6a4be29]

### Removed

- ➖ 去掉不必要的console [b0000a7]
- 🔥 去掉VersionList的type&#x3D;ts [055621f]
- 🔥 去掉vue-async [ff7d173]
- 🔥 删除原本的Cooperate及其依赖组件 [4fafb6f]

### Fixed

- 🐛 修复隐藏显示文件夹缺少权限的bug [1e6ac42]
- 🐛 修复normalize传入null没法清空的bug [63cf2a2]
- 🐛 修复列表面料双击报错的bug [a736266]
- 🐛 修复IM图标红点显示不正确的bug [7e1cbb4]
- 🐛 修复工具函数错误 [2adf773]
- 🐛 修复oss getImageInfo的部分类型错误，并且去掉不必要console [9ff86f8]
- 🐛 修复im接收信息缺少预加载导致的滚动距离不正确的bug [4fe8bac]
- 🐛 开放IM相关功能 [29dc214]
- 🚑 将router-view-key改为LayoutBase [8c0c434]
- 🐛 列表页侧边栏翻译变更 [6a257f3]
- 🐛 解决hookErrorHandler报错问题 [7db7545]

### Miscellaneous

-  Merge branch &#x27;1.5.0&#x27; into 1.6.0 [b25a18a]
-  Merge branch &#x27;1.6.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.6.0 [cc69501]
-  Merge branch &#x27;dannny&#x27; into 1.6.0 [2bfd977]
-  Merge branch &#x27;1.6.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.6.0 [0547137]
-  Merge branch &#x27;dannny&#x27; into 1.6.0 [250006a]
-  Merge branch &#x27;1.5.0&#x27; into 1.6.0 [79f61ea]
-  Merge branch &#x27;1.5.0&#x27; into 1.6.0 [4373397]
-  Merge branch &#x27;1.6.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.6.0 [2c16efa]
- 🏷️ 将一些工具转换为ts [b52d264]
-  Merge branch &#x27;dannny&#x27; into 1.6.0 [918a28e]
- 🏷️ 将部分工具转换为ts [cf95a26]
- 🏷️ 将filters转换为ts [3dc8fdc]
-  Merge branch &#x27;1.5.0&#x27; into 1.6.0 [2f71ac0]
-  Merge branch &#x27;1.6.0&#x27; into dannny [9daa1c0]
-  Merge remote-tracking branch &#x27;origin/1.6.0&#x27; into stephen [580a05c]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into 1.6.0 [1e39610]
-  Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into 1.6.0 [ebb1a57]
- 📝 变更部分翻译文本 [a788557]


<a name="1.6.0-beta.0"></a>
## 1.6.0-beta.0 (2020-01-02)

### Added

- ✨ 增加一个vue-reactive-children插件 [daa2c10]
- ✨ 创建材质类型的局部过滤器 [8fd2ef7]
- ✨ 在材质详情中抽离出两个基本静态的button类型 [d8c39c3]
- ✨ 引入 material  storage 文件，处理材质数据组件共享问题 [58e219f]
- ✨ 给hookErrorHandler增加查找最小错误组件的功能，当出现多个错误时，只在一个大组件处理 [15dbad6]
- ✨ hookErrorHandler增加组件自定义错误图片和说明选项 [97d9570]

### Changed

- 🎨 由于ts不支持tc39 private fields，暂时用_代替# [2afa7d4]
- 🏗️ 增加typescript相关工具链，初始化项目的ts入口 [4ebe23e]
- 💄 对详情页面的UI微调 [f0b32d2]
- 🎨 对材质详情页面中的逻辑用组件形式进行分离，简化业务的耦合 [2ebaed7]
- 🎨 对材质详情抽离出几个局部的组件，分离页面的逻辑 [387b8b8]
- 🎨 扩展CustomCollapse组件的功能；调整该组件为functional [40341de]
- ♻️ 上传材质和材质详情的表单校验引用同一份校验文件 [6905acb]
- ♻️ 调整数组单位组件的捕获键盘的时间调整为500ms [d82443f]

### Breaking changes

- 💥 整理vue-loading的逻辑，避免跟element的 [6a4be29]

### Removed

- ➖ 去掉不必要的console [b0000a7]
- 🔥 去掉VersionList的type&#x3D;ts [055621f]
- 🔥 去掉vue-async [ff7d173]
- 🔥 删除原本的Cooperate及其依赖组件 [4fafb6f]

### Fixed

- 🐛 修复oss getImageInfo的部分类型错误，并且去掉不必要console [9ff86f8]
- 🐛 修复im接收信息缺少预加载导致的滚动距离不正确的bug [4fe8bac]
- 🐛 开放IM相关功能 [29dc214]
- 🚑 将router-view-key改为LayoutBase [8c0c434]
- 🐛 列表页侧边栏翻译变更 [6a257f3]
- 🐛 解决hookErrorHandler报错问题 [7db7545]

### Miscellaneous

- 🏷️ 将部分工具转换为ts [cf95a26]
- 🏷️ 将filters转换为ts [3dc8fdc]
-  Merge branch &#x27;1.5.0&#x27; into 1.6.0 [2f71ac0]
-  Merge branch &#x27;1.6.0&#x27; into dannny [9daa1c0]
-  Merge remote-tracking branch &#x27;origin/1.6.0&#x27; into stephen [580a05c]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into 1.6.0 [1e39610]
-  Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into 1.6.0 [ebb1a57]
- 📝 变更部分翻译文本 [a788557]


<a name="1.5.2"></a>
## 1.5.2 (2020-01-19)

### Added

- ✨ 更新d4增加钻石类型面料 [f2a6f5e]
- ✨ 增加oss是否加密的标识符 [4ec820b]

### Changed

- 🔧 去掉uat和prod对代理路径的无必要的配置 [75950d0]
- ⏪ 替换d4的操作修改 [3cd3baa]

### Removed

- 🔥 去除rancher master分支的deploy [8e67497]

### Fixed

- 🐛 修复保存图标缺失的bug [0d9a170]
- 🐛 修复上传没有传递 material type的bug [b85628d]
- 🐛 修复material info的一些报错以及放大可能失效的bug [4027f9b]
- 🐛 修复panel list里获取relateId接口传入0的bug [97905a7]
- 🐛 临时去掉debounce避免跨组件使用的时候导致某些值缺失的问题 [372abe0]
- 🐛 修复create board顶级目录不能拖动的bug [bb5d57e]
- 🐛 修复OSS_SIGN报错的bug [455915c]
- 🐛 修复上传时因传递id为空参数时，导致无法创建文件夹问题 [9aca1e7]
- 🐛 修复OSS_SIGN报错的bug [08d6591]
- 🐛 修复合并上传材质页面错误导致的问题 [75f13ad]

### Miscellaneous

-  Merge branch &#x27;1.5.0&#x27; [f615f34]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.local:front-end/demon-home [6af4d01]
-  Merge branch &#x27;1.5.0&#x27; [89f1399]
-  Update .rancher-pipeline.yml file [27ddd95]
-  Update .rancher-pipeline.yml file [b7dc2ec]
-  Update .rancher-pipeline.yml file [3f1c72d]
-  Merge branch &#x27;1.5.0&#x27; [f6ac120]
-  Merge branch &#x27;1.5.0&#x27; [9677c3f]
- 🔀 合并分支 [4d2af2b]
- 🔀 合并分支 [dff9ab9]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [c785356]
-  Update .rancher-pipeline.yml file [789dade]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [480e2af]
- 🔀 合并分支 [9a6ba96]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [a1150d7]
-  Update .rancher-pipeline.yml file [1e59f5b]
-  Merge remote-tracking branch &#x27;origin/uat&#x27; [a8ce55b]
-  Merge branch &#x27;1.2.0&#x27; [d7b0242]
-  Merge branch &#x27;1.2.0&#x27; [7dfafd6]
-  Merge branch &#x27;1.2.0&#x27; [c8b1d05]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [4936e30]
-  Update .rancher-pipeline.yml file [9fce6c3]


<a name="1.5.1"></a>
## 1.5.1 (2020-01-16)

### Added

- ✨ 更新d4增加钻石类型面料 [f2a6f5e]
- ✨ 增加oss是否加密的标识符 [4ec820b]

### Changed

- 🔧 去掉uat和prod对代理路径的无必要的配置 [75950d0]
- ⏪ 替换d4的操作修改 [3cd3baa]

### Removed

- 🔥 去除rancher master分支的deploy [8e67497]

### Fixed

- 🚑 修复对于未知类型文件会重置成png的bug [3f8981c]
- 🐛 修复保存图标缺失的bug [0d9a170]
- 🐛 修复上传没有传递 material type的bug [b85628d]
- 🐛 修复material info的一些报错以及放大可能失效的bug [4027f9b]
- 🐛 修复panel list里获取relateId接口传入0的bug [97905a7]
- 🐛 临时去掉debounce避免跨组件使用的时候导致某些值缺失的问题 [372abe0]
- 🐛 修复create board顶级目录不能拖动的bug [bb5d57e]
- 🐛 修复OSS_SIGN报错的bug [455915c]
- 🐛 修复上传时因传递id为空参数时，导致无法创建文件夹问题 [9aca1e7]
- 🐛 修复OSS_SIGN报错的bug [08d6591]
- 🐛 修复合并上传材质页面错误导致的问题 [75f13ad]

### Miscellaneous

-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.local:front-end/demon-home [6af4d01]
-  Merge branch &#x27;1.5.0&#x27; [89f1399]
-  Update .rancher-pipeline.yml file [27ddd95]
-  Update .rancher-pipeline.yml file [b7dc2ec]
-  Update .rancher-pipeline.yml file [3f1c72d]
-  Merge branch &#x27;1.5.0&#x27; [f6ac120]
-  Merge branch &#x27;1.5.0&#x27; [9677c3f]
- 🔀 合并分支 [4d2af2b]
- 🔀 合并分支 [dff9ab9]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [c785356]
-  Update .rancher-pipeline.yml file [789dade]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [480e2af]
- 🔀 合并分支 [9a6ba96]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [a1150d7]
-  Update .rancher-pipeline.yml file [1e59f5b]
-  Merge remote-tracking branch &#x27;origin/uat&#x27; [a8ce55b]
-  Merge branch &#x27;1.2.0&#x27; [d7b0242]
-  Merge branch &#x27;1.2.0&#x27; [7dfafd6]
-  Merge branch &#x27;1.2.0&#x27; [c8b1d05]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [4936e30]
-  Update .rancher-pipeline.yml file [9fce6c3]


<a name="1.5.0"></a>
## 1.5.0 (2020-01-10)

### Added

- ✨ 更新d4增加钻石类型面料 [f2a6f5e]
- ✨ 增加oss是否加密的标识符 [4ec820b]

### Changed

- 🔧 修改私有库nexus的外部访问地址 [001c654]
- 🍱 临时把D2/D4放到本地 [40b4e42]
- 🔧 去掉uat和prod对代理路径的无必要的配置 [75950d0]
- ⏪ 替换d4的操作修改 [3cd3baa]

### Removed

- 🔥 去除rancher master分支的deploy [8e67497]

### Fixed

- 🐛 修复保存图标缺失的bug [0d9a170]
- 🐛 修复上传没有传递 material type的bug [b85628d]
- 🐛 修复material info的一些报错以及放大可能失效的bug [4027f9b]
- 🐛 修复panel list里获取relateId接口传入0的bug [97905a7]
- 🐛 临时去掉debounce避免跨组件使用的时候导致某些值缺失的问题 [372abe0]
- 🐛 修复create board顶级目录不能拖动的bug [bb5d57e]
- 🐛 修复OSS_SIGN报错的bug [455915c]
- 🐛 修复上传时因传递id为空参数时，导致无法创建文件夹问题 [9aca1e7]
- 🐛 修复OSS_SIGN报错的bug [08d6591]
- 🐛 修复合并上传材质页面错误导致的问题 [75f13ad]

### Miscellaneous

-  Merge branch &#x27;1.5.0&#x27; [f6ac120]
-  Merge branch &#x27;1.5.0&#x27; [9677c3f]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.local:front-end/demon-home into 1.5.0 [d6a3aba]
- 📦 d4转移到nexus的npm上 [6444c8f]
- 🔀 合并分支 [4d2af2b]
-  Update .rancher-pipeline.yml file [44542c3]
- 🔀 合并分支 [dff9ab9]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [c785356]
-  Update .rancher-pipeline.yml file [789dade]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [480e2af]
- 🔀 合并分支 [9a6ba96]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [a1150d7]
-  Update .rancher-pipeline.yml file [1e59f5b]
-  Merge remote-tracking branch &#x27;origin/uat&#x27; [a8ce55b]
-  Merge branch &#x27;1.2.0&#x27; [d7b0242]
-  Merge branch &#x27;1.2.0&#x27; [7dfafd6]
-  Merge branch &#x27;1.2.0&#x27; [c8b1d05]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [4936e30]
-  Update .rancher-pipeline.yml file [9fce6c3]


<a name="1.5.0-rc.3"></a>
## 1.5.0-rc.3 (2020-01-06)

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Miscellaneous

-  Merge branch &#x27;1.5.0&#x27; into uat [e34b984]
-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]
-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.5.0-rc.2"></a>
## 1.5.0-rc.2 (2020-01-04)

### Changed

- ⬆️ 在package.json 加入d4的deploy token 避免pipeline运行报错 [8501cbe]

### Miscellaneous

-  Merge branch &#x27;1.5.0&#x27; into uat [dfaadf2]


<a name="1.5.0-rc.1"></a>
## 1.5.0-rc.1 (2020-01-04)

### Added

- ➕ D4 / D2 的模块化 [d0bf2e4]

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Miscellaneous

-  Merge branch &#x27;1.5.0&#x27; into uat [7192d0e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.5.0-rc.0"></a>
## 1.5.0-rc.0 (2020-01-02)

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Miscellaneous

-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3ae0646]
- 🔀 合并分支 [1ab26d7]
-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]
-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]
-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.5.0-beta.31"></a>
## 1.5.0-beta.31 (2020-01-02)

### Changed

- 🎨 微调代码，将chatListItem组件修改为函数式组件 [9e19d7e]

### Removed

- 🔥 隐藏IM入口、停止相关加载项 [c32e616]

### Fixed

- 🐛 修复全屏挂掉的bug [d0609cf]

### Miscellaneous

-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [77a051a]
-  Merge branch &#x27;dannny&#x27; into 1.5.0 [ae1325d]


<a name="1.5.0-beta.30"></a>
## 1.5.0-beta.30 (2019-12-30)

### Added

- ✨ 现在IM会将新消息未读会话置顶 [5e3eece]

### Changed

- 🎨 删除分享弹窗不必要的代码 [ca74638]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.5.0 [a6cad8c]
-  Merge branch &#x27;1.5.0&#x27; of https://gitlab.4dshoetech.com/front-end/demon-home into 1.5.0 [82f005a]


<a name="1.5.0-beta.29"></a>
## 1.5.0-beta.29 (2019-12-30)

### Fixed

- 🐛 避免errorHandler自己报错 [a35a924]
- 🐛 CLOSE bug#2306 [b75eca8]
- 🐛 CLOSE bug#2275 [8aa5200]

### Miscellaneous

-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [9f6f2cd]


<a name="1.5.0-beta.28"></a>
## 1.5.0-beta.28 (2019-12-30)

### Changed

- 🎨 优化IM界面组件代码 [4470169]
- 🎨 重构详情模块中的表单显示详情组件 FormFieldText [9d6eada]
- 💄 修改未读数显示效果 [2bde07a]

### Miscellaneous

-  Merge branch &#x27;stephen&#x27; into 1.5.0 [49c25e5]
-  Merge branch &#x27;1.5.0&#x27; into dannny [c19aa73]


<a name="1.5.0-beta.27"></a>
## 1.5.0-beta.27 (2019-12-27)

### Miscellaneous

-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [d4a142d]
- 🚧 im发送catalog类型 [fa43bac]


<a name="1.5.0-beta.26"></a>
## 1.5.0-beta.26 (2019-12-27)

### Added

- ✨ 给背景的右键菜单增加刷新操作 [cdef132]
- ✨ 增加getImageDemension方法 [daf7332]
- ✨ load-image方法支持blob [5ef6bb9]
- ✨ 创建虚拟账号时增加发送协同空间图片的可选项 [3732b1a]
- ✨ 增加im未读数的处理 [0e0d340]
- 👷‍♂️ bump命令增加默认的release [b9688c7]
- ✨ IM功能&amp;分享鞋款到IM [0c910f9]
- ✨ 给hookErrorHandler去除mounted接错功能，增加默认的错误处理（加一层报错的图片和提示） [e3ad806]
- ✨ im 发送图片以及历史消息 [eb99505]
- ✨ 增加animate和easing模块 [90bb77d]
- ✨ 增加retryable工具 [2724cde]
- ✨ 增加findRight以及findIndexRight两个工具 [7975748]
- ✨ 路由增加可配置的是否需要登录的开关 [57eb320]
- ✨ 增加extract工具 [7581d0b]
- ✨ 上传材质页面添加鞋头部贴材质效果图 [211c27a]
- ✨ 给hookErrorHandler增加捕获mounted时期的bug的功能，并增加errorBubble选项，当为true时错误会往父组件冒泡，否则不会 [f18fefa]
- ✨ 更新IM视图 [99afb7b]
- ✨ 对接列表页筛选接口 [3b7e640]
- ✨ 增加thenable方法 [0991ee6]
- ✨ 增加方法切片方法 [e7afb97]
- ✨ 增加一个is-image的判断方法 [3176252]
- ✨ 整合上传的方法，并且整理getParams的逻辑 [ca1e5ff]
- ✨ 增加一个is-data-url的方法 [622acfa]
- ✨ toggle-from增加可选的第四参数，用于处理如何插入的问题 [76f86a9]
- ✨ remove方法增加返回值，返回删除的index [7ed2493]
- ✨ 抽离出get-ext方法并且增加一些关于二进制的转换方法 [0ff0012]
- ✨ 增加一个get-ext方法 [80d4186]
- ✨ 增加一个mima2ext的方法 [952ff4c]
- ✨ 增加hookErrorHandler，捕捉钩子内未处理的错误，目前仅用于created上，理论上可以放到其他钩子 [4c7c3b7]
- ✨ 修改帮助中心feedback交互 [5171b32]
- ✨ 上传本地印花图片到oss [5b32e12]
- ✨ 把筛选涉及的参数挂上url [82402de]
- ✨ 新增列表页的筛选功能，等待接口给出 [d51df79]
- ✨ 新增列表页的筛选功能，等待接口给出 [599b19c]
- 🔊 增加详情弹出框错误时候的错误提醒 [1b98fc8]
- ✨ 拖拽和右键支持对多个文件新增快捷方式 [0f572fe]

### Changed

- 💄 修改标签组件TagsAuto中样式被遮挡的问题 [7cc3385]
- 💄 调整详情弹框中的缺乏字段，显示默认文字；调整样式 [58a2c5d]
- 💄 CLOSE bug#2301 完善筛选的UI [f4258c3]
- ♻️ 根据最新的上传字段限制，重新核对调整部分校验 [7133e87]
- 💄 修改 element-ui中 input（Textarea） 的字数提示限制为透明 [181f6ad]
- ♻️ 上传和详情的价格都能输入两位小数 [e6bf898]
- 💄 调整上传材质中的表单内容的布局 [81a43bf]
- 💄 材质和鞋模型弹框中的内容添加固定的placeholder提示语句 [5f92f31]
- 🎨 修改数组单位组件中的校验内容的时机，用户输入300ms才校验内容 [37d9575]
- 💄 调整IM界面样式 [a782da0]
- ♻️ 整理所有缩放相关的工具以及组件的逻辑，统一输入 [375ae23]
- 💄 鞋款详情页面，材质编号的由 Material Number 改成Platform Material Code [04b067b]
- 💄 调整IM历史信息页面样式 [8501c52]
- ♻️ 上传详情和编辑详情页备注长度由254改为200 [8cfbdbf]
- 💄 history增加相对定位的容器 [12e0274]
- 🔧 增加一个VUE_APP_REMOTE_DOMAIN的配置 [b687473]
- 🎨 修改项目中所有的调用D4的文件，调整调用的方法 [046ee89]
- ⚡ 优化uploadToOSS的blob类型判断 [aa1b73d]
- ♻️ 详情模块把字典类型的字典把英文名字显示出来 [2a4b54e]
- 💄 更改筛选的图标 [e0df810]
- ⚡ D4变更，另外把2d部分拆成单独的文件，为web-worker做准备 [94a0fde]
- 💄 更新帮助文档翻译 [a630311]
- ♻️ 同步修改字典类型的接口字典从shoeType改为shoeCategory [6197c23]
- ⚡ 增加一个configable基类 [a0be043]
- ⚡ 抽离出getToken的方法 [001b373]
- 🎨 对材质和鞋模型详情重构其权限控制的代码 [a138cfe]
- 💄 更新iconfont文件 [e3e15ab]
- 🎨 材质详情的编辑和浏览模式切换功能；重构材质模型详情代码； [0f9780f]
- 🎨 鞋模型详情修改为编辑和浏览模式；重构整个详情的代码结构； [cb106c9]
- 💄 调整帮助中心文档排版 [f1eee50]
- ♻️ 根据设计稿，调整上传鞋模型的表单结构，添加notes字段 [2818dc8]
- ♻️ 根据设计稿，调整上传材质的表单结构，添加notes字段 [0a1f7b6]
- ♻️ 重构列表部分store逻辑，增加更精准的搜索逻辑的处理 [9eda047]
- 💄 修改导航到主页按钮的样式 [59055ea]
- 🎨 重构新手教程代码 [7ff6e7d]
- 💄 修改搜索框样式 [1aed46b]
- ⚡ 清空搜索时只调一次接口 [ee57bf9]
- 💄 修复qt消息中心样式问题 [5e73f42]
- 💄 搜索栏调整样式 [e1b96a3]
- ⚡ 抽离toggle-from方法 [901dba1]

### Removed

- 🔇 去掉不必要的console.log [52b20c0]

### Fixed

- 🐛 修复上传材质3D鞋旋转不了 [20832bb]
- 🐛 CLOSE bug#2302 修复渲染页面料右键显示share的bug [73451c1]
- 🐛 CLOSE bug#2278 分享到聊天后跳转到对应的页面 [5814bc0]
- 🐛 CLOSE bug#2277 bug#2278 把中文描述改为英文 [2b6d939]
- 🐛 CLOSE bug#2296 列表页背景右键删除share选项 [2c27b36]
- 🐛 CLOSE bug#2109 把协同空间管理的头像改为根据是否为owner来确定用哪种 [d7286db]
- 🐛 CLOSE bug#2276 快捷键删除文件缺少groupAppId [09cb43f]
- 🐛 CLOSE bug#2284 新增创建多个快捷方式的逻辑，把原来的循环调用一个创建快捷方式改为调用新的逻辑，报错内容也进行了变更 [d261974]
- 🐛 修改上传材质中对类型校验出错的问题 [c93bbb2]
- 🐛 暂时屏蔽掉刷新，并修复搜索后切换workspace 输入框不重置的bug [6640bfe]
- 🐛 修改另存为时，截图报错失败的问题；打开详情显示的内容跟页面内容不相符的问题 [2304fc0]
- 🐛 CLOSE bug#2273 修复搜索结果文案错误问题 [ab6b430]
- 🐛 增加im图片收取的功能 [bb9d742]
- 🐛 CLOSE bug#2265 将搜索类目的color改为面料列表限定显示 [3259c52]
- 🐛 修复协同空间管理列表在退出登录后用另一个账号登录再查看时，会遗留上一个人的协同空间的问题 [753b633]
- 🐛 修复材质详情中轮播图中，以往上传没有鞋头贴图的会显示空白图片问题 [99b2c19]
- 🐛 修复筛选后右键可以操作的问题、筛选后让导航栏有提示当前正在筛选 [4df4a6d]
- 🐛 修复历史信息显示错误的bug [920f789]
- 🐛 解决合并冲突 [131377d]
- 🐛 修复选中错误导致的复制，以及权限判读错乱等bug [6b61e47]
- 🐛 修复上传路径不对以及配置错误的bug [1ef3166]
- 🐛 上传到OSS时，都不需要带后缀扩展名 [a4122d2]
- 🐛 修复消息重复，或者接受消息报错的bug [6506e27]
- 🐛 修复控制台对筛选内容报错的问题 [6fab313]
- 🐛 修复上传缺少body的bug [3b45f48]
- 🐛 修复im不能收消息的bug [7157f67]
- 🐛 修复历史消息不能加载的bug [7d0c492]
- 🐛 渲染页搜索类目增加、列表页搜索可选类目随appType变更 [14abbe9]
- 🐛 面料搜索去掉值的空格 [a53d0cc]
- 🐛 CLOSE bug#2243 [9c7c763]
- 🐛 修复筛选模型类型后刷新页面后，类型变为数字的bug [0218533]
- 🐛 临时修复getParams缺少参数的bug [133d142]
- 🐛 修复调用  导致报错问题 [0200581]
- 🐛 修复thenable自己递归自己的bug [d58bf7e]
- 🐛 修复列表页拖拽创建快捷方式失败的bug [503b361]
- 🐛 修复关闭更改面料类别后，关闭面料详情弹框时报错 [7c14901]
- 🐛 修复回到主页按钮点击没反应问题 [30a6c5f]
- 🐛 修复筛选时变更type不会调用筛选的接口的bug [9ff2db5]
- 🐛 优化oss getParams判断，避免缺乏后缀的bug [d605749]
- 🐛 修复date系列的方法，避免闰秒这种尴尬情况 [56fa042]
- 🐛 修复帮助中心图片签名错误的bug，现在帮助中心的图片不会走签名 [0f03e1d]
- 🐛 解决合并冲突 [7dd82fe]
- 🐛 修复SearchBar 缺少初始化的keyword的bug [826d03e]
- 🐛 解决合并冲突 [fb4f487]
- 🐛 增加lf2br lf2p两个过滤器 [8c2c15e]
- 🐛 修复列表页调取错点击方法的bug [6b6bdd9]
- 🐛 修复没有 create board 的角色加载create board 时 报错的bug [1cdf2ca]
- 🐛 修复下载样品单due date默认填写了1970/01/01的bug [a339c6f]
- 🐛 修复签名开关不生效的bug [a240671]
- 🐛 修复部分接口没传递groupAppId [7435f99]
- 🐛 api配置上添加默认的groupAppId [bb24d5c]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into stephen [72a34b4]
-  Merge branch &#x27;dannny&#x27; into 1.5.0 [b358709]
-  Merge branch &#x27;onion&#x27; into 1.5.0 [5fc8c99]
-  解决合并冲突 [e0c6ae8]
-  Merge branch &#x27;onion&#x27; into 1.5.0 [a670413]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [c559e36]
-  Merge branch &#x27;onion&#x27; into 1.5.0 [2594c75]
-  Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into stephen [52e477d]
-  Merge branch &#x27;onion&#x27; into 1.5.0 [55a37ce]
-  Merge branch &#x27;dannny&#x27; into 1.5.0 [8e86d31]
-  Merge branch &#x27;1.5.0&#x27; of https://gitlab.4dshoetech.com/front-end/demon-home into 1.5.0 [b31b8ae]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [d8880ad]
-  Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into stephen [553c46d]
-  Merge branch &#x27;onion&#x27; into 1.5.0 [398ab7b]
- 📝 增加筛选结果为空的提示、修改3D虚拟样品申请的翻译 [d80ac26]
-  Merge branch &#x27;dannny&#x27; into 1.5.0 [a4c65cc]
- 🚧 调整IM样式及部分交互 [bf9dca4]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [f63d891]
-  Merge branch &#x27;onion&#x27; into 1.5.0 [7d9f336]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [b3ceaa1]
-  Merge branch &#x27;onion&#x27; into 1.5.0 [8e068a0]
-  Merge branch &#x27;dannny&#x27; into 1.5.0 [36eb57f]
-  Merge branch &#x27;onion&#x27; into 1.5.0 [27cc475]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [fa1c69d]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [d4c5156]
-  Merge branch &#x27;stephen&#x27; into 1.5.0 [3216e8b]
-  Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into onion [e644a34]
-  Merge branch &#x27;1.5.0&#x27; into dannny [505636e]
-  Update Dockerfile [812ad38]
-  Merge branch &#x27;1.5.0&#x27; into dannny [4ba25fa]
- 🚧 添加im页面 [fcd6039]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [326b21a]
- 🚧 IM相关组件 [81d7acc]
-  Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into stephen [6cb3068]
-  Merge branch &#x27;1.5.0&#x27; into dannny [2460864]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [c82eb8a]
- 🚧 增加im以及相关测试页面 [f0ffe02]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into stephen [ff8545e]
-  Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into stephen [1beca84]
- 🔀 解决合并冲突 [dd2471e]
-  Merge branch &#x27;1.5.0&#x27; into dannny [d8114b7]
-  Merge branch &#x27;dannny&#x27; into 1.5.0 [6d786d6]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [3f35e1d]
- 📝 增加一些文档 [12be6ca]
- 📝 添加ItemSelector的部分注释 [58b69e0]
-  Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into stephen [5a68c4a]
-  Merge branch &#x27;1.4.0&#x27; into 1.5.0 [5e5630f]
-  Merge branch &#x27;1.4.0&#x27; into 1.5.0 [ed2ffd7]
- 🔀 Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into onion [5852f2e]
-  Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into onion [468f320]
-  Merge branch &#x27;1.4.0&#x27; into 1.5.0 [50d0f50]
-  Merge branch &#x27;1.4.0&#x27; into 1.5.0 [9133b6c]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [f0f85c9]
-  Merge branch &#x27;1.4.0&#x27; into 1.5.0 [cbb37c3]
-  Merge branch &#x27;onion&#x27; into 1.5.0 [bee17b1]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [1f31e07]
-  Merge branch &#x27;1.5.0&#x27; into dannny [0369579]
-  Merge branch &#x27;onion&#x27; into 1.5.0 [84bc9c9]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [eaf0d11]
-  Merge branch &#x27;1.4.0&#x27; into 1.5.0 [2a8d1fb]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [8179b03]
-  Merge branch &#x27;1.4.0&#x27; into 1.5.0 [f5ce041]
-  Merge remote-tracking branch &#x27;origin/1.4.0&#x27; into 1.5.0 [a563ae9]
-  Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into onion [a451288]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [a0379ee]


<a name="1.5.0-beta.25"></a>
## 1.5.0-beta.25 (2019-12-27)

### Fixed

- 🐛 CLOSE bug#2284 新增创建多个快捷方式的逻辑，把原来的循环调用一个创建快捷方式改为调用新的逻辑，报错内容也进行了变更 [d261974]

### Miscellaneous

-  Merge branch &#x27;onion&#x27; into 1.5.0 [2594c75]


<a name="1.5.0-beta.24"></a>
## 1.5.0-beta.24 (2019-12-27)

### Fixed

- 🐛 修改上传材质中对类型校验出错的问题 [c93bbb2]


<a name="1.5.0-beta.23"></a>
## 1.5.0-beta.23 (2019-12-27)

### Changed

- 💄 调整上传材质中的表单内容的布局 [81a43bf]
- 💄 材质和鞋模型弹框中的内容添加固定的placeholder提示语句 [5f92f31]
- 🎨 修改数组单位组件中的校验内容的时机，用户输入300ms才校验内容 [37d9575]

### Fixed

- 🐛 修改另存为时，截图报错失败的问题；打开详情显示的内容跟页面内容不相符的问题 [2304fc0]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into stephen [52e477d]


<a name="1.5.0-beta.22"></a>
## 1.5.0-beta.22 (2019-12-27)

### Added

- ✨ 给背景的右键菜单增加刷新操作 [cdef132]
- ✨ 增加getImageDemension方法 [daf7332]
- ✨ load-image方法支持blob [5ef6bb9]
- ✨ 创建虚拟账号时增加发送协同空间图片的可选项 [3732b1a]
- ✨ 增加im未读数的处理 [0e0d340]
- 👷‍♂️ bump命令增加默认的release [b9688c7]
- ✨ IM功能&amp;分享鞋款到IM [0c910f9]
- ✨ 给hookErrorHandler去除mounted接错功能，增加默认的错误处理（加一层报错的图片和提示） [e3ad806]
- ✨ im 发送图片以及历史消息 [eb99505]
- ✨ 增加animate和easing模块 [90bb77d]
- ✨ 增加retryable工具 [2724cde]
- ✨ 增加findRight以及findIndexRight两个工具 [7975748]
- ✨ 路由增加可配置的是否需要登录的开关 [57eb320]
- ✨ 增加extract工具 [7581d0b]
- ✨ 上传材质页面添加鞋头部贴材质效果图 [211c27a]
- ✨ 给hookErrorHandler增加捕获mounted时期的bug的功能，并增加errorBubble选项，当为true时错误会往父组件冒泡，否则不会 [f18fefa]
- ✨ 更新IM视图 [99afb7b]
- ✨ 对接列表页筛选接口 [3b7e640]
- ✨ 增加thenable方法 [0991ee6]
- ✨ 增加方法切片方法 [e7afb97]
- ✨ 增加一个is-image的判断方法 [3176252]
- ✨ 整合上传的方法，并且整理getParams的逻辑 [ca1e5ff]
- ✨ 增加一个is-data-url的方法 [622acfa]
- ✨ toggle-from增加可选的第四参数，用于处理如何插入的问题 [76f86a9]
- ✨ remove方法增加返回值，返回删除的index [7ed2493]
- ✨ 抽离出get-ext方法并且增加一些关于二进制的转换方法 [0ff0012]
- ✨ 增加一个get-ext方法 [80d4186]
- ✨ 增加一个mima2ext的方法 [952ff4c]
- ✨ 增加hookErrorHandler，捕捉钩子内未处理的错误，目前仅用于created上，理论上可以放到其他钩子 [4c7c3b7]
- ✨ 修改帮助中心feedback交互 [5171b32]
- ✨ 上传本地印花图片到oss [5b32e12]
- ✨ 把筛选涉及的参数挂上url [82402de]
- ✨ 新增列表页的筛选功能，等待接口给出 [d51df79]
- ✨ 新增列表页的筛选功能，等待接口给出 [599b19c]
- 🔊 增加详情弹出框错误时候的错误提醒 [1b98fc8]
- ✨ 拖拽和右键支持对多个文件新增快捷方式 [0f572fe]

### Changed

- 💄 调整IM界面样式 [a782da0]
- ♻️ 整理所有缩放相关的工具以及组件的逻辑，统一输入 [375ae23]
- 💄 鞋款详情页面，材质编号的由 Material Number 改成Platform Material Code [04b067b]
- 💄 调整IM历史信息页面样式 [8501c52]
- ♻️ 上传详情和编辑详情页备注长度由254改为200 [8cfbdbf]
- 💄 history增加相对定位的容器 [12e0274]
- 🔧 增加一个VUE_APP_REMOTE_DOMAIN的配置 [b687473]
- 🎨 修改项目中所有的调用D4的文件，调整调用的方法 [046ee89]
- ⚡ 优化uploadToOSS的blob类型判断 [aa1b73d]
- ♻️ 详情模块把字典类型的字典把英文名字显示出来 [2a4b54e]
- 💄 更改筛选的图标 [e0df810]
- ⚡ D4变更，另外把2d部分拆成单独的文件，为web-worker做准备 [94a0fde]
- 💄 更新帮助文档翻译 [a630311]
- ♻️ 同步修改字典类型的接口字典从shoeType改为shoeCategory [6197c23]
- ⚡ 增加一个configable基类 [a0be043]
- ⚡ 抽离出getToken的方法 [001b373]
- 🎨 对材质和鞋模型详情重构其权限控制的代码 [a138cfe]
- 💄 更新iconfont文件 [e3e15ab]
- 🎨 材质详情的编辑和浏览模式切换功能；重构材质模型详情代码； [0f9780f]
- 🎨 鞋模型详情修改为编辑和浏览模式；重构整个详情的代码结构； [cb106c9]
- 💄 调整帮助中心文档排版 [f1eee50]
- ♻️ 根据设计稿，调整上传鞋模型的表单结构，添加notes字段 [2818dc8]
- ♻️ 根据设计稿，调整上传材质的表单结构，添加notes字段 [0a1f7b6]
- ♻️ 重构列表部分store逻辑，增加更精准的搜索逻辑的处理 [9eda047]
- 💄 修改导航到主页按钮的样式 [59055ea]
- 🎨 重构新手教程代码 [7ff6e7d]
- 💄 修改搜索框样式 [1aed46b]
- ⚡ 清空搜索时只调一次接口 [ee57bf9]
- 💄 修复qt消息中心样式问题 [5e73f42]
- 💄 搜索栏调整样式 [e1b96a3]
- ⚡ 抽离toggle-from方法 [901dba1]

### Removed

- 🔇 去掉不必要的console.log [52b20c0]

### Fixed

- 🐛 CLOSE bug#2273 修复搜索结果文案错误问题 [ab6b430]
- 🐛 增加im图片收取的功能 [bb9d742]
- 🐛 CLOSE bug#2265 将搜索类目的color改为面料列表限定显示 [3259c52]
- 🐛 修复协同空间管理列表在退出登录后用另一个账号登录再查看时，会遗留上一个人的协同空间的问题 [753b633]
- 🐛 修复材质详情中轮播图中，以往上传没有鞋头贴图的会显示空白图片问题 [99b2c19]
- 🐛 修复筛选后右键可以操作的问题、筛选后让导航栏有提示当前正在筛选 [4df4a6d]
- 🐛 修复历史信息显示错误的bug [920f789]
- 🐛 解决合并冲突 [131377d]
- 🐛 修复选中错误导致的复制，以及权限判读错乱等bug [6b61e47]
- 🐛 修复上传路径不对以及配置错误的bug [1ef3166]
- 🐛 上传到OSS时，都不需要带后缀扩展名 [a4122d2]
- 🐛 修复消息重复，或者接受消息报错的bug [6506e27]
- 🐛 修复控制台对筛选内容报错的问题 [6fab313]
- 🐛 修复上传缺少body的bug [3b45f48]
- 🐛 修复im不能收消息的bug [7157f67]
- 🐛 修复历史消息不能加载的bug [7d0c492]
- 🐛 渲染页搜索类目增加、列表页搜索可选类目随appType变更 [14abbe9]
- 🐛 面料搜索去掉值的空格 [a53d0cc]
- 🐛 CLOSE bug#2243 [9c7c763]
- 🐛 修复筛选模型类型后刷新页面后，类型变为数字的bug [0218533]
- 🐛 临时修复getParams缺少参数的bug [133d142]
- 🐛 修复调用  导致报错问题 [0200581]
- 🐛 修复thenable自己递归自己的bug [d58bf7e]
- 🐛 修复列表页拖拽创建快捷方式失败的bug [503b361]
- 🐛 修复关闭更改面料类别后，关闭面料详情弹框时报错 [7c14901]
- 🐛 修复回到主页按钮点击没反应问题 [30a6c5f]
- 🐛 修复筛选时变更type不会调用筛选的接口的bug [9ff2db5]
- 🐛 优化oss getParams判断，避免缺乏后缀的bug [d605749]
- 🐛 修复date系列的方法，避免闰秒这种尴尬情况 [56fa042]
- 🐛 修复帮助中心图片签名错误的bug，现在帮助中心的图片不会走签名 [0f03e1d]
- 🐛 解决合并冲突 [7dd82fe]
- 🐛 修复SearchBar 缺少初始化的keyword的bug [826d03e]
- 🐛 解决合并冲突 [fb4f487]
- 🐛 增加lf2br lf2p两个过滤器 [8c2c15e]
- 🐛 修复列表页调取错点击方法的bug [6b6bdd9]
- 🐛 修复没有 create board 的角色加载create board 时 报错的bug [1cdf2ca]
- 🐛 修复下载样品单due date默认填写了1970/01/01的bug [a339c6f]
- 🐛 修复签名开关不生效的bug [a240671]
- 🐛 修复部分接口没传递groupAppId [7435f99]
- 🐛 api配置上添加默认的groupAppId [bb24d5c]

### Miscellaneous

-  Merge branch &#x27;onion&#x27; into 1.5.0 [55a37ce]
-  Merge branch &#x27;dannny&#x27; into 1.5.0 [8e86d31]
-  Merge branch &#x27;1.5.0&#x27; of https://gitlab.4dshoetech.com/front-end/demon-home into 1.5.0 [b31b8ae]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [d8880ad]
-  Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into stephen [553c46d]
-  Merge branch &#x27;onion&#x27; into 1.5.0 [398ab7b]
- 📝 增加筛选结果为空的提示、修改3D虚拟样品申请的翻译 [d80ac26]
-  Merge branch &#x27;dannny&#x27; into 1.5.0 [a4c65cc]
- 🚧 调整IM样式及部分交互 [bf9dca4]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [f63d891]
-  Merge branch &#x27;onion&#x27; into 1.5.0 [7d9f336]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [b3ceaa1]
-  Merge branch &#x27;onion&#x27; into 1.5.0 [8e068a0]
-  Merge branch &#x27;dannny&#x27; into 1.5.0 [36eb57f]
-  Merge branch &#x27;onion&#x27; into 1.5.0 [27cc475]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [fa1c69d]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [d4c5156]
-  Merge branch &#x27;stephen&#x27; into 1.5.0 [3216e8b]
-  Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into onion [e644a34]
-  Merge branch &#x27;1.5.0&#x27; into dannny [505636e]
-  Update Dockerfile [812ad38]
-  Merge branch &#x27;1.5.0&#x27; into dannny [4ba25fa]
- 🚧 添加im页面 [fcd6039]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [326b21a]
- 🚧 IM相关组件 [81d7acc]
-  Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into stephen [6cb3068]
-  Merge branch &#x27;1.5.0&#x27; into dannny [2460864]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [c82eb8a]
- 🚧 增加im以及相关测试页面 [f0ffe02]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into stephen [ff8545e]
-  Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into stephen [1beca84]
- 🔀 解决合并冲突 [dd2471e]
-  Merge branch &#x27;1.5.0&#x27; into dannny [d8114b7]
-  Merge branch &#x27;dannny&#x27; into 1.5.0 [6d786d6]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [3f35e1d]
- 📝 增加一些文档 [12be6ca]
- 📝 添加ItemSelector的部分注释 [58b69e0]
-  Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into stephen [5a68c4a]
-  Merge branch &#x27;1.4.0&#x27; into 1.5.0 [5e5630f]
-  Merge branch &#x27;1.4.0&#x27; into 1.5.0 [ed2ffd7]
- 🔀 Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into onion [5852f2e]
-  Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into onion [468f320]
-  Merge branch &#x27;1.4.0&#x27; into 1.5.0 [50d0f50]
-  Merge branch &#x27;1.4.0&#x27; into 1.5.0 [9133b6c]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [f0f85c9]
-  Merge branch &#x27;1.4.0&#x27; into 1.5.0 [cbb37c3]
-  Merge branch &#x27;onion&#x27; into 1.5.0 [bee17b1]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [1f31e07]
-  Merge branch &#x27;1.5.0&#x27; into dannny [0369579]
-  Merge branch &#x27;onion&#x27; into 1.5.0 [84bc9c9]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [eaf0d11]
-  Merge branch &#x27;1.4.0&#x27; into 1.5.0 [2a8d1fb]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [8179b03]
-  Merge branch &#x27;1.4.0&#x27; into 1.5.0 [f5ce041]
-  Merge remote-tracking branch &#x27;origin/1.4.0&#x27; into 1.5.0 [a563ae9]
-  Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into onion [a451288]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [a0379ee]


<a name="1.5.0-beta.21"></a>
## 1.5.0-beta.21 (2019-12-26)

### Added

- ✨ 增加getImageDemension方法 [daf7332]
- ✨ load-image方法支持blob [5ef6bb9]

### Changed

- ♻️ 整理所有缩放相关的工具以及组件的逻辑，统一输入 [375ae23]

### Fixed

- 🐛 增加im图片收取的功能 [bb9d742]

### Miscellaneous

-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [d8880ad]


<a name="1.5.0-beta.20"></a>
## 1.5.0-beta.20 (2019-12-26)

### Added

- ✨ 创建虚拟账号时增加发送协同空间图片的可选项 [3732b1a]

### Fixed

- 🐛 CLOSE bug#2265 将搜索类目的color改为面料列表限定显示 [3259c52]
- 🐛 修复协同空间管理列表在退出登录后用另一个账号登录再查看时，会遗留上一个人的协同空间的问题 [753b633]


<a name="1.5.0-beta.19"></a>
## 1.5.0-beta.19 (2019-12-26)

### Changed

- 💄 鞋款详情页面，材质编号的由 Material Number 改成Platform Material Code [04b067b]
- ♻️ 上传详情和编辑详情页备注长度由254改为200 [8cfbdbf]

### Fixed

- 🐛 修复材质详情中轮播图中，以往上传没有鞋头贴图的会显示空白图片问题 [99b2c19]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into stephen [553c46d]


<a name="1.5.0-beta.18"></a>
## 1.5.0-beta.18 (2019-12-26)

### Fixed

- 🐛 修复筛选后右键可以操作的问题、筛选后让导航栏有提示当前正在筛选 [4df4a6d]

### Miscellaneous

-  Merge branch &#x27;onion&#x27; into 1.5.0 [398ab7b]
- 📝 增加筛选结果为空的提示、修改3D虚拟样品申请的翻译 [d80ac26]


<a name="1.5.0-beta.17"></a>
## 1.5.0-beta.17 (2019-12-26)

### Added

- ✨ 增加im未读数的处理 [0e0d340]

### Changed

- 💄 history增加相对定位的容器 [12e0274]

### Fixed

- 🐛 修复历史信息显示错误的bug [920f789]
- 🐛 解决合并冲突 [131377d]

### Miscellaneous

- 🚧 调整IM样式及部分交互 [bf9dca4]


<a name="1.5.0-beta.16"></a>
## 1.5.0-beta.16 (2019-12-26)

### Fixed

- 🐛 修复选中错误导致的复制，以及权限判读错乱等bug [6b61e47]


<a name="1.5.0-beta.15"></a>
## 1.5.0-beta.15 (2019-12-26)

### Changed

- 🔧 增加一个VUE_APP_REMOTE_DOMAIN的配置 [b687473]

### Fixed

- 🐛 修复上传路径不对以及配置错误的bug [1ef3166]
- 🐛 上传到OSS时，都不需要带后缀扩展名 [a4122d2]
- 🐛 修复控制台对筛选内容报错的问题 [6fab313]

### Miscellaneous

-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [f63d891]
-  Merge branch &#x27;onion&#x27; into 1.5.0 [7d9f336]


<a name="1.5.0-beta.14"></a>
## 1.5.0-beta.14 (2019-12-26)

### Fixed

- 🐛 修复消息重复，或者接受消息报错的bug [6506e27]


<a name="1.5.0-beta.13"></a>
## 1.5.0-beta.13 (2019-12-26)

### Added

- 👷‍♂️ bump命令增加默认的release [b9688c7]

### Fixed

- 🐛 修复上传缺少body的bug [3b45f48]


<a name="1.5.0-beta.12"></a>
## 1.5.0-beta.12 (2019-12-25)

### Fixed

- 🐛 修复im不能收消息的bug [7157f67]
- 🐛 修复历史消息不能加载的bug [7d0c492]
- 🐛 CLOSE bug#2243 [9c7c763]

### Miscellaneous

-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [b3ceaa1]


<a name="1.5.0-beta.11"></a>
## 1.5.0-beta.11 (2019-12-25)

### Added

- ✨ IM功能&amp;分享鞋款到IM [0c910f9]

### Changed

- 💄 更新帮助文档翻译 [a630311]

### Fixed

- 🐛 渲染页搜索类目增加、列表页搜索可选类目随appType变更 [14abbe9]
- 🐛 面料搜索去掉值的空格 [a53d0cc]

### Miscellaneous

-  Merge branch &#x27;onion&#x27; into 1.5.0 [8e068a0]
-  Merge branch &#x27;dannny&#x27; into 1.5.0 [36eb57f]
-  Merge branch &#x27;1.5.0&#x27; into dannny [505636e]
-  Merge branch &#x27;1.5.0&#x27; into dannny [4ba25fa]
- 🚧 添加im页面 [fcd6039]
-  Merge branch &#x27;1.5.0&#x27; into dannny [2460864]
-  Merge branch &#x27;1.5.0&#x27; into dannny [d8114b7]


<a name="1.5.0-beta.10"></a>
## 1.5.0-beta.10 (2019-12-25)

### Added

- ✨ 给hookErrorHandler去除mounted接错功能，增加默认的错误处理（加一层报错的图片和提示） [e3ad806]

### Fixed

- 🐛 修复筛选模型类型后刷新页面后，类型变为数字的bug [0218533]

### Miscellaneous

-  Merge branch &#x27;onion&#x27; into 1.5.0 [27cc475]
-  Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into onion [e644a34]


<a name="1.5.0-beta.9"></a>
## 1.5.0-beta.9 (2019-12-25)

### Added

- ✨ im 发送图片以及历史消息 [eb99505]
- ✨ 增加animate和easing模块 [90bb77d]

### Fixed

- 🐛 临时修复getParams缺少参数的bug [133d142]
- 🐛 修复调用  导致报错问题 [0200581]

### Miscellaneous

-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [fa1c69d]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [d4c5156]
-  Merge branch &#x27;stephen&#x27; into 1.5.0 [3216e8b]
-  Update Dockerfile [812ad38]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [326b21a]
- 🚧 IM相关组件 [81d7acc]


<a name="1.5.0-beta.8"></a>
## 1.5.0-beta.8 (2019-12-24)

### Added

- ✨ 增加retryable工具 [2724cde]
- ✨ 增加findRight以及findIndexRight两个工具 [7975748]
- ✨ 路由增加可配置的是否需要登录的开关 [57eb320]
- ✨ 增加extract工具 [7581d0b]
- ✨ 上传材质页面添加鞋头部贴材质效果图 [211c27a]
- ✨ 给hookErrorHandler增加捕获mounted时期的bug的功能，并增加errorBubble选项，当为true时错误会往父组件冒泡，否则不会 [f18fefa]
- ✨ 对接列表页筛选接口 [3b7e640]
- ✨ 增加thenable方法 [0991ee6]
- ✨ 增加方法切片方法 [e7afb97]
- ✨ 增加一个is-image的判断方法 [3176252]
- ✨ 整合上传的方法，并且整理getParams的逻辑 [ca1e5ff]
- ✨ 增加一个is-data-url的方法 [622acfa]
- ✨ toggle-from增加可选的第四参数，用于处理如何插入的问题 [76f86a9]
- ✨ remove方法增加返回值，返回删除的index [7ed2493]
- ✨ 抽离出get-ext方法并且增加一些关于二进制的转换方法 [0ff0012]
- ✨ 增加一个get-ext方法 [80d4186]
- ✨ 增加一个mima2ext的方法 [952ff4c]
- ✨ 增加hookErrorHandler，捕捉钩子内未处理的错误，目前仅用于created上，理论上可以放到其他钩子 [4c7c3b7]
- ✨ 把筛选涉及的参数挂上url [82402de]
- ✨ 新增列表页的筛选功能，等待接口给出 [d51df79]
- ✨ 新增列表页的筛选功能，等待接口给出 [599b19c]

### Changed

- 🎨 修改项目中所有的调用D4的文件，调整调用的方法 [046ee89]
- ⚡ 优化uploadToOSS的blob类型判断 [aa1b73d]
- ♻️ 详情模块把字典类型的字典把英文名字显示出来 [2a4b54e]
- 💄 更改筛选的图标 [e0df810]
- ⚡ D4变更，另外把2d部分拆成单独的文件，为web-worker做准备 [94a0fde]
- ♻️ 同步修改字典类型的接口字典从shoeType改为shoeCategory [6197c23]
- ⚡ 增加一个configable基类 [a0be043]
- ⚡ 抽离出getToken的方法 [001b373]

### Fixed

- 🐛 修复thenable自己递归自己的bug [d58bf7e]
- 🐛 修复列表页拖拽创建快捷方式失败的bug [503b361]
- 🐛 修复关闭更改面料类别后，关闭面料详情弹框时报错 [7c14901]
- 🐛 修复回到主页按钮点击没反应问题 [30a6c5f]
- 🐛 修复筛选时变更type不会调用筛选的接口的bug [9ff2db5]
- 🐛 优化oss getParams判断，避免缺乏后缀的bug [d605749]
- 🐛 修复date系列的方法，避免闰秒这种尴尬情况 [56fa042]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into stephen [6cb3068]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [c82eb8a]
- 🚧 增加im以及相关测试页面 [f0ffe02]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into stephen [ff8545e]
-  Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into stephen [1beca84]
- 🔀 解决合并冲突 [dd2471e]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [3f35e1d]
- 📝 增加一些文档 [12be6ca]
- 📝 添加ItemSelector的部分注释 [58b69e0]
- 🔀 Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into onion [5852f2e]
-  Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into onion [468f320]


<a name="1.5.0-beta.7"></a>
## 1.5.0-beta.7 (2019-12-24)

### Added

- ✨ 更新IM视图 [99afb7b]
- ✨ 修改帮助中心feedback交互 [5171b32]
- ✨ 上传本地印花图片到oss [5b32e12]

### Changed

- 💄 更新iconfont文件 [e3e15ab]
- 💄 调整帮助中心文档排版 [f1eee50]
- 🎨 重构新手教程代码 [7ff6e7d]

### Fixed

- 🐛 修复帮助中心图片签名错误的bug，现在帮助中心的图片不会走签名 [0f03e1d]
- 🐛 解决合并冲突 [7dd82fe]
- 🐛 解决合并冲突 [fb4f487]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.5.0 [6d786d6]
-  Merge branch &#x27;1.5.0&#x27; into dannny [0369579]


<a name="1.5.0-beta.6"></a>
## 1.5.0-beta.6 (2019-12-23)

### Added

- 🔊 增加详情弹出框错误时候的错误提醒 [1b98fc8]
- ✨ 拖拽和右键支持对多个文件新增快捷方式 [0f572fe]

### Changed

- 🎨 对材质和鞋模型详情重构其权限控制的代码 [a138cfe]
- 🎨 材质详情的编辑和浏览模式切换功能；重构材质模型详情代码； [0f9780f]
- 🎨 鞋模型详情修改为编辑和浏览模式；重构整个详情的代码结构； [cb106c9]
- ♻️ 根据设计稿，调整上传鞋模型的表单结构，添加notes字段 [2818dc8]
- ♻️ 根据设计稿，调整上传材质的表单结构，添加notes字段 [0a1f7b6]
- ♻️ 重构列表部分store逻辑，增加更精准的搜索逻辑的处理 [9eda047]
- 💄 修改导航到主页按钮的样式 [59055ea]
- 💄 修改搜索框样式 [1aed46b]
- ⚡ 清空搜索时只调一次接口 [ee57bf9]
- 💄 修复qt消息中心样式问题 [5e73f42]
- 💄 搜索栏调整样式 [e1b96a3]
- ⚡ 抽离toggle-from方法 [901dba1]

### Removed

- 🔇 去掉不必要的console.log [52b20c0]

### Fixed

- 🐛 修复SearchBar 缺少初始化的keyword的bug [826d03e]
- 🐛 增加lf2br lf2p两个过滤器 [8c2c15e]
- 🐛 修复列表页调取错点击方法的bug [6b6bdd9]
- 🐛 修复没有 create board 的角色加载create board 时 报错的bug [1cdf2ca]
- 🐛 修复下载样品单due date默认填写了1970/01/01的bug [a339c6f]
- 🐛 修复签名开关不生效的bug [a240671]
- 🐛 修复部分接口没传递groupAppId [7435f99]
- 🐛 api配置上添加默认的groupAppId [bb24d5c]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into stephen [5a68c4a]
-  Merge branch &#x27;1.4.0&#x27; into 1.5.0 [5e5630f]
-  Merge branch &#x27;1.4.0&#x27; into 1.5.0 [ed2ffd7]
-  Merge branch &#x27;1.4.0&#x27; into 1.5.0 [50d0f50]
-  Merge branch &#x27;1.4.0&#x27; into 1.5.0 [9133b6c]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [f0f85c9]
-  Merge branch &#x27;1.4.0&#x27; into 1.5.0 [cbb37c3]
-  Merge branch &#x27;onion&#x27; into 1.5.0 [bee17b1]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [1f31e07]
-  Merge branch &#x27;onion&#x27; into 1.5.0 [84bc9c9]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [eaf0d11]
-  Merge branch &#x27;1.4.0&#x27; into 1.5.0 [2a8d1fb]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [8179b03]
-  Merge branch &#x27;1.4.0&#x27; into 1.5.0 [f5ce041]
-  Merge remote-tracking branch &#x27;origin/1.4.0&#x27; into 1.5.0 [a563ae9]
-  Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into onion [a451288]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [a0379ee]


<a name="1.5.0-beta.5"></a>
## 1.5.0-beta.5 (2019-12-17)

### Fixed

- 🐛 修复列表页调取错点击方法的bug [6b6bdd9]

### Miscellaneous

-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [1f31e07]


<a name="1.5.0-beta.4"></a>
## 1.5.0-beta.4 (2019-12-17)

### Added

- ✨ 拖拽和右键支持对多个文件新增快捷方式 [0f572fe]

### Changed

- 💄 修复qt消息中心样式问题 [5e73f42]
- 💄 搜索栏调整样式 [e1b96a3]

### Miscellaneous

-  Merge branch &#x27;onion&#x27; into 1.5.0 [84bc9c9]
-  Merge remote-tracking branch &#x27;origin/1.5.0&#x27; into onion [a451288]


<a name="1.5.0-beta.3"></a>
## 1.5.0-beta.3 (2019-12-17)

### Added

- 🔊 增加详情弹出框错误时候的错误提醒 [1b98fc8]

### Changed

- ⚡ 抽离toggle-from方法 [901dba1]

### Removed

- 🔇 去掉不必要的console.log [52b20c0]

### Fixed

- 🐛 修复没有 create board 的角色加载create board 时 报错的bug [1cdf2ca]
- 🐛 修复下载样品单due date默认填写了1970/01/01的bug [a339c6f]
- 🐛 修复签名开关不生效的bug [a240671]
- 🐛 修复部分接口没传递groupAppId [7435f99]
- 🐛 api配置上添加默认的groupAppId [bb24d5c]

### Miscellaneous

-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [eaf0d11]
-  Merge branch &#x27;1.4.0&#x27; into 1.5.0 [2a8d1fb]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [8179b03]
-  Merge branch &#x27;1.4.0&#x27; into 1.5.0 [f5ce041]
-  Merge remote-tracking branch &#x27;origin/1.4.0&#x27; into 1.5.0 [a563ae9]
-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [a0379ee]


<a name="1.5.0-beta.2"></a>
## 1.5.0-beta.2 (2019-12-16)

### Fixed

- 🐛 修复没有 create board 的角色加载create board 时 报错的bug [1cdf2ca]
- 🐛 修复下载样品单due date默认填写了1970/01/01的bug [a339c6f]


<a name="1.5.0-beta.1"></a>
## 1.5.0-beta.1 (2019-12-16)

### Changed

- ⚡ 抽离toggle-from方法 [901dba1]

### Removed

- 🔇 去掉不必要的console.log [52b20c0]

### Fixed

- 🐛 修复签名开关不生效的bug [a240671]


<a name="1.5.0-beta.0"></a>
## 1.5.0-beta.0 (2019-12-16)

### Changed

- 💄 新手指引最低分辨率设置为1080P [9f9ab37]
- ♻️ 将列表选种的方法抽离到PanelList内部，方便store重构 [40f86b7]
- 💄 将新手教程最低分辨率设置为1920*1080 [4eb4d2e]
- 💄 压缩新手指引模块的大图 [3f0b42d]

### Fixed

- 🐛 修复部分接口没传递groupAppId [7435f99]
- 🐛 api配置上添加默认的groupAppId [bb24d5c]

### Miscellaneous

-  Merge branch &#x27;1.5.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.0 [a0379ee]
-  Merge branch &#x27;1.4.0&#x27; into 1.5.0 [63e19de]
-  Merge branch &#x27;dannny&#x27; into 1.4.0 [b1874e6]
-  Merge branch &#x27;dannny&#x27; into 1.4.0 [c020914]


<a name="1.4.1"></a>
## 1.4.1 (2019-12-27)

### Added

- ✨ 更新d4增加钻石类型面料 [f2a6f5e]
- ✨ 增加oss是否加密的标识符 [4ec820b]

### Changed

- 🔧 去掉uat和prod对代理路径的无必要的配置 [75950d0]
- ⏪ 替换d4的操作修改 [3cd3baa]

### Removed

- 🔥 去除rancher master分支的deploy [8e67497]

### Fixed

- 🐛 修复保存图标缺失的bug [0d9a170]
- 🐛 修复上传没有传递 material type的bug [b85628d]
- 🐛 修复material info的一些报错以及放大可能失效的bug [4027f9b]
- 🐛 修复panel list里获取relateId接口传入0的bug [97905a7]
- 🐛 临时去掉debounce避免跨组件使用的时候导致某些值缺失的问题 [372abe0]
- 🐛 修复create board顶级目录不能拖动的bug [bb5d57e]
- 🐛 修复OSS_SIGN报错的bug [455915c]
- 🐛 修复上传时因传递id为空参数时，导致无法创建文件夹问题 [9aca1e7]
- 🐛 修复OSS_SIGN报错的bug [08d6591]
- 🐛 修复合并上传材质页面错误导致的问题 [75f13ad]

### Miscellaneous

- 🔀 合并分支 [dff9ab9]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [c785356]
-  Update .rancher-pipeline.yml file [789dade]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [480e2af]
- 🔀 合并分支 [9a6ba96]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [a1150d7]
-  Update .rancher-pipeline.yml file [1e59f5b]
-  Merge remote-tracking branch &#x27;origin/uat&#x27; [a8ce55b]
-  Merge branch &#x27;1.2.0&#x27; [d7b0242]
-  Merge branch &#x27;1.2.0&#x27; [7dfafd6]
-  Merge branch &#x27;1.2.0&#x27; [c8b1d05]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [4936e30]
-  Update .rancher-pipeline.yml file [9fce6c3]


<a name="1.4.0"></a>
## 1.4.0 (2019-12-27)

### Added

- ✨ 更新d4增加钻石类型面料 [f2a6f5e]
- ✨ 增加oss是否加密的标识符 [4ec820b]

### Changed

- 🔧 去掉uat和prod对代理路径的无必要的配置 [75950d0]
- ⏪ 替换d4的操作修改 [3cd3baa]

### Fixed

- 🐛 修复上传没有传递 material type的bug [b85628d]
- 🐛 修复material info的一些报错以及放大可能失效的bug [4027f9b]
- 🐛 修复panel list里获取relateId接口传入0的bug [97905a7]
- 🐛 临时去掉debounce避免跨组件使用的时候导致某些值缺失的问题 [372abe0]
- 🐛 修复create board顶级目录不能拖动的bug [bb5d57e]
- 🐛 修复OSS_SIGN报错的bug [455915c]
- 🐛 修复上传时因传递id为空参数时，导致无法创建文件夹问题 [9aca1e7]
- 🐛 修复OSS_SIGN报错的bug [08d6591]
- 🐛 修复合并上传材质页面错误导致的问题 [75f13ad]

### Miscellaneous

- 🔀 合并分支 [dff9ab9]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [c785356]
-  Update .rancher-pipeline.yml file [789dade]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [480e2af]
- 🔀 合并分支 [9a6ba96]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [a1150d7]
-  Update .rancher-pipeline.yml file [1e59f5b]
-  Merge remote-tracking branch &#x27;origin/uat&#x27; [a8ce55b]
-  Merge branch &#x27;1.2.0&#x27; [d7b0242]
-  Merge branch &#x27;1.2.0&#x27; [7dfafd6]
-  Merge branch &#x27;1.2.0&#x27; [c8b1d05]
-  Merge branch &#x27;master&#x27; of gitlab.4dshoetech.com:front-end/demon-home [4936e30]
-  Update .rancher-pipeline.yml file [9fce6c3]


<a name="1.4.0-rc.5"></a>
## 1.4.0-rc.5 (2019-12-20)

### Fixed

- 🐛 修复默认鞋款图片会走签名操作的bug [0541413]

### Miscellaneous

-  Merge branch &#x27;1.4.0&#x27; into uat [b9e1941]
-  Merge branch &#x27;1.4.0&#x27; of https://gitlab.4dshoetech.com/front-end/demon-home into 1.4.0 [930d431]


<a name="1.4.0-rc.4"></a>
## 1.4.0-rc.4 (2019-12-19)

### Fixed

- 🐛 修复虚拟账号create board 报错的bug [bc029f6]
- 🐛 修复渲染页点击Workspace切换Material列表退出登录的bug [d6fa684]

### Miscellaneous

-  Merge branch &#x27;1.4.0&#x27; into uat [593c89f]


<a name="1.4.0-rc.3"></a>
## 1.4.0-rc.3 (2019-12-17)

### Changed

- 🔧 用CICD_GIT_BRANCH代替CICD_TAG作为镜像的名字 [5f5eab1]

### Fixed

- 🐛 修复复制数据异常的bug [c88bec9]
- 🐛 修复邮件备注没生效的问题 [9d22263]
- 🐛 修复邀请时报错后仍在加载的问题 [2852e19]
- 🐛 修复部分接口没传递groupAppId [dfdf6f7]

### Miscellaneous

-  Merge branch &#x27;1.4.0&#x27; into uat [69fc3c6]
-  Merge branch &#x27;1.4.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.4.0 [c3e06ff]
-  Merge branch &#x27;1.4.0&#x27; into uat [46e3234]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [5abd3d8]
-  Merge branch &#x27;1.4.0&#x27; into uat [c09054c]
-  Update .rancher-pipeline.yml file [cebccf9]


<a name="1.4.0-rc.2"></a>
## 1.4.0-rc.2 (2019-12-17)

### Changed

- 🔧 uat开启签名 [8ae6437]

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Fixed

- 🐛 修复签名开关不生效的bug [0993202]

### Miscellaneous

-  Merge branch &#x27;1.4.0&#x27; into uat [eab3926]
-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.4.0-rc.1"></a>
## 1.4.0-rc.1 (2019-12-17)

### Added

- 👷‍♂️ ci增加通知，并暂时只允许test环境的changelog以及禅道通知 [1e13e83]

### Changed

- 🎨 优化新手教程部分代码 [dd81253]

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Fixed

- 🐛 修复渲染页视图的部分错误 [167fe2e]
- 🐛 修复vscode eslint更新后配置不兼容的情况 [63b1083]
- 🐛 将首页列表-&gt;鞋款图片字段为空字符串时显示默认鞋款 [cf73320]
- 🐛 修复没有 create board 的角色加载create board 时 报错的bug [10bce79]
- 🐛 将首页列表-&gt;鞋款图片字段为空字符串时显示默认鞋款 [4a66e72]
- 🐛 CLOSE bug#2105 修复Sidebar状态没有fileList显示内容同步的bug [18f5c0b]

### Miscellaneous

-  Merge branch &#x27;1.4.0&#x27; into uat [3b2f2e6]
-  Merge branch &#x27;1.4.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.4.0 [2cf2ea1]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [2785e50]
- 🔀 合并分支 [3b510ea]
-  Merge branch &#x27;1.4.0&#x27; of https://gitlab.4dshoetech.com/front-end/demon-home into 1.4.0 [f7a5475]
-  Merge branch &#x27;dannny&#x27; into 1.4.0 [f982daa]
-  Update .rancher-pipeline.yml file [aa545dc]
- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.4.0-beta.35"></a>
## 1.4.0-beta.35 (2019-12-14)

### Changed

- 💄 新手指引模块现在兼容不同分辨率的屏幕 [cf19f73]
- 💄 新手指引模块现在兼容不同分辨率的屏幕 [d849843]
- 💄 搜索框的类目选择增加圆角 [31f0047]
- 💄 调整新手教程样式 [3e09502]
- 💄 新手教程兼容不同分辨率屏幕样式调整 [da7bd2f]
- 🎨 优化首页图片显示代码 [d13598a]

### Fixed

- 🐛 面料详情加载增加loading效果 [7f1fff6]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.4.0 [a2258e7]
-  Merge branch &#x27;onion&#x27; into 1.4.0 [1a57fab]
-  Merge branch &#x27;1.4.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.4.0 [f7282b4]
-  Merge branch &#x27;dannny&#x27; into 1.4.0 [e1f020c]


<a name="1.4.0-beta.34"></a>
## 1.4.0-beta.34 (2019-12-13)

### Fixed

- 🐛 CLOSE bug#867 更改弹框关闭刷新列表文件 [e67a783]
- 🐛 修复渲染页切换历史没有刷新的bug [c4fd504]

### Miscellaneous

-  Merge branch &#x27;onion&#x27; into 1.4.0 [70a26f4]
-  Merge branch &#x27;1.4.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.4.0 [b9ec214]


<a name="1.4.0-beta.33"></a>
## 1.4.0-beta.33 (2019-12-13)

### Added

- ✨ 调整禁止浏览器拖拽默认行为的方法；在上传页面只有在拖拽有效区域内才拖拽的效果 [9c3ae08]

### Changed

- ♻️ 将跳转到根列表页面的路由，统一跳转到根目录（/）下 [165c9eb]

### Fixed

- 🐛 修复没有使用concatProps的转跳路由会报错的bug [d7883f9]
- 🐛 修复导航条多出ENTRY的节点的bug [03e78bb]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.4.0&#x27; into stephen [99c3885]
-  Merge branch &#x27;1.4.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.4.0 [24156b9]


<a name="1.4.0-beta.32"></a>
## 1.4.0-beta.32 (2019-12-13)

### Added

- ✨ 上传到OSS中必须带上文件扩展名 [8a7740b]

### Changed

- ♻️ 删除材质详情中重复的表单内容 [d23bdfb]

### Fixed

- 🐛 修复虚拟账号调整到默认列表页面时，不是跳转到workspace空间页面 [119f612]
- 🐛 修复上传模型时，本地上传图片后再删除，实际代码没有删除的问题 [01f211b]

### Miscellaneous

-  Merge branch &#x27;stephen&#x27; into 1.4.0 [727a543]


<a name="1.4.0-beta.31"></a>
## 1.4.0-beta.31 (2019-12-13)

### Fixed

- 🐛 变更保存另存为的提示文本、让另存为不弹出详情弹框 [7c23451]
- 🐛 再次修复多人邀请失败的bug [7976238]

### Miscellaneous

-  Merge branch &#x27;onion&#x27; into 1.4.0 [ce3ffa9]


<a name="1.4.0-beta.30"></a>
## 1.4.0-beta.30 (2019-12-13)

### Fixed

- 🐛 CLOSE bug#2069 [716ad96]
- 🐛 修复邀请或创建多个账号时报错的问题 [b2207d3]
- 🐛 修复工作面板刷新功能无效的bug [7d78075]
- 🐛 CLOSE bug#2088 修复在消息中心点击了被删除了的鞋款的评论后先跳转后报错的bug [47dbf68]

### Miscellaneous

-  Merge branch &#x27;onion&#x27; into 1.4.0 [c656b26]
-  Merge branch &#x27;1.4.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.4.0 [ce47ad9]
-  Merge branch &#x27;onion&#x27; into 1.4.0 [097babe]


<a name="1.4.0-beta.29"></a>
## 1.4.0-beta.29 (2019-12-12)

### Changed

- 💄 更换新手教程两张切图 [3d23131]

### Fixed

- 🐛 修复协同空间管理页admin不能改协同空间名称的问题 [bd6c453]
- 🐛 CLOSE bug#2093 修复消息中心样式错误问题 [6de41df]

### Miscellaneous

-  Merge branch &#x27;1.4.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.4.0 [bf221d2]
-  Merge branch &#x27;onion&#x27; into 1.4.0 [7ca7269]
-  Merge branch &#x27;dannny&#x27; into 1.4.0 [0bc6dc7]


<a name="1.4.0-beta.28"></a>
## 1.4.0-beta.28 (2019-12-12)

### Fixed

- 💚 修复同时发版导致的冲突 [d8f6909]


<a name="1.4.0-beta.27"></a>
## 1.4.0-beta.27 (2019-12-12)

### Fixed

- 🐛 修复赋予权限的弹框的关闭X按钮很难点的bug [c6aaf46]
- 🐛 修复新手教程初始步骤错误的bug [fa69aa1]
- 🐛 CLOSE bug#2055 [50538e8]
- 🐛 CLOSE bug#2054 离开协同空间的翻译文本变更 [e8f4fb9]

### Miscellaneous

-  Merge branch &#x27;onion&#x27; into 1.4.0 [775f0a4]
-  Merge branch &#x27;1.4.0&#x27; of https://gitlab.4dshoetech.com/front-end/demon-home into 1.4.0 [aec1d9b]
-  Merge branch &#x27;dannny&#x27; into 1.4.0 [aa64751]
-  Merge branch &#x27;1.4.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.4.0 [581ec13]


<a name="1.4.0-beta.26"></a>
## 1.4.0-beta.26 (2019-12-12)

### Fixed

- 🐛 CLOSE bug#1903 修改上传无模型鞋款的默认显示样式 [187fa8a]
- 🐛 CLOSE bug#2079 [1d14b71]
- 🐛 CLOSE bug#2070 bug#2080 #2072 #2076 修复渲染页显示隐藏按钮缺失，部分icon没有hover样式的bug，调整新手教程流程。 [267fb7d]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.4.0 [216e21e]


<a name="1.4.0-beta.25"></a>
## 1.4.0-beta.25 (2019-12-12)

### Added

- ✨ 更换邀请的api [2377748]

### Changed

- ♻️ 对鞋模型上传的provide在index页面注入 [8adc045]

### Removed

- 🔥 去掉没必要的文件 [553441a]

### Fixed

- 🐛 修复【渲染页】guest角色无权限打开2D视图 [57cd3d1]

### Miscellaneous

-  Merge branch &#x27;stephen&#x27; into 1.4.0 [6d1794e]
-  Merge branch &#x27;1.4.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.4.0 [8c8b476]


<a name="1.4.0-beta.24"></a>
## 1.4.0-beta.24 (2019-12-12)

### Changed

- 💄 个人中心模块设置最小宽度1200 [02214cf]
- 💄 个人模块账号页面标签按钮显示不全 [437a893]
- 💄 个人中心页面的修改密码的弹窗交互修改 [99b4d5f]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.4.0&#x27; into 1.4.0 [d64596b]


<a name="1.4.0-beta.23"></a>
## 1.4.0-beta.23 (2019-12-12)

### Fixed

- 🐛 修复无法创建虚拟账号的问题 [5b5e7f6]
- 🐛 CLOSE bug#2049 让协同空间创建并关联虚拟账号处的remarks在聚焦在email后才显示 [a15e875]
- 🐛 CLOSE bug#2013 UI变更，让input的报错的换行以单词为单位 [d1a172c]
- 🐛 CLOSE bug#2087 修复复制链接邀请，点击OK后报了邮箱发送失败的问题 [9582608]
- 🐛 CLOSE bug#2082 [d943018]
- 🐛 CLOSE bug#2000 [b6d601b]

### Miscellaneous

-  Merge branch &#x27;1.4.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.4.0 [356951f]


<a name="1.4.0-beta.22"></a>
## 1.4.0-beta.22 (2019-12-12)

### Added

- ✨ 重构的鞋款上传页面，没上传时，不显示列表和效果图区域 [cc6cd2a]

### Changed

- 💄 去掉Ele库cascader组件中指示作用的小三角 [4227779]

### Fixed

- 🐛 修复上传材质中的适用部件（cascader组件）数据结构错误导致无法正确显示的问题 [5c16fbd]
- 🐛 修复上传过程中，也能提交和上传过程中删除文件，显示上传文件数量不对的问题 [b18354f]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.4.0&#x27; into 1.4.0 [015a9a0]


<a name="1.4.0-beta.21"></a>
## 1.4.0-beta.21 (2019-12-12)

### Added

- ✨ 渲染页的搜索增加搜索选项 [44d86f7]

### Changed

- 💄 让消息中心为空时的图居中 [0864c23]

### Fixed

- 🐛 修复列表页搜索时，当输入清空时会调两个接口的问题 [d5a9fdc]

### Miscellaneous

-  Merge branch &#x27;onion&#x27; into 1.4.0 [883880d]


<a name="1.4.0-beta.20"></a>
## 1.4.0-beta.20 (2019-12-12)

### Changed

- 💄 调整新手教程样式 [2aedea8]

### Fixed

- 🐛 修复新手指引部分文案、样式和交互的错误 [f1be8a9]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.4.0 [48d4392]
-  Merge branch &#x27;dannny&#x27; into 1.4.0 [8b5adf3]


<a name="1.4.0-beta.19"></a>
## 1.4.0-beta.19 (2019-12-11)

### Added

- ✨ 让创建新协同空间后先打开弹框，关闭弹框再跳到对应协同空间的列表页 [9d0c7b4]

### Changed

- 💄 UI优化 [99934d8]

### Miscellaneous

-  Merge branch &#x27;onion&#x27; into 1.4.0 [3606e84]


<a name="1.4.0-beta.18"></a>
## 1.4.0-beta.18 (2019-12-11)

### Fixed

- 🐛 修复qt无法取消下载的bug [953e805]

### Miscellaneous

-  Merge branch &#x27;1.4.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.4.0 [fadd6ed]


<a name="1.4.0-beta.17"></a>
## 1.4.0-beta.17 (2019-12-11)

### Fixed

- 🐛 修复上传鞋模型部件时，没有上传到对应oss地址 [2153583]

### Miscellaneous

-  Merge branch &#x27;stephen&#x27; into 1.4.0 [e58bdef]


<a name="1.4.0-beta.16"></a>
## 1.4.0-beta.16 (2019-12-11)

### Added

- ✨ 上传材质的预览图可以用户上传，不用截图的效果 [831999c]

### Changed

- 💄 修复下拉框组件数据为异步时，有时可点击选择范围只有输入框的一段 [66bbc46]
- 💄 修改帮助中心的一些样式 [b935683]
- 💄 对顶部导航条和个人模块中的导航条设置最小宽度1200 [746aacb]
- 💄 个人信息页面中的修改密码流程确认密码模块提示语过长，部分与按键重合 [2b9686e]
- 💄 调整鞋模型详情弹框中创建者固定200宽度的问题 [bbeabe8]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.4.0&#x27; into 1.4.0 [578e414]
-  Merge branch &#x27;stephen&#x27; into 1.4.0 [2ffe77f]
-  Merge branch &#x27;1.4.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.4.0 [01c6a3a]
-  Merge remote-tracking branch &#x27;origin/1.4.0&#x27; into stephen [5eb55c0]


<a name="1.4.0-beta.15"></a>
## 1.4.0-beta.15 (2019-12-11)

### Fixed

- 🐛 修复新手教程部分文字、图案错误的bug [4c04eba]
- 🐛 CLOSE bug#1841 修复协同空间管理，创建者更改名字时若名字太长，更改后显示了新名字，但实际没有保存的问题 [ab27a60]

### Miscellaneous

-  Merge branch &#x27;dannny&#x27; into 1.4.0 [c267aa0]


<a name="1.4.0-beta.14"></a>
## 1.4.0-beta.14 (2019-12-11)

### Fixed

- 🐛 避免qt上 goToInitPage 重复刷新的bug [b2a3a64]
- 🐛 修复qt host off方法报错的bug [08c4926]

### Miscellaneous

-  Merge branch &#x27;1.4.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.4.0 [ce2e5ee]


<a name="1.4.0-beta.13"></a>
## 1.4.0-beta.13 (2019-12-11)

### Added

- ✨ 首页添加新手指引弹窗 [e49ccca]
- ✨ 把列表页的搜索改为change出发而非enter触发 [9ad671c]
- ✨ 上传材质页面添加虚拟鞋模式的页面 [bac65b9]

### Changed

- ♻️ 对鞋模型详情弹框中的创建者和时间布局做调整 [b91fac8]
- 🎨 重构上传鞋模型页面（主要功能已完成，还有一些细节要调整） [3353e49]
- ♻️ 上传材质部分，Supplier Material Code的表单校验改为字母与数字的限制 [790b0ef]
- 🎨 重构鞋模型上传页面的代码 [e087105]
- 🎨 面料适用部件填写样式修改（上传材质和材质详情页面） [d001711]
- 🎨 更新D4文件，修改光照效果 [2aafe12]

### Miscellaneous

- 🔀 解决合并冲突 [d6e5607]
- 🔀 解决合并冲突 [16fe006]
-  Merge remote-tracking branch &#x27;origin/1.4.0&#x27; into stephen [ad7ec3a]
-  Merge branch &#x27;onion&#x27; into 1.4.0 [9a8e0e2]


<a name="1.4.0-beta.12"></a>
## 1.4.0-beta.12 (2019-12-11)

### Fixed

- 🐛 渲染页另存为的路径的根目录调整 [2b7f467]
- 🐛 让渲染也的两个地方跳转去帮助中心的对应页面 [00690e6]
- 🐛 修复创建并关联虚拟账号页面的右上角X有时会返回上页的问题 [16a8d63]


<a name="1.4.0-beta.11"></a>
## 1.4.0-beta.11 (2019-12-11)

### Added

- ✨ 更新d4增加钻石类型面料 [6be62a1]
- ✨ 增加另存为时的重命名功能 [c071cb1]
- ✨ 增加另存为时的重命名功能 [8263785]
- ✨ 重构邀请成员的组件，并用其替换以前的邀请组件 [bccc8f9]
- ✨ 重构邀请成员的组件，并用其替换以前的邀请组件 [ca679f6]
- ✨ 重构邀请成员的组件，并用其替换以前的邀请组件 [e8f75a5]
- ✨ 添加帮助中心新手指引的路径 [6d848ea]
- ✨ 优化ws新建以及删除流程 [5c343e3]
- ➕ 引入vue-reactive-refs [4fc7d03]
- ✨ 帮助中心 [32e6ad8]
- ✨ 添加新手教程-搭配设计功能 [d2a5b94]
- ✨ 增加oss是否加密的标识符 [39f050c]
- ✨ 添加新手教程-协作流程功能 [2d47130]

### Changed

- 💄 渲染页部分交互和UI优化 [e8d006a]
- 💄 快捷方式图标变更 [d9184f6]
- 💄 快捷方式图标变更 [2fe11a4]
- 🎨 改进新手引导html比图片先刷新的问题 [456097e]
- 🎨 优化全局的基础布局 [6e2f123]
- ⚡ 优化帮助中心的交互以及样式 [ddaad44]
- 🔧 去掉uat和prod对代理路径的无必要的配置 [43e1ab9]
- ⏪ 替换d4的操作修改 [eaaf953]

### Removed

- 🔥 去掉旧的新手指引的逻辑 [397ea3e]

### Fixed

- 🐛 CLOSE bug#1999 bug#2011 修复消息中心的删除后下方总数不更新的bug、消息中心底部在pc端的样式问题 [41103ab]
- 🐛 修复创建并邀请虚拟账号时不能输入空格的问题、创建虚拟账号的窗口一点开就创建的问题 [c9f79ea]
- 🐛 修复上传没有传递 material type的bug [d5a33c7]
- 🐛 修复panel list里获取relateId接口传入0的bug [63bace5]
- 🐛 修复material info的一些报错以及放大可能失效的bug [2841a3b]
- 🐛 临时去掉debounce避免跨组件使用的时候导致某些值缺失的问题 [6a95f19]
- 🐛 修复create board顶级目录不能拖动的bug [d7ea36c]
- 🐛 修复OSS_SIGN报错的bug [c01a9e3]
- 🐛 修复OSS_SIGN报错的bug [8d7ec89]

### Miscellaneous

- 📝 变更部分文本 [c800162]
-  Merge branch &#x27;1.4.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.4.0 [65b38d8]
-  Merge branch &#x27;onion&#x27; into 1.4.0 [607ce85]
-  Merge branch &#x27;1.4.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.4.0 [eff48fa]
-  Merge branch &#x27;1.4.0&#x27; of https://gitlab.4dshoetech.com/front-end/demon-home into 1.4.0 [0946a6c]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into 1.4.0 [333284b]
-  Merge branch &#x27;dannny&#x27; into 1.4.0 [fd6ea2f]
-  &#x27;新手引导：测试模型渲染&#x27; [a549a1a]
- 🚧 帮助中心 [150d454]


<a name="1.4.0-rc.0"></a>
## 1.4.0-rc.0 (2019-12-05)

### Removed

- 🔥 uat分支去除自动发布 [2a53b39]

### Fixed

- 🐛 修复禅道changelog对应的bug不对的问题 [128ac30]

### Miscellaneous

- 🔀 合并分支 [bdd6749]
-  Update .rancher-pipeline.yml file [d692ae5]
-  Update .rancher-pipeline.yml file [e5851e1]


<a name="1.4.0-beta.10"></a>
## 1.4.0-beta.10 (2019-12-05)

### Changed

- 🔧 统一测试环境跟开发环境的端口 [01e5ae6]

### Fixed

- 🐛 优化deploy的逻辑避免changelog发错 [696e1e1]

### Miscellaneous

-  Merge branch &#x27;1.4.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.4.0 [7b9e032]
-  Update .rancher-pipeline.yml file [89082c6]
-  Update deployment.yaml [e2a7f4b]
-  Add new file [fcaa3d6]
-  Merge branch &#x27;test&#x27; into 1.4.0 [e0652d6]


<a name="1.4.0-beta.9"></a>
## 1.4.0-beta.9 (2019-12-04)

### Changed

- 🏗️ 去除cli bump命令提交校验避免导致错误 [9165669]
- 🏗️ 去除不必要的precommit钩子 [24da64b]

### Fixed

- 🐛 修复全部已读时顶部红点不会更新的bug [2d32e3f]

### Miscellaneous

-  Merge branch &#x27;1.4.0&#x27; into test [460cae0]
-  Merge branch &#x27;1.4.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.4.0 [b29cbca]
-  Merge branch &#x27;1.4.0&#x27; into test [1748522]
-  Merge branch &#x27;onion&#x27; into 1.4.0 [1d85bae]
-  Merge branch &#x27;1.4.0&#x27; into test [c0d8f99]


<a name="1.4.0-beta.7"></a>
## 1.4.0-beta.7 (2019-12-04)

### Changed

- 🎨 重构消息中心的逻辑 [bcd1709]

### Fixed

- 🐛 给sideslider增加聚焦在mask上时隐藏sideslider的事件 [9188099]

### Miscellaneous

-  Merge branch &#x27;1.4.0&#x27; into test [b871ef0]
-  Merge branch &#x27;onion&#x27; into 1.4.0 [65c32d8]


<a name="1.4.0-beta.6"></a>
## 1.4.0-beta.6 (2019-12-04)

### Changed

- ♻️ 整理router-view-key的逻辑，并且CLOSE bug@1991 [1b7615c]
- ♻️ 抽离profile-nav [c43fb9f]

### Miscellaneous

-  Merge branch &#x27;test&#x27; of gitlab.4dshoetech.com:front-end/demon-home into test [e7f6cf2]
-  Merge branch &#x27;1.4.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.4.0 [46b13a5]


<a name="1.4.0-beta.5"></a>
## 1.4.0-beta.5 (2019-12-04)

### Changed

- 🎨 重构个人中心的代码，添加表单的字段校验 [9119eb3]

### Miscellaneous

-  Merge remote-tracking branch &#x27;origin/1.4.0&#x27; into stephen [ac61f02]


<a name="1.4.0-beta.4"></a>
## 1.4.0-beta.4 (2019-12-04)

### Added

- ✨ 增加原地刷新的功能，并且CLOSE bug#1991 [085d00c]


<a name="1.4.0-beta.3"></a>
## 1.4.0-beta.3 (2019-12-04)

### Added

- 🔊 更新changelog [d0df947]

### Changed

- 🏗️ 修改rancher-pipline.yml并且仅允许tag进行管道 [c96b0e1]
- 🏗️ 修复没有其他修改的时候getChangeMarkdown报错的bug [74efdb3]
- 🔧 去除sftp上传index.html的deploy [e3e5215]
- 🏗️ 优化changelog逻辑以及升级changelog模块 [2b56e08]
- ⚡ 将d4改为外部依赖 [fbc8971]

### Fixed

- 🐛 CLOSE bug#1923 修复在qt缺少评论图片删除按钮的bug [3691da3]
- 🐛 修复禅道通知的指向不对的bug [cc33547]
- 🐛 CLOSE bug#1987 修复ImageViewer参数错误的bug [b8505ea]
- 💚 优化rancher-pipeline.yml [5adc44e]
- 🐛 修复cli不推送tag的bug [2e590de]
- 🐛 修复对remoteOriginUrl的转换对于https协议的错误的问题 [db5b119]
- 🐛 CLOSE bug#1986 运行changelog前先删除changelog [28c2e94]

### Miscellaneous

-  Merge branch &#x27;test&#x27; into 1.4.0 [3cb05e7]
- 🔀 解决冲突 [e02cc4e]
-  Update .rancher-pipeline.yml file [bf06c56]


<a name="1.4.0-beta.0"></a>
## 1.4.0-beta.0 (2019-12-03)

### Added

- ✨ 全局添加APP_ENV的环境参数 [6d5e39d]
- ✨ 为imageviewer增加签名的参数 [22172b4]
- ✨ 增加一个日期的计算工具 [f10ae95]
- ✨ 增加qt下载文件的功能 [bd71560]
- ✨ 增加自动生成vue组件文档的功能 [e938637]
- ✨ 上传材质添加全部的表单校验 [6bbf28c]
- ✨ 上传材质添加全部的表单校验 [ca6b361]
- ✨ 把用到vuex的account文件的地方改成用ORM的User文件 [81fd943]
- ✨ cli模块改为由esm作为register来引入 [3728e1e]
- ✨ 抽离version/index.vue的confirm方法，并且改到model/index.vue上 [320c449]
- ✨ 添加新的上传组件 [1b6e4cb]
- ✨ 给ImageViewer增加新功能，允许其给body增加一个mutationObserver，通过监听元素来增加点击事件，最终达到点击trigger元素打开ImageViewer浏览trigger-target图片列表的效果 [22b3bae]
- ✨ 鞋款上传页面添加正反面功能 [4db66a3]
- ✨ ImageViewer增加缓存功能 [cd88492]
- ✨ 把所有用v-viewer的地方换成用imageViewer [95a905f]
- ✨ D4文件去掉了preventDefault [1d39656]
- ✨ 更新D4文件，添加键盘事件 [74b17b7]
- ✨ 基于photoswiper.js二次封装imageViewer组件 [c1c9ebc]
- ✨ 增加qt切换页面的通知功能 [f69cb2f]
- ✨ 增加qt右键上传的功能 [dd2b7f0]
- ➕ 增加依赖避免报错 [9dfffc9]
- ✨ 增加一个auth以及authMuted错误以及添加回errorHandler [c838041]
- ✨ 去掉没必要的依赖 [87f0a3e]
- ✨ 提取出confirm, prompt, alert, confirmBool四个方法 [2496836]
- ✨ 成功执行恢复操作后，当前渲染界面需自动刷新显示恢复后的版本的内容 [8682c9c]
- ✨ 优化路由钩子上的视图行为，更改到afterEach [287864b]
- ✨ 【上传材质】Material Properties无默认值 [7dc2279]
- ✨ 【上传材质】Material Properties无默认值 [9369f12]
- ✨ 如果没有指定文件上上传时，默认上传到my-upload文件夹中 [622b310]
- ✨ 如果没有指定文件上上传时，默认上传到my-upload文件夹中 [cafd6b1]
- ✨ 让checker2validator支持多个checker [6517dce]
- ✨ CLOSE story#170 [b7e1b84]
- ✨ 增加一个 hasRouterView 的方法用于判断是否存在 对应的 router-view [4487dd2]
- ✨ 调整登录模型的商务合作界面和接口对接 [8d27190]
- ✨ 创建虚拟账号时，选择日期要在有效期内（补充一个文件） [f606a95]
- ✨ 创建虚拟账号时，选择日期要在有效期内 [f311eee]
- ✨ 虚拟账号创建时添加操作提示说明 [0a92c10]
- ✨ qt增加打开参数 [8ad814e]
- ✨ 增加对qt workspace转跳的判断 [aac55a4]
- ✨ CLOSE story#171 [16a8df8]
- ✨ 去除iconfont-map.css 并且通过iconfont.json获取图标信息 [92d5bd2]
- ➕ 增加无用文件的检查工具 [8e8fd5f]
- ✨ qt消息中心改为非弹框页面 [b396445]
- ✨ 增加消息中心qt的入口 [39386ed]
- ✨ 提供qt对于空项目的双击功能 [39acf5e]
- ✨ 将消息中心改成弹框 [f708ebc]
- ✨ 修复并调整签名相关以及viewerjs相关的功能 [2e3851e]
- ✨ qt中 itemOpenclickedCallback 添加一个参数 [cca2265]
- ✨ 虚拟账号添加编辑功能 [cb8bb0c]
- ✨ 增加渲染页资源的签名 [4e6ad8a]
- ✨ 更新iconfont并且修改createboard图标 [db23ca5]
- ✨ 【Account Settings】刷新页面时，页面应该停在当前的table [eaaeb80]
- ✨ 修改登录模块的页脚的链接文本 [a3bc350]
- ✨ 根据不同的场景，发送不同的邮箱验证码 [458c66e]
- ✨ 将generateOssResizeCommand抽离出thumb [ee38fd8]
- ✨ qt添加打开详情页的参数 [40c480a]
- ✨ 把部分组件img换成base-image来适应功能 [6b20fdf]
- ✨ BaseImage增加default参数，并对默认makeThumb方法优化 [077d2cf]
- ✨ thumb方法提供style参数 [f08d036]
- ✨ 优化全局的，使其错误时抛出User Abort [1638f1c]
- ✨ 更新iconfont [9ebf692]
- ✨ 修改虚拟账号的标签功能 [fbfacde]
- ✨ 列表页和面料详情增加放大镜和查看大图功能 [efa229c]
- ✨ 列表页和面料详情增加放大镜和查看大图功能 [d815fbb]
- ✨ 对接协同空间栏排序的接口 [100da27]
- ✨ 对接协同空间栏排序的接口 [e795f6a]
- ✨ 根据新版本，修改上传材质页面 [7626987]
- ✨ 对接虚拟账号标签接口 [94b3ed8]
- ✨ 增加qt路由入口 [b841519]
- ✨ 让fileListViewType可以不用传参进行切换 [f6b46fa]
- ✨ 优化pageFileList部分逻辑，并加入宿主相关的逻辑 [df3531e]
- ✨ 抽离签名以及生成auth的方法，整理代码 [6ea52c1]
- ✨ 增加一个冒泡vue事件的工具 [c7365ee]
- ✨ 增加 一个列表更新的工具 [bc8bf12]
- ✨ Dialog2 增加 type 和 size 还有 compact 三个可选参数 [c1773fb]
- ✨ 更新icon-map [d4e6a2c]
- ✨ 列表页新增查看大图功能 [13d15ec]
- ✨ 对接账号中心页面的接口 [3105014]
- ✨ 对数字类型的字段做了整数和小数点的校验 [8910743]
- ✨ 对接账号中心页面内外部账号的接口 [b18f901]
- ✨ 增加新增协同空间功能 [398b66a]
- ✨ 增加新增协同空间功能 [32fa55f]
- ✨ 增加面料弹窗和鞋款弹窗 [7b0a307]
- ✨ 数字带单位组件添加最大值校验和小数点现在功能 [7426821]
- ✨ workspace 增加拖动功能 [89bd448]
- ✨ 增加一些qt弹框 [b1a077c]
- ✨ 添加文档模块的页面 [303972a]
- ✨ 创建代码显示样式的指令 [0cf395f]
- ✨ 添加文档模块的路由 [01a2bea]
- ✨ 创建上传通用组件 [e7c0101]
- ✨ 增加弹框工具，将渲染页改成单例的弹窗 [f1536af]
- ✨ 屏蔽掉 safari 的放大功能 [0d37b8c]
- ✨ 上传鞋模型添加没有上传完文件不能点击上传按钮 [f6e0679]
- ✨ 增加渲染页的loading效果 [352b687]
- ✨ 上传模块添加侧边导航栏 [3b7e7ab]
- ✨ 调整2d不能上传印花的提示 [f639323]
- ✨ 让oss上传提供更多返回值 [5d1bbf3]
- ✨ 优化错误模块 [557a6cb]
- ✨ 改进错误的机制 [d050d8f]
- ✨ 给系统文件夹的右键菜单限制 [8d18455]
- ✨ 重构board部分模块，并进行优化 [0fae495]
- ✨ 初始化时更新系统权限 [21c6079]
- ✨ 优化错误显示 [9c8807f]
- ✨ 新增交互模式中的新建文件夹功能 [d3dec34]
- ✨ 避免e错误类型的时候的抛错 [8fe6c61]
- ✨ 新增文件列表删除确认弹框 [cb39081]
- ✨ 优化错误处理 [77cf5a2]
- ✨ 虚拟账号登录时，被冻结的账号提示不能登录 [8bab78f]
- ✨ 上传时，如果在当前文件右击上传，上传到当前文件，否则传到myupload文件夹中 [225bd58]
- ✨ 优化重构右键的问题 [d86f3d2]
- ✨ 更新iconfont 文件 [3672dfd]
- ✨ 虚拟账号登录后的操作限制（限制点击个人空间和账号设置） [be764be]
- ✨ 上传完后调整到对应上传文件夹页面内 [327cd8a]
- ✨ 将workspace setting 页面迁移到列表页面上显示 [3baa7d2]
- ✨ 修改404页面和系统保存页面 [adfeae2]
- ✨ 材质详情单位为空时，不显示价格单位 [b4fbad6]
- ✨ 修复部分右键菜单不对的bug [449a35c]
- ✨ 上传材质添加根据选择不同的类型，设置预览图不同的效果的功能 [69ebeef]
- ✨ 材质详情弹框中input-tags组件的禁止功能和修改时，同步问题 [904da8b]
- ✨ 鞋款详情页，修改表单的内容改为即时修改 [69e83e8]
- ✨ 上传材质调整预览图的比例时，宽和高时等比例变化的 [a12f046]
- ✨ 添加上传版权声明组件，在上传页面添加上传声明按钮 [e68ddf3]
- ✨ 个人中心申请人为了姓和名两个输入框 [1016eb2]
- ✨ 上传表单添加过滤空格情况 [2d629e6]
- ✨ 增加差集计算方法 [1b4a357]
- ✨ 标签组件添加字符长度限制和是否显示长度的功能 [5b4b252]
- ✨ 上传材质添加调整预览图相关大小功能，上传图片上时判断是否符合条件 [94a2f96]
- ✨ 调整valid-material方法的逻辑 [57e9ec6]
- ✨ 改进虚拟账号登录时的参数传递，修复无法打开协同空间鞋款的问题 [28dddbc]
- ✨ 改进协同空间新建和关联虚拟账号流程 [10dd82e]
- ✨ 在邀请流程增加新建虚拟账号功能（未完全完成） [c77abaa]
- ✨ 修改了上传模型和loadModel的一些问题 [56a41af]
- ✨ 上传鞋模型页面添加文件数量统计功能 [ae38b15]
- ✨ 创建滑动选择组件 [dc481ea]
- ✨ 让系统目录（上传文件夹和create board文件夹）无法被选中 [fb454a3]
- ✨ 虚拟账号冻结情况下，登录会弹框提示无法登录 [34d7353]
- ✨ 添加获取dpi的方法以及校验面料是否合理的方法 [bdb98d8]
- ✨ 增加scrollable组件 [63a0ef5]
- ✨ 添加政策条例模块三个页面 [c24b929]
- ✨ 修改个人中心账号名显示改为显示邮箱,却不能操作 [5e2627e]
- ✨ 密码明文显示功能 [3e12aa3]
- ✨ 新增框选、反选，把原来的模式改为可单选和多选 [e0f804d]
- ✨ 增加框选，增加ctrl或meta的多选、反选操作 [cdeebd5]
- ✨ 优化file-list的icon [70f2255]
- ✨ 增加$act的缓存机制以及提供$isActing来查询行为是否运行中 [07147f6]
- ✨ 新增快捷键操作（复制粘贴全选删除） [18e804d]
- 🎉 初始化1.0.0分支 [333d933]
- ✨ 新增拖拽改变长或宽的组件 [54270be]
- ✨ 渲染页面料菜单栏可以上下拖拽了 [4d299e9]
- ✨ 修复thumb在cdn模式失效的bug，并增加图片格式转换功能 [5a6b0b6]
- ✨ 增加utils的remove方法 [7035704]
- ✨ 增加case工具 [0ad86eb]
- ✨ 增加addDisabled和去掉不必要的console [86821f0]
- ✨ 把搜索挂在了路由上 [9e030b9]
- ✨ 动态获取访问资源域名，更新到D4 [99245fa]
- ✨ 增加权限组件，并且整合components [14896ec]
- ✨ 在header增加申请上传的选项和对应的页面 [1f8c1a1]
- ✨ 增加全局$act方法 [008797d]
- ✨ 提供dialogify控制初始化的方案 [aa94cae]
- ✨ 保存鞋模型时，把模型截图用OSS方式上传 [00c9340]
- ✨ 上传鞋模型时，对上传模型文件校验非空 [eb6ec22]
- ✨ 修改个人信息UI [1ededd9]
- ✨ auth store 增加用户角色判断 [31e1578]
- ✨ dialog injector改为自定义的el-dialog [9ad1aee]
- ✨ 增加$confirmBool [d6b2e2a]
- ✨ 渲染页面排版功能添加开放几种功能 [16e15af]
- ✨ 鞋模型详情弹框添加修改备注的的功能 [d8a6569]
- ✨ 登录模块的邮箱格式一律转为小写 [f764eb0]
- ✨ 新增复制和剪切的（禁止）样式和权限判定 [95c68d9]
- ✨ 视频接服务器URL [409d721]
- ✨ 渲染页board拖拽缩放 [fb5aae7]
- ✨ 账号首次登录显示新手指引遮罩调取后台接口 [426c583]
- ✅ 测试渲染页拖拽 [fd8b593]
- ✨ 增加vue-loading和vue-async两个插件 [72b2a88]
- ✨ 新增邀请多人功能 [8eef9ea]
- ✨ 新增邀请多人接口 [9457f18]
- ✨ 成员邀请置灰功能 [bd0f7e7]
- ✨ 成员邀请置灰功能 [32220d2]
- ✨ 账号中心删除分两种 [2dea2cd]
- ➕ 增加丢失的依赖 [ba68f23]
- ✨ 增加orm auth store [9a4f35f]
- ✨ 添加错误处理的相关翻译 [1436755]
- ✨ 第一次登录新手指引遮罩 [fa06be5]
- ✨ 评论增加小红点 [f5fc80d]
- ✨ 增加头部红点功能 [c7210f9]
- ✨ 增加头部红点功能 [1aca9e9]
- ✨ 增加头部红点功能 [022f418]
- ✨ 增加头部红点功能 [3426d14]
- ✨ 视频播放功能 [f9150b3]
- ✨ 登录模块申请试用页面开发和重置密码页面重构； [0c79e5c]
- ✨ 新增评论红点接口 [80d7e54]
- ✨ 在可@的人的列表里增加@所有人的选项 [458ff57]
- ✨ 复制和剪切操作增加源协同空间id参数 [18ce834]
- ✨ 鞋模型更改记录添加印花的拼接和镜像； [99ac14d]
- ✨ 鞋面2d编辑引入印花的拼接、镜像功能 [d20cb86]
- ✨ 鞋款详情对接材质表格列表数据 [e523ba9]
- ✨ 列表页面右击事件添加上传的权限校验 [ad6c301]
- ✨ 根据用户是否购买，进入不同的支付页面和支付界面访问限制 [d998373]
- ✨ 注册页面动态校验帐户和邮箱 [ca07510]
- ➕ 增加vue-lottie [ca6d66f]
- ✨ 未读显示红点 [1d99687]
- ✨ 消息中心评论跳转和邀请参数修改 [6b5c105]
- ✨ 接账号中心后台接口 [68912b3]
- ✨ 在登录时记录system 权限 [7de5622]
- ✨ 鞋模型详情信息弹框里添加权限控制 [2c320de]
- ✨ 增加thumb过滤器 [7b55068]
- ✨ 优化忘记密码以及修复相关错误 [9236ff0]
- ✨ 优化路由拦截的方案 [3290ab8]
- ✨ 增加dataUrl2Blob的方法 [dcc9a34]
- ✨ 添加编辑鞋款时， 前进和后退功能 [8b47fe8]
- ✨ 浏览历史版本的弹框和全部的业务逻辑 [0017679]
- ✨ 添加纯浏览模型的页面和路由配置 [00f1b43]
- ✨ 添加权限的全局指令 [a7d25f6]
- ✨ 添加权限和历史版本的API [e0de314]
- ✨ 操作中心增加点击其他区域关闭的功能 [056d0e4]
- ✨ 消息中心 [2ac07b7]
- ✨ 评论接口（获取评论列表、新建评论、编辑评论、删除评论）对接，完善相关组件逻辑 [7b80ff2]
- ✨ oss上传增加b64转换的便捷方法 [f160575]
- ✨ 优化auth和account登录的逻辑，并且支持url传递token进行登录 [d208e66]
- ✨ 增加scroll工具以及优化goto组件 [bb7f251]
- ✨ 优化history以及增加错误模块，和托管axios auth错误 [d0f175c]
- ✨ 增加$history [8c1d38e]
- ✨ 合并 onion 分支；上传模型模块重构； [6f1a6d0]
- ✨ 重置密码 [32e3898]
- ✨ 重置密码 [162b6b8]
- ✨ 更新最新的 D4 文件 [3cfa011]
- ✨ 引入最新的 iconfon 文件 [e3b6c59]
- ✨ oss-upload改进 [48ff6f3]
- ✨ 使用eslint-plugin-html [a874957]
- ✨ 评论相关组件的大致编写 [1f5ef7b]
- ➕ 增加一些自动化部署的依赖 [0f085f6]
- ✨ 添加 权限的API文件（permission.js) [688b951]
- ✨ 快捷方式改为部分模块，改变接口参数等 [4b847b9]
- ✨ 修复空文件夹新建文件夹会出现重复文件夹的问题 [0230395]
- ✨ 增加顶部权限控制 [7fb0296]
- ✨ 增加右侧权限判断 [0f91d5d]
- ✨ 更新d4 [4f6c18e]
- ✨ 在列表页面对应上传功能 [43d004f]
- ✨ 设置路由守卫，已经登录时，不能跳到登录模块界面； [93c7f80]
- ✨ 上传模块调整上下一步时，滑动到顶部 [cf53ffc]
- ✨ 空白处右键菜单添加上传模型和上传面料功能（带参数） [69ddd56]
- ✨ 材质上传dpi需要用户输入 [b9bf9bf]
- ✨ 鞋模型的标签填写例子弹框 [cad6144]
- ✨ 标签填写示例图 [5a2befc]
- ✨ 添加上传材质预览图效果；滚动选择材质范围效果；上传材质时，Loading状态； [ba57c56]
- ✨ 邀请人员 [eecd681]
- ✨ 增加一个隔离值取值的组件 [113642e]
- ✨ 上传模型时，查看文件预览图效果功能 [a4539f8]
- ✨ 上传模型时，查看文件预览图效果功能的渲染相关文件 [7afdc65]
- ✨ 内外部列表后端返回数据结构变化 [a195095]
- ✨ v1.5.3相关需求 [343830f]
- ✨ 上传合并1.5.2 [ffcbe60]
- ✨ 渲染页路由上获取groupAppId [ccc23fe]
- ✨ 添加字典选择组件 [bd3ab2c]
- ✨ 创建上传文件的两个组件 [d637366]
- ✨ 材质上传的业务逻辑代码 [4929f82]
- ✨ 1.53 渲染页的需求开发 [419c1cc]
- ✨ 增加全局增加draggingData，以便跨组件调用 [127f810]
- ✨ 增加全局$loading常量 [a1262ac]
- ✨ 重构tree，并增加部分功能 [fda2853]
- ✨ 列表页权限 [910e408]
- ✨ 列表页优化（协同空间列表样式变更、快捷方式开始引入动态列表、导航栏体验优化、列表优化） [a6bc24c]
- ✨ 添加上传材质的index 页面 [1c2e3fb]
- ✨ 上传模型的业务逻辑代码 [e84f910]
- ✨ 配置上传界面的路由和界面入口 [dffae18]
- ✨ 接workspace权限 [7921c23]
- ✨ 增加导航栏（选择、替换最近文件夹）和历史记录操作（前进后退返回上一级） [9f0eb29]

### Changed

- 🏗️ 增加发布的禅道继承 [b2a1b4f]
- 🚚 恢复错误删除的文件 [b45fc85]
- 💄 调整filelist背景样式 [8baf306]
- 💄 修复创建虚拟账号的账号名时，校验提示被遮盖住 [fc8ecb0]
- 🎨 把登录后进入页面前判断是否为虚拟账号的逻辑移到routes文件上 [388faa0]
- ⚡ 优化qt切换页面的通知逻辑 [2bb455e]
- 💄 修改鞋模型为空时的默认图片 [86e7ff1]
- 💄 调整模型页面样式 [f1abe12]
- 🎨 修改材质表单的校验规则 [37e11a1]
- 🎨 在根目录上传时，上传的文件在根目录下而不是在MyUpload文件里面 [dcaf580]
- 💄 渲染页】水平镜像和垂直镜像的翻译反了 [6173c5c]
- 💄 【渲染页】渲染页的前进、返回按钮英文错误 [592dbef]
- 🎨 重构上传头像的截图功能 [67cb939]
- 💄 不加粗协同空间管理器里的icon-write图标 [879496b]
- ⚡ 协同空间管理页改为加载时不删除原有数据 [18236ad]
- ⚡ ImageViewer接错image加载失败的情况，使得即使图片列表中有图片加载失败，也能打开列表 [ceeb1b8]
- 💄 操作记录UI变更 [b6087ae]
- 🎨 修改项目中的校验表单的信息 [c537d99]
- 🎨 材质详情将材质贴图浏览方式改无限循环方式 [fd19d1c]
- 💄 修改detail页面样式 [63aace8]
- ⚡ home layout的router-view增加缓存key的功能 [83f1c40]
- 💄 材质上传页面样式按设计图做小调整 [f04819c]
- 🎨 材质详情内容添加表单校验和样式修改 [cf0010b]
- 💄 修改detail &gt; createboard页面样式 [4df76b8]
- 🎨 把currentUser的调用改为User.getCurrent()，以解决变更整个currentUser的指针时用到computed的currentUser的地方没反应的问题 [e73ca41]
- 🎨 更新D4文件，修改键盘监听事件 [d23e405]
- 🎨 重构材质上传的逻辑 [e37faa6]
- ♻️ 局部优化了oss的一些方法 [91c6f72]
- 🎨 整理不符合规范的代码 [a67f597]
- 🍱 更新iconfont [94e9717]
- ⚡ 修改ImageViewer调用入口的函数名 [27d8586]
- ⚡ 合并分支并且优化ImageViewer的逻辑 [c9d110f]
- 🎨 登录页面登录信息填写时不做格式校验 [aa02b45]
- 🎨 登录页面登录信息填写时不做格式校验 [24a790f]
- ⚡ 优化ImageViewer的基本逻辑 [765e760]
- 🎨 新增User的vuex-orm文件，包含user信息的操作，准备替代vuex的account文件 [cbcb077]
- 🎨 设置ImageViewer，默认不使用mutationObserver的自动操作 [54eb415]
- 🎨 调整对表单字段超过规定字数的校验规则 [90003a0]
- 🎨 调整上传材质页面中上传文件中UI结构 [d46b5b5]
- ⚡ 优化ImageViewer部分代码 [abe3f01]
- 🎨 回退上传材质重构的代码中的上传信息部分 [a8480f9]
- 🎨 回退上传材质重构的代码 [87d6f80]
- 🎨 D4文件：改了缩放热键冲突 [d57fafa]
- 💄 修改操作手势说明的文本 [85432ca]
- ⚡ 调整预览的逻辑 [a29ea90]
- 🔧 修改测试环境的ip [ab53a17]
- 💄 修改渲染页面上的文本修改 [50ad9a1]
- 🎨 增加ImageViewer的调用方法，并把原来列表页放大镜的图片查看，从原有的v-viewer改为ImageViewer打开 [55b6c3e]
- 🎨 调整上传材质模块的UI界面 [74fed21]
- ⚡ 优化workspacelist的逻辑去掉不必要的代码 [2a696af]
- ⚡ 优化对systemAppType的catalog提前的逻辑 [254faa8]
- 🎨 解耦ImageViewer和，将前者注册在index.html上 [8ab98bb]
- ⚡ 优化host初始化的流程 [ad6d750]
- 🎨 更新D4文件，修改选择模型文件双击为单击事件 [3ce685c]
- 💄 修改历史版本中文本错误 [1398003]
- 💄 UI改进 [32c9c0d]
- 💄 非支持浏览器弹框重写 [58afbe6]
- 💄 CLOSE bug#1612 [6b5c221]
- 💄 优化页面背景颜色，避免qt弹框失败后白屏 [f0d884c]
- 💄 注册成功后的信息不要电话联系方式；历史版本模块的字体颜色修改 [3e54d1d]
- 💄 修改鞋模型弹框中时间的样式 [f675792]
- 🎨 根据最新的D4文件，调整对应方法 [ff05715]
- 💄 修改个人中心导航聚焦样式 [96ecd55]
- ⚡ 将profile/account的keyword和currentCom作为路由参数，并排除出vuex [ff72afd]
- 💄 优化样式，增加一个名为word-break-normal的全局class [db4a5ae]
- 🎨 优化搜索逻辑 [90a7efb]
- ⚡ 整理优化列表排序的功能 [d943d2f]
- 🎨 修改项目的时间格式 [585dd8a]
- 🎨 修改账号中心页面公司信息中vuex存储问题 [6a56710]
- ⚡ 优化视图对qt的判断 [f493ad3]
- 🎨 抽离页面resize的监听器 [0e8fba0]
- 🎨 整理代码 [a8b83f1]
- 💄 修改项目的时间格式 添加小时和分钟 [2d05e1c]
- 🎨 商务合作的content输入框不再校验特殊字符 [c9baf0b]
- 💄 材质上传中的提示按钮改成点击才出现 [7e8435f]
- 💄 渲染页帮助弹窗按设计稿进行调整 [e5567f1]
- 💄 渲染页中恢复版本添加谁修改的字段；修改其中的样式 [2a4f4ba]
- 💄 修改虚拟账号中心的文本 [5774811]
- 🎨 MyDragSelect &#x3D;&gt; DragSelect [e030e5e]
- 💄 优化框选的样式，并且提高框选的准确性 [c2524ca]
- 🎨 修复eslint报错 [8ed1365]
- 💄 优化列表页dom结构以及部分样式，去掉没必要的嵌套和模块 [5f848a7]
- ♻️ 局部重构drag select组件以及pageFileList store，并优化拖动逻辑 [27bcc1d]
- ⚡ 将获取my upload目录id的请求搬迁到account 的 store上 [4858e10]
- ♻️ 优化重构右键菜单的部分功能 [543fff1]
- 💄 虚拟账号创建增加部分提示 [a84ad28]
- 💄 消息中心UI改良 [5a1a344]
- 💄 消息中心UI改良 [85b8f3b]
- 💄 修改右下角两个按钮的zIndex未免覆盖 [29e28cd]
- 💄 更改不兼容的提示 [54023fc]
- 💄 根据设计稿修改操作手势说明页面和创建虚拟账号的文本 [b7e418d]
- 💄 全局的页面的滚动条改为项目定制化的 [61b84aa]
- 💄 渲染页 查看版本分类应显示英文 [e14a201]
- 💄 注册成功时，运营邮箱没有修改为help@4DSTC.com [7d931ac]
- 🎨 版本记录中的修订记录样式修改 [c1c1773]
- 💄 根据需求修改部分样式和交互 [9b1edd4]
- 💄 修改模型操作指南的界面样式 [a8e7e46]
- 💄 调整渲染页的样式 [3cff100]
- 💄 去除backdrop-filter [59e41e0]
- 💄 修复列表的下载视图样式 [fb8e4dc]
- 🎨 删除部分没用的组件 [7791e52]
- 💄 调整对于qt顶部固定导航条的样式 [126a5ad]
- 💄 qt弹框改成透明背景 [8b77e8f]
- 🎨 删除部分没用到的dialog组件 [360abfc]
- ⚡ 简化部分代码 [da99793]
- 🎨 上传材质时，图片默认上传大图1000x1000 [f61a673]
- 💄 优化了弹框的显示效果 [38d2a6c]
- 🎨 修改项目账号模块和虚拟应用的路由；删除多余的文件 [7f047ec]
- ⚡ 对qt openWin 的url补全 [63a1944]
- 🎨 完成协同空间管理页的全部功能的ORM重构 [ff3599a]
- ⚡ 对qt openWin 的url补全 [e8b4955]
- 🎨 修改qt监听器名字 [49fc0c8]
- 🎨 开始重构协同空间管理页 [8556766]
- ♻️ 整理article路由以及给予qt的入口 [287caa6]
- ⚡ 对qt所在环境去除消息中心的操作行为 [b94f897]
- 🎨 调整依赖的顺序 [c53ae0b]
- 🎨 调整一些依赖顺序 [70109b9]
- ⬇️ 更改vscode的设定 [74d4552]
- 🍱 更新d4 [363b7c1]
- 🎨 个人中心所有弹框改造 [d567391]
- 🍱 更新d4，修复签名后ctm无法访问的问题 [9c67afb]
- 💄 上传时，非必填内容默认收取 [ebff7e2]
- 🎨 账号设置页部分弹框改造 [49dad9b]
- 🎨 User &#x3D;&gt; BaseUser [66999de]
- 💄 修改账号中心顶部添加position: sticky 属性 [affba64]
- ⚡ 新手视频教程弹框改造 [2a2d6f3]
- 💄 统一几个弹出框的底部按钮图标大小的样式 [e5880ba]
- ♻️ 整合并调整base系列组件，替换BaseUser组件的使用场景 [e0148bd]
- ⚡ 增加，给所有调用该方法的地方用上了这些规则 [836a62e]
- ⚡ 增加，给所有调用该方法的地方用上了这些规则 [4899dbc]
- ⚡ 增加一个为渲染组设定的JSON转换方法，以备不时之需 [91eda54]
- ⚡ 优化错误抛出 [e997b9d]
- 💄 调整panellist 的样式 [fb9bb3c]
- ⚡ 修改baseImage的default图标以及相关基本功能 [9cf6ffd]
- 💄 修改folder的图标 [c2c3a77]
- 💄 给导航栏的悬浮时增加完整路径的tooltip [1667062]
- 💄 评论列表滑块改为scrollable-y [18e32a9]
- 💄 给模型和面料弹框增加加载时的图 [8cb76a6]
- ⚡ 改良新建文件夹代码，统一入口 [11ef6af]
- 💄 让权限表从权限高到底排列 [4a16383]
- ♻️ 重构baseImage，优化懒加载的触发条件并且增加oss签名 [021f0b1]
- ⚡ 改为从接口拿bucket和endPoint [c21f487]
- 🚚 迁移oss工具文件夹 [b3725bc]
- 💄 调整文件夹的样式 [18543fe]
- 💄 列表页UI微调 [9db5ae0]
- 💄 列表页、协同空间添加成员样式修改 [e3ff07b]
- 🚚 Context-Menu &#x3D;&gt; ContextMenu [379fa25]
- 🚚 迁移test模块 [7ebcda8]
- ⚡ 简化oss上传的getParams以及sts流程 [641a9ee]
- 💄 根据UI，修改上传模型页面的样式 [2f3f9c5]
- 💄 根据UI修改项目头部样式 [f116fa5]
- 🍱 更新iconfont [2525288]
- 💄 修复头像过大的bug [ff22610]
- 💄 文件夹去除缩放时候的细线 [a3dafeb]
- 💄 修改禅道上文本错误的问题 [9493a3d]
- 💄 部分图标字体变更 [9ee8b6b]
- 💄 部分图标字体变更 [fcdd0bd]
- 💄 调整列表页部分样式以及功能 [b95fa89]
- 💄 列表页UI修改 [8126f14]
- 💄 根据产品文档修改代码中的文本 [50a5ceb]
- 💄 列表页UI修改 [a332f9d]
- 💄 列表可选范围增加 [abba959]
- 💄 交互模式部分样式变更 [32537c3]
- 💄 将pass改为workspace pass [1fd73af]
- 💄 列表页交互模式的UI交互大幅变更 [ffcb088]
- ♻️ 重构列表页并且增加qt下载相关功能 [f4fe108]
- ♻️ 对渲染页进行”去弹框化“重构 [1d71d8b]
- ⚡ 整理getGroupAppId的方法并且避免重复调用setWorkspace [d7d0da6]
- ♻️ 去除没必要的store，将pageFileList去持久化，并加入setting store [56fc7cc]
- ♻️ 局部重构以及优化exec工具 [685d8f1]
- 💄 修复LayoutHome的样式问题 [b481f75]
- ♻️ 将v-viewer纳入全局组件 [99de0cb]
- 🍱 更新iconfont [f759789]
- 💄 更新iconfont [8190aff]
- 🍱 更新iconfont [c0b792b]
- 🎨 账号中心页面重构对接虚拟账号模块的接口 [3c07ab5]
- ♻️ 重构面料以及鞋款的弹框方式，调整组件所在位置 [b88067c]
- 🎨 调整账号中心复制链接弹框代码 [fb5a61b]
- 💄 更新iconfont [b38db8b]
- 💄 修改上传鞋模型文本 [6cce8a9]
- 💄 调整一下ws列表样式 [42d2eac]
- ⚡ 调整validator以及checker的架构以及删除部分没有依赖的文件 [f5de16d]
- 💄 调整历史面板的恢复历史的按钮颜色 [486c73a]
- 💄 调整弹框的基础样式 [6722b0f]
- 💄 重置primary disabled按钮的颜色 [aae76b7]
- ⚡ 将el-dialog-injector抽离到全局 [b3d1b67]
- 💄 提供一个resize-icon的mixin [6eae779]
- 💄 根据产品要求修改对应的文本 [7ced948]
- 🎨 调整个人中心账号模块的代码 [b7c334e]
- ⚡ 增加key，避免报错 [c79b4a8]
- 🎨 编辑账号中心虚拟账号后端返回account [9dfd5ae]
- ⚡ 将d4推迟到渲染页去加载 [d85cda0]
- 🎨 调整个人中心模块的路由和页面 [fd35731]
- 🎨 调整个人中心模块个人信息页面的代码结构 [c8ffab1]
- 🎨 调整个人中心应用中心页面的代码 [6dfd0be]
- 🚚 重命名 side-slider &#x3D;&gt; SideSlider [07b85a4]
- ⚡ 优化成员管理以及邀请的逻辑 [08c27a1]
- ⚡ 优化dialog injector的逻辑 [892ea68]
- 🚚 迁移dragtotranslate.vue 到 components [12edd1a]
- 🔧 项目添加 highlight.js 库 [0dd613e]
- 💄 根据产品文档修改页面的文本 [11f8270]
- 🎨 调整登录模块的代码结构，添加表单字段长度的校验和限制 [c542be4]
- 🎨 个人中心修改邮箱输入框对齐 [d7c89f4]
- ⚡ 避免qt上重用的时候转跳异常 [f420b50]
- ⚡ 优化路由模块 [5d07cf2]
- 💄 修改评论的上传图片的样式 [403a439]
- 💄 改进导航栏部分UI [4f0a03e]
- 💄 协同空间列表增加判定是否显示更多的功能 [3a0a634]
- 💄 侧边栏UI改良 [54462ba]
- 🎨 消息中心跳转workspace [60c6927]
- 🎨 改了渲染的灯光 D4文件 [ad8215b]
- 💄 邀请进入空间的登陆提示英文断句有问题，不要把一个英文分开两半 [5c2330c]
- ⚡ 优化错误提示 [77a3f77]
- 🎨 调整历史面板的样式 [2cebefd]
- 🎨 解决兼容问题，IE浏览器密码输入框自动显示眼睛图标问题 [b250111]
- 🎨 改了些D4渲染设置 [d4f5492]
- 💄 免责声明的文本换行修改，保证英文单词的完整性，不要拆开换行 [4ea5812]
- 🎨 消息中心增加添加成员到workspace通知类型 [06cf143]
- ⚡ 去掉loading的缓冲效果 [6cde79b]
- ⚡ 增加渲染页加载的进度条 [f010e15]
- 🎨 上传面料时，等待上传文件传输完成时，才调用上传接口 [df5990c]
- 🏗️ 尝试修复/%3C%&#x3D;%20BASE_URL%20%%3E构建问题 [1749377]
- 🎨 红点位置调整 [e6ade23]
- 🎨 红点位置调整 [a00871d]
- 🎨 个人中心返回新UI [19f9b26]
- 🎨 修改上传材质时，一旦点击上传后，马上开始出现上传的画面 [8dbf59d]
- 🎨 公司头像改为OSS和账号中心刷新页面标签还是显示当前 [69ff0b6]
- 🎨 更新D4文件 改了印花比例变形问题 [ebd8c50]
- 🎨 个人中心火狐兼容 [9ca58f9]
- 🎨 修改协作空间样式一排放下四个 [e78f187]
- 🎨 修改上传头像为oss [0231322]
- 🎨 更新D4文件 [8ef85d9]
- 🎨 将将fullscreen代码放到触发事件组件内 [583a378]
- 🎨 重构个人中心修改密码弹框 [218fa5c]
- ⚡ 优化createBoard右键逻辑 [eab8d4e]
- 🎨 调整mixin功能的代码结构 [6340b04]
- 🎨 新建validation-rules文件 [5a01ae5]
- 🎨 整理一下board的代码 [34df785]
- 🎨 协作空间表格宽度改为传参 [7450815]
- 🎨 协作空间表格宽度改为传参 [984cf51]
- 🎨 隐藏上传材质的校验功能 [3f34e87]
- 🎨 新建账号提示 [b415d10]
- 💄 修改协同空间列表样式 [f7751b6]
- 💄 重复快捷方式提示翻译调整、邀请成员弹框样式调整 [7d10062]
- 💄 修改panelList的范围 [f6a40dc]
- 💄 导航栏历史记录单元的样式修正 [d278d34]
- 💄 修改一下文本和样式问题 [d2bf937]
- 💄 协同空间弹框样式修改 [e14c173]
- 💄 快捷方式样式修改 [d664d5c]
- 🎨 阻止浏览器默认填写信息 [db144c3]
- 🎨 协作空间表格宽度错位 [2101c84]
- 💄 修改列表页面的样式和文本 [f54e1a9]
- 🎨 协作空间加载loading位置修改 [f9d78d0]
- 💄 修正部分翻译问题 [11762f7]
- 🎨 新建账号密码明文显示 [a0f193f]
- 💄 优化渲染页的loading样式 [4195342]
- 💄 虚拟账号列表表头变更 [a32e95d]
- 🎨 重构了下载进度的逻辑 [dafe51c]
- 💄 更新iconfont [8becd51]
- 🎨 将variables.scss和extend.scss设置为全局 [af7b0c2]
- 💄 调整渲染页loading层级过低的bug [94bb119]
- 🎨 协作空间角色选择权限 [9d8e48a]
- 💄 修改上传材质中材质贴图示例翻译文本显示错位 [6667736]
- ⚡ 修复校验器的兼容问题 [db546b7]
- 💄 修改滚动条与内容的边距 [3e3bc1a]
- 💄 调整上传模块的UI与设计稿一致 [8a512a7]
- 🎨 隐藏订购模块页面的入口 [59e3554]
- 🎨 调整虚拟样品单页面的入口 [1d99096]
- 🎨 协作空间下拉权限控制修改 [6804d26]
- 🎨 协作空间下拉权限控制修改 [78b1eb4]
- 🎨 将数字和单位组件调整为数字类型输入框 [13eb6cc]
- 💄 协同空间列表email实际内容改为account [16ae241]
- 💄 修复详情弹框因为加上滚动条导致布局错乱问题 [53932b5]
- 💄 修改材质上传中上传材质贴图组件的交互样式 [24db8e3]
- ♻️ 重构board [b163ae0]
- 💄 上传模型的文件列表图标错位 [f818157]
- 🎨 简化项目header组件内的代码 [5284917]
- 💄 将img-icon类改为attr img-icon [e7338ff]
- 💄 修改BaseTags 组件在样式细节的调整 [2b7c476]
- 💄 上传鞋款，上传页面，上传图片，删除按钮显示被阻挡 [8ead5a0]
- 💄 协作空间表格样式 [38a11c3]
- 💄 协作空间表格样式 [d8fca11]
- 🎨 调整上传材质中文件上传部分的UI [4af96c7]
- 🎨 调整上传鞋模型和鞋模型详情中的字段顺序为对称形式 [7eab5ca]
- 🔧 将uat和production的api_base_url设置为/ [c41770e]
- 💄 账号中心表格样式 [bad69aa]
- 💄 账号中心列表 [62cb5eb]
- 💄 账号中心列表 [5e7f039]
- 💄 账号中心列表 [e4781e2]
- 💄 调整上传材质的UI [a64ba2c]
- 💄 给系统目录增加标记 [f52368c]
- 💄 把mailbox改为email [bfec1e1]
- 💄 账号中心企业列表和新建虚拟账号 [ae00f57]
- 💄 账号中心企业列表和新建虚拟账号 [1b4e673]
- 🎨 修改上传材质中的文本优化处理 [9f3a073]
- 🎨 材质的属性拖动选择组件添加传值和禁止的功能 [613c82a]
- 🎨 完善材质详情弹框中的权限控制功能 [c55b2fd]
- 🎨 修改单位组件中的数字输入校验 [dfd7629]
- 💄 个人信息修改密码弹窗样式 [eb8f79c]
- 💄 个人信息修改密码弹窗样式 [2546d5d]
- 🎨 注册时协议条款要新开一个标签页来显示 [3d22442]
- 🎨 修改政策文件的文本 [ecac250]
- 🎨 删除文件后对应的组件引用做修改 [b645182]
- 🎨 完善材质详情弹框代码，添加滑动选择和权限控制功能 [03c5d01]
- 💄 个人中心UI修改 [f730987]
- 💄 账号中心 [e98c8ed]
- 🎨 列表从多个变为一个 [e89b051]
- 💄 账号中心 [a4de8a2]
- 🎨 修改鞋模型弹框权限控制区域和不能修改的bugs [a116d3d]
- 🎨 优化了个人信息模块的代码 [6f51e92]
- 🎨 完善鞋模型详情的权限控制部分功能，调整该组件的结构 [c8e8141]
- 💄 账号中心UI新样式 [ca4f6ea]
- 💄 账号中心UI新样式 [a328674]
- 💄 账号中心UI新样式 [3b386a0]
- 💄 账号中心UI新样式 [20c12d2]
- 🎨 申请试用对电话不做必填校验 [abc46a9]
- 💄 简化注册流程 [de75679]
- 🔧 优化构建配置 [0aa3caf]
- 🎨 修改账号中心文件命名大小冲突问题 [1eb7e38]
- 🎨 材质详情模型弹框改版全部功能 [7ee292e]
- 🎨 鞋模型信息详情弹框改版全部功能开发 [728007b]
- 💄 文件夹样式改进 [4e64ed5]
- 💄 根据产品原型修改账号中心，变动的地方，待UI出来再改样式 [9a88e11]
- 💄 列表页UI调整 [9a595b3]
- 🎨 调整iconfont的初始化方案 [b19603a]
- 🎨 合并分支 [2a2b202]
- 💄 调整icon group title的样式 [241d6fd]
- ♻️ 调整渲染页目录架构以及调整整体布局 [3406447]
- 💄 修改内外workspace公用组件的样式为新UI的 [fff542e]
- 💄 样式 [5072e3b]
- 💄 更新iconfont [5ce014b]
- 💄 协同空间邀请页面样式和部分逻辑变更 [aa1fd1f]
- 🎨 调整部分scss的变量名 [2675d1b]
- ♻️ 重构快捷方式的交互方式以及样式 [3f3b289]
- 💄 增加全局img-icon类 [2470f38]
- 🎨 修改workspace组件在内部使用头像被挤压问题 [0d7d9f8]
- 🎨 协作空间标题在火狐浏览器错误问题 [033961b]
- 🎨 微调鞋模型详情页面的代码 [0e26e97]
- 🎨 优化协作空间修改和删除，不重新请求全部数据，只请求目标数据 [8935f87]
- 🎨 优化协作空间修改和删除，不重新请求全部数据，只请求目标数据 [7e38f90]
- 💄 调整列表的样式以适应qt [bc00000]
- 🍱 更新d4，修复卡顿的问题 [82b9e71]
- 💄 调整组件样式 [766215c]
- ♻️ 重构以及重写部分workspace列表的样式以及交互 [2b99b51]
- 💄 调整file-list的样式 [afaece9]
- ♻️ 全局样式搬迁到component/index [8d9b290]
- 🍱 更新d4 [2d3b80e]
- 🔧 修改master deploy的配置 [60ee3e7]
- 🔧 修改master分支的发布配置 [8cf6d82]
- 🎨 优化 把个人信息的workspace表格共用外面的workspace [b602cac]
- 🎨 优化 把个人信息的workspace表格共用外面的workspace [e5747d2]
- 🍱 更新d4 [bf50453]
- 🍱 更新d4 [fa714ed]
- 🎨 登录模块代码抽取mixin [9c9fd5c]
- 💄 修复增加成员图标失效的bug [3fe8962]
- ♻️ 去掉privilege store，并且处理permission相关模块的依赖 [cef1515]
- 💬 增加全局对象的注释 [a1deea8]
- 🏗️ 修改rancher配置 [6c4a6c4]
- 🔧 修改uat上传配置 [f38e2d8]
- 🎨 更新D4渲染相关的文件 [9c319eb]
- ⚡ 权限部分采用promise all来优化请求 [3a02eef]
- ♻️ 整理error的入口 [5abfc76]
- 🎨 上传材质中的底纹图片更改为五种类型 [0dcb87f]
- 🎨 修复babel.config.js格式缺陷 [805fcf6]
- ♻️ 配合接口改造axios拦截器 [ba77ee9]
- ♻️ 合并并且整理重构部分代码 [e8246a1]
- 💄 修改头像上传按钮错误问题 [e6421cc]
- 🎨 修复材质上传更换不同的底纹图片 [0912586]
- 💄 修复模型预览页无法看到模型的问题 [c05fea4]
- 💄 申请试用---输入电话号码输入框提示文本更改 [8702938]
- 💄 修改上传材质中 public 属性收集框内的文本 [965c3f0]
- 💄 修改支付模块中的文本错误 [710c5a8]
- 🎨 调整登录模块的代码（引入mixins、校验条件修改） [418a340]
- 🎨 更改各种模块后，对 main.js 做相应的调整 [4c761d5]
- 💄 404页面改成英文文字 [ec327a4]
- 🎨 更改 plugins 模块的代码结构 [181255f]
- 🎨 更改 mixins 模块的代码结构 [25e79e5]
- 🎨 更改路由模块的代码结构 [3918f76]
- 🎨 更改 directives 模块的代码结构 [33045fb]
- 🎨 更改 filters 模块的代码结构 [7939741]
- ♻️ 重构baseImage [f5ac96f]
- ⚡ 去掉ShortcutTemp以及重构相关模块的功能 [6056f3c]
- ⚡ 优化root剪切板的功能 [e2980f1]
- 💄 限制顶部头像区域文字过长问题 [b21a70a]
- 💄 邮箱邀请部分样式改进 [37cf5fc]
- 💄 统一无权限的样式 CLOSE bug#657 [16d442a]
- 💄 协作空间闪动问题 [394898f]
- 🍱 更新iconfont [e96ea28]
- 💄 增加一些缺失的缩略图 [0c025cd]
- 💄 UI修改 [2c401c9]
- 💬 修正进入申请样品单的英文 [b75a00b]
- 💄 去掉列表页的最小高度限制 [d2fc7ca]
- 🎨 登录页的校验交互修改 [02b072a]
- 💄 限制header用户区域大小以及避免没有user导致的报错 [dd62f3d]
- 💄 上传材质文本错误 [95e859f]
- 🎨 更新D4文件 [fc76487]
- ⏪ 保存权限改回31号 [d9b32ff]
- 💄 增加搜索的样式 [4c8504a]
- 💄 修复全局title样式 [5559d08]
- 💄 修改全局data-no-permission的样式 [a996062]
- 🎨 修改获取访问资源路径的字段 [fdd9f90]
- 💄 修改下载Excel进度的样式 [4e54628]
- 💬 修正重命名协同空间的弹框标题 [7e7b141]
- 💬 修正快捷方式重复的报错文本 [1a0f5ad]
- 🎨 修改获取邮箱校验码组件中，如果不要邮箱格式，不能点击发送获取按钮 [27690c1]
- ⚡ 用vuex-orm的模式重构快捷方式相关内容 [3b1e4c7]
- 💄 按产品要求修改选择套餐的界面文本 [8e97fe2]
- ♻️ 重构用户初始化以及权限加载的流程 [d02f5f3]
- ♻️ 重构重命名部分并且CLOSE bug#439 [8e05cc9]
- 💄 修改密码样式 [d445ed8]
- 🚚 permissionDetail.vue &#x3D;&gt; PermissionDetail.vue [e7cc475]
- ♻️ 重构列表页部分模块 [b1aab32]
- 💄 增加scrollable横向滚动条的高度 [ffa4918]
- 💬 变更无权进行协同空间成员管理时的文本 [339b22b]
- 💬 渲染页导入文件弹框标题变更 [cd779e9]
- ⚡ paypal的script放在支付页加载 [613b6a2]
- ⚡ paypal的script放在支付页加载 [f9c9b73]
- ⚡ paypal的script放在支付页加载 [37fcc0e]
- 🎨 解决input file两次选取同一个文件不能触发相应事件的问题 [a85edee]
- 🎨 修改上传模型时，无法显示上传文件的问题 [1680539]
- 💄 去除邀请列表的空的黑色提示框 [c85eab6]
- 🎨 导出进度页面添加标题 [97a102d]
- 💄 邀请提示说明更改 [3687956]
- 🎨 修改登录模块中密码重复校验的提示语言 [434151d]
- 💄 操作记录进入渲染页的入口的文字样式变更 [82e7d3e]
- 💄 模型面料单元更多信息图标按钮范围增大 [ff3d323]
- 💄 消息中心、操作记录footer样式调整 [5306a69]
- 💄 交互模式图标居中 [c29ff0d]
- 💄 快捷方式删除图标大小调整 [3a99712]
- 💄 面料图片圆角调整 [118a557]
- 💄 文字提醒增加透明度 [93b7130]
- 🎨 更新 D4文件 [e2910b3]
- 💄 消息中心的@you效果优化 [8e2b126]
- 🎨 登录模块表单全部加入特殊字符和空格过滤 [9fde14a]
- 💄 修改默认element table的滚动条样式 [ee9081b]
- 🎨 对接渲染页面2D排料的功能 [00305db]
- 💄 去除最近文件列表 [3110c3f]
- 🎨 上传材质删除上传axf文件功能、上传textures增加几种类型 [26a3556]
- 🎨 调试好上传鞋模型页面全部功能 [391ecd6]
- 💄 右键删除的图标名称引用变更 [c6870bb]
- 💄 整体布局调整 [cd4c607]
- 🎨 邀请置灰和新手指引接后台接口 [a379026]
- 🎨 调整上传鞋模型页面的文件上传逻辑代码 [ec44276]
- 🎨 重构鞋模型详情弹框，全部步骤统一到一个界面 [76cf04f]
- 🎨 登录页面中的账号和邮箱填框不再校验特殊字符 [9394d48]
- 🎨 调整动态校验不通过时，提示语言捕获的方式； [666bda1]
- 🎨 修改头像截图UI [45f0000]
- 🎨 修改头像截图UI [6e21ca7]
- 🎨 对材质和模型详情调整样式和删减其他多余的代码； [bd016d2]
- 🎨 调试登录模块的全部接口； [d1e30d9]
- 🎨 实时更新小红点 [1b97255]
- 🎨 对接登录模块的全部功能接口； [2c86286]
- 🎨 实时更新小红点 [0e50100]
- 💄 评论红点样式变更 [b155d70]
- 🔧 修改sftp密码 [591e69f]
- 🎨 按最新的UI，重构上传模型页面的界面布局； [98686ce]
- ⚡ 避免重复请求用户数据 [e764f91]
- 💄 修改新手弹窗层级样式 [506968f]
- 🔧 修改发布配置 [7d1496a]
- 👽 修改邮件接口前缀 [12c517f]
- 🔧 添加https自签证书相关配置 [10ef1bf]
- 📌 重置package-lock.json [4b6cf83]
- ⚡ 跨workspace复制粘贴处理 [66e4244]
- 👽 修改account开头的api为authcenter [e1fe5b6]
- 💄 根据UI要求修改了评论和消息中心的样式 [095b9e8]
- 🏗️ 去除 build 的 artifacts，增加安装细节 [b0a8c51]
- ♻️ 重构auth store [fa03f6a]
- 💄 更改顶部导航栏个人中心下拉框的个人头像图标 [c346d42]
- 💄 操作记录和回到顶部UI调整 [c2f6a58]
- 💄 操作记录和回到顶部UI调整 [b698786]
- ⚡ 面料平铺图加上过滤器，压缩图片 [92d1969]
- 💄 交互模式的面料图片模式增加提示 [d9b0644]
- 💄 右键上传的文字图标和顶部导航栏的保持统一 [22329a3]
- 💄 评论@人时此人无username的情况改为显示account [b781dfa]
- 🏗️ 尝试优化gitlab ci 的cache key [a3e5ea5]
- 🏗️ 尝试优化CI的缓存机制 [9a4af2d]
- 🎨 重构登录模块的登录和注册页面 [217080b]
- 🎨 修改api [4c0fdc4]
- 🎨 账号中心和消息中心加try...catch... [d5cf0ad]
- 🎨 迁移消息中心API [487d179]
- 🎨 迁移账号中心API [9a61f7d]
- 🎨 修改密码成功提示 [05ef321]
- 🎨 修改上传模型时 loading 动画的加载状态 [a9fc61d]
- 🎨 大幅调高支付页面购买的价格 [4ad1913]
- 💄 调整hidden样式优先级不高的问题 [bda2b59]
- 🏗️ 修复production发布脚本的部署name不存在导致的bug [6e07bac]
- ♻️ 重构v-permission的页面 [5c9187f]
- 🎨 消息中心清空刷新 [d53645c]
- ♻️ 重构权限部分，增加can方法 [2119530]
- 🎨 修改注册模块的必填没有标志和动态校验体验问题 [3d2aa42]
- 🎨 回收站刷新 [9a81c2f]
- ⚡ 邀请内部成员后添加提示 [f85a994]
- 💄 调换协同空间的列表的表头的用户名和账号位置 [15689b8]
- 🎨 调整权限接口捕获异常的代码 [ef2d0c9]
- 💄 改下协同空间的移除按钮的样式 [a94580c]
- 💄 修正重命名文件夹时的样式 [07ceb2e]
- 🎨 对权限接口添加捕获异常的代码 [023a0ce]
- ♻️ 重构filters部分，并 CLOSE bug#410 [b545cbe]
- 🎨 调整用户购买套餐的判断条件 [d1e075f]
- 💄 修改渲染页模型操作按钮的点击范围 [c6a7e1f]
- 🎨 协作空间操作记录触发弹框的按钮添加权限校验 [81523f6]
- ♻️ 锁定文件不再刷新列表 bug#396 [6bfed1c]
- ⚡ 优化协同空间邀请流程 [f2dab5b]
- 🎨  [5cc09b7]
- 🎨 修改账号价格和更换消息中心没有数据切图 [4a1ff35]
- 👽 修改workspace数量问题 [cd58a8e]
- 🎨 修改workspace表格只有一条信息的显示 [b97b93f]
- 💄 loading增加渐变的效果 [a977756]
- 💄 增加渲染页 lottie动画 [8677a72]
- 👽 支付页面数据容量接口 [307532d]
- 👽 支付页面数据容量接接口 [95530f9]
- 💄 bug#354 [6488dba]
- 💄 修改滚动条的显示css样式 [a997061]
- 🎨 按产品要求修改套餐的内容和隐藏部分定制内容 [04d601c]
- 🎨 对接新的鞋款信息详情接口 [a0da740]
- ♻️ 重构保存的部分功能并加入loading的状态 [e460e04]
- ⚡ 把panelItem时间改为目录时间，而非鞋款时间 [7693ac5]
- 💄 协同空间添加成员后清除已选 [4a4ba05]
- ⚡ 增加双击鞋款时若后台出错的报错信息 [ea55c5f]
- 🎨 隐藏个人中心-协作模块入口 [afd1228]
- 💄 修复展开状态箭头方向不对的bug [b197024]
- 💄 bug#355 增加scrollable样式 [1edc9b4]
- 💄 修复element-ui loading zindex 贼高的问题 [8626937]
- 🏗️ 将build的参数传递到vue-cli [491ab7a]
- 🎨 重构个人中心中的个人和公司信息模块 [acb5994]
- 💄 改进列表页刷新按钮位置 [6ffbe5e]
- 💄 让列表页背景完全占据底部 [1ec3385]
- 🏗️ bump命令改成inherit方式 [b211788]
- 🏗️ 优化bump脚本 [84b8ad9]
- 🏗️ 优化构建脚本 [e0d6598]
- 💄 扩大可以点击右键菜单的范围 [78f2013]
- 🏗️ 优化构建脚本以及配置 [5416047]
- ⚡ 评论列表@展示增加账号名到用户名的过滤 [64830d7]
- 🏗️ 用job代替before_script [a3c81a8]
- 🏗️ 增加build job的artifacts [afd5943]
- 📌 固定ci镜像版本 [29f66df]
- 💄 协同空间列表成员头像样式改良 [f19fb1e]
- 🔧 优化构建配置 [81635bb]
- ⚡ 添加评论时拉到顶部 [1b5686e]
- 🔧 调整构建配置 [1c1d4fc]
- 🏗️ 增加自动部署相关的逻辑 [0a3ec0d]
- ⚡ @的消息点击后可打开渲染页后自动打开弹窗 [091ccec]
- 🎨 隐藏所有打开上传的页面的入口代码 [4ff6b99]
- 🎨 鞋模型编辑记录中，对上传新印花的base64字符替换为其他字符串发给后端； [bb5ced3]
- 🎨 重构历史版本模块的内容（拆分组件）； [fd7fc82]
- 🎨 阻止冒泡 [70b2406]
- ⚡ 调整activeWorkspace的活跃顺序 [07af3a5]
- 🎨 更新 D4 文件，修复加载模型出错时，整个代码卡住问题； [2759b29]
- 🎨 从协作空间进入和从其他地方进时，显示不同的界面和UI [e15596c]
- 🎨 重新对接鞋模型的导出excel 接口 [3f9fbbc]
- 💄 修改渲染页面的UI布局和样式优化 [8a84560]
- 🎨 上传材质时，materialNumber 为必填状态 [5633d6a]
- 🎨 修改前进和后退的相反操作 [65353de]
- 🎨 对接迁移接口（导出样品单、导出前完善资料） [d3142e3]
- 🎨 鞋模型纯浏览页面添加路由传参数和添加Loading状态； [0cb57dd]
- 🎨 没有权限操作 图形灰色时，提示该用户没有操作权限 [3dab71c]
- 🏗️ 增加自动化cli的工具 [f60fc36]
- 🔧 增加global环境 [1cfb044]
- 🎨 修复上传材质无法拖拽的问题 [3987372]
- 🎨 对接最新的API [e63c1a4]
- 🎨 更新最新的fonticon 文件 [8d73002]
- 🎨 消息中心邀请弹窗 [c7a7b76]
- 💄 调整操作记录的样式 [5294311]
- 💄 调整忘记密码的样式 [14cecc3]
- ⬆️ 更新elementui [fb2891b]
- 🎨 删除上传中没有用到的字段 [3f5c09f]
- 🎨 更新 D4 文件 [5340574]
- 🎨 调整上传材质模块的代码 [abd98a9]
- 💄 优化side-slider的动画 [9af0046]
- ⚡ 操作记录功能基本实现 [264b2f1]
- 🎨 对接新的接口 传入groupAppId 参数 [878c690]
- 👽 国家，城市，公司类型接口变动 [cda3894]
- 🎨 渲染页面添加权限控制和界面部件调整 [814d2ff]
- 💄 添加部分公共样式 [2c592de]
- 🎨 更新D4文件 [9f7eb8a]
- 🎨 修改上传模块的上传的方法 OSS [5b573d9]
- 🎨 下载依赖 [2bf8f44]
- 💄 调整消息的结构与样式 [09ef462]
- ♻️ 抽离side-slider组件 [dd25a4d]
- 💄 调整layout以适应qt [e44a300]
- 🏗️ 增加global的环境 [4fee62e]
- ♻️ 修改错误等级的默认值 [aa41e54]
- 🏗️ 增加nullish语法的支持 [80383e6]
- ♻️ 重构列表页，以达到qt跳页的需求 [7aa77af]
- 🎨 修改从列表跳转到渲染页面的逻辑 [0f82350]
- 💄 图标字体更新 [324cd62]
- 💄 图标字体更新 [d987bdf]
- 🏗️ 增加uat环境 [fc62eab]
- 🎨 合并harvey分支 [af6f07d]
- 🏗️ 增加uat的VUE_NODE_ENV [aa30348]
- 🏗️ 加入uat环境和npmignore [1b798c7]
- ⚡ 增加oss-uploader [fb7b59f]
- 🏗️ 修改eslint规则 [eb3e98f]
- 💄 消息中心静态页面 [206e769]
- 💄 消息中心静态页面 [37f5a5b]
- 💄 消息中心静态页面 [c6610c0]
- 💄 图标字体更新 [7fe3b90]
- 🎨 修改上传代码逻辑，修复产品提出的问题 [aabc950]
- 🎨 代码检查错误修改 [950ea24]
- 🏗️ 增加一些自动化的工具 [3caa005]
- 🏗️ 增加changelog [2a6731e]
- 🏗️ gitattributes写法有误的问题 [db550eb]
- 🔧 修改eslint 语法检查规则 [f9dbb04]
- 🏗️ 增加lint-stage [6ba895f]
- 🎨 修复部分eslint的报错 [b9a2c9e]
- 🏗️ 增加自动化部署的部分依赖 [ddfcd63]
- 🎨 添加 API 缺失模块的文件；company 模块的 API 全部补全； [3c05c18]
- 💄 搜索结果为空时的文字显示补充 [96538c6]
- 🏗️ 临时去掉oss [f06871a]
- 🎨 去掉没必要的console [572e212]
- 🏗️ 增加staging环境 [3c49a3a]
- 🎨 增加groupAppId的默认值 [998c6f1]
- 🔧 增加autocrlf的配置 [448a979]
- 💄 增加物料面板为空的视图 [3048d0e]
- 💄 调整树状的边框色 [9d8ea9a]
- 🎨 修改上传材质dpi换算的方式； [2f43578]
- 💄 UI再优化，字段为空时从undefined改为空白，列表页鞋款时间样式变更等 [875fea7]
- 💄 优化列表动画样式 [ed2ecf8]
- 💄 优化剪切和复制的样式 [ec59988]
- 💄 UI优化 [f015019]
- 💄 协作空间 [6032d25]
- ⚡ 列表信息显示条件变更 [2e336a9]
- 💄 模式交互按钮改为下拉式 [3f936b0]
- 💄 模型、面料名字hover时显示全名。面料信息改为svg显示，并调整整体位置 [7179288]
- ⚡ 调整架构以便多实现文件复制拖动的需求 [ddd0f62]
- 🎨 修改token过期统计校验为401 [200bda0]
- ⚡ 渲染页优化并且重构部分功能 [544be50]
- 💄 最后上传模型时添加Loading；上传模型文件格式过滤； [110f68a]
- 💄 面料图优化 [8263f7f]
- 🎨 修改滚动条选择组件的代码 [007cf37]
- ⚡ 优化并修复tree打开的bug [0bc8ff3]
- 💄 修改在头部进入上传页面的图标 [7fe9d69]
- 🎨 根据用户和公司接口调整，调整响应的代码 [6edbca6]
- ⚡ 渲染模型时只有鼠标在模型上时才持续渲染页面；关闭渲染页面时，将d4对象赋值null； [084a4da]
- 💄 修改上传组件的界面 [51d8c60]
- 💄 优化列表页UI [8d880dd]
- 💄 按设计图调整上传面料的界面 [09eb71a]
- 💄 按设计图小部分调整上传模型UI [7641c10]
- 💄 上传页样式变更 [b6eb076]
- ♻️ 鞋弹框取得公司logo [58b6b35]
- ♻️ 修改FAQ问题缺失的提示文字 [9e280be]

### Breaking changes

- 💥 修改模型api的路径 [993123d]
- 💥 修改delay 0 为 setTimeout 0 而非直接resolve [51f3ce5]
- 💥 将缩放方式进行变更fix &#x3D;&gt; scale-down / stretch &#x3D;&gt; fill [18c61c1]

### Removed

- 🔥 删除项目中部门没有使用且过时的文件 [289ec36]
- 🔥 去掉没用的store [735ee0e]
- 🔥 整理优化权限的逻辑，去掉权限store的持久化 [2e89a06]
- 🔇 去掉不必要的alert [59a330e]
- 🔥 去掉v-viewer相关依赖 [f90520e]
- 🔥 去掉v-viewer的相关逻辑 [11b65c5]
- 🔥 去掉没必要的try catch [1ef982d]
- 🔇 去掉不必要的console [8480480]
- 🔥 去掉一些没必要的组件 [cc755e8]
- 🔥 去除pageFileList一些不必要的代码 [eadace4]
- 🔥 去除一些冗余的store [d401610]
- 🔥 替换重构列表页的右键菜单 [4dd72a9]
- 🔇 去掉没必要的debug [0958065]
- 🔥 清理一些无引用文件 [350af14]
- 🔇 去掉没必要的console [1f8d300]
- 🔥 去掉el-dialog-injector的Dialog v1 [4a1421e]
- 🔥 移除没必要的代码 [3dc4cac]
- 🔥 渲染页面料列表去掉部分无用代码 [9b33746]
- 🔥 去掉没必要的v-viewer引入 [673b515]
- 🔥 去掉没必要的代码 [0fc26a1]
- 🔥 删除部分冗余的图标 [1839089]
- 🔥 删除没必要的文件 [df44c16]
- 🔥 去除store没必要的权限请求 [f89b70b]
- 🔥 去掉一些测试代码 [e2cf656]
- 🔥 去掉uploadMaterial [5d4015a]
- 🔥 将validators 文件夹引到到 utils 下 [566a745]
- 🔥 删除组件文件中多余的文件 [de5b54d]
- 🔥 删除多余文件，调整文件引用地址 [ad9c206]
- 🔥 删除多余文件 [2e10a2a]
- 🔥 删除鞋模型弹框的多余文件 [6f99d28]
- 🔥 删除多余的文件 [68b5178]
- 🔥 去掉global环境的配置 [027510e]
- 🔥 去掉plugins [e3f8d8d]
- 🔥 删除登录模块旧模块的代码 [60d5c1a]
- 🔥 去掉 utils/axios 和 api/index 增加 api/axios [967ffe5]
- 🔥 去掉previlege store [13bf6dd]
- 🔥 去掉不必要的console [39e77dd]
- 🔥 去掉冗余的store [233b3c4]
- 🔥 去掉BaseImage preview相关的视图元素 [cae4f2f]
- 🔇 去掉务必要的console [317435b]
- 🔥 去掉不必要的代码 [7aa154c]
- 🔥 去掉一些store上没必要的内容 [b81c4f0]
- 🔥 去掉403error的排除 [4fc6a98]
- 🔥 去掉没必要的bus [df517f0]
- 🔥 去掉临时的全局axios 401的error处理 [8dc3a81]
- 🔥 删除多余的文件 [59e8218]
- 🔇 去掉不必要的console [15b8c33]
- 🔥 去除consolelog [24c461f]
- 🔥 去掉在登录的权限请求 [553cfb8]
- 🔥 去除xxx的操作记录标题 [6446325]
- 🔥 整理并且去除部分filter的模块 [a2df273]
- 🔥 删除部分无用或过时的文件 [69206b9]
- 🔥 去掉operationrecord [f65bdcc]
- 🔥 删除一些没有的文件 [e3a3c6b]
- 🔥 删除整合D4相关依赖 [4e5fd2a]
- 🔥 删除部分模块以便下一轮开发 [926ee20]

### Fixed

- 🐛 修复列表页面料放大镜打开的图片类型出错 [75c86c0]
- 🐛 修复baseImage不断加载的bug [0adfaac]
- 🐛 md5工具支持node调用 [e113204]
- 🐛 修复缺少系统权限的bug [1cae9d8]
- 🐛 修复渲染页切换版本不转跳的bug [6fca69f]
- 🐛 修复signArgument缺少默认参数的bug [da81396]
- 🐛 修复一些极限情况权限判断的问题 [ee8a141]
- 🐛 修复设计师端点击+无法弹出添加WS弹窗的bug [d06e0ff]
- 🐛 将购买部分用到用户信息的地方改为user.getcurrent()获取 [1fbae31]
- 🐛 修复拖动面料渲染不了的bug [c48c26a]
- 🐛 修复跟页面无法跳转、快捷方式面料无法打开的问题 [a812f44]
- 🐛 CLOSE bug#1744 [ee1f4bd]
- 🐛 修复快捷方式面料打不开、协同空间的历史记录为空的问题 [4593761]
- 🐛 修复shoe api applyVersionToNewest缺少groupGroupId的bug [3e8ba05]
- 🐛 修复列表为空时右键菜单新建文件夹失效的bug [19e3b5e]
- 🐛 修复缺少web512 style的bug [64be961]
- 🐛 修复评论图片部分bug [b30c008]
- 🐛 qt修复workspace闪烁的问题 [1a0be9a]
- 🐛 【账号中心】公司头像上传失败 [70c0264]
- 🐛 优化签名组件的判断条件，并兼任新的版本的管道功能 [a38675f]
- 🐛 将qt对路由的控制搬到router/index，并且尝试解决页面状态刷新的bug [f37105d]
- 🐛 修复新建文件夹没响应的bug [0fd7197]
- 🐛 修复parentId传递错误，导致列表没有刷新的问题 [5a4b975]
- 🐛 修改上传材质参数错误导致无法贴附到鞋款模型的问题 [297e305]
- 🐛 修复评论图片相关bug [c70e9df]
- 🐛 修复上传目录不对的bug [cb13918]
- 🐛 修改头像组件的class，跟组件默认的class有差别 [8d2909d]
- 🐛 修正评论删除没反应的问题 [92735e4]
- 🐛 解决右键上传时的报错问题 [65bba84]
- 🐛 修复header不显示的问题 [1445c5d]
- 🐛 修复上传时有时没有传parentFolderId的参数 [8260eff]
- 🐛 修复面料详情弹框的图片查看器无法关闭的问题 [409ed8b]
- 🐛 解除app.vue的keepAlive [b6ee225]
- 🐛 修复虚拟账号登录、刷新bug [8d28c86]
- 🐛 增加qt页面刷新的功能 [560eea9]
- 🐛 修复虚拟账号在改用User这个ORM文件后的用户相关bug [6e2dd8e]
- 🐛 更新按钮没有绑定下载的bug [9be6d67]
- 🐛 修复恢复版本的version对象不对的bug [e8d2a59]
- 🐛 历史版本回滚使用新的记录 [007f47e]
- 🐛 修改登出逻辑 [1b208c9]
- 🐛 登出协同空间不变更数量 [badc39d]
- 🐛 登出协同空间不变更数量 [8c3415b]
- 🐛 version dialog 增加 catalog id 和 workspace id [459a438]
- 🐛 当My Design和My Material 中上传时，上传会出错 [91ce78e]
- 🐛 列表页放大镜选择器变更 [f675036]
- 🐛 修复路由获取设置currentWorkspace报错导致路由停止的bug [cf97f2a]
- 🐛 修复qt空项目显示异常 [b84224d]
- 🐛 修复渲染页面料显示模式切换失效的bug [f856d30]
- 🐛 修复上传时，在我的材质和鞋款中不会刷新的问题 [094483c]
- 🐛 修复上传时，在我的材质和鞋款中不会刷新的问题 [97193d0]
- 🐛 修复签名以及signComponent的错误处理 [6bd80ed]
- 🐛 CLOSE bug#1772 [f482709]
- 🐛 改了2D操作的bug [e48d40d]
- 🐛 改了2D操作的bug [cf73831]
- 🐛 修改更改公司头像时，要刷新才能看到效果的问题 [6dcf728]
- 🐛 修改账号中心添加不好刷新的问题 [9ae7f1c]
- 🐛 修复create board 分割线偏下的bug [0b62843]
- 🐛 修复操作记录头像缺失的bug [614fd46]
- 🐛 修复qt里sort方法的兼容问题 [a1aea8e]
- 🐛 修改reportCurrentPage的参数 [16df5e6]
- 🐛 修复鞋款组件没有面料的情况报错的bug [30e024d]
- 🐛 修改reportCurrentPage的参数 [231f331]
- 🐛 CLOSE bug#1562 [5f91853]
- 🐛 修复一定场景下baseImage显示图片错误的bug [1d0d628]
- 🐛 修复消息中心的滚动bug [782a828]
- 🐛 CLOSE bug#1758 [9534e5e]
- 🐛 CLOSE bug#1777 [12a86ae]
- 🐛 避免非qt路由对qt初始化导致的错误 [49bbf82]
- 🐛 CLOSE bug#1756 [fb5bf74]
- 🐛 增加qt判断，避免reportCurrentPage报错 [bc1a864]
- 🐛 让formshareablelink在协同空间创建虚拟账号时不显示？图标 [0df3526]
- 🐛 修复qt更新导致详情页不能使用键盘的bug [4350e3a]
- 🐛 优化qt的ua判断 [0bc5dfe]
- 🐛 CLOSE bug#1726 [98493a1]
- 🐛 CLOSE bug#1723 [47c2f34]
- 🐛 CLOSE bug#1606 [e7c8b85]
- 🐛 修复合并后导致的bug [dd88fbc]
- 🐛 解决合并冲突 [02eb9bc]
- 🐛 部分UI和文本变更 [7790362]
- 🐛 修复虚拟账号多人邀请的placeholder文字换行问题 [bffe7a3]
- 🐛 虚拟账号为到期的报错提示文本变更 [92da002]
- 🐛 修复消息中心的红点刷新失败问题（由于dialogify话而出现） [551be52]
- 🐛 CLOSE bug#1516 [aa90633]
- 🐛 修复框选 -&gt; 右键复制的功能失效的bug [ae55bce]
- 🐛 CLOSE bug#1652 [776d8a7]
- 🐛 增加对系统文件夹的判断，修复可以对createBoard等文件夹可删除的问题 [d974ee9]
- 🐛 修复列表复制的请求缺少等待导致请求先后顺序出现的问题 [354aa2c]
- 🐛 修复qt部分方法缺乏默认参数导致的报错 [8353a80]
- 🐛 优化路由获取权限以及更新用户的判断条件，一些极端情况的bug [033137d]
- 🐛 修复渲染页面树不能右键的bug [c8dc59e]
- 🐛 修改登录报错时持续loading的bug [8445ab1]
- 🐛 CLOSE bug#1529 [0123c08]
- 🐛 修改package.resolutions [2442058]
- 🐛 CLOSE bug#1313 [bb9c176]
- 🐛 CLOSE bug#1518 [9b71ff9]
- 🐛 修复BaseImage在src为空时也去签名的bug [e1f024d]
- 🐛 虚拟账号默认的列表页面是workspace页面，不能跳转到鞋和材质的列表页面 [0c18afb]
- 🐛 navigationBar 改为转跳相对地址 [f878010]
- 🐛 修复token更新判断修改导致的bug [1563a91]
- 🐛 体验优化 [bf58178]
- 🐛 修复qt重复调用关闭弹窗的bug [1538079]
- 🐛 修复qt初始化缺少init时候报错的bug [e7209cd]
- 🐛 qt修改列表弹框联调出现的bug [66a0586]
- 🐛 删除错误引用的组件代码 [a4a6992]
- 🐛 协同空间管理页替换为重构后的页面 [e10c564]
- 🐛 修复协同空间管理的重命名失败问题 [3b0998d]
- 🐛 修复qt详情框地址错误的bug [84a8fdd]
- 🐛 取消 [ad21c37]
- ✏️ artical &#x3D;&gt; article [3acd723]
- 🐛 修改baseImage对oss可签名url判断错误的bug [1910802]
- 🐛 修复v-viewer以及一些签名函数的缺陷 [6629359]
- 🐛 修改2D编辑框内按钮报错问题 [7910704]
- 🐛 修复用户头像签名缺失的问题 [5c0a9e5]
- 🐛 修复隐藏文件的报错 [5e9e35a]
- 🐛 修复签名错误覆盖字段导致的上传以及保存报错 [b6d2689]
- 🐛 修复dialogify添加body类的实际不准确的问题 [b50d68e]
- 🐛 全屏功能去掉icon-bar [0c87d20]
- 🐛 将dialog的visible默认值设为false避免不必要的误解 [6651d72]
- 🐛 修复列表页简单模式图片不居中的bug [01eb226]
- 🐛 将评论所有图片改为BaseImage并且优化部分代码 [c212404]
- 🐛 修复 isOssUrl 错误使用async方法导致判断错误的bug [a93289e]
- 🐛 补充一处没用judgeinput的，让其使用 [a7c415c]
- 🐛 修复上传模型和面料到workspace时，要刷新才能出现的问题 [06dc7d0]
- 🐛 修复2D编辑功能中回退时，提示Component missing the print 错误提示； [1323258]
- 🐛 删除部分注释 [208d395]
- 🐛 在WS上传鞋款和面料，上传成功后必须要手动刷新才能显示出来 [29e337f]
- 🐛 子账号不应该拥有创建子账号和编辑删除的操作权限 [a8c7daa]
- 🐛 取消虚拟账号日期选择器的clear功能 [26dddef]
- 🐛 注册流程，输入邮箱后，点击发送验证码，没有收到邮件 [9e6186d]
- 🐛 鞋模型详情的权限控制，member角色应该拥有修改鞋款名字、标签和notes的权限 [ea84f8f]
- 🐛 修复拖动面料缺少签名的bug [58eada7]
- 🐛 权限表文案修改 [751e4be]
- 🐛 修改动态校验邮箱在不同场景校验的规则 [0c30b3a]
- 🐛 修复workspace setting 页面模块的UI问题 [d480eb7]
- 🐛 修复管理员以上权限无法更改别人权限的问题 [1ceb3f1]
- 🐛 列表页模型和面料详情调用方式变更，改为先调接口获得relateId，再加载信息 [0af63a7]
- 🐛 给日期选择器的选择时间后的时间限制条件 [8d3ed58]
- 🐛 面料单元信息从ingredient改成type [20e3e21]
- 🐛 给协同空间的重命名增加禁止为空的条件 [4c8b8cc]
- 🐛 CLOSE bug#1385 [8461da1]
- 🐛 CLOSE bug#1044 [e02c4ae]
- 🐛 CLOSE bug#1312 [b160166]
- 🐛 CLOSE bug#1314 [b565957]
- 🐛 增加超时时间 [c361faa]
- 🐛 CLOSE bug#1433 [77a6e99]
- 🐛 CLOSE bug#1400 [18ef8eb]
- 🐛 CLOSE bug#1309 [7bd987e]
- 🐛 修复bug1441 [27c7597]
- 🐛 CLOSE bug#908 [e172baf]
- 🐛 增加新建文件夹全是空格的验证 [f2d40f7]
- 🐛 列表页UI交互改良 [e594ce6]
- 🐛 j解决复制到剪贴板的重复弹框问题 [e7656e7]
- 🐛 解决消息中心显示不全、新手指导部分显示不全问题 [6c16087]
- 🐛 修改上传材质Merge error问题，更新D4文件 [aae4a3a]
- 🐛 CLOSE bug#1128 [4a538b4]
- 🐛 修复水印失效 [f9d577a]
- 🐛 修复切换显示模式的错误以及一些显示问题 [508d092]
- 🐛 CLOSE bug#1313 [35f9b43]
- 🐛 修复账号中心页面的bugs; [788bb64]
- 🐛 CLOSE bug#1414 [cb09d3a]
- 🐛 修复虚拟账号协同空间列表的刷新问题 [ae23dbe]
- 🐛 修复禅道上的bugs; [f01e775]
- 🐛 修复虚拟账号可以增加workspace的问题 [4e34750]
- 🐛 修复金额被...的bug [2872897]
- 🐛 CLOSE bug#1310 [a477fb2]
- 🐛 CLOSE bug#1309 [798df48]
- 🐛 CLOSE bug#1370 [92e1ea5]
- 🐛 修复移除成员报错 [ba981a2]
- 🐛 修复oss签名报错 [b66c39e]
- 🐛 修改账号模块的bugs; [4d2b2b3]
- 🐛 添加新建协同空间的名称验证 [75582d7]
- 🐛 面料详情弹框取消dialogvisible [5052c25]
- 🐛 添加新建协同空间的名称验证 [d13de61]
- 🐛 修复拖动调整大小以及显示标题功能的问题 [b8f2b25]
- 🐛 虚拟账号长度改为至少六位 [63acf63]
- 🐛 修改上传材质中切换类型时，同时更新预览图 [f6955e4]
- 🐛 修复bug1160 [841e103]
- 🐛 修复bug1160 [030fe17]
- 🐛 修复bug1004 [a38515a]
- 🐛 修复bug1004 [12e7a70]
- 🐛 修复去掉不必要store后的废旧代码导致报错 [d821056]
- 🐛 处理数字单位组件的边界情况 [dd56368]
- 🐛 confrim &#x3D;&gt; confirm [c3acaf4]
- 🐛 修复abort error判断的bug [bb37c8e]
- 🐛 修复dialogify  报错的bug [81822b9]
- 🐛 修改单位数字组件中逻辑错误的问题和添加接收位数限制传参数功能 [0cd0a47]
- 🐛 修复上传后不能只跳转到根目录，没有跳转到对应的目录里面的问题 [e8dba77]
- 🐛 去掉无必要的console [dca347c]
- 🐛 避免拖动互相影响 [0cf142d]
- 🐛 修复withProps参数有误的bug [7eba06f]
- 🐛 修复createBoard面料列表缩略图点击大图不对的问题 [07ff8f3]
- 🐛 修改qtWorkspce的路径 [0249de2]
- 🐛 注释 qt 路由配置文件，使编译过程没有报错 [414bd71]
- 🐛 修复登录时邀请框的文字换行问题 [c92f17c]
- 🐛 协同空间邀请流程改进 [b5eaa5a]
- 🐛 修复快捷方式面料无法打开的问题 [c984bb0]
- 🐛 给子文件夹接口调用出增加排序参数 [cec0099]
- 🐛 @所有人的图标改为使用相对路径引用 [c5abe7e]
- 🐛 上传模型页面多文件时，json文件数据会丢失 [2496f31]
- 🐛 修复列表页排序的错误 [cce7fe2]
- 🐛 abort:blank &#x3D;&gt; about:blank [498f038]
- 🐛 上传材质loading 状态显示有异常 [c9ece89]
- 🐛 修改保存和另存为时保存模型出错的问题 [f483d79]
- 🐛 尝试修复 bug#1021 [f66ca48]
- 🐛 修复火狐拖动新开窗口的bug [494ea02]
- 🐛 CLOSE bug#1085 [031af05]
- 🐛 【2D】选中第一个部件上传图片成功之后，选中第二个部件上传不了图片了 [23ad74c]
- 🐛 顶部栏的上传和虚拟样品服务的icon按照设计稿的效果 [d874747]
- 🐛 编辑鞋款2D时，连续上传同一张图片第二次图片没有响应的问题 [991b33a]
- 🐛 阻止board中other右键 [e756a9b]
- 🐛 修复other右键以及隐藏文件导致文件数量不对的bug [6b226f6]
- 🐛 CLOSE bug#1041 [b9aa0a7]
- 🐛 CLOSE bug#1032 [08fe925]
- 🐛 优化createboard上下文右键的交互 [b337a55]
- 🐛 修复createBoard对文件数量处理不合理的情况 [67685b8]
- 🐛 修改上传鞋模型传参数类型问题报错 [65bc312]
- 🐛 【My Designs】点击’详情‘导出，点击’Back’按钮没有反应 [ac56863]
- 🐛 删除鞋模型弹框中 appen-to-body 的属性 [228b26c]
- 🐛 每次关闭鞋模型弹框时，默认跳转到信息详情页面 [a1f3dcf]
- 🐛 新建账号时间少一天问题 [6a1b7e7]
- 🐛 保存按钮的权限问题 [3d0fdb9]
- 🐛 在没有workspace的时候没有设置currentWorkspace的bug [eeaa496]
- 🐛 修改下载样品单权限控制问题 [cf4521b]
- 🐛 修复面料拖动没有取消其他勾选的问题 [49c3611]
- 🐛 修复d4更换面料报错的bug [b6230e2]
- 🐛 虚拟账号关闭清空 [b894c18]
- 🐛 临时方案避免未登录的时候报错 [183bb0f]
- 🐛 避免登录页面请求userInfo [171bb68]
- 🐛 修复不能同目录复制的bug [d0810dd]
- 🐛 修复错误对象正常化一定会赋予redirect的问题 [31315ae]
- 🐛 修正没权限但能看到评论红点的bug [607d5f6]
- 🐛 临时关闭显示隐藏的功能 [2b48568]
- 🐛 翻译文本修正 [e215742]
- 🐛 避免移动失败二次报错 [d8915a7]
- 🐛 渲染页面无法打开材质详情弹框 [2a8eff4]
- 🐛 保存编辑效果按钮添加权限控制 [1b24d6d]
- 🐛 修正点击侧边栏协同空间后的样式问题 [d53b235]
- 🐛 修复部分权限导致的功能缺失 [d9ae4db]
- 🐛 修复剪切不了的bug [77d83b0]
- 🐛 【渲染页】最大化后，图标还是显示最大化图标，应该显示退出最大化图标 [45227bf]
- 🐛 对虚拟账号隐藏顶部上传栏 [d396318]
- 🐛 时间清空 [06f30db]
- 🐛 给交互模式的创建文件夹增加权限限制 [ab511f5]
- 🐛 修复快捷方式错误（登录时没清空、拖拽创建模块判定有问题） [c2783c5]
- 🐛 协同空间虚拟账号创建时生成随机id [67f9322]
- 🐛 解决点侧边栏协同空间的样式错误 [18138c2]
- 🐛 解决点侧边栏协同空间的样式错误 [d9f9111]
- 🐛 CLOSE bug#964 [8512050]
- 🐛 虚拟账号不应该拥有导出样品单的权限 [856d784]
- 🐛 CLOSE bug#965 [a6de58e]
- 🐛 CLOSE bug#967 [c706c1e]
- 🐛 D4修改了个换材质的bug [e10db0c]
- 🐛 【消息中心】从消息中心评论@消息中跳转至渲染页报错 [a2970f3]
- 🐛 快捷键操作的权限修正 [cad7dd0]
- 🐛 workspace翻译 [a9b1e5b]
- 🐛 修复虚拟账号缺少新增文件夹的按钮的bug [f88bccc]
- 🐛 修复文件列表点击名字无法重命名的问题 [795f7df]
- 🐛 增加丢失的显示隐藏功能 [73307e6]
- 🐛 隐藏虚拟账号的个人设置选项 [750dfe2]
- 🐛 增加评论删除确认弹框 [896f3ca]
- 🐛 限制虚拟账号的页面功能（禁止左上角图标、上传、侧边栏样式变更） [7fcb643]
- 🐛 国家后台返回null情况处理 [ed5fb71]
- 🐛 修复（先进guest后进个人空间后）右键无法上传的问题 [5943301]
- 🐛 CLOSE bug#920 [eed4a26]
- 🐛 解决详情弹框粘贴问题 [6ef5919]
- 🐛 变更接口 [eba7bee]
- 🐛 修改文本 [985791b]
- 🐛 新增功能：详情弹框变更后，关闭弹框，列表能看到效果 [1077d83]
- 🐛 账号中心 [0873cfd]
- 🐛 CLOSE bug#795 [7b53bf1]
- 🐛 CLOSE bug#862 [c982771]
- 🐛 账号中心 [b3d6817]
- 🐛 CLOSE bug#907 [58c9abb]
- 🐛 CLOSE bug#809 [9c60db4]
- 🐛 修复修改鞋款api基础路径错误的bug [6fbc18f]
- 🐛 上传面料页面在同一个上传框上传同一个图片，不会响应的问题 [eb32dc4]
- 🐛 尝试解决浏览器保存账号密码的问题 [8153885]
- 🐛 协同空间邀请后关闭弹窗、内容重置 [901a8e5]
- 🐛 协同空间成员管理增加对虚拟账号的操作限制 [0df3233]
- 🐛 给邀请成员时的角色选择增加角色限制 [009c246]
- 🐛 【忘记密码】输入主账号，无法点击发送邮箱，整个流程无法走通 [bd4e5df]
- 🐛 修复搜索relateType缺失的bug [2f40b1b]
- 🐛 修复模型数据加载字段取错的bug [3b6a345]
- 🐛 账号中心 [2425090]
- 🐛 注册页--邮箱验证--输入已经注册的邮箱，依旧可以点击发送验证码，可以收到验证码，继续走注册流程 [ae16c25]
- 🐛 注册页---密码输入框可空键键入，做一下空格键的限制 [7f7fb2e]
- 🐛 申请试用/订阅页面--输入特殊符号提示语显示不全 [8b693af]
- 🐛 修改严重错误的判定 [a830e30]
- 🐛 编辑鞋款信息，在详情页面Notes输入框有300个字符，到导出页面没有显示字符限制 [ae6db03]
- 🐛 修复协同空间增加成员的通讯录的状态错误问题（原来没传groupAppId) [1cd5305]
- 🐛 修改添加成员的列表调的接口 [8d5dfe3]
- 🐛 修改材质详情修改时，没有发送请求的问题 [3e43956]
- 🐛 修复协同空间成员管理显示问题 [d1608e4]
- 🐛 让虚拟账号登录时跳到协同空间 [c7d085b]
- 🐛 修复错误页拦截的异常 [38cd4e9]
- 🐛 修改邀请流程没有获得groupAppId的bug [e36d11c]
- 🐛 订购中心---套餐显示与账号购买的套餐不符合 [9db7094]
- 🐛 删除邀请成员的冗余和报错代码 [6b8e8b6]
- 🐛 选中改良和UI调整 [555f245]
- 🐛 修改个人中心模块文件大小问题导致编译报错问题 [df07108]
- 🐛 修复物料面板弹性盒子样式不合理的问题 [1cfe582]
- 🐛 临时关闭物料面板懒加载避免拖动面板大小导致的懒加载不成功 [ea2fa16]
- 🐛 修复拖动右侧导致左侧不重新重置大小的bug [9ca0714]
- 🐛 【Workspace Settings】invted不应该可以打开添加用户列表 [b9a6adc]
- 🐛 修改模型保存时，提示没有检测到变化的问题 [84b85ba]
- 🐛 修改保存鞋模型时，清空修改记录 [3b7e295]
- 🐛 700 【Personal Info】Logo对上传文件格式没有限制 [4ed265e]
- 🐛 调整loadModel和setPrefix的顺序并修复d4加载的问题 [648ed4b]
- 🐛 添加用户弹框名字不对 [c44d97d]
- 🐛 修复拖动右侧导致左侧不重新重置大小的bug [3c579b7]
- 🐛 修复面料显示模式切换样式失效的bug [e0a17eb]
- 🐛 协作空间退出刷新问题 [b415f7b]
- 🐛 修复login 重复路由名的bug [87822a0]
- 🐛 修复LayoutProfile缺失 [83de83e]
- 🐛 CLOSE bug#667 [7cea893]
- 🐛 修改邮箱不做长度限制提示 [750410e]
- 🐛 CLOSE bug#684 [26c6c44]
- 🐛 修复board里边删除失效以及整理material中contextMenu的数据 [2f7764e]
- 🐛 去掉不必要的对象结构 [d16f1fa]
- 🐛 新手指引镂空居中 [6bbbb6e]
- 🐛 修复错误的请求状态导致的错误拦截失效的错误 [b272e34]
- 🐛 修复全局快捷键失效的bug [683673f]
- 🐛 邮箱验证重复不成功问题 [03ded75]
- 🐛 修复权限报错等级过高的bug [dbaff47]
- 🐛 邮箱验证重复不成功问题 [96d93ce]
- 🐛 修复act方法在错误情况没有清除缓存的bug [5343a2c]
- 🐛 CLOSE bug#682 [dbcb4b8]
- 🐛 上传模型中删除部件后，删除的部件还显示在截图上 [2d815a3]
- 🐛 去掉props.url [39d75a6]
- 🐛 将大图的属性改为src [af8302a]
- 🐛 url &#x3D;&gt; url_ [1928e27]
- 🐛 修复readonly不是布尔型的bug [fe5d482]
- 🐛 调整权限错误的优先级 [6fb4d94]
- 🐛 修复渲染页即使存在缩略图但是还是会加载大图的bug [b105cc9]
- 🐛 CLOSE bug#496 [f6ee56b]
- 🐛 渲染页仍会加载物料大图的bug [a5237a8]
- 🐛 去掉渲染页调节按钮 [db0e926]
- 🐛 CLOSE bug#667 [afa24e3]
- 🐛 修改无法上传json的edgeArr [ac1da2f]
- 🐛 【guest(查看着)】Workspaces--&gt;渲染页--&gt;2D，不应该可以上传图片 [51bc404]
- 🐛 修复命名空间改名还是旧名字的bug [4f98a02]
- 🐛 Personal Info，logo上传图片，没有对其他文件格式做限制 [ff39336]
- 🐛 Personal Info,‘View Subscription Plan’没有标蓝色为可点击按钮 [b18014e]
- 🐛 修正邀请成员后输入框没清空的bug [23dd26d]
- 🐛 对价格输入框输入负数没有校验 [e3a8ab3]
- 🐛 鞋模型另存为时，鞋模式信息为旧数据问题 [6d51034]
- 🐛 &gt;鞋模型阅览简单页面异常问题 [224fed2]
- 🐛 传模型页面，上传图片框少了上传icon。 [61712dd]
- 🐛 My Materials--&gt;上传材料，上传文件时没有标识必填*和说明 [eed679d]
- 🐛 Workspace Message,Total Activity Records数据显示位置不正确 [7826242]
- 🐛 CLOSE bug#466 [e206ce9]
- 🐛 修复bug#618 [7cf843a]
- 🐛 CLOSE bug#497 [fba12c8]
- 🐛 修复权限简写位数补偿长度不对的bug [2fe9f26]
- 🐛 修改头像的按钮错位了 [08e28dc]
- 🐛 修复自己添加评论后会出现小红点的问题 [a04987e]
- 🐛 CLOSE bug#579 [7ccd783]
- 🐛 鞋款保存、另存成功的提示请放到框外面去，不要随着框变动 [6413dda]
- 🐛 验证码不再提示位数 [30ead76]
- 🐛 My Materials--&gt;上传材料一直显示在加载 [a8be386]
- 🐛 修复无法打开个人空间内的模型的问题 [36f0f04]
- 🐛 修复邀请多人处的取消按钮点击没反应的问题 [4296109]
- 🐛 邮件获取验证码组件的，邮件和获取校验密码逻辑不一致 [79ea82c]
- 🐛 CLOSE bug#591 bug#583 bug#595 bug#600 [0828c71]
- 🐛 修复切换模块时快捷方式刷新问题 [00534e2]
- 🐛 CLOSE bug#591 bug#583 bug#595 bug#600 [942303e]
- 🐛 找回密码，邮箱输入框没有提示信息 [941ee98]
- 🐛 My Designs--&gt;点击‘鞋款详情’屏幕会闪屏 [ffea497]
- 🐛 修复roleTypesArr为undefined的bug [96b46c9]
- 🐛 电话号码兼容美国模式 [2338092]
- 🐛 注册成功页面，成功的反馈信息错误 [7e46790]
- 🐛 CLOSE bug#556 [5740ff6]
- 🐛 修复用户管理列表没有加载的bug [2190ab0]
- 🐛 修正切换用户登录时的报错 [326be3a]
- 🐛 修复缺少await导致无法重定向到登录的bug [83ac0f7]
- 🐛 修复workspace list 没有更新的bug [281d365]
- 🐛 CLOSE bug#438 [258f86a]
- 🐛 修复登出不了的bug [bdebd28]
- 🐛 手机支持10-11数字 支持美国和中国的手机号码 [8f3f7c9]
- 🐛 修改表单对特殊字符的校验不包括中文 [23baa0f]
- 🐛 CLOSE bug#576 [52e84ec]
- 🐛 Profile Settings--&gt;Personal Info--&gt;Change Password，标题和输入框显示不平行 [8df6689]
- 🐛 协同空间重命名增加权限问题 [472c504]
- 🐛 修正模型详情信息滞后的问题2 [caa452e]
- 🐛 CLOSE bug#567 bug#569 bug#551 bug#571 [f7b95c5]
- 🐛 CLOSE bug#567 bug#569 bug#551 bug#571 [4b37485]
- 🐛 增加剪贴板为空时的粘贴报错 [25de422]
- 🐛 修复页面刷新反复拉取用户数据的bug [474238f]
- 🐛 修正列表页模型详情信息滞后的异常 [a64d3f3]
- 🐛 CLOSE bug#511 bug#536 bug#535 bug#548 [c134ab4]
- 🐛 在一款鞋子的note区填写内容，空间上所有的鞋款都更改了 [1b75b08]
- 🐛 保存时，鞋信息弹框没有对应的数据 [356f612]
- 🐛 去掉邀请要不成员的提示黑框 [cb224ce]
- 🐛 My Designs--&gt;鞋款--&gt;帮助，Notes没有标题 [fe58172]
- 🐛 增加双击文件单元时的权限控制 [77f8c0d]
- 🐛 My Designs--&gt;Upload Design，上传 非.ctm和.json文件,上传成功 [bcbe836]
- 🐛 My Designs--&gt;Upload Design输入‘标签’内容后没有提示需要按Enter键，标签才生效 [894a35e]
- 🐛 注册时，账号必须包含字母和数字 [b289ad5]
- 🐛 My Designs--&gt;鞋款详情，Last No、Outsole No、Heel No，参数多了一个. [e3e8e65]
- 🐛 My Designs--&gt;Upload Design没有取消按钮 [dcca673]
- 🐛 用户注册-----邮箱验证页面，验证码发送60s内应该置灰不可点 [014788f]
- 🐛 修复登录模块中对数字类型使用trim()方法报错导致无法提交表单 [dbe34e6]
- 🐛 修复带参数登录时出错的问题 [a44affb]
- 🐛 修复登录方法调用错误的问题 [bb3a7b5]
- 🐛 修正个人空间的评论报错问题 [e372224]
- 🐛 允许个人空间的操作权限 [43f1e9e]
- 🐛 错误文本的英文改正 [52ca2be]
- 🐛 邀请多人邮件增加备注参数 [316bec8]
- 🐛 修复concatProps不兼容导致页面崩溃的问题 [f67aac8]
- 🐛 修复由于重构登录导致的登录后 / 路径仍然是 /login的bug [84012a2]
- 🐛 修复重构登录页导致的登录不了和转跳不了的bug [3a2e699]
- 🐛 修复上传函数md5计算出错以及缓存失效的bug [485f6ae]
- 🐛 多人邀请邮箱验证优化 [3460a59]
- 🐛 errhandler错误信息修正 [50cb814]
- 🐛 修复重构导致token过期导致的不能转跳登录的bug [7e4eb22]
- 🐛 CLOSE bug#461 [58b30ab]
- 🐛 不能新建子账号 [615f683]
- 🐛 CLOSE bug#447 [97a81bc]
- 🐛 CLOSE bug#447 [45635ad]
- 🐛 CLOSE bug#447 [0d3c289]
- 🐛 修正消息中心被人@后跳到评论页自动打开评论后，刷新页面仍然自动打开的评论的bug [4be9abc]
- 🐛 搜索输入框取消空格的输入限制 [bc233cb]
- 🐛 CLOSE bug#444 bug#406 [d895360]
- 🐛 CLOSE bug#452 [2267422]
- 🐛 首页--点击‘合作’，内容输入框没有显示标题和必填项 [eae5648]
- 🐛 鞋款详情窗口备注字段导致一系列数据不同步的问题 [5589cf6]
- 🐛 登录表单内容校验不通过时，点击登录，提示信息显示为空的bug [cbf73bb]
- 🐛 CLOSE bug#453 [a9d24ec]
- 🐛 修复路由转跳拦截异常的bug [f49ff94]
- 🐛 模型单元、文件夹单元图片大小限制 [3728057]
- 🐛 模型单元、文件夹单元图片大小限制 [e3a0c7a]
- 🐛 上传模型部件删除时，并没有删除成功 [e2f4366]
- 🐛 修复权限缺少冒号的问题 [f77071b]
- 🐛 右键菜单的权限控制修改 [a277eba]
- 🐛 编辑鞋款保存后，不退出渲染页，可一直按保存生成新版本，内容没改变 [821a347]
- 🐛 交互模式处修改，修正个人模型处不用面料的模式切换 [5422b6c]
- 🐛 限制不同账号进入支付模块 [3748786]
- 🐛 快捷方式文件夹点击后的模块错误修复 [c048c35]
- 🐛 d4需要在进入退出全屏以及resize的时候重新渲染 [5a4a9d2]
- 🐛 invited角色登陆修订记录置灰可点 [0e4214b]
- 🐛 【预生产环境】登录提示错误信息 [fd61308]
- 🐛 修复商品id不对的bug [9037c43]
- 🐛 修复全屏退出后threejs没有重置canvas尺寸的bug [646fd7a]
- 🐛 bug#422 [4ffcd0c]
- 🐛 右键菜单改为打开一个会关掉其他 [161a3ac]
- 🐛 渲染页面鞋模型图标中，点击空白处也能进入没有权限的功能 [5d83103]
- 🐛 添加子账号无法进入支付模块页面 [e5a15e3]
- 🐛 CLOSE bug#402 bug#400 bug#369 bug#404 bug#409 [5f25db0]
- 🐛 保存鞋模型后将新的id 更换到路由上 [d402396]
- 🐛 修改顶部用户头像中的显示该用户的公司角色 [af05140]
- 🐛 渲染页导出时间格式显示不正确 [b14d109]
- 🐛 邀请列表去重 [582ff6b]
- 🐛 修改注册页面 邮箱字段与接口不一致问题 [2197f64]
- 🐛 修复动画失效的问题 [814d6a4]
- 🐛 修复注册页面公司类型和国家类型选择没有数据问题 [4e8c2c0]
- 🐛 修改材质详情弹框中的部分数据不对应问题 [53fee52]
- 🐛 修复重命名文件缺少groupAppId的bug [b9dd56a]
- 🐛 鞋款和面料详情和上传字段统一 [1915de1]
- 🐛 上传材质后在材质详情有些字段无法读取问题 [1f2b075]
- 🐛 上传材料， 上传图片必填项，未上传图片可以点击保存成功 [7de7803]
- 🐛 修复渲染页切换物料失效的bug [8a2f23c]
- 🐛 把时间改为number [9859329]
- 🐛 CLOSE bug#393 [fcc08d7]
- 🐛 Workspaces--修改文件夹名字显示反了 [4fde3de]
- 🐛 列表页面材质和模型重命名失败和命名窗口要带上当前名称问题 [3c2250f]
- 🐛 在Workspaces页面，输入搜索内容，再点击刷新按钮，列表数据刷新，但输入框内容没有清空 [b4ce987]
- 🐛 尝试修复物料太多页面过长的bug [a0ed4da]
- 🐛 渲染页，导出excel，弹出框需要显示默认上传时信息 [7c336ca]
- 🐛 调整材质上传和材质详情弹框字段不统一问题 [498406c]
- 🐛 CLOSE bug#338 bug#342 bug#372 bug#367 [3d1f898]
- 🐛 修改导出样品单权限不对应的问题 [e5fc007]
- 🐛 上传材料， 上传图片必填项，未上传图片可以点击保存成功 [2ee0be9]
- 🐛 上传材料， Contact Information输入框上下加数据建议去掉 [edde9ca]
- 🐛 修改列表页面鞋模型详情弹框无法打开问题 [674f5f4]
- 🐛 修复“我”在列表上不会被替换为username的bug [fd132db]
- 🐛 渲染页面修改鞋模型标签点击范围过小问题 [bdc8d65]
- 🐛 修改上传鞋模型的部件时，把校验文件大小步骤删除 [5095d65]
- 🐛 CLOSE bug#368 [42057e8]
- 🐛 上传设计文件页面中，隐藏上一步按钮 [f94264c]
- 🐛 模型上传文件大小限制调整为5M，大文件提示文件过大； [bc128e4]
- 🐛 渲染页历史版本--当一次修改中操作很多时信息会溢出 [546b135]
- 🐛 修改鞋模型历史版本中的修改记录，将无用记录不显示 [f4aa7ca]
- 🐛 快捷方式点击问题修改 [bb61335]
- 🐛 修改鞋款信息详情弹框中的上传时间和修改时间相反问题 [0849ac1]
- 🐛 修复渲染页，点击‘订阅’按钮，恢复版本好显示不正确 [3f19fe5]
- 🐛 统一时间格式为英文表达方式dd/mm/yyy [4beaa1c]
- 🐛 修复个人中心--个人和公司信息模块中布局错乱问题 [6387f66]
- 🐛 页面顶部 用户信息模块的用户名显示和用户角色显示 [fae0efe]
- 🐛 修复合并导致字典组件错误的bug [e0fee7f]
- 🐛 协同空间让admin也可删除用户 [0f73419]
- 🐛 渲染页面，导出进度停留在99% [e6baa0d]
- 🐛 CLOSE bug#302 bug#303 [57f6989]
- 🐛 渲染页--2D--帮助，点开帮助弹框没有一周都是默认的选项 [3960efb]
- 🐛 档案设置--&gt;个人信息--&gt;更改密码应该显示可以点击按钮 [46a235f]
- 🐛 Workspaces搜索框底色和渲染页搜索框底色不一致 [f2cf371]
- 🐛 修复dict没有id字段，改用value字段 [8b59fb9]
- 🐛 档案设置--&gt;个人信息--&gt;修改位置，错误提示信息使用红色提示 [94cc1a6]
- 🐛 CLOSE bug#304 bug#348 [ab9f553]
- 🐛 上传鞋款的流程页面，上传框文字和框错位，没居中 [5cfeefa]
- 🐛 修复更新dict导致的bug [27f60f9]
- 🐛 修复面料详情弹框中的标签没有显示 [30f4a97]
- 🐛 上传材料，上传前和上传后命名不一致 [c46be14]
- 🐛 修复dict接口更换导致的bug [c9b9fc5]
- 🐛 通过全局修改样式来修复大屏幕显示底下空白 [6d56548]
- 🐛 订购中心点击购买套餐页面，body缺失 [2c21336]
- 🐛 修复个人中心ProfileCooperate路由写错的bug [46fd11c]
- 🐛 @344 @361 [7f1fd07]
- 🐛 @337 @319 [340fb00]
- 🐛 修改切换账户时最近文件的刷新问题 [309e60f]
- 🐛 修复文件夹的快捷方式跳转问题 [cb5a2f1]
- 🐛 bug#358 [ca7f386]
- 🐛 bug#324 [a38c0e8]
- 🐛 修改无法支付的bug，并优化支付成功后的流程（给予提示，增加loading背景） [901edb7]
- 🐛 bug#332 [963f668]
- 🐛 修复新用户没有初始化目录组织的bug [745cbc7]
- 🐛 修复bump命令缺少branch参数的问题 [1c6a1d8]
- 🐛 去掉install在不必要分支的安裝 [bf037ca]
- 🐛 取消注释上传接口 [7fa4e7e]
- 🐛 修改标签未读状态（在导航栏处），要在点击进入后才生效问题 [d0f595d]
- 🐛 修改列表页面中右击事件中的权限控制 [5ce0a31]
- 🐛 增加当鞋子已被删除，操作记录无法打开这种情况，显示错误 [ba5777f]
- 🐛 修复错误的ci语法 [0f508aa]
- 🐛 修复选择最近文件路径的错误 [1d47d0b]
- 🐛 评论列表修复往下滚加载到最下后发新评论后，列表回到第一页没法往下加载的问题 [930f18a]
- 🐛 回滚权限的修改 [d2a3133]
- 🐛 回滚权限的修改 [bfacfdf]
- 🐛 修改操作记录中修改权限时显示出中文的问题 [57538f1]
- 🐛 修复将消息标志为已读状态时，需要刷新页面才生效问题 [c1b888d]
- 🐛 修复忘记密码的账号不对的问题 bug#272 CLOSE [d505b5b]
- 🐛 评论列表改为分页式，滚动到最下加载下一页。调整评论接口 [948c84d]
- 🚑 修复字段不对导致的错误 [397a727]
- 🐛 修改版本历史回复中的文字提醒，倒转问题 [a4366ae]
- 🐛 修改快捷方式点击报错问题 [6a7112e]
- 🚑 修复提示没有修改模型后，还能继续保存的问题 [f2037a8]
- 🐛 渲染页面的面料详情弹框无法显示内容 [8e0eaf0]
- 🐛 修复d4切换物料的时候的报错 [f1dae55]
- 🐛 修复邀请type类型不对导致的邀请弹框不出现的问题 [9a31537]
- 🐛 修复重命名报错的问题 [a599f05]
- 🐛 更新d4 [b8ec4e3]
- 🐛 评论增加workspaceId信息，方便at的人跳转到对应的渲染页 [7d666ca]
- 🐛 秀谷渲染页打开评论会抖动的问题 [e3ae11a]
- 🐛 评论的新建和编辑增加params参数，方便消息中心中读取catalogId和shoeName [4f99b86]
- 🐛 更新d4，并且修复保存的bug [fa3d004]
- 🐛 修复权限的一些兼容性问题 [a536f27]
- 🐛 修复权限的导致登录不了以及部分权限功能冗余的问题 [d7c4a23]
- 🐛 解决操作记录为空时的console报错 [b8711b0]
- 🐛 调整重命名workspace弹框的zindex [6293bd8]
- 🐛 跳转评论弹框大小防抖动 [2c9b297]
- 🐛 修复导航条点击转跳错误的问题 [4665155]
- 🐛 评论的添加图片按钮的触发方式改为跟随下拉菜单变动 [cd09194]
- 🐛 增加操作记录为空的情况的样式 [9f9c231]
- 🐛 操作记录加上总条数记录 [0350da7]
- 🐛 账号中心结束时间控制和workspace是创建者本身没有退出按钮 [258d16d]
- 🐛 更改发布环境的接口baseurl [203d560]
- 🐛 去除操作消息的标题中多余的内容 [344525e]
- 🐛 个人空间进入渲染页不显示评论图标 [c013226]
- 🐛 修复由于类型不一致导致的邀请错误 [7dd7043]
- 🐛 更改域名為uat [bdde112]
- 🐛 由于模型详情弹框组件逻辑变更，列表页调用该组件的逻辑也要变更 [8e06858]
- 🐛 修复由于迭代导致的邀请弹框不出现的bug [6c7b0d4]
- 🐛 模型详情变化和面料详情变化操作模板调换 [00e5b37]
- 🐛 编辑评论后显示modified [b819d0b]
- 🐛 取消渲染页验证 [3e8397b]
- 🐛 修复at组件注册失败报错 [1a2948f]
- 🐛 重置密码验证 [9d8ae0e]
- 🐛 快捷方式防重复代码取消注释 [df186db]
- 🐛 bug240 新增账号翻译 [7e4f81c]
- 🐛 修改 workspace 上传时，上传对应的 worksapce 中 [e28ab33]
- 🐛 取出评论相关组件的console.log，修复部分bug [4ca3ec7]
- 🐛 修复评论为空的情况的判断 [ca05ec1]
- 🐛 修复api更新导致的id类型不兼容的问题 [c7b0a16]
- 🐛 进入渲染页的验证参数格式变化 [41d81ce]
- 🐛 让评论列表的大图查看器置顶 [e2d802a]
- 🐛 解决合并冲突 [d2bd562]
- 🐛 列表页面布局错乱问题； [d1f3dd9]
- 🐛 修复d4冲突导致的错误问题 [5984dd3]
- 🚑 增加eslintignore [321df1f]
- 🐛 修改有语法报错的文件 [ed9a789]
- 🐛 修复缺失groupAppId导致的没有权限的问题 [70f0c69]
- 🐛 锁定权限控制 [5510f78]
- 🐛 邀请链接地址重定向到 /entry/login 路由地址问题；修改路由守卫判断条件； [13f590e]
- 🐛 修复个人鞋款不能编辑的问题 [7be688e]
- 🐛 修复d4保存的问题 [ba79188]
- 🐛 协作空间没有admin下拉选择 [df1d0f0]
- 🐛 workspace邀请外部账号填写邮箱后点击无反应 [3d9633f]
- 🐛 协作空间邀请流程 [a3ecefc]
- 🐛 修复预览物料报错的问题 [317bb45]
- 🐛 给子文件夹的目录添加水印 [82b2016]
- 🐛 修复空文件夹新建时候重复的问题 [1e355a8]
- 🐛 协作空间上传和权限下拉控制 [1ee5c72]
- 🐛 修复移上去tree，没有展开的bug [5a81357]
- 🐛 bug#189 [b9c7cf9]
- 🐛 bug#190 修复图标太小的问题 [d389959]
- 🐛 修复点击物料后报错权限问题 [723e1fb]
- 🐛 创建文件夹接口调整 [948ef0a]
- 🐛 移动文件夹后没有更新appType [80f27a0]
- 🐛 优化子文件夹移动效果 [a7e2789]
- 🐛 修复移动复制子文件夹数量不对的问题 [d1e6ea1]
- 🐛 workspace权限 [6cbc22f]
- 🐛 修复搜索错误或者搜索类型不对的问题 [d99eed9]
- 🐛 bug#183 修复导入没有更新视图的bug [eb3f29e]
- 🐛 修复copy move判断导致的视图错误 [7d864da]
- 🐛 城市选择改成输入形式后端不能存，先不改 [10dfa19]
- 🐛 bug#185 调整渲染页整个页面模块布局 [aea80fc]
- 🐛 操作成功提示的中文改掉或去掉 [7364900]
- 🐛 操作成功提示的中文改掉或去掉 [32e9ba9]
- 🐛 账号中心账号类型 [d98e252]
- 🐛 修改禅道上测试bugs [2b32ec7]
- 🐛 快捷方式提示文本完善 [69467c2]
- 🐛 默认模式设为简洁模式 [8bf9ab9]
- 🐛 修复右键移动错误的问题 [7f27f7e]
- 🐛 修复拖动高亮样式的问题 [a5cbefa]
- 🐛 修复复制物料没有聚焦到当前文件夹的bug [682738e]
- 🐛 修复添加删除文件夹，父文件夹不打开的问题 [0f6e629]
- 🐛 修复复制功能重复内容的bug [29a09ae]
- 🐛 修复文件夹移动出错的功能 [c6577d8]
- 🐛 修复导入缺少权限的bug [c82836b]
- 🐛 导航栏最近文件夹记录小bug修复 [d870947]
- 🐛 协作空间 [bbc4ad7]
- 🐛 后台变更进入渲染页的接口的参数，重新对接 [8c37621]
- 🐛 快捷方式第二个列表的样式修改 [dcb1a2e]
- 🐛 增加取消选择功能、增加在选择状态下点文件名能重命名功能、修改部分接口参数（后台改了） [07d0c2d]
- 🐛 套餐选择时的价格加上两位小数的限制 [22e120d]
- 🐛 禁止部分区域的右键事件 [c9eafae]
- 🐛 修复 Materials Libaray 点击没有反应的bug [eb9b9bf]
- 🐛 优化调整move和copy方法 [7beb86d]
- 🐛 修复title重复的bug [d5cfbf7]
- 🐛 package增加新工具 [57eab5d]
- 🐛 修正初次登录时切换模块的报错问题 [fc53247]
- 🐛 搜索接口变更，可以搜索文件夹了 [c5becb4]
- 🐛 部分英文表述修正 [91a658d]
- 🐛 修改部分英文的文字描述 [5b4ab40]
- 🐛 D4文件修改排料问题 [daa1886]
- 🐛 token过期校验包括401状态码 [99d1f3e]

### Security

- 🔒 根目录接口把groupAppId放在headers里 [a8559ce]

### Miscellaneous

-  Merge branch &#x27;1.3.0&#x27; into 1.4.0 [4dd8954]
-  Merge branch &#x27;1.3.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.3.0 [888bd45]
-  Merge branch &#x27;1.3.0&#x27; into uat [8e8b936]
-  Merge branch &#x27;dannny&#x27; into 1.3.0 [f7f55e8]
-  Merge remote-tracking branch &#x27;origin/1.3.0&#x27; into uat [9311910]
-  Merge branch &#x27;1.3.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.3.0 [947bcc4]
-  Merge remote-tracking branch &#x27;origin/1.3.0&#x27; into 1.3.0 [8c9f6df]
-  Merge remote-tracking branch &#x27;origin/1.3.0&#x27; into stephen [b2fef11]
-  Merge branch &#x27;1.3.0&#x27; of https://gitlab.4dshoetech.com/front-end/demon-home into 1.3.0 [bc16294]
-  Merge branch &#x27;1.3.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.3.0 [2f23d15]
-  Merge branch &#x27;1.3.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.3.0 [f5caa41]
-  Merge branch &#x27;1.3.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.3.0 [87a68e8]
-  Merge branch &#x27;onion&#x27; into 1.3.0 [33e3719]
-  Merge branch &#x27;onion&#x27; into 1.3.0 [94d19a8]
-  Merge branch &#x27;1.3.0&#x27; of https://gitlab.4dshoetech.com/front-end/demon-home into 1.3.0 [311e6aa]
-  Merge branch &#x27;1.3.0&#x27; of https://gitlab.4dshoetech.com/front-end/demon-home into 1.3.0 [b00f756]
-  Merge branch &#x27;1.3.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.3.0 [16196a0]
-  Merge branch &#x27;onion&#x27; into 1.3.0 [c898cbe]
-  Merge remote-tracking branch &#x27;origin/1.3.0&#x27; into stephen [0830c34]
-  Merge branch &#x27;1.3.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.3.0 [490dbd0]
-  Merge remote-tracking branch &#x27;origin/1.3.0&#x27; into stephen [c5260f4]
-  Merge branch &#x27;1.3.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.3.0 [407f1fd]
-  Merge branch &#x27;onion&#x27; into 1.3.0 [82abd6e]
-  Merge remote-tracking branch &#x27;origin/1.3.0&#x27; into test [bae5716]
-  Merge remote-tracking branch &#x27;origin/1.3.0&#x27; into stephen [e78f898]
-  Merge branch &#x27;onion&#x27; into 1.3.0 [c6c1a27]
-  Update .rancher-pipeline.yml file [66c6a12]
- 🔀 合并分支 [7ba5321]
-  Update .rancher-pipeline.yml file [a0a3cef]
-  Update .rancher-pipeline.yml file [9ce764f]
-  Merge branch &#x27;1.3.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.3.0 [a6fa883]
-  Merge remote-tracking branch &#x27;origin/1.3.0&#x27; into 1.3.0 [1fe6f23]
-  Merge branch &#x27;onion&#x27; into 1.3.0 [d3c74c8]
-  修改detail页面样式 [c92b7bc]
-  Merge remote-tracking branch &#x27;origin/1.3.0&#x27; into stephen [bf3e3c8]
-  Merge branch &#x27;1.3.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.3.0 [9b135ce]
-  Merge branch &#x27;1.3.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.3.0 [2c90805]
-  Merge branch &#x27;onion&#x27; into 1.3.0 [81c4c76]
-  Merge branch &#x27;1.3.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.3.0 [ba33439]
-  Merge branch &#x27;onion&#x27; into 1.3.0 [383b8e4]
-  Merge branch &#x27;1.3.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.3.0 [0cecf2f]
-  Merge branch &#x27;stephen&#x27; into 1.3.0 [cf1573c]
-  Merge remote-tracking branch &#x27;origin/1.3.0&#x27; into stephen [a84cfe9]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into 1.3.0 [0424d91]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [7b9fc9e]
-  Merge branch &#x27;1.2.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.2.0 [e5f7e00]
-  Merge remote-tracking branch &#x27;origin/1.2.0&#x27; into uat [f548910]
-  Merge branch &#x27;1.2.0&#x27; into uat [232bbfa]
-  Merge branch &#x27;1.2.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.2.0 [77ef7b7]
-  Merge branch &#x27;1.2.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.2.0 [539d2a4]
-  Merge remote-tracking branch &#x27;origin/1.2.0&#x27; into 1.3.0 [0483f28]
-  Merge remote-tracking branch &#x27;origin/1.2.0&#x27; into 1.3.0 [e0ef2ef]
-  Merge branch &#x27;1.2.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.2.0 [2fbd420]
-  Merge branch &#x27;stephen-uat&#x27; into 1.2.0 [ea4e2e3]
-  Merge remote-tracking branch &#x27;origin/uat&#x27; into stephen-uat [73685be]
-  Merge remote-tracking branch &#x27;origin/1.2.0&#x27; into stephen-uat [da7f59b]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [cf2774f]
-  Merge branch &#x27;1.2.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.2.0 [25f6a19]
-  Update .rancher-pipeline.yml file [bdb0fd4]
-  Merge branch &#x27;stephen-uat&#x27; into uat [ad8074d]
-  Merge branch &#x27;stephen&#x27; into 1.2.0 [fcf14d7]
-  Merge remote-tracking branch &#x27;origin/uat&#x27; into 1.2.0 [69db828]
-  Merge branch &#x27;stephen-uat&#x27; into uat [91005ee]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3280afe]
-  Merge branch &#x27;1.2.0&#x27; into uat [4c74fa2]
-  Merge remote-tracking branch &#x27;origin/1.2.0&#x27; into 1.2.0 [a9f3b9d]
-  Merge branch &#x27;1.2.0&#x27; into uat [d56933d]
-  Merge remote-tracking branch &#x27;origin/1.2.0&#x27; into onion [705bfb1]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [eacf0c3]
-  Merge branch &#x27;1.2.0&#x27; into uat [9e9e3f1]
- 💩 临时去掉对viewerjs url的签名 [7d91b88]
-  Update .rancher-pipeline.yml file [3e20fcb]
-  Update .rancher-pipeline.yml file [791587b]
-  Update .rancher-pipeline.yml file [76c903f]
-  Update .rancher-pipeline.yml file [0424331]
-  Update .rancher-pipeline.yml file [1871a51]
-  Update .rancher-pipeline.yml file [eb91a09]
-  Update .rancher-pipeline.yml file [061940c]
-  Update .rancher-pipeline.yml file [39e90e5]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [74a27ff]
-  Merge branch &#x27;1.2.0&#x27; into uat [f498c05]
-  Update .rancher-pipeline.yml file [aec77f6]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [1ae30b7]
-  Merge branch &#x27;1.2.0&#x27; into uat [1bc61f7]
- 🔀 合并分支 [c9b4279]
-  Merge remote-tracking branch &#x27;origin/1.2.0&#x27; into uat [a1c3608]
-  Merge branch &#x27;1.2.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.2.0 [a1015b6]
-  Merge branch &#x27;1.2.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.2.0 [68c0068]
-  Merge branch &#x27;1.2.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.2.0 [7072c82]
- 🔀 解决合并冲突 [f83017b]
-  Merge branch &#x27;1.2.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.2.0 [f8c13a1]
-  Merge branch &#x27;stephen&#x27; into 1.2.0 [0f63761]
- 🚀 修改创建虚拟账号和模型详情手势弹框的样式 [1904745]
- 🔀 合并代码 [ded50f2]
-  Merge branch &#x27;onion&#x27; into 1.2.0 [2112502]
- 🔀 解决合并冲突 [dd21d71]
- 🔀 合并分支 [2f9b1f9]
-  Merge branch &#x27;1.2.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.2.0 [920cb9d]
-  Merge branch &#x27;1.2.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.2.0 [39e3a50]
- 🔀 解决合并冲突 [5509ee6]
- 🔀 解决合并冲突 [64ac08b]
-  Merge branch &#x27;1.2.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.2.0 [10ec440]
-  Merge branch &#x27;1.2.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.2.0 [d1f8a4a]
-  Merge branch &#x27;onion&#x27; into 1.2.0 [119de9d]
-  Merge remote-tracking branch &#x27;origin/1.2.0&#x27; into onion [54ac193]
-  Merge branch &#x27;1.2.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.2.0 [5d80ee6]
-  Merge remote-tracking branch &#x27;origin/1.2.0&#x27; into onion [a25474c]
-  Merge remote-tracking branch &#x27;origin/1.2.0&#x27; into stephen [758317c]
-  Merge branch &#x27;1.2.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.2.0 [fc1c0cf]
-  Merge branch &#x27;1.2.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.2.0 [f7fec44]
-  Merge branch &#x27;onion&#x27; into 1.2.0 [439245f]
-  Merge branch &#x27;1.2.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.2.0 [783b31e]
-  Merge branch &#x27;1.2.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.2.0 [687440b]
-  Merge branch &#x27;1.2.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.2.0 [be8359d]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into 1.2.0 [345956a]
-  Merge branch &#x27;onion&#x27; into 1.2.0 [be00d3d]
-  Merge remote-tracking branch &#x27;origin/1.2.0&#x27; into onion [047066d]
-  Merge branch &#x27;1.1.0&#x27; into 1.2.0 [f4ac6e9]
-  Merge branch &#x27;1.1.0&#x27; into uat [cec76cf]
- 📦 更新lock文件 [8ccbcc9]
- 🔀 合并分支 [faa795b]
- 📦 更新pipeline 为 yarn [98fdf9b]
-  Merge branch &#x27;1.1.0&#x27; into uat [7111b25]
- 📦 更改package的配置 [3fc8dfa]
- 📦 将npm换成yarn作为包管理器 [a01ff33]
-  Merge branch &#x27;1.2.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.2.0 [b808738]
- 📦 将npm换成yarn作为包管理器 [21b1109]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [e4384f7]
-  Merge branch &#x27;1.1.0&#x27; into uat [0c53762]
-  Merge branch &#x27;1.1.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.1.0 [3346ca1]
-  Merge remote-tracking branch &#x27;origin/1.1.0&#x27; into 1.2.0 [5c77ae7]
- 🔀 合并代码 [1afdddc]
-  Update .rancher-pipeline.yml file [f8312d5]
-  Update .rancher-pipeline.yml file [09a9881]
-  Merge branch &#x27;1.1.0&#x27; into 1.2.0 [0519fd7]
-  Merge branch &#x27;1.1.0&#x27; into uat [d04a52c]
- 🔀 合并分支 [559ef4f]
-  Merge branch &#x27;1.1.0&#x27; into uat [0627b7d]
-  Merge branch &#x27;1.1.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.1.0 [bced1a6]
-  Merge branch &#x27;1.1.0&#x27; into 1.2.0 [466064c]
-  Merge branch &#x27;1.1.0&#x27; into 1.2.0 [e911c63]
-  Merge branch &#x27;1.1.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.1.0 [a0192fe]
-  Merge branch &#x27;1.2.0&#x27; into onion [c235426]
-  Merge branch &#x27;1.1.0&#x27; into onion [d47acc6]
-  Merge branch &#x27;1.1.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.1.0 [d1417b7]
-  Update .rancher-pipeline.yml file [c6a594d]
-  Merge branch &#x27;1.1.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.1.0 [159eabf]
- 🔀 解决冲突 [5751285]
-  Merge remote-tracking branch &#x27;origin/1.1.0&#x27; into stephen [aa847b7]
-  Merge branch &#x27;1.1.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.1.0 [fa75d0d]
- 🔀 解决合并冲突 [c1211f7]
-  Merge branch &#x27;1.1.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.1.0 [f5c0f66]
-  Merge remote-tracking branch &#x27;origin/1.1.0&#x27; into stephen [2a229df]
-  Merge branch &#x27;1.1.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.1.0 [10e47a8]
-  Merge branch &#x27;onion&#x27; into 1.1.0 [c7d3246]
-  Merge branch &#x27;onion&#x27; into 1.1.0 [1c83b7e]
-  Merge branch &#x27;1.1.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.1.0 [9cfcaac]
-  Merge remote-tracking branch &#x27;origin/1.1.0&#x27; into onion [cfa02a5]
-  Merge branch &#x27;1.1.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.1.0 [98ea59d]
-  Merge branch &#x27;1.1.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.1.0 [164ec87]
-  Merge branch &#x27;onion&#x27; into 1.1.0 [890a308]
-  Merge branch &#x27;1.1.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.1.0 [542f07d]
-  Merge branch &#x27;onion&#x27; into 1.1.0 [d5b8a09]
-  Merge branch &#x27;onion&#x27; into 1.1.0 [9b6e5f2]
-  Merge branch &#x27;onion&#x27; into 1.1.0 [5d8808e]
-  Merge remote-tracking branch &#x27;origin/1.1.0&#x27; into stephen [0f9aa07]
- 🔀 解决冲突 [5330504]
-  Merge remote-tracking branch &#x27;origin/1.1.0&#x27; into stephen [1f92c9e]
-  Merge branch &#x27;1.1.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.1.0 [a2bca70]
-  Merge remote-tracking branch &#x27;origin/1.1.0&#x27; into stephen [d1c1ffe]
-  Merge branch &#x27;onion&#x27; into 1.1.0 [0bd02d9]
- 🔀 解决冲突 [bb26fd6]
-  Merge branch &#x27;1.1.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.1.0 [d27816c]
-  Merge remote-tracking branch &#x27;origin/1.1.0&#x27; into stephen [6707999]
- 🔀 合并冲突 [d9092a5]
-  Merge branch &#x27;onion&#x27; into 1.1.0 [5d9b687]
-  Merge branch &#x27;onion&#x27; into 1.1.0 [1f0033a]
-  Merge branch &#x27;1.1.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.1.0 [c672a2c]
-  Merge branch &#x27;onion&#x27; into 1.1.0 [2f8f0bb]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into 1.1.0 [f13a63d]
-  Merge remote-tracking branch &#x27;origin/1.1.0&#x27; into stephen [c8b13f7]
-  Merge branch &#x27;onion&#x27; into 1.1.0 [8480368]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into 1.1.0 [05dba58]
-  Merge remote-tracking branch &#x27;origin/1.1.0&#x27; into stephen [0773949]
-  Merge branch &#x27;1.1.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.1.0 [d3ee64a]
-  Merge branch &#x27;onion&#x27; into 1.1.0 [0eea406]
-  Merge remote-tracking branch &#x27;origin/1.1.0&#x27; into 1.1.0 [7f917ce]
-  Merge branch &#x27;stephen-1.0.1&#x27; into 1.1.0 [3179cbc]
-  Merge branch &#x27;1.1.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.1.0 [3a974a4]
-  Merge remote-tracking branch &#x27;origin/master&#x27; into stephen-1.0.1 [4b3d540]
- 🔀 合并1.1.0，解决冲突 [0a1f3aa]
- 🔀 合并分支 [6350e84]
-  Merge remote-tracking branch &#x27;origin/uat&#x27; [e0deb79]
-  Merge remote-tracking branch &#x27;origin/hotfix-1.0.0&#x27; into uat [b6a265a]
-  Merge remote-tracking branch &#x27;origin/hotfix-1.0.0&#x27; into uat [86ca678]
-  账号中心页面的首页的几个弹框内容 [8f1d380]
- 🔀 合并分支 [f889cf1]
-  Merge branch &#x27;1.1.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.1.0 [4e22bf0]
-  Merge branch &#x27;ken1.0&#x27; into 1.1.0 [888eac2]
-  Merge remote-tracking branch &#x27;origin/1.0.0&#x27; into 1.1.0 [37f707b]
-  Merge branch &#x27;1.1.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.1.0 [bf6c6e3]
-  Merge branch &#x27;stephen-1.0.1&#x27; into 1.1.0 [13e2ad5]
-  Merge remote-tracking branch &#x27;origin/1.1.0&#x27; into stephen-1.0.1 [59a92cf]
-  Merge remote-tracking branch &#x27;origin/1.1.0&#x27; into 1.1.0 [6f5d520]
-  Merge branch &#x27;ken1.0&#x27; into 1.0.0 [09adcdb]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [d151239]
-  Merge branch &#x27;hotfix-1.0.0&#x27; into 1.0.0 [45e60a4]
-  Merge branch &#x27;hotfix-1.0.0&#x27; into 1.1.0 [eaa9bc2]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into 1.1.0 [0d6eb4e]
-  Merge commit &#x27;403a4399c76fdad744977347641e55ed8686e3a8&#x27; into 1.1.0 [bf2da0d]
-  Merge remote-tracking branch &#x27;origin/hotfix-1.0.0&#x27; into uat [7f5f9a4]
-  Merge remote-tracking branch &#x27;origin/hotfix-1.0.0&#x27; [0b821a4]
-  Update .rancher-pipeline.yml file [c893d8a]
-  Update .rancher-pipeline.yml file [fad2e69]
-  Update .rancher-pipeline.yml file [1a4b301]
-  Update .rancher-pipeline.yml file [f88df75]
-  Merge remote-tracking branch &#x27;origin/uat&#x27; [f60b5f5]
-  Update .rancher-pipeline.yml file [e6d7dd1]
-  Merge remote-tracking branch &#x27;origin/hotfix-1.0.0&#x27; into uat [02f622b]
-  Update .rancher-pipeline.yml file [df6896c]
-  Update .rancher-pipeline.yml file [5c1a47f]
-  Update .rancher-pipeline.yml file [749ce9e]
-  Update .rancher-pipeline.yml file [081a27f]
-  Merge remote-tracking branch &#x27;origin/uat&#x27; into stephen-1.0.1 [1b2e123]
-  Merge branch &#x27;hotfix-1.0.0&#x27; into 1.0.0 [f800288]
-  Merge branch &#x27;hotfix-1.0.0&#x27; into 1.0.0 [199db42]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [f6036fe]
- 🔀 合并分支 [caf478c]
-  Merge branch &#x27;ken1.0&#x27; into 1.0.0 [a8fb1da]
-  Merge remote-tracking branch &#x27;origin/hotfix-1.0.0&#x27; into uat [dd244f2]
-  Merge remote-tracking branch &#x27;origin/hotfix-1.0.0&#x27; into stephen-1.0.1 [9c85655]
-  Merge remote-tracking branch &#x27;origin/hotfix-1.0.0&#x27; into uat [d664b45]
-  Merge remote-tracking branch &#x27;origin/1.0.0&#x27; into hotfix-1.0.0 [be2c4c7]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [49f74a8]
-  Merge branch &#x27;ken1.0&#x27; into 1.0.0 [6f404a1]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [1fbe422]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [f37d20c]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [69e1802]
-  Merge branch &#x27;ken1.0&#x27; into 1.0.0 [8700dfa]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [b969cd7]
-  Merge branch &#x27;ken1.0&#x27; into 1.0.0 [2d4a573]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [3142204]
- 🔀 合并分支 [8a78aec]
-  Merge branch &#x27;hotfix-1.0.0&#x27; into 1.0.0 [6d3919a]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [52b9e1d]
-  Merge branch &#x27;ken1.0&#x27; into 1.0.0 [7fab352]
-  Merge branch &#x27;1.0.0&#x27; into hotfix-1.0.0 [7f4f05d]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [1763830]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [d8a7b40]
-  Update .rancher-pipeline.yml file [ec183f8]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [5e8ac0f]
-  Merge branch &#x27;ken1.0&#x27; into 1.0.0 [9df2643]
-  Update .rancher-pipeline.yml file [7074d63]
-  Update .rancher-pipeline.yml file [98e0d62]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [5da0633]
-  Merge remote-tracking branch &#x27;origin/1.0.0&#x27; [766b755]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [a8439ed]
-  Merge remote-tracking branch &#x27;origin/1.0.0&#x27; [dae025d]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [4b3d344]
-  Merge branch &#x27;1.0.0&#x27; [995f19d]
-  Merge branch &#x27;1.0.0&#x27; [b93fbc5]
-  Merge branch &#x27;1.0.0&#x27; into test [1289cf0]
-  Merge branch &#x27;1.0.0&#x27; into uat [4b5267e]
-  Merge branch &#x27;1.0.0&#x27; [04b7e8f]
- 🔀 merge origin 1.0.0 [de5375e]
-  Merge remote-tracking branch &#x27;origin/1.0.0&#x27; [f71b6e6]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [f6e2df7]
-  Merge branch &#x27;ken1.0&#x27; into 1.0.0 [7a447db]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [ddff1e3]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [52d9fe6]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [869aba2]
-  Merge branch &#x27;ken1.0&#x27; into 1.0.0 [23540ea]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [0b5751d]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [70fc276]
-  Merge branch &#x27;onion&#x27; into 1.0.0 [d40b0df]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [a6cc02f]
-  Merge branch &#x27;onion&#x27; into 1.0.0 [add4618]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [1882fea]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [9c13b9b]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [efbc723]
-  Merge branch &#x27;onion&#x27; into 1.0.0 [0b467e3]
-  Merge branch &#x27;onion&#x27; into 1.0.0 [ec6c6df]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [8e308d9]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [6743acf]
-  Merge branch &#x27;ken1.0&#x27; into 1.0.0 [f7ed4ed]
- 🔀 合并分支 [27c118c]
- 🔀 解决合并冲突 [99bc46c]
-  Merge remote-tracking branch &#x27;origin/1.0.0&#x27; into uat [ffc547f]
-  Merge branch &#x27;onion&#x27; into 1.0.0 [720d14f]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [3546bb6]
-  Merge branch &#x27;ken1.0&#x27; into 1.0.0 [80c4a36]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [f94a10e]
-  Merge branch &#x27;onion&#x27; into 1.0.0 [97aecdb]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [77bc2bd]
-  Merge branch &#x27;ken1.0&#x27; into 1.0.0 [06d1424]
-  Merge branch &#x27;onion&#x27; into 1.0.0 [61296d1]
-  Merge branch &#x27;onion&#x27; into 1.0.0 [b0d4acc]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [e7ec785]
-  Merge branch &#x27;ken1.0&#x27; into 1.0.0 [e7b70e2]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [02852a7]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [7a09ac9]
-  Merge branch &#x27;onion&#x27; into 1.0.0 [a77a545]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [90c8ad0]
-  Merge branch &#x27;onion&#x27; into 1.0.0 [a8ad9b2]
-  Merge branch &#x27;ken1.0&#x27; into 1.0.0 [eb88219]
- 🔀 合并分支 [ea03150]
- 🔀 合并分支 [8d9db0a]
-  Merge branch &#x27;onion&#x27; into 1.0.0 [3b30c66]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [ec4f430]
-  Update .rancher-pipeline.yml file [20b5956]
-  Update .rancher-pipeline.yml file [ffc707c]
-  Merge branch &#x27;onion&#x27; into 1.0.0 [393ef88]
-  Merge branch &#x27;onion&#x27; into 1.0.0 [9915313]
-  Merge branch &#x27;ken1.0&#x27; into 1.0.0 [8d257ac]
-  Merge branch &#x27;1.0.0&#x27; of https://gitlab.4dshoetech.com/front-end/demon-home into 1.0.0 [87cb3db]
-  Merge branch &#x27;onion&#x27; into 1.0.0 [7675a38]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [39cb3ed]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [b8f040e]
-  Merge branch &#x27;onion&#x27; into 1.0.0 [e7deed6]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [c1a947f]
-  Merge branch &#x27;ken1.0&#x27; into 1.0.0 [1e12ad2]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [2f9f1ad]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [539c7a7]
-  Merge branch &#x27;onion&#x27; into 1.0.0 [92cd1ae]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [0ba1d6f]
-  Merge branch &#x27;1.0.0&#x27; of https://gitlab.4dshoetech.com/front-end/demon-home into 1.0.0 [c26a306]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [31c524a]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [000c67f]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [bd74aae]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [93ac915]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [04d3682]
- 🔀 解决合并冲突 [039da52]
- 🔀 解决合并冲突 [4782623]
- 📝 更新虚拟账号的权限表 [729e35c]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [5f12645]
- 🔀 处理合并后代码出错的问题 [2c15fc7]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [28182e6]
-  Merge branch &#x27;ken1.0&#x27; into 1.0.0 [9ccbb73]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [3f70cc7]
- 🙈 增加忽略npm开头的脚本文件 [9383279]
-  Merge branch &#x27;onion&#x27; into 1.0.0 [b84222d]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [58b4fbc]
-  Merge branch &#x27;ken1.0&#x27; into 1.0.0 [a0822f8]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [ca7cc63]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [f959a85]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [c19ad3d]
-  Merge branch &#x27;ken1.0&#x27; into 1.0.0 [9b98f2b]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [8aed2f7]
-  Merge branch &#x27;1.0.0&#x27; of https://gitlab.4dshoetech.com/front-end/demon-home into 1.0.0 [1b6bad1]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [447b6a1]
-  Merge branch &#x27;onion&#x27; into 1.0.0 [2e5e153]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [544715b]
-  Merge branch &#x27;onion&#x27; into 1.0.0 [c0259f7]
-  Merge branch &#x27;1.5.4&#x27; into 1.0.0 [4b416f1]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [ed930cb]
-  Merge branch &#x27;1.5.4&#x27; [375b91b]
-  Merge branch &#x27;1.5.4&#x27; into uat [da2dc70]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [6abec1e]
-  Merge branch &#x27;ken1.0&#x27; into 1.0.0 [54e59ff]
-  Merge branch &#x27;ken1.0&#x27; into 1.0.0 [87253f7]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [af93783]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [95f0920]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [76a1a0e]
-  Merge branch &#x27;ken1.0&#x27; into 1.0.0 [2a7a32c]
-  Merge branch &#x27;onion&#x27; into 1.0.0 [e58a8b2]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [cd90899]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [18175ce]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [a1921c2]
-  Merge branch &#x27;ken1.0&#x27; into 1.0.0 [994961e]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [f3f4cac]
- 🔀 解决合并冲突 [13dbb06]
-  Merge branch &#x27;1.0.0&#x27; into onion [e56b373]
- 🔀 合并分支 [b3bacd6]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [128831b]
-  Merge branch &#x27;ken1.0&#x27; into 1.0.0 [732a709]
-  Merge branch &#x27;1.0.0&#x27; of https://gitlab.4dshoetech.com/front-end/demon-home into 1.0.0 [d0d5dfe]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [5461cf3]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [7f22eeb]
-  Merge remote-tracking branch &#x27;origin/harvey&#x27; into 1.0.0 [f7a799d]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into 1.0.0 [69f017f]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [8bafb08]
-  Merge branch &#x27;harvey&#x27; of gitlab.4dshoetech.com:front-end/demon-home into harvey [ac9676a]
-  Merge branch &#x27;1.5.4&#x27; into 1.0.0 [4008898]
- 🔀 合并分支 [bb4f970]
- 🔀 合并分支 [a5f899c]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [7a90c26]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [6004d33]
- 🔀 合并 [dabfa03]
- 🔀 解决合并冲突 [8b15cee]
-   样式 [715aacf]
-   样式 [f71fd3c]
- 🔀 解决合并冲突 [bee06fc]
-  Merge branch &#x27;onion&#x27; into 1.0.0 [38a1dfd]
- 🔀 合并分支 [17f18c3]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [b2b795a]
-  Merge branch &#x27;1.0.0&#x27; into onion [2d63796]
-  Merge branch &#x27;ken1.0&#x27; into 1.0.0 [a752585]
-  Merge branch &#x27;1.0.0&#x27; of https://gitlab.4dshoetech.com/front-end/demon-home into 1.0.0 [1041b59]
-  Merge remote-tracking branch &#x27;origin/1.0.0&#x27; into 1.0.0 [aefa704]
-  Merge branch &#x27;ken1.0&#x27; into 1.0.0 [1ebeaa7]
-  Update .rancher-pipeline.yml file [1c61e56]
-  Update .rancher-pipeline.yml file [5eae98d]
-  Update .rancher-pipeline.yml file [b45bd40]
-  Update .rancher-pipeline.yml file [8496f66]
-  Merge branch &#x27;1.0.0&#x27; of https://gitlab.4dshoetech.com/front-end/demon-home into 1.0.0 [47dbe38]
-  Merge branch &#x27;1.0.0&#x27; into test [a9b40cf]
-  Merge branch &#x27;1.5.4&#x27; into 1.0.0 [ac65d0f]
-  Merge branch &#x27;1.5.4&#x27; [ef879ae]
-  Merge branch &#x27;1.5.4&#x27; into uat [acbc3b2]
-  Merge branch &#x27;1.0.0&#x27; into test [f7b4e0b]
-  Merge branch &#x27;1.5.4&#x27; into 1.0.0 [19f5c78]
-  Merge branch &#x27;1.0.0&#x27; into test [efbb4f0]
-  Merge branch &#x27;1.5.4&#x27; [9194215]
-  Merge branch &#x27;1.5.4&#x27; into uat [c4e2a05]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [af59adf]
-  Merge branch &#x27;1.5.4&#x27; into 1.0.0 [22ae38b]
-  Merge branch &#x27;1.5.4&#x27; [de45a06]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [047dc45]
-  Merge branch &#x27;1.5.4&#x27; into uat [0073f32]
-  Merge branch &#x27;1.5.4&#x27; into test [e2cf2d1]
-  Update .rancher-pipeline.yml file [62e2c63]
-  Update .rancher-pipeline.yml file [333c4de]
-  Update .rancher-pipeline.yml file [4ab38cb]
-  暂时提交 [982b379]
-  Update .rancher-pipeline.yml file [7191adc]
-  Update .rancher-pipeline.yml file [67f0236]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [330961d]
-  Merge branch &#x27;1.5.4&#x27; into 1.0.0 [12d3753]
-  Update .rancher-pipeline.yml file [3df474b]
-  Update .rancher-pipeline.yml file [13e613a]
-  合并 [39aa334]
-  Merge branch &#x27;ken1.0&#x27; into 1.0.0 [2bdf532]
-  Update .rancher-pipeline.yml file [f8525c5]
-  Merge branch &#x27;1.5.4&#x27; into 1.0.0 [26e9504]
-  Merge branch &#x27;1.5.4&#x27; into test [c7e4ae9]
-  Merge branch &#x27;1.5.4&#x27; into uat [70c9da3]
-  Merge branch &#x27;1.5.4&#x27; into 1.0.0 [2e1c26b]
-  Merge branch &#x27;1.5.4&#x27; into 1.0.0 [8f8323d]
-  Merge branch &#x27;1.5.4&#x27; into test [e1088a0]
-  Merge branch &#x27;test&#x27; of gitlab.4dshoetech.com:front-end/demon-home into test [394640d]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [e0cb89e]
-  Merge branch &#x27;1.5.4&#x27; into 1.0.0 [bbaddee]
-  Merge branch &#x27;1.5.4&#x27; into uat [1da5b1e]
-  Merge branch &#x27;uat&#x27; of gitlab.4dshoetech.com:front-end/demon-home into uat [c1dc8a6]
-  Merge branch &#x27;stephen-1.5.5&#x27; into 1.0.0 [256be5a]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [b526fe9]
-  Merge branch &#x27;1.0.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.0.0 [e3842f1]
-  Merge branch &#x27;1.5.4&#x27; into 1.0.0 [cf72768]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [e60ae07]
-  Update .rancher-pipeline.yml file [d6a142c]
-  Update .rancher-pipeline.yml file [67bd1e5]
-  Merge remote-tracking branch &#x27;origin/1.5.4&#x27; into 1.0.0 [df9a1f1]
-  Merge branch &#x27;ken1.0&#x27; into 1.5.4 [a45ef96]
-  Merge branch &#x27;1.5.4&#x27; into onion [039b04a]
-  Update .rancher-pipeline.yml file [0dec352]
-  Update .rancher-pipeline.yml file [8b1d692]
- 🔀 合并分支 [d095ae7]
- 🔀 合并分支 [dce6cac]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [b123098]
-  Merge branch &#x27;ken1.0&#x27; into 1.5.4 [f179735]
-  Merge branch &#x27;1.5.4&#x27; into 1.0.0 [9e591ce]
-  Merge branch &#x27;1.5.4&#x27; into 1.0.0 [f30726e]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [2897605]
-  Merge branch &#x27;ken1.0&#x27; into 1.5.4 [f3c4797]
-  Merge branch &#x27;1.5.4&#x27; of https://gitlab.4dshoetech.com/front-end/demon-home into 1.5.4 [978635b]
-  Update DynamicValidateEmail.vue [4551932]
-  Merge branch &#x27;ken1.0&#x27; into 1.5.4 [fe3346c]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [a79dbaf]
-  Merge branch &#x27;ken1.0&#x27; into 1.5.4 [1a943c9]
-  Merge branch &#x27;1.5.4&#x27; of https://gitlab.4dshoetech.com/front-end/demon-home into 1.5.4 [d90d917]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [7c36e0c]
-  Merge branch &#x27;stephen&#x27; into 1.5.4 [2a1fad6]
-  npm install [ee6b8b1]
-  Merge branch &#x27;1.5.4&#x27; into harvey [ef58fcd]
-  Merge branch &#x27;stephen&#x27; into 1.5.4 [5f64b57]
-  Merge branch &#x27;onion&#x27; into 1.5.4 [06276f8]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [025cad1]
-  Merge remote-tracking branch &#x27;origin/1.5.4&#x27; into harvey [d16bb9f]
-  Merge branch &#x27;1.5.4&#x27; of https://gitlab.4dshoetech.com/front-end/demon-home into 1.5.4 [9237db3]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [30e8f09]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into stephen [4d387ec]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into stephen [210ee34]
-  Merge remote-tracking branch &#x27;origin/1.5.4&#x27; into stephen [45b55ed]
-  Merge branch &#x27;1.0.0&#x27; into harvey [3e7e3ab]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into harvey [8fe4ea8]
-  Merge branch &#x27;onion&#x27; into 1.5.4 [add8616]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [32497fc]
-  Merge branch &#x27;1.5.4&#x27; into onion [ffaa51f]
-  Merge remote-tracking branch &#x27;origin/1.5.4&#x27; into stephen [1764268]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [0cfc5de]
-  Update .rancher-pipeline.yml file [e7866a2]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [209cd11]
-  Merge branch &#x27;stephen&#x27; into 1.5.4 [0ff9bf8]
-  Merge branch &#x27;ken1.0&#x27; into 1.5.4 [47e2b43]
-  Merge branch &#x27;1.5.4&#x27; of https://gitlab.4dshoetech.com/front-end/demon-home into 1.5.4 [db45dbc]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [8cb2d6b]
-  Merge branch &#x27;stephen&#x27; into 1.5.4 [d62fea9]
-  Merge branch &#x27;onion&#x27; into 1.5.4 [5d79d06]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [f4e8596]
-  Merge branch &#x27;onion&#x27; into 1.5.4 [1c3b5d7]
-  Merge branch &#x27;ken1.0&#x27; into 1.5.4 [cba6c35]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [e5364cf]
-  Merge branch &#x27;ken1.0&#x27; into 1.5.4 [704015f]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [ff960cd]
-  Merge branch &#x27;stephen&#x27; into 1.5.4 [424f3c8]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [636c559]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [d84a582]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [f86c22e]
-  Merge branch &#x27;ken1.0&#x27; into 1.5.4 [d7e33c9]
-  Merge branch &#x27;onion&#x27; into 1.5.4 [ff63c0c]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [7b59b82]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [45b4325]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [278676a]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [5546093]
-  Merge branch &#x27;1.5.4&#x27; of https://gitlab.4dshoetech.com/front-end/demon-home into 1.5.4 [fafe968]
-  Merge branch &#x27;onion&#x27; into 1.5.4 [5cc3f18]
-  Merge branch &#x27;stephen&#x27; into 1.5.4 [359172b]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [6369715]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [52a5a03]
-  Merge branch &#x27;stephen&#x27; into 1.5.4 [d1c8586]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [e855dc1]
-  Merge branch &#x27;1.5.4&#x27; of https://gitlab.4dshoetech.com/front-end/demon-home into 1.5.4 [1fca4f0]
-  Merge branch &#x27;onion&#x27; into 1.5.4 [aeb36e1]
-  Merge remote-tracking branch &#x27;origin/1.5.4&#x27; into stephen [dba4bc8]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [f563685]
-  Merge branch &#x27;1.5.4&#x27; into onion [624cdeb]
-  Merge branch &#x27;stephen&#x27; into 1.5.4 [bed77a6]
-  Merge branch &#x27;stephen&#x27; into 1.5.4 [c730e5a]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [d166799]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [b33b652]
-  Merge branch &#x27;ken1.0&#x27; into 1.5.4 [86f8e60]
-  Merge branch &#x27;stephen&#x27; into 1.5.4 [39c6d61]
- 🔀 合并请求 [3a499fe]
- 🚧 增加一个更好的dialog组件 [cfe8a50]
-  Merge branch &#x27;onion&#x27; into 1.5.4 [93aab17]
-  Merge branch &#x27;onion&#x27; into 1.5.4 [3439331]
-  Merge branch &#x27;onion&#x27; into 1.5.4 [7c8741d]
-  Merge branch &#x27;onion&#x27; into 1.5.4 [c64f3e6]
- 💩 增加快捷方式的orm的model [22c6752]
-  Merge branch &#x27;ken1.0&#x27; into 1.5.4 [1c40a87]
-  Merge branch &#x27;stephen&#x27; into 1.5.4 [5957614]
-  Merge branch &#x27;stephen&#x27; into 1.5.4 [f2f0ebe]
-  Merge branch &#x27;onion&#x27; into 1.5.4 [ede68d3]
-  Merge branch &#x27;stephen&#x27; into 1.5.4 [b23c6df]
-  Merge branch &#x27;ken1.0&#x27; into 1.5.4 [1652191]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [a1dca15]
-  Merge branch &#x27;stephen&#x27; into 1.5.4 [1503069]
-  Merge branch &#x27;onion&#x27; into 1.5.4 [85a9751]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [fc974c3]
-  Merge branch &#x27;stephen&#x27; into 1.5.4 [2456f26]
-  Merge branch &#x27;1.5.4&#x27; into onion [3fb6800]
-  Merge remote-tracking branch &#x27;origin/harvey&#x27; into 1.5.4 [625e98d]
-  Merge remote-tracking branch &#x27;origin/harvey&#x27; into 1.5.4 [6294c43]
-  Merge branch &#x27;ken1.0&#x27; into 1.5.4 [2a03b52]
-  Merge branch &#x27;stephen&#x27; into 1.5.4 [f0383d0]
-  Merge remote-tracking branch &#x27;origin/1.5.4&#x27; into harvey [0820ddc]
-  Merge branch &#x27;stephen&#x27; into 1.5.4 [138d637]
-  Merge branch &#x27;onion&#x27; into 1.5.4 [87e3676]
-  Merge branch &#x27;stephen&#x27; into 1.5.4 [3ae224f]
-  Merge branch &#x27;stephen&#x27; into 1.5.4 [461611d]
-  Merge branch &#x27;onion&#x27; into 1.5.4 [2601619]
-  Merge branch &#x27;harvey&#x27; into 1.5.4 [8800818]
-  Merge branch &#x27;ken1.0&#x27; into 1.5.4 [86ea52e]
-  Merge branch &#x27;1.5.4&#x27; of https://gitlab.4dshoetech.com/front-end/demon-home into 1.5.4 [f8a59f3]
-  Update .rancher-pipeline.yml file [87d9845]
-  Update .rancher-pipeline.yml file [08e8aed]
-  Merge branch &#x27;onion&#x27; into 1.5.4 [14cac3e]
- 📝 更改渲染页部分英文 [f0d2c6a]
-  Merge branch &#x27;ken1.0&#x27; into 1.5.4 [fbcd20d]
-  Merge branch &#x27;stephen&#x27; into 1.5.4 [5907046]
-  Merge branch &#x27;ken1.0&#x27; into 1.5.4 [71af185]
-  Merge branch &#x27;harvey&#x27; into 1.5.4 [6c5452f]
-  Merge remote-tracking branch &#x27;origin/1.5.4&#x27; into harvey [df183d0]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [83919fa]
-  Merge branch &#x27;onion&#x27; into 1.5.4 [ca64631]
-  Merge branch &#x27;stephen-upload-model&#x27; into stephen [21fa540]
-  Merge branch &#x27;1.5.4&#x27; into onion [2491a9f]
- 🔀 合并分支 [7472cbc]
-  Merge remote-tracking branch &#x27;origin/1.5.4&#x27; into stephen [5e37755]
-  Merge branch &#x27;ken1.0&#x27; into 1.5.4 [e34fb3d]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [48bea01]
-  Merge branch &#x27;1.5.4&#x27; of https://gitlab.4dshoetech.com/front-end/demon-home into 1.5.4 [4c6714d]
-  Merge branch &#x27;onion&#x27; into 1.5.4 [c77152f]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [1e5b9f3]
-  Merge branch &#x27;ken1.0&#x27; into 1.5.4 [5d68e9a]
-  Merge remote-tracking branch &#x27;origin/1.5.4&#x27; into stephen-1.5.4 [1a63d18]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [dfd8042]
-  Merge branch &#x27;1.5.4&#x27; into onion [c92674d]
-  Merge branch &#x27;1.5.4&#x27; into onion [86e1c36]
-  Update .rancher-pipeline.yml file [4b57730]
-  Merge remote-tracking branch &#x27;origin/1.5.4&#x27; into harvey [6115278]
-  Merge branch &#x27;ken1.0&#x27; into 1.5.4 [bb2f07e]
-  Merge branch &#x27;1.5.4&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.4 [b29b58c]
-  Merge branch &#x27;ken1.0&#x27; into 1.5.4 [b913a11]
-  Create .rancher-pipeline.yml file [8693632]
-  Merge branch &#x27;1.5.4&#x27; into onion [cd8e291]
-  Merge branch &#x27;1.5.4&#x27; into onion [f71869d]
-  Merge branch &#x27;1.5.4&#x27; into ken1.0 [32531a1]
- 💩 使用https代替http进行开发（临时方案） [17f025f]
- 🔀 merge [65177bc]
-  Merge branch &#x27;onion&#x27; into 1.5.4 [23bd01a]
-  更新 [4af3cb7]
-  Merge branch &#x27;harvey&#x27; into onion [52e2c76]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [069dc3b]
-  合并onion [4e252dc]
-  更新 [4337c8c]
-  Merge remote-tracking branch &#x27;origin/1.5.3&#x27; into ken1.0 [934adb8]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [2016f94]
-  Merge branch &#x27;onion&#x27; into 1.5.3 [7c0b262]
- 🔀 合并代码 [57bb1ac]
-  Merge remote-tracking branch &#x27;origin/1.5.3&#x27; into ken1.0 [74c6182]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [911db11]
-  Merge branch &#x27;onion&#x27; into 1.5.4 [ba9c0fa]
-  Merge remote-tracking branch &#x27;origin/1.5.3&#x27; into 1.5.3 [1a81559]
-  Merge branch &#x27;stephen&#x27; into 1.5.3 [d0c412b]
- 🚀 文件列表、workspace相关接口迁移 [283ca01]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [8191137]
-  Merge remote-tracking branch &#x27;origin/1.5.3&#x27; into ken1.0 [3956dcb]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [6e2b4ea]
- 📝 增加thumb的文档以及修复参数的勘误 [4c01888]
-  Merge branch &#x27;stephen&#x27; into 1.5.3 [aa132f6]
-  Merge remote-tracking branch &#x27;origin/1.5.3&#x27; into stephen [9548f0d]
-  Merge remote-tracking branch &#x27;origin/1.5.3&#x27; into stephen-1.5.4 [aabcb39]
-  Merge remote-tracking branch &#x27;origin/stephen&#x27; into 1.5.3 [b55bc59]
-  Merge branch &#x27;1.5.3&#x27; into onion [35bfe3c]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [31cdc96]
-  Merge remote-tracking branch &#x27;origin/1.5.3&#x27; into stephen [c16c36b]
-  Merge remote-tracking branch &#x27;origin/1.5.3&#x27; into 1.5.3 [146be51]
-  Merge branch &#x27;stephen&#x27; into 1.5.3 [a38103b]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [26339f0]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into 1.5.3 [215d5a6]
-  Merge branch &#x27;ken1.0&#x27; into 1.5.3 [a3ccc32]
-  Merge branch &#x27;1.5.3&#x27; of https://gitlab.4dshoetech.com/front-end/demon-home into 1.5.3 [fc1fd20]
-  Merge remote-tracking branch &#x27;origin/1.5.3&#x27; into ken1.0 [42a8004]
-  Merge branch &#x27;onion&#x27; into 1.5.3 [c4af90a]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [00fa2d1]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [51e7900]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [6520a61]
-  iMerge remote-tracking branch &#x27;origin/1.5.3&#x27; into ken1.0 [1278d46]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [6705755]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [c79eb3b]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [24e60b3]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [0367a65]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [bfec4c0]
-  Merge branch &#x27;ken1.0&#x27; into 1.5.3 [a4bef1f]
-  Merge branch &#x27;onion&#x27; into 1.5.3 [a67b959]
- 🔀 合并 [3fee4d6]
-  Merge branch &#x27;ken1.0&#x27; into 1.5.3 [fb58996]
-  合并1.5.3 [24cb250]
-  Merge remote-tracking branch &#x27;origin/1.5.3&#x27; into ken1.0 [7170172]
-  Update index.vue [4d031c6]
- 🔀 合并分支 [82710b0]
-  &#x60;Merge branch &#x27;ken1.0&#x27; into 1.5.3 [73c7929]
-  合并 [9bd595c]
- 🔀 合并 [3648485]
-  Merge branch &#x27;stephen&#x27; into 1.5.3 [22256e6]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into 1.5.3 [a111bb9]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into 1.5.3 [e5d8a04]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [ac395ac]
-  Merge branch &#x27;stephen&#x27; into 1.5.3 [d863e51]
-  Merge branch &#x27;stephen-temp&#x27; into stephen [cb50eb4]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into 1.5.3 [9572018]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [5837f28]
- 🚀 改进协同空间邀请流程 [14b0ab1]
-  Merge branch &#x27;ken1.0&#x27; into 1.5.3 [9f5f8f5]
-  Merge remote-tracking branch &#x27;origin/1.5.3&#x27; into 1.5.3 [2c6b23a]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into 1.5.3 [7522d7b]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [aa492de]
- 🔀 合并分支 [35ff9e8]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [3ac322d]
-  Merge branch &#x27;ken1.0&#x27; into 1.5.3 [344340f]
-  Merge remote-tracking branch &#x27;origin/1.5.3&#x27; into ken1.0 [0df6d8b]
-  Merge branch &#x27;1.5.3&#x27; of https://gitlab.4dshoetech.com/front-end/demon-home into 1.5.3 [2dab69d]
-  Merge remote-tracking branch &#x27;origin/1.5.3&#x27; into 1.5.3 [d214fdb]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into 1.5.3 [ca490d1]
- 🔀 合并分支 [5be1ed5]
- 📦 更新d4 [8583dcb]
-  Merge remote-tracking branch &#x27;origin/1.5.3&#x27; into ken1.0 [c798a30]
- 🔀 合并分支 [fa734ad]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [dcffab8]
-  Merge branch &#x27;onion&#x27; into 1.5.3 [a884300]
- 💡 增加d4 source map [2461c6a]
- 📦 更新d4 [a51e847]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into 1.5.3 [bab7baa]
- 🔀 合并分支 [a334482]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [341c54b]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [6c5c65e]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into 1.5.3 [6e7a9c6]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into 1.5.3 [e087744]
- 🚧 暂存自动化构建的代码 [826075a]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [0a4dae3]
-  Merge branch &#x27;onion&#x27; into 1.5.3 [ae7b6e9]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into 1.5.3 [7c6d4d6]
-  Merge branch &#x27;1.5.3&#x27; into harvey [5c3904b]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [f6ec86f]
-  Merge branch &#x27;onion&#x27; into 1.5.3 [0ac7cd7]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [ad404f1]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [925c4ff]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [3772d13]
-  Merge remote-tracking branch &#x27;origin/1.5.3&#x27; into permission [0350ba9]
-  1.5.3-beta.6 [5f33366]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [ac2fc1c]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [69c31aa]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [40f1021]
-  1.5.3-beta.5 [2b5de51]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [2f4a1f5]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [9b68dd5]
-  Merge remote-tracking branch &#x27;origin/stephen&#x27; into 1.5.3 [493f180]
-  Merge branch &#x27;onion&#x27; into 1.5.3 [ed4aa1b]
-  1.5.3-beta.4 [e576d54]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [3d71769]
-  1.5.3-beta.3 [efa32dd]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [1248106]
-  1.5.3-beta.2 [9d73611]
-  Merge remote-tracking branch &#x27;origin/stephen&#x27; into 1.5.3 [cb2e65f]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into 1.5.3 [154cf02]
-  1.5.3-beta.1 [f09c0af]
-  1.5.3-beta.0 [9f0e907]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [cb0df5c]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [62ba70b]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [2a76109]
- 🔀 合并1.5.2 [c7740dd]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [03a0b66]
-  Merge branch &#x27;1.5.3&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.3 [308bb2b]
-  Merge remote-tracking branch &#x27;origin/stephen&#x27; into harvey [f01b811]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into harvey [612b8d7]
-  Merge remote-tracking branch &#x27;origin/stephen&#x27; into harvey [bfee690]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into harvey [21cf5ab]
-  Merge remote-tracking branch &#x27;origin/1.5.3&#x27; into permission [0b3320e]
-  Merge branch &#x27;1.5.3&#x27; into harvey [20f5f6b]
-  Merge branch &#x27;1.5.2&#x27; into harvey [87f4f7b]
-  Merge branch &#x27;1.5.2&#x27; into 1.5.3 [f62ec24]
-  Merge branch &#x27;1.5.2&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.2 [17c4b50]
-  Merge remote-tracking branch &#x27;origin/stephen&#x27; into harvey [1636236]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into harvey [db55029]
-  Merge branch &#x27;1.5.2&#x27; into 1.5.3 [03255c4]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into onion [d750052]
-  Merge remote-tracking branch &#x27;origin/stephen&#x27; into onion [291e198]
-  Merge remote-tracking branch &#x27;origin/1.5.3&#x27; into stephen [b679740]
-  Merge remote-tracking branch &#x27;origin/1.5.3&#x27; into onion [6c7699c]
-  Merge remote-tracking branch &#x27;origin/stephen&#x27; into onion [26eaa23]
- 🔀 合并1.5.2 [1bdacf3]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into 1.5.3 [a800ae5]
-  Merge remote-tracking branch &#x27;origin/1.5.3&#x27; into stephen [f811b9f]
-  Merge branch &#x27;harvey&#x27; into 1.5.3 [b4fe662]
- 🔀 合并分支 [abbd6aa]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into 1.5.3 [91d099c]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into ken1.0 [fad5c97]
-  Merge branch &#x27;stephen&#x27; into onion [f140aa3]
-  Merge remote-tracking branch &#x27;origin/1.5.3&#x27; into stephen [5694192]
- 🔀 合并分支 [6d9b661]
- 🔀 合并stephen分支 [b0b760f]
- 🔀 合并分支 [8b584d4]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into harvey [e59d016]
- 🔀 合并分支 [ccc3e1e]
-  Merge branch &#x27;harvey&#x27; into onion [cfb736d]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into harvey [f53afaa]
-  Merge branch &#x27;stephen&#x27; into onion [cf162c8]
-  Merge remote-tracking branch &#x27;origin/harvey&#x27; into stephen [c9c3370]
- 🚀 协同空间的相关操作记录改进 [0088994]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into harvey [8e3795e]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into harvey [e67e5bf]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into ken1.0 [37d7a40]
-  Merge remote-tracking branch &#x27;origin/1.5.3&#x27; into ken1.0 [e0a92a0]
-  Merge remote-tracking branch &#x27;origin/stephen&#x27; into onion [040caad]
- 🚀 进一步调试操作记录相关组件（尚未完成，准备合并stephen的分支 [3021bc1]
- 🔀 合并 harvey [ecd24d5]
- 🔀 合并model-version [784dae0]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into harvey [e966d88]
- 🚀 workspace操作记录架构改变 [62c4a30]
-  Merge remote-tracking branch &#x27;origin/1.5.3&#x27; into ken1.0 [9645ded]
-  Merge remote-tracking branch &#x27;origin/harvey&#x27; into 1.5.3 [bcf2b83]
- 🔀 合并onion [31cd5f7]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into harvey [294222b]
- 🔀 合并1.5.2 [72d2af9]
- 🔀 合并 model history [a80d50d]
- 🔀 合并 ken [56e6433]
- 🚀 评论逻辑完善，增加@逻辑的UI及其处理 [cb5d01f]
- 🔀 合并onion [1c06a8e]
- 📝 修改配置文件 [d887c4b]
-  :Merge remote-tracking branch &#x27;origin/1.5.3&#x27; into ken1.0 [4479add]
- 🚀 图片上传组件使用oss-upload，并增加删除、点击查看大图，去重等功能 [64b6fbc]
- 🔀 合并1.5.3 [09ac05d]
-  Merge branch &#x27;1.5.2&#x27; into 1.5.3 [c792d0c]
-  Merge branch &#x27;1.5.2&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.2 [401bb0b]
-  Merge remote-tracking branch &#x27;origin/harvey&#x27; into onion [29a63e1]
- 📝 补充 reademe 文件关于 API 文件结构的说明； [20333fe]
- 🙈 添加 .cache [d4a2542]
-  Merge remote-tracking branch &#x27;origin/fix-eslint-error&#x27; into stephen [706e7ad]
-  Merge remote-tracking branch &#x27;origin/1.5.2&#x27; into ken1.0 [e35ed64]
-  Merge branch &#x27;fix-eslint-error&#x27; into permission [1b84996]
-  Merge branch &#x27;1.5.2&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.2 [7a053de]
- 🔨 重构个人中心导航模块代码; [f22229f]
-  Merge branch &#x27;1.5.2&#x27; of https://gitlab.4dshoetech.com/front-end/demon-home into 1.5.2 [4145dcf]
-  Merge branch &#x27;1.5.2&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.2 [66b2d84]
-  iMerge remote-tracking branch &#x27;origin/1.5.2&#x27; into ken1.0 [a3765d9]
-  Merge branch &#x27;1.5.2&#x27; of gitlab.4dshoetech.com:front-end/demon-home into 1.5.2 [39cad8a]
- 🔀 合并分支 [1b75e2b]
- 📝 添加项目 API  的模块划分和 API 书写规范 [e3070a6]
- 📝 git commit 提交 emoji 代表的意义 [19ab9dd]
- 🔀 合并1.5.2 [a597c2a]
-  Merge remote-tracking branch &#x27;origin/harvey&#x27; into 1.5.2 [2f6d955]
-  Merge remote-tracking branch &#x27;origin/harvey&#x27; into 1.5.2 [dbb7f7a]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into 1.5.2 [e39a9e5]
-  Merge remote-tracking branch &#x27;origin/harvey&#x27; into 1.5.2 [78e101f]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into 1.5.2 [5c0b127]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into 1.5.2 [8d167af]
-  Merge remote-tracking branch &#x27;origin/harvey&#x27; into 1.5.2 [b2323c5]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into 1.5.2 [1589695]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into 1.5.2 [9893da0]
-  Merge remote-tracking branch &#x27;origin/harvey&#x27; into 1.5.2 [edd21ed]
-  Merge remote-tracking branch &#x27;origin/harvey&#x27; into ken1.0 [6dbe79b]
-  Merge remote-tracking branch &#x27;origin/harvey&#x27; into ken1.0 [0cd021c]
-  Merge remote-tracking branch &#x27;origin/harvey&#x27; into 1.5.2 [599493a]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into 1.5.2 [58e4f32]
-  Merge remote-tracking branch &#x27;origin/harvey&#x27; into 1.5.2 [c4da9ea]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into 1.5.2 [ed64189]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into stephen [d6a1c66]
-  Merge branch &#x27;upload-material&#x27; into stephen [3bd769e]
-  Merge remote-tracking branch &#x27;origin/1.5.2&#x27; into upload-material [0d2352a]
-  Merge remote-tracking branch &#x27;origin/harvey&#x27; into 1.5.2 [cf4c9d0]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into 1.5.2 [aa552ff]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into 1.5.2 [e1d4b7a]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into 1.5.2 [d6be6d3]
-  Merge remote-tracking branch &#x27;origin/1.5.2&#x27; into upload-material [63f6bc2]
-  fix: 修复渲染页相关的bug [4f21644]
-  Merge remote-tracking branch &#x27;origin/harvey&#x27; into 1.5.2 [0962027]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into 1.5.2 [63c861d]
-  Merge remote-tracking branch &#x27;origin/harvey&#x27; into ken1.0 [14e069e]
-  Merge branch &#x27;1.5.2&#x27; into upload-model [0f0bb47]
-  合并1.5.2 Merge remote-tracking branch &#x27;origin/1.5.2&#x27; into ken1.0 [ad3c562]
-  Merge remote-tracking branch &#x27;origin/harvey&#x27; into 1.5.2 [6cb928b]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into 1.5.2 [b3b92e3]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into 1.5.2 [11a6f31]
-  Merge branch &#x27;ken1.0&#x27; of gitlab.4dshoetech.com:front-end/demon-home into onion [0fb23e8]
-  Merge remote-tracking branch &#x27;origin/upload-model&#x27; into stephen [fb5a703]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into upload-model [c0fe279]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into upload-model [fc12189]
-  Merge branch &#x27;harvey&#x27; of gitlab.4dshoetech.com:front-end/demon-home into harvey [23392b3]
-  merge onion [56d28a4]
-  feat:  重构树状组件并增加部分功能 [3893c6d]
-  Merge branch &#x27;upload-model&#x27; into onion [54bcb59]
-  Merge remote-tracking branch &#x27;origin/upload-model&#x27; into stephen [bbca6d8]
-  合并onion Merge remote-tracking branch &#x27;origin/onion&#x27; into ken1.0 [9207bdd]
-  Merge branch &#x27;hotfixes&#x27; of gitlab.4dshoetech.com:front-end/demon-home into hotfixes [5e17ab4]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into ken1.0 合并onion分支 [ce208fd]
-  提交合并其他分支 [2504f6d]
-  feat: 增加tree组件 [87881b9]
-  feat: 增加两个按钮的图片 [9d53a0a]
-  账号管理，订购中心，个人信息的权限控制 [e7b7a8d]
-  Merge remote-tracking branch &#x27;origin/master&#x27; into stephen [4f04956]
-  chore: 增加eol配置 [bbabf13]
-  workspace邀请成员静态页面搭建 [6f336d3]
-  style: 去掉closest的console [be63a18]
-  Merge branch &#x27;stephen&#x27; of gitlab.4dshoetech.com:front-end/demon-home into stephen [e1b3e53]
-  fix: 快捷方式跳转修改 [bfa606c]
-  fix: 快捷方式跳转修改 [5bacc7b]
-  Merge branch &#x27;hotfixes&#x27;, remote-tracking branch &#x27;origin&#x27; into onion [a60cd8e]
-  Merge branch &#x27;hotfixes&#x27; of gitlab.4dshoetech.com:front-end/demon-home into hotfixes [2ac02ba]
-  fix: 快捷方式防重复 [eb9984b]
-  fix: 快捷方式样式变更 [fb35924]
- 📚 添加vue开发规范文件 [6ad6ea9]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into stephen [3ac1831]
-  调取权限接口 [1b00cf9]
-  Merge remote-tracking branch &#x27;origin/master&#x27; into ken1.0 合并 [e3a5422]
-  feat: 增加el-dialog-injector的例子 [256cd23]
-  style: 将on改为非数组 [2af873f]
-  chore: 增加jsx auto fix [01d60d1]
-  refactor: 重构优化dialogify逻辑 [8ac20e7]
-  feat: 增加vue-wait-until [d8f878c]
-  refactor: 删除el-dialog-injector，重写为jsx [9fbcc23]
-  feat: 更新dialogify函数 [dc1577b]
-  头像上传和功能应用布局修改 [8b5f636]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into develop [7142690]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into develop [d02d89c]
-  Merge remote-tracking branch &#x27;origin/harvey&#x27; into develop [3ba2156]
-  chore: 修改项目setting [c98a2cf]
-  feat: 储存board的material display mode [1344b00]
-  fix: 协同空间隐藏了未完成的功能，修改账号类型的英文，创建者无法更改自己身份，其他人不能改为创建者 [bfc41b9]
-  style: 提取改变物料的方法 [879d7c4]
-  fix: 由于d4没有重置partSelected，避免出现bug，回滚部分代码 [a942686]
-  fix: bug#119 [437bf9d]
-  fix: 阻止图片的click进行冒泡触发 bug#119 [455f167]
-  协作空间标题和列表数据把创建者放在第一位 [83ca3d7]
-  fix: 修改文件单元初始大小，修改排序的名字和图标不对应的错误 [fb5588c]
-  fix: bug#120 [a926030]
-  fix: 修复dragingCategoryId所在组件错误的问题 [946edb3]
-  chore: 增加vetur相关配置 [634e80a]
-  refactor: 移除board store并且将其状态转移到board组件 [1e238e0]
-  feat: 增加 vue-closest [c434194]
-  fix: bug#120 [4182200]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into develop [4d3a296]
-  修改产品提出的Bug [898ef8d]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into stephen [2e94cc5]
-  修改升级账号传参字段错误问题 [d306000]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into stephen [73c7cc7]
-  feat: 加入新的D4文件； [8751bd4]
-  fix:公共面料显示隐藏弹框接口对接错误问题；当搜索内容为空时，隐藏搜索区； [9be3e57]
-  feat: 渲染页导入导出的树结构功能实现 [ebfdcea]
-  feat:添加文件数量；下载地址为空时，显示下载失败 [82ab36f]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into hotfixes [09a131f]
-  Merge remote-tracking branch &#x27;origin/harvey&#x27; into hotfixes [a9064c6]
-  Merge remote-tracking branch &#x27;origin/harvey&#x27; into hotfixes [0df40ee]
-  fix: 修复订单页信息校验失效的bug [562edd5]
-  styles: 去掉str-length务必要的返回 [4c7fb12]
-  个人信息角色控制 [08cd417]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into hotfixes [f885dea]
-  fix:修改渲染页面变大小时，鞋模型一直变大的问题 [41e3e63]
-  feat: 订单回填的功能 [64e97b0]
-  feat: 订单回填的功能 [5146700]
-  chore: 增加editor.tabSize [5c9388b]
-  feat: 列表页修改快捷方式无法进入渲染页的问题。渲染页导入增加数量提示 [eb911ab]
-  fix:导出鞋款excel与模型不符问题；多token过期弹框问题； [e1060ad]
-  feat: 导出样品列表相关信息填写的功能 [27fc458]
-  styles: 修整isFilled输出类型 [c92fa8d]
-  Merge remote-tracking branch &#x27;origin/stephen&#x27; into hotfixes [eb02754]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into hotfixes [28de78a]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into hotfixes [2c20df8]
-  feat: 对接改进后的所有文件的子目录下的接口 [8c22661]
-  Merge remote-tracking branch &#x27;origin/workspace_permission&#x27; into hotfixes [e0851fc]
-  创建 列表选择弹框（DialogListSelect) 组件 [b86893f]
-  fix: 渲染页公共材质无法moveTo的问题 [b9b95f1]
-  fix: 修改首次登录时categoryId为空的问题，根据UI要求修改列表页、支付页样式 [538628b]
-  refactor: 调整validators目录结构 [3513064]
-  refactor: 重构validators [ee1ac55]
-  feat: 增加delay方法 [bb1e7db]
-  refactor: 增加api/index 并且去除 utils/axios.js，并增加拦截 [520ddf1]
-  feat: 增加 modifyShoeInfoExcel 方法 [e7f08bf]
-  chore: 增加jsconfig.json [d99d899]
-  styles: 去除无用代码 [bcd8105]
-  升级账号和协作空间 [5e5650f]
-  feat: 渲染页导入导出的逻辑改进，现在会根据来源空间（个人或协同空间）应用不同逻辑 [3dfa874]
-  feat: 增加渲染页的前端的权限控制。修改列表页影响体验的地方 [d7d906d]
-  Merge remote-tracking branch &#x27;origin/workspace_permission&#x27; into develop [50f3989]
-  Merge remote-tracking branch &#x27;origin/account_permission&#x27; into develop [624f5a4]
-  Merge remote-tracking branch &#x27;origin/harvey&#x27; into develop [92995b9]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into develop [e6f2f05]
-  Merge remote-tracking branch &#x27;origin/stephen&#x27; [023877f]
-  新增账号跳转支付页面传参 [93ddffb]
-  refactor;整理项目文件,删除无用文件； [f97e27c]
-  refactor: 将部分直接依赖axios的文件改为@/utils/axios [c87286e]
-  fix: token过期时，让当前目录回到鞋款的根目录 [755ed20]
-  feat: 进入渲染页时将角色权限写入缓存 [b295750]
-  feat: 增加进入渲染页的验证手续。若非法更改URL无法渲染鞋子信息 [eda41fe]
-  Merge branch &#x27;workspace_permission&#x27; [08f74da]
-  feat: workspace增加权限相关操作限制 [c7f3dba]
-  保存时资料与模型不相符问题 [5faff92]
-  渲染模型代码 [b7f77a2]
-  修改渲染页面移动到文件夹中数据不能同步问题 [d0b0294]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; [2603609]
-  列表标签和翻译有变 [60d1965]
-  获取创建页面时不用鞋信息接口 [184908b]
-  fix: 退出后用新用户登入时报错 [d930629]
-  Merge remote-tracking branch &#x27;origin/workspace_permission&#x27; [59fe866]
-  修改公司信息权限控制 [1712f70]
-  套餐订购和创建子账号的权限控制 [3e83bb1]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; [4b9a80e]
-  更新提示 [5b28a67]
-  修改第一次登录进来调用接口报错问题 [385ce9d]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; [b304bd4]
-  表格 [4adc15c]
-  保存录用获取问题 [ff095b2]
-  隐藏添加子账号；修改录由地址 [a29d579]
-  国际城市 [4286ab5]
-  修改element默认语言为英文，更新D4文件 [0b6bd2c]
-  fix: 删除后增加刷新快捷方式删除，账号类型改为英文，修改商品的支付时的id，删除商品至只剩，两种散装商品 [e47b07d]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into renderer1.0 [2592741]
-  跳转付费参数 [ac1b13a]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into renderer1.0 [85c0d6f]
-  Merge remote-tracking branch &#x27;origin/renderer1.0_onion&#x27; into renderer1.0 [1fe0b7e]
-  翻译 [5c96fb7]
-  翻译问题；保存接口问题 [fd51eaf]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into renderer1.0 [81f6939]
-  修改鞋模型弹框文件 [23e1651]
-  账号中心和个人中心翻译英文 [04dc384]
-  fix: 协同空间bug，空文件夹图片等bug [9825db5]
-  Merge remote-tracking branch &#x27;origin/renderer1.0_onion&#x27; into renderer1.0 [8756dca]
-  D4文件、面料和鞋信息弹框 [ebd4c44]
-  Merge remote-tracking branch &#x27;origin/renderer1.0&#x27; into ken1.0 [47c1178]
-  修改鞋信息弹框问题 [d09fd5c]
-  个人信息 [e58a988]
-  fix: 协同空间重新对接内外部成员列表接口。快捷方式改bug [625d5a5]
-  Merge remote-tracking branch &#x27;origin/renderer1.0_onion&#x27; into renderer1.0 [4bd6380]
-  修改鞋款详情弹框 [96b1f7b]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into renderer1.0 [36a6581]
-  Merge remote-tracking branch &#x27;origin/renderer1.0_onion&#x27; into renderer1.0 [d7d5205]
-  排料修改状态接口和修改界面、修改产品提出的bug [6ae1e9c]
-  fix: 搜索栏清空时刷新列表，增加详情icon及其逻辑，增加协同空间重命名功能，快捷方式面料处理 [55fa9bc]
-  头像和翻译 [730f457]
-  面料详情接口、D4文件 [dde381e]
-  Merge remote-tracking branch &#x27;origin/renderer1.0_onion&#x27; into renderer1.0 [94e04bf]
-  渲染页面的工作面板接口对接、排版功能接口对接 [653aa17]
-  fix: 禁止协同空间下的新增快捷方式 [0544f92]
-  feat: 增加购买协同空间和账号数量的流程 [24a4d3c]
-  fix: 修改baseURL，部分bug [d28da35]
-  账号中心和个人中心接口迁移 [e294f62]
-  aaa [38c6388]
-  fix: 修改部分合并时的问题 [7601d1c]
-  Merge remote-tracking branch &#x27;origin/renderer1.0_onion&#x27; into renderer1.0 [6a7a707]
-  注册接口、付款流程 [287dd37]
-  Merge branch &#x27;onion&#x27; into renderer1.0 [65d7d49]
-  fix: 同上，之前的版本没改完 [b958e43]
-  fix: 更改成员列表接口的数据操作（由于接口数据格式变更） [601e6db]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into renderer1.0 [0f5f0e7]
-  邀请账号登录流程接口对接 [301e745]
-  feat: 增加文件的打开（模型是新建渲染页，文件夹是打开，面料提示开发中 [d1ed807]
-  feat: 根据数据调试模型、面料的样式 [6579bb2]
-  feat: 增加多选操作，包括复制、剪切、删除、锁操作 [a91916d]
-  feat: 增加文件系统中快捷方式的新建和获取、完成搜索和排序 [e900b70]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into renderer1.0 [fc2c708]
-  支付页面跳转 [fe74123]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into renderer1.0 [c584c9f]
-  排料界面、操作指南弹框接口、渲染页面的board模块的接口 [5dcf65d]
-  账号中心内外部列表 [1828ac4]
-  feat: 初步完成面包屑（展示和跳转）、调通列表的两个基础接口（根目录接口和子目录接口） [f0ff84a]
-  内外部表格标签实时的删除和增加 [5b74008]
-  账号中心列表调后台接口 [0d6ddc2]
-  内部账号升级和复制邮箱链接功能 [4be3e02]
-  工作面板功能 [99a134c]
-  feat: 给面料单元新增大小调整，新增文件夹样式 [7efb6c3]
-  feat: 新增面料列表的面料单元，svg尚未实现完成，计算非常复杂 [c893e4a]
-  内部账号表格，账号类型和状态的筛选 [5219e93]
-  fix: 修改交互模式的部分文本和提示 [762e2b0]
-  材质详情弹框的轮播图效果；材质分类模块的拖动效果 [a085b21]
-  feat: 新增搜索栏，交互模式，面包屑并整理和实现其逻辑，由于未获得接口尚无法调试 [bf62b03]
-  随机账号，时间控件控制时间，表格筛选 [e542057]
-  鞋信息弹框和下载；排料代码合并；当个标签全局放大效果 [6e4f5e0]
-  feat: 增加file-list模块，重写侧边栏逻辑，改写workspace栏逻辑，改写快捷方式栏逻辑. [9714df6]
-  账号中心删除和新增账号接口 [e6f05cf]
-  渲染页面的标签栏功能、切换帧数功能； [2c465c9]
-  Merge remote-tracking branch &#x27;origin/master&#x27; into ken1.0 [7db7003]
-  feat: 增加paypal支付接口和方法，并传入id，名字和价格信息 [6cef422]
-  个人信息英文修改和账号中心 [960c2c5]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; [ce95039]
-  修改面料排版上传的流程 [2a6ca93]
-  Merge remote-tracking branch &#x27;origin/master&#x27; into ken1.0 [7b7c70a]
-  修改排版框大小 [d3f4227]
-  fix: 面料列表相关bug修改 [55d85c0]
-  账号中心邀请和升级页面 [8aabcdb]
-  Merge remote-tracking branch &#x27;origin/onion_tmp_0717&#x27; into stephen [c67d526]
-  修改产品bug [0d59707]
-  fix: workspace小bug修改 [cd98e59]
-  Merge remote-tracking branch &#x27;origin/master&#x27; into stephen [fba7b6e]
-  修改D4.js文件 [75401f7]
-  fix: 增加导出excel的进度条 [9dcb846]
-  Merge remote-tracking branch &#x27;origin/onion_tmp_0717&#x27; [be2e0f7]
-  fix: 更改为，上传印花时直接传到服务器获得url，以降低保存或另存为画的时间。 [90d4b98]
-  Merge remote-tracking branch &#x27;origin/onion_tmp_0717&#x27; [da1e6c8]
-  修改一些基本配置 [5d1d152]
-  feat：保存时取出d4的uvTrans和mapSec数据，可以保存印花和相对位置了。但有bug是一次只能上传一个新的 [49d9dfc]
-  modify D4.js [5737fce]
-  Merge remote-tracking branch &#x27;origin/onion_tmp_0717&#x27; [320c65c]
-  Merge remote-tracking branch &#x27;origin/stephen&#x27; [b408ae4]
-  排料完善 [8b18b6e]
-  Merge remote-tracking branch &#x27;origin/stephen&#x27; [545feda]
-  Merge remote-tracking branch &#x27;origin/onion_tmp_0717&#x27; [93fd47a]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; [f09d251]
-  排料功能完善 [b2026fd]
-  Merge remote-tracking branch &#x27;origin/master&#x27; into ken1.0 [cec0bd4]
-  fix: 修复保存时的错误 [5e621e2]
-  fix: 保存和另存为新增两个参数，调通保存和另存为 [c7c76b9]
-  个人中心账号中心 [4529351]
-  fix: 面料列表接上面料详情信息,更改部分bug [12b267d]
-  Merge remote-tracking branch &#x27;origin/master&#x27; into stephen [7210cfc]
-  fix: 修改workspace的小bug [2e58035]
-  修改排料模式切换问题 [bac9e6a]
-  fix: 修改workspace的小bug [2c526d2]
-  fix: 修改部分图标字体名称 [43a2d98]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; [696fe7f]
-  修改图标文件 [2619439]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; [025c20c]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into stephen [5f9e4f9]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into stephen [3c6e4dd]
-  Merge remote-tracking branch &#x27;origin/jack&#x27; into stephen [eafd715]
-  渲染界面的排料模块 [2676245]
-  fix: 新增鞋款右键重命名，修改新增文件夹bug，成员管理页标题更改为workspace名字，搜索部分改进，删除、锁定和解锁后的刷新错误改进，模式切换的刷新问题。 [c83bc34]
-  鞋款详情信息和面料信息修改 [e4b2507]
-  个人中心修改密码 [43d7bc7]
-  对接排料的接口 [5fe7827]
-  fix: 模型列表页改bug. [c0a611b]
-  修复组件没有正常导入问题 [8ebf761]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into stephen [5e8cad7]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; into stephen [4e19069]
-  渲染页面排料操作布局 [65b94ab]
-  修改个人中心Bug [4864d17]
-  修改订购模块和注册模块的bug;渲染界面回退到上一个版本 [cef8a94]
-  修改渲染页面面料移动到分类 [897c227]
-  Merge remote-tracking branch &#x27;origin/master&#x27; into ken1.0 [5b3f19f]
-  修改个人中心产品那边提的Bug [79e585f]
-  合并分支ken [5a3de67]
-  合并分支onion [d8abc65]
-  feat: 增加模型的协同空间的角色操作，包括增删查协同空间成员，更改权限。面料列表bug修改，可读取，搜索，增加模式切换。 [0345001]
-  渲染页面面料分类的增删改查； [2bf6ce2]
-  协作空间 [8e03ee0]
-  Merge remote-tracking branch &#x27;origin/master&#x27; into ken1.0 [c5e0b62]
-  修改成员邀请弹框 [b33de4f]
-  协作空间拆分，模拟获取的数据渲染workspace页面 [9012627]
-  Merge remote-tracking branch &#x27;origin/master&#x27; into jack [7d03947]
-  登录注册的一些页面修改 [2bd5461]
-  feat：增加面料列表，但bug还有很多。 [f10b9cf]
-  修改个人中心协同页面的成员邀请部分 [a6dd79e]
-  Merge remote-tracking branch &#x27;origin/stephen&#x27; [4eb7eb8]
-  Merge remote-tracking branch &#x27;origin/master&#x27; into ken1.0 [1b49af9]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; [2cdd4a1]
-  材质详情弹框；放大镜效果; [4d75f28]
-  协作空间20190712 [f538c05]
-  Merge remote-tracking branch &#x27;origin/master&#x27; into onion [6449f89]
-  fix: 文件夹层级嵌套改进。 [e524b9b]
-  fix: 文件夹层级没整理完，先使用原来的层级。 [95c160e]
-  fix: 完成成员列表组件的封装、成员邀请弹框的封装，修改部分bug。 [8d1dc10]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; [56fa6f7]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; [4811093]
-  全局布局宽度改变对于修改其他模块布局；渲染页面的布局-操作面板部分 [5c619cb]
-  协同空间 [eb60d19]
-  Merge remote-tracking branch &#x27;origin/jack&#x27; [9312b9c]
-  合并其他分支 [52d4e9f]
-  中英文翻译 [426a323]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; [7d3643b]
-  feat: 增加成员邀请的列表界面和外部邀请的界面。 [eb80a81]
-  协同空间页面 [d722129]
-  重构模型渲染页面；完成切换浏览模式功能；修复一下产品提出的问题； [aa8482f]
-  Merge remote-tracking branch &#x27;origin/master&#x27; into ken1.0 [13ce0f1]
-  修改个人中心和ICON [ec1c074]
-  合并其他分支，打包发布 [0ff7fe8]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; [1e0e489]
-  fix: 刷新时清除复制了的鞋款数组。 [02e64e7]
-  fix: 隔离文件夹模式下的鞋和详情模式下的鞋。feat: 右键增加新建文件夹功能、新增根目录下的粘贴（非根目录和根目录的粘贴逻辑有区别）、文件夹模式下的多选删除、右键复制（原来只支持多选后右键复制）、对接搜索和排序接口（未完成） [a6b5b88]
-  修改演示中出现的异常问题；修改整个注册模块 [9cd63b8]
-  数据容量调后台接口 [6fcde34]
-  Merge branch &#x27;master&#x27; into onion [286e5bc]
-  fix: 当文件夹内无鞋款时的组件添加右键菜单并更改样式。记录鞋款单元的缩放后的大小和对应的滑条初始值。右键新增快捷方式。右键删除。 [a789a9f]
-  修改注册模块校验问题 [1a5f1b6]
-  重新提交 [a11cd38]
-  合并其他版本 [5fcc2c6]
-  注册登录模块修改 [d16d9e4]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; [0029a0b]
-  Merge remote-tracking branch &#x27;origin/onion&#x27; [d4f55e0]
-  个人信息改成英文和修改文本框的样式 [e792003]
-  项目表单校验的方法，对登录模块添加校验 [2dae11c]
-  fix: 修正了在文件夹模式的文件夹下锁定和解锁后的刷新错误。 [e3f4700]
-  fix: 更改图标，对个别图标进行微调，增加快捷方式栏为空时的提示。 [a08961a]
-  Merge remote-tracking branch &#x27;origin/onion_3.12&#x27; [5f15c5e]
-  Merge remote-tracking branch &#x27;origin/jack&#x27; into stephen [f32ebe8]
-  布局修改 [0c68665]
-  统一修改项目图标名称；引入全局SCSS变量 [9599feb]
-  Merge remote-tracking branch &#x27;origin/stephen&#x27; into jack [3629b61]
-  个人中心功能应用页面布局 [7da6b29]
-  注册登录英文版 [ccdbf02]
-  Merge remote-tracking branch &#x27;origin/ken1.0&#x27; into stephen [2d0aba8]
-  合并主分支 [f2640d9]
-  个人信息和数据容量两个页面 [e8a12c2]
-  feat: 进一步修改UI，增加上锁和解锁功能，增加多选功能，增加模型列表空白处的右键菜单，完成对多个鞋款的多选后的复制，和在文件夹的空白处的右键的粘贴功能。 [640d461]
-  表单校验 [d3f4d11]
-  Merge remote-tracking branch &#x27;origin/stephen&#x27; [587fc10]
-  完成注册模块全面界面逻辑，修改订购中心体验问题 [db25326]
-  Merge remote-tracking branch &#x27;origin/jack&#x27; into stephen [54e40ed]
-  引入密码修改页面 [9d33ac0]
-  Merge remote-tracking branch &#x27;origin/jack&#x27; [8bb74dc]
-  Merge remote-tracking branch &#x27;origin/stephen&#x27; [e15dab0]
-  订购模块 - 功能选择购买页面和购买信息列表页面 [3435463]
-  fix: 模型列表页根据UI图改进、使用svg作为解决谷歌浏览器无法支持小于12px的字体的适配方案、快捷方式点击有效。 [25f1846]
-  登录注册校验 [b6f3927]
-  个人中心-个人信息 [b25fa42]
-  登陆注册 [61ffafc]
-  页面修改 [99b3086]
-  配置订购中心的路由 [901d67e]
-  修改部署环境请求api地址 [8ce020f]
-  Merge branch &#x27;stephen&#x27; [81c0a88]
-  修改.env文件 [76b4b8c]
-  fix: 打通增加获取删除快捷方式接口. [648c798]
-  fix: 打通增加获取删除快捷方式接口. [10cb195]
-  完善购买套餐页面细节，修改api默认在开发环境请求地址 [8dcfa17]
-  feat: 增加拖拽功能、删除快捷方式功能（未完全实现） [73369b4]
-  个人中心个人信息的调后台接口 [3e80dc5]
-  合并主分支代码 [71634ff]
-  注册 [32db63c]
-  合并stephen分支 [b9198e7]
-  完成订购模块套餐选择页面，修改用户下拉框的icon [17c411e]
-  Merge remote-tracking branch &#x27;origin/master&#x27; into jack [7f0e6c4]
-  注册页面的逻 [3de4790]
-  添加fonticon, 编写订购页面 [98b69e3]
-  注册页面 [00a686c]
-  feat: add tootip to control the scale of a shoe unit [23a7b71]
-  fix: some mode in model list page. [4d15146]
-  个人中心的个人信息静态页面搭建 [b6c0618]
-  订购中心的静态页面布局，整体完成，还差常见问题的样式修改和邮件发送的字体颜色修改 [7345ac2]
-  注册 [fc3dae8]
-  fix: account page. [32bdad3]
-  登录和商务合作界面 [dc18c75]
-  fix CROS problem, Page layout reset [b913427]
-  create related routes of entry and order module [51e4cd4]
-  change D4.js file [671aeb7]
-  fix the stock bug and other enhance UI [22edcb9]
-  Initial commit [48ea8ed]


