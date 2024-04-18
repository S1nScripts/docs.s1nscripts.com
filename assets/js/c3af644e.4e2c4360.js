"use strict";(self.webpackChunkdocs_s_1_nscripts_com=self.webpackChunkdocs_s_1_nscripts_com||[]).push([[498],{6010:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var t=r(5893),o=r(1151);const a={sidebar_position:1,title:"Config",sidebar_label:"Config"},i="Banking System",s={id:"banking/config",title:"Config",description:"Config file",source:"@site/docs/banking/config.md",sourceDirName:"banking",slug:"/banking/config",permalink:"/docs/banking/config",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/banking/config.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Config",sidebar_label:"Config"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/banking/install"},next:{title:"Exports",permalink:"/docs/banking/exports"}},c={},l=[{value:"Config file",id:"config-file",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"banking-system",children:"Banking System"}),"\n",(0,t.jsx)(n.h2,{id:"config-file",children:"Config file"}),"\n",(0,t.jsxs)(n.p,{children:["There is also a config file in ",(0,t.jsx)(n.code,{children:"s1n_banking/server/config.lua"})," that you can modify to your liking."]}),"\n",(0,t.jsx)(n.p,{children:"For both QBCore and ESX :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'Config = Config or { }\r\n\r\n-- Set to true to show debug messages in the console\r\nConfig.debugMode = true\r\n\r\n-- This is going to be removed in a future version because s1n_lib is going to handle the framework detection\r\nConfig.Framework = {\r\n    FrameworkName  = "QBCore", -- Choose your framework: ESX or QBCore\r\n    QBCoreFileName = "qb-core", -- The name of the QBCore resource\r\n    OldESX         = false, -- Set to true if you\'re using an older version of ESX which still uses the ESX event esx:getSharedObject\r\n    ESXEvent       = "esx:getSharedObject", -- The name of the ESX event (if you\'re using an older version of ESX)\r\n    ESXFileName    = "es_extended", -- The name of the ESX resource\r\n    SQLWrapper     = "oxmysql"\r\n}\r\n\r\n-- You need to verify that the following scripts are exactly named like this or change the names here\r\nConfig.ExportNames = {\r\n    -- FOR QBCore ONLY\r\n    qbManagement = "qb-management",\r\n    qbTarget     = "qb-target",\r\n\r\n    -- For both ESX and QBCore\r\n    oxTarget     = "ox_target",\r\n\r\n    -- Dependencies\r\n    s1nLib       = "s1n_lib"\r\n}\r\n\r\n-- List of all the available keys : https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/keyboard/\r\nConfig.Keys = {\r\n    -- If you\'re not using a target script, you can set the key to open the bank menu here\r\n    OpenUI = {\r\n        -- Refer to the first comment to see the list of all the available keys\r\n        Key         = "E",\r\n        -- Distance from the location position (if it\'s a bank) otherwise from the ATM position\r\n        UseDistance = 1.0\r\n    }\r\n}\r\n\r\n-- Set to false if you don\'t want to use ox-target\r\nConfig.UseOxTarget = false\r\n\r\n-- Set to true if you want to use qb-target\r\nConfig.UseQBTarget = false\r\n\r\n-- Set to true to enable the bank card item feature\r\nConfig.CreditCardCheck = false\r\n\r\n-- <!> THIS FEATURE IS STILL IN DEVELOPMENT, NOT FONCTIONNAL YET <!>\r\n-- CreditCardCheck needs to be set to true to use this feature\r\nConfig.CreditCardGive = {\r\n    -- Set to true to give the player a bank card when they create a bank account if they don\'t have one\r\n    OnCreate = true\r\n}\r\n\r\n-- If CreditCardCheck is set to true, this is the name of the item that will be used to check if the player has a bank card\r\nConfig.CreditCardItem = "creditcard"\r\n\r\n-- List of the ATM models that will be used to open the bank menu\r\nConfig.AtmModels = { \'prop_atm_02\', \'prop_atm_03\', \'prop_fleeca_atm\' }\r\n\r\n-- List of the bank locations that will be used to open the bank menu\r\nConfig.BankLocations = {\r\n    -- First bank\r\n    {\r\n        -- The position of the blip and marker (where you interact)\r\n        Position = vector3(-1212.685669, -330.764832, 37.772217),\r\n        -- Managing the bank blip\r\n        Blip     = {\r\n            -- Set to false to disable the blip\r\n            Active     = true,\r\n            -- The sprite ID of the blip (https://docs.fivem.net/docs/game-references/blips/)\r\n            Sprite     = 108,\r\n            -- The color ID of the blip (https://docs.fivem.net/docs/game-references/blips/)\r\n            Color      = 2,\r\n            -- The scale of the blip\r\n            Scale      = 1.0,\r\n            -- The name of the blip\r\n            Label      = "Bank",\r\n            -- Sets whether or not the blip should only be displayed when nearby, or on the minimap.\r\n            ShortRange = true\r\n        },\r\n        -- Managing the bank marker\r\n        Marker   = {\r\n            -- Set to false to disable the marker\r\n            Active       = true,\r\n            Distance     = 1.0,\r\n            Type         = 2,\r\n            Rotation     = { 0.0, 180.0, 0.0 },\r\n            Scale        = 0.4,\r\n            Color        = { R = 222, G = 186, B = 77, A = 255 },\r\n            BobUpAndDown = true,\r\n            FaceCamera   = true,\r\n        },\r\n        -- Managing the bank ped\r\n        Ped      = {\r\n            -- Set to true to show a ped\r\n            Active   = false,\r\n            -- The model of the ped (https://docs.fivem.net/docs/game-references/ped-models/)\r\n            Model    = "a_m_m_indian_01",\r\n            -- The position of the ped\r\n            Position = vector3(-1212.07, -332.02, 37.78 - 1.0),\r\n            -- The heading of the ped\r\n            Heading  = 24.0\r\n        }\r\n    },\r\n    -- Second bank (EXAMPLE)\r\n    {\r\n        -- The position of the blip and marker (where you interact)\r\n        Position = vector3(-1412.685669, -330.764832, 37.772217),\r\n        -- Managing the bank blip\r\n        Blip     = {\r\n            -- Set to false to disable the blip\r\n            Active     = true,\r\n            -- The sprite ID of the blip (https://docs.fivem.net/docs/game-references/blips/)\r\n            Sprite     = 108,\r\n            -- The color ID of the blip (https://docs.fivem.net/docs/game-references/blips/)\r\n            Color      = 2,\r\n            -- The scale of the blip\r\n            Scale      = 1.0,\r\n            -- The name of the blip\r\n            Label      = "Bank",\r\n            -- Sets whether or not the blip should only be displayed when nearby, or on the minimap.\r\n            ShortRange = true\r\n        },\r\n        -- Managing the bank marker\r\n        Marker   = {\r\n            -- Set to false to disable the marker\r\n            Active       = true,\r\n            Distance     = 1.0,\r\n            Type         = 2,\r\n            Rotation     = { 0.0, 180.0, 0.0 },\r\n            Scale        = 0.4,\r\n            Color        = { R = 222, G = 186, B = 77, A = 255 },\r\n            BobUpAndDown = true,\r\n            FaceCamera   = true,\r\n        },\r\n        -- Managing the bank ped\r\n        Ped      = {\r\n            -- Set to true to show a ped\r\n            Active   = false,\r\n            -- The model of the ped (https://docs.fivem.net/docs/game-references/ped-models/)\r\n            Model    = "a_m_m_indian_01",\r\n            -- The position of the ped\r\n            Position = vector3(-1212.07, -332.02, 37.78 - 1.0),\r\n            -- The heading of the ped\r\n            Heading  = 24.0\r\n        }\r\n    }\r\n}\r\n\r\n-- Credit feature\r\nConfig.Credit = {\r\n    -- Set to false to disable the credit feature\r\n    Active          = true,\r\n    -- Default amounts that can be directly selected in the menu\r\n    Amounts         = { 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 150000, 200000, 500000 },\r\n    -- Percentage of the loan that will be required as a security deposit\r\n    SecurityDeposit = 25,\r\n    -- Different credit durations that can be selected in the menu\r\n    Duration        = {\r\n        { Label = "1 week", Time = 60 * 60 * 24 * 7 },\r\n        { Label = "2 weeks", Time = 60 * 60 * 24 * 14 },\r\n        { Label = "1 month", Time = 60 * 60 * 24 * 30 },\r\n        { Label = "3 months", Time = 60 * 60 * 24 * 90 }\r\n    },\r\n}\r\n\r\n-- Configuration to access a society account\r\nConfig.SocietyRanks = {\r\n    -- Job name (Needs to be the EXACT (including uppercase, lowercase) name of the job)\r\n    ["police"] = {\r\n        -- Job grades (Needs to be the EXACT name of the job grade)\r\n        -- Create: Set to true to allow the player to create a society account\r\n        -- Login: Set to true to allow the player to access the society account (if the account is already created)\r\n        ["chief"]      = { Create = true, Login = true },\r\n        ["lieutenant"] = { Create = false, Login = true },\r\n        ["sergeant"]   = { Create = false, Login = true }\r\n    }\r\n}\r\n\r\n-- IBAN prefix added to the IBAN when creating a new account\r\nConfig.IbanPrefix = "US0"\r\n\r\nConfig.Timeouts = {\r\n    -- The time in milliseconds after which the player won\'t be able to accept a shared account invite sent by another player\r\n    AcceptSharedAccountInvite = 2 * 60 * 1000\r\n}\r\n\r\n-- The maximum amount that can be deposited, transfered or withdrawn in a single transaction\r\nConfig.MaxAmountPerTransaction = 10000000\n'})})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>i});var t=r(7294);const o={},a=t.createContext(o);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);