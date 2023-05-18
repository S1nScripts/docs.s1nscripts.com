"use strict";(self.webpackChunkdocs_s_1_nscripts_com=self.webpackChunkdocs_s_1_nscripts_com||[]).push([[312],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||i;return t?o.createElement(d,a(a({ref:n},p),{},{components:t})):o.createElement(d,a({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2149:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=t(7462),r=(t(7294),t(3905));const i={sidebar_position:1,title:"Installation",sidebar_label:"Installation"},a=void 0,s={unversionedId:"notify/install",id:"notify/install",title:"Installation",description:"S1nScripts Logo",source:"@site/docs/notify/install.md",sourceDirName:"notify",slug:"/notify/install",permalink:"/docs.s1nscripts.com/docs/notify/install",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/notify/install.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Installation",sidebar_label:"Installation"},sidebar:"docs",previous:{title:"FiveM Assets Escrow",permalink:"/docs.s1nscripts.com/docs/escrow/fivem-escrow"},next:{title:"How To Use",permalink:"/docs.s1nscripts.com/docs/notify/how-to-use"}},l={},c=[],p={toc:c},u="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://forum.cfx.re/uploads/default/original/4X/7/1/8/718c6f28a9b5ab0dc33bf79288bcb418e7684326.jpeg",alt:"S1nScripts Logo"})),(0,r.kt)("h1",{id:"notification-system-installation"},"Notification System Installation"),(0,r.kt)("p",null,"Follow these steps to install and configure the notification system:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Drag the ",(0,r.kt)("inlineCode",{parentName:"li"},"s1n_notifysystem")," folder into your ",(0,r.kt)("inlineCode",{parentName:"li"},"resources")," directory."),(0,r.kt)("li",{parentName:"ol"},"Start the notification system by adding ",(0,r.kt)("inlineCode",{parentName:"li"},"start s1n_notifysystem")," to your ",(0,r.kt)("inlineCode",{parentName:"li"},"server.cfg")," file."),(0,r.kt)("li",{parentName:"ol"},"Configure the script by modifying the values in the ",(0,r.kt)("inlineCode",{parentName:"li"},"config.lua")," file located in the ",(0,r.kt)("inlineCode",{parentName:"li"},"s1n_notify")," script folder.")),(0,r.kt)("p",null,"Here is an example of the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.lua")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'Config = {\n    notificationTypes = {\n        -- Here you can setup new type of notifications.\n        info = {\n            icon = "MdInfo",\n            color = "#4666D7",\n            sound = {\n                enable = true,\n                source = "popup.mp3",\n                volume = 0.75\n            }\n        },\n        warning = {\n            icon = "MdWarning",\n            color = "#E7A526",\n            sound = {\n                enable = true,\n                source = "popup.mp3",\n                volume = 0.5\n            }\n        },\n        success = {\n            icon = "MdCheckCircle",\n            color = "#49AF72",\n            sound = {\n                enable = true,\n                source = "pop.wav",\n                volume = 0.2\n            }\n        },\n        error = {\n            icon = "MdError",\n            color = "#D74646",\n            sound = {\n                enable = true,\n                source = "pop.wav",\n                volume = 1\n            }\n        },\n        message = {\n            icon = "MdMessage",\n            color = "#676767",\n            sound = {\n                enable = true,\n                source = "pop.wav",\n                volume = 1\n            }\n        },\n        --[[\n        TO CREATE A CUSTOM TYPE:\n\n        nameOfTheNotificationType = {\n            icon = "NameOfTheIcon", -- Available icons : https://react-icons.github.io/react-icons/icons?name=md\n            color = "#676767", -- Color in HEX, RGB(A), HSLA..\n            sound = {\n                enable = true, -- Enable or disable sound effect\n                source = "pop.wav", -- Name of the file\n                volume = 1 -- Volume between 0 and 1\n            }\n        },\n        ]]\n    },\n\n    notifyIntervals = {\n        --[[\n        Example for notifications with interval:\n\n        {\n            interval = 10000,\n            notify = {\n                type = "info",\n                title = "Tip",\n                message = "You can press I to open your inventory",\n                duration = 4000,\n                theme = "colorful",\n                position = "top-right"\n            }\n        },\n\n        TO PUT BELOW THE DOUBLE ]\n        ]]\n\n    },\n}\n')),(0,r.kt)("p",null,"That's it! You should now be able to use the notification system in your FiveM server. Check the ",(0,r.kt)("a",{href:"how-to-use"},"How To Use")," page to see how to use the notification system."))}f.isMDXComponent=!0}}]);