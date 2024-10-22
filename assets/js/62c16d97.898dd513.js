"use strict";(self.webpackChunkdocs_s_1_nscripts_com=self.webpackChunkdocs_s_1_nscripts_com||[]).push([[3867],{8431:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var n=i(5893),o=i(1151);const s={sidebar_position:2,title:"How To Use",sidebar_label:"How To Use"},l=void 0,c={id:"notify/how-to-use",title:"How To Use",description:"S1nScripts Logo",source:"@site/docs/notify/how-to-use.md",sourceDirName:"notify",slug:"/notify/how-to-use",permalink:"/docs/notify/how-to-use",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"How To Use",sidebar_label:"How To Use"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/notify/install"},next:{title:"Framework Implementation",permalink:"/docs/notify/framework"}},r={},a=[{value:"Default Types",id:"default-types",level:2},{value:"Default Positions",id:"default-positions",level:2},{value:"Client side",id:"client-side",level:3},{value:"Server side",id:"server-side",level:3}];function d(e){const t={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://forum.cfx.re/uploads/default/original/4X/7/1/8/718c6f28a9b5ab0dc33bf79288bcb418e7684326.jpeg",alt:"S1nScripts Logo"})}),"\n",(0,n.jsx)(t.h2,{id:"default-types",children:"Default Types"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"success"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"error"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"info"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"warning"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"message"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"default-positions",children:"Default Positions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"top"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"top-left"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"top-right"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"bottom"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"bottom-left"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"bottom-right"})}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"client-side",children:"Client side"}),"\n",(0,n.jsxs)(t.p,{children:["To send a notification from a client-side file, use the ",(0,n.jsx)(t.code,{children:"s1n_notify:notify"})," event:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:'TriggerEvent("s1n_notify:notify", {\n  type = "success", -- Modify the type by replacing "success" with the type you want (all listed above)\n  title = "The title of the notifcation", -- Replace "The title of the notifcation" with the title you want\n  message = "The text of the notification", -- Replace "The text of the notification" with the text you want\n  duration = 5000, -- The duration of the notification in milliseconds\n  theme = "colorful", -- The theme of the notification (colorful or white)\n  position = "top-right" -- Modify the position of the notification by replacing "top-right" with the position you want (all listed above)\n})\n'})}),"\n",(0,n.jsx)(t.h3,{id:"server-side",children:"Server side"}),"\n",(0,n.jsxs)(t.p,{children:["You can use the ",(0,n.jsx)(t.code,{children:"s1n_notify:notify"})," event to send a notification to the client from a server-side file."]}),"\n",(0,n.jsxs)(t.p,{children:["Replace ",(0,n.jsx)(t.code,{children:"source"})," with the source of the player you want to send the notification to. By default in a server-side file, the source is the player who triggered the event."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:'TriggerEvent("s1n_notify:notify", source, {\n  type = "success", -- Modify the type by replacing "success" with the type you want (all listed above)\n  title = "The title of the notifcation", -- Replace "The title of the notifcation" with the title you want\n  message = "The text of the notification", -- Replace "The text of the notification" with the text you want\n  duration = 5000, -- The duration of the notification in milliseconds\n  theme = "colorful", -- The theme of the notification (colorful or white)\n  position = "top-right" -- Modify the position of the notification by replacing "top-right" with the position you want (all listed above)\n})\n'})}),"\n",(0,n.jsx)(t.p,{children:"Example of a server-side file which sends a notification to the player who triggered the /testnotify command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:'RegisterCommand("testnotify", function(source, args)\n    TriggerClientEvent("s1n_notify:notify", source, {\n        type = "success",\n        title = "The Notify System",\n        message = "Thanks for using my notify system! :)",\n        duration = 5000,\n        theme = "colorful",\n        position = "top-right"\n    })\nend, false)\n'})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>c,a:()=>l});var n=i(7294);const o={},s=n.createContext(o);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);