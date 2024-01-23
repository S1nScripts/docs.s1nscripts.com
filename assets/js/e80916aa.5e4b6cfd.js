"use strict";(self.webpackChunkdocs_s_1_nscripts_com=self.webpackChunkdocs_s_1_nscripts_com||[]).push([[7234],{8150:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=t(5893),i=t(3905);const s={sidebar_position:1,title:"Installation",sidebar_label:"Installation"},o="Garage System",a={id:"garage/install",title:"Installation",description:"S1nScripts Logo",source:"@site/docs/garage/install.md",sourceDirName:"garage",slug:"/garage/install",permalink:"/docs/garage/install",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/garage/install.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Installation",sidebar_label:"Installation"},sidebar:"docs",previous:{title:"Assets transfers",permalink:"/docs/escrow/asset-transfers"},next:{title:"Common issues",permalink:"/docs/garage/common-issues"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://forum.cfx.re/uploads/default/original/4X/6/c/7/6c73a9d63db911aa966b2c9085f4c55a76268db3.jpeg",alt:"S1nScripts Logo"})}),"\n",(0,r.jsx)(n.h1,{id:"garage-system",children:"Garage System"}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(n.p,{children:"Follow these steps to install and configure the notification system:"}),"\n",(0,r.jsxs)(n.p,{children:["Download this pmc-instance (fork by myself) ",(0,r.jsx)(n.a,{href:"https://github.com/s1nyx/pmc-instance/",children:"https://github.com/s1nyx/pmc-instance/"}),'\nGo to the button "Code" > "Download ZIP"']}),"\n",(0,r.jsxs)(n.p,{children:["Download menuv ",(0,r.jsx)(n.a,{href:"https://github.com/ThymonA/menuv/releases/download/v1.4.1/menuv_v1.4.1.zip",children:"https://github.com/ThymonA/menuv/releases/download/v1.4.1/menuv_v1.4.1.zip"})]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Drag the ",(0,r.jsx)(n.code,{children:"pmc-instance"})," folder into your ",(0,r.jsx)(n.code,{children:"resources"})," directory."]}),"\n",(0,r.jsxs)(n.li,{children:["Drag the ",(0,r.jsx)(n.code,{children:"menuv"})," folder into your ",(0,r.jsx)(n.code,{children:"resources"})," directory."]}),"\n",(0,r.jsxs)(n.li,{children:["Drag the ",(0,r.jsx)(n.code,{children:"s1n_garages"})," folder into your ",(0,r.jsx)(n.code,{children:"resources"})," directory."]}),"\n",(0,r.jsxs)(n.li,{children:["Start pmc-instance by adding ",(0,r.jsx)(n.code,{children:"start pmc-instance"})," to your ",(0,r.jsx)(n.code,{children:"server.cfg"})," file."]}),"\n",(0,r.jsxs)(n.li,{children:["Start menuv by adding ",(0,r.jsx)(n.code,{children:"start menuv"})," to your ",(0,r.jsx)(n.code,{children:"server.cfg"})," file."]}),"\n",(0,r.jsxs)(n.li,{children:["Start the garage system by adding ",(0,r.jsx)(n.code,{children:"start s1n_garages"})," to your ",(0,r.jsx)(n.code,{children:"server.cfg"})," file."]}),"\n",(0,r.jsxs)(n.li,{children:["Configure the script by modifying the values in the ",(0,r.jsx)(n.code,{children:"config.lua"})," file located in the ",(0,r.jsx)(n.code,{children:"s1n_garages"})," script folder."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:'By default there is three language translations, french, english and german that you can find in the languages directory.\nTo load the one you want, please modify the fxmanifest file and change the "languages/english.lua" to whatever file in LUA with same structure.'}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.p,{children:"server/api.lua will allow you to:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"custom what happens when you disconnect from the server"}),"\n",(0,r.jsx)(n.li,{children:"custom the verification for plate ownership"}),"\n"]}),(0,r.jsx)(n.p,{children:"client/utils.lua will allow you to:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"custom format money"}),"\n",(0,r.jsx)(n.li,{children:"custom notifications"}),"\n",(0,r.jsx)(n.li,{children:"custom remove vehicle logic"}),"\n",(0,r.jsx)(n.li,{children:"custom the way to get vehicle properties"}),"\n",(0,r.jsx)(n.li,{children:"custom the way to set vehicle properties"}),"\n"]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3905:(e,n,t)=>{t.d(n,{ah:()=>c});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),u=c(t),p=i,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||s;return t?r.createElement(m,o(o({ref:n},h),{},{components:t})):r.createElement(m,o({ref:n},h))}));h.displayName="MDXCreateElement"}}]);