---
sidebar_position: 1
title: Config
sidebar_label: Config
---

# Locker/Container System
## Config file

For both QBCore and ESX :

```lua
Config = Config or {}

-- Set to true to show debug messages in the console or false to hide them
Config.DebugMode = true

-- You need to verify that the following scripts are exactly named like this or change the names here
Config.ExportNames = {
    s1nLib = "s1n_lib"
}

-- All configurations related to lockers
Config.Lockers = {
    -- Maximum capacity (weight) of a locker in grams (1kg = 1000g)
    maxLockerCapacity = 500000,

    rent = {
        -- Minimum rent price for a locker
        maxPrice = 10000,

        -- Duration of the rent in seconds
        duration = 7 * 24 * 60 * 60
    },

    -- Maximum pricing to buy a locker
    maxBuyPrice = 100000,

    -- When selling a locker, the seller will receive a percentage of the buy price. You need tp set a value between 0 and 1 where 0 is 0% and 1 is 100%. Default is 0.7 (70%)
    sellPercent = 0.7,

    -- Length of the locker code when someone else than the owner wants to interact with the locker
    codeLength = 4
}
```
