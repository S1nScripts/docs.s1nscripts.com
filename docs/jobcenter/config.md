---
sidebar_position: 1
title: Config
sidebar_label: Config
---

# Job Center
## Config file

For ESX:
```lua
--[[
    Need help with the script ? Go into the support Discord https://discord.gg/aKF3DX8yPx
    A verification that you bought the script will be necessary.
]]

Config = {
    debugMode = false, -- Set to true if you want to have the logs messages from the script
    useESXExport = false, -- Set to true if you are using ESX Legacy
    themeColor = "#FD86AB", -- HEX color for the theme of the UI
    triggers = {
        getESX = "esx:getSharedObject" -- Change it only if you changed it in es_extended
    },
    position = {
        blip = {
            seeDistance = 100, -- Distance to see the blip
            position = vector3(-250.02, -971.38, 31.22), -- vector3(X, Y, Z)
            text = "Job Center", -- Text of the blip
            color = 5, -- Color of the blip (see https://docs.fivem.net/docs/game-references/blips/#blip-colors)
            sprite = 457, -- Sprite of the blip (see https://docs.fivem.net/docs/game-references/blips/#blips)
            scale = 0.9 -- Scale of the blip
        },
        marker = {
            type = 20, -- Marker type (see https://docs.fivem.net/docs/game-references/markers/ for the list)
            useDistance = 1.5, -- Distance between the Player and the marker in order to interact with it.
            position = vector3(-250.02, -971.38, 31.22), -- Position of the marker
            size = vector3(1.5, 1.5, 1.0), -- Size of the marker in X, Y, Z size
            color = vector3(120, 120, 240) -- Color of the marker in R, G, B
        },
    },
    availableJobs = {
        --[[

        Job Template:
        {
            label = "Intitle of the job",
            job = "Job name (same as if you would setjob yourself)",
            grade = 0, -- Grade associated to the job, by default 0
            information = {"Hard Working", "Full Time", "Senior"}, -- (MAX: 3 elements) Main informations about the job
            salary = 8000, -- Salary of the job
            payInterval = "Hour" -- Interval of pay for the job
            jobPosition = vector2(x, y) -- Optional (you can remove the line if you don't want the feature), set a waypoint to a location when applying to the job
        },

        ]]

        {
            label = "Medic",
            job = "ambulance",
            grade = 0,
            information = {"Hard Working", "Full Time", "Senior"},
            salary = 8000,
            payInterval = "Hour",
            jobPosition = vector2(50, 50)
        },
        {
            label = "Car dealer",
            job = "cardealer",
            grade = 0,
            information = {"Hard Working", "Full Time", "Senior"},
            salary = 8000,
            payInterval = "Hour",
            jobPosition = vector2(300, 5000)
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
    debugMode = false, -- Set to true if you want to have the logs messages from the script
    oldQBCoreVersion = false, -- Set to true if you are using the old QBCore function oldQBCoreVersion()
    themeColor = "#FD86AB", -- HEX color for the theme of the UI
    disable = {
        marker = false, -- Disable all markers for blip positions
        displayTopLeftText = false -- Disable the text on the top left of the screen
    },
    position = {
        blip = {
            seeDistance = 100, -- Distance to see the marker
            position = vector3(-250.02, -971.38, 31.22), -- vector3(X, Y, Z)
            text = "Job Center", -- Text of the blip
            color = 5, -- Color of the blip (see https://docs.fivem.net/docs/game-references/blips/#blip-colors)
            sprite = 457, -- Sprite of the blip (see https://docs.fivem.net/docs/game-references/blips/#blips)
            scale = 0.9 -- Scale of the blip
        },
        marker = {
            type = 20, -- Marker type (see https://docs.fivem.net/docs/game-references/markers/ for the list)
            useDistance = 1.5, -- Distance between the Player and the marker in order to interact with it.
            position = vector3(-250.02, -971.38, 31.22), -- Position of the marker
            size = vector3(1.5, 1.5, 1.0), -- Size of the marker in X, Y, Z size
            color = vector3(120, 120, 240) -- Color of the marker in R, G, B
        },
    },
    availableJobs = {
        --[[

        Job Template:
        {
            label = "Intitle of the job",
            job = "Job name (same as if you would setjob yourself)",
            grade = 0, -- Grade associated to the job, by default 0
            information = {"Hard Working", "Full Time", "Senior"}, -- (MAX: 3 elements) Main informations about the job
            salary = 8000, -- Salary of the job
            payInterval = "Hour" -- Interval of pay for the job
            jobPosition = vector2(x, y) -- Optional (you can remove the line if you don't want the feature), set a waypoint to a location when applying to the job
        },

        ]]

        {
            label = "Medic",
            job = "ambulance",
            grade = 0,
            information = {"Hard Working", "Full Time", "Senior"},
            salary = 8000,
            payInterval = "Hour",
            jobPosition = vector2(50, 50)
        },
        {
            label = "Car dealer",
            job = "cardealer",
            grade = 0,
            information = {"Hard Working", "Full Time", "Senior"},
            salary = 8000,
            payInterval = "Hour",
            jobPosition = vector2(300, 5000)
        },
    }
}
```