"use strict";(self.webpackChunkdocs_s_1_nscripts_com=self.webpackChunkdocs_s_1_nscripts_com||[]).push([[3729],{1659:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=o(5893),i=o(1151);const r={sidebar_position:1,title:"Config",sidebar_label:"Config"},s="Locker/Container System",c={id:"locker/config",title:"Config",description:"Config file",source:"@site/docs/locker/config.md",sourceDirName:"locker",slug:"/locker/config",permalink:"/docs/locker/config",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Config",sidebar_label:"Config"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/locker/install"},next:{title:"Installation",permalink:"/docs/bossmenu/install"}},a={},l=[{value:"Config file",id:"config-file",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"lockercontainer-system",children:"Locker/Container System"}),"\n",(0,t.jsx)(n.h2,{id:"config-file",children:"Config file"}),"\n",(0,t.jsx)(n.p,{children:"For both QBCore and ESX :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'Config = Config or {}\n\n-- Set to true to show debug messages in the console or false to hide them\nConfig.DebugMode = true\n\n-- You need to verify that the following scripts are exactly named like this or change the names here\nConfig.ExportNames = {\n    s1nLib = "s1n_lib"\n}\n\n-- All configurations related to lockers\nConfig.Lockers = {\n    -- Maximum capacity (weight) of a locker in grams (1kg = 1000g)\n    maxLockerCapacity = 500000,\n\n    rent = {\n        -- Minimum rent price for a locker\n        maxPrice = 10000,\n\n        -- Duration of the rent in seconds\n        duration = 7 * 24 * 60 * 60\n    },\n\n    -- Maximum pricing to buy a locker\n    maxBuyPrice = 100000,\n\n    -- When selling a locker, the seller will receive a percentage of the buy price. You need tp set a value between 0 and 1 where 0 is 0% and 1 is 100%. Default is 0.7 (70%)\n    sellPercent = 0.7,\n\n    -- Length of the locker code when someone else than the owner wants to interact with the locker\n    codeLength = 4\n}\n'})})]})}function f(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>s});var t=o(7294);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);