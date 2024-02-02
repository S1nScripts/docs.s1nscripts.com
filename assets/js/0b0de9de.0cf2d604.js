"use strict";(self.webpackChunkdocs_s_1_nscripts_com=self.webpackChunkdocs_s_1_nscripts_com||[]).push([[6665],{28:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=t(5893),n=t(3905);const o={sidebar_position:0,title:"FiveM Assets Escrow",sidebar_label:"FiveM Assets Escrow"},i=void 0,c={id:"escrow/fivem-escrow",title:"FiveM Assets Escrow",description:"S1nScripts Banner",source:"@site/docs/escrow/fivem-escrow.md",sourceDirName:"escrow",slug:"/escrow/fivem-escrow",permalink:"/docs/escrow/fivem-escrow",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/escrow/fivem-escrow.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"FiveM Assets Escrow",sidebar_label:"FiveM Assets Escrow"},sidebar:"docs",previous:{title:"FAQ",permalink:"/docs/intro/faq"},next:{title:"Assets transfers",permalink:"/docs/escrow/asset-transfers"}},a={},l=[{value:"FiveM Asset Escrow Errors",id:"fivem-asset-escrow-errors",level:2},{value:"You lack the required entitlement to use X",id:"you-lack-the-required-entitlement-to-use-x",level:3},{value:"Failed to verify protected resource X",id:"failed-to-verify-protected-resource-x",level:3},{value:"Error parsing script @Y in resource X: @Y: syntax error near ...",id:"error-parsing-script-y-in-resource-x-y-syntax-error-near-",level:3},{value:"My script doesn&#39;t work and there is no errors in the F8 logs and server console",id:"my-script-doesnt-work-and-there-is-no-errors-in-the-f8-logs-and-server-console",level:3}];function d(e){const r={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,n.ah)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"https://media.discordapp.net/attachments/791405808587636806/1095223445161246810/45r-01.png?width=1439&height=399",alt:"S1nScripts Banner"})}),"\n",(0,s.jsx)(r.h2,{id:"fivem-asset-escrow-errors",children:"FiveM Asset Escrow Errors"}),"\n",(0,s.jsx)(r.p,{children:"If you encounter the following errors:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"You lack the required entitlement to use X"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"Failed to verify protected resource X"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"Error parsing script @Y in resource X: @Y: syntax error near ..."})}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Here's how you can troubleshoot each one of these errors :"}),"\n",(0,s.jsx)(r.h3,{id:"you-lack-the-required-entitlement-to-use-x",children:"You lack the required entitlement to use X"}),"\n",(0,s.jsx)(r.p,{children:"To resolve this issue, make sure that your server's license key is owned by the same keymaster account that owns the asset. If it is, restart your server. If not, transfer the asset to the same account as your server's license key."}),"\n",(0,s.jsx)(r.h3,{id:"failed-to-verify-protected-resource-x",children:"Failed to verify protected resource X"}),"\n",(0,s.jsx)(r.p,{children:"If you come across this error, it indicates that the files were damaged during the download process. This problem frequently arises while using FileZilla as it tends to corrupt the files. To prevent this issue, consider using an alternative FTP client like WinSCP."}),"\n",(0,s.jsx)(r.h3,{id:"error-parsing-script-y-in-resource-x-y-syntax-error-near-",children:"Error parsing script @Y in resource X: @Y: syntax error near ..."}),"\n",(0,s.jsxs)(r.p,{children:["This error message indicates that the server artifacts are outdated. In order to resolve this issue, you need to update to the latest ",(0,s.jsx)("a",{href:"https://runtime.fivem.net/artifacts/fivem/build_server_windows/master",children:"recommended version"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"my-script-doesnt-work-and-there-is-no-errors-in-the-f8-logs-and-server-console",children:"My script doesn't work and there is no errors in the F8 logs and server console"}),"\n",(0,s.jsx)(r.p,{children:"Try downloading again the script from KeyMaster and put it in your server with an FTP Client different from FileZilla like WinSCP.\nVerify that the script doesn't contain any uppercase letters in the script's name."})]})}function u(e={}){const{wrapper:r}={...(0,n.ah)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3905:(e,r,t)=>{t.d(r,{ah:()=>l});var s=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,s,n=function(e,r){if(null==e)return{};var t,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var a=s.createContext({}),l=function(e){var r=s.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},u=s.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),h=n,f=p["".concat(a,".").concat(h)]||p[h]||d[h]||o;return t?s.createElement(f,i(i({ref:r},u),{},{components:t})):s.createElement(f,i({ref:r},u))}));u.displayName="MDXCreateElement"}}]);