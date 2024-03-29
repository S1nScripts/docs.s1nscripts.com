---
sidebar_position: 1
title: Config
sidebar_label: Config
---

# Spawn Selector 
## Config file

There is also a config file in `s1n_spawnselector/server/config.lua` that you can modify to your liking.


For both ESX and QBCore:

```lua
Config = Config or {}

Config = {
    -- Show debug messages in the console (client / server)
    debugMode = true,
    framework = {
        -- The name of the framework you are using (qb-core, esx-legacy, esx-old)
        name = "qb-core",
        triggers = {
            esxSharedObject = "esx:getSharedObject",
        },
        resourceNames = {
            qbCore = "qb-core",
            esx = "es_extended",
        },
    },
    exportNames = {
        s1nLib = "s1n_lib",
    },

    supportedScripts = {
        illeniumAppearance = "illenium-appearance",
        fivemAppearance = "fivem-appearance"
    },
    -- Show the button "Spawn to last location" if set to true
    showLastSpawn = true,
    -- Set to false ONLY if you want to show the UI multiple times with other scripts. (Recommended if you are a developer and know what you're doing)
    showSpawnSelectorOnce = true,

    -- Every spawn locations
    spawns = {
        [1] = {
            locationName = 'North Motel',
            imageLink = "https://cdn.discordapp.com/attachments/953623274909233192/1125038468934938664/image.png",
            location = vector3(-85.97, 6325.62, 31.49),
            heading = 359.14
        },
        [2] = {
            locationName = 'The Farm',
            imageLink = "https://cdn.discordapp.com/attachments/953623274909233192/1125039239139164353/image.png",
            location = vector3(1930.53, 4925.14, 47.15),
            heading = 318.96
        },
        [3] = {
            locationName = 'Port area',
            imageLink = "https://cdn.discordapp.com/attachments/953623274909233192/1125040327993081917/image.png",
            location = vector3(828.53, -3107.25, 5.9),
            heading = 228.65
        },
        [4] = {
            locationName = 'Business area',
            imageLink = "https://cdn.discordapp.com/attachments/953623274909233192/1125041163909484554/image.png",
            location = vector3(-64.45, -786.01, 44.23),
            heading = 322.04
        },
        [5] = {
            locationName = 'Digital Den Parking',
            imageLink = "https://cdn.discordapp.com/attachments/953623274909233192/1125041892485247078/image.png",
            location = vector3(-1324.91, -382.19, 36.67),
            heading = 326.45
        }
    }
}

if Config.framework.name == "qb-core" then
    -- Used when creating a new character
    -- Check the qb-apartments config.lua file to see the available apartments
    Config.defaultApartment = "apartment1"
    Config.defaultApartmentStreetName = "South Rockford Drive"
end
```
