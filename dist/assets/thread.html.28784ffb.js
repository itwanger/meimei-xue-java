import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{r as s,o as i,c as l,a as e,b as o,e as r,d as t}from"./app.22292d3d.js";const h={},c=r('<p>\u4F17\u6240\u5468\u77E5\uFF0CJava \u5E76\u53D1\u662F Java \u7A0B\u5E8F\u5458\u5FC5\u987B\u61C2\u4F46\u53C8\u5F88\u96BE\u61C2\u7684\u4E00\u5757\u77E5\u8BC6\u70B9\u3002\u4E00\u822C\u6765\u8BF4\uFF0C\u5F88\u5C11\u6709\u4EBA\u6562\u8BF4\u81EA\u5DF1\u7CBE\u901A Java \u5E76\u53D1\u7684\uFF0C\u4E00\u662F\u5BB9\u6613\u88AB\u9762\u8BD5\u5B98\u540A\u6253\uFF0C\u4E8C\u662F\u5E76\u53D1\u7F16\u7A0B\u6D89\u53CA\u5230\u64CD\u4F5C\u7CFB\u7EDF\u3001\u5185\u5B58\u3001CPU \u7B49\u8BA1\u7B97\u673A\u4E13\u4E1A\u6BD4\u8F83\u6838\u5FC3\u7684\u5185\u5BB9\uFF0C\u6BD4\u8F83\u8003\u9A8C\u4E00\u4E2A\u7A0B\u5E8F\u5458\u7684\u5185\u529F\u3002</p><p>\u4ECA\u5929\u8FD9\u7BC7\u6587\u7AE0\u5C31\u6765\u7ED9\u5927\u5BB6\u76D8\u70B9\u4E00\u4E0B Java \u5E76\u53D1\u5230\u5E95\u8BE5\u5982\u4F55\u4ECE\u5165\u95E8\u5230\u7CBE\u901A\uFF0C\u8BF7\u53CA\u65F6\u7528\u9E21\u6BDB\u63B8\u5B50\u628A\u6536\u85CF\u5939\u91CC\u7684\u7070\u6E05\u7406\u4E00\u4E0B\u3002\u5728\u9605\u8BFB\u8FC7\u7A0B\u4E2D\uFF0C\u5982\u679C\u6709\u6240\u5E2E\u52A9\uFF0C\u9EBB\u70E6\u70B9\u8D5E/\u6536\u85CF\u548C\u8F6C\u53D1\uFF0C\u7B97\u662F\u5BF9\u6211\u7801\u5B57\u7684\u8FD9\u4EFD\u575A\u6301\u7684\u4EBF\u70B9\u70B9\u9F13\u52B1\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java-thread-1.gif" alt=""></p><h2 id="\u4E00\u3001\u4E3A\u4EC0\u4E48\u8981\u5B66-java-\u5E76\u53D1" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u4E3A\u4EC0\u4E48\u8981\u5B66-java-\u5E76\u53D1" aria-hidden="true">#</a> \u4E00\u3001\u4E3A\u4EC0\u4E48\u8981\u5B66 Java \u5E76\u53D1\uFF1F</h2><p>\u6709\u53E5\u8BDD\u4E0D\u77E5\u9053\u5F53\u8BB2\u4E0D\u5F53\u8BB2\uFF0C\u5148\u8BB2\u4E86\u518D\u8BF4\uFF0C\u5C31\u662F\u201C\u5982\u679C\u4F60\u53EA\u60F3 CURD\uFF0C\u90A3\u4E48 Java \u5E76\u53D1\u4E0D\u5B66\u4E5F\u7F62\uFF01\u201D\u4F46\u5176\u5B9E\u5462\uFF0C\u5927\u5BB6\u90FD\u5DF2\u7ECF\u88AB\u6559\u80B2\u7684\u5F88\u6709\u6DB5\u517B\u4E86\uFF0C\u5DE5\u4F5C\u4E2D\u62E7\u4E0D\u62E7\u87BA\u4E1D\u4E0D\u91CD\u8981\uFF0C\u91CD\u8981\u7684\u662F\u9762\u8BD5\u4E00\u5B9A\u8981\u4F1A\u9020\u706B\u7BAD\uFF0C\u4E0D\u7136\u9762\u8BD5\u7684\u673A\u4F1A\u90FD\u5F88\u96BE\u635E\u5F97\u5230\u3002</p><p>\u90A3\u4F5C\u4E3A Java \u4F53\u7CFB\u4E2D\u975E\u5E38\u91CD\u8981\u7684\u4E00\u73AF\uFF0CJava \u5E76\u53D1\u81EA\u7136\u662F\u5FC5\u987B\u8981\u638C\u63E1\u7684\uFF0C\u6700\u8D77\u7801\u4E5F\u5F97\u4F1A\u8D77\u4E2A\u591A\u7EBF\u7A0B\u5427\uFF1F\u54C8\u54C8\u54C8\u3002\u9AD8\u7EA7\u70B9\u7684\uFF0C\u50CF\u5E73\u5E38\u5F00\u53D1\u4E2D\u7528\u5230\u7684 Tomcat \u670D\u52A1\u5668\u3001\u6D88\u606F\u4E2D\u95F4\u4EF6\u3001RPC \u6846\u67B6\u7B49\u7B49\uFF0C\u5B83\u4EEC\u7684\u5E95\u5C42\u90FD\u6D89\u53CA\u5230\u4E86\u5E76\u53D1\u7F16\u7A0B\u3002</p><p>\u5F53\u7136\u4E86\uFF0CJava \u5E76\u53D1\u6D89\u53CA\u5230\u4E1C\u897F\u5B9E\u5728\u662F\u4E0D\u5C11\uFF0C\u5305\u62EC\u64CD\u4F5C\u7CFB\u7EDF\u7684\u77E5\u8BC6\uFF0CJava \u865A\u62DF\u673A\u7684\u4E00\u4E9B\u77E5\u8BC6\uFF0CJava \u7EBF\u7A0B\u6A21\u578B\u7684\u77E5\u8BC6\uFF0C\u591A\u7EBF\u7A0B\u76F8\u5173\u7684\u5173\u952E\u5B57\uFF0C\u6BD4\u5982\u8BF4 synchronized\u3001volatile \u7B49\uFF0C\u8FD8\u6709\u9501\u7684\u77E5\u8BC6\u3001JDK \u63D0\u4F9B\u7684\u5DE5\u5177\u7C7B\u7B49\u7B49\uFF0C\u5B66\u8D77\u6765\u8FD8\u662F\u975E\u5E38\u5BB9\u6613\u4EE4\u4EBA\u5934\u5927\u7684\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java-thread-2.png" alt=""></p><p>\u56E0\u6B64\uFF0C\u6211\u4EEC\u9700\u8981\u4E00\u4E9B\u9AD8\u6548\u7684\u5B66\u4E60\u8DEF\u7EBF\u56FE\uFF0C\u4EE5\u53CA\u4E00\u4E9B\u4F18\u8D28\u7684\u5B66\u4E60\u8D44\u6E90\uFF0C\u4ECE\u800C\u51CF\u5C11\u6211\u4EEC\u5B66\u4E60Java \u5E76\u53D1\u7F16\u7A0B\u6240\u6295\u5165\u7684\u65F6\u95F4\u548C\u7CBE\u529B\u3002</p><h2 id="\u4E8C\u3001java-\u5E76\u53D1\u5B66\u4E60\u8DEF\u7EBF\u56FE" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001java-\u5E76\u53D1\u5B66\u4E60\u8DEF\u7EBF\u56FE" aria-hidden="true">#</a> \u4E8C\u3001Java \u5E76\u53D1\u5B66\u4E60\u8DEF\u7EBF\u56FE</h2><p>\u8FD9\u662F\u6211\u6700\u8FD1\u6574\u7406\u7684\u4E00\u5F20\u5173\u4E8E Java \u5E76\u53D1\u7F16\u7A0B\u7684\u601D\u7EF4\u5BFC\u56FE\uFF0C\u5927\u7684\u65B9\u5411\u53EF\u4EE5\u5206\u4E3A\u4E09\u4E2A\u90E8\u5206\uFF1A\u7EBF\u7A0B\u57FA\u7840\u3001\u7406\u8BBA\u57FA\u7840\u3001\u5DE5\u5177\u7C7B JUC\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java-thread-map.png" alt=""></p><p>\u7EBF\u7A0B\u57FA\u7840\u90E8\u5206\u5305\u62EC\uFF1A</p><ul><li>\u7EBF\u7A0B\u7684\u521B\u5EFA\u65B9\u5F0F</li><li>\u7EBF\u7A0B\u7684\u72B6\u6001\u5207\u6362</li><li>\u7EBF\u7A0B\u7684\u57FA\u672C\u64CD\u4F5C</li><li>\u7EBF\u7A0B\u7EC4\u548C\u7EBF\u7A0B\u4F18\u5148\u7EA7</li></ul><p>\u7406\u8BBA\u57FA\u7840\u5305\u62EC\uFF1A</p><ul><li>\u8FDB\u7A0B\u548C\u7EBF\u7A0B\u7684\u533A\u522B</li><li>\u591A\u7EBF\u7A0B\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898\uFF0C\u53C8\u5E26\u6765\u4E86\u4EC0\u4E48\u95EE\u9898\uFF1F</li><li>\u5982\u4F55\u89E3\u51B3\u5E76\u53D1\u95EE\u9898\uFF1F\u5305\u62EC Java \u5185\u5B58\u6A21\u578B\uFF0C\u4EE5\u53CA\u4E24\u4E2A\u5E38\u89C1\u7684\u5173\u952E\u5B57 volatile \u548C synchronized</li></ul><p>\u5DE5\u5177\u7C7B JUC \u5305\u62EC\uFF1A</p><ul><li>\u9501 Lock \u7CFB\u7684 AQS\u3001ReentrantLock\u3001ReentrantReadWriteLock\u3001Condition\u3001LockSupport</li><li>\u5E76\u53D1\u5BB9\u5668\u7CFB\u7684 ConcurrentHashMap\u3001ConcurrentLinkedQueue\u3001CopyOnWriteArrayList\u3001ThreadLocal\u3001BlockingQueue</li><li>\u7EBF\u7A0B\u6C60\u7CFB\u7684 ThreadPoolExecutor\u3001ScheduledThreadPoolExecutor</li><li>\u539F\u5B50\u7CFB\u7684 AtomicInteger\u3001AtomicIntegerArray\u3001AtomicReference \u7B49\u7B49</li><li>\u901A\u4FE1\u5DE5\u5177\u7CFB\u7684\u5012\u8BA1\u65F6\u5668 CountDownLatch\u3001\u5FAA\u73AF\u6805\u680F CyclicBarrier\u3001\u8D44\u6E90\u8BBF\u95EE\u63A7\u5236 Semaphore\u3001\u6570\u636E\u4EA4\u6362 Exchanger\u3001\u79FB\u76F8\u5668Phaser</li><li>Fork/Join\u6846\u67B6</li></ul><p>\u6700\u540E\u518D\u6765\u4E2A\u7ECF\u5178\u7684\u751F\u4EA7\u8005\u6D88\u8D39\u8005\u6A21\u5F0F\u8FDB\u884C\u5B9E\u8DF5\uFF0C\u6574\u4E2A Java \u5E76\u53D1\u4F53\u7CFB\u5C31\u5B66\u5F97\u975E\u5E38\u624E\u5B9E\u4E86\uFF01</p><h2 id="\u4E09\u3001\u786C\u6838-java-\u5E76\u53D1\u5B66\u4E60\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u786C\u6838-java-\u5E76\u53D1\u5B66\u4E60\u8D44\u6599" aria-hidden="true">#</a> \u4E09\u3001\u786C\u6838 Java \u5E76\u53D1\u5B66\u4E60\u8D44\u6599</h2><h3 id="_1-java-\u7A0B\u5E8F\u5458\u8FDB\u9636\u4E4B\u8DEF" tabindex="-1"><a class="header-anchor" href="#_1-java-\u7A0B\u5E8F\u5458\u8FDB\u9636\u4E4B\u8DEF" aria-hidden="true">#</a> <strong>1\uFF09Java \u7A0B\u5E8F\u5458\u8FDB\u9636\u4E4B\u8DEF</strong></h3><p>\u5B66 Java\uFF0C\u5F53\u7136\u8981\u627E Java \u7A0B\u5E8F\u5458\u8FDB\u9636\u4E4B\u8DEF\uFF0C\u7F51\u5740\u6211\u8D34\u4E0B\u9762\u4E86\u54C8\uFF1A</p>',22),d={href:"https://tobebetterjavaer.com/home.html#java%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"},_=t("https://tobebetterjavaer.com/home.html#java\u5E76\u53D1\u7F16\u7A0B"),p=e("p",null,"\u8FDB\u53BB\u76F4\u63A5\u627E Java \u6838\u5FC3\u91CC\u9762\u7684 Java \u5E76\u53D1\u7F16\u7A0B\u5C31\u5BF9\u4E86\u3002\u6211\u6309\u7167\u524D\u9762\u7684\u601D\u7EF4\u5BFC\u56FE\u6574\u7406\u4E86 27 \u7BC7\u6587\u7AE0\uFF0C\u5168\u90E8\u90FD\u662F\u786C\u6838\u7EA7\u522B\u7684\uFF0C\u8DDF\u7740\u5B66\u5C31\u5BF9\u4E86\u3002",-1),u=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java-thread-map-1.png",alt:""})],-1),b=e("h3",{id:"_2-\u89C6\u9891",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-\u89C6\u9891","aria-hidden":"true"},"#"),t(),e("strong",null,"2\uFF09\u89C6\u9891")],-1),v=e("p",null,"\u61C2\u7684\u90FD\u61C2\uFF0C\u770B\u89C6\u9891\u5230 B \u7AD9\u3002\u9ED1\u9A6C\u7684\u300AJava\u5E76\u53D1\u7F16\u7A0B\u300B\u8BC4\u4EF7\u8FD8\u4E0D\u9519\uFF0C300 \u591A\u4E2A\u5C0F\u8282\uFF0C\u6211\u89C9\u5F97\u8BB2\u7684\u6BD4\u8F83\u597D\u7684\u6709\u4E09\u90E8\u5206\uFF1Asynchronized\u4F18\u5316\u539F\u7406\u3001AQS\u548C\u7EBF\u7A0B\u6C60\u3002",-1),g=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java-thread-4.png",alt:""})],-1),m=t("\u89C6\u9891\u5730\u5740\uFF1A"),J={href:"https://www.bilibili.com/video/BV16J411h7Rd",target:"_blank",rel:"noopener noreferrer"},j=t("https://www.bilibili.com/video/BV16J411h7Rd"),f=e("h3",{id:"_3-\u4E66\u7C4D",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-\u4E66\u7C4D","aria-hidden":"true"},"#"),t(),e("strong",null,"3\uFF09\u4E66\u7C4D")],-1),x=t("\u7EB8\u8D28\u4E66\u53EA\u63A8\u8350\u4E00\u672C\u300A"),k={href:"https://book.douban.com/subject/10484692/",target:"_blank",rel:"noopener noreferrer"},C=t("Java \u5E76\u53D1\u7F16\u7A0B\u5B9E\u6218"),w=t("\u300B\uFF0C\u8C46\u74E3\u8BC4\u5206 9.0\u3002\u4E0D\u8FC7\u8FD9\u672C\u4E66\u786E\u5B9E\u6709\u70B9\u8001\u4E86\uFF0C\u57FA\u672C\u4E0A\u662F\u6309\u7167 Java 6 \u6765\u8BB2\u89E3\u7684\uFF0C\u5E0C\u671B\u51FA\u7248\u793E\u80FD\u65E9\u70B9\u51FA 2.0 \u7248\u3002"),B=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java-thread-5.png",alt:""})],-1),L=e("p",null,"\u300AJava \u5E76\u53D1\u7F16\u7A0B\u5B9E\u6218\u300B\u8FD9\u672C\u4E66\u4ECE\u603B\u4F53\u4E0A\u6765\u770B\uFF0C\u5206\u4E24\u6761\u4E3B\u7EBF\uFF1A",-1),S=e("ul",null,[e("li",null,"\u4ECB\u7ECD Java \u5E76\u53D1\u5305\u7684\u91CD\u8981\u7EC4\u4EF6\u548C\u539F\u7406"),e("li",null,"\u5982\u4F55\u5229\u7528\u8FD9\u4E9B\u7EC4\u4EF6\u6765\u4FDD\u8BC1\u7EBF\u7A0B\u5B89\u5168")],-1),A=e("p",null,"\u5230\u5E95\u8BE5\u5982\u4F55\u83B7\u5F97\u7EBF\u7A0B\u5B89\u5168\u5462\uFF1F\u80CC\u4F1A\u5E76\u7406\u89E3\u4E0B\u9762\u8FD9\u6BB5\u8BDD\uFF1A",-1),R=e("blockquote",null,[e("p",null,"Writing thread-safe code is, at its core, about managing access to state, and in particular to shared, mutable state.")],-1),q=t("\u5982\u679C\u53D1\u73B0\u4E0D\u662F\u5F88\u597D\u61C2\uFF0C\u60F3\u4ECE\u56FD\u5185\u4F5C\u8005\u4E0B\u624B\u7684\u8BDD\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u4E00\u4E0B\u300A"),y={href:"https://book.douban.com/subject/26591326/",target:"_blank",rel:"noopener noreferrer"},P=t("Java\u5E76\u53D1\u7F16\u7A0B\u7684\u827A\u672F"),E=t("\u300B\u548C\u300A"),U={href:"https://book.douban.com/subject/35634953/",target:"_blank",rel:"noopener noreferrer"},z=t("\u56FE\u89E3Java\u5E76\u53D1\u7F16\u7A0B"),D=t("\u300B\u8FD9\u4E24\u672C\u4E66\uFF0C\u867D\u7136\u8C46\u74E3\u4E0A\u8BC4\u5206\u4E00\u822C\uFF0C\u4F46\u5BF9\u4E8E\u6784\u5EFA Java \u5E76\u53D1\u7684\u77E5\u8BC6\u4F53\u7CFB\u8FD8\u662F\u6709\u5F88\u5927\u5E2E\u52A9\u7684\u3002"),H=e("p",null,"\u4E4B\u540E\uFF0C\u518D\u53BB\u5543\u300AJava \u5E76\u53D1\u7F16\u7A0B\u5B9E\u6218\u300B\u5C31\u4F1A\u53D1\u73B0\u6CA1\u6709\u4EE5\u524D\u90A3\u4E48\u8D39\u52B2\u4E86\uFF0C\u8FD9\u672C\u4E66\u4E4B\u6240\u4EE5\u88AB\u8A89\u4E3A Java \u5E76\u53D1\u7F16\u7A0B\u7684\u5723\u7ECF\uFF0C\u786E\u5B9E\u53EF\u4EE5\u770B\u5F97\u51FA\u4F5C\u8005\u5728\u5E76\u53D1\u7F16\u7A0B\u65B9\u9762\u6709\u7740\u4E30\u5BCC\u7684\u7ECF\u9A8C\u3002",-1),N=e("h3",{id:"_4-\u5F00\u6E90\u7535\u5B50\u4E66",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-\u5F00\u6E90\u7535\u5B50\u4E66","aria-hidden":"true"},"#"),t(),e("strong",null,"4\uFF09\u5F00\u6E90\u7535\u5B50\u4E66")],-1),T=t("\u63A8\u8350 RedSpider\u793E\u533A\u7684"),V={href:"http://concurrent.redspider.group/RedSpider.html",target:"_blank",rel:"noopener noreferrer"},W=t("\u6DF1\u5165\u6D45\u51FA Java \u591A\u7EBF\u7A0B"),F=t("\uFF0C\u6BD4Java \u5E76\u53D1\u7F16\u7A0B\u5B9E\u6218\u66F4\u901A\u4FD7\u6613\u61C2\u4E00\u4E9B\uFF0C\u56E0\u4E3A\u91CC\u9762\u7A7F\u63D2\u4E86\u5F88\u591A\u7CBE\u7F8E\u7684\u624B\u7ED8\u56FE\u3002"),Q=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java-thread-6.png",alt:""})],-1),G=t("GitHub\u5730\u5740\uFF1A"),I={href:"https://github.com/RedSpider1/concurrent",target:"_blank",rel:"noopener noreferrer"},K=t("https://github.com/RedSpider1/concurrent"),M=t("\u8003\u8651\u5230\u6709\u4E9B\u5C0F\u4F19\u4F34\u53EF\u80FD\u9700\u8981 "),O={href:"https://mp.weixin.qq.com/s/pxKrjw_5NTdZfHOKCkwn8w",target:"_blank",rel:"noopener noreferrer"},Z=t("PDF \u7248\u672C"),X=t("\uFF0C\u6211\u82B1\u4E86\u4E00\u5468\u7684\u65F6\u95F4\u6574\u7406\u4E86\u4E00\u4EFD\uFF0C\u9700\u8981\u7684\u5C0F\u4F19\u4F34\u8BF7\u626B\u63CF\u4E0B\u65B9\u7684\u4E8C\u7EF4\u7801\u5173\u6CE8\u4F5C\u8005\u7684\u539F\u521B\u516C\u4F17\u53F7\u300C"),Y=e("strong",null,"\u6C89\u9ED8\u738B\u4E8C",-1),$=t("\u300D\u56DE\u590D\u5173\u952E\u5B57\u300C"),ee=e("strong",null,"\u5E76\u53D1",-1),te=t("\u300D\u5C31\u53EF\u4EE5\u62C9\u53D6\u5230\u4E86\u3002"),ae=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"\u626B\u7801\u5173\u6CE8\u540E\u56DE\u590D\u300C\u5E76\u53D1\u300D\u5173\u952E\u5B57"})],-1),oe=e("p",null,"\u518D\u63A8\u8350\u4E00\u4EFD GitHub \u4E0A\u661F\u6807 3.6k+ \u7684 Java \u5E76\u53D1\u77E5\u8BC6\u70B9\u603B\u7ED3\uFF1A",-1),re={href:"https://github.com/CL0610/Java-concurrency",target:"_blank",rel:"noopener noreferrer"},ne=t("https://github.com/CL0610/Java-concurrency"),se=e("p",null,"\u4ED3\u5E93\u91CC\u6709\u4E00\u53E5\u8BDD\u6211\u975E\u5E38\u559C\u6B22\uFF0C\u4E5F\u5206\u4EAB\u7ED9\u5404\u4F4D\u5C0F\u4F19\u4F34\uFF1A",-1),ie=e("blockquote",null,[e("p",null,"\u52AA\u529B\u7684\u610F\u4E49\uFF0C\u5C31\u662F\uFF0C\u5728\u4EE5\u540E\u7684\u65E5\u5B50\u91CC\uFF0C\u653E\u773C\u671B\u53BB\u5168\u662F\u81EA\u5DF1\u559C\u6B22\u7684\u4EBA\u548C\u4E8B\uFF01")],-1),le=e("h3",{id:"_5-\u4ED8\u8D39\u4E13\u680F",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5-\u4ED8\u8D39\u4E13\u680F","aria-hidden":"true"},"#"),t(),e("strong",null,"5\uFF09\u4ED8\u8D39\u4E13\u680F")],-1),he=t("\u738B\u5B9D\u4EE4\u8001\u5E08\u5728\u6781\u5BA2\u65F6\u95F4\u4E0A\u5F00\u4E86\u4E00\u95E8\u300AJava \u5E76\u53D1\u7F16\u7A0B\u5B9E\u6218\u300B\u7684\u4ED8\u8D39\u4E13\u680F\uFF0C\u8D28\u91CF\u8FD8\u662F\u633A\u9AD8\u7684\uFF0C\u559C\u6B22\u7684\u5C0F\u4F19\u4F34\u53EF\u4EE5\u6233"),ce={href:"http://gk.link/a/11cBH",target:"_blank",rel:"noopener noreferrer"},de=t("\u94FE\u63A5"),_e=t("\u53BB\u8D2D\u4E70\u3002"),pe=e("h2",{id:"\u56DB\u3001\u4F18\u8D28\u516B\u80A1\u6587",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u56DB\u3001\u4F18\u8D28\u516B\u80A1\u6587","aria-hidden":"true"},"#"),t(" \u56DB\u3001\u4F18\u8D28\u516B\u80A1\u6587")],-1),ue=t("\u8FD9\u91CC\u7ED9\u5927\u5BB6\u63A8\u8350\u4E24\u4EFD Java \u5E76\u53D1\u7F16\u7A0B\u65B9\u9762\u7684\u516B\u80A1\u6587\uFF0C\u4E00\u4EFD\u6765\u81EA"),be={href:"https://mp.weixin.qq.com/s/1jhBZrAb7bnvkgN1TgAUpw",target:"_blank",rel:"noopener noreferrer"},ve=t("\u4E09\u5206\u6076"),ge=t("\uFF0C\u4E00\u4EFD\u6765\u81EA\u5C0F\u725B\uFF0C\u5148\u622A\u56FE\u7ED9\u5927\u5BB6\u770B\u4E00\u4E0B Java \u5E76\u53D1\u65B9\u9762\u90FD\u6709\u54EA\u4E9B\u9AD8\u9891\u7684\u9762\u8BD5\u9898\u3002"),me=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java-thread-7.png",alt:""})],-1),Je=e("p",null,"\u4E3A\u4E86\u65B9\u4FBF\u5927\u5BB6\u7684\u9605\u8BFB\u548C\u80CC\u8BF5\uFF0C\u6211\u5DF2\u7ECF\u5C06\u5176\u6574\u7406\u5230\u4E86\u4E8C\u54E5\u7684\u5C0F\u7834\u7AD9\u300AJava \u7A0B\u5E8F\u5458\u8FDB\u9636\u4E4B\u8DEF\u300B\u4E0A\uFF0C\u9762\u6E23\u9006\u88AD Java \u5E76\u53D1\u7BC7\uFF1A",-1),je={href:"https://tobebetterjavaer.com/sidebar/sanfene/javathread.html",target:"_blank",rel:"noopener noreferrer"},fe=t("https://tobebetterjavaer.com/sidebar/sanfene/javathread.html"),xe=e("p",null,"Java \u5E76\u53D1\u7F16\u7A0B\u516B\u80A1\u6587\uFF08\u80CC\u8BF5\u7248\uFF09\uFF1A",-1),ke={href:"https://tobebetterjavaer.com/baguwen/java-thread.html",target:"_blank",rel:"noopener noreferrer"},Ce=t("https://tobebetterjavaer.com/baguwen/java-thread.html"),we=r('<p>\u8FD9\u4E24\u4EFD\u516B\u80A1\u6587\u7684\u8D28\u91CF\u90FD\u975E\u5E38\u9AD8\uFF0C\u6765\u770B\u4E00\u4E0BAQS\u4E86\u89E3\u591A\u5C11\u5C0F\u8282\u4E0B\u7684\u5185\u5BB9\uFF0C\u56FE\u6587\u5E76\u8302\uFF0C\u975E\u5E38\u5BB9\u6613\u6D88\u5316\u548C\u5438\u6536\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java-thread-8.png" alt=""></p><p>\u8BDA\u5B9E\u70B9\u8BF4\uFF0C\u5982\u679C\u80FD\u628A\u8FD9\u4E24\u4EFD\u516B\u80A1\u6587\u80CC\u4F1A\u7684\u8BDD\uFF0C\u7B80\u5386\u4E0A\u5C31\u771F\u7684\u6562\u5199\u201C\u7CBE\u901A\u201DJava \u5E76\u53D1\u4E86\u3002</p><h2 id="\u4E94\u3001java-\u5E76\u53D1\u5B66\u4E60\u5FC3\u5F97" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001java-\u5E76\u53D1\u5B66\u4E60\u5FC3\u5F97" aria-hidden="true">#</a> \u4E94\u3001Java \u5E76\u53D1\u5B66\u4E60\u5FC3\u5F97</h2><p>Java \u63D0\u4F9B\u7684\u5E76\u53D1\u7EC4\u4EF6\uFF0C\u5927\u81F4\u53EF\u4EE5\u5206\u4E3A\u4E24\u7C7B\uFF1A</p><ul><li>\u4ECE\u9884\u9632\u9636\u6BB5\u4E0B\u624B\uFF0C\u9632\u6B62\u9519\u8BEF\u53D1\u751F\uFF0C\u6BD4\u5982\u8BF4 synchronized \u5173\u952E\u5B57</li><li>\u4E00\u65E6\u53D1\u751F\u9519\u8BEF\u80FD\u53CA\u65F6\u91CD\u8BD5\uFF0C\u6BD4\u5982\u8BF4 CAS</li></ul><p>\u5BF9\u4E8E\u7EBF\u7A0B\u6570\u91CF\u6BD4\u8F83\u591A\u7684\u5E76\u53D1\u573A\u666F\uFF0C\u91C7\u7528\u9884\u9632\u7684\u63AA\u65BD\u4F1A\u6BD4\u8F83\u5408\u7406\uFF0C\u8FD9\u6837\u5927\u90E8\u5206\u7EBF\u7A0B\u5C31\u4E0D\u4F1A\u56E0\u4E3A\u5C0F\u6982\u7387\u65F6\u95F4\u7684 CAS \u91CD\u8BD5\u6D6A\u8D39\u6389\u5927\u91CF\u7684 CPU \u5468\u671F\uFF1B\u5728\u7EBF\u7A0B\u6570\u91CF\u5C0F\u7684\u65F6\u5019\uFF0CCAS \u7684\u610F\u4E49\u5C31\u6BD4\u8F83\u5927\uFF0C\u56E0\u4E3A\u9884\u9632\u63AA\u65BD\u5E26\u6765\u7684\u7EBF\u7A0B\u5207\u6362\u8981\u6BD4 CAS \u7B49\u5F85\u7684\u5F00\u9500\u66F4\u5927\u3002</p><p>\u60F3\u8981\u5B66\u597D Java \u5E76\u53D1\u7F16\u7A0B\uFF0C\u5C31\u5FC5\u987B\u5F97\u5BF9\u4E0B\u56FE\u4E2D\u63D0\u5230\u7684\u57FA\u7840\u6982\u5FF5\u8FDB\u884C\u5145\u5206\u7684\u7406\u89E3\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java-thread-9.jpg" alt=""></p><p>\u5728\u6211\u770B\u6765\uFF0C\u5E76\u53D1\u7F16\u7A0B\u4E3B\u8981\u662F\u7528\u6765\u89E3\u51B3\u8FD9\u4E24\u4E2A\u75DB\u70B9\u7684\uFF1A</p><ul><li>\u591A\u4E2A\u7EBF\u7A0B\u5BF9\u540C\u4E00\u53D8\u91CF\u9020\u6210\u7684\u4E0D\u4E00\u81F4\u95EE\u9898\uFF1B</li><li>\u4E3A\u63D0\u9AD8\u6027\u80FD\uFF0C\u8BA1\u7B97\u673A\u7684\u5F88\u591A\u6267\u884C\u5355\u5143\u90FD\u914D\u5907\u4E86\u7F13\u5B58\uFF0C\u90A3\u52BF\u5FC5\u4F1A\u5F71\u54CD\u5E76\u53D1\u7F16\u7A0B\u7684\u6570\u636E\u4E00\u81F4\u6027\u3002</li></ul><p>\u9700\u8981\u63D0\u9192\u4E00\u70B9\u7684\u662F\uFF0C\u591A\u7EBF\u7A0B\u5E76\u53D1\u867D\u7136\u662F\u7528\u6765\u89E3\u51B3\u6027\u80FD\u95EE\u9898\u7684\uFF0C\u4F46\u5E76\u4E0D\u610F\u5473\u7740\u6240\u6709\u60C5\u51B5\u4E0B\u90FD\u9700\u8981\u5F00\u542F\u591A\u7EBF\u7A0B\uFF0C\u6709\u65F6\u5019\u53CD\u800C\u4F1A\u9002\u5F97\u5176\u53CD\uFF0C\u90A3\u5982\u679C\u4E0D\u662F\u7279\u522B\u8981\u6C42\uFF0C\u5C3D\u91CF\u4E0D\u8981\u8FC7\u65E9\u5F00\u542F\u591A\u7EBF\u7A0B\u3002</p><p>\u5E76\u53D1\u7F16\u7A0B\u662F Java \u4F53\u7CFB\u5F53\u4E2D\u76F8\u5BF9\u96BE\u638C\u63E1\u7684\u4E00\u5757\u77E5\u8BC6\u70B9\uFF0C\u6BD4\u8F83\u8003\u9A8C\u4E00\u540D\u7A0B\u5E8F\u5458\u7684\u5185\u529F\uFF0C\u5176\u5B9E\u5E76\u53D1\u7F16\u7A0B\u6700\u65E9\u7684\u5E94\u7528\u9886\u57DF\u5C31\u662F\u64CD\u4F5C\u7CFB\u7EDF\u7684\u5B9E\u73B0\u3002</p><p>\u5982\u679C\u4F60\u5DF2\u7ECF\u6709\u4E00\u5B9A\u7684\u7F16\u7A0B\u7ECF\u9A8C\uFF0C\u5EFA\u8BAE\u5148\u5B66\u4E00\u4E0B\u300A\u8BA1\u7B97\u673A\u7EC4\u6210\u539F\u7406\u300B\uFF0C\u5BF9\u64CD\u4F5C\u7CFB\u7EDF\u3001\u5185\u5B58\u3001CPU \u5148\u8FDB\u884C\u4E00\u4E9B\u5927\u81F4\u7684\u4E86\u89E3\uFF0C\u7136\u540E\u518D\u6765\u5B66\u4E60 Java \u5E76\u53D1\u7F16\u7A0B\uFF0C\u53EF\u80FD\u5C31\u4F1A\u611F\u89C9\u8212\u670D\u591A\u4E86\uFF01</p><p>\u7ED3\u5408\u6211\u591A\u5E74\u7684\u5DE5\u4F5C\u7ECF\u9A8C\u6765\u770B\uFF0C\u5E76\u53D1\u7F16\u7A0B\u53EF\u4EE5\u62BD\u8C61\u6210<strong>\u4E09\u4E2A\u6838\u5FC3\u95EE\u9898\uFF1A\u5206\u5DE5\u3001\u540C\u6B65\u548C\u4E92\u65A5</strong>\u3002</p><p>1\uFF09\u5206\u5DE5</p><p>\u5206\u5DE5\u6307\u7684\u662F\u5982\u4F55\u9AD8\u6548\u5730\u62C6\u89E3\u4EFB\u52A1\u5E76\u5206\u914D\u7ED9\u7EBF\u7A0B\uFF0C\u50CF\u5E76\u53D1\u7F16\u7A0B\u9886\u57DF\u7684\u4E00\u4E9B\u8BBE\u8BA1\u6A21\u5F0F\uFF0C\u6BD4\u5982\u8BF4\u751F\u4EA7\u8005\u4E0E\u6D88\u8D39\u8005\u5C31\u662F\u7528\u6765\u8FDB\u884C\u5206\u5DE5\u7684\u3002</p><p>2\uFF09\u540C\u6B65</p><p>\u540C\u6B65\u6307\u7684\u662F\u7EBF\u7A0B\u4E4B\u95F4\u5982\u4F55\u534F\u4F5C\uFF0C\u4E00\u4E2A\u7EBF\u7A0B\u6267\u884C\u5B8C\u4E86\u4E00\u4E2A\u4EFB\u52A1\uFF0C\u8981\u901A\u77E5\u53E6\u5916\u4E00\u4E2A\u7EBF\u7A0B\u5F00\u5DE5\u3002\u8FD8\u62FF\u751F\u4EA7\u8005-\u6D88\u8D39\u8005\u6A21\u578B\u6765\u8BF4\u5427\uFF0C\u5F53\u961F\u5217\u6EE1\u7684\u65F6\u5019\uFF0C\u751F\u4EA7\u8005\u7EBF\u7A0B\u7B49\u5F85\uFF0C\u5F53\u961F\u5217\u4E0D\u6EE1\u7684\u65F6\u5019\uFF0C\u751F\u4EA7\u8005\u7EBF\u7A0B\u9700\u8981\u88AB\u5524\u9192\u91CD\u65B0\u6267\u884C\uFF1B\u5F53\u961F\u5217\u7A7A\u7684\u65F6\u5019\uFF0C\u6D88\u8D39\u8005\u7EBF\u7A0B\u5F00\u59CB\u7B49\u5F85\uFF0C\u4E0D\u7A7A\u7684\u65F6\u5019\uFF0C\u6D88\u8D39\u8005\u7EBF\u7A0B\u88AB\u91CD\u65B0\u5524\u9192\u3002</p><p>3\uFF09\u4E92\u65A5</p><p>\u4E92\u65A5\u6307\u7684\u662F\u4FDD\u8BC1\u540C\u4E00\u65F6\u523B\u53EA\u6709\u4E00\u4E2A\u7EBF\u7A0B\u8BBF\u95EE\u5171\u4EAB\u8D44\u6E90\uFF0C\u662F\u89E3\u51B3\u7EBF\u7A0B\u5B89\u5168\u95EE\u9898\u7684\u6740\u624B\u950F\u3002</p><p>\u5F53\u591A\u4E2A\u7EBF\u7A0B\u540C\u65F6\u8BBF\u95EE\u4E00\u4E2A\u5171\u4EAB\u53D8\u91CF\u7684\u65F6\u5019\uFF0C\u5F88\u5BB9\u6613\u51FA\u73B0\u201C\u7EBF\u7A0B\u5B89\u5168\u201D\u95EE\u9898\uFF0C\u56E0\u4E3A\u7ED3\u679C\u53EF\u80FD\u662F\u4E0D\u786E\u5B9A\u7684\u2014\u2014\u5BFC\u81F4\u51FA\u73B0\u8FD9\u4E2A\u95EE\u9898\u7684\u6839\u6E90\u5C31\u662F\u53EF\u89C1\u6027\u3001\u6709\u5E8F\u6027\u548C\u539F\u5B50\u6027\u2014\u2014\u4E3A\u4E86\u89E3\u51B3\u5B83\u4EEC\uFF0CJava \u5F15\u5165\u4E86\u5185\u5B58\u6A21\u578B\u7684\u6982\u5FF5\uFF0C\u53EF\u4EE5\u5728\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u7F13\u89E3\u201C\u7EBF\u7A0B\u5B89\u5168\u201D\u7684\u95EE\u9898\uFF0C\u4F46\u8981\u60F3\u5B8C\u5168\u89E3\u51B3\u201C\u7EBF\u7A0B\u5B89\u5168\u201D\u95EE\u9898\uFF0C\u8FD8\u5F97\u9760\u4E92\u65A5\u3002</p><p>\u4E92\u65A5\u7684\u6838\u5FC3\u6280\u672F\u5C31\u662F\u9501\uFF0C\u6BD4\u5982\u8BF4 synchronized\uFF0C\u8FD8\u6709\u5404\u79CD Lock\u3002</p><p>\u9501\u53EF\u4EE5\u89E3\u51B3\u7EBF\u7A0B\u5B89\u5168\u7684\u95EE\u9898\uFF0C\u4F46\u540C\u65F6\u4E5F\u5C31\u610F\u5473\u7740\u7A0B\u5E8F\u7684\u6027\u80FD\u8981\u53D7\u5230\u5F71\u54CD\u3002</p><p>\u56E0\u6B64\uFF0CJava \u63D0\u4F9B\u4E86\u9488\u5BF9\u4E0D\u540C\u573A\u666F\u4E0B\u7684\u9501\uFF0C\u6BD4\u5982\u8BF4\u8BFB\u5199\u9501 ReadWriteLock\uFF0C\u53EF\u4EE5\u89E3\u51B3\u591A\u7EBF\u7A0B\u540C\u65F6\u8BFB\uFF0C\u4F46\u53EA\u6709\u4E00\u4E2A\u7EBF\u7A0B\u80FD\u5199\u7684\u95EE\u9898\uFF1B\u4F46 ReadWriteLock \u4E5F\u6709\u81EA\u5DF1\u7684\u95EE\u9898\uFF0C\u5C31\u662F\u5982\u679C\u6709\u7EBF\u7A0B\u6B63\u5728\u8BFB\uFF0C\u5199\u7EBF\u7A0B\u9700\u8981\u7B49\u5F85\u5EA6\u7EBF\u7A0B\u91CA\u653E\u9501\u540E\u624D\u80FD\u83B7\u5F97\u5199\u9501\uFF0C\u4E5F\u5C31\u662F\u8BFB\u7684\u8FC7\u7A0B\u4E2D\u4E0D\u5141\u8BB8\u5199\uFF0C\u5C5E\u4E8E\u4E00\u79CD\u60B2\u89C2\u7684\u8BFB\u9501\u3002</p><p>\u4E3A\u4E86\u8FDB\u4E00\u6B65\u63D0\u5347\u5E76\u53D1\u6267\u884C\u7684\u6548\u7387\uFF0CJava 8 \u5F15\u5165\u4E86\u4E00\u4E2A\u65B0\u7684\u8BFB\u5199\u9501 StampedLock\uFF0C\u4E0EReadWriteLock \u76F8\u6BD4\uFF0CStampedLock\u7684\u4F18\u52BF\u5728\u4E8E\u8BFB\u7684\u8FC7\u7A0B\u4E2D\u4E5F\u5141\u8BB8\u83B7\u53D6\u5199\u9501\u540E\u5199\u5165\uFF0C\u4F46\u5E26\u6765\u7684\u95EE\u9898\u5C31\u662F\u53EF\u80FD\u8BFB\u7684\u6570\u636E\u4E0D\u4E00\u81F4\uFF0C\u9700\u8981\u4E00\u70B9\u989D\u5916\u7684\u4EE3\u7801\u6765\u5224\u65AD\u8BFB\u7684\u8FC7\u7A0B\u4E2D\u662F\u5426\u6709\u5199\u5165\uFF0C\u672C\u8D28\u4E0A\u662F\u4E00\u79CD\u4E50\u89C2\u7684\u9501\u3002</p><p>\u4E50\u89C2\u9501\u7684\u610F\u601D\u5C31\u662F\u4F30\u8BA1\u8BFB\u7684\u8FC7\u7A0B\u4E2D\u5927\u6982\u7387\u4E0D\u4F1A\u6709\u5199\u5165\uFF0C\u800C\u60B2\u89C2\u9501\u5219\u662F\u8BFB\u7684\u8FC7\u7A0B\u4E2D\u62D2\u7EDD\u6709\u5199\u5165\uFF0C\u4E24\u8005\u7684\u533A\u522B\u5C31\u5728\u4E8E\u6027\u80FD\u4E0A\u4F1A\u6709\u5DEE\u5F02\uFF0C\u4E50\u89C2\u9501\u9700\u8981\u9488\u5BF9\u5C0F\u6982\u7387\u4E8B\u4EF6\u8FDB\u884C\u591A\u4E00\u6B65\u7684\u68C0\u6D4B\uFF0C\u4F46\u6027\u80FD\u4E5F\u4F1A\u6709\u6240\u63D0\u5347\uFF1B\u60B2\u89C2\u9501\u66F4\u80FD\u4FDD\u8BC1\u201C\u7EBF\u7A0B\u5B89\u5168\u6027\u201D\u3002</p><p>\u542C\u6211\u8FD9\u4E48\u4E00\u8BF4\uFF0C\u662F\u4E0D\u662F\u4E00\u4E0B\u5B50\u5C31\u6E05\u6670\u591A\u4E86\uFF01</p><p>\u53E6\u5916\uFF0C\u9700\u8981 Java \u5B66\u4E60\u8D44\u6599\u7684\u8BDD\uFF0C\u53EF\u4EE5\u76F4\u63A5\u6233\u6211\u6574\u7406\u7684\u8FD9\u4E2A GitHub/\u7801\u4E91\u4ED3\u5E93\u2014\u2014\u{1F4DA}Java\u7A0B\u5E8F\u5458\u5FC5\u8BFB\u4E66\u5355\u6574\u7406\uFF0C\u9644\u4E0B\u8F7D\u5730\u5740\uFF0C\u52A9\u529B\u6BCF\u4E00\u4E2AJava\u7A0B\u5E8F\u5458\u6784\u5EFA\u5C5E\u4E8E\u81EA\u5DF1\u7684\u77E5\u8BC6\u4F53\u7CFB\u3002\u5305\u62EC\u4F46\u4E0D\u9650\u4E8EJava\u3001\u8BBE\u8BA1\u6A21\u5F0F\u3001\u8BA1\u7B97\u673A\u7F51\u7EDC\u3001\u64CD\u4F5C\u7CFB\u7EDF\u3001\u6570\u636E\u5E93\u3001\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5\u3001\u5927\u6570\u636E\u3001\u67B6\u6784\u3001\u9762\u8BD5\u7B49\u7B49\u3002</p>',29),Be=t("GitHub \u5730\u5740\uFF1A"),Le={href:"https://github.com/itwanger/JavaBooks",target:"_blank",rel:"noopener noreferrer"},Se=t("https://github.com/itwanger/JavaBooks"),Ae=t("\u7801\u4E91\u5730\u5740\uFF1A"),Re={href:"https://gitee.com/itwanger/JavaBooks",target:"_blank",rel:"noopener noreferrer"},qe=t("https://gitee.com/itwanger/JavaBooks"),ye=e("p",null,"\u7ED9\u5927\u5BB6\u622A\u56FE\u5C55\u793A\u4E00\u4E0B\u91CC\u9762\u90FD\u6709\u54EA\u4E9B\u4F18\u8D28\u7684 PDF\uFF1A",-1),Pe=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java/java-books.jpg",alt:""})],-1),Ee=e("p",null,[e("strong",null,"Java \u5E76\u53D1\u7F16\u7A0B\u867D\u7136\u96BE\u5B66\uFF0C\u4F1A\u6D89\u53CA\u5230\u64CD\u4F5C\u7CFB\u7EDF\u3001CPU\u3001\u5185\u5B58\u7B49\u504F\u57FA\u7840\u65B9\u9762\u7684\u5185\u5BB9\uFF0C\u4F46\u5982\u679C\u4F60\u80FD\u575A\u6301\u5B66\u4E0B\u53BB\uFF0C\u5185\u529F\u81EA\u7136\u800C\u7136\u5C31\u63D0\u5347\u4E86\u4E00\u5927\u622A"),t("\u3002")],-1),Ue=e("hr",null,null,-1),ze=t("\u6700\u8FD1\u6574\u7406\u4E86\u4E00\u4EFD\u725B\u903C\u7684\u5B66\u4E60\u8D44\u6599\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8EJava\u57FA\u7840\u90E8\u5206\uFF08JVM\u3001Java\u96C6\u5408\u6846\u67B6\u3001\u591A\u7EBF\u7A0B\uFF09\uFF0C\u8FD8\u56CA\u62EC\u4E86 "),De=e("strong",null,"\u6570\u636E\u5E93\u3001\u8BA1\u7B97\u673A\u7F51\u7EDC\u3001\u7B97\u6CD5\u4E0E\u6570\u636E\u7ED3\u6784\u3001\u8BBE\u8BA1\u6A21\u5F0F\u3001\u6846\u67B6\u7C7BSpring\u3001Netty\u3001\u5FAE\u670D\u52A1\uFF08Dubbo\uFF0C\u6D88\u606F\u961F\u5217\uFF09 \u7F51\u5173",-1),He=t(" \u7B49\u7B49\u7B49\u7B49\u2026\u2026\u8BE6\u60C5\u6233\uFF1A"),Ne={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},Te=t("\u53EF\u4EE5\u8BF4\u662F2022\u5E74\u5168\u7F51\u6700\u5168\u7684\u5B66\u4E60\u548C\u627E\u5DE5\u4F5C\u7684PDF\u8D44\u6E90\u4E86"),Ve=e("p",null,[t("\u5173\u6CE8\u4E8C\u54E5\u7684\u539F\u521B\u516C\u4F17\u53F7 "),e("strong",null,"\u6C89\u9ED8\u738B\u4E8C"),t("\uFF0C\u56DE\u590D"),e("strong",null,"111"),t(" \u5373\u53EF\u514D\u8D39\u9886\u53D6\u3002")],-1),We=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:""})],-1);function Fe(Qe,Ge){const a=s("ExternalLinkIcon");return i(),l("div",null,[c,e("blockquote",null,[e("p",null,[e("a",d,[_,o(a)])])]),p,u,b,v,g,e("blockquote",null,[e("p",null,[m,e("a",J,[j,o(a)])])]),f,e("p",null,[x,e("a",k,[C,o(a)]),w]),B,L,S,A,R,e("p",null,[q,e("a",y,[P,o(a)]),E,e("a",U,[z,o(a)]),D]),H,N,e("p",null,[T,e("a",V,[W,o(a)]),F]),Q,e("blockquote",null,[e("p",null,[G,e("a",I,[K,o(a)])])]),e("p",null,[M,e("a",O,[Z,o(a)]),X,Y,$,ee,te]),ae,oe,e("blockquote",null,[e("p",null,[e("a",re,[ne,o(a)])])]),se,ie,le,e("p",null,[he,e("a",ce,[de,o(a)]),_e]),pe,e("p",null,[ue,e("a",be,[ve,o(a)]),ge]),me,Je,e("blockquote",null,[e("p",null,[e("a",je,[fe,o(a)])])]),xe,e("blockquote",null,[e("p",null,[e("a",ke,[Ce,o(a)])])]),we,e("ul",null,[e("li",null,[Be,e("a",Le,[Se,o(a)])]),e("li",null,[Ae,e("a",Re,[qe,o(a)])])]),ye,Pe,Ee,Ue,e("p",null,[ze,De,He,e("a",Ne,[Te,o(a)])]),Ve,We])}var Me=n(h,[["render",Fe],["__file","thread.html.vue"]]);export{Me as default};
