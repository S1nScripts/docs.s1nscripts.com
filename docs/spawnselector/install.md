---
sidebar_position: 1
title: Installation
sidebar_label: Installation
---

![S1nScripts Logo](https://forum.cfx.re/uploads/default/original/4X/c/c/8/cc899a90b2c260b6a3adc88d9d8b1566492f6fd1.jpeg)

# Spawn Selector
## Installation

Follow these steps to install and configure the spawnselector:

1. Drag the `s1n_spawnselector-...` folder into your `resources` directory.
2. Rename the `s1n_spawnselector-....` folder to `s1n_spawnselector`.
3. Start the script by adding `start s1n_spawnselector` to your `server.cfg` file.
4. Configure the script by modifying the values in the `config.lua` file located in the `s1n_spawnselector` script folder.


## Adaptation to ESX

No adaptation needed.

## Adaptation to QBCore

Good to know : The script doesn't offer the possibility to select an appartment so you'll need to use the default qb-spawn for that like the following code does.

We replaced some (NOT EVERYTHING) `qb-spawn:client:openUI` to `spawnselector:openNui` to open our spawn selector.

To make it work, please lead to qb-apartments/client/main.lua and look for `"apartments:client:setupSpawnUI"`.
You need to make the adaptation of the function like this :

```lua
RegisterNetEvent('apartments:client:setupSpawnUI', function(cData, newCharacter)
    QBCore.Functions.TriggerCallback('apartments:GetOwnedApartment', function(result)
        if result then
            TriggerEvent('qb-spawn:client:setupSpawns', cData, false, nil)
            if newCharacter then
                TriggerEvent('qb-spawn:client:openUI', true)
            else
                -- It shows the spawn selector UI
                TriggerEvent('spawnselector:openNui', true)
            end
            TriggerEvent("apartments:client:SetHomeBlip", result.type)
        else
            if Apartments.Starting then
                TriggerEvent('qb-spawn:client:setupSpawns', cData, true, Apartments.Locations)
                if newCharacter then
                    TriggerEvent('qb-spawn:client:openUI', true)
                else
                    -- It shows the spawn selector UI
                    TriggerEvent('spawnselector:openNui', true)
                end
            else
                TriggerEvent('qb-spawn:client:setupSpawns', cData, false, nil)
                if newCharacter then
                    TriggerEvent('qb-spawn:client:openUI', true)
                else
                    -- It shows the spawn selector UI
                    TriggerEvent('spawnselector:openNui', true)
                end
            end
        end
    end, cData.citizenid)
end)
```