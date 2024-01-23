"use strict";(self.webpackChunkdocs_s_1_nscripts_com=self.webpackChunkdocs_s_1_nscripts_com||[]).push([[6312],{1976:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=t(5893),r=t(3905);const i={sidebar_position:1,title:"Installation",sidebar_label:"Installation"},s="Notification System Installation",c={id:"notify/install",title:"Installation",description:"S1nScripts Logo",source:"@site/docs/notify/install.md",sourceDirName:"notify",slug:"/notify/install",permalink:"/docs/notify/install",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/notify/install.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Installation",sidebar_label:"Installation"},sidebar:"docs",previous:{title:"Config",permalink:"/docs/impound/config"},next:{title:"How To Use",permalink:"/docs/notify/how-to-use"}},a={},l=[];function u(n){const e={code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.ah)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{src:"https://forum.cfx.re/uploads/default/original/4X/7/1/8/718c6f28a9b5ab0dc33bf79288bcb418e7684326.jpeg",alt:"S1nScripts Logo"})}),"\n",(0,o.jsx)(e.h1,{id:"notification-system-installation",children:"Notification System Installation"}),"\n",(0,o.jsx)(e.p,{children:"Follow these steps to install and configure the notification system:"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["Drag the ",(0,o.jsx)(e.code,{children:"s1n_notifysystem"})," folder into your ",(0,o.jsx)(e.code,{children:"resources"})," directory."]}),"\n",(0,o.jsxs)(e.li,{children:["Start the notification system by adding ",(0,o.jsx)(e.code,{children:"start s1n_notifysystem"})," to your ",(0,o.jsx)(e.code,{children:"server.cfg"})," file."]}),"\n",(0,o.jsxs)(e.li,{children:["Configure the script by modifying the values in the ",(0,o.jsx)(e.code,{children:"config.lua"})," file located in the ",(0,o.jsx)(e.code,{children:"s1n_notify"})," script folder."]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["Here is an example of the ",(0,o.jsx)(e.code,{children:"config.lua"})," file:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-lua",children:'Config = {\n    notificationTypes = {\n        -- Here you can setup new type of notifications.\n        info = {\n            icon = "MdInfo",\n            color = "#4666D7",\n            sound = {\n                enable = true,\n                source = "popup.mp3",\n                volume = 0.75\n            }\n        },\n        warning = {\n            icon = "MdWarning",\n            color = "#E7A526",\n            sound = {\n                enable = true,\n                source = "popup.mp3",\n                volume = 0.5\n            }\n        },\n        success = {\n            icon = "MdCheckCircle",\n            color = "#49AF72",\n            sound = {\n                enable = true,\n                source = "pop.wav",\n                volume = 0.2\n            }\n        },\n        error = {\n            icon = "MdError",\n            color = "#D74646",\n            sound = {\n                enable = true,\n                source = "pop.wav",\n                volume = 1\n            }\n        },\n        message = {\n            icon = "MdMessage",\n            color = "#676767",\n            sound = {\n                enable = true,\n                source = "pop.wav",\n                volume = 1\n            }\n        },\n        --[[\n        TO CREATE A CUSTOM TYPE:\n\n        nameOfTheNotificationType = {\n            icon = "NameOfTheIcon", -- Available icons : https://react-icons.github.io/react-icons/icons?name=md\n            color = "#676767", -- Color in HEX, RGB(A), HSLA..\n            sound = {\n                enable = true, -- Enable or disable sound effect\n                source = "pop.wav", -- Name of the file\n                volume = 1 -- Volume between 0 and 1\n            }\n        },\n        ]]\n    },\n\n    notifyIntervals = {\n        --[[\n        Example for notifications with interval:\n\n        {\n            interval = 10000,\n            notify = {\n                type = "info",\n                title = "Tip",\n                message = "You can press I to open your inventory",\n                duration = 4000,\n                theme = "colorful",\n                position = "top-right"\n            }\n        },\n\n        TO PUT BELOW THE DOUBLE ]\n        ]]\n\n    },\n}\n'})}),"\n",(0,o.jsxs)(e.p,{children:["That's it! You should now be able to use the notification system in your FiveM server. Check the ",(0,o.jsx)("a",{href:"how-to-use",children:"How To Use"})," page to see how to use the notification system."]})]})}function p(n={}){const{wrapper:e}={...(0,r.ah)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(u,{...n})}):u(n)}},3905:(n,e,t)=>{t.d(e,{ah:()=>l});var o=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var a=o.createContext({}),l=function(n){var e=o.useContext(a),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},u={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,a=n.parentName,p=c(n,["components","mdxType","originalType","parentName"]),d=l(t),f=r,m=d["".concat(a,".").concat(f)]||d[f]||u[f]||i;return t?o.createElement(m,s(s({ref:e},p),{},{components:t})):o.createElement(m,s({ref:e},p))}));p.displayName="MDXCreateElement"}}]);