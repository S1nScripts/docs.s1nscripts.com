"use strict";(self.webpackChunkdocs_s_1_nscripts_com=self.webpackChunkdocs_s_1_nscripts_com||[]).push([[3818],{4571:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var t=s(5893),o=s(1151);const r={sidebar_position:1,title:"Exports",sidebar_label:"Exports"},c="Banking System",i={id:"banking/exports",title:"Exports",description:"Exports",source:"@site/docs/banking/exports.md",sourceDirName:"banking",slug:"/banking/exports",permalink:"/docs/banking/exports",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/banking/exports.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Exports",sidebar_label:"Exports"},sidebar:"docs",previous:{title:"Config",permalink:"/docs/banking/config"},next:{title:"Common issues",permalink:"/docs/banking/common-issues"}},a={},l=[{value:"Exports",id:"exports",level:2},{value:"CheckOpenUI (client-side only)",id:"checkopenui-client-side-only",level:3},{value:"OpenUI (client-side only)",id:"openui-client-side-only",level:3},{value:"CreateTransaction (server-side only)",id:"createtransaction-server-side-only",level:3},{value:"GetAccountData (server-side only)",id:"getaccountdata-server-side-only",level:3},{value:"<strong>ONLY FOR QBCORE</strong> AddMoneyToSociety (server-side only)",id:"only-for-qbcore-addmoneytosociety-server-side-only",level:3},{value:"<strong>ONLY FOR QBCORE</strong> RemoveMoneyFromSociety (server-side only)",id:"only-for-qbcore-removemoneyfromsociety-server-side-only",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"banking-system",children:"Banking System"}),"\n",(0,t.jsx)(n.h2,{id:"exports",children:"Exports"}),"\n",(0,t.jsx)(n.h3,{id:"checkopenui-client-side-only",children:"CheckOpenUI (client-side only)"}),"\n",(0,t.jsx)(n.p,{children:"If you enabled the debit card system, you can use this export to check if the player has the item in their inventory and it will open the UI if so."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'exports["s1n_banking"]:checkOpenUI()\n'})}),"\n",(0,t.jsx)(n.h3,{id:"openui-client-side-only",children:"OpenUI (client-side only)"}),"\n",(0,t.jsx)(n.p,{children:"Opens the banking UI for the player to interact with the banking system."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'exports["s1n_banking"]:openUI()\n'})}),"\n",(0,t.jsx)(n.h3,{id:"createtransaction-server-side-only",children:"CreateTransaction (server-side only)"}),"\n",(0,t.jsx)(n.p,{children:"Creates a history transaction for the specified account.\nIt doesn't add or remove money from the account, it's just for logging purposes."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"account"})," (table) - Must contain an ",(0,t.jsx)(n.code,{children:"iban"})," field in the table with the account's IBAN as a string."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"action"})," (string) - The action that will be displayed in the transaction history."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"label"})," (string) - The label that will be displayed in the transaction history."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"amount"})," (number) - The amount that will be displayed in the transaction history."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'local account = {\n    iban = \'RO1234567890123456789012\'\n}\nexports["s1n_banking"]:CreateTransaction(account, "deposit", "Paycheck", 1000)\n'})}),"\n",(0,t.jsx)(n.h3,{id:"getaccountdata-server-side-only",children:"GetAccountData (server-side only)"}),"\n",(0,t.jsx)(n.p,{children:"Gets the account data for the specified account."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"source"})," (string) - The target player's server ID."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"data"})," (table) - Must contain a ",(0,t.jsx)(n.code,{children:"type"})," field in the table which can be ",(0,t.jsx)(n.code,{children:"societyaccount"}),", ",(0,t.jsx)(n.code,{children:"sharedaccount"}),"or ",(0,t.jsx)(n.code,{children:"useraccount"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns:"}),"\nIf there has been an error, it will return a tuple with the first value being ",(0,t.jsx)(n.code,{children:"false"})," and the second value being the error message.\nIf the account data has been found:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"id"})," (number) - The ID of the account in the database."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"iban"})," (string) - The IBAN of the account."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"owner"})," (string) - The owner's framework identifier of the account."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"type"})," (string) - The type of the account."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"history"})," (table) - The transaction history of the account."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"balance"})," (number) - The current balance of the account."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"members"})," (table) - The members of the account (if it's a shared account)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"credit"})," (table) - The credit data of the account (if there has been at least one credit linked to the account)."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"local account = {\n    type = 'useraccount'\n}\nlocal accountData, errorMessage = exports[\"s1n_banking\"]:GetAccountData(playerSource, account)\n\nif not accountData then\n    print(errorMessage)\n    return\nend\n\nprint(json.encode(accountData))\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"only-for-qbcore-addmoneytosociety-server-side-only",children:[(0,t.jsx)(n.strong,{children:"ONLY FOR QBCORE"})," AddMoneyToSociety (server-side only)"]}),"\n",(0,t.jsxs)(n.p,{children:["Adds money to the specified society account. (It's meant to replace qb-banking ",(0,t.jsx)(n.code,{children:"AddMoney"})," export)"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"societyName"})," (string) - The name of the society."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"amount"})," (number) - The amount to add to the society account."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"reason"})," (string) - The reason for adding money to the society account."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'exports["s1n_banking"]:AddMoneyToSociety("police", 1000, "Paycheck")\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"only-for-qbcore-removemoneyfromsociety-server-side-only",children:[(0,t.jsx)(n.strong,{children:"ONLY FOR QBCORE"})," RemoveMoneyFromSociety (server-side only)"]}),"\n",(0,t.jsxs)(n.p,{children:["Removes money from the specified society account. (It's meant to replace qb-banking ",(0,t.jsx)(n.code,{children:"RemoveMoney"})," export)"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"societyName"})," (string) - The name of the society."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"amount"})," (number) - The amount to remove from the society account."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"reason"})," (string) - The reason for removing money from the society account."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'exports[\'s1n_banking\']:RemoveMoneyFromSociety("police", 1000, "Paycheck")\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>c});var t=s(7294);const o={},r=t.createContext(o);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);