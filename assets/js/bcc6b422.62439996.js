"use strict";(self.webpackChunkdocs_s_1_nscripts_com=self.webpackChunkdocs_s_1_nscripts_com||[]).push([[9466],{9465:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var t=r(5893),o=r(1151);const a={sidebar_position:1,title:"Config",sidebar_label:"Config"},s="Government System",i={id:"government/config",title:"Config",description:"Config file",source:"@site/docs/government/config.md",sourceDirName:"government",slug:"/government/config",permalink:"/docs/government/config",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/government/config.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Config",sidebar_label:"Config"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/government/install"},next:{title:"Config",permalink:"/docs/npcplacer/config"}},u={},m=[{value:"Config file",id:"config-file",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"government-system",children:"Government System"}),"\n",(0,t.jsx)(n.h2,{id:"config-file",children:"Config file"}),"\n",(0,t.jsx)(n.p,{children:"For both QBCore and ESX :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'--\r\n-- WELCOME !\r\n-- First of all, thank you for using my script. I hope you will enjoy it.\r\n-- This is a configuration file, you can modify some parts of the script here.\r\n--\r\n-- It is important to read the comments to understand what you are doing and what you can do.\r\n--\r\n\r\n-- To modify the loaded translation file, please go to the \'fxmanifest.lua\' file and modify the \'languages/english.lua\' file to the language you want to use.\r\n\r\nConfig = {}\r\n\r\n-- Set this variable to true if you want to enable debug mode (for developers and support)\r\nConfig.DebugMode = true\r\n\r\n-- Framework settings\r\nConfig.Framework = {\r\n    -- If you use ESX, you need to set this to \'ESX\'\r\n    -- If you use QBCore, you need to set this to \'QBCore\'\r\n    FrameworkName = "QBCore",\r\n    -- The name of the QBCore resource, this is only used if you use QBCore\r\n    QBCoreFileName = "qb-core",\r\n    -- Set to true if you use the old ESX (not ESX Legacy)\r\n    OldESX = false,\r\n    -- If you use the old ESX, define the event name here to get the ESX object (by default it\'s \'esx:getSharedObject\')\r\n    ESXEvent = "esx:getSharedObject",\r\n    -- The name of the ESX resource, this is only used if you use ESX\r\n    ESXFileName = "es_extended"\r\n}\r\n\r\n-- Scripts names for the exports\r\nConfig.ExportNames = {\r\n    s1nLib = "s1n_lib",\r\n    \r\n    oxTarget = "ox_target",\r\n    qbTarget = "qb-target"\r\n}\r\n\r\n-- Dependencies settings\r\nConfig.Dependencies = {\r\n    -- You need to set to true which target script you are using\r\n\r\n    oxTarget = true,\r\n    qbTarget = false\r\n}\r\n\r\n-- Set the interval in minutes to check for business tax due and remove it from the society account\r\nConfig.IntervalBusinessTaxCheck = 10\r\n\r\n-- These are the groups that have access to the commands\r\nConfig.AdminGroups = {\r\n    -- Example:\r\n    --\r\n    -- Only modify "groupName" by the name of the group you want to give access to the commands\r\n    -- ["groupName"] = true,\r\n\r\n    ["admin"] = true,\r\n    ["god"] = true,\r\n}\r\n\r\n-- These are the peds that will be created\r\nConfig.Peds = {\r\n    -- Here are all the features that you can use in the \'features\' table\r\n    -- ["TaxationSystem"] = true,\r\n    -- ["AppointmentSystem"] = true,\r\n    -- ["EnterpriseManagement"] = true,\r\n    -- ["AnnouncementSystem"] = true,\r\n    -- ["DefconManagement"] = true,\r\n    -- ["FundsSystem"] = true,\r\n    -- ["AppointmentSystemNormal"] = true,\r\n    -- ["VotingSystem"] = true,\r\n\r\n    {\r\n        -- Set this to true if you want to make this ped only available to the government job\r\n        jobOnly = true,\r\n        -- The model of the ped\r\n        model = "a_m_m_business_01",\r\n        -- The coordinates of the ped\r\n        coords = vector4(1706.21, 3790.58, 34.77 - 1, 106.69),\r\n        -- The features of the ped\r\n        features = {\r\n            ["TaxationSystem"] = true,\r\n            ["AppointmentSystem"] = true,\r\n            ["EnterpriseManagement"] = true,\r\n            ["AnnouncementSystem"] = true,\r\n            ["DefconManagement"] = true,\r\n            ["FundsSystem"] = true\r\n        }\r\n    },\r\n    {\r\n        -- Set this to true if you want to make this ped only available to the government job\r\n        jobOnly = false,\r\n        -- The model of the ped\r\n        model = "a_m_m_business_01",\r\n        -- The coordinates of the ped\r\n        coords = vector4(1698.81, 3784.57, 34.77 - 1, 211.1),\r\n        -- The features of the ped\r\n        features = {\r\n            ["AppointmentSystemNormal"] = true,\r\n        }\r\n    },\r\n    {\r\n        -- Set this to true if you want to make this ped only available to the government job\r\n        jobOnly = false,\r\n        -- The model of the ped\r\n        model = "a_m_m_business_01",\r\n        -- The coordinates of the ped\r\n        coords = vector4(1700.22, 3785.53, 34.77 - 1, 219.66),\r\n        -- The features of the ped\r\n        features = {\r\n            ["VotingSystem"] = true,\r\n        }\r\n    }\r\n}\r\n\r\n-- These are the grades that you can use in the government job\r\n-- You can add as many grades as you want\r\nConfig.Grades = {\r\n    -- Example:\r\n    -- TODO: Add an example\r\n\r\n    ["1"] = {\r\n        -- The name of the grade\r\n        name = "Governor",\r\n        -- The features that the grade has access to\r\n        access = {\r\n            ["TaxationSystem"] = true,\r\n            ["AppointmentSystem"] = true,\r\n            ["EnterpriseManagement"] = true,\r\n            ["AnnouncementSystem"] = true,\r\n            ["DefconManagement"] = true,\r\n            ["FundsSystem"] = true,\r\n        },\r\n        -- The salary of the grade\r\n        salary = 500\r\n    },\r\n    ["2"] = {\r\n        -- The name of the grade\r\n        name = "Secretary of State",\r\n        -- The features that the grade has access to\r\n        access = {\r\n            ["AppointmentSystem"] = true,\r\n            ["AnnouncementSystem"] = true,\r\n        },\r\n        -- The salary of the grade\r\n        salary = 500\r\n    },\r\n    ["3"] = {\r\n        -- The name of the grade\r\n        name = "Treasurer",\r\n        -- The features that the grade has access to\r\n        access = {\r\n            ["TaxationSystem"] = true,\r\n            ["FundsSystem"] = true,\r\n        },\r\n        -- The salary of the grade\r\n        salary = 500\r\n    },\r\n    ["4"] = {\r\n        -- The name of the grade\r\n        name = "Government Agent",\r\n        -- The features that the grade has access to\r\n        access = {},\r\n        -- The salary of the grade\r\n        salary = 500\r\n    }\r\n}\r\n\r\n-- Settings for the automatic voting system\r\n-- The automatic voting system is a system that allows players to vote for a candidate.\r\nConfig.Voting = {\r\n    -- Set this to true if you want to enable the automatic voting system\r\n    enabled = true,\r\n\r\n    -- If set this to true, people already in the government job can\'t present themselves\r\n    alreadyGov = false,\r\n\r\n    -- The durations of the voting system for each stage\r\n    durations = {\r\n\r\n        ["1"] = {\r\n            present = 10,\r\n            voting = 10,\r\n            draw = false\r\n        },\r\n        ["2"] = {\r\n            present = 10,\r\n            voting = 10,\r\n            draw = false\r\n        },\r\n        ["3"] = { present = 10, voting = 10, draw = false },\r\n        ["4"] = { present = 10, voting = 10, draw = false }\r\n    }\r\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>s});var t=r(7294);const o={},a=t.createContext(o);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);