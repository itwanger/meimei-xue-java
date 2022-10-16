import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r,o as l,c as s,a as t,b as a,d as e,e as o}from"./app.22292d3d.js";const d={},c=t("h1",{id:"spring-boot\u4E3A\u4EC0\u4E48\u4E0D\u9700\u8981\u989D\u5916\u5B89\u88C5tomcat",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#spring-boot\u4E3A\u4EC0\u4E48\u4E0D\u9700\u8981\u989D\u5916\u5B89\u88C5tomcat","aria-hidden":"true"},"#"),e(" Spring Boot\u4E3A\u4EC0\u4E48\u4E0D\u9700\u8981\u989D\u5916\u5B89\u88C5Tomcat\uFF1F")],-1),g=t("p",null,"\u9996\u6B21\u63A5\u89E6 Spring Boot \u7684\u65F6\u5019\uFF0C\u7EDD\u5927\u591A\u6570\u5C0F\u4F19\u4F34\u5E94\u8BE5\u548C\u6211\u4E00\u6837\u597D\u5947\uFF1A",-1),p=t("blockquote",null,[t("p",null,"\u4E3A\u4EC0\u4E48 Spring Boot \u4E0D\u9700\u8981\u989D\u5916\u5B89\u88C5 Tomcat \u554A\uFF1F")],-1),v=t("p",null,"\u5230\u5E95\u4E3A\u4EC0\u4E48\u5462\uFF1F\u8BA9\u6211\u4EEC\u5E26\u7740\u597D\u5947\u5FC3\u5F00\u59CB\u4ECA\u5929\u7684\u65C5\u7A0B\u5427\u3002",-1),m=e("\u6253\u5F00"),b={href:"https://mp.weixin.qq.com/s/13La2GC5q4ZclEVqf6Mr9w",target:"_blank",rel:"noopener noreferrer"},u=e("\u4E0A\u4E00\u8282"),I=e("\u6211\u4EEC\u642D\u5EFA\u597D\u7684 tobebetterjavaer \u9879\u76EE\uFF0C\u627E\u5230 pom.xml \u6587\u4EF6\uFF0C\u53EF\u4EE5\u5728\u91CC\u9762\u770B\u5230\u4E00\u4E2A parent \u5C5E\u6027\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A"),f=o(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;parent&gt;
	&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
	&lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;
	&lt;version&gt;2.6.1&lt;/version&gt;
	&lt;relativePath/&gt; &lt;!-- lookup parent from repository --&gt;
&lt;/parent&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EC0\u4E48\u610F\u601D\u5462\uFF1F</p><p>\u610F\u601D\u662F\u6211\u4EEC\u5F53\u524D\u7684 Spring Boot \u9879\u76EE\u4F9D\u8D56\u4E8E spring-boot-starter-parent \u8FD9\u4E2A\u7236\u9879\u76EE\u3002\u6709\u70B9 Java \u4E2D\u7684\u7EE7\u627F\uFF08extends\uFF09\u7684\u5473\u9053\u3002</p><p>\u600E\u4E48\u67E5\u770B spring-boot-starter-parent.pom \u6587\u4EF6\u7684\u5185\u5BB9\u5462\uFF1F</p><p>\u5982\u679C\u4F60\u4E0D\u786E\u5B9A\u81EA\u5DF1\u7684 Maven \u672C\u5730\u4ED3\u5E93\u5728\u54EA\u91CC\uFF0C\u53EF\u4EE5\u5728\u7EC8\u7AEF\u6267\u884C <code>mvn help:effective-settings</code> \u547D\u4EE4\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/tomcat-01.png" alt=""></p><p>\u987A\u85E4\u6478\u74DC\uFF0C\u6839\u636E parent \u7684 groupId\u3001artifactId\u3001version \u53EF\u4EE5\u9501\u5B9A spring-boot-starter-parent.pom \u6587\u4EF6\u7684\u4F4D\u7F6E\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/tomcat-02.png" alt=""></p><p>\u4F7F\u7528\u6587\u672C\u7F16\u8F91\u5668\u6253\u5F00\u4EE5\u540E\u5927\u81F4\u53EF\u4EE5\u770B\u5230\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/tomcat-03.png" alt=""></p><ul><li>\u5B9A\u4E49\u4E86 JDK \u7684\u7248\u672C\u4E3A 1.8</li><li>\u9879\u76EE\u9ED8\u8BA4\u7684\u7F16\u7801\u65B9\u5F0F\u4E3A UTF-8</li><li>Maven \u7684\u7F16\u8BD1\u73AF\u5883</li><li>\u4EE5\u53CA\u7236\u4F9D\u8D56 spring-boot-dependencies</li></ul><p>\u7167\u846B\u82A6\u753B\u74E2\uFF0C\u6211\u4EEC\u6309\u7167\u540C\u6837\u7684\u65B9\u6CD5\u627E\u5230 spring-boot-dependencies.pom \u6587\u4EF6\u3002\u53EF\u4EE5\u770B\u5230\u8FD9\u91CC\u9762\u5B9A\u4E49\u4E86\u4E00\u7CFB\u5217\u7684\u5C5E\u6027\u548C\u4F9D\u8D56\uFF0C\u5DEE\u4E0D\u591A 2800 \u884C\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/tomcat-04.png" alt=""></p><p>\u6709\u6D88\u606F\u961F\u5217\u4F9D\u8D56\u3001commons \u5DE5\u5177\u5305\u4F9D\u8D56\u3001\u6570\u636E\u5E93\u94FE\u63A5\u4F9D\u8D56\u3001HTTP \u94FE\u63A5\u4F9D\u8D56\u3001Spring \u5BB6\u65CF\u4F9D\u8D56\u3001Web \u670D\u52A1\u5668\u4F9D\u8D56\u7B49\u7B49\u3002</p><p>\u53EF\u4EE5\u8BF4\u8FD9\u91CC\u662F Spring Boot \u9879\u76EE\u4F9D\u8D56\u7684\u7248\u672C\u7BA1\u7406\u4E2D\u5FC3\u3002</p><p>\u7248\u672C\u7BA1\u7406\u4E2D\u5FC3\u9ED8\u8BA4\u914D\u7F6E\u4E86\u9879\u76EE\u6240\u9700\u7684\u6240\u6709\u57FA\u7840\u73AF\u5883\u7684\u7248\u672C\uFF0C\u8FD9\u4E9B\u7248\u672C\u4F1A\u968F\u7740 Spring Boot \u7248\u672C\u7684\u5347\u7EA7\u800C\u4E0D\u65AD\u53D8\u5316\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5F00\u53D1\u4EBA\u5458\u4E0D\u9700\u8981\u518D\u5173\u5FC3\u8FD9\u4E9B\u7410\u788E\u4F9D\u8D56\u7684\u7248\u672C\u4E86\uFF0C\u4EA4\u7ED9\u5927\u7BA1\u5BB6 Spring Boot \u5C31\u53EF\u4EE5\u4E86\u3002</p><p>Spring Boot \u4F1A\u5E2E\u6211\u4EEC\u9009\u597D\u6700\u7A33\u5B9A\u7684\u65B0\u7248\u672C\uFF0C\u8FD9\u4F53\u73B0\u51FA\u4E86 Spring Boot \u9879\u76EE\u7684\u7075\u9B42\uFF1A\u201C<strong>\u7EA6\u5B9A\u4F18\u4E8E\u914D\u7F6E</strong>\u201D\uFF0C\u4F60\u60F3\u914D\u7F6E\u5F53\u7136\u53EF\u4EE5\uFF0C\u4F46\u6CA1\u5FC5\u8981\uFF0C\u6309\u7167\u7EA6\u5B9A\u4FD7\u6210\u7684\u6765\u5C31\u884C\u3002</p><p>\u7406\u89E3\u4E86\u8FD9\u4E00\u70B9\uFF0C\u6211\u4EEC\u518D\u6765\u7EE7\u7EED\u770B pom.xml \u6587\u4EF6\uFF0C\u91CC\u9762\u6709\u4E00\u4E2A <code>spring-boot-starter-web</code> \u4F9D\u8D56\u3002\u8FD9\u4E00\u6B21\uFF0C\u6211\u4EEC\u76F4\u63A5\u6309\u4F4F Ctrl \u952E\uFF08macOS \u662F Command \u952E\uFF09\uFF0C\u70B9\u51FB\u9F20\u6807\u5DE6\u952E\u5C31\u53EF\u4EE5\u8DF3\u8F6C\u5230 spring-boot-starter-web.pom \u7684\u6E90\u6587\u4EF6\u4E86\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/tomcat-05.png" alt=""></p><p>\u90E8\u5206\u6E90\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  &lt;dependency&gt;
      &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
      &lt;artifactId&gt;spring-boot-starter&lt;/artifactId&gt;
      &lt;version&gt;2.6.1&lt;/version&gt;
      &lt;scope&gt;compile&lt;/scope&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
      &lt;artifactId&gt;spring-boot-starter-json&lt;/artifactId&gt;
      &lt;version&gt;2.6.1&lt;/version&gt;
      &lt;scope&gt;compile&lt;/scope&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
      &lt;artifactId&gt;spring-boot-starter-tomcat&lt;/artifactId&gt;
      &lt;version&gt;2.6.1&lt;/version&gt;
      &lt;scope&gt;compile&lt;/scope&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.springframework&lt;/groupId&gt;
      &lt;artifactId&gt;spring-web&lt;/artifactId&gt;
      &lt;version&gt;5.3.13&lt;/version&gt;
      &lt;scope&gt;compile&lt;/scope&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.springframework&lt;/groupId&gt;
      &lt;artifactId&gt;spring-webmvc&lt;/artifactId&gt;
      &lt;version&gt;5.3.13&lt;/version&gt;
      &lt;scope&gt;compile&lt;/scope&gt;
    &lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>spring-web \u63D0\u4F9B\u4E86\u6838\u5FC3 HTTP \u96C6\u6210\uFF0C\u5305\u62EC\u4E00\u4E9B\u4FBF\u6377\u7684 servlet \u8FC7\u6EE4\u5668\uFF0C Spring HTTP \u8C03\u7528\uFF0C\u7528\u4E8E\u96C6\u6210\u5176\u5B83 web \u6846\u67B6\u7684\u57FA\u7840\u7ED3\u6784\u4EE5\u53CA\u6280\u672F\uFF08Hessian\uFF0CBurlap\uFF09\u3002</p><p>spring-webmvc \u662F Spring MVC \u7684\u4E00\u4E2A\u5B9E\u73B0\u3002spring-webmvc \u4F9D\u8D56\u4E8E spring-web\uFF0C\u8FD9\u6837\u5305\u542B\u5B83\u5C31\u4F1A\u95F4\u63A5\u5730\u6DFB\u52A0 spring-web\uFF0C\u4E0D\u5FC5\u663E\u793A\u6DFB\u52A0 spring-web\u3002</p><p>\u770B\u4E00\u4E0B spring-boot-starter-tomcat \u7684 pom \u6587\u4EF6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;project xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot; xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot;
    xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&gt;
  &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
  &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
  &lt;artifactId&gt;spring-boot-starter-tomcat&lt;/artifactId&gt;
  &lt;version&gt;2.6.1&lt;/version&gt;
  &lt;name&gt;spring-boot-starter-tomcat&lt;/name&gt;
  &lt;dependencies&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;jakarta.annotation&lt;/groupId&gt;
      &lt;artifactId&gt;jakarta.annotation-api&lt;/artifactId&gt;
      &lt;version&gt;1.3.5&lt;/version&gt;
      &lt;scope&gt;compile&lt;/scope&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.apache.tomcat.embed&lt;/groupId&gt;
      &lt;artifactId&gt;tomcat-embed-core&lt;/artifactId&gt;
      &lt;version&gt;9.0.55&lt;/version&gt;
      &lt;scope&gt;compile&lt;/scope&gt;
      &lt;exclusions&gt;
        &lt;exclusion&gt;
          &lt;artifactId&gt;tomcat-annotations-api&lt;/artifactId&gt;
          &lt;groupId&gt;org.apache.tomcat&lt;/groupId&gt;
        &lt;/exclusion&gt;
      &lt;/exclusions&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.apache.tomcat.embed&lt;/groupId&gt;
      &lt;artifactId&gt;tomcat-embed-el&lt;/artifactId&gt;
      &lt;version&gt;9.0.55&lt;/version&gt;
      &lt;scope&gt;compile&lt;/scope&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.apache.tomcat.embed&lt;/groupId&gt;
      &lt;artifactId&gt;tomcat-embed-websocket&lt;/artifactId&gt;
      &lt;version&gt;9.0.55&lt;/version&gt;
      &lt;scope&gt;compile&lt;/scope&gt;
      &lt;exclusions&gt;
        &lt;exclusion&gt;
          &lt;artifactId&gt;tomcat-annotations-api&lt;/artifactId&gt;
          &lt;groupId&gt;org.apache.tomcat&lt;/groupId&gt;
        &lt;/exclusion&gt;
      &lt;/exclusions&gt;
    &lt;/dependency&gt;
  &lt;/dependencies&gt;
&lt;/project&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u8FD9\u91CC\u53EF\u4EE5\u770B\u51FA\u6765SpringBoot\u9ED8\u8BA4\u7684\u542F\u52A8\u5BB9\u5668\u662FTomcat\uFF0CTomcat \u7684\u7EC4\u6210\u6838\u5FC3 jakarta.annotation\u3001tomcat-embed-core\u3001tomcat-annotations-api\u3001org.apache.tomcat.embed \u5168\u90E8\u90FD\u901A\u8FC7 Maven \u5F15\u5165\u8FC7\u6765\u4E86\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/tomcat-06.png" alt=""></p><p>core \u7684\u7248\u672C\u662F 9.0.55\uFF0CTomcat \u5B98\u7F51\u4E0A\u6700\u65B0\u7684 9.0.x \u7248\u672C\u662F 9.0.56\uFF0C\u9AD8\u4E86\u4E00\u4E2A\u7248\u672C\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/tomcat-07.png" alt=""></p><p>\u4E0D\u8FC7\u65E0\u6240\u8C13\uFF0C\u76F4\u63A5\u4E0B\u8F7D 9.0.56 \u7684 src\uFF0C\u5BF9\u6BD4\u770B\u4E00\u4E0B\uFF0C\u662F\u5426\u5927\u81F4\u76F8\u540C\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/tomcat-08.png" alt=""></p><p>\u5BF9\u6BD4\u4E4B\u4E0B\u53EF\u4EE5\u770B\u5F97\u51FA\uFF0CSpring Boot \u5F15\u5165\u7684 Tomcat \u66F4\u7CBE\u7B80\u4E00\u70B9\uFF0C\u5927\u4F53\u4E0A\u90FD\u662F\u76F8\u540C\u7684\uFF0C\u8FD9\u4E5F\u5C31\u662F<strong>\u4E3A\u4EC0\u4E48Spring Boot \u4E0D\u9700\u8981\u989D\u5916\u5B89\u88C5 Tomcat \u7684\u6839\u672C\u539F\u56E0\u4E86</strong>\u3002</p><p>Spring Boot \u7684 starter \u5DF2\u7ECF\u5E2E\u6211\u4EEC\u641E\u5B9A\u8FC7\u4E86\u3002\u8FD9\u4E5F\u662FSpring Boot \u5927\u884C\u5176\u9053\u7684\u91CD\u8981\u539F\u56E0\uFF0C\u7701\u53BB\u4E86\u5F00\u53D1\u4EBA\u5458\u914D\u7F6E\u7684\u65F6\u95F4\uFF0C\u66F4\u4E13\u6CE8\u4E8E\u4E1A\u52A1\u903B\u8F91\u7684\u5B9E\u73B0\u3001\u6027\u80FD\u7684\u4F18\u5316\uFF0C\u81F3\u4E8E\u90A3\u4E9B\u7E41\u6742\u7684\u914D\u7F6E\u561B\uFF0C\u4EA4\u7ED9 Spring Boot \u8FD9\u4E2A\u5927\u7BA1\u5BB6\u5C31\u53EF\u4EE5\u4E86\uFF0C\u4ED6\u7EA6\u5B9A\u597D\u7684\u4E1C\u897F\uFF0C\u53EA\u8981\u6CA1\u95EE\u9898\uFF0C\u4E0D\u9700\u8981\u7279\u6B8A\u5316\u5B9A\u5236\uFF0C\u7528\u5C31\u5BF9\u4E86\u3002</p>`,33);function h(x,_){const n=r("ExternalLinkIcon");return l(),s("div",null,[c,g,p,v,t("p",null,[m,t("a",b,[u,a(n)]),I]),f])}var S=i(d,[["render",h],["__file","tomcat.html.vue"]]);export{S as default};
