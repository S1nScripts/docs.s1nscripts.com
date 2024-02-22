---
sidebar_position: 1
title: Installation
sidebar_label: Installation
---

![S1nScripts Logo](https://forum.cfx.re/uploads/default/original/4X/c/c/8/cc899a90b2c260b6a3adc88d9d8b1566492f6fd1.jpeg)

# Spawn Selector
## Installation

Follow these steps to install and configure the Spawn Selector:

1. Download the script from KeyMaster.
2. Download the "Library" script from KeyMaster.
3. Drag the `s1n_lib` folder into your `resources` directory.
4. Drag the `s1n_spawnselector-...` folder into your `resources` directory.
5. Rename the `s1n_spawnselector-....` folder to `s1n_spawnselector`.
6. Start the library by adding `start s1n_lib` to your `server.cfg` file.
7. Start the script by adding `start s1n_spawnselector` to your `server.cfg` file.
8. Configure the script by modifying the values in the `config.lua` file located in the `s1n_spawnselector` script folder.


## Adaptation to ESX

No adaptation needed.

## Adaptation to QBCore

Good to know : The script doesn't offer the possibility to select an appartment so it will use the default from the config file.

To make it work, please lead to qb-apartments/client/main.lua and look for `"apartments:client:setupSpawnUI"`.
You need to make the adaptation of the function like this :

```lua
RegisterNetEvent('apartments:client:setupSpawnUI', function(cData)
    QBCore.Functions.TriggerCallback('apartments:GetOwnedApartment', function(result)
        if result then
            TriggerEvent('spawnselector:openNui', true)
            TriggerEvent("apartments:client:SetHomeBlip", result.type)
        else
            if Apartments.Starting then
                TriggerEvent('qb-spawn:client:setupSpawns', cData, true, Apartments.Locations)
                TriggerEvent('spawnselector:openNui', true)
            else
                TriggerEvent('spawnselector:openNui', true)
            end
        end
    end, cData.citizenid)
end)
```