import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o,c,a as n,b as e,e as l,d as s}from"./app.22292d3d.js";const i={},u=l(`<h1 id="\u6DF1\u5165\u7406\u89E3java\u5E76\u53D1\u91CD\u5165\u9501reentrantlock" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u5165\u7406\u89E3java\u5E76\u53D1\u91CD\u5165\u9501reentrantlock" aria-hidden="true">#</a> \u6DF1\u5165\u7406\u89E3Java\u5E76\u53D1\u91CD\u5165\u9501ReentrantLock</h1><p>ReentrantLock\u91CD\u5165\u9501\uFF0C\u662F\u5B9E\u73B0Lock\u63A5\u53E3\u7684\u4E00\u4E2A\u7C7B\uFF0C\u4E5F\u662F\u5728\u5B9E\u9645\u7F16\u7A0B\u4E2D\u4F7F\u7528\u9891\u7387\u5F88\u9AD8\u7684\u4E00\u4E2A\u9501\uFF0C<strong>\u652F\u6301\u91CD\u5165\u6027\uFF0C\u8868\u793A\u80FD\u591F\u5BF9\u5171\u4EAB\u8D44\u6E90\u80FD\u591F\u91CD\u590D\u52A0\u9501\uFF0C\u5373\u5F53\u524D\u7EBF\u7A0B\u83B7\u53D6\u8BE5\u9501\u518D\u6B21\u83B7\u53D6\u4E0D\u4F1A\u88AB\u963B\u585E</strong>\u3002</p><p>\u8981\u60F3\u652F\u6301\u91CD\u5165\u6027\uFF0C\u5C31\u8981\u89E3\u51B3\u4E24\u4E2A\u95EE\u9898\uFF1A</p><ol><li><p>\u5728\u7EBF\u7A0B\u83B7\u53D6\u9501\u7684\u65F6\u5019\uFF0C\u5982\u679C\u5DF2\u7ECF\u83B7\u53D6\u9501\u7684\u7EBF\u7A0B\u662F\u5F53\u524D\u7EBF\u7A0B\u7684\u8BDD\u5219\u76F4\u63A5\u518D\u6B21\u83B7\u53D6\u6210\u529F\uFF1B</p></li><li><p>\u7531\u4E8E\u9501\u4F1A\u88AB\u83B7\u53D6n\u6B21\uFF0C\u90A3\u4E48\u53EA\u6709\u9501\u5728\u88AB\u91CA\u653E\u540C\u6837\u7684n\u6B21\u4E4B\u540E\uFF0C\u8BE5\u9501\u624D\u7B97\u662F\u5B8C\u5168\u91CA\u653E\u6210\u529F\u3002</p></li></ol><p>\u6211\u4EEC\u77E5\u9053\uFF0C\u540C\u6B65\u7EC4\u4EF6\u4E3B\u8981\u662F\u901A\u8FC7\u91CD\u5199AQS\u7684\u51E0\u4E2Aprotected\u65B9\u6CD5\u6765\u8868\u8FBE\u81EA\u5DF1\u7684\u540C\u6B65\u8BED\u4E49\u3002\u9488\u5BF9\u7B2C\u4E00\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u6765\u770B\u770BReentrantLock\u662F\u600E\u6837\u5B9E\u73B0\u7684\uFF0C\u4EE5\u975E\u516C\u5E73\u9501\u4E3A\u4F8B\uFF0C\u5224\u65AD\u5F53\u524D\u7EBF\u7A0B\u80FD\u5426\u83B7\u5F97\u9501\u4E3A\u4F8B\uFF0C\u6838\u5FC3\u65B9\u6CD5\u4E3AnonfairTryAcquire\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">nonfairTryAcquire</span><span class="token punctuation">(</span><span class="token keyword">int</span> acquires<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">Thread</span> current <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//1. \u5982\u679C\u8BE5\u9501\u672A\u88AB\u4EFB\u4F55\u7EBF\u7A0B\u5360\u6709\uFF0C\u8BE5\u9501\u80FD\u88AB\u5F53\u524D\u7EBF\u7A0B\u83B7\u53D6</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">compareAndSetState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> acquires<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">setExclusiveOwnerThread</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
	<span class="token comment">//2.\u82E5\u88AB\u5360\u6709\uFF0C\u68C0\u67E5\u5360\u6709\u7EBF\u7A0B\u662F\u5426\u662F\u5F53\u524D\u7EBF\u7A0B</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">==</span> <span class="token function">getExclusiveOwnerThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 3. \u518D\u6B21\u83B7\u53D6\uFF0C\u8BA1\u6570\u52A0\u4E00</span>
        <span class="token keyword">int</span> nextc <span class="token operator">=</span> c <span class="token operator">+</span> acquires<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nextc <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// overflow</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;Maximum lock count exceeded&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setState</span><span class="token punctuation">(</span>nextc<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6BB5\u4EE3\u7801\u7684\u903B\u8F91\u4E5F\u5F88\u7B80\u5355\uFF0C\u5177\u4F53\u8BF7\u770B\u6CE8\u91CA\u3002\u4E3A\u4E86\u652F\u6301\u91CD\u5165\u6027\uFF0C\u5728\u7B2C\u4E8C\u6B65\u589E\u52A0\u4E86\u5904\u7406\u903B\u8F91\uFF0C\u5982\u679C\u8BE5\u9501\u5DF2\u7ECF\u88AB\u7EBF\u7A0B\u6240\u5360\u6709\u4E86\uFF0C\u4F1A\u7EE7\u7EED\u68C0\u67E5\u5360\u6709\u7EBF\u7A0B\u662F\u5426\u4E3A\u5F53\u524D\u7EBF\u7A0B\uFF0C\u5982\u679C\u662F\u7684\u8BDD\uFF0C\u540C\u6B65\u72B6\u6001\u52A01\u8FD4\u56DEtrue\uFF0C\u8868\u793A\u53EF\u4EE5\u518D\u6B21\u83B7\u53D6\u6210\u529F\u3002\u6BCF\u6B21\u91CD\u65B0\u83B7\u53D6\u90FD\u4F1A\u5BF9\u540C\u6B65\u72B6\u6001\u8FDB\u884C\u52A0\u4E00\u7684\u64CD\u4F5C\uFF0C\u90A3\u4E48\u91CA\u653E\u7684\u65F6\u5019\u5904\u7406\u601D\u8DEF\u662F\u600E\u6837\u7684\u4E86\uFF1F\uFF08\u4F9D\u7136\u8FD8\u662F\u4EE5\u975E\u516C\u5E73\u9501\u4E3A\u4F8B\uFF09\u6838\u5FC3\u65B9\u6CD5\u4E3AtryRelease\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">protected</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">tryRelease</span><span class="token punctuation">(</span><span class="token keyword">int</span> releases<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//1. \u540C\u6B65\u72B6\u6001\u51CF1</span>
    <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> releases<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token function">getExclusiveOwnerThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalMonitorStateException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">boolean</span> free <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//2. \u53EA\u6709\u5F53\u540C\u6B65\u72B6\u6001\u4E3A0\u65F6\uFF0C\u9501\u6210\u529F\u88AB\u91CA\u653E\uFF0C\u8FD4\u56DEtrue</span>
        free <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token function">setExclusiveOwnerThread</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	<span class="token comment">// 3. \u9501\u672A\u88AB\u5B8C\u5168\u91CA\u653E\uFF0C\u8FD4\u56DEfalse</span>
    <span class="token function">setState</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> free<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE3\u7801\u7684\u903B\u8F91\u8BF7\u770B\u6CE8\u91CA\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u91CD\u5165\u9501\u7684\u91CA\u653E\u5FC5\u987B\u5F97\u7B49\u5230\u540C\u6B65\u72B6\u6001\u4E3A0\u65F6\u9501\u624D\u7B97\u6210\u529F\u91CA\u653E\uFF0C\u5426\u5219\u9501\u4ECD\u672A\u91CA\u653E\u3002\u5982\u679C\u9501\u88AB\u83B7\u53D6n\u6B21\uFF0C\u91CA\u653E\u4E86n-1\u6B21\uFF0C\u8BE5\u9501\u672A\u5B8C\u5168\u91CA\u653E\u8FD4\u56DEfalse\uFF0C\u53EA\u6709\u88AB\u91CA\u653En\u6B21\u624D\u7B97\u6210\u529F\u91CA\u653E\uFF0C\u8FD4\u56DEtrue\u3002\u5230\u73B0\u5728\u6211\u4EEC\u53EF\u4EE5\u7406\u6E05ReentrantLock\u91CD\u5165\u6027\u7684\u5B9E\u73B0\u4E86\uFF0C\u4E5F\u5C31\u662F\u7406\u89E3\u4E86\u540C\u6B65\u8BED\u4E49\u7684\u7B2C\u4E00\u6761\u3002</p><p>ReentrantLock\u652F\u6301\u4E24\u79CD\u9501\uFF1A<strong>\u516C\u5E73\u9501</strong>\u548C<strong>\u975E\u516C\u5E73\u9501</strong>\u3002<strong>\u4F55\u8C13\u516C\u5E73\u6027\uFF0C\u662F\u9488\u5BF9\u83B7\u53D6\u9501\u800C\u8A00\u7684\uFF0C\u5982\u679C\u4E00\u4E2A\u9501\u662F\u516C\u5E73\u7684\uFF0C\u90A3\u4E48\u9501\u7684\u83B7\u53D6\u987A\u5E8F\u5C31\u5E94\u8BE5\u7B26\u5408\u8BF7\u6C42\u4E0A\u7684\u7EDD\u5BF9\u65F6\u95F4\u987A\u5E8F\uFF0C\u6EE1\u8DB3FIFO</strong>\u3002ReentrantLock\u7684\u6784\u9020\u65B9\u6CD5\u65E0\u53C2\u65F6\u662F\u6784\u9020\u975E\u516C\u5E73\u9501\uFF0C\u6E90\u7801\u4E3A\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sync <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NonfairSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53E6\u5916\u8FD8\u63D0\u4F9B\u4E86\u53E6\u5916\u4E00\u79CD\u65B9\u5F0F\uFF0C\u53EF\u4F20\u5165\u4E00\u4E2Aboolean\u503C\uFF0Ctrue\u65F6\u4E3A\u516C\u5E73\u9501\uFF0Cfalse\u65F6\u4E3A\u975E\u516C\u5E73\u9501\uFF0C\u6E90\u7801\u4E3A\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> fair<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sync <span class="token operator">=</span> fair <span class="token operator">?</span> <span class="token keyword">new</span> <span class="token class-name">FairSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">NonfairSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E0A\u9762\u975E\u516C\u5E73\u9501\u83B7\u53D6\u65F6\uFF08nonfairTryAcquire\u65B9\u6CD5\uFF09\u53EA\u662F\u7B80\u5355\u7684\u83B7\u53D6\u4E86\u4E00\u4E0B\u5F53\u524D\u72B6\u6001\u505A\u4E86\u4E00\u4E9B\u903B\u8F91\u5904\u7406\uFF0C\u5E76\u6CA1\u6709\u8003\u8651\u5230\u5F53\u524D\u540C\u6B65\u961F\u5217\u4E2D\u7EBF\u7A0B\u7B49\u5F85\u7684\u60C5\u51B5\u3002\u6211\u4EEC\u6765\u770B\u770B\u516C\u5E73\u9501\u7684\u5904\u7406\u903B\u8F91\u662F\u600E\u6837\u7684\uFF0C\u6838\u5FC3\u65B9\u6CD5\u4E3A\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">protected</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">tryAcquire</span><span class="token punctuation">(</span><span class="token keyword">int</span> acquires<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">Thread</span> current <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">hasQueuedPredecessors</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
            <span class="token function">compareAndSetState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> acquires<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">setExclusiveOwnerThread</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">==</span> <span class="token function">getExclusiveOwnerThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> nextc <span class="token operator">=</span> c <span class="token operator">+</span> acquires<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nextc <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;Maximum lock count exceeded&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setState</span><span class="token punctuation">(</span>nextc<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6BB5\u4EE3\u7801\u7684\u903B\u8F91\u4E0EnonfairTryAcquire\u57FA\u672C\u4E0A\u4E00\u76F4\uFF0C\u552F\u4E00\u7684\u4E0D\u540C\u5728\u4E8E\u589E\u52A0\u4E86hasQueuedPredecessors\u7684\u903B\u8F91\u5224\u65AD\uFF0C\u65B9\u6CD5\u540D\u5C31\u53EF\u77E5\u9053\u8BE5\u65B9\u6CD5\u7528\u6765\u5224\u65AD\u5F53\u524D\u8282\u70B9\u5728\u540C\u6B65\u961F\u5217\u4E2D\u662F\u5426\u6709\u524D\u9A71\u8282\u70B9\u7684\u5224\u65AD\uFF0C\u5982\u679C\u6709\u524D\u9A71\u8282\u70B9\u8BF4\u660E\u6709\u7EBF\u7A0B\u6BD4\u5F53\u524D\u7EBF\u7A0B\u66F4\u65E9\u7684\u8BF7\u6C42\u8D44\u6E90\uFF0C\u6839\u636E\u516C\u5E73\u6027\uFF0C\u5F53\u524D\u7EBF\u7A0B\u8BF7\u6C42\u8D44\u6E90\u5931\u8D25\u3002\u5982\u679C\u5F53\u524D\u8282\u70B9\u6CA1\u6709\u524D\u9A71\u8282\u70B9\u7684\u8BDD\uFF0C\u518D\u624D\u6709\u505A\u540E\u9762\u7684\u903B\u8F91\u5224\u65AD\u7684\u5FC5\u8981\u6027\u3002</p><p><strong>\u516C\u5E73\u9501\u6BCF\u6B21\u90FD\u662F\u4ECE\u540C\u6B65\u961F\u5217\u4E2D\u7684\u7B2C\u4E00\u4E2A\u8282\u70B9\u83B7\u53D6\u5230\u9501\uFF0C\u800C\u975E\u516C\u5E73\u6027\u9501\u5219\u4E0D\u4E00\u5B9A\uFF0C\u6709\u53EF\u80FD\u521A\u91CA\u653E\u9501\u7684\u7EBF\u7A0B\u80FD\u518D\u6B21\u83B7\u53D6\u5230\u9501</strong>\u3002</p><hr>`,18),r=n("p",null,"\u7F16\u8F91\uFF1A\u6C89\u9ED8\u738B\u4E8C\uFF0C\u5185\u5BB9\u5927\u90E8\u5206\u6765\u6E90\u4EE5\u4E0B\u4E09\u4E2A\u5F00\u6E90\u4ED3\u5E93\uFF1A",-1),k={href:"http://concurrent.redspider.group/",target:"_blank",rel:"noopener noreferrer"},d=s("\u6DF1\u5165\u6D45\u51FA Java \u591A\u7EBF\u7A0B"),v={href:"https://github.com/CL0610/Java-concurrency",target:"_blank",rel:"noopener noreferrer"},m=s("\u5E76\u53D1\u7F16\u7A0B\u77E5\u8BC6\u603B\u7ED3"),b={href:"https://github.com/CoderLeixiaoshuai/java-eight-part",target:"_blank",rel:"noopener noreferrer"},f=s("Java\u516B\u80A1\u6587"),h=n("hr",null,null,-1),w=s("\u6700\u8FD1\u6574\u7406\u4E86\u4E00\u4EFD\u725B\u903C\u7684\u5B66\u4E60\u8D44\u6599\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8EJava\u57FA\u7840\u90E8\u5206\uFF08JVM\u3001Java\u96C6\u5408\u6846\u67B6\u3001\u591A\u7EBF\u7A0B\uFF09\uFF0C\u8FD8\u56CA\u62EC\u4E86 "),y=n("strong",null,"\u6570\u636E\u5E93\u3001\u8BA1\u7B97\u673A\u7F51\u7EDC\u3001\u7B97\u6CD5\u4E0E\u6570\u636E\u7ED3\u6784\u3001\u8BBE\u8BA1\u6A21\u5F0F\u3001\u6846\u67B6\u7C7BSpring\u3001Netty\u3001\u5FAE\u670D\u52A1\uFF08Dubbo\uFF0C\u6D88\u606F\u961F\u5217\uFF09 \u7F51\u5173",-1),g=s(" \u7B49\u7B49\u7B49\u7B49\u2026\u2026\u8BE6\u60C5\u6233\uFF1A"),_={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},x=s("\u53EF\u4EE5\u8BF4\u662F2022\u5E74\u5168\u7F51\u6700\u5168\u7684\u5B66\u4E60\u548C\u627E\u5DE5\u4F5C\u7684PDF\u8D44\u6E90\u4E86"),j=n("p",null,[s("\u5173\u6CE8\u4E8C\u54E5\u7684\u539F\u521B\u516C\u4F17\u53F7 "),n("strong",null,"\u6C89\u9ED8\u738B\u4E8C"),s("\uFF0C\u56DE\u590D"),n("strong",null,"111"),s(" \u5373\u53EF\u514D\u8D39\u9886\u53D6\u3002")],-1),T=n("p",null,[n("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:""})],-1);function S(q,L){const a=p("ExternalLinkIcon");return o(),c("div",null,[u,n("blockquote",null,[r,n("ul",null,[n("li",null,[n("a",k,[d,e(a)])]),n("li",null,[n("a",v,[m,e(a)])]),n("li",null,[n("a",b,[f,e(a)])])])]),h,n("p",null,[w,y,g,n("a",_,[x,e(a)])]),j,T])}var A=t(i,[["render",S],["__file","reentrantLock.html.vue"]]);export{A as default};
