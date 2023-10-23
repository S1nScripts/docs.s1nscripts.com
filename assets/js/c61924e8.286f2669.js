"use strict";(self.webpackChunkdocs_s_1_nscripts_com=self.webpackChunkdocs_s_1_nscripts_com||[]).push([[9292],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>d});var o=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var s=o.createContext({}),l=function(n){var e=o.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},p=function(n){var e=l(n.components);return o.createElement(s.Provider,{value:e},n.children)},f="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,s=n.parentName,p=c(n,["components","mdxType","originalType","parentName"]),f=l(t),m=r,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||i;return t?o.createElement(d,a(a({ref:e},p),{},{components:t})):o.createElement(d,a({ref:e},p))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=n,c[f]="string"==typeof n?n:r,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7227:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=t(7462),r=(t(7294),t(3905));const i={sidebar_position:1,title:"Config",sidebar_label:"Config"},a="Notify",c={unversionedId:"notify/config",id:"notify/config",title:"Config",description:"Config file",source:"@site/docs/notify/config.md",sourceDirName:"notify",slug:"/notify/config",permalink:"/docs/notify/config",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/notify/config.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Config",sidebar_label:"Config"},sidebar:"docs",previous:{title:"Framework Implementation",permalink:"/docs/notify/framework"},next:{title:"Installation",permalink:"/docs/jobcenter/install"}},s={},l=[{value:"Config file",id:"config-file",level:2}],p={toc:l},f="wrapper";function u(n){let{components:e,...t}=n;return(0,r.kt)(f,(0,o.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"notify"},"Notify"),(0,r.kt)("h2",{id:"config-file"},"Config file"),(0,r.kt)("p",null,"Standalone:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'--[[\n    Need help with the script ? Go into the support Discord https://discord.gg/aKF3DX8yPx\n    A verification that you bought the script will be necessary.\n\n    IMPORTANT:\n\n    Default themes: white, colorful\n    List of available position: top, top-right, top-left, bottom, bottom-right, bottom-left\n\n    USAGE:\n\n    With exports["s1n_notify"]:Notify(type, title, message, duration, theme, position)\n    Example:\n    exports["s1n_notify"]:Notify("success", "the title", "message", 5000, "colorful", "top-right")\n\n    With TriggerEvent("s1n_notify:notify", object)\n    Example:\n    TriggerEvent("s1n_notify:notify",\n        {\n            type = "success",\n            title = "title",\n            message = "message",\n            duration = 5000,\n            theme = "colorful",\n            position = "top-right"\n        }\n    )\n]]\n\nConfig = {\n    notificationTypes = {\n        -- Here you can setup new type of notifications.\n        info = {\n            icon = "MdInfo",\n            color = "#4666D7",\n            sound = {\n                enable = true,\n                source = "popup.mp3",\n                volume = 0.75\n            }\n        },\n        warning = {\n            icon = "MdWarning",\n            color = "#E7A526",\n            sound = {\n                enable = true,\n                source = "popup.mp3",\n                volume = 0.5\n            }\n        },\n        success = {\n            icon = "MdCheckCircle",\n            color = "#49AF72",\n            sound = {\n                enable = true,\n                source = "pop.wav",\n                volume = 0.2\n            }\n        },\n        error = {\n            icon = "MdError",\n            color = "#D74646",\n            sound = {\n                enable = true,\n                source = "pop.wav",\n                volume = 1\n            }\n        },\n        message = {\n            icon = "MdMessage",\n            color = "#676767",\n            sound = {\n                enable = true,\n                source = "pop.wav",\n                volume = 1\n            }\n        },\n        --[[\n        TO CREATE A CUSTOM TYPE:\n\n        nameOfTheNotificationType = {\n            icon = "NameOfTheIcon", -- Available icons : https://react-icons.github.io/react-icons/icons?name=md\n            color = "#676767", -- Color in HEX, RGB(A), HSLA..\n            sound = {\n                enable = true, -- Enable or disable sound effect\n                source = "pop.wav", -- Name of the file\n                volume = 1 -- Volume between 0 and 1\n            }\n        },\n        ]]\n    },\n\n    notifyIntervals = {\n        --[[\n        Example for notifications with interval:\n\n        {\n            interval = 10000,\n            notify = {\n                type = "info",\n                title = "Tip",\n                message = "You can press I to open your inventory",\n                duration = 4000,\n                theme = "colorful",\n                position = "top-right"\n            }\n        },\n\n        TO PUT BELOW THE DOUBLE ]\n        ]]\n\n    },\n}\n')))}u.isMDXComponent=!0}}]);