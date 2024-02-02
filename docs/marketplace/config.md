---
sidebar_position: 1
title: Config
sidebar_label: Config
---

# Marketplace
## Config file

There is also a config file in `s1n_marketplace/server/config.lua` that you can modify to your liking.

For both ESX and QBCore:
```lua
Config = {}

-- Set this to true if you want to enable debug mode (for developers and support)
Config.debugMode = false

-- Framework settings
Config.Framework = {
    -- If you use ESX, you need to set this to 'ESX'
    -- If you use QBCore, you need to set this to 'QBCore'
    FrameworkName = 'QBCore',
    -- The name of the QBCore resource, this is only used if you use QBCore
    QBCoreFileName = 'qb-core',
    -- Set to true if you use the old ESX (not ESX Legacy)
    OldESX = false,
    -- If you use the old ESX, define the event name here to get the ESX object (by default it's 'esx:getSharedObject')
    ESXEvent = 'esx:getSharedObject',
    -- The name of the ESX resource, this is only used if you use ESX
    ESXFileName = 'es_extended',
    -- The name of the SQL wrapper you use (You can set : mysql-async, oxmysql, ghmattimysql). You need to have the resource installed and running before this script.
    SQLWrapper = 'oxmysql'
}

-- If you use the old ESX loadout system, set this to true to support weapons
Config.UseEsxLoadout = false

-- If you use ox-inventory, set this to true to add support for it
Config.UseOxInventory = false

-- If you use qb-target, set this to true to add support for it
Config.UseQbTarget = false

-- If you use ox-target, set this to true to add support for it
Config.UseOxTarget = false

-- If you want discord logging in a channel, fill in the webhook URL here
Config.DiscordWebhook = ''

-- Default values to advertise a product (minimum and maximum hours and the price per minute)
Config.Advertisement = { Min = 1, Max = 24, Price = 1 } -- Price = price per minute

-- Default values to auction a product (minimum and maximum hours)
Config.Auction = { Min = 1, Max = 24 }

-- List of blacklisted items for the marketplaces
Config.BlackListItems = {
    -- The water_bottle is just an example, you can remove it if you want
    ['water_bottle'] = true,
}

-- List of blacklisted items for the black markets
Config.BlackMarketBlacklistItems = {
    -- The water_bottle is just an example, you can remove it if you want
    ['water_bottle'] = true,
}

-- List of blacklisted vehicles for both marketplaces and black markets
Config.BlacklistVehicles = { }

-- Set to true if you want to use dirty money for the black market
Config.BlackMarketUseDirtyMoney = false

-- ONLY FOR QBCORE: Define the name of the dirty money item
Config.BlackMarketDirtyMoneyItem = 'markedbills'

-- List of the marketplaces
Config.Marketplaces = {
    {
        -- Name of the marketplace
        Name = 'testmarket',
        -- Define to 'normal' or 'blackmarket'
        Type = 'blackmarket',
        -- You can whitelist the market for specific jobs
        -- Set it to a table to add jobs to the whitelist, set it to false to disable it
        -- Here is an example of a whitelist with 2 jobs: JobCheck = { ['police'] = true, ['ambulance'] = true }
        -- Here is an example of a whitelist with 1 job: JobCheck = 'police'
        JobCheck = false,
        -- You can whitelist the possibility to sell products for specific jobs
        -- Set it to a table to add jobs to the whitelist, set it to false to disable it
        -- Here is an example of a whitelist with 2 jobs: SellerCheck = { ['police'] = true, ['ambulance'] = true }
        SellerCheck = false,
        -- The location of the marketplace (X, Y, Z)
        Location = vector3(28.96, -1018.68, 29.6),
        -- Blip settings
        Blip = {
            Sprite = 52,
            Color = 2,
            Scale = 1.0,
            Label = 'The Black Market'
        },
        -- Marker settings
        Marker = {
            Type = 2,
            Rotation = { 0.0, 180.0, 0.0 },
            Scale = 0.4,
            Color = { R = 222, G = 186, B = 77, A = 255 },
            BobUpAndDown = true,
            FaceCamera = true,
            MarkerDistance = 5.0,
            TextDistance = 2.0 
        },
        -- If you want to disable the possibility to sell vehicles, set this to true otherwise set it to false
        DisableVehicles = false,
        -- If you want to disable the possibility to see the seller name, set this to false otherwise set it to true
        ShowSellerName = true,
    }
}
```
