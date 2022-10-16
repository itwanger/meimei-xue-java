import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r,o as s,c as l,a as e,b as i,d as n,e as d}from"./app.22292d3d.js";const o={},c=e("p",null,"TreeMap\uFF0C\u867D\u7136\u4E5F\u662F\u4E2A Map\uFF0C\u4F46\u5B58\u5728\u611F\u592A\u4F4E\u4E86\u3002\u6211\u505A\u7A0B\u5E8F\u5458\u8FD9\u5341\u591A\u5E74\u91CC\uFF0CHashMap \u7528\u4E86\u8D85\u8FC7\u5341\u5E74\uFF0CTreeMap \u53EA\u7528\u4E86\u591A\u5B57\u91CC\u90A3\u4E48\u4E00\u5C0F\u4F1A\u513F\u4E00\u5C0F\u4F1A\u513F\uFF0C\u771F\u7684\u662F\uFF0C\u592A\u60E8\u4E86\u3002",-1),p=e("p",null,"\u867D\u7136 TreeMap \u7528\u5F97\u5C11\uFF0C\u4F46\u8FD8\u662F\u6709\u7528\u5904\u7684\u3002",-1),u=n("\u4E4B\u524D "),v={href:"https://tobebetterjavaer.com/collection/linkedhashmap.html",target:"_blank",rel:"noopener noreferrer"},m=n("LinkedHashMap"),b=n(" \u90A3\u7BC7\u6587\u7AE0\u91CC\u63D0\u5230\u8FC7\u4E86\uFF0CHashMap \u662F\u65E0\u5E8F\u7684\uFF0C\u6240\u6709\u6709\u4E86 LinkedHashMap\uFF0C\u52A0\u4E0A\u4E86\u53CC\u5411\u94FE\u8868\u540E\uFF0C\u5C31\u53EF\u4EE5\u4FDD\u6301\u5143\u7D20\u7684\u63D2\u5165\u987A\u5E8F\u548C\u8BBF\u95EE\u987A\u5E8F\uFF0C\u90A3 TreeMap \u5462\uFF1F"),g=d(`<p>TreeMap \u7531\u7EA2\u9ED1\u6811\u5B9E\u73B0\uFF0C\u53EF\u4EE5\u4FDD\u6301\u5143\u7D20\u7684\u81EA\u7136\u987A\u5E8F\uFF0C\u6216\u8005\u5B9E\u73B0\u4E86 Comparator \u63A5\u53E3\u7684\u81EA\u5B9A\u4E49\u987A\u5E8F\u3002</p><p>\u53EF\u80FD\u6709\u4E9B\u540C\u5B66\u4E0D\u77E5\u9053\u7EA2\u9ED1\u6811\uFF0C\u7406\u89E3\u8D77\u6765 TreeMap \u5C31\u6709\u70B9\u96BE\u5EA6\uFF0C\u90A3\u6211\u5148\u6765\u666E\u53CA\u4E00\u4E0B\uFF1A</p><blockquote><p>\u7EA2\u9ED1\u6811\uFF08\u82F1\u8BED\uFF1ARed\u2013black tree\uFF09\u662F\u4E00\u79CD\u81EA\u5E73\u8861\u7684\u4E8C\u53C9\u67E5\u627E\u6811\uFF08Binary Search Tree\uFF09\uFF0C\u7ED3\u6784\u590D\u6742\uFF0C\u4F46\u5374\u6709\u7740\u826F\u597D\u7684\u6027\u80FD\uFF0C\u5B8C\u6210\u67E5\u627E\u3001\u63D2\u5165\u548C\u5220\u9664\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u5747\u4E3A log(n)\u3002</p></blockquote><p>\u4E8C\u53C9\u67E5\u627E\u6811\u53C8\u662F\u4EC0\u4E48\u5462\uFF1F</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/collection/treemap-c5f29a61-91e0-47e8-9e16-055e1bea5b33.jpg" alt=""></p><p>\u4E0A\u56FE\u4E2D\u8FD9\u68F5\u6811\uFF0C\u5C31\u662F\u4E00\u9897\u5178\u578B\u7684\u4E8C\u53C9\u67E5\u627E\u6811\uFF1A</p><p>1\uFF09\u5DE6\u5B50\u6811\u4E0A\u6240\u6709\u8282\u70B9\u7684\u503C\u5747\u5C0F\u4E8E\u6216\u7B49\u4E8E\u5B83\u7684\u6839\u7ED3\u70B9\u7684\u503C\u3002</p><p>2\uFF09\u53F3\u5B50\u6811\u4E0A\u6240\u6709\u8282\u70B9\u7684\u503C\u5747\u5927\u4E8E\u6216\u7B49\u4E8E\u5B83\u7684\u6839\u7ED3\u70B9\u7684\u503C\u3002</p><p>3\uFF09\u5DE6\u3001\u53F3\u5B50\u6811\u4E5F\u5206\u522B\u4E3A\u4E8C\u53C9\u6392\u5E8F\u6811\u3002</p><p>\u7406\u89E3\u4E8C\u53C9\u67E5\u627E\u6811\u4E86\u5427\uFF1F\u4E0D\u8FC7\uFF0C\u4E8C\u53C9\u67E5\u627E\u6811\u6709\u4E00\u4E2A\u4E0D\u8DB3\uFF0C\u5C31\u662F\u5BB9\u6613\u53D8\u6210\u7638\u5B50\uFF0C\u5C31\u662F\u4E00\u4FA7\u591A\uFF0C\u4E00\u4FA7\u5C11\uFF0C\u5C31\u50CF\u4E0B\u56FE\u8FD9\u6837\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/collection/treemap-6c3309a0-3737-4677-99c1-e8a156140d62.jpg" alt=""></p><p>\u67E5\u627E\u7684\u6548\u7387\u5C31\u8981\u4ECE log(n) \u53D8\u6210 o(n) \u4E86\uFF0C\u5BF9\u5427\uFF1F\u5FC5\u987B\u8981\u5E73\u8861\u4E00\u4E0B\uFF0C\u5BF9\u5427\uFF1F\u4E8E\u662F\u5C31\u6709\u4E86\u5E73\u8861\u4E8C\u53C9\u6811\uFF0C\u5DE6\u53F3\u4E24\u4E2A\u5B50\u6811\u7684\u9AD8\u5EA6\u5DEE\u7684\u7EDD\u5BF9\u503C\u4E0D\u8D85\u8FC7 1\uFF0C\u5C31\u50CF\u4E0B\u56FE\u8FD9\u6837\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/collection/treemap-b8f74a3d-baf9-4192-a0e0-cdd07955d784.jpg" alt=""></p><p>\u7EA2\u9ED1\u6811\uFF0C\u987E\u540D\u601D\u4E49\uFF0C\u5C31\u662F\u8282\u70B9\u662F\u7EA2\u8272\u6216\u8005\u9ED1\u8272\u7684\u5E73\u8861\u4E8C\u53C9\u6811\uFF0C\u5B83\u901A\u8FC7\u989C\u8272\u7684\u7EA6\u675F\u6765\u7EF4\u6301\u7740\u4E8C\u53C9\u6811\u7684\u5E73\u8861\uFF1A</p><p>1\uFF09\u6BCF\u4E2A\u8282\u70B9\u90FD\u53EA\u80FD\u662F\u7EA2\u8272\u6216\u8005\u9ED1\u8272</p><p>2\uFF09\u6839\u8282\u70B9\u662F\u9ED1\u8272</p><p>3\uFF09\u6BCF\u4E2A\u53F6\u8282\u70B9\uFF08NIL \u8282\u70B9\uFF0C\u7A7A\u8282\u70B9\uFF09\u662F\u9ED1\u8272\u7684\u3002</p><p>4\uFF09\u5982\u679C\u4E00\u4E2A\u8282\u70B9\u662F\u7EA2\u8272\u7684\uFF0C\u5219\u5B83\u4E24\u4E2A\u5B50\u8282\u70B9\u90FD\u662F\u9ED1\u8272\u7684\u3002\u4E5F\u5C31\u662F\u8BF4\u5728\u4E00\u6761\u8DEF\u5F84\u4E0A\u4E0D\u80FD\u51FA\u73B0\u76F8\u90BB\u7684\u4E24\u4E2A\u7EA2\u8272\u8282\u70B9\u3002</p><p>5\uFF09\u4ECE\u4EFB\u4E00\u8282\u70B9\u5230\u5176\u6BCF\u4E2A\u53F6\u5B50\u7684\u6240\u6709\u8DEF\u5F84\u90FD\u5305\u542B\u76F8\u540C\u6570\u76EE\u7684\u9ED1\u8272\u8282\u70B9\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/collection/treemap-3373c98c-d82f-4a7f-949e-a7fe0d99314c.jpg" alt=""></p><p>\u90A3\uFF0C\u5173\u4E8E\u7EA2\u9ED1\u6811\uFF0C\u540C\u5B66\u4EEC\u5C31\u5148\u4E86\u89E3\u5230\u8FD9\uFF0C\u8111\u5B50\u91CC\u6709\u4E2A\u5927\u6982\u7684\u5370\u8C61\uFF0C\u77E5\u9053 TreeMap \u662F\u4E2A\u4EC0\u4E48\u73A9\u610F\u3002</p><h2 id="_01\u3001\u81EA\u7136\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#_01\u3001\u81EA\u7136\u987A\u5E8F" aria-hidden="true">#</a> 01\u3001\u81EA\u7136\u987A\u5E8F</h2><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CTreeMap \u662F\u6839\u636E key \u7684\u81EA\u7136\u987A\u5E8F\u6392\u5217\u7684\u3002\u6BD4\u5982\u8BF4\u6574\u6570\uFF0C\u5C31\u662F\u5347\u5E8F\uFF0C1\u30012\u30013\u30014\u30015\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>TreeMap&lt;Integer,String&gt; mapInt = new TreeMap&lt;&gt;();
mapInt.put(3, &quot;\u6C89\u9ED8\u738B\u4E8C&quot;);
mapInt.put(2, &quot;\u6C89\u9ED8\u738B\u4E8C&quot;);
mapInt.put(1, &quot;\u6C89\u9ED8\u738B\u4E8C&quot;);
mapInt.put(5, &quot;\u6C89\u9ED8\u738B\u4E8C&quot;);
mapInt.put(4, &quot;\u6C89\u9ED8\u738B\u4E8C&quot;);

System.out.println(mapInt);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{1=\u6C89\u9ED8\u738B\u4E8C, 2=\u6C89\u9ED8\u738B\u4E8C, 3=\u6C89\u9ED8\u738B\u4E8C, 4=\u6C89\u9ED8\u738B\u4E8C, 5=\u6C89\u9ED8\u738B\u4E8C}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>TreeMap \u662F\u600E\u4E48\u505A\u5230\u7684\u5462\uFF1F\u60F3\u4E00\u63A2\u7A76\u7ADF\uFF0C\u5C31\u5F97\u4E0A\u6E90\u7801\u4E86\uFF0C\u6765\u770B TreeMap \u7684 <code>put()</code> \u65B9\u6CD5\uFF08\u7701\u53BB\u4E86\u4E00\u90E8\u5206\uFF0C\u7248\u672C\u4E3A JDK 14\uFF09\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public V put(K key, V value) {
    TreeMap.Entry&lt;K,V&gt; t = root;
    int cmp;
    TreeMap.Entry&lt;K,V&gt; parent;
    // split comparator and comparable paths
    Comparator&lt;? super K&gt; cpr = comparator;
    if (cpr != null) {
    }
    else {
        @SuppressWarnings(&quot;unchecked&quot;)
        Comparable&lt;? super K&gt; k = (Comparable&lt;? super K&gt;) key;
        do {
            parent = t;
            cmp = k.compareTo(t.key);
            if (cmp &lt; 0)
                t = t.left;
            else if (cmp &gt; 0)
                t = t.right;
            else
                return t.setValue(value);
        } while (t != null);
    }
    return null;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F <code>cmp = k.compareTo(t.key)</code> \u8FD9\u884C\u4EE3\u7801\uFF0C\u5C31\u662F\u7528\u6765\u8FDB\u884C key \u7684\u6BD4\u8F83\u7684\uFF0C\u7531\u4E8E\u6B64\u65F6 key \u662F int\uFF0C\u6240\u4EE5\u5C31\u4F1A\u8C03\u7528 Integer \u7C7B\u7684 <code>compareTo()</code> \u65B9\u6CD5\u8FDB\u884C\u6BD4\u8F83\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public int compareTo(Integer anotherInteger) {
    return compare(this.value, anotherInteger.value);
}

public static int compare(int x, int y) {
    return (x &lt; y) ? -1 : ((x == y) ? 0 : 1);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u90A3\u76F8\u5E94\u7684\uFF0C\u5982\u679C key \u662F\u5B57\u7B26\u4E32\u7684\u8BDD\uFF0C\u4E5F\u5C31\u4F1A\u8C03\u7528 String \u7C7B\u7684 <code>compareTo()</code> \u65B9\u6CD5\u8FDB\u884C\u6BD4\u8F83\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public int compareTo(String anotherString) {
    byte v1[] = value;
    byte v2[] = anotherString.value;
    byte coder = coder();
    if (coder == anotherString.coder()) {
        return coder == LATIN1 ? StringLatin1.compareTo(v1, v2)
                : StringUTF16.compareTo(v1, v2);
    }
    return coder == LATIN1 ? StringLatin1.compareToUTF16(v1, v2)
            : StringUTF16.compareToLatin1(v1, v2);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7531\u4E8E\u5185\u90E8\u662F\u7531\u5B57\u7B26\u4E32\u7684\u5B57\u8282\u6570\u7EC4\u7684\u5B57\u7B26\u8FDB\u884C\u6BD4\u8F83\u7684\uFF0C\u662F\u4E0D\u662F\u542C\u8D77\u6765\u5F88\u7ED5\uFF1F\u5BF9\uFF0C\u5C31\u662F\u5F88\u7ED5\uFF0C\u6240\u4EE5\u4F7F\u7528\u4E2D\u6587\u5B57\u7B26\u4E32\u4F5C\u4E3A key \u7684\u8BDD\uFF0C\u770B\u4E0D\u51FA\u6765\u6548\u679C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>TreeMap&lt;String,String&gt; mapString = new TreeMap&lt;&gt;();
mapString.put(&quot;c&quot;, &quot;\u6C89\u9ED8\u738B\u4E8C&quot;);
mapString.put(&quot;b&quot;, &quot;\u6C89\u9ED8\u738B\u4E8C&quot;);
mapString.put(&quot;a&quot;, &quot;\u6C89\u9ED8\u738B\u4E8C&quot;);
mapString.put(&quot;e&quot;, &quot;\u6C89\u9ED8\u738B\u4E8C&quot;);
mapString.put(&quot;d&quot;, &quot;\u6C89\u9ED8\u738B\u4E8C&quot;);

System.out.println(mapString);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{a=\u6C89\u9ED8\u738B\u4E8C, b=\u6C89\u9ED8\u738B\u4E8C, c=\u6C89\u9ED8\u738B\u4E8C, d=\u6C89\u9ED8\u738B\u4E8C, e=\u6C89\u9ED8\u738B\u4E8C}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B57\u6BCD\u7684\u5347\u5E8F\uFF0C\u5BF9\u5427\uFF1F</p><h2 id="_02\u3001\u81EA\u5B9A\u4E49\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#_02\u3001\u81EA\u5B9A\u4E49\u6392\u5E8F" aria-hidden="true">#</a> 02\u3001\u81EA\u5B9A\u4E49\u6392\u5E8F</h2><p>\u5982\u679C\u81EA\u7136\u987A\u5E8F\u4E0D\u6EE1\u8DB3\uFF0C\u90A3\u5C31\u53EF\u4EE5\u5728\u58F0\u660E TreeMap \u5BF9\u8C61\u7684\u65F6\u5019\u6307\u5B9A\u6392\u5E8F\u89C4\u5219\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>TreeMap&lt;Integer,String&gt; mapIntReverse = new TreeMap&lt;&gt;(Comparator.reverseOrder());
mapIntReverse.put(3, &quot;\u6C89\u9ED8\u738B\u4E8C&quot;);
mapIntReverse.put(2, &quot;\u6C89\u9ED8\u738B\u4E8C&quot;);
mapIntReverse.put(1, &quot;\u6C89\u9ED8\u738B\u4E8C&quot;);
mapIntReverse.put(5, &quot;\u6C89\u9ED8\u738B\u4E8C&quot;);
mapIntReverse.put(4, &quot;\u6C89\u9ED8\u738B\u4E8C&quot;);

System.out.println(mapIntReverse);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TreeMap \u63D0\u4F9B\u4E86\u53EF\u4EE5\u6307\u5B9A\u6392\u5E8F\u89C4\u5219\u7684\u6784\u9020\u65B9\u6CD5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public TreeMap(Comparator&lt;? super K&gt; comparator) {
    this.comparator = comparator;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Comparator.reverseOrder()</code> \u8FD4\u56DE\u7684\u662F ReverseComparator \u5BF9\u8C61\uFF0C\u5C31\u662F\u7528\u6765\u53CD\u8F6C\u987A\u5E8F\u7684\uFF0C\u975E\u5E38\u65B9\u4FBF\u3002</p><p>\u6240\u4EE5\uFF0C\u8F93\u51FA\u7ED3\u679C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{5=\u6C89\u9ED8\u738B\u4E8C, 4=\u6C89\u9ED8\u738B\u4E8C, 3=\u6C89\u9ED8\u738B\u4E8C, 2=\u6C89\u9ED8\u738B\u4E8C, 1=\u6C89\u9ED8\u738B\u4E8C}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>HashMap \u662F\u65E0\u5E8F\u7684\uFF0C\u63D2\u5165\u7684\u987A\u5E8F\u968F\u7740\u5143\u7D20\u7684\u589E\u52A0\u4F1A\u4E0D\u505C\u5730\u53D8\u52A8\u3002\u4F46 TreeMap \u80FD\u591F\u81F3\u59CB\u81F3\u7EC8\u6309\u7167\u6307\u5B9A\u7684\u987A\u5E8F\u6392\u5217\uFF0C\u8FD9\u5BF9\u4E8E\u9700\u8981\u81EA\u5B9A\u4E49\u6392\u5E8F\u7684\u573A\u666F\uFF0C\u5B9E\u5728\u662F\u592A\u6709\u7528\u4E86\uFF01</p><h2 id="_03\u3001\u6392\u5E8F\u7684\u597D\u5904" tabindex="-1"><a class="header-anchor" href="#_03\u3001\u6392\u5E8F\u7684\u597D\u5904" aria-hidden="true">#</a> 03\u3001\u6392\u5E8F\u7684\u597D\u5904</h2><p>\u65E2\u7136 TreeMap \u7684\u5143\u7D20\u662F\u7ECF\u8FC7\u6392\u5E8F\u7684\uFF0C\u90A3\u627E\u51FA\u6700\u5927\u7684\u90A3\u4E2A\uFF0C\u6700\u5C0F\u7684\u90A3\u4E2A\uFF0C\u6216\u8005\u627E\u51FA\u6240\u6709\u5927\u4E8E\u6216\u8005\u5C0F\u4E8E\u67D0\u4E2A\u503C\u7684\u952E\u6765\u8BF4\uFF0C\u5C31\u65B9\u4FBF\u591A\u4E86\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Integer highestKey = mapInt.lastKey();
Integer lowestKey = mapInt.firstKey();
Set&lt;Integer&gt; keysLessThan3 = mapInt.headMap(3).keySet();
Set&lt;Integer&gt; keysGreaterThanEqTo3 = mapInt.tailMap(3).keySet();

System.out.println(highestKey);
System.out.println(lowestKey);

System.out.println(keysLessThan3);
System.out.println(keysGreaterThanEqTo3);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TreeMap \u8003\u8651\u5F97\u5F88\u5468\u5168\uFF0C\u6070\u597D\u5C31\u63D0\u4F9B\u4E86 <code>lastKey()</code>\u3001<code>firstKey()</code> \u8FD9\u6837\u83B7\u53D6\u6700\u540E\u4E00\u4E2A key \u548C\u7B2C\u4E00\u4E2A key \u7684\u65B9\u6CD5\u3002</p><p><code>headMap()</code> \u83B7\u53D6\u7684\u662F\u5230\u6307\u5B9A key \u4E4B\u524D\u7684 key\uFF1B<code>tailMap()</code> \u83B7\u53D6\u7684\u662F\u6307\u5B9A key \u4E4B\u540E\u7684 key\uFF08\u5305\u62EC\u6307\u5B9A key\uFF09\u3002</p><p>\u6765\u770B\u4E00\u4E0B\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>5
1
[1, 2]
[3, 4, 5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_04\u3001\u5982\u4F55\u9009\u62E9-map" tabindex="-1"><a class="header-anchor" href="#_04\u3001\u5982\u4F55\u9009\u62E9-map" aria-hidden="true">#</a> 04\u3001\u5982\u4F55\u9009\u62E9 Map</h2>`,54),h=n("\u5728\u5B66\u4E60 TreeMap \u4E4B\u524D\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u5B66\u4E60\u4E86 "),_={href:"https://tobebetterjavaer.com/collection/hashmap.html",target:"_blank",rel:"noopener noreferrer"},x=n("HashMap"),T=n(" \u548C "),y={href:"https://tobebetterjavaer.com/collection/linkedhashmap.html",target:"_blank",rel:"noopener noreferrer"},q=n("LinkedHashMap"),M=n(" \uFF0C\u90A3\u5982\u4F55\u4ECE\u5B83\u4EEC\u4E09\u4E2A\u4E2D\u95F4\u9009\u62E9\u5462\uFF1F"),k=e("p",null,"HashMap\u3001LinkedHashMap\u3001TreeMap \u90FD\u5B9E\u73B0\u4E86 Map \u63A5\u53E3\uFF0C\u5E76\u63D0\u4F9B\u4E86\u51E0\u4E4E\u76F8\u540C\u7684\u529F\u80FD\uFF08\u589E\u5220\u6539\u67E5\uFF09\u3002\u5B83\u4EEC\u4E4B\u95F4\u6700\u5927\u7684\u533A\u522B\u5C31\u5728\u4E8E\u5143\u7D20\u7684\u987A\u5E8F\uFF1A",-1),f=e("p",null,"HashMap \u5B8C\u5168\u4E0D\u4FDD\u8BC1\u5143\u7D20\u7684\u987A\u5E8F\uFF0C\u6DFB\u52A0\u4E86\u65B0\u7684\u5143\u7D20\uFF0C\u4E4B\u524D\u7684\u987A\u5E8F\u53EF\u80FD\u5B8C\u5168\u9006\u8F6C\u3002",-1),S=e("p",null,"LinkedHashMap \u9ED8\u8BA4\u4F1A\u4FDD\u6301\u5143\u7D20\u7684\u63D2\u5165\u987A\u5E8F\u3002",-1),I=e("p",null,[n("TreeMap \u9ED8\u8BA4\u4F1A\u4FDD\u6301 key \u7684\u81EA\u7136\u987A\u5E8F\uFF08\u6839\u636E "),e("code",null,"compareTo()"),n(" \u65B9\u6CD5\uFF09\u3002")],-1),j=e("p",null,"\u6765\u4E2A\u8868\u683C\u5427\uFF0C\u4E00\u76EE\u4E86\u7136\u3002",-1),K=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/collection/treemap-f94219fb-b6ef-4192-8174-4759498f857f.jpg",alt:""})],-1),L=e("hr",null,null,-1),H=n("\u6700\u8FD1\u6574\u7406\u4E86\u4E00\u4EFD\u725B\u903C\u7684\u5B66\u4E60\u8D44\u6599\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8EJava\u57FA\u7840\u90E8\u5206\uFF08JVM\u3001Java\u96C6\u5408\u6846\u67B6\u3001\u591A\u7EBF\u7A0B\uFF09\uFF0C\u8FD8\u56CA\u62EC\u4E86 "),V=e("strong",null,"\u6570\u636E\u5E93\u3001\u8BA1\u7B97\u673A\u7F51\u7EDC\u3001\u7B97\u6CD5\u4E0E\u6570\u636E\u7ED3\u6784\u3001\u8BBE\u8BA1\u6A21\u5F0F\u3001\u6846\u67B6\u7C7BSpring\u3001Netty\u3001\u5FAE\u670D\u52A1\uFF08Dubbo\uFF0C\u6D88\u606F\u961F\u5217\uFF09 \u7F51\u5173",-1),C=n(" \u7B49\u7B49\u7B49\u7B49\u2026\u2026\u8BE6\u60C5\u6233\uFF1A"),R={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},N=n("\u53EF\u4EE5\u8BF4\u662F2022\u5E74\u5168\u7F51\u6700\u5168\u7684\u5B66\u4E60\u548C\u627E\u5DE5\u4F5C\u7684PDF\u8D44\u6E90\u4E86"),E=e("p",null,[n("\u5173\u6CE8\u4E8C\u54E5\u7684\u539F\u521B\u516C\u4F17\u53F7 "),e("strong",null,"\u6C89\u9ED8\u738B\u4E8C"),n("\uFF0C\u56DE\u590D"),e("strong",null,"111"),n(" \u5373\u53EF\u514D\u8D39\u9886\u53D6\u3002")],-1),w=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:""})],-1);function B(F,J){const t=r("ExternalLinkIcon");return s(),l("div",null,[c,p,e("p",null,[u,e("a",v,[m,i(t)]),b]),g,e("p",null,[h,e("a",_,[x,i(t)]),T,e("a",y,[q,i(t)]),M]),k,f,S,I,j,K,L,e("p",null,[H,V,C,e("a",R,[N,i(t)])]),E,w])}var A=a(o,[["render",B],["__file","treemap.html.vue"]]);export{A as default};
