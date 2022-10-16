import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as c,c as p,a,b as e,e as l,d as n}from"./app.22292d3d.js";const i={},r=l(`<p>\u901A\u8FC7\u524D\u9762\u4E24\u7BC7\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u6DF1\u5165\u5730\u4E86\u89E3\u4E86 Java \u62BD\u8C61\u7C7B\u548C Java \u63A5\u53E3\uFF0C\u90A3\u8FD9\u7BC7\u6211\u4EEC\u6765\u91CD\u70B9\u8BF4\u4E00\u4E0B\u62BD\u8C61\u7C7B\u548C\u63A5\u53E3\u4E4B\u95F4\u7684\u533A\u522B\u3002</p><h2 id="_01\u3001\u62BD\u8C61\u7C7B" tabindex="-1"><a class="header-anchor" href="#_01\u3001\u62BD\u8C61\u7C7B" aria-hidden="true">#</a> 01\u3001\u62BD\u8C61\u7C7B</h2><p>\u5728 Java \u4E2D\uFF0C\u901A\u8FC7\u5173\u952E\u5B57 <code>abstract</code> \u5B9A\u4E49\u7684\u7C7B\u53EB\u505A\u62BD\u8C61\u7C7B\u3002Java \u662F\u4E00\u95E8\u9762\u5411\u5BF9\u8C61\u7684\u8BED\u8A00\uFF0C\u56E0\u6B64\u6240\u6709\u7684\u5BF9\u8C61\u90FD\u662F\u901A\u8FC7\u7C7B\u6765\u63CF\u8FF0\u7684\uFF1B\u4F46\u53CD\u8FC7\u6765\uFF0C\u5E76\u4E0D\u662F\u6240\u6709\u7684\u7C7B\u90FD\u662F\u7528\u6765\u63CF\u8FF0\u5BF9\u8C61\u7684\uFF0C\u62BD\u8C61\u7C7B\u5C31\u662F\u5176\u4E2D\u7684\u4E00\u79CD\u3002</p><p>\u4EE5\u4E0B\u793A\u4F8B\u5C55\u793A\u4E86\u4E00\u4E2A\u7B80\u5355\u7684\u62BD\u8C61\u7C7B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u4E2A\u4EBA\u8BA4\u4E3A\uFF0C\u4E00\u540D\u6559\u7EC3\u5FC5\u987B\u653B\u5B88\u517C\u5907</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Coach</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">defend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">attack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02\u3001\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_02\u3001\u63A5\u53E3" aria-hidden="true">#</a> 02\u3001\u63A5\u53E3</h2><p>\u6211\u4EEC\u77E5\u9053\uFF0C\u6709\u62BD\u8C61\u65B9\u6CD5\u7684\u7C7B\u88AB\u79F0\u4E3A\u62BD\u8C61\u7C7B\uFF0C\u4E5F\u5C31\u610F\u5473\u7740\u62BD\u8C61\u7C7B\u4E2D\u8FD8\u80FD\u6709\u4E0D\u662F\u62BD\u8C61\u65B9\u6CD5\u7684\u65B9\u6CD5\u3002\u8FD9\u6837\u7684\u7C7B\u5C31\u4E0D\u80FD\u7B97\u4F5C\u7EAF\u7CB9\u7684\u63A5\u53E3\uFF0C\u5C3D\u7BA1\u5B83\u4E5F\u53EF\u4EE5\u63D0\u4F9B\u63A5\u53E3\u7684\u529F\u80FD\u2014\u2014\u53EA\u80FD\u8BF4\u62BD\u8C61\u7C7B\u662F\u666E\u901A\u7C7B\u4E0E\u63A5\u53E3\u4E4B\u95F4\u7684\u4E00\u79CD\u4E2D\u5EB8\u4E4B\u9053\u3002</p><p><strong>\u63A5\u53E3\uFF08\u82F1\u6587\uFF1AInterface\uFF09\uFF0C\u5728 Java \u4E2D\u662F\u4E00\u4E2A\u62BD\u8C61\u7C7B\u578B\uFF0C\u662F\u62BD\u8C61\u65B9\u6CD5\u7684\u96C6\u5408</strong>\uFF1B\u63A5\u53E3\u901A\u8FC7\u5173\u952E\u5B57 <code>interface</code> \u6765\u5B9A\u4E49\u3002\u63A5\u53E3\u4E0E\u62BD\u8C61\u7C7B\u7684\u4E0D\u540C\u4E4B\u5904\u5728\u4E8E\uFF1A</p><p>1\u3001\u62BD\u8C61\u7C7B\u53EF\u4EE5\u6709\u65B9\u6CD5\u4F53\u7684\u65B9\u6CD5\uFF0C\u4F46\u63A5\u53E3\u6CA1\u6709\u3002 2\u3001\u63A5\u53E3\u4E2D\u7684\u6210\u5458\u53D8\u91CF\u9690\u5F0F\u4E3A <code>static final</code>\uFF0C\u4F46\u62BD\u8C61\u7C7B\u4E0D\u662F\u7684\u3002 3\u3001\u4E00\u4E2A\u7C7B\u53EF\u4EE5\u5B9E\u73B0\u591A\u4E2A\u63A5\u53E3\uFF0C\u4F46\u53EA\u80FD\u7EE7\u627F\u4E00\u4E2A\u62BD\u8C61\u7C7B\u3002</p><p>\u4EE5\u4E0B\u793A\u4F8B\u5C55\u793A\u4E86\u4E00\u4E2A\u7B80\u5355\u7684\u63A5\u53E3\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u9690\u5F0F\u7684abstract</span>
<span class="token keyword">interface</span> <span class="token class-name">Coach</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u9690\u5F0F\u7684public</span>
	<span class="token keyword">void</span> <span class="token function">defend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">void</span> <span class="token function">attack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u63A5\u53E3\u662F\u9690\u5F0F\u62BD\u8C61\u7684\uFF0C\u6240\u4EE5\u58F0\u660E\u65F6\u6CA1\u6709\u5FC5\u8981\u4F7F\u7528 <code>abstract</code> \u5173\u952E\u5B57\uFF1B</li><li>\u63A5\u53E3\u7684\u6BCF\u4E2A\u65B9\u6CD5\u90FD\u662F\u9690\u5F0F\u62BD\u8C61\u7684\uFF0C\u6240\u4EE5\u540C\u6837\u4E0D\u9700\u8981\u4F7F\u7528 <code>abstract</code> \u5173\u952E\u5B57\uFF1B</li><li>\u63A5\u53E3\u4E2D\u7684\u65B9\u6CD5\u90FD\u662F\u9690\u5F0F <code>public</code> \u7684\u3002</li></ul><h2 id="_03\u3001\u4E24\u8005\u5DEE\u522B" tabindex="-1"><a class="header-anchor" href="#_03\u3001\u4E24\u8005\u5DEE\u522B" aria-hidden="true">#</a> 03\u3001\u4E24\u8005\u5DEE\u522B</h2><p>\u201C\u54E6\uFF0C\u6211\u7406\u89E3\u4E86\u54E5\u3002\u90A3\u6211\u518D\u95EE\u4E00\u4E0B\uFF0C\u62BD\u8C61\u7C7B\u548C\u63A5\u53E3\u6709\u4EC0\u4E48\u5DEE\u522B\u5462\uFF1F\u201D</p><p>\u201C\u54C7\uFF0C\u4E09\u59B9\u5440\uFF0C\u4F60\u8FD9\u4E2A\u95EE\u9898\u6070\u5230\u597D\u5904\uFF0C\u95EE\u5230\u4E86\u70B9\u5B50\u4E0A\u3002\u201D\u6211\u4E0D\u7531\u5F97\u4E3A\u4E09\u59B9\u7AD6\u8D77\u4E86\u5927\u62C7\u6307\u3002</p><p>1\uFF09\u8BED\u6CD5\u5C42\u9762\u4E0A</p><ul><li>\u62BD\u8C61\u7C7B\u53EF\u4EE5\u63D0\u4F9B\u6210\u5458\u65B9\u6CD5\u7684\u5B9E\u73B0\u7EC6\u8282\uFF0C\u800C\u63A5\u53E3\u4E2D\u53EA\u80FD\u5B58\u5728public abstract \u65B9\u6CD5\uFF1B</li><li>\u62BD\u8C61\u7C7B\u4E2D\u7684\u6210\u5458\u53D8\u91CF\u53EF\u4EE5\u662F\u5404\u79CD\u7C7B\u578B\u7684\uFF0C\u800C\u63A5\u53E3\u4E2D\u7684\u6210\u5458\u53D8\u91CF\u53EA\u80FD\u662Fpublic static final\u7C7B\u578B\u7684\uFF1B</li><li>\u63A5\u53E3\u4E2D\u4E0D\u80FD\u542B\u6709\u9759\u6001\u4EE3\u7801\u5757\u4EE5\u53CA\u9759\u6001\u65B9\u6CD5\uFF0C\u800C\u62BD\u8C61\u7C7B\u53EF\u4EE5\u6709\u9759\u6001\u4EE3\u7801\u5757\u548C\u9759\u6001\u65B9\u6CD5\uFF1B</li><li>\u4E00\u4E2A\u7C7B\u53EA\u80FD\u7EE7\u627F\u4E00\u4E2A\u62BD\u8C61\u7C7B\uFF0C\u800C\u4E00\u4E2A\u7C7B\u5374\u53EF\u4EE5\u5B9E\u73B0\u591A\u4E2A\u63A5\u53E3\u3002</li></ul><p>2\uFF09\u8BBE\u8BA1\u5C42\u9762\u4E0A</p><p>\u62BD\u8C61\u7C7B\u662F\u5BF9\u4E00\u79CD\u4E8B\u7269\u7684\u62BD\u8C61\uFF0C\u5373\u5BF9\u7C7B\u62BD\u8C61\uFF0C\u7EE7\u627F\u62BD\u8C61\u7C7B\u7684\u5B50\u7C7B\u548C\u62BD\u8C61\u7C7B\u672C\u8EAB\u662F\u4E00\u79CD <code>is-a</code> \u7684\u5173\u7CFB\u3002\u800C\u63A5\u53E3\u662F\u5BF9\u884C\u4E3A\u7684\u62BD\u8C61\u3002\u62BD\u8C61\u7C7B\u662F\u5BF9\u6574\u4E2A\u7C7B\u6574\u4F53\u8FDB\u884C\u62BD\u8C61\uFF0C\u5305\u62EC\u5C5E\u6027\u3001\u884C\u4E3A\uFF0C\u4F46\u662F\u63A5\u53E3\u5374\u662F\u5BF9\u7C7B\u5C40\u90E8\uFF08\u884C\u4E3A\uFF09\u8FDB\u884C\u62BD\u8C61\u3002</p><p>\u4E3E\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF0C\u98DE\u673A\u548C\u9E1F\u662F\u4E0D\u540C\u7C7B\u7684\u4E8B\u7269\uFF0C\u4F46\u662F\u5B83\u4EEC\u90FD\u6709\u4E00\u4E2A\u5171\u6027\uFF0C\u5C31\u662F\u90FD\u4F1A\u98DE\u3002\u90A3\u4E48\u5728\u8BBE\u8BA1\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u5C06\u98DE\u673A\u8BBE\u8BA1\u4E3A\u4E00\u4E2A\u7C7BAirplane\uFF0C\u5C06\u9E1F\u8BBE\u8BA1\u4E3A\u4E00\u4E2A\u7C7BBird\uFF0C\u4F46\u662F\u4E0D\u80FD\u5C06 \u98DE\u884C \u8FD9\u4E2A\u7279\u6027\u4E5F\u8BBE\u8BA1\u4E3A\u7C7B\uFF0C\u56E0\u6B64\u5B83\u53EA\u662F\u4E00\u4E2A\u884C\u4E3A\u7279\u6027\uFF0C\u5E76\u4E0D\u662F\u5BF9\u4E00\u7C7B\u4E8B\u7269\u7684\u62BD\u8C61\u63CF\u8FF0\u3002</p><p>\u6B64\u65F6\u53EF\u4EE5\u5C06 \u98DE\u884C \u8BBE\u8BA1\u4E3A\u4E00\u4E2A\u63A5\u53E3Fly\uFF0C\u5305\u542B\u65B9\u6CD5fly()\uFF0C\u7136\u540EAirplane\u548CBird\u5206\u522B\u6839\u636E\u81EA\u5DF1\u7684\u9700\u8981\u5B9E\u73B0Fly\u8FD9\u4E2A\u63A5\u53E3\u3002\u7136\u540E\u81F3\u4E8E\u6709\u4E0D\u540C\u79CD\u7C7B\u7684\u98DE\u673A\uFF0C\u6BD4\u5982\u6218\u6597\u673A\u3001\u6C11\u7528\u98DE\u673A\u7B49\u76F4\u63A5\u7EE7\u627FAirplane\u5373\u53EF\uFF0C\u5BF9\u4E8E\u9E1F\u4E5F\u662F\u7C7B\u4F3C\u7684\uFF0C\u4E0D\u540C\u79CD\u7C7B\u7684\u9E1F\u76F4\u63A5\u7EE7\u627FBird\u7C7B\u5373\u53EF\u3002\u4ECE\u8FD9\u91CC\u53EF\u4EE5\u770B\u51FA\uFF0C\u7EE7\u627F\u662F\u4E00\u4E2A &quot;\u662F\u4E0D\u662F&quot;\u7684\u5173\u7CFB\uFF0C\u800C \u63A5\u53E3 \u5B9E\u73B0\u5219\u662F &quot;\u6709\u6CA1\u6709&quot;\u7684\u5173\u7CFB\u3002\u5982\u679C\u4E00\u4E2A\u7C7B\u7EE7\u627F\u4E86\u67D0\u4E2A\u62BD\u8C61\u7C7B\uFF0C\u5219\u5B50\u7C7B\u5FC5\u5B9A\u662F\u62BD\u8C61\u7C7B\u7684\u79CD\u7C7B\uFF0C\u800C\u63A5\u53E3\u5B9E\u73B0\u5219\u662F\u6709\u6CA1\u6709\u3001\u5177\u5907\u4E0D\u5177\u5907\u7684\u5173\u7CFB\uFF0C\u6BD4\u5982\u9E1F\u662F\u5426\u80FD\u98DE\uFF08\u6216\u8005\u662F\u5426\u5177\u5907\u98DE\u884C\u8FD9\u4E2A\u7279\u70B9\uFF09\uFF0C\u80FD\u98DE\u884C\u5219\u53EF\u4EE5\u5B9E\u73B0\u8FD9\u4E2A\u63A5\u53E3\uFF0C\u4E0D\u80FD\u98DE\u884C\u5C31\u4E0D\u5B9E\u73B0\u8FD9\u4E2A\u63A5\u53E3\u3002</p><p>\u63A5\u53E3\u662F\u5BF9\u7C7B\u7684\u67D0\u79CD\u884C\u4E3A\u7684\u4E00\u79CD\u62BD\u8C61\uFF0C\u63A5\u53E3\u548C\u7C7B\u4E4B\u95F4\u5E76\u6CA1\u6709\u5F88\u5F3A\u7684\u5173\u8054\u5173\u7CFB\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\u6765\u8BF4\uFF0C\u6240\u6709\u7684\u7C7B\u90FD\u53EF\u4EE5\u5B9E\u73B0 <code>Serializable</code> \u63A5\u53E3\uFF0C\u4ECE\u800C\u5177\u6709\u5E8F\u5217\u5316\u7684\u529F\u80FD\uFF0C\u4F46\u4E0D\u80FD\u8BF4\u6240\u6709\u7684\u7C7B\u548C Serializable \u4E4B\u95F4\u662F <code>is-a</code> \u7684\u5173\u7CFB\u3002</p><p>\u62BD\u8C61\u7C7B\u4F5C\u4E3A\u5F88\u591A\u5B50\u7C7B\u7684\u7236\u7C7B\uFF0C\u5B83\u662F\u4E00\u79CD\u6A21\u677F\u5F0F\u8BBE\u8BA1\u3002\u800C\u63A5\u53E3\u662F\u4E00\u79CD\u884C\u4E3A\u89C4\u8303\uFF0C\u5B83\u662F\u4E00\u79CD\u8F90\u5C04\u5F0F\u8BBE\u8BA1\u3002\u4EC0\u4E48\u662F\u6A21\u677F\u5F0F\u8BBE\u8BA1\uFF1F\u6700\u7B80\u5355\u4F8B\u5B50\uFF0C\u5927\u5BB6\u90FD\u7528\u8FC7ppt\u91CC\u9762\u7684\u6A21\u677F\uFF0C\u5982\u679C\u7528\u6A21\u677FA\u8BBE\u8BA1\u4E86ppt B\u548Cppt C\uFF0Cppt B\u548Cppt C\u516C\u5171\u7684\u90E8\u5206\u5C31\u662F\u6A21\u677FA\u4E86\uFF0C\u5982\u679C\u5B83\u4EEC\u7684\u516C\u5171\u90E8\u5206\u9700\u8981\u6539\u52A8\uFF0C\u5219\u53EA\u9700\u8981\u6539\u52A8\u6A21\u677FA\u5C31\u53EF\u4EE5\u4E86\uFF0C\u4E0D\u9700\u8981\u91CD\u65B0\u5BF9ppt B\u548Cppt C\u8FDB\u884C\u6539\u52A8\u3002\u800C\u8F90\u5C04\u5F0F\u8BBE\u8BA1\uFF0C\u6BD4\u5982\u67D0\u4E2A\u7535\u68AF\u90FD\u88C5\u4E86\u67D0\u79CD\u62A5\u8B66\u5668\uFF0C\u4E00\u65E6\u8981\u66F4\u65B0\u62A5\u8B66\u5668\uFF0C\u5C31\u5FC5\u987B\u5168\u90E8\u66F4\u65B0\u3002\u4E5F\u5C31\u662F\u8BF4\u5BF9\u4E8E\u62BD\u8C61\u7C7B\uFF0C\u5982\u679C\u9700\u8981\u6DFB\u52A0\u65B0\u7684\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728\u62BD\u8C61\u7C7B\u4E2D\u6DFB\u52A0\u5177\u4F53\u7684\u5B9E\u73B0\uFF0C\u5B50\u7C7B\u53EF\u4EE5\u4E0D\u8FDB\u884C\u53D8\u66F4\uFF1B\u800C\u5BF9\u4E8E\u63A5\u53E3\u5219\u4E0D\u884C\uFF0C\u5982\u679C\u63A5\u53E3\u8FDB\u884C\u4E86\u53D8\u66F4\uFF0C\u5219\u6240\u6709\u5B9E\u73B0\u8FD9\u4E2A\u63A5\u53E3\u7684\u7C7B\u90FD\u5FC5\u987B\u8FDB\u884C\u76F8\u5E94\u7684\u6539\u52A8\u3002</p>`,23),d=n("\u53C2\u8003\u94FE\u63A5\uFF1A"),u={href:"https://www.cnblogs.com/dolphin0520/p/3811437.html",target:"_blank",rel:"noopener noreferrer"},v=n("https://www.cnblogs.com/dolphin0520/p/3811437.html"),k=a("hr",null,null,-1),b=n("\u6700\u8FD1\u6574\u7406\u4E86\u4E00\u4EFD\u725B\u903C\u7684\u5B66\u4E60\u8D44\u6599\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8EJava\u57FA\u7840\u90E8\u5206\uFF08JVM\u3001Java\u96C6\u5408\u6846\u67B6\u3001\u591A\u7EBF\u7A0B\uFF09\uFF0C\u8FD8\u56CA\u62EC\u4E86 "),h=a("strong",null,"\u6570\u636E\u5E93\u3001\u8BA1\u7B97\u673A\u7F51\u7EDC\u3001\u7B97\u6CD5\u4E0E\u6570\u636E\u7ED3\u6784\u3001\u8BBE\u8BA1\u6A21\u5F0F\u3001\u6846\u67B6\u7C7BSpring\u3001Netty\u3001\u5FAE\u670D\u52A1\uFF08Dubbo\uFF0C\u6D88\u606F\u961F\u5217\uFF09 \u7F51\u5173",-1),m=n(" \u7B49\u7B49\u7B49\u7B49\u2026\u2026\u8BE6\u60C5\u6233\uFF1A"),_={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},f=n("\u53EF\u4EE5\u8BF4\u662F2022\u5E74\u5168\u7F51\u6700\u5168\u7684\u5B66\u4E60\u548C\u627E\u5DE5\u4F5C\u7684PDF\u8D44\u6E90\u4E86"),g=a("p",null,[n("\u5173\u6CE8\u4E8C\u54E5\u7684\u539F\u521B\u516C\u4F17\u53F7 "),a("strong",null,"\u6C89\u9ED8\u738B\u4E8C"),n("\uFF0C\u56DE\u590D"),a("strong",null,"111"),n(" \u5373\u53EF\u514D\u8D39\u9886\u53D6\u3002")],-1),w=a("p",null,[a("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:""})],-1);function y(x,j){const s=o("ExternalLinkIcon");return c(),p("div",null,[r,a("blockquote",null,[a("p",null,[d,a("a",u,[v,e(s)])])]),k,a("p",null,[b,h,m,a("a",_,[f,e(s)])]),g,w])}var A=t(i,[["render",y],["__file","abstract-vs-interface.html.vue"]]);export{A as default};
