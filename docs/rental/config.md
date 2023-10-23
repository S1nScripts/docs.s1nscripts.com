---
sidebar_position: 1
title: Config
sidebar_label: Config
---

# Vehicle Rental 
## Config file

For ESX:
```lua
--[[
    Need help with the script ? Go into the support Discord https://discord.gg/aKF3DX8yPx
    A verification that you bought the script will be necessary.
]]


Config = {
    debugMode = true, -- Set to true to enable debug logs
    useESXExport = false, -- Set to true if you are using ESX Legacy
    rentalTime = { -- Define the minimum and maximum rental time in minutes (for the selection in the User Interface)
        max = 24 * 60, -- 1 day in minutes
        min = 1 -- 1 minute
    },
    triggers = {
        getESX = "esx:getSharedObject" -- Change it only if you changed it in es_extended and not using ESX Legacy
    },
    rentalNPCs = { -- List of all rental NPCs
        {
            type = "wheels", -- DO NOT CHANGE unless you know what you're doing !
            useDistance = 5, -- Distance to use the NPC
            position = vector3(-1030.25, -2734.35, 20.17), -- Position of the NPC (x, y, z)
            heading = 337.4, -- Heading of the NPC
            blip = { -- Blip settings for the NPC
                sprite = 225, -- Blip sprite (see https://docs.fivem.net/docs/game-references/blips/)
                text = "Cars, Motorcycles, Trucks Rental", -- Blip text
                color = 0 -- Blip color (see https://docs.fivem.net/docs/game-references/blips/#blip-colors)
            },
            subRentals = { -- List of all sub-rentals for this NPC type
                ["car"] = { -- Do not change the name of this sub-rental unless you know what you're doing !
                    costPerMinute = 100, -- Cost per minute of rental
                    models = { -- List of models, copy/paste examples and do not change the '= true,'
                        ["adder"] = true,
                        ["banshee"]= true,
                    },
                    spawnVehicle = { -- Spawn position of the vehicle
                        position = vector3(-1024.64, -2735.91, 19.64), -- Position of the vehicle (x, y, z)
                        heading = 241.08, -- Heading of the vehicle
                    }
                },
                ["motorcycle"] = { -- Do not change the name of this sub-rental unless you know what you're doing !
                    costPerMinute = 50,
                    models = {
                        ["akuma"] = true,
                        ["bagger"] = true,
                    },
                    spawnVehicle = {
                        position = vector3(-1024.64, -2735.91, 19.64),
                        heading = 241.08,
                    }
                },
                ["truck"] = { -- Do not change the name of this sub-rental unless you know what you're doing !
                    costPerMinute = 50,
                    models = {
                        ["benson"] = true,
                        ["biff"] = true,
                    },
                    spawnVehicle = {
                        position = vector3(-1024.64, -2735.91, 19.64),
                        heading = 241.08,
                    }
                },
            }
        },
        { -- Refer to the first NPC comments for the explanations of the fields
            type = "boat",
            useDistance = 5,
            position = vector3(-788.47, -1490.02, 1.6),
            heading = 262.86,
            blip = {
                sprite = 410,
                text = "Boats Rental",
                color = 0
            },
            costPerMinute = 50,
            models = {
                ["dinghy"] = true,
                ["dinghy2"] = true,
            },
            spawnVehicle = {
                position = vector3(-801.47, -1484.3, 4.02),
                heading = 118.6
            }
        },
        { -- Refer to the first NPC comments for the explanations of the fields
            type = "plane",
            useDistance = 5,
            position = vector3(-988.5, -2994.1, 13.95),
            heading = 60.49,
            blip = {
                sprite = 16,
                text = "Planes Rental",
                color = 0
            },
            costPerMinute = 100,
            models = {
                ["dodo"] = true,
                ["duster"] = true,
            },
            spawnVehicle = {
                position = vector3(-1009.41, -2981.31, 13.95),
                heading = 59.84
            }
        },
        { -- Refer to the first NPC comments for the explanations of the fields
            type = "helicopter",
            useDistance = 5,
            position = vector3(-1126.81, -2875.22, 13.95),
            heading = 236.78,
            blip = {
                sprite = 43,
                text = "Helicopters Rental",
                color = 0
            },
            costPerMinute = 100,
            models = {
                ["buzzard"] = true,
                ["buzzard2"] = true,
            },
            spawnVehicle = {
                position = vector3(-1112.19, -2883.89, 13.95),
                heading = 328.41
            }
        },
    }
}
```

