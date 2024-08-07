---
sidebar_position: 1
title: Config
sidebar_label: Config
---

# Marketplace

## Adding images to the marketplace

### Adding new images for the items

You need to add an image (.png) in the `s1n_marketplace/html/assets` folder with the **exact same name** as the item name in your database or framework config file.

### Adding new images for the vehicles

You need to add an image (.png) in the `s1n_marketplace/html/assets` folder with the **exact same name** as the vehicle model in your database.

## Config file

There is also a config file in `s1n_marketplace/server/config.lua` that you can modify to your liking.

For both ESX and QBCore:
```lua
Config = Config or {}

-- Make sure to also configure s1n_lib, check s1n_lib/configuration/ folder.

-- Set this to true if you want to enable debug mode (for developers and support)
Config.debugMode = true

-- Scripts names used for the exports
Config.ExportNames = {
    s1nLib = "s1n_lib",

    oxInventory = "ox_inventory",
}

-- If you use the old ESX loadout system, set this to true to support weapons
Config.UseEsxLoadout = false

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

-- FOR DEVELOPERS ONLY: Set to true if you want to be able to buy your own products
Config.CanBuyOwnProduct = true

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
            -- Set to false to disable the blip
            Enable = true,
            -- The sprite ID of the blip (you can find the list of sprite IDs here: https://docs.fivem.net/docs/game-references/blips/)
            Sprite = 52,
            -- The color of the blip (you can find the list of colors here: https://docs.fivem.net/docs/game-references/blips/)
            Color = 2,
            -- The scale of the blip (1.0 is the default scale)
            Scale = 1.0,
            -- The label of the blip
            Label = 'The Black Market'
        },
        -- Marker settings
        Marker = {
            -- Set to false to disable the marker
            Enable = true,

            Type = 2,
            Rotation = { 0.0, 180.0, 0.0 },
            Scale = 0.4,
            Color = { R = 222, G = 186, B = 77, A = 255 },
            -- Set to false to disable the marker's animation
            BobUpAndDown = true,
            FaceCamera = true,
            MarkerDistance = 5.0,
            TextDistance = 2.0 
        },
        -- If you want to disable the possibility to sell vehicles, set this to true otherwise set it to false
        DisableVehicles = false,
        -- If you want to disable the possibility to see the seller name, set this to false otherwise set it to true
        ShowSellerName = true,
        -- Set to "bank" to use the bank account for the transactions, set to "cash" to use the cash for the transactions
        -- If you're on a blackmarket type and you've set Config.BlackMarketUseDirtyMoney to true, this variable will be ignored and will still use the dirty money
        PaymentMethod = "bank",
    },
    {
        -- Name of the marketplace
        Name = 'testmarket2',
        -- Define to 'normal' or 'blackmarket'
        Type = 'normal',
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
        Location = vector3(36.35, -1019.83, 29.6),
        -- Blip settings
        Blip = {
            -- Set to false to disable the blip
            Enable = true,
            -- The sprite ID of the blip (you can find the list of sprite IDs here: https://docs.fivem.net/docs/game-references/blips/)
            Sprite = 52,
            -- The color of the blip (you can find the list of colors here: https://docs.fivem.net/docs/game-references/blips/)
            Color = 2,
            -- The scale of the blip (1.0 is the default scale)
            Scale = 1.0,
            -- The label of the blip
            Label = 'The Normal Market'
        },
        -- Marker settings
        Marker = {
            -- Set to false to disable the marker
            Enable = true,

            Type = 2,
            Rotation = { 0.0, 180.0, 0.0 },
            Scale = 0.4,
            Color = { R = 222, G = 186, B = 77, A = 255 },
            -- Set to false to disable the marker's animation
            BobUpAndDown = true,
            FaceCamera = true,
            MarkerDistance = 5.0,
            TextDistance = 2.0
        },
        -- If you want to disable the possibility to sell vehicles, set this to true otherwise set it to false
        DisableVehicles = false,
        -- If you want to disable the possibility to see the seller name, set this to false otherwise set it to true
        ShowSellerName = true,
        -- Set to "bank" to use the bank account for the transactions, set to "cash" to use the cash for the transactions
        -- If you're on a blackmarket type and you've set Config.BlackMarketUseDirtyMoney to true, this variable will be ignored and will still use the dirty money
        PaymentMethod = "bank",
    },
}
```
