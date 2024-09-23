"use strict";(self.webpackChunkdocs_s_1_nscripts_com=self.webpackChunkdocs_s_1_nscripts_com||[]).push([[4667],{569:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=r(5893),o=r(1151);const i={sidebar_position:1,title:"Config",sidebar_label:"Config"},s="ATM Robbery",a={id:"atmrobbery/config",title:"Config",description:"Config file",source:"@site/docs/atmrobbery/config.md",sourceDirName:"atmrobbery",slug:"/atmrobbery/config",permalink:"/docs/atmrobbery/config",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/atmrobbery/config.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Config",sidebar_label:"Config"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/atmrobbery/install"},next:{title:"Common issues",permalink:"/docs/atmrobbery/common-issues"}},l={},c=[{value:"Config file",id:"config-file",level:2}];function f(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"atm-robbery",children:"ATM Robbery"}),"\n",(0,t.jsx)(n.h2,{id:"config-file",children:"Config file"}),"\n",(0,t.jsxs)(n.p,{children:["There is also a config file in ",(0,t.jsx)(n.code,{children:"s1n_atmrobbery/server/config.lua"})," that you can modify to your liking."]}),"\n",(0,t.jsx)(n.p,{children:"For both QBCore and ESX :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"Config = Config or { }\r\n\r\nConfig.debugMode = true\r\n\r\nConfig.Framework = {\r\n    FrameworkName = 'QBCore', -- ESX or QBCore\r\n    QBCoreFileName = 'qb-core',\r\n    OldESX = false,\r\n    ESXEvent = 'esx:getSharedObject',\r\n    ESXFileName = 'es_extended',\r\n    SQLWrapper = 'oxmysql' --  oxmysql / mysql-async / ghmattimysql\r\n}\r\n\r\n-- If you modified the scripts names used by this script in your resources folder, you need to change them here\r\nConfig.exportNames = {\r\n    s1nLib = \"s1n_lib\",\r\n}\r\n\r\n-- If set to false, the script will use ox_target\r\n\r\nConfig.UseQBTarget = false\r\n\r\n-- If set to true, the script will use quasar_inventory\r\n\r\nConfig.UseQuasarInventory = false\r\n\r\n-- If set to true, the script will use ox_inventory,\r\n-- IMPORTANT: Go to Config.Items to adapt c4 item for ox_inventory\r\n\r\nConfig.UseOXInventory = false\r\n\r\n-- If `enable` set to true, the script will use this item name as cash (to get the money from an ATM)\r\n\r\nConfig.CashItem = {\r\n    enable = false,\r\n    itemName = 'cash'\r\n}\r\n\r\n-- The chance of getting money from the atm, should be a number between 0 - 100\r\n\r\nConfig.GetMoneyChance = 50\r\n\r\n-- The reward that the player will get for robbing the atm, the number will be somewhere around the min - max values\r\n\r\nConfig.AtmReward = { min = 5000, max = 10000 }\r\n\r\n-- Enable / disable the option to rob the atm using a drill\r\n\r\nConfig.EnableDrill = true\r\n\r\n-- Enable / disable the option to rob the atm using a c4\r\n\r\nConfig.EnableC4 = true\r\n\r\n-- Enable / disable the vehicle whitelist system\r\n\r\nConfig.EnableVehicleWhitelist = true\r\n\r\n-- All the vehicles that are whitelisted\r\n\r\nConfig.WhitelistVehicles = {\r\n    ['futo'] = true\r\n}\r\n\r\n-- All the jobs that will get the robbery notification\r\n\r\nConfig.NotificationJobs = {\r\n    ['police'] = true\r\n}\r\n\r\n-- Robbery notification timeout\r\n\r\nConfig.NotificationTimeout = 15000\r\n\r\n-- Number of milliseconds after which the rope and atm are deleted when you finished the robbery process for an ATM.\r\n\r\nConfig.AtmCooldown = 20000\r\n\r\n-- Progress bar durations\r\n\r\nConfig.ProgressDuration = { drillfirst = 7000, drillsecond = 7000, search = 5000 }\r\n\r\n-- Robbery items\r\n\r\n-- IMPORTANT: if you use ox_inventory, please modify 'c4' to 'weapon_stickybomb'\r\nConfig.Items = { rope = 'rope', drill = 'drill', c4 = 'c4' }\r\n\r\n-- Distance to drill the ATM after drilling it from the wall\r\n\r\nConfig.DrillAfterDistance = 20.0\r\n\r\n-- Minimum police online to start a robbery\r\n\r\nConfig.MinPoliceOnline = 0\n"})})]})}function m(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>s});var t=r(7294);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);