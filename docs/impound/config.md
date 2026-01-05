---
sidebar_position: 1
title: Config
sidebar_label: Config
---

# Impound
## Config file

For ESX:
```lua
--[[
    Need help with the script ? Go into the support Discord https://discord.gg/CQHQsV9udb
    A verification that you bought the script will be necessary.

    IMPORTANT:
    For all Y positions, you need to remove 1 in order to have the correct position of your player's feet. If it's not correct, there will be problems.
]]

Config = {
    debugMode = false, -- true = print messages for developers | false = doesn't print anything
    useJob2 = false, -- true = you use a job2 | false = you don't
    esxVersion = "legacy", -- "legacy" = es_extended new version | "old" = es_extended old version without exports to get the shared object
    enableDvCommandForImpound = true, -- true = enable compatibility for the /dv command to impound a vehicle | false = disable the compatibility for the /dv command
    defaultPoundPrice = 285, -- The amount of money the player need to pay if he disconnect with the vehicle outside of a garage or something like that
    maxPoundPrice = 1000, -- The maximum amount of money the player can pay to get his vehicle back
    impoundSocietyName = "society_police", -- The society name to give money for when the impound author is disconnected
    triggers = {
        depositSocietyMoney = "esx_addonaccount:getSharedAccount", -- Trigger esx_addonaccount to share society account
        playerLoaded = "esx:playerLoaded" -- Trigger es_extended to share player data
    },
    allowedJobsToResearchVehicle = { -- Jobs allowed to research impounded vehicles
        ["police"] = true,
        ["mechanic"] = true,
    },
    allowedJobsListImpoundVehicles = { -- Jobs allowed to list impound vehicles
        ["police"] = true,
    },
    allowedJobsImpoundVehicles = { -- Jobs allowed to impound vehicles
        ["mechanic"] = true,
        ["police"] = true,
    },
    automaticVehiclesDeleting = { -- If you want to automatically delete vehicles (from the impound and the personal vehicle table) after a certain period of time in the impound it is here.
        enable = false, -- true = activate this system
        intervalChecking = 6 * 60 * 60, -- The checking interval to verify if a vehicles needs to be deleted | Example: 6 * 60 * 60 means six hours
        time = 3 * 24 * 60 * 60 -- The time period after which the vehicle will be removed from the vehicle table and impound table | Example: 3 * 24 * 60 * 60 means 3 days
    },
    -- If you want to have the opacity effect on vehicle spawning at the impounded
    -- It also set the vehicle invincible during the opacity period
    automaticOpacityOnVehicle = {
        enable = true, -- false = disable this system
        time = 10 * 1000, -- The duration of the opacity effect on the vehicle in milliseconds (1000 miliseconds = 1 second) | Default value is set to 10 seconds.
        opacity = 100 -- Defines the transparency of the vehicle, value between 0 and 255 (255 = Totally opaque, 0 = Completely transparent)
    },
    -- If you want to delete the vehicle automatically when it's under water or has exploded, set this to true
    deleteVehicleWhenDestroyed = false,
    -- If you want to delete the vehicle automatically when the player disconnects itself from the server
    deleteVehicleAfterDisconnect = true,
    -- If you want to impound vehicles after a server reboot and script restart
    impoundVehicleAfterReboot = true,
    npcs = { -- NPCs list, create as many as you want
        {
            -- Vehicle classes allowed to be impounded and retreived by this NPC
            allowedVehicleClasses = { -- see https://docs.fivem.net/natives/?_0x29439776AAA00A62
                [0] = true, -- Compacts  
                [1] = true, -- Sedans  
                [2] = true, -- SUVs  
                [3] = true, -- Coupes  
                [4] = true, -- Muscle  
                [5] = true, -- Sports Classics  
                [6] = true, -- Sports  
                [7] = true, -- Super  
                [8] = true, -- Motorcycles  
                [9] = true, -- Off-road  
                [10] = true, -- Industrial  
                [11] = true, -- Utility    
                [12] = true, -- Vans      
                [13] = true, -- Cycles  
                [17] = true, -- Service  
                [18] = true, -- Emergency  
                [19] = true, -- Military  
                [20] = true, -- Commercial  
                [21] = true, -- Trains      
                [22] = true, -- Open Wheel      
            },

            position = vector3(408.9, -1622.88, 29.29), -- NPC position X, Y, Z
            heading = 225.0, -- Heading of the NPC
            model = "csb_trafficwarden", -- NPC model
            useDistance = 2, -- Distance between the player and the NPC in order to interact with it
            radiusVehicleImpoundDetection = 10.0, -- detection radius around the player for impounded vehicles 

            blipColor = 45, -- Color of the blip
            blipSprite = 380, -- Sprite of the blip
            blipText = "Cars Impound", -- Name of the blip

            spawnVehicle = {position = vector3(401.94, -1631.61, 29.29), heading = 230.0} -- Spawn vehicle position X, Y, Z and heading direction
        },
        {
            -- Vehicle classes allowed to be impounded and retreived by this NPC
            allowedVehicleClasses = {
                [14] = true, -- Boats  
            },

            position = vector3(-776.51, -1438.22, 1.59), -- NPC position X, Y, Z
            heading = 50.0, -- Heading of the NPC
            model = "csb_trafficwarden", -- NPC model
            useDistance = 2, -- Distance between the player and the NPC in order to interact with it
            radiusVehicleImpoundDetection = 20.0, -- detection radius around the player for impounded vehicles 

            blipColor = 45, -- Color of the blip
            blipSprite = 380, -- Sprite of the blip
            blipText = "Boats Impound", -- Name of the blip

            spawnVehicle = {position = vector3(-782.16, -1429.04, 3.78), heading = 135.0} -- Spawn vehicle position X, Y, Z and heading direction
        },
        {
            -- Vehicle classes allowed to be impounded and retreived by this NPC
            allowedVehicleClasses = {
                [16] = true, -- Planes  
            },

            position = vector3(-1223.06, -3373.03, 13.94), -- NPC position X, Y, Z
            heading = 330.0, -- Heading of the NPC
            model = "csb_trafficwarden", -- NPC model
            useDistance = 2, -- Distance between the player and the NPC in order to interact with it
            radiusVehicleImpoundDetection = 20.0, -- detection radius around the player for impounded vehicles 

            blipColor = 45, -- Color of the blip
            blipSprite = 380, -- Sprite of the blip
            blipText = "Planes Impound", -- Name of the blip

            spawnVehicle = {position = vector3(-1208.86, -3359.29, 13.94), heading = 332.0} -- Spawn vehicle position X, Y, Z and heading direction
        },
        {
            -- Vehicle classes allowed to be impounded and retreived by this NPC
            allowedVehicleClasses = {
                [15] = true, -- Helicopters  
            },

            position = vector3(-1370.36, -3281.19, 13.94), -- NPC position X, Y, Z
            heading = 335.0, -- Heading of the NPC
            model = "csb_trafficwarden", -- NPC model
            useDistance = 2, -- Distance between the player and the NPC in order to interact with it
            radiusVehicleImpoundDetection = 20.0, -- detection radius around the player for impounded vehicles 

            blipColor = 45, -- Color of the blip
            blipSprite = 380, -- Sprite of the blip
            blipText = "Helicopters Impound", -- Name of the blip

            spawnVehicle = {position = vector3(-1359.43, -3263.69, 15.29), heading = 326.0} -- Spawn vehicle position X, Y, Z and heading direction
        },

    },
}
```

