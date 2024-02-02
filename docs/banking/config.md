---
sidebar_position: 1
title: Config
sidebar_label: Config
---

# Banking System
## Config file

There is also a config file in `s1n_banking/server/config.lua` that you can modify to your liking.

For both QBCore and ESX :

```lua
Config = { }

-- Set to true to show debug messages in the console
Config.debugMode = true

Config.Framework = {
    FrameworkName  = 'QBCore', -- Choose your framework: ESX or QBCore
    QBCoreFileName = 'qb-core', -- The name of the QBCore resource
    OldESX         = false, -- Set to true if you're using an older version of ESX which still uses the ESX event esx:getSharedObject
    ESXEvent       = 'esx:getSharedObject', -- The name of the ESX event
    ESXFileName    = 'es_extended', -- The name of the ESX resource
    SQLWrapper     = 'oxmysql' --  oxmysql (HIGHLY RECOMMANDED) / mysql-async (deprecated) / ghmattimysql (deprecated)
}

-- You need to verify that the following scripts are exactly named like this or change the names here
Config.exportsScripts = {
    -- FOR QBCore ONLY
    qbManagement = 'qb-management',

    -- For both ESX and QBCore
    oxTarget     = 'ox_target',
    qbTarget     = 'qb-target'
}

-- Set to false if you don't want to use ox-target
Config.UseOxTarget = true

-- Set to true if you want to use qb-target
Config.UseQBTarget = false

-- Add the url to your Discord webhook to receive notifications for player transactions
Config.WebhookLink = ''

-- Set to true to enable the bank card item feature
Config.CreditCardCheck = false

-- If CreditCardCheck is set to true, this is the name of the item that will be used to check if the player has a bank card
Config.CreditCardItem = 'creditcard'

-- List of the ATM models that will be used to open the bank menu
Config.AtmModels = { 'prop_atm_02', 'prop_atm_03', 'prop_fleeca_atm' }

-- List of the bank locations that will be used to open the bank menu
Config.BankLocations = {
    {
        Position = vector3(-1212.685669, -330.764832, 37.772217),
        Blip     = {
            Active = true,
            Sprite = 108,
            Color  = 2,
            Scale  = 1.0,
            Label  = 'Bank'
        },
        Marker   = {
            Active         = true,
            Distance       = 5.0,
            Type           = 2,
            Rotation       = { 0.0, 180.0, 0.0 },
            Scale          = 0.4,
            Color          = { R = 222, G = 186, B = 77, A = 255 },
            BobUpAndDown   = true,
            FaceCamera     = true,
            MarkerDistance = 5.0,
            TextDistance   = 2.0
        }
    }
}

-- Credit feature
Config.Credit = {
    -- Set to false to disable the credit feature
    Active          = true,
    -- Default amounts that can be directly selected in the menu
    Amounts         = { 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 150000, 200000, 500000 },
    -- Percentage of the loan that will be required as a security deposit
    SecurityDeposit = 25,
    -- Different credit durations that can be selected in the menu
    Duration        = {
        { Label = '1 week', Time = 60 * 60 * 24 * 7 },
        { Label = '2 weeks', Time = 60 * 60 * 24 * 14 },
        { Label = '1 month', Time = 60 * 60 * 24 * 30 },
        { Label = '3 months', Time = 60 * 60 * 24 * 90 }
    }
}

-- Configuration to access a society account
Config.SocietyRanks = {
    -- Job name
    ['police'] = {
        -- Job grades
        ['boss']       = { Create = true, Login = true },
        ['lieutenant'] = { Create = false, Login = true },
        ['sergeant']   = { Create = false, Login = true }
    }
}
```
