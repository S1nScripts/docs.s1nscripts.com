---
sidebar_position: 1
title: Config
sidebar_label: Config
---

# ATM Robbery
## Config file

There is also a config file in `s1n_atmrobbery/server/config.lua` that you can modify to your liking.


For both QBCore and ESX :

```lua
Config = Config or { }

Config.debugMode = true

Config.Framework = {
    FrameworkName = 'QBCore', -- ESX or QBCore
    QBCoreFileName = 'qb-core',
    OldESX = false,
    ESXEvent = 'esx:getSharedObject',
    ESXFileName = 'es_extended',
    SQLWrapper = 'oxmysql' --  oxmysql / mysql-async / ghmattimysql
}

-- If set to false, the script will use ox_target

Config.UseQBTarget = false

-- If set to true, the script will use quasar_inventory

Config.UseQuasarInventory = false

-- If set to true, the script will use ox_inventory,
-- IMPORTANT: Go to Config.Items to adapt c4 item for ox_inventory

Config.UseOXInventory = false

-- If `enable` set to true, the script will use this item name as cash (to get the money from an ATM)

Config.CashItem = {
    enable = false,
    itemName = 'cash'
}

-- The chance of getting money from the atm, should be a number between 0 - 100

Config.GetMoneyChance = 50

-- The reward that the player will get for robbing the atm, the number will be somewhere around the min - max values

Config.AtmReward = { min = 5000, max = 10000 }

-- Enable / disable the option to rob the atm using a drill

Config.EnableDrill = true

-- Enable / disable the option to rob the atm using a c4

Config.EnableC4 = true

-- Enable / disable the vehicle whitelist system

Config.EnableVehicleWhitelist = true

-- All the vehicles that are whitelisted

Config.WhitelistVehicles = {
    ['futo'] = true
}

-- All the jobs that will get the robbery notification

Config.NotificationJobs = {
    ['police'] = true
}

-- Robbery notification timeout

Config.NotificationTimeout = 15000

-- Number of milliseconds after which the rope and atm are deleted when you finished the robbery process for an ATM.

Config.AtmCooldown = 20000

-- Progress bar durations

Config.ProgressDuration = { drillfirst = 7000, drillsecond = 7000, search = 5000 }

-- Robbery items

-- IMPORTANT: if you use ox_inventory, please modify 'c4' to 'weapon_stickybomb'
Config.Items = { rope = 'rope', drill = 'drill', c4 = 'c4' }

-- Distance to drill the ATM after drilling it from the wall

Config.DrillAfterDistance = 20.0

-- Minimum police online to start a robbery

Config.MinPoliceOnline = 0
```
