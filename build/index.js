!function(){"use strict";var e,n={906:function(){var e=window.wp.blocks;function n(){return n=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},n.apply(this,arguments)}var r=window.wp.element,t=(window.wp.i18n,window.wp.blockEditor),o=window.wp.components;(0,e.registerBlockType)("de-witte-prins/genesis-enews-block",{edit:function({attributes:e,setAttributes:i}){return(0,r.createElement)(o.TextControl,n({},(0,t.useBlockProps)(),{value:e.name,onChange:e=>i({name:e})}))},save:function({attributes:e}){return(0,r.createElement)("div",t.useBlockProps.save(),e.name)}})}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return n[e](i,i.exports,t),i.exports}t.m=n,e=[],t.O=function(n,r,o,i){if(!r){var s=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||s>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<s&&(s=i));if(u){e.splice(l--,1);var a=o();void 0!==a&&(n=a)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={826:0,46:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,s=r[0],u=r[1],c=r[2],a=0;if(s.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(c)var l=c(t)}for(n&&n(r);a<s.length;a++)i=s[a],t.o(e,i)&&e[i]&&e[i][0](),e[s[a]]=0;return t.O(l)},r=self.webpackChunkgenesis_enews_block=self.webpackChunkgenesis_enews_block||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var o=t.O(void 0,[46],(function(){return t(906)}));o=t.O(o)}();