---
sidebar_position: 1
title: Config
sidebar_label: Config
---

# ATM Robbery
## Config file

There is also a config file in `s1n_atmrobbery/server/config.lua` that you can modify to your liking.

```lua

For both QBCore and ESX :

```lua
Config = { }

Config.Framework = {
FrameworkName = 'QBCore', -- ESX or QBCore
QBCoreFileName = 'qb-core',
OldESX = false,
ESXEvent = 'esx:getSharedObject',
ESXFileName = 'es_extended',
SQLWrapper = 'oxmysql' --  oxmysql / mysql-async / ghmattimysql
}

-- Discord webhook URL for robbery logs

Config.DiscordWebhook = ''

-- If set to false, the script will use ox_target

Config.UseQBTarget = false

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

-- Robbery cooldown

Config.AtmCooldown = 20000

-- Progress bar durations

Config.ProgressDuration = { drillfirst = 7000, drillsecond = 7000, search = 5000 }

-- Robbery items

Config.Items = { rope = 'rope', drill = 'drill', c4 = 'c4' }
```