For QBCore:
```lua
Config = {
    oldQBCoreVersion = false, -- Set to true only if you have an error like "No such export GetSharedObject in resource qb-core" 
    debugMode = true, -- true = print messages for developers | false = doesn't print anything
    enableDvCommandForImpound = true, -- true = enable the /dv command for impound | false = disable the /dv command for impound
    defaultPoundPrice = 285, -- The amount of money the player need to pay if he disconnect with the vehicle outside of a garage or something like that
    maxPoundPrice = 1000, -- The maximum amount of money the player can pay to get his vehicle back
    impoundSocietyName = "mechanic", -- The company name to give money for when the impound author is disconnected
    triggers = {
        notifyPlayer = "QBCore:Notify", -- Trigger qbcore to notify player
        jobUpdated = "QBCore:Client:OnJobUpdate", -- Trigger qbcore to update player's job
    },
    allowedJobsToResearchVehicle = { -- Jobs allowed to research impounded vehicles
        ["police"] = true,
        ["mechanic"] = true,
    },
    allowedJobsListImpoundVehicles = { -- Jobs allowed to list impound vehicles
        ["police"] = true,
    },
    allowedJobsImpoundVehicles = { -- Jobs allowed to impound vehicles
        ["mechanic"] = true,
        ["police"] = true,
    },
    automaticVehiclesDeleting = { -- If you want to automatically delete vehicles (from the impound and the personal vehicle table) after a certain period of time in the impound it is here.
        enable = false, -- true = activate this system
        intervalChecking = 6 * 60 * 60, -- The checking interval to verify if a vehicles needs to be deleted | Example: 6 * 60 * 60 means six hours
        time = 3 * 24 * 60 * 60 -- The time period after which the vehicle will be removed from the vehicle table and impound table | Example: 3 * 24 * 60 * 60 means 3 days
    },
    -- If you want to have the opacity effect on vehicle spawning at the impounded
    -- It also set the vehicle invincible during the opacity period
    automaticOpacityOnVehicle = { 
        enable = true, -- false = disable this system
        time = 10 * 1000, -- The duration of the opacity effect on the vehicle in milliseconds (1000 miliseconds = 1 second) | Default value is set to 10 seconds.
        opacity = 100 -- Defines the transparency of the vehicle, value between 0 and 255 (255 = Totally opaque, 0 = Completely transparent)
    },
    -- If you want to delete the vehicle automatically when it's under water or has exploded, set this to true
    deleteVehicleWhenDestroyed = false,
    -- If you want to delete the vehicle automatically when the player disconnects itself from the server
    deleteVehicleAfterDisconnect = true,
    -- If you want to impound vehicles after a server reboot and script restart
    impoundVehicleAfterReboot = true,
    npcs = { -- NPCs list, create as many as you want
        {
            position = vector3(408.9, -1622.88, 29.29), -- NPC position X, Y, Z
            heading = 225.0, -- Heading of the NPC
            model = "csb_trafficwarden", -- NPC model
            useDistance = 2, -- Distance between the player and the NPC in order to interact with it
            radiusVehicleImpoundDetection = 10.0, -- detection radius around the player for impounded vehicles 
    
            blipColor = 45, -- Color of the blip
            blipSprite = 380, -- Sprite of the blip
            blipText = "Impound", -- Name of the blip

            spawnVehicle = {position = vector3(401.94, -1631.61, 29.29), heading = 230.0} -- Spawn vehicle position X, Y, Z and heading direction
        },
    },
}
```