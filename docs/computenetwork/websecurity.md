# web安全总结

### 1.什么是浏览器安全？浏览器安全做了什么
  随着互联网的发展，人们使用浏览器的基础越来越多，浏览器的安全问题越来越多人重视，浏览器的安全是以同源策略为基础，其限制了来之不同源的document或者脚本，怼当前浏览器的document读取或者进行操作等，如果没有同源策略，我们将可以随意将www.a.com的js脚本，在b.com没有加载的时候，随意加载或者随意修改b.com的页面等，为了浏览器页面的相互不干扰，所以就有了同源策略这一方案（origin）

### 2.跨站点脚本攻击

  &emsp;XSS(cross-site script),跨站点脚本攻击，缩写和css重复，所以成为css。XSS是攻击者往web页面中插入网页执行脚本代码，当用户浏览页面的时候，该嵌入的脚本会被执行，从而盗取用户信息或者侵犯用户隐私等。
#### 2.1 反射型XSS
  &emsp;一般是通过发送一段带有恶意执行代码的url，当url被打开始就被浏览器解析执行。比如：(类似：https://xx.com/xx?default=<script>alert(document.cookie)</script>)。
  ##### 特征：
  1、即时性，不经过服务器存储，通过http的get，post请求就能发起一次攻击，拿到用户隐私。
  2、攻击者需要诱骗点击
  3、反馈率低，胶南发现和响应修复
  #### 如何预防
  1、web页面渲染的所有内容或者渲染的数据都必须来自于服务端
  2、尽量不要从 URL，document.referrer，document.forms 等这种 DOM API 中获取数据直接渲染。
#### 2.2 DOM 型 XSS
  &emsp;实际上就是前端js代码不够严谨，把不可信任的内容插入到了页面中。我们在使用innnerHtml，outHtml,document.write()，appendChild的时候要谨慎写入，尽量使用innerText、.textContent、.setAttribute()等
  攻击步骤：
  1、攻击者构造出特殊数据，其中包含恶意的代码
  2、用户浏览器执行了恶意代码
  3、恶意代码窃取了用户数据并发送到攻击者的网站，或者冒充用户行为，调用目标网站接口执行攻击者执行的操作。
  #### 2.2.1 如何防范DOM型攻击
  1、对于url链接，用encodeURIComponent 来转义
  2、对于费url，html的话我们可以用一下方法进行编码
  ```
  function encodeHtml(str) {
    return str.replace(/"/g, '&quot;')
              .replace(/'/g, '&apos;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;');
  }
  ```