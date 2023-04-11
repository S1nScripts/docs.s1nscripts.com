"use strict";(self.webpackChunkdocs_s_1_nscripts_com=self.webpackChunkdocs_s_1_nscripts_com||[]).push([[166],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||r;return n?o.createElement(d,a(a({ref:t},p),{},{components:n})):o.createElement(d,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(7462),i=(n(7294),n(3905));const r={sidebar_position:3,title:"Setup Notification System in Framework",sidebar_label:"Framework Implementation"},a=void 0,l={unversionedId:"notify/framework",id:"notify/framework",title:"Setup Notification System in Framework",description:"S1nScripts Logo",source:"@site/docs/notify/framework.md",sourceDirName:"notify",slug:"/notify/framework",permalink:"/docs.s1nscripts.com/docs/notify/framework",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/notify/framework.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Setup Notification System in Framework",sidebar_label:"Framework Implementation"},sidebar:"docs",previous:{title:"How To Use",permalink:"/docs.s1nscripts.com/docs/notify/how-to-use"}},c={},s=[{value:'ESX <img src="https://esx.s3.fr-par.scw.cloud/blanc-800x800.png" width="30"/>',id:"esx-",level:3},{value:'Qbcore <img src="https://www.gitbook.com/cdn-cgi/image/width=256,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F1645475769-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FBTxg66Z0GQkOQS46Nzn3%252Flogo%252F2VUg8eCqX2nybWhxImyU%252FLogotype%2520-%2520Display%2520Picture%2520-%2520Stylized%2520-%2520Red.png%3Falt%3Dmedia%26token%3Df2dea7ab-8c44-41a5-ad45-6b0fd8f6248e" width="30"/>',id:"qbcore-",level:3}],p={toc:s},u="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://forum.cfx.re/uploads/default/original/4X/7/1/8/718c6f28a9b5ab0dc33bf79288bcb418e7684326.jpeg",alt:"S1nScripts Logo"})),(0,i.kt)("h3",{id:"esx-"},"ESX ",(0,i.kt)("img",{src:"https://esx.s3.fr-par.scw.cloud/blanc-800x800.png",width:"30"})),(0,i.kt)("p",null,"To integrate the notification system into your ESX framework, you need to modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"ESX.ShowNotification")," function located in ",(0,i.kt)("inlineCode",{parentName:"p"},"es_extended/client/functions.lua")," on line 73. "),(0,i.kt)("p",null,"Here is the original code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'function ESX.ShowNotification(message, type, length)\n    if GetResourceState("esx_notify") ~= "missing" then\n        return exports["esx_notify"]:Notify(type, length, message)\n    end\n\n    print("[^1ERROR^7] ^5ESX Notify^7 is Missing!")\nend\n')),(0,i.kt)("p",null,"Replace it with the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'function ESX.ShowNotification(title, message, type, length, position)\n    TriggerEvent("s1n_notify:notify", {\n        type = type,\n        title = title,\n        message = message,\n        duration = length,\n        theme = "colorful",\n        position = position\n    })\nend\n')),(0,i.kt)("p",null,"Note that you will need to modify any calls to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ESX.ShowNotification")," function in your code to match the new parameters. Here's an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'ESX.ShowNotification("Title", "Hello everyone!", "success", 5000, "top-right")\n')),(0,i.kt)("h3",{id:"qbcore-"},"Qbcore ",(0,i.kt)("img",{src:"https://www.gitbook.com/cdn-cgi/image/width=256,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F1645475769-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FBTxg66Z0GQkOQS46Nzn3%252Flogo%252F2VUg8eCqX2nybWhxImyU%252FLogotype%2520-%2520Display%2520Picture%2520-%2520Stylized%2520-%2520Red.png%3Falt%3Dmedia%26token%3Df2dea7ab-8c44-41a5-ad45-6b0fd8f6248e",width:"30"})),(0,i.kt)("p",null,"To integrate the notification system into your Qbcore framework, you need to modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"QBCore.Functions.Notify")," function located in ",(0,i.kt)("inlineCode",{parentName:"p"},"qb-core/client/functions.lua")," on line 88. "),(0,i.kt)("p",null,"Here is the original code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"function QBCore.Functions.Notify(text, texttype, length)\n    if type(text) == \"table\" then\n        local ttext = text.text or 'Placeholder'\n        local caption = text.caption or 'Placeholder'\n        texttype = texttype or 'primary'\n        length = length or 5000\n        SendNUIMessage({\n            action = 'notify',\n            type = texttype,\n            length = length,\n            text = ttext,\n            caption = caption\n        })\n    else\n        texttype = texttype or 'primary'\n        length = length or 5000\n        SendNUIMessage({\n            action = 'notify',\n            type = texttype,\n            length = length,\n            text = text\n        })\n    end\nend\n")),(0,i.kt)("p",null,"Replace it with the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'function QBCore.Functions.Notify(title, message, type, length, position)\n    TriggerEvent("s1n_notify:notify", { \n        type = type, \n        title = title, \n        message = message, \n        duration = length, \n        theme = "colorful", \n        position = position\n    })\nend\n')),(0,i.kt)("p",null,"Note that you will need to modify any calls to the ",(0,i.kt)("inlineCode",{parentName:"p"},"QBCore.Functions.Notify")," function in your code to match the new parameters. Here's an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'QBCore.Functions.Notify("Title", "Hello everyone !", "success", 5000, "top-right")\n')))}f.isMDXComponent=!0}}]);