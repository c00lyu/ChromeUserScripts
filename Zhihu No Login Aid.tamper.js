// ==UserScript==
// @name       Zhihu No Login Aid
// @version    0.1
// @description  Zhihu上看被折叠的答案时，展开三次会提示登陆，本脚本去除这个限制
// @copyright  2014+, c00lyu
// @include http://zhihu.com/*
// @include http://*.zhihu.com/*
// ==/UserScript==

//知乎限制的方法是localStorage，隔段时间清空即可
setInterval(function(){localStorage.clear();}, 1000);