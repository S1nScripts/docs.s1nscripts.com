"use strict";(self.webpackChunkdocs_s_1_nscripts_com=self.webpackChunkdocs_s_1_nscripts_com||[]).push([[6203],{490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(5893),i=n(1151);const a={sidebar_position:1,title:"Config",sidebar_label:"Config"},s="Marketplace",l={id:"marketplace/config",title:"Config",description:"Adding images to the marketplace",source:"@site/docs/marketplace/config.md",sourceDirName:"marketplace",slug:"/marketplace/config",permalink:"/docs/marketplace/config",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/marketplace/config.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Config",sidebar_label:"Config"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/marketplace/install"},next:{title:"Common issues",permalink:"/docs/marketplace/common-issues"}},r={},c=[{value:"Adding images to the marketplace",id:"adding-images-to-the-marketplace",level:2},{value:"Adding new images for the items and vehicles",id:"adding-new-images-for-the-items-and-vehicles",level:3},{value:"Config files",id:"config-files",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"marketplace",children:"Marketplace"}),"\n",(0,o.jsx)(t.h2,{id:"adding-images-to-the-marketplace",children:"Adding images to the marketplace"}),"\n",(0,o.jsx)(t.h3,{id:"adding-new-images-for-the-items-and-vehicles",children:"Adding new images for the items and vehicles"}),"\n",(0,o.jsxs)(t.p,{children:["By default the script will try to detect your inventory script. If it's detected, it will use the images from your inventory script.\nIf it's not detected or which to use another nui path, go to ",(0,o.jsx)(t.code,{children:"s1n_lib/configuration/shared/inventory.config.lua"})," and look for ",(0,o.jsx)(t.code,{children:"imagePath"}),". There are some comments in the file to help you."]}),"\n",(0,o.jsxs)(t.p,{children:["For the vehicles, the images (.png) must have the exact same name as the vehicles model (the one you use to spawn it with ",(0,o.jsx)(t.code,{children:"/car <model>"})," in-game)."]}),"\n",(0,o.jsx)(t.h2,{id:"config-files",children:"Config files"}),"\n",(0,o.jsxs)(t.p,{children:["There is also a config file in ",(0,o.jsx)(t.code,{children:"s1n_marketplace/configuration/server/webhook.config.lua"})," that you can modify to your liking."]}),"\n",(0,o.jsx)(t.p,{children:"For both ESX and QBCore:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lua",children:"Config = Config or {}\n\n-- Make sure to also configure s1n_lib, check s1n_lib/configuration/ folder.\n\n-- Set this to true if you want to enable debug mode (for developers and support)\nConfig.debugMode = true\n\n-- If set to true, the script will ignore the target script you have on your server and will use the keyboard keys to interact with the markets (opening the UI)\nConfig.DisableTargetScript = false\n\n-- Config variables related to the inventory items containing metadata, specifically for the durability here\nConfig.DurabilityItem = {\n    -- If you don't want to be able to add an item to a marketplace which have 0 in durability, set this to true\n    enable = false,\n}\n\n-- Scripts names used for the exports\nConfig.ExportNames = {\n    s1nLib = \"s1n_lib\",\n\n    oxInventory = \"ox_inventory\",\n}\n\n-- If you use the old ESX loadout system, set this to true to support weapons\nConfig.UseEsxLoadout = false\n\n-- Default values to advertise a product (minimum and maximum hours and the price per minute)\nConfig.Advertisement = { Min = 1, Max = 24, Price = 1 } -- Price = price per minute\n\n-- Default values to auction a product (minimum and maximum hours)\nConfig.Auction = { Min = 1, Max = 24 }\n\n-- List of blacklisted items for the marketplaces\nConfig.BlackListItems = {\n    -- The water_bottle is just an example, you can remove it if you want\n    ['water_bottle'] = true,\n}\n\n-- List of blacklisted items for the black markets\nConfig.BlackMarketBlacklistItems = {\n    -- The water_bottle is just an example, you can remove it if you want\n    ['water_bottle'] = true,\n}\n\n-- List of blacklisted vehicles for both marketplaces and black markets\nConfig.BlacklistVehicles = { }\n\n-- Set to true if you want to use dirty money for the black market\nConfig.BlackMarketUseDirtyMoney = false\n\n-- ONLY FOR QBCORE: Define the name of the dirty money item\nConfig.BlackMarketDirtyMoneyItem = 'markedbills'\n\n-- FOR DEVELOPERS ONLY: Set to true if you want to be able to buy your own products\nConfig.CanBuyOwnProduct = true\n\n-- List of the marketplaces\nConfig.Marketplaces = {\n    {\n        -- Name of the marketplace\n        Name = 'testmarket',\n        -- Define to 'normal' or 'blackmarket'\n        Type = 'blackmarket',\n        -- You can whitelist the market for specific jobs\n        -- Set it to a table to add jobs to the whitelist, set it to false to disable it\n        -- Here is an example of a whitelist with 2 jobs: JobCheck = { ['police'] = true, ['ambulance'] = true }\n        -- Here is an example of a whitelist with 1 job: JobCheck = 'police'\n        JobCheck = false,\n        -- You can whitelist the possibility to sell products for specific jobs\n        -- Set it to a table to add jobs to the whitelist, set it to false to disable it\n        -- Here is an example of a whitelist with 2 jobs: SellerCheck = { ['police'] = true, ['ambulance'] = true }\n        SellerCheck = false,\n        -- The location of the marketplace (X, Y, Z)\n        Location = vector3(28.96, -1018.68, 29.6),\n        -- Blip settings\n        Blip = {\n            -- Set to false to disable the blip\n            Enable = true,\n            -- The sprite ID of the blip (you can find the list of sprite IDs here: https://docs.fivem.net/docs/game-references/blips/)\n            Sprite = 52,\n            -- The color of the blip (you can find the list of colors here: https://docs.fivem.net/docs/game-references/blips/)\n            Color = 2,\n            -- The scale of the blip (1.0 is the default scale)\n            Scale = 1.0,\n            -- The label of the blip\n            Label = 'The Black Market'\n        },\n        -- Marker settings\n        Marker = {\n            -- Set to false to disable the marker\n            Enable = true,\n\n            Type = 2,\n            Rotation = { 0.0, 180.0, 0.0 },\n            Scale = 0.4,\n            Color = { R = 222, G = 186, B = 77, A = 255 },\n            -- Set to false to disable the marker's animation\n            BobUpAndDown = true,\n            FaceCamera = true,\n            MarkerDistance = 5.0,\n            TextDistance = 2.0 \n        },\n        -- If you want to disable the possibility to sell vehicles, set this to true otherwise set it to false\n        DisableVehicles = false,\n        -- If you want to disable the possibility to see the seller name, set this to false otherwise set it to true\n        ShowSellerName = true,\n        -- Set to \"bank\" to use the bank account for the transactions, set to \"cash\" to use the cash for the transactions\n        -- If you're on a blackmarket type and you've set Config.BlackMarketUseDirtyMoney to true, this variable will be ignored and will still use the dirty money\n        PaymentMethod = \"bank\",\n    },\n    {\n        -- Name of the marketplace\n        Name = 'testmarket2',\n        -- Define to 'normal' or 'blackmarket'\n        Type = 'normal',\n        -- You can whitelist the market for specific jobs\n        -- Set it to a table to add jobs to the whitelist, set it to false to disable it\n        -- Here is an example of a whitelist with 2 jobs: JobCheck = { ['police'] = true, ['ambulance'] = true }\n        -- Here is an example of a whitelist with 1 job: JobCheck = 'police'\n        JobCheck = false,\n        -- You can whitelist the possibility to sell products for specific jobs\n        -- Set it to a table to add jobs to the whitelist, set it to false to disable it\n        -- Here is an example of a whitelist with 2 jobs: SellerCheck = { ['police'] = true, ['ambulance'] = true }\n        SellerCheck = false,\n        -- The location of the marketplace (X, Y, Z)\n        Location = vector3(40.53, -1021.39, 29.52),\n        -- Blip settings\n        Blip = {\n            -- Set to false to disable the blip\n            Enable = true,\n            -- The sprite ID of the blip (you can find the list of sprite IDs here: https://docs.fivem.net/docs/game-references/blips/)\n            Sprite = 52,\n            -- The color of the blip (you can find the list of colors here: https://docs.fivem.net/docs/game-references/blips/)\n            Color = 2,\n            -- The scale of the blip (1.0 is the default scale)\n            Scale = 1.0,\n            -- The label of the blip\n            Label = 'The Normal Market'\n        },\n        -- Marker settings\n        Marker = {\n            -- Set to false to disable the marker\n            Enable = true,\n\n            Type = 2,\n            Rotation = { 0.0, 180.0, 0.0 },\n            Scale = 0.4,\n            Color = { R = 222, G = 186, B = 77, A = 255 },\n            -- Set to false to disable the marker's animation\n            BobUpAndDown = true,\n            FaceCamera = true,\n            MarkerDistance = 5.0,\n            TextDistance = 2.0\n        },\n        -- If you want to disable the possibility to sell vehicles, set this to true otherwise set it to false\n        DisableVehicles = false,\n        -- If you want to disable the possibility to see the seller name, set this to false otherwise set it to true\n        ShowSellerName = true,\n        -- Set to \"bank\" to use the bank account for the transactions, set to \"cash\" to use the cash for the transactions\n        -- If you're on a blackmarket type and you've set Config.BlackMarketUseDirtyMoney to true, this variable will be ignored and will still use the dirty money\n        PaymentMethod = \"bank\",\n    },\n}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>s});var o=n(7294);const i={},a=o.createContext(i);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);