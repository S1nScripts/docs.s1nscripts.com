"use strict";(self.webpackChunkdocs_s_1_nscripts_com=self.webpackChunkdocs_s_1_nscripts_com||[]).push([[8950],{6302:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=t(5893),r=t(1151);const i={sidebar_position:1,title:"Installation",sidebar_label:"Installation"},l="ATM Robbery",o={id:"atmrobbery/install",title:"Installation",description:"S1nScripts Logo",source:"@site/docs/atmrobbery/install.md",sourceDirName:"atmrobbery",slug:"/atmrobbery/install",permalink:"/docs/atmrobbery/install",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Installation",sidebar_label:"Installation"},sidebar:"docs",previous:{title:"Common issues",permalink:"/docs/marketplace/common-issues"},next:{title:"Config",permalink:"/docs/atmrobbery/config"}},a={},c=[{value:"Installation",id:"installation",level:2},{value:"<strong>Follow these steps to install the atm robbery system</strong>",id:"follow-these-steps-to-install-the-atm-robbery-system",level:3}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://forum.cfx.re/uploads/default/optimized/4X/e/6/5/e65fbb4eecc44980b6075ff5cb6ca26274767015_2_690x388.jpeg",alt:"S1nScripts Logo"})}),"\n",(0,s.jsx)(n.h1,{id:"atm-robbery",children:"ATM Robbery"}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsx)(n.p,{children:"We highly recommend you to read carefully each step written below."}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Don't skip any step, it could lead to a non-functioning script."})})]}),"\n",(0,s.jsx)(n.h3,{id:"follow-these-steps-to-install-the-atm-robbery-system",children:(0,s.jsx)(n.strong,{children:"Follow these steps to install the atm robbery system"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Download the script from KeyMaster."}),"\n",(0,s.jsx)(n.li,{children:'Download the "Library" script from KeyMaster.'}),"\n",(0,s.jsxs)(n.li,{children:["Drag the ",(0,s.jsx)(n.code,{children:"s1n_atmrobbery"})," folder into your ",(0,s.jsx)(n.code,{children:"resources"})," directory. (you might need to rename the script's folder)"]}),"\n",(0,s.jsxs)(n.li,{children:["Rename the ",(0,s.jsx)(n.code,{children:"s1n_atmrobbery-...."})," folder to ",(0,s.jsx)(n.code,{children:"s1n_atmrobbery"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Drag the ",(0,s.jsx)(n.code,{children:"s1n_lib"})," folder into your ",(0,s.jsx)(n.code,{children:"resources"})," directory."]}),"\n",(0,s.jsxs)(n.li,{children:["Rename the ",(0,s.jsx)(n.code,{children:"s1n_lib-...."})," folder to ",(0,s.jsx)(n.code,{children:"s1n_lib"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Start the library by adding ",(0,s.jsx)(n.code,{children:"start s1n_lib"})," to your ",(0,s.jsx)(n.code,{children:"server.cfg"})," file."]}),"\n",(0,s.jsxs)(n.li,{children:["Start the atm robbery system by adding ",(0,s.jsx)(n.code,{children:"start s1n_atmrobbery"})," to your ",(0,s.jsx)(n.code,{children:"server.cfg"})," file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"(if you're using ESX)"})," Please insert SQL query in your database :"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT INTO `items` (`name`, `label`, `weight`) VALUES\n\t('drill', 'Drill', 1),\n\t('rope', 'Rope', 1),\n    ('c4', 'C4', 1);\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"10",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"(if you're using QBCore)"})," Please add these items to ",(0,s.jsx)(n.strong,{children:"qb-core/shared/items.lua"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-txt",children:"['drill'] = { ['name'] = 'drill', ['label'] = 'Drill', ['weight'] = 0, ['type'] = 'item', ['image'] = 'drill.png', ['unique'] = true, ['useable'] = false, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = ''},\n['rope'] = { ['name'] = 'rope', ['label'] = 'Rope', ['weight'] = 0, ['type'] = 'item', ['image'] = 'rope.png', ['unique'] = true, ['useable'] = false, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = ''},\n['c4'] = { ['name'] = 'c4', ['label'] = 'C4', ['weight'] = 0, ['type'] = 'item', ['image'] = 'c4.png', ['unique'] = true, ['useable'] = false, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = ''},\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"11",children:["\n",(0,s.jsxs)(n.li,{children:["Configure the script by modifying the values in the ",(0,s.jsx)(n.code,{children:"config.lua"})," file located in the ",(0,s.jsx)(n.code,{children:"s1n_atmrobbery/shared/"})," script folder."]}),"\n",(0,s.jsxs)(n.li,{children:["Configure the library by modifying the values in all the files contained in the ",(0,s.jsx)(n.code,{children:"configuration/"})," folder located in the ",(0,s.jsx)(n.code,{children:"s1n_lib/"})," script folder."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var s=t(7294);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);