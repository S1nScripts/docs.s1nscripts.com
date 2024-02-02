---
sidebar_position: 1
title: Config
sidebar_label: Config
---

# Garage
## Config file

There is also a config file in `s1n_garage/sv_config.lua` that you can modify to your liking.

ESX:
```lua
--[[
    Need help with the script ? Go into the support Discord https://discord.gg/aKF3DX8yPx
    A verification that you bought the script will be necessary.

    IMPORTANT:
    For all Y positions, you need to remove 1 in order to have the correct position of your player's feet. If it's not correct, there will be problems.
]]

Sinyx = {}


Sinyx.GarageSystem = {
    debugMode = true, -- Create messages on F8 (client-side) and the terminal (server-side) in order to verify the script's logic. Requires for developers.
    useImpoundSystem = true, -- If you use my impound system set this to true in order to avoid conflict.
    teleportToGarageExitOnDisconnect = true, -- If someone disconnect from the server in a garage, set to true will teleport him to the nearest garage exit.
    ESXMode = "legacy", -- legacy = ESX Legacy, old = ESX Old
    triggers = { -- Triggers names, check with yours if they are the same.
        getESX = "esx:getSharedObject"
    },
    discord = {
        enable = false, -- true = enable discord integration, false = disable discord integration
        webhookURL = "",
        username = "S1n_garages Logs",
        color = 15844367,
        title = "Player log"
    },
    npcs = { -- List of NPCs
        {
            position = vector3(109.24, -636.58, 44.24), -- Position of the NPC
            heading = 71.00, -- Heading of the NPC
            model = "csb_reporter", -- Model of the NPC
            useDistance = 2.0, -- Distance between the Player and the NPC in order to interact with it.

            blipColor = 69, -- Color of the blip (on the map)
            blipSprite = 369, -- Sprite of the blip (on the map), list of all blips : https://docs.fivem.net/docs/game-references/blips/
            blipText = "Garage seller" -- Text of the blip (on the map)
        },
    },
    --[[
        IMPORTANT:
        The [id] = {name, price..} is crucial. The id represent the garage, do not modify it or the player's will have different garages.
        When you add a garage, add 1 to the id in order to increase it. Look at the examples below.

        To help you create garages, GTA default garages positions are:
        2 places: 179.08 -1001.49 -99.0
        6 places: 206.25 -1018.36 -99.0
        8 places: 240.55 -1004.81 -98.98
        Many places (+10): 1581.1120 -567.2450 85.5
    ]]
    garages = { -- 2 Examples of differents types of GTA garages
        [1] = { -- ID of the garage
            name = "47 Grove Polow", -- Name of the garage
            price = 2500, -- Price of the garage
            salePourcentage = 0.2, -- Percentage of the sale that the player will receive. (0.2 means he will get 20% of the purchase price of the garage)

            friendlyfire = false, -- false = you will be invincible in the garage, true = the opposite

            blipPosition = vector3(37.13, -907.6, 30.92), -- Blip position of the garage (on the map)
            blipText = "Garage - 2 places", -- Blip text of the garage (on the map)
            blipColor = 5, -- Blip color of the garage (on the map)
            blipSprite = 357, -- Blip sprite of the garage (on the map)

            -- IMPORTANT: Always keep the decimal numbers otherwise it won't work
            camera = {position = vector3(40.9, -892.58, 33.69), heading = 168.1}, -- Camera position in the menu

            spawnCoords = {position = vector3(179.08, -1001.49, -99.0), heading = 177.15}, -- Spawn position in the garage
            leaveSpawnCoords = {position = vector3(41.07, -899.18, 29.98), heading = 353.69}, -- Exit garage position with or without vehicle (keep it in mind, you must have enough spaces)

            -- IMPORTANT: be careful with the positions in order to verify that all types of vehicle can spawn !
            vehiclePositions = { -- Number of positions is related to the number of places in the garage
                {position = vector3(174.94, -1004.14, -99.00), heading = 182.46}, -- Position of a vehicle
                {position = vector3(171.71, -1004.23, -99.00), heading = 182.46}, -- Position of a vehicle
            },

            inviteFriends = {
                areaPosition = vector3(38.51, -901.61, 29.99), -- Position where you want the friends to be before you invite them to your garage
                areaDetectPlayers = 30.0, -- Area around the position in order to detect players who wants to got into your garage when they being invited.
            },

            manageGarage = { -- All information about the marker to manage the garage (sell and invite friends)
                marker = {
                    type = 20, -- Marker type (see https://docs.fivem.net/docs/game-references/markers/ for the list)
                    useDistance = 1.5, -- Distance between the Player and the marker in order to interact with it.
                    size = vector3(1.5, 1.5, 1.0), -- Size of the marker in X, Y, Z size
                    color = vector3(120, 120, 240), -- Color of the marker in R, G, B
                    position = vector3(177.03, -1008.2, -99.0) -- Position of the marker
                }
            },

            whitelistVehicles = { -- Want to just whitelist certain vehicles for a specific garage ? It's here !
                enable = false, -- false = whitelist system disable, true = whitelist system enable
                vehicles = { -- whitelist vehicles list with hash (a hash is the number that represents the vehicle)
                    [5599877] = true, -- Follow this example and replace the 5599877 by your hash
                }
            },

            blackListVehicles = { -- Hash list of vehicles blacklist from the garage, a hash is the number that represents the vehicle
                [5599877] = true, -- Follow this example and replace the 5599877 by your hash
            }
        },

        [2] = { -- ID of the garage
            name = "126 Pressing Glow", -- Name of the garage
            price = 1500, -- Price of the garage
            salePourcentage = 0.2, -- Percentage of the sale that the player will receive. (0.2 means he will get 20% of the purchase price of the garage)

            friendlyfire = false, -- false = you will be invincible in the garage, true = the opposite

            blipPosition = vector3(-70.68, -1822.7, 26.94), -- Blip position of the garage (on the map)
            blipText = "Garage - 6 places", -- Blip text of the garage (on the map)
            blipColor = 5, -- Blip color of the garage (on the map)
            blipSprite = 357, -- Blip sprite of the garage (on the map)

            -- IMPORTANT: Always keep the decimal numbers otherwise it won't work
            camera = {position = vector3(-64.6, -1836.39, 30.85), heading = 27.17}, -- Camera position in the menu

            spawnCoords = {position = vector3(207.18, -1018.33, -99.0), heading = 100.0}, -- Spawn position in the garage
            leaveSpawnCoords = {position = vector3(-64.68, -1832.71, 26.87), heading = 229.11}, -- Exit garage position with or without vehicle (keep it in mind, you must have enough spaces)

            -- IMPORTANT: be careful with the positions in order to verify that all types of vehicle can spawn !
            vehiclePositions = { -- Number of positions is related to the number of places in the garage
                {position = vector3(193.09, -1016.6, -99.3), heading = 180.0}, -- Position of a vehicle
                {position = vector3(193.09, -1023.66, -99.3), heading = 180.0}, -- Position of a vehicle
                {position = vector3(197.86, -1023.66, -99.3), heading = 180.0}, -- Position of a vehicle
                {position = vector3(197.86, -1016.6, -99.3), heading = 180.0}, -- Position of a vehicle
                {position = vector3(203.39, -1016.6, -99.3), heading = 180.0}, -- Position of a vehicle
                {position = vector3(203.39, -1023.54, -99.3), heading = 180.0}, -- Position of a vehicle
            },

            inviteFriends = {
                areaPosition = vector3(-70.68, -1822.7, 26.94), -- Position where you want the friends to be before you invite them to your garage
                areaDetectPlayers = 30.0, -- Area around the position in order to detect players who wants to got into your garage when they being invited.
            },

            manageGarage = { -- All information about the marker to manage the garage (sell and invite friends)
                marker = {
                    type = 20, -- Marker type (see https://docs.fivem.net/docs/game-references/markers/ for the list)
                    useDistance = 1.5, -- Distance between the Player and the marker in order to interact with it.
                    size = vector3(1.5, 1.5, 1.0), -- Size of the marker in X, Y, Z size
                    color = vector3(120, 120, 240), -- Color of the marker in R, G, B
                    position = vector3(200.51, -1013.96, -99.0) -- Position of the marker
                }
            },

            whitelistVehicles = { -- Want to just whitelist certain vehicles for a specific garage ? It's here !
                enable = false, -- false = whitelist system disable, true = whitelist system enable
                vehicles = { -- whitelist vehicles list with hash (a hash is the number that represents the vehicle)
                    [5599877] = true, -- Follow this example and replace the 5599877 by your hash
                }
            },

            blackListVehicles = { -- Hash list of vehicles blacklist from the garage, a hash is the number that represents the vehicle
                [5599877] = true, -- Follow this example and replace the 5599877 by your hash
            }
        },

        [3] = { -- ID of the garage
            name = "56 Polovis Street", -- Name of the garage
            price = 4500, -- Price of the garage
            salePourcentage = 0.2, -- Percentage of the sale that the player will receive. (0.2 means he will get 20% of the purchase price of the garage)

            friendlyfire = false, -- false = you will be invincible in the garage, true = the opposite

            blipPosition = vector3(-791.63, 335.57, 85.7), -- Blip position of the garage (on the map)
            blipText = "Garage - 12 places", -- Blip text of the garage (on the map)
            blipColor = 5, -- Blip color of the garage (on the map)
            blipSprite = 357, -- Blip sprite of the garage (on the map)

            -- IMPORTANT: Always keep the decimal numbers otherwise it won't work
            camera = {position = vector3(-803.84, 289.15, 90.1), heading = 339.35}, -- Camera position in the menu

            spawnCoords = {position = vector3(240.32, -1004.86, -99.0), heading = 86.0}, -- Spawn position in the garage
            leaveSpawnCoords = {position = vector3(-800.42, 332.03, 85.7), heading = 178.0}, -- Exit garage position with or without vehicle (keep it in mind, you must have enough spaces)

            -- IMPORTANT: be careful with the positions in order to verify that all types of vehicle can spawn !
            vehiclePositions = { -- Number of positions is related to the number of places in the garage
                {position = vector3(233.24, -1000.41, -99.71), heading = 122.3}, -- Position of a vehicle
                {position = vector3(233.42, -996.62, -99.71), heading = 122.3}, -- Position of a vehicle
                {position = vector3(233.09, -992.64, -99.71), heading = 122.3}, -- Position of a vehicle
                {position = vector3(233.57, -988.52, -99.71), heading = 122.3}, -- Position of a vehicle
                {position = vector3(233.24, -984.4, -99.71), heading = 122.3}, -- Position of a vehicle
                {position = vector3(224.49, -1000.65, -99.71), heading = 300.14}, -- Position of a vehicle
                {position = vector3(224.35, -996.83, -99.71), heading = 300.14}, -- Position of a vehicle
                {position = vector3(223.71, -992.94, -99.71), heading = 300.14}, -- Position of a vehicle
                {position = vector3(223.94, -988.64, -99.71), heading = 300.14}, -- Position of a vehicle
                {position = vector3(223.76, -984.97, -99.71), heading = 300.14}, -- Position of a vehicle
                {position = vector3(223.37, -981.01, -99.71), heading = 300.14}, -- Position of a vehicle
                {position = vector3(223.37, -977.24, -99.71), heading = 300.14}, -- Position of a vehicle
            },

            inviteFriends = {
                areaPosition = vector3(-791.63, 335.59, 85.7), -- Position where you want the friends to be before you invite them to your garage
                areaDetectPlayers = 30.0, -- Area around the position in order to detect players who wants to got into your garage when they being invited.
            },

            manageGarage = { -- All information about the marker to manage the garage (sell and invite friends)
                marker = {
                    type = 20, -- Marker type (see https://docs.fivem.net/docs/game-references/markers/ for the list)
                    useDistance = 1.5, -- Distance between the Player and the marker in order to interact with it.
                    size = vector3(1.5, 1.5, 1.0), -- Size of the marker in X, Y, Z size
                    color = vector3(120, 120, 240), -- Color of the marker in R, G, B
                    position = vector3(235.66, -1006.3, -99.0) -- Position of the marker
                }
            },

            whitelistVehicles = { -- Want to just whitelist certain vehicles for a specific garage ? It's here !
                enable = false, -- false = whitelist system disable, true = whitelist system enable
                vehicles = { -- whitelist vehicles list with hash (a hash is the number that represents the vehicle)
                    [5599877] = true, -- Follow this example and replace the 5599877 by your hash
                }
            },

            blackListVehicles = { -- Hash list of vehicles blacklist from the garage, a hash is the number that represents the vehicle
                [5599877] = true, -- Follow this example and replace the 5599877 by your hash
            }
        },
    }
}
```

