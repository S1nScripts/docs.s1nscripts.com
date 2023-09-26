"use strict";(self.webpackChunkdocs_s_1_nscripts_com=self.webpackChunkdocs_s_1_nscripts_com||[]).push([[8171],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8640:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:1,title:"Common issues",sidebar_label:"Common issues"},i=void 0,s={unversionedId:"garage/common-issues",id:"garage/common-issues",title:"Common issues",description:"S1nScripts Logo",source:"@site/docs/garage/common-issues.md",sourceDirName:"garage",slug:"/garage/common-issues",permalink:"/docs/garage/common-issues",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/garage/common-issues.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Common issues",sidebar_label:"Common issues"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/garage/install"},next:{title:"Installation",permalink:"/docs/impound/install"}},l={},c=[{value:"Common issues",id:"common-issues",level:2},{value:"Errors",id:"errors",level:3},{value:"pmc-instance not found",id:"pmc-instance-not-found",level:4},{value:"Error regarding : attempt to index a nil value (global &#39;Functions&#39;)",id:"error-regarding--attempt-to-index-a-nil-value-global-functions",level:4}],u={toc:c},m="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://forum.cfx.re/uploads/default/original/4X/6/c/7/6c73a9d63db911aa966b2c9085f4c55a76268db3.jpeg",alt:"S1nScripts Logo"})),(0,a.kt)("h1",{id:"garage-system"},"Garage System"),(0,a.kt)("h2",{id:"common-issues"},"Common issues"),(0,a.kt)("h3",{id:"errors"},"Errors"),(0,a.kt)("h4",{id:"pmc-instance-not-found"},"pmc-instance not found"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://media.discordapp.net/attachments/1153041009006100550/1153238199464894484/image.png?ex=6513e044&is=65128ec4&hm=dc0ea9326ec93f13d27db8d5598da618e10f2b380ac11a61fd0da6c42f841d61&=&width=998&height=182",alt:"image"})),(0,a.kt)("p",null,"This error is caused by one of the following reasons:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pmc-instance")," is not found in your resources folder"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"pmc-instance")," resource is not exactly named ",(0,a.kt)("inlineCode",{parentName:"li"},"pmc-instance")),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"pmc-instance")," resource doesn't contain a ",(0,a.kt)("inlineCode",{parentName:"li"},"fxmanifest.lua")," file")),(0,a.kt)("h4",{id:"error-regarding--attempt-to-index-a-nil-value-global-functions"},"Error regarding : attempt to index a nil value (global 'Functions')"),(0,a.kt)("p",null,"This error is caused by one of the following reasons:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"pmc-instance not found (see above #pmc-instance-not-found)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"menuv")," is not found in your resources folder"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"menuv")," resource is not exactly named ",(0,a.kt)("inlineCode",{parentName:"li"},"menuv")),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"menuv")," resource doesn't contain a ",(0,a.kt)("inlineCode",{parentName:"li"},"fxmanifest.lua")," file"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"menuv")," resource is not started before ",(0,a.kt)("inlineCode",{parentName:"li"},"s1n_garages")," in your ",(0,a.kt)("inlineCode",{parentName:"li"},"server.cfg")," file")))}p.isMDXComponent=!0}}]);