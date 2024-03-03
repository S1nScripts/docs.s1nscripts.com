"use strict";(self.webpackChunkdocs_s_1_nscripts_com=self.webpackChunkdocs_s_1_nscripts_com||[]).push([[7522],{912:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var o=t(5893),i=t(1151);const a={sidebar_position:1,title:"Config",sidebar_label:"Config"},s="NPC Placer",r={id:"npcplacer/config",title:"Config",description:"Config file",source:"@site/docs/npcplacer/config.md",sourceDirName:"npcplacer",slug:"/npcplacer/config",permalink:"/docs/npcplacer/config",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/npcplacer/config.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Config",sidebar_label:"Config"},sidebar:"docs",previous:{title:"Common issues",permalink:"/docs/banking/common-issues"}},p={},l=[{value:"Config file",id:"config-file",level:2}];function c(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"npc-placer",children:"NPC Placer"}),"\n",(0,o.jsx)(e.h2,{id:"config-file",children:"Config file"}),"\n",(0,o.jsx)(e.p,{children:"Standalone:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-lua",children:'--[[\n    Need help with the script ? Go into the Discord support server  https://discord.gg/aKF3DX8yPx\n]]\n\nConfig = {\n    npcs = {\n        --[[\n            Template:\n            {\n                position = vector4(x, y, z, heading), -- NPC position X, Y, Z, Heading\n                model = "modelName", -- NPC model (here is a list of all models https://wiki.rage.mp/index.php?title=Peds)\n                animation = { -- Animation list : https://s1nyx.github.io/animations-list/ (dict in bold, animation name in regular)\n                    enable = true, -- Activate the animation for the NPC\n                    dict = "dictName", -- Dictionary associated to the animation\n                    name = "animationName" -- Animation\'s name\n                },\n                props = {\n                    enable = true, -- Activate the use of a prop for the NPC\n                    list = {\n                        {\n                            model = "propName", -- Model of the prop\n                            position = vec3(x, y, z), -- Position of the prop relative to the NPC\n                            rotation = vec3(x, y, z) -- Rotation of the prop relative to the NPC\n                        },\n                    }\n                }\n            },\n        ]]\n        {\n            position = vector4(461.288, -1691.799, 29.28, 225.0), -- NPC position X, Y, Z, Heading\n            model = "csb_trafficwarden", -- NPC model (here is a list of all models https://wiki.rage.mp/index.php?title=Peds)\n            animation = { -- Animation list : https://s1nyx.github.io/animations-list/ (dict in bold, animation name in regular)\n                enable = true, -- Activate the animation for the NPC\n                dict = "mp_player_intdrink", -- Dictionary associated to the animation\n                name = "loop_bottle" -- Animation\'s name\n            },\n            props = {\n                enable = true, -- Activate the use of a prop for the NPC\n                list = {\n                    {\n                        model = "prop_ld_flow_bottle", -- Model of the prop\n                        position = vec3(0.01, 0.01, 0.01), -- Position of the prop relative to the NPC\n                        rotation = vec3(0.0, 0.0, -1.5) -- Rotation of the prop relative to the NPC\n                    },\n                }\n            }\n        },\n        {\n            position = vector4(459.71, -1691.42, 29.28, 319.87), -- NPC position X, Y, Z, Heading\n            model = "ig_andreas", -- NPC model (here is a list of all models https://wiki.rage.mp/index.php?title=Peds)\n            animation = { -- Animation list : https://s1nyx.github.io/animations-list/ (dict in bold, animation name in regular)\n                enable = true, -- Activate the animation for the NPC\n                dict = "amb@world_human_drinking@coffee@male@base", -- Dictionary associated to the animation\n                name = "base" -- Animation\'s name\n            },\n            props = {\n                enable = true, -- Activate the use of a prop for the NPC\n                list = {\n                    {\n                        model = "p_amb_brolly_01", -- Model of the prop\n                        bone = 57005, -- Bone associated to the prop\n                        position = vec3(0.15, 0.005, 0.0), -- Position of the prop relative to the NPC\n                        rotation = vec3(87.0, -20.0, 180.0) -- Rotation of the prop relative to the NPC\n                    },\n                }\n            }\n        },\n        {\n            position = vector4(458.3, -1690.5, 29.28, 343.25), -- NPC position X, Y, Z, Heading\n            model = "s_m_y_airworker", -- NPC model (here is a list of all models https://wiki.rage.mp/index.php?title=Peds)\n            animation = { -- Animation list : https://s1nyx.github.io/animations-list/ (dict in bold, animation name in regular)\n                enable = true, -- Activate the animation for the NPC\n                dict = "missheistdockssetup1clipboard@base", -- Dictionary associated to the animation\n                name = "base" -- Animation\'s name\n            },\n            props = {\n                enable = true, -- Activate the use of a prop for the NPC\n                list = {\n                    {\n                        model = "prop_notepad_01", -- Model of the prop\n                        bone = 18905, -- Bone associated to the prop\n                        position = vec3(0.1, 0.02, 0.05), -- Position of the prop relative to the NPC\n                        rotation = vec3(10.0, 0.0, 0.0) -- Rotation of the prop relative to the NPC\n                    },\n                    {\n                        model = "prop_pencil_01", -- Model of the prop\n                        bone = 58866, -- Bone associated to the prop\n                        position = vec3(0.11, -0.02, 0.001), -- Position of the prop relative to the NPC\n                        rotation = vec3(-120.0, 0.0, 0.0) -- Rotation of the prop relative to the NPC\n                    },\n                }\n            }\n        },\n    }\n}\n'})})]})}function d(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(c,{...n})}):c(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>r,a:()=>s});var o=t(7294);const i={},a=o.createContext(i);function s(n){const e=o.useContext(a);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),o.createElement(a.Provider,{value:e},n.children)}}}]);