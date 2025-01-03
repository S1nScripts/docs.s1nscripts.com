"use strict";(self.webpackChunkdocs_s_1_nscripts_com=self.webpackChunkdocs_s_1_nscripts_com||[]).push([[5451],{4634:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var o=t(5893),n=t(1151);const s={sidebar_position:1,title:"Custom modifications",sidebar_label:"Custom modifications"},c="ATM Robbery",r={id:"atmrobbery/custom-modifications",title:"Custom modifications",description:"S1nScripts Logo",source:"@site/docs/atmrobbery/custom-modifications.md",sourceDirName:"atmrobbery",slug:"/atmrobbery/custom-modifications",permalink:"/docs/atmrobbery/custom-modifications",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Custom modifications",sidebar_label:"Custom modifications"},sidebar:"docs",previous:{title:"Common issues",permalink:"/docs/atmrobbery/common-issues"},next:{title:"Installation",permalink:"/docs/banking/install"}},d={},a=[{value:"Custom modifications",id:"custom-modifications",level:2},{value:"Adding compatibility with another script when a robbery has started",id:"adding-compatibility-with-another-script-when-a-robbery-has-started",level:3},{value:"Example of adding compatibility with the <code>cd_dispatch</code> script",id:"example-of-adding-compatibility-with-the-cd_dispatch-script",level:4}];function l(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{src:"https://forum.cfx.re/uploads/default/optimized/4X/e/6/5/e65fbb4eecc44980b6075ff5cb6ca26274767015_2_690x388.jpeg",alt:"S1nScripts Logo"})}),"\n",(0,o.jsx)(i.h1,{id:"atm-robbery",children:"ATM Robbery"}),"\n",(0,o.jsx)(i.h2,{id:"custom-modifications",children:"Custom modifications"}),"\n",(0,o.jsx)(i.h3,{id:"adding-compatibility-with-another-script-when-a-robbery-has-started",children:"Adding compatibility with another script when a robbery has started"}),"\n",(0,o.jsxs)(i.p,{children:["If you need to do things client-side, go to ",(0,o.jsx)(i.code,{children:"client/api.lua"})," and look at the function ",(0,o.jsx)(i.code,{children:"NotifyPolice"}),".\nIf you need to do things server-side, go to ",(0,o.jsx)(i.code,{children:"server/api.lua"})," and look at the function ",(0,o.jsx)(i.code,{children:"SendAlertToPoliceOfficer"})," and ",(0,o.jsx)(i.code,{children:"SendAlert"}),"."]}),"\n",(0,o.jsxs)(i.h4,{id:"example-of-adding-compatibility-with-the-cd_dispatch-script",children:["Example of adding compatibility with the ",(0,o.jsx)(i.code,{children:"cd_dispatch"})," script"]}),"\n",(0,o.jsxs)(i.p,{children:["More information about the ",(0,o.jsx)(i.code,{children:"cd_dispatch"})," script events can be found ",(0,o.jsx)(i.a,{href:"https://docs.codesign.pro/paid-scripts/dispatch/resource-integration#paid-resources",children:"here"})]}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsxs)(i.li,{children:["Go to ",(0,o.jsx)(i.code,{children:"server/api.lua"})," and look at the function ",(0,o.jsx)(i.code,{children:"SendAlert"}),"."]}),"\n",(0,o.jsx)(i.li,{children:"Replace the function with the following code:"}),"\n"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-lua",children:"function SendAlert(coords)\n    TriggerClientEvent('cd_dispatch:AddNotification', -1, {\n        job_table = {'police', },\n        coords = coords,\n        title = '10-15 - Robbery',\n        message = \"Robbery in progress\",\n        flash = 0,\n        unique_id = tostring(math.random(0000000,9999999)),\n        sound = 1,\n        blip = {\n            sprite = 431,\n            scale = 1.2,\n            colour = 3,\n            flashes = false,\n            text = '911 - Robbery',\n            time = 5,\n            radius = 0,\n        }\n    })\nend\n``\n"})})]})}function h(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,i,t)=>{t.d(i,{Z:()=>r,a:()=>c});var o=t(7294);const n={},s=o.createContext(n);function c(e){const i=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),o.createElement(s.Provider,{value:i},e.children)}}}]);