"use strict";(self.webpackChunkdocs_s_1_nscripts_com=self.webpackChunkdocs_s_1_nscripts_com||[]).push([[6203],{490:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=r(5893),o=r(1151);const s={sidebar_position:1,title:"Config",sidebar_label:"Config"},i="Marketplace",a={id:"marketplace/config",title:"Config",description:"Config file",source:"@site/docs/marketplace/config.md",sourceDirName:"marketplace",slug:"/marketplace/config",permalink:"/docs/marketplace/config",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/marketplace/config.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Config",sidebar_label:"Config"},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/marketplace/configuration"},next:{title:"Installation",permalink:"/docs/atmrobbery/install"}},l={},c=[{value:"Config file",id:"config-file",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"marketplace",children:"Marketplace"}),"\n",(0,n.jsx)(t.h2,{id:"config-file",children:"Config file"}),"\n",(0,n.jsxs)(t.p,{children:["There is also a config file in ",(0,n.jsx)(t.code,{children:"s1n_marketplace/server/config.lua"})," that you can modify to your liking."]}),"\n",(0,n.jsx)(t.p,{children:"For both ESX and QBCore:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:"Config = Config or {}\r\n\r\n-- Set this to true if you want to enable debug mode (for developers and support)\r\nConfig.debugMode = false\r\n\r\n-- Framework settings\r\nConfig.Framework = {\r\n    -- If you use ESX, you need to set this to 'ESX'\r\n    -- If you use QBCore, you need to set this to 'QBCore'\r\n    FrameworkName = 'QBCore',\r\n    -- The name of the QBCore resource, this is only used if you use QBCore\r\n    QBCoreFileName = 'qb-core',\r\n    -- Set to true if you use the old ESX (not ESX Legacy)\r\n    OldESX = false,\r\n    -- If you use the old ESX, define the event name here to get the ESX object (by default it's 'esx:getSharedObject')\r\n    ESXEvent = 'esx:getSharedObject',\r\n    -- The name of the ESX resource, this is only used if you use ESX\r\n    ESXFileName = 'es_extended',\r\n    -- The name of the SQL wrapper you use (You can set : mysql-async, oxmysql, ghmattimysql). You need to have the resource installed and running before this script.\r\n    SQLWrapper = 'oxmysql'\r\n}\r\n\r\n-- If you use the old ESX loadout system, set this to true to support weapons\r\nConfig.UseEsxLoadout = false\r\n\r\n-- If you use ox-inventory, set this to true to add support for it\r\nConfig.UseOxInventory = false\r\n\r\n-- If you use qb-target, set this to true to add support for it\r\nConfig.UseQbTarget = false\r\n\r\n-- If you use ox-target, set this to true to add support for it\r\nConfig.UseOxTarget = false\r\n\r\n-- Default values to advertise a product (minimum and maximum hours and the price per minute)\r\nConfig.Advertisement = { Min = 1, Max = 24, Price = 1 } -- Price = price per minute\r\n\r\n-- Default values to auction a product (minimum and maximum hours)\r\nConfig.Auction = { Min = 1, Max = 24 }\r\n\r\n-- List of blacklisted items for the marketplaces\r\nConfig.BlackListItems = {\r\n    -- The water_bottle is just an example, you can remove it if you want\r\n    ['water_bottle'] = true,\r\n}\r\n\r\n-- List of blacklisted items for the black markets\r\nConfig.BlackMarketBlacklistItems = {\r\n    -- The water_bottle is just an example, you can remove it if you want\r\n    ['water_bottle'] = true,\r\n}\r\n\r\n-- List of blacklisted vehicles for both marketplaces and black markets\r\nConfig.BlacklistVehicles = { }\r\n\r\n-- Set to true if you want to use dirty money for the black market\r\nConfig.BlackMarketUseDirtyMoney = false\r\n\r\n-- ONLY FOR QBCORE: Define the name of the dirty money item\r\nConfig.BlackMarketDirtyMoneyItem = 'markedbills'\r\n\r\n-- List of the marketplaces\r\nConfig.Marketplaces = {\r\n    {\r\n        -- Name of the marketplace\r\n        Name = 'testmarket',\r\n        -- Define to 'normal' or 'blackmarket'\r\n        Type = 'blackmarket',\r\n        -- You can whitelist the market for specific jobs\r\n        -- Set it to a table to add jobs to the whitelist, set it to false to disable it\r\n        -- Here is an example of a whitelist with 2 jobs: JobCheck = { ['police'] = true, ['ambulance'] = true }\r\n        -- Here is an example of a whitelist with 1 job: JobCheck = 'police'\r\n        JobCheck = false,\r\n        -- You can whitelist the possibility to sell products for specific jobs\r\n        -- Set it to a table to add jobs to the whitelist, set it to false to disable it\r\n        -- Here is an example of a whitelist with 2 jobs: SellerCheck = { ['police'] = true, ['ambulance'] = true }\r\n        SellerCheck = false,\r\n        -- The location of the marketplace (X, Y, Z)\r\n        Location = vector3(28.96, -1018.68, 29.6),\r\n        -- Blip settings\r\n        Blip = {\r\n            -- Set to false to disable the blip\r\n            Enable = true,\r\n            -- The sprite ID of the blip (you can find the list of sprite IDs here: https://docs.fivem.net/docs/game-references/blips/)\r\n            Sprite = 52,\r\n            -- The color of the blip (you can find the list of colors here: https://docs.fivem.net/docs/game-references/blips/)\r\n            Color = 2,\r\n            -- The scale of the blip (1.0 is the default scale)\r\n            Scale = 1.0,\r\n            -- The label of the blip\r\n            Label = 'The Black Market'\r\n        },\r\n        -- Marker settings\r\n        Marker = {\r\n            Type = 2,\r\n            Rotation = { 0.0, 180.0, 0.0 },\r\n            Scale = 0.4,\r\n            Color = { R = 222, G = 186, B = 77, A = 255 },\r\n            -- Set to false to disable the marker's animation\r\n            BobUpAndDown = true,\r\n            FaceCamera = true,\r\n            MarkerDistance = 5.0,\r\n            TextDistance = 2.0 \r\n        },\r\n        -- If you want to disable the possibility to sell vehicles, set this to true otherwise set it to false\r\n        DisableVehicles = false,\r\n        -- If you want to disable the possibility to see the seller name, set this to false otherwise set it to true\r\n        ShowSellerName = true,\r\n    }\r\n}\n"})})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>i});var n=r(7294);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);