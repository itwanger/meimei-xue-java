import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o,c as i,a as e,b as c,e as p,d as n}from"./app.22292d3d.js";const d={},l=p(`<p>\u5927\u5BB6\u597D\uFF0C\u6211\u662F\u4E8C\u54E5\uFF01</p><p>\u4ECA\u5929\u7ED9\u5927\u5BB6\u5E26\u6765\u51E0\u4E2A\u6211\u65E5\u5E38\u5DE5\u4F5C\u4EE5\u53CA\u9605\u8BFB\u6E90\u7801\u5FC5\u5907\u7684 IntelliJ IDEA \u9AD8\u7EA7\u8C03\u8BD5\u6280\u5DE7\uFF0C\u5206\u5206\u949F\u8981\u8D77\u98DE\u7684\u8282\u594F\u3002</p><h2 id="\u65AD\u70B9\u5904\u6DFB\u52A0-log" tabindex="-1"><a class="header-anchor" href="#\u65AD\u70B9\u5904\u6DFB\u52A0-log" aria-hidden="true">#</a> \u65AD\u70B9\u5904\u6DFB\u52A0 log</h2><p>\u5F88\u591A\u7A0B\u5E8F\u5458\u5728\u8C03\u8BD5\u4EE3\u7801\u65F6\u90FD\u559C\u6B22\xA0<code>print</code>\xA0\u4E00\u4E9B\u5185\u5BB9\uFF0C\u8FD9\u6837\u770B\u8D77\u6765\u66F4\u76F4\u89C2\uFF0Cprint \u5B8C\u4E4B\u540E\u53C8\u5F88\u5BB9\u6613\u5FD8\u8BB0\u5220\u9664\u6389\u8FD9\u4E9B\u6CA1\u7528\u7684\u5185\u5BB9\uFF0C\u6700\u7EC8\u5C06\u4EE3\u7801\u63D0\u4EA4\u5230\xA0<code>remote</code>\uFF0Ccode review \u65F6\u53C8\u4E0D\u5F97\u4E0D\u5220\u51CF\u8FD9\u4E9B\u5185\u5BB9\u91CD\u65B0\u63D0\u4EA4\uFF0C\u4E0D\u4F46\u589E\u52A0\u4E0D\u5FC5\u8981\u7684\u5DE5\u4F5C\u91CF\uFF0C\u8FD8\u8BA9\xA0<code>log tree</code>\xA0\u7684\u4E00\u4E9B\u8282\u70B9\u6CA1\u6709\u4EFB\u4F55\u4EF7\u503C</p><p>IntelliJ IDEA \u63D0\u4F9B\xA0<code>Evaluate and Log at Breakpoints</code>\xA0\u529F\u80FD\u6070\u5DE7\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898, \u6765\u770B\u4E0B\u9762\u4EE3\u7801\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">ThreadLocalRandom</span> random <span class="token operator">=</span> <span class="token class-name">ThreadLocalRandom</span><span class="token punctuation">.</span><span class="token function">current</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isInterested</span><span class="token punctuation">(</span>random<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    count<span class="token operator">++</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Found %d interested values%n&quot;</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">isInterested</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5047\u5982\u6211\u4EEC\u60F3\u5728\u7B2C 15 \u884C\u67E5\u770B\u6BCF\u6B21\u8C03\u7528\uFF0C\u968F\u5373\u51FA\u6765\u7684 i \u7684\u503C\u5230\u5E95\u662F\u591A\u5C11\uFF0C\u6211\u4EEC\u6CA1\u5FC5\u8981\u5728\u8FD9\u4E2A\u5730\u65B9\u6DFB\u52A0\u4EFB\u4F55 log\uFF0C\u5728\u6B63\u5E38\u52A0\u65AD\u70B9\u7684\u5730\u65B9\u4F7F\u7528\u5FEB\u6377\u952E\xA0<code>Shift + \u9F20\u6807\u5DE6\u952E</code>\uFF0C\u5C31\u4F1A\u5F39\u51FA\u4E0B\u9762\u7684\u5185\u5BB9</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/ide/4-debug-skill-e69c965f-f7e5-4e91-a92d-a43a1d0aced4.jpg" alt=""></p><p>\u52FE\u9009\u4E0A\xA0<code>Evaluate and log</code>, \u5E76\u81EA\u5B9A\u4E49\u4F60\u60F3\u67E5\u770B\u7684 log/\u53D8\u91CF\uFF0C\u6BD4\u5982\u8FD9\u91CC\u7684\xA0<code>&quot;interested&quot; + i</code>, \u8FD9\u6837\u4EE5 Debug \u6A21\u5F0F\u8FD0\u884C\u7A0B\u5E8F\uFF08\u6B63\u5E38\u6A21\u5F0F\u8FD0\u884C\uFF0C\u4E0D\u4F1A\u6253\u5370\u8FD9\u4E9B log\uFF09\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>interested 7
interested 5
interested 1
interested 2
interested 0
Found 2 interested values
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u4F60\u5728\u591A\u5904\u6DFB\u52A0\u4E86\u8FD9\u79CD\u65AD\u70B9\uFF0C\u7B80\u5355\u7684\u770B log \u53EF\u80FD\u5076\u5C14\u8FD8\u662F\u4E0D\u591F\u76F4\u89C2\uFF0C\u53EF\u4EE5\u52FE\u9009\u4E0A\u9762\u56FE\u7247\u7EFF\u8272\u6846\u7EBF\u7684\xA0<code>&quot;Breakpoint hit&quot; message</code>\xA0:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Breakpoint reached at top.dayarch.TestDebug.isInterested(TestDebug.java:49)
interested 6
Breakpoint reached at top.dayarch.TestDebug.isInterested(TestDebug.java:49)
interested 0
Breakpoint reached at top.dayarch.TestDebug.isInterested(TestDebug.java:49)
interested 9
Breakpoint reached at top.dayarch.TestDebug.isInterested(TestDebug.java:49)
interested 8
Breakpoint reached at top.dayarch.TestDebug.isInterested(TestDebug.java:49)
interested 1
Found 3 interested values
Disconnected from the target VM, address: &#39;127.0.0.1:0&#39;, transport: &#39;socket&#39;

Process finished with exit code 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u4F60\u60F3\u8981\u66F4\u8BE6\u7EC6\u7684\u4FE1\u606F\uFF0C\u90A3\u5C31\u52FE\u9009\u4E0A\xA0<code>Stack trace</code>\xA0(\u5927\u5BB6\u81EA\u5DF1\u67E5\u770B\u8FD0\u884C\u7ED3\u679C\u5427)\uFF0C\u6709\u4E86\u8FD9\u4E2A\u529F\u80FD\uFF0C\u4E0A\u9762\u8BF4\u7684\u4E00\u4E9B\u95EE\u9898\u90FD\u4E0D\u590D\u5B58\u5728\u4E86</p><h2 id="\u5B57\u6BB5\u65AD\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5B57\u6BB5\u65AD\u70B9" aria-hidden="true">#</a> \u5B57\u6BB5\u65AD\u70B9</h2><p>\u5982\u679C\u4F60\u9605\u8BFB\u6E90\u7801\uFF0C\u4F60\u4E00\u5B9A\u4F1A\u6709\u4E2A\u56F0\u6270\uFF0C\u7C7B\u4E2D\u7684\u67D0\u4E2A\u5B57\u6BB5\u7684\u503C\u5230\u5E95\u662F\u5728\u54EA\u91CC\u6539\u53D8\u7684\uFF0C\u4F60\u8981\u4E00\u70B9\u70B9\u8FFD\u8E2A\u8C03\u7528\u6808\uFF0C\u9010\u6B65\u6392\u67E5\uFF0C\u7A0D\u4E0D\u7559\u795E\uFF0C\u5C31\u53EF\u80FD\u6709\u9057\u6F0F</p><blockquote><p>\u6211\u4EEC\u53EF\u4EE5\u5728 IntelliJ IDEA \u4E2D\u4E3A\u67D0\u4E2A\u5B57\u6BB5\u6DFB\u52A0\u65AD\u70B9\uFF0C\u5F53\u5B57\u6BB5\u503C\u6709\u4FEE\u6539\u65F6\uFF0C\u81EA\u52A8\u8DF3\u5230\u76F8\u5E94\u65B9\u6CD5\u4F4D\u7F6E</p></blockquote><p>\u4F7F\u7528\u8D77\u6765\u5F88\u7B80\u5355\uFF1A</p><ol><li>\u5728\u5B57\u6BB5\u5B9A\u4E49\u5904\u9F20\u6807\u5DE6\u952E\u6DFB\u52A0\u65AD\u70B9\uFF08\u4F1A\u51FA\u73B0\u300C\u773C\u775B\u300D\u7684\u56FE\u6807\uFF09</li><li>\u5728\u300C\u773C\u775B\u300D\u56FE\u6807\u4E0A\u9F20\u6807\u53F3\u952E</li><li>\u5728\u5F39\u6846\u4E2D\u52FE\u9009\u4E0A<code>Field access</code>\xA0\u548C<code>Field modification</code>\xA0\u4E24\u4E2A\u9009\u9879</li></ol><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/ide/4-debug-skill-72c23537-3f66-4283-b939-a265b7628a1a.gif" alt="image.gif"></p><p>\u5982\u679C\u4FEE\u6539\u5B57\u6BB5\u503C\u7684\u65B9\u6CD5\u6BD4\u8F83\u591A\uFF0C\u4E5F\u53EF\u4EE5\u5728\xA0<code>Condition</code>\xA0\u7684\u5730\u65B9\u5B9A\u4E49\u65AD\u70B9\u8FDB\u5165\u6761\u4EF6, \u6709\u4E86\u8FD9\u4E2A\u529F\u80FD\u7684\u52A0\u6210\uFF0C\u76F8\u4FE1\u4F60\u9605\u8BFB\u6E90\u7801\u4F1A\u987A\u7545\u8BB8\u591A</p><h2 id="\u5F02\u5E38\u65AD\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5F02\u5E38\u65AD\u70B9" aria-hidden="true">#</a> \u5F02\u5E38\u65AD\u70B9</h2><p>\u9664\u4E86\u9605\u8BFB\u6E90\u7801\uFF0C\u4E00\u5B9A\u662F\u9047\u5230\u4E86\u5F02\u5E38\u6211\u4EEC\u624D\u5F00\u59CB\u8C03\u8BD5\u4EE3\u7801\uFF0C\u4EE3\u7801\u5728\u629B\u51FA\u5F02\u5E38\u4E4B\u540E\u4F1A\u81EA\u52A8\u505C\u6B62\uFF0C\u4F46\u662F\u6211\u4EEC\u5E0C\u671B\uFF1A</p><blockquote><p>\u4EE3\u7801\u505C\u5728\u629B\u51FA\u5F02\u5E38\u4E4B\u524D\uFF0C\u65B9\u4FBF\u6211\u4EEC\u67E5\u770B\u5F53\u65F6\u7684\u53D8\u91CF\u4FE1\u606F</p></blockquote><p>\u8FD9\u65F6\u6211\u4EEC\u5C31\u7528\u5230\u4E86\xA0<code>Exception Breakpoints</code>, \u5F53\u629B\u51FA\u5F02\u5E38\u65F6\uFF0C\u5728 catch \u7684\u5730\u65B9\u6253\u4E0A\u65AD\u70B9\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E0B\u56FE\u7684\u51E0\u4E2A\u4F4D\u7F6E\u83B7\u53D6\u6808\u9876\u5F02\u5E38\u7C7B\u578B\uFF0C\u6BD4\u5982\u8FD9\u91CC\u7684\xA0<code>NumberFormatException</code></p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/ide/4-debug-skill-c4c511af-b00d-458b-a4a1-97d1fe1e84b8.jpg" alt=""></p><p>\u77E5\u9053\u5F02\u5E38\u7C7B\u578B\u540E\uFF0C\u5C31\u53EF\u4EE5\u6309\u7167\u5982\u4E0B\u6B65\u9AA4\u6DFB\u52A0\u5F02\u5E38\u65AD\u70B9\u4E86\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/ide/4-debug-skill-4c35cab7-83d2-45b4-8a27-ebeceb41ce08.jpg" alt=""></p><p>\u7136\u540E\u5728\u5F39\u6846\u4E2D\u9009\u62E9 NumberFormatException</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/ide/4-debug-skill-a98e7885-1e84-4c38-8de1-ae04d3013176.gif" alt=""></p><p>\u91CD\u65B0\u4EE5 Debug \u6A21\u5F0F\u8FD0\u884C\u7A0B\u5E8F\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/ide/4-debug-skill-498ad99d-a15d-4a4e-a01b-b0c11cf8f72e.gif" alt=""></p><p>\u7A0B\u5E8F\u300C\u4E00\u8DEF\u7EFF\u706F\u5F0F\u300D\u5B9A\u4F4D\u5230\u629B\u51FA\u5F02\u5E38\u7684\u4F4D\u7F6E\uFF0C\u540C\u65F6\u6307\u51FA\u5F53\u65F6\u7684\u53D8\u91CF\u4FE1\u606F\uFF0C\u4E09\u4E2A\u5B57\uFF1A\u7A33\uFF0C\u51C6\uFF0C\u72E0\uFF0C\u8FD8\u6709\u8C01\uFF1F</p><h2 id="\u65B9\u6CD5\u65AD\u70B9" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u65AD\u70B9" aria-hidden="true">#</a> \u65B9\u6CD5\u65AD\u70B9</h2><p>\u5F53\u9605\u8BFB\u6E90\u7801\u65F6\uFF0C\u6BD4\u5982 Spring\uFF0C\u4E00\u4E2A\u63A5\u53E3\u7684\u65B9\u6CD5\u53EF\u80FD\u88AB\u591A\u4E2A\u5B50\u7C7B\u5B9E\u73B0\uFF0C\u5F53\u8FD0\u884C\u65F6\uFF0C\u9700\u8981\u67E5\u770B\u8C03\u7528\u6808\u9010\u6B65\u5B9A\u4F4D\u5B9E\u73B0\u7C7B\uFF0CIDEA \u540C\u6837\u652F\u6301\u5728\u63A5\u53E3\u65B9\u6CD5\u4E0A\u6DFB\u52A0\u65AD\u70B9\uFF08\u5FEB\u6377\u952E\xA0<code>cmd+F8</code>/<code>ctrl+F8</code>\uFF09\uFF1A</p><ol><li>\u9F20\u6807\u5DE6\u952E\u5728\u65B9\u6CD5\u5904\u70B9\u51FB\u65AD\u70B9\uFF08\u2666\uFE0F\u5F62\u72B6\uFF09</li><li>\u65AD\u70B9\u4E0A\u9F20\u6807\u53F3\u952E</li></ol><p>\u52FE\u9009\u4E0A\u7EFF\u8272\u6846\u7EBF\u4E0A\u7684\u5185\u5BB9\uFF0C\u540C\u6837\u53EF\u4EE5\u81EA\u5B9A\u4E49\u8DF3\u8F6C\u6761\u4EF6 Condition</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/ide/4-debug-skill-b81dc459-5a9c-4e0e-b24e-350943299eda.jpg" alt=""></p><p>\u5F53\u4EE5 Debug \u6A21\u5F0F\u8FD0\u884C\u7A0B\u5E8F\u7684\u65F6\u5019\uFF0C\u4F1A\u81EA\u52A8\u8FDB\u5165\u5B9E\u73B0\u7C7B\u7684\u65B9\u6CD5\uFF08\u6CE8\u610F\u65AD\u70B9\u5F62\u72B6\uFF09\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/ide/4-debug-skill-edbc1de2-4dd6-49a3-9a6a-5948d19aabee.jpg" alt=""></p><p>\u770B\u5230\u8FD9\u4F60\u5E94\u8BE5\u60F3\u5230\u5E38\u89C1\u7684 Runnable \u63A5\u53E3\u4E2D\u7684 run \u65B9\u6CD5\u4E86\uFF0C\u540C\u6837\u662F\u6709\u4F5C\u7528\u7684\uFF0C\u5927\u5BB6\u53EF\u4EE5\u81EA\u884C\u53BB\u5C1D\u8BD5\u4E86</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u76F8\u4FE1\u6709\u4EE5\u4E0A\u56DB\u79CD\u8C03\u8BD5\u6280\u5DE7\u7684\u52A0\u6210\uFF0C\u65E0\u8BBA\u662F\u5DE5\u4F5Cdebug \u8FD8\u662F\u79C1\u4E0B\u9605\u8BFB\u6E90\u7801\uFF0C\u90FD\u53EF\u4EE5\u8F7B\u677E\u9A7E\u9A6D\u4E86\u3002\u6700\u540E\uFF0C\u6765\u770B\u770B IDEA \u652F\u6301\u7684\u5404\u79CD\u65AD\u70B9\u8C03\u8BD5\u7C7B\u578B\uFF0C\u5982\u679C\u4F60\u53EA\u77E5\u9053\u7EA2\u8272\u5C0F\u5706\u70B9\uFF0C\u90A3\u54B1\u5728\u7559\u8A00\u533A\u597D\u597D\u8BF4\u8BF4\u5427</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/ide/4-debug-skill-92ad72da-4bf1-4bc4-b21d-78c33114dc96.jpg" alt=""></p><hr>`,44),r=n("\u4F5C\u8005\uFF1Atan\u65E5\u62F1\u4E00\u5175\uFF0C\u8F6C\u8F7D\u94FE\u63A5\uFF1A"),u={href:"https://mp.weixin.qq.com/s/KG0yzb_9XhhTSzjHr4DkIQ",target:"_blank",rel:"noopener noreferrer"},b=n("https://mp.weixin.qq.com/s/KG0yzb_9XhhTSzjHr4DkIQ"),k=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:""})],-1);function v(m,g){const a=t("ExternalLinkIcon");return o(),i("div",null,[l,e("blockquote",null,[e("p",null,[r,e("a",u,[b,c(a)])])]),k])}var j=s(d,[["render",v],["__file","4-debug-skill.html.vue"]]);export{j as default};