For QBCore:
```lua
--[[
    Need help with the script ? Go into the support Discord https://discord.gg/aKF3DX8yPx
    A verification that you bought the script will be necessary.
]]


Config = {
    debugMode = true, -- Set to true to enable debug logs
    oldQBCoreVersion = false, -- Set to true if you're using an old version of QBCore using GetSharedObject()
    rentalTime = { -- Define the minimum and maximum rental time in minutes (for the selection in the User Interface)
        max = 24 * 60, -- 1 day in minutes
        min = 1 -- 1 minute
    },
    rentalNPCs = { -- List of all rental NPCs
        {
            type = "wheels", -- DO NOT CHANGE unless you know what you're doing !
            useDistance = 5, -- Distance to use the NPC
            position = vector3(-1030.25, -2734.35, 20.17), -- Position of the NPC (x, y, z)
            heading = 337.4, -- Heading of the NPC
            blip = { -- Blip settings for the NPC
                sprite = 225, -- Blip sprite (see https://docs.fivem.net/docs/game-references/blips/)
                text = "Cars, Motorcycles, Trucks Rental", -- Blip text
                color = 0 -- Blip color (see https://docs.fivem.net/docs/game-references/blips/#blip-colors)
            },
            subRentals = { -- List of all sub-rentals for this NPC type
                ["car"] = { -- Do not change the name of this sub-rental unless you know what you're doing !
                    costPerMinute = 100, -- Cost per minute of rental
                    models = { -- List of models, copy/paste examples and do not change the '= true,'
                        ["adder"] = true,
                        ["banshee"]= true,
                    },
                    spawnVehicle = { -- Spawn position of the vehicle
                        position = vector3(-1024.64, -2735.91, 19.64), -- Position of the vehicle (x, y, z)
                        heading = 241.08, -- Heading of the vehicle
                    }
                },
                ["motorcycle"] = { -- Do not change the name of this sub-rental unless you know what you're doing !
                    costPerMinute = 50,
                    models = {
                        ["akuma"] = true,
                        ["bagger"] = true,
                    },
                    spawnVehicle = {
                        position = vector3(-1024.64, -2735.91, 19.64),
                        heading = 241.08,
                    }
                },
                ["truck"] = { -- Do not change the name of this sub-rental unless you know what you're doing !
                    costPerMinute = 50,
                    models = {
                        ["benson"] = true,
                        ["biff"] = true,
                    },
                    spawnVehicle = {
                        position = vector3(-1024.64, -2735.91, 19.64),
                        heading = 241.08,
                    }
                },
            }
        },
        { -- Refer to the first NPC comments for the explanations of the fields
            type = "boat",
            useDistance = 5,
            position = vector3(-788.47, -1490.02, 1.6),
            heading = 262.86,
            blip = {
                sprite = 410,
                text = "Boats Rental",
                color = 0
            },
            costPerMinute = 50,
            models = {
                ["dinghy"] = true,
                ["dinghy2"] = true,
            },
            spawnVehicle = {
                position = vector3(-801.47, -1484.3, 4.02),
                heading = 118.6
            }
        },
        { -- Refer to the first NPC comments for the explanations of the fields
            type = "plane",
            useDistance = 5,
            position = vector3(-988.5, -2994.1, 13.95),
            heading = 60.49,
            blip = {
                sprite = 16,
                text = "Planes Rental",
                color = 0
            },
            costPerMinute = 100,
            models = {
                ["dodo"] = true,
                ["duster"] = true,
            },
            spawnVehicle = {
                position = vector3(-1009.41, -2981.31, 13.95),
                heading = 59.84
            }
        },
        { -- Refer to the first NPC comments for the explanations of the fields
            type = "helicopter",
            useDistance = 5,
            position = vector3(-1126.81, -2875.22, 13.95),
            heading = 236.78,
            blip = {
                sprite = 43,
                text = "Helicopters Rental",
                color = 0
            },
            costPerMinute = 100,
            models = {
                ["buzzard"] = true,
                ["buzzard2"] = true,
            },
            spawnVehicle = {
                position = vector3(-1112.19, -2883.89, 13.95),
                heading = 328.41
            }
        },
    }
}
```