QBCore:
```lua
--[[
    Need help with the script ? Go into the support Discord https://discord.gg/aKF3DX8yPx
    A verification that you bought the script will be necessary.

    IMPORTANT:
    For all Y positions, you need to remove 1 in order to have the correct position of your player's feet. If it's not correct, there will be problems.
]]

Config = {
    oldQBCoreVersion = false, -- Set to true only if you have an error like "No such export GetSharedObject in resource qb-core" 
    debugMode = false, -- Create messages on F8 (client-side) and the terminal (server-side) in order to verify the script's logic. Required for developers.
    useImpoundSystem = false, -- If you use my impound system set this to true in order to avoid conflict.
    teleportToGarageExitOnDisconnect = true, -- If someone disconnect from the server in a garage, set to true will teleport him to the nearest garage exit.
    discord = {
        enable = false, -- true = enable discord integration, false = disable discord integration
        webhookURL = "",
        username = "S1n_garages Logs",
        color = 15844367,
        title = "Player log"
    },
    npcs = { -- List of NPCs
        {
            position = vector3(109.24, -636.58, 44.24), -- Position of the NPC
            heading = 71.00, -- Heading of the NPC
            model = "csb_reporter", -- Model of the NPC
            useDistance = 2.0, -- Distance between the Player and the NPC in order to interact with it.
    
            blipColor = 69, -- Color of the blip (on the map)
            blipSprite = 369, -- Sprite of the blip (on the map), list of all blips : https://docs.fivem.net/docs/game-references/blips/
            blipText = "Garage seller" -- Text of the blip (on the map)
        }
    },
    --[[
        IMPORTANT:
        The [id] = {name, price..} is crucial. The id represent the garage, do not modify it or the player's will have different garages. 
        When you add a garage, add 1 to the id in order to increase it. Look at the examples below.

        To help you create garages, GTA default garages positions are:
        2 places: 179.08 -1001.49 -99.0
        6 places: 206.25 -1018.36 -99.0
        8 places: 240.55 -1004.81 -98.98
        Many places (+10): 1581.1120 -567.2450 85.5
    ]]
    garages = { -- 2 Examples of differents types of GTA garages
        [1] = { -- ID of the garage
            name = "47 Grove Polow", -- Name of the garage
            price = 2500, -- Price of the garage
            salePourcentage = 0.2, -- Percentage of the sale that the player will receive. (0.2 means he will get 20% of the purchase price of the garage)

            friendlyfire = false, -- false = you will be invincible in the garage, true = the opposite

            blipPosition = vector3(37.13, -907.6, 30.92), -- Blip position of the garage (on the map)
            blipText = "Garage - 2 places", -- Blip text of the garage (on the map)
            blipColor = 5, -- Blip color of the garage (on the map)
            blipSprite = 357, -- Blip sprite of the garage (on the map)

            -- IMPORTANT: Always keep the decimal numbers otherwise it won't work
            camera = {position = vector3(40.9, -892.58, 33.69), heading = 168.1}, -- Camera position in the menu

            spawnCoords = {position = vector3(179.08, -1001.49, -99.0), heading = 177.15}, -- Spawn position in the garage
            leaveSpawnCoords = {position = vector3(41.07, -899.18, 29.98), heading = 353.69}, -- Exit garage position with or without vehicle (keep it in mind, you must have enough spaces)

            -- IMPORTANT: be careful with the positions in order to verify that all types of vehicle can spawn !
            vehiclePositions = { -- Number of positions is related to the number of places in the garage
                {position = vector3(174.94, -1004.14, -99.00), heading = 182.46}, -- Position of a vehicle
                {position = vector3(171.71, -1004.23, -99.00), heading = 182.46}, -- Position of a vehicle
            },

            inviteFriends = {
                areaPosition = vector3(38.51, -901.61, 29.99), -- Position where you want the friends to be before you invite them to your garage
                areaDetectPlayers = 30.0, -- Area around the position in order to detect players who wants to got into your garage when they being invited.
            },

            manageGarage = { -- All information about the marker to manage the garage (sell and invite friends)
                marker = {
                    type = 20, -- Marker type (see https://docs.fivem.net/docs/game-references/markers/ for the list)
                    useDistance = 1.5, -- Distance between the Player and the marker in order to interact with it.
                    size = vector3(1.5, 1.5, 1.0), -- Size of the marker in X, Y, Z size
                    color = vector3(120, 120, 240), -- Color of the marker in R, G, B 
                    position = vector3(177.03, -1008.2, -99.0) -- Position of the marker
                }
            },

            whitelistVehicles = { -- Want to just whitelist certain vehicles for a specific garage ? It's here !
                enable = false, -- false = whitelist system disable, true = whitelist system enable
                vehicles = { -- whitelist vehicles list with hash (a hash is the number that represents the vehicle)
                    [5599877] = true, -- Follow this example and replace the 5599877 by your hash
                }
            },

            blackListVehicles = { -- Hash list of vehicles blacklist from the garage, a hash is the number that represents the vehicle
                [5599877] = true, -- Follow this example and replace the 5599877 by your hash
            }
        },

        [2] = { -- ID of the garage
            name = "126 Pressing Glow", -- Name of the garage
            price = 1500, -- Price of the garage
            salePourcentage = 0.2, -- Percentage of the sale that the player will receive. (0.2 means he will get 20% of the purchase price of the garage)

            friendlyfire = false, -- false = you will be invincible in the garage, true = the opposite

            blipPosition = vector3(-70.68, -1822.7, 26.94), -- Blip position of the garage (on the map)
            blipText = "Garage - 6 places", -- Blip text of the garage (on the map)
            blipColor = 5, -- Blip color of the garage (on the map)
            blipSprite = 357, -- Blip sprite of the garage (on the map)

            -- IMPORTANT: Always keep the decimal numbers otherwise it won't work
            camera = {position = vector3(-64.6, -1836.39, 30.85), heading = 27.17}, -- Camera position in the menu

            spawnCoords = {position = vector3(207.18, -1018.33, -99.0), heading = 100.0}, -- Spawn position in the garage
            leaveSpawnCoords = {position = vector3(-64.68, -1832.71, 26.87), heading = 229.11}, -- Exit garage position with or without vehicle (keep it in mind, you must have enough spaces)

            -- IMPORTANT: be careful with the positions in order to verify that all types of vehicle can spawn !
            vehiclePositions = { -- Number of positions is related to the number of places in the garage
                {position = vector3(193.09, -1016.6, -99.3), heading = 180.0}, -- Position of a vehicle
                {position = vector3(193.09, -1023.66, -99.3), heading = 180.0}, -- Position of a vehicle
                {position = vector3(197.86, -1023.66, -99.3), heading = 180.0}, -- Position of a vehicle
                {position = vector3(197.86, -1016.6, -99.3), heading = 180.0}, -- Position of a vehicle
                {position = vector3(203.39, -1016.6, -99.3), heading = 180.0}, -- Position of a vehicle
                {position = vector3(203.39, -1023.54, -99.3), heading = 180.0}, -- Position of a vehicle
            },

            inviteFriends = {
                areaPosition = vector3(-70.68, -1822.7, 26.94), -- Position where you want the friends to be before you invite them to your garage
                areaDetectPlayers = 30.0, -- Area around the position in order to detect players who wants to got into your garage when they being invited.
            },

            manageGarage = { -- All information about the marker to manage the garage (sell and invite friends)
                marker = {
                    type = 20, -- Marker type (see https://docs.fivem.net/docs/game-references/markers/ for the list)
                    useDistance = 1.5, -- Distance between the Player and the marker in order to interact with it.
                    size = vector3(1.5, 1.5, 1.0), -- Size of the marker in X, Y, Z size
                    color = vector3(120, 120, 240), -- Color of the marker in R, G, B 
                    position = vector3(200.51, -1013.96, -99.0) -- Position of the marker
                }
            },

            whitelistVehicles = { -- Want to just whitelist certain vehicles for a specific garage ? It's here !
                enable = false, -- false = whitelist system disable, true = whitelist system enable
                vehicles = { -- whitelist vehicles list with hash (a hash is the number that represents the vehicle)
                    [5599877] = true, -- Follow this example and replace the 5599877 by your hash
                }
            },

            blackListVehicles = { -- Hash list of vehicles blacklist from the garage, a hash is the number that represents the vehicle
                [5599877] = true, -- Follow this example and replace the 5599877 by your hash
            }
        },

        [3] = { -- ID of the garage
            name = "56 Polovis Street", -- Name of the garage
            price = 4500, -- Price of the garage
            salePourcentage = 0.2, -- Percentage of the sale that the player will receive. (0.2 means he will get 20% of the purchase price of the garage)

            friendlyfire = false, -- false = you will be invincible in the garage, true = the opposite

            blipPosition = vector3(-791.63, 335.57, 85.7), -- Blip position of the garage (on the map)
            blipText = "Garage - 12 places", -- Blip text of the garage (on the map)
            blipColor = 5, -- Blip color of the garage (on the map)
            blipSprite = 357, -- Blip sprite of the garage (on the map)

            -- IMPORTANT: Always keep the decimal numbers otherwise it won't work
            camera = {position = vector3(-803.84, 289.15, 90.1), heading = 339.35}, -- Camera position in the menu

            spawnCoords = {position = vector3(240.32, -1004.86, -99.0), heading = 86.0}, -- Spawn position in the garage
            leaveSpawnCoords = {position = vector3(-800.42, 332.03, 85.7), heading = 178.0}, -- Exit garage position with or without vehicle (keep it in mind, you must have enough spaces)

            -- IMPORTANT: be careful with the positions in order to verify that all types of vehicle can spawn !
            vehiclePositions = { -- Number of positions is related to the number of places in the garage
                {position = vector3(233.24, -1000.41, -99.71), heading = 122.3}, -- Position of a vehicle
                {position = vector3(233.42, -996.62, -99.71), heading = 122.3}, -- Position of a vehicle
                {position = vector3(233.09, -992.64, -99.71), heading = 122.3}, -- Position of a vehicle
                {position = vector3(233.57, -988.52, -99.71), heading = 122.3}, -- Position of a vehicle
                {position = vector3(233.24, -984.4, -99.71), heading = 122.3}, -- Position of a vehicle
                {position = vector3(224.49, -1000.65, -99.71), heading = 300.14}, -- Position of a vehicle
                {position = vector3(224.35, -996.83, -99.71), heading = 300.14}, -- Position of a vehicle
                {position = vector3(223.71, -992.94, -99.71), heading = 300.14}, -- Position of a vehicle
                {position = vector3(223.94, -988.64, -99.71), heading = 300.14}, -- Position of a vehicle
                {position = vector3(223.76, -984.97, -99.71), heading = 300.14}, -- Position of a vehicle
                {position = vector3(223.37, -981.01, -99.71), heading = 300.14}, -- Position of a vehicle
                {position = vector3(223.37, -977.24, -99.71), heading = 300.14}, -- Position of a vehicle
            },

            inviteFriends = {
                areaPosition = vector3(-791.63, 335.59, 85.7), -- Position where you want the friends to be before you invite them to your garage
                areaDetectPlayers = 30.0, -- Area around the position in order to detect players who wants to got into your garage when they being invited.
            },

            manageGarage = { -- All information about the marker to manage the garage (sell and invite friends)
                marker = {
                    type = 20, -- Marker type (see https://docs.fivem.net/docs/game-references/markers/ for the list)
                    useDistance = 1.5, -- Distance between the Player and the marker in order to interact with it.
                    size = vector3(1.5, 1.5, 1.0), -- Size of the marker in X, Y, Z size
                    color = vector3(120, 120, 240), -- Color of the marker in R, G, B
                    position = vector3(235.66, -1006.3, -99.0) -- Position of the marker
                }
            },

            whitelistVehicles = { -- Want to just whitelist certain vehicles for a specific garage ? It's here !
                enable = false, -- false = whitelist system disable, true = whitelist system enable
                vehicles = { -- whitelist vehicles list with hash (a hash is the number that represents the vehicle)
                    [5599877] = true, -- Follow this example and replace the 5599877 by your hash
                }
            },

            blackListVehicles = { -- Hash list of vehicles blacklist from the garage, a hash is the number that represents the vehicle
                [5599877] = true, -- Follow this example and replace the 5599877 by your hash
            }
        },
    }   
}
```