"use strict";(self.webpackChunkdocs_s_1_nscripts_com=self.webpackChunkdocs_s_1_nscripts_com||[]).push([[7166],{6056:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=n(5893),i=n(3905);const r={sidebar_position:3,title:"Setup Notification System in Framework",sidebar_label:"Framework Implementation"},s=void 0,c={id:"notify/framework",title:"Setup Notification System in Framework",description:"S1nScripts Logo",source:"@site/docs/notify/framework.md",sourceDirName:"notify",slug:"/notify/framework",permalink:"/docs/notify/framework",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/notify/framework.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Setup Notification System in Framework",sidebar_label:"Framework Implementation"},sidebar:"docs",previous:{title:"How To Use",permalink:"/docs/notify/how-to-use"},next:{title:"Config",permalink:"/docs/notify/config"}},a={},l=[];function p(e){const t={code:"code",h3:"h3",img:"img",p:"p",pre:"pre",...(0,i.ah)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://forum.cfx.re/uploads/default/original/4X/7/1/8/718c6f28a9b5ab0dc33bf79288bcb418e7684326.jpeg",alt:"S1nScripts Logo"})}),"\n",(0,o.jsx)(t.h3,{id:"",children:(0,o.jsx)("img",{src:"https://esx.s3.fr-par.scw.cloud/blanc-800x800.png",width:"50"})}),"\n",(0,o.jsxs)(t.p,{children:["To integrate the notification system into your ESX framework, you need to modify the ",(0,o.jsx)(t.code,{children:"ESX.ShowNotification"})," function located in ",(0,o.jsx)(t.code,{children:"es_extended/client/functions.lua"})," on line 73."]}),"\n",(0,o.jsx)(t.p,{children:"Here is the original code:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lua",children:'function ESX.ShowNotification(message, type, length)\n    if GetResourceState("esx_notify") ~= "missing" then\n        return exports["esx_notify"]:Notify(type, length, message)\n    end\n\n    print("[^1ERROR^7] ^5ESX Notify^7 is Missing!")\nend\n'})}),"\n",(0,o.jsx)(t.p,{children:"Replace it with the following code:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lua",children:'function ESX.ShowNotification(title, message, type, length, position)\n    TriggerEvent("s1n_notify:notify", {\n        type = type,\n        title = title,\n        message = message,\n        duration = length,\n        theme = "colorful",\n        position = position\n    })\nend\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Note that you will need to modify any calls to the ",(0,o.jsx)(t.code,{children:"ESX.ShowNotification"})," function in your scripts to match the new parameters. Here's an example:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lua",children:'ESX.ShowNotification("Title", "Hello everyone!", "success", 5000, "top-right")\n'})}),"\n",(0,o.jsx)(t.h3,{id:"-1",children:(0,o.jsx)("img",{src:"https://www.gitbook.com/cdn-cgi/image/width=256,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F1645475769-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FBTxg66Z0GQkOQS46Nzn3%252Flogo%252F2VUg8eCqX2nybWhxImyU%252FLogotype%2520-%2520Display%2520Picture%2520-%2520Stylized%2520-%2520Red.png%3Falt%3Dmedia%26token%3Df2dea7ab-8c44-41a5-ad45-6b0fd8f6248e",width:"90"})}),"\n",(0,o.jsxs)(t.p,{children:["To integrate the notification system into your Qbcore framework, you need to modify the ",(0,o.jsx)(t.code,{children:"QBCore.Functions.Notify"})," function located in ",(0,o.jsx)(t.code,{children:"qb-core/client/functions.lua"})," on line 88."]}),"\n",(0,o.jsx)(t.p,{children:"Here is the original code:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lua",children:"function QBCore.Functions.Notify(text, texttype, length)\n    if type(text) == \"table\" then\n        local ttext = text.text or 'Placeholder'\n        local caption = text.caption or 'Placeholder'\n        texttype = texttype or 'primary'\n        length = length or 5000\n        SendNUIMessage({\n            action = 'notify',\n            type = texttype,\n            length = length,\n            text = ttext,\n            caption = caption\n        })\n    else\n        texttype = texttype or 'primary'\n        length = length or 5000\n        SendNUIMessage({\n            action = 'notify',\n            type = texttype,\n            length = length,\n            text = text\n        })\n    end\nend\n"})}),"\n",(0,o.jsx)(t.p,{children:"Replace it with the following code:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lua",children:'function QBCore.Functions.Notify(title, message, type, length, position)\n    TriggerEvent("s1n_notify:notify", { \n        type = type, \n        title = title, \n        message = message, \n        duration = length, \n        theme = "colorful", \n        position = position\n    })\nend\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Note that you will need to modify any calls to the ",(0,o.jsx)(t.code,{children:"QBCore.Functions.Notify"})," function in your scripts to match the new parameters. Here's an example:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lua",children:'QBCore.Functions.Notify("Title", "Hello everyone !", "success", 5000, "top-right")\n'})})]})}function d(e={}){const{wrapper:t}={...(0,i.ah)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},3905:(e,t,n)=>{n.d(t,{ah:()=>l});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=o.createContext({}),l=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),f=l(n),u=i,h=f["".concat(a,".").concat(u)]||f[u]||p[u]||r;return n?o.createElement(h,s(s({ref:t},d),{},{components:n})):o.createElement(h,s({ref:t},d))}));d.displayName="MDXCreateElement"}}]);