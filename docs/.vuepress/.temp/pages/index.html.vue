<template><div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>
<ol>
<li>安装组件包</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> anov-ui <span class="token parameter variable">-S</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>使用组件</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> AnovUI <span class="token keyword">from</span> <span class="token string">"anov-ui"</span><span class="token punctuation">;</span>

<span class="token comment">//全局引入</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>AnovUI<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//按需引入</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  Table<span class="token punctuation">,</span>
  SingleLine<span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"anov-ui"</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Table<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>SingleLine<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>请确保您的开发环境 Node.js 版本 &gt;= 10</p>
</div>
</div></template>


