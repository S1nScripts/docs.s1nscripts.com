"use strict";(self.webpackChunkdocs_s_1_nscripts_com=self.webpackChunkdocs_s_1_nscripts_com||[]).push([[6203],{490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var a=n(5893),i=n(1151);const o={sidebar_position:1,title:"Config",sidebar_label:"Config"},s="Marketplace",r={id:"marketplace/config",title:"Config",description:"Adding images to the marketplace",source:"@site/docs/marketplace/config.md",sourceDirName:"marketplace",slug:"/marketplace/config",permalink:"/docs/marketplace/config",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Config",sidebar_label:"Config"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/marketplace/install"},next:{title:"Common issues",permalink:"/docs/marketplace/common-issues"}},l={},h=[{value:"Adding images to the marketplace",id:"adding-images-to-the-marketplace",level:2},{value:"Adding new images for the items and vehicles",id:"adding-new-images-for-the-items-and-vehicles",level:3},{value:"Where are the images located ?",id:"where-are-the-images-located-",level:4},{value:"What about the vehicles images ?",id:"what-about-the-vehicles-images-",level:4},{value:"Config files",id:"config-files",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"marketplace",children:"Marketplace"}),"\n",(0,a.jsx)(t.h2,{id:"adding-images-to-the-marketplace",children:"Adding images to the marketplace"}),"\n",(0,a.jsx)(t.h3,{id:"adding-new-images-for-the-items-and-vehicles",children:"Adding new images for the items and vehicles"}),"\n",(0,a.jsx)(t.h4,{id:"where-are-the-images-located-",children:"Where are the images located ?"}),"\n",(0,a.jsxs)(t.p,{children:["By default the script will try to detect your inventory script.\nIf it's detected, it will use the images from your inventory script (so if you want to add / modify images, you have to do it in your inventory script, in the folder where the images are.).\nIf it's not detected or you wish to use another nui path, go to ",(0,a.jsx)(t.code,{children:"s1n_lib/configuration/shared/inventory.config.lua"})," and look for ",(0,a.jsx)(t.code,{children:"imagePath"}),". There are some comments in the file to help you."]}),"\n",(0,a.jsx)(t.h4,{id:"what-about-the-vehicles-images-",children:"What about the vehicles images ?"}),"\n",(0,a.jsxs)(t.p,{children:["For the vehicles, the images (.png) must have the exact same name as the vehicles model (The ",(0,a.jsx)(t.code,{children:"gameName"})," of the vehicle) but in lowercase and without spaces.\nIt's usually in the file ",(0,a.jsx)(t.code,{children:"vehicles.meta"})," (when it's an imported car).\nFor the default GTA V vehicles, you can find their display name here : ",(0,a.jsx)(t.a,{href:"https://forge.plebmasters.de/vehicles",children:"https://forge.plebmasters.de/vehicles"})]}),"\n",(0,a.jsx)(t.p,{children:"The images need to be in the same place as the inventory images."}),"\n",(0,a.jsx)(t.h2,{id:"config-files",children:"Config files"}),"\n",(0,a.jsxs)(t.p,{children:["There is also a config file in ",(0,a.jsx)(t.code,{children:"s1n_marketplace/configuration/server/webhook.config.lua"})," that you can modify to your liking."]}),"\n",(0,a.jsx)(t.p,{children:"For both ESX and QBCore:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lua",children:"Config = Config or {}\n\n-- Make sure to also configure s1n_lib, check s1n_lib/configuration/ folder.\n\n-- Set this to true if you want to enable debug mode (for developers and support)\nConfig.debugMode = true\n\n-- If set to true, the script will ignore the target script you have on your server and will use the keyboard keys to interact with the markets (opening the UI)\nConfig.DisableTargetScript = false\n\n-- Config variables related to the inventory items containing metadata, specifically for the durability here\nConfig.DurabilityItem = {\n    -- If you don't want to be able to add an item to a marketplace which have 0 in durability, set this to true\n    enable = false,\n}\n\n-- Scripts names used for the exports\nConfig.ExportNames = {\n    s1nLib = \"s1n_lib\",\n\n    oxInventory = \"ox_inventory\",\n}\n\n-- If you use the old ESX loadout system, set this to true to support weapons\nConfig.UseEsxLoadout = false\n\n-- Default values to advertise a product (minimum and maximum hours and the price per minute)\nConfig.Advertisement = { Min = 1, Max = 24, Price = 1 } -- Price = price per minute\n\n-- Default values to auction a product (minimum and maximum hours)\nConfig.Auction = { Min = 1, Max = 24 }\n\n-- List of blacklisted items for the marketplaces\nConfig.BlackListItems = {\n    -- The water_bottle is just an example, you can remove it if you want\n    ['water_bottle'] = true,\n}\n\n-- List of blacklisted items for the black markets\nConfig.BlackMarketBlacklistItems = {\n    -- The water_bottle is just an example, you can remove it if you want\n    ['water_bottle'] = true,\n}\n\n-- List of blacklisted vehicles for both marketplaces and black markets\nConfig.BlacklistVehicles = { }\n\n-- Set to true if you want to use dirty money for the black market\nConfig.BlackMarketUseDirtyMoney = false\n\n-- ONLY FOR QBCORE: Define the name of the dirty money item\nConfig.BlackMarketDirtyMoneyItem = 'markedbills'\n\n-- FOR DEVELOPERS ONLY: Set to true if you want to be able to buy your own products\nConfig.CanBuyOwnProduct = true\n\n-- List of the marketplaces\nConfig.Marketplaces = {\n    {\n        -- Name of the marketplace\n        Name = 'testmarket',\n        -- Define to 'normal' or 'blackmarket'\n        Type = 'blackmarket',\n        -- You can whitelist the market for specific jobs\n        -- Set it to a table to add jobs to the whitelist, set it to false to disable it\n        -- Here is an example of a whitelist with 2 jobs: JobCheck = { ['police'] = true, ['ambulance'] = true }\n        -- Here is an example of a whitelist with 1 job: JobCheck = 'police'\n        JobCheck = false,\n        -- You can whitelist the possibility to sell products for specific jobs\n        -- Set it to a table to add jobs to the whitelist, set it to false to disable it\n        -- Here is an example of a whitelist with 2 jobs: SellerCheck = { ['police'] = true, ['ambulance'] = true }\n        SellerCheck = false,\n        -- The location of the marketplace (X, Y, Z)\n        Location = vector3(28.96, -1018.68, 29.6),\n        -- Blip settings\n        Blip = {\n            -- Set to false to disable the blip\n            Enable = true,\n            -- The sprite ID of the blip (you can find the list of sprite IDs here: https://docs.fivem.net/docs/game-references/blips/)\n            Sprite = 52,\n            -- The color of the blip (you can find the list of colors here: https://docs.fivem.net/docs/game-references/blips/)\n            Color = 2,\n            -- The scale of the blip (1.0 is the default scale)\n            Scale = 1.0,\n            -- The label of the blip\n            Label = 'The Black Market'\n        },\n        -- Marker settings\n        Marker = {\n            -- Set to false to disable the marker or set to true to enable the marker\n            Enable = true,\n\n            -- The type of the marker (you can find the list of types here: https://docs.fivem.net/docs/game-references/markers/)\n            Type = 2,\n            -- The rotation of the marker (X, Y, Z)\n            Rotation = { 0.0, 180.0, 0.0 },\n            -- The scale of the marker (1.0 is the default scale)\n            Scale = 0.4,\n            -- The color of the marker (R, G, B, A)\n            Color = { R = 222, G = 186, B = 77, A = 255 },\n            -- Set to false to disable the marker's animation (bobbing up and down)\n            BobUpAndDown = true,\n            -- Set to true to make the marker face the camera\n            FaceCamera = true,\n            -- Distance at which the marker will be visible\n            MarkerDistance = 5.0,\n            -- Distance at which the marker's text will be visible\n            TextDistance = 2.0 \n        },\n        -- If you want to disable the possibility to sell vehicles, set this to true otherwise set it to false\n        DisableVehicles = false,\n        -- If you want to disable the possibility to see the seller name, set this to false otherwise set it to true\n        ShowSellerName = true,\n        -- Set to \"bank\" to use the bank account for the transactions, set to \"cash\" to use the cash for the transactions\n        -- If you're on a blackmarket type and you've set Config.BlackMarketUseDirtyMoney to true, this variable will be ignored and will still use the dirty money\n        PaymentMethod = \"bank\",\n    },\n    {\n        -- Name of the marketplace\n        Name = 'testmarket2',\n        -- Define to 'normal' or 'blackmarket'\n        Type = 'normal',\n        -- You can whitelist the market for specific jobs\n        -- Set it to a table to add jobs to the whitelist, set it to false to disable it\n        -- Here is an example of a whitelist with 2 jobs: JobCheck = { ['police'] = true, ['ambulance'] = true }\n        -- Here is an example of a whitelist with 1 job: JobCheck = 'police'\n        JobCheck = false,\n        -- You can whitelist the possibility to sell products for specific jobs\n        -- Set it to a table to add jobs to the whitelist, set it to false to disable it\n        -- Here is an example of a whitelist with 2 jobs: SellerCheck = { ['police'] = true, ['ambulance'] = true }\n        SellerCheck = false,\n        -- The location of the marketplace (X, Y, Z)\n        Location = vector3(40.53, -1021.39, 29.52),\n        -- Blip settings\n        Blip = {\n            -- Set to false to disable the blip\n            Enable = true,\n            -- The sprite ID of the blip (you can find the list of sprite IDs here: https://docs.fivem.net/docs/game-references/blips/)\n            Sprite = 52,\n            -- The color of the blip (you can find the list of colors here: https://docs.fivem.net/docs/game-references/blips/)\n            Color = 2,\n            -- The scale of the blip (1.0 is the default scale)\n            Scale = 1.0,\n            -- The label of the blip\n            Label = 'The Normal Market'\n        },\n        -- Marker settings\n        Marker = {\n            -- Set to false to disable the marker\n            Enable = true,\n\n            -- The type of the marker (you can find the list of types here: https://docs.fivem.net/docs/game-references/markers/)\n            Type = 2,\n            -- The rotation of the marker (X, Y, Z)\n            Rotation = { 0.0, 180.0, 0.0 },\n            -- The scale of the marker (1.0 is the default scale)\n            Scale = 0.4,\n            -- The color of the marker (R, G, B, A)\n            Color = { R = 222, G = 186, B = 77, A = 255 },\n            -- Set to false to disable the marker's animation (bobbing up and down)\n            BobUpAndDown = true,\n            -- Set to true to make the marker face the camera\n            FaceCamera = true,\n            -- Distance at which the marker will be visible\n            MarkerDistance = 5.0,\n            -- Distance at which the marker's text will be visible\n            TextDistance = 2.0\n        },\n        -- If you want to disable the possibility to sell vehicles, set this to true otherwise set it to false\n        DisableVehicles = false,\n        -- If you want to disable the possibility to see the seller name, set this to false otherwise set it to true\n        ShowSellerName = true,\n        -- Set to \"bank\" to use the bank account for the transactions, set to \"cash\" to use the cash for the transactions\n        -- If you're on a blackmarket type and you've set Config.BlackMarketUseDirtyMoney to true, this variable will be ignored and will still use the dirty money\n        PaymentMethod = \"bank\",\n    },\n}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var a=n(7294);const i={},o=a.createContext(i);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);