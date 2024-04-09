"use strict";(self.webpackChunkdocs_s_1_nscripts_com=self.webpackChunkdocs_s_1_nscripts_com||[]).push([[9292],{316:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=r(5893),t=r(1151);const i={sidebar_position:1,title:"Config",sidebar_label:"Config"},s="Notify",a={id:"notify/config",title:"Config",description:"Config file",source:"@site/docs/notify/config.md",sourceDirName:"notify",slug:"/notify/config",permalink:"/docs/notify/config",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/notify/config.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Config",sidebar_label:"Config"},sidebar:"docs",previous:{title:"Framework Implementation",permalink:"/docs/notify/framework"},next:{title:"Installation",permalink:"/docs/jobcenter/install"}},c={},l=[{value:"Config file",id:"config-file",level:2}];function f(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"notify",children:"Notify"}),"\n",(0,o.jsx)(e.h2,{id:"config-file",children:"Config file"}),"\n",(0,o.jsx)(e.p,{children:"Standalone:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-lua",children:'--[[\r\n    Need help with the script ? Go into the support discord server (link on https://docs.s1nscripts.com)\r\n    A verification that you bought the script will be necessary.\r\n\r\n    IMPORTANT:\r\n\r\n    Default themes: white, colorful\r\n    List of available position: top, top-right, top-left, bottom, bottom-right, bottom-left\r\n\r\n    If you want to add sounds, you need to put the sound file in the web/build/static/media folder. If no media/ folder, create it. (You can download notification sounds here: https://pixabay.com/sound-effects/search/notification/)\r\n\r\n    USAGE:\r\n\r\n    With exports["s1n_notify"]:Notify(type, title, message, duration, theme, position)\r\n    Example:\r\n    exports["s1n_notify"]:Notify("success", "the title", "message", 5000, "colorful", "top-right")\r\n\r\n    With TriggerEvent("s1n_notify:notify", object)\r\n    Example:\r\n    TriggerEvent("s1n_notify:notify",\r\n        {\r\n            type = "success",\r\n            title = "title",\r\n            message = "message",\r\n            duration = 5000,\r\n            theme = "colorful",\r\n            position = "top-right"\r\n        }\r\n    )\r\n]]\r\n\r\nConfig = {\r\n    exportNames = {\r\n        s1nLib = "s1n_lib",\r\n    },\r\n    notificationTypes = {\r\n        -- Here you can setup new type of notifications.\r\n        info = {\r\n            icon = "MdInfo",\r\n            color = "#4666D7",\r\n            sound = {\r\n                enable = false,\r\n                source = "popup.mp3",\r\n                volume = 0.75\r\n            }\r\n        },\r\n        warning = {\r\n            icon = "MdWarning",\r\n            color = "#E7A526",\r\n            sound = {\r\n                enable = false,\r\n                source = "popup.mp3",\r\n                volume = 0.5\r\n            }\r\n        },\r\n        success = {\r\n            icon = "MdCheckCircle",\r\n            color = "#49AF72",\r\n            sound = {\r\n                enable = false,\r\n                source = "pop.wav",\r\n                volume = 0.2\r\n            }\r\n        },\r\n        error = {\r\n            icon = "MdError",\r\n            color = "#D74646",\r\n            sound = {\r\n                enable = false,\r\n                source = "pop.wav",\r\n                volume = 1\r\n            }\r\n        },\r\n        message = {\r\n            icon = "MdMessage",\r\n            color = "#676767",\r\n            sound = {\r\n                enable = false,\r\n                source = "pop.wav",\r\n                volume = 1\r\n            }\r\n        },\r\n        --[[\r\n        TO CREATE A CUSTOM TYPE:\r\n\r\n        nameOfTheNotificationType = {\r\n            icon = "NameOfTheIcon", -- Available icons : https://react-icons.github.io/react-icons/icons?name=md\r\n            color = "#676767", -- Color in HEX, RGB(A), HSLA..\r\n            sound = {\r\n                enable = true, -- Enable or disable sound effect\r\n                source = "pop.wav", -- Name of the file\r\n                volume = 1 -- Volume between 0 and 1\r\n            }\r\n        },\r\n        ]]\r\n    },\r\n\r\n    notifyIntervals = {\r\n        --[[\r\n        Example for notifications with interval:\r\n\r\n        {\r\n            interval = 10000,\r\n            notify = {\r\n                type = "info",\r\n                title = "Tip",\r\n                message = "You can press I to open your inventory",\r\n                duration = 4000,\r\n                theme = "colorful",\r\n                position = "top-right"\r\n            }\r\n        },\r\n\r\n        TO PUT BELOW THE DOUBLE ]\r\n        ]]\r\n\r\n    },\r\n}\n'})})]})}function u(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(f,{...n})}):f(n)}},1151:(n,e,r)=>{r.d(e,{Z:()=>a,a:()=>s});var o=r(7294);const t={},i=o.createContext(t);function s(n){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);