---
sidebar_position: 1
title: Installation
sidebar_label: Installation
---

![S1nScripts Logo](https://dunb17ur4ymx4.cloudfront.net/packages/images/c51c22495d1d374824fc5ee961248a624a65c47d.jpg)

# Government System
## Installation

:::warning

We highly recommend you to read carefully each step written below.

**Don't skip any step, it could lead to a non-functioning script.**

:::

### Follow these steps to install the government system


1. Download the script from KeyMaster.
2. Download the "Library" script from KeyMaster.
3. Drag the `s1n_lib` folder into your `resources` directory.
4. Rename the `s1n_lib-....` folder to `s1n_lib`.
5. Drag the `s1n_government` folder into your `resources` directory.
6. Rename the `s1n_government-....` folder to `s1n_government`.
7. Start the lib by adding `start s1n_lib` to your `server.cfg` file.
8. Start the banking system by adding `start s1n_government` to your `server.cfg` file.
9. Please insert the SQL queries in your database (you can find them in the `s1n_government/database.sql` file).
10. Configure the script by modifying the values in all the files located in the `s1n_government/configuration/` script folder.
11. Configure the library by modifying the values in all the files contained in the `configuration/` folder located in the `s1n_lib/` script folder.
12. Follow the instructions below to adapt the script to your framework for some features.

#### Auto update jobs

##### Adapt to ESX

No need to adapt the script.

##### Adapt to QBCore

Go to `qb-core/server/events.lua`. 
Then, at the bottom of the file, add the following code:

```lua
RegisterNetEvent('QBCore:UpdateJobs', function(jobs) 
    QBCore.Shared.Jobs = jobs 
end)
```

#### Paycheck taxes 

##### Adapt to ESX

Go to `es_extended/server/paycheck.lua` or the equivalent. Then look for `StartPayCheck` function and replace or adapt it with the following code:

```lua
function StartPayCheck() 
    CreateThread(function() 
        while true do 
            Wait(Config.PaycheckInterval) 
            
            for player, xPlayer in pairs(ESX.Players) do 
                local jobLabel = xPlayer.job.label 
                local job = xPlayer.job.grade_name 
                local salary = xPlayer.job.grade_salary
    
                if salary > 0 then
                    if job == "unemployed" then -- unemployed
                        xPlayer.addAccountMoney("bank", salary, "Welfare Check")
                        exports["s1n_government"]:removePaycheckTaxes(xPlayer.source, salary)
                       
                        TriggerClientEvent("esx:showAdvancedNotification", player, TranslateCap("bank"), TranslateCap("received_paycheck"), TranslateCap("received_help", salary), "CHAR_BANK_MAZE", 9)
                       
                        if Config.LogPaycheck then
                            ESX.DiscordLogFields("Paycheck", "Paycheck - Unemployment Benefits", "green", {
                                { name = "Player", value = xPlayer.name, inline = true },
                                { name = "ID", value = xPlayer.source, inline = true },
                                { name = "Amount", value = salary, inline = true },
                            })
                        end
                    elseif Config.EnableSocietyPayouts then -- possibly a society
                        TriggerEvent("esx_society:getSociety", xPlayer.job.name, function(society)
                            if society ~= nil then -- verified society
                                TriggerEvent("esx_addonaccount:getSharedAccount", society.account, function(account)
                                    if account.money >= salary then -- does the society money to pay its employees?
                                        xPlayer.addAccountMoney("bank", salary, "Paycheck")
                                       
                                        exports["s1n_government"]:removePaycheckTaxes(xPlayer.source, salary)
                                        account.removeMoney(salary)
                                       
                                        if Config.LogPaycheck then
                                            ESX.DiscordLogFields("Paycheck", "Paycheck - " .. jobLabel, "green", {
                                                { name = "Player", value = xPlayer.name, inline = true },
                                                { name = "ID", value = xPlayer.source, inline = true },
                                                { name = "Amount", value = salary, inline = true },
                                            })
                                        end
    
                                        TriggerClientEvent("esx:showAdvancedNotification", player, TranslateCap("bank"), TranslateCap("received_paycheck"), TranslateCap("received_salary", salary), "CHAR_BANK_MAZE", 9)
                                    else
                                        TriggerClientEvent("esx:showAdvancedNotification", player, TranslateCap("bank"), "", TranslateCap("company_nomoney"), "CHAR_BANK_MAZE", 1)
                                    end
                                end)
                            else -- not a society
                                xPlayer.addAccountMoney("bank", salary, "Paycheck")
                                exports["s1n_government"]:removePaycheckTaxes(xPlayer.source, salary)
                               
                                if Config.LogPaycheck then
                                    ESX.DiscordLogFields("Paycheck", "Paycheck - " .. jobLabel, "green", {
                                        { name = "Player", value = xPlayer.name, inline = true },
                                        { name = "ID", value = xPlayer.source, inline = true },
                                        { name = "Amount", value = salary, inline = true },
                                    })
                                end
                             
                                TriggerClientEvent("esx:showAdvancedNotification", player, TranslateCap("bank"), TranslateCap("received_paycheck"), TranslateCap("received_salary", salary), "CHAR_BANK_MAZE", 9)
                            end
                        end)
                    else -- generic job
                        xPlayer.addAccountMoney("bank", salary, "Paycheck")
                        exports["s1n_government"]:removePaycheckTaxes(xPlayer.source, salary)
                       
                        if Config.LogPaycheck then
                            ESX.DiscordLogFields("Paycheck", "Paycheck - Generic", "green", {
                                { name = "Player", value = xPlayer.name, inline = true },
                                { name = "ID", value = xPlayer.source, inline = true },
                                { name = "Amount", value = salary, inline = true },
                            })
                        end
                      
                        TriggerClientEvent("esx:showAdvancedNotification", player, TranslateCap("bank"), TranslateCap("received_paycheck"), TranslateCap("received_salary", salary), "CHAR_BANK_MAZE", 9)
                    end
                end
            end
        end
    end)
end
```

##### Adapt to QBCore

Go to `qb-core/server/functions.lua` or the equivalent. Then look for `PaycheckInterval` function and replace or adapt it with the following code:

```lua
function PaycheckInterval()
    if next(QBCore.Players) then
        for _, Player in pairs(QBCore.Players) do
            if Player then
                local payment = QBShared.Jobs[Player.PlayerData.job.name]['grades'][tostring(Player.PlayerData.job.grade.level)].payment

                if not payment then
                    payment = Player.PlayerData.job.payment

                end

                if Player.PlayerData.job and payment > 0 and (QBShared.Jobs[Player.PlayerData.job.name].offDutyPay or Player.PlayerData.job.onduty) then
                    if QBCore.Config.Money.PayCheckSociety then
                        local account = exports['qb-banking']:GetAccountBalance(Player.PlayerData.job.name)

                        if account ~= 0 then          -- Checks if player is employed by a society
                            if account < payment then -- Checks if company has enough money to pay society
                                TriggerClientEvent('QBCore:Notify', Player.PlayerData.source, Lang:t('error.company_too_poor'), 'error')
                            else
                                Player.Functions.AddMoney('bank', payment, 'paycheck')
                                exports['qb-banking']:RemoveMoney(Player.PlayerData.job.name, payment, 'Employee Paycheck')
                                TriggerClientEvent('QBCore:Notify', Player.PlayerData.source, Lang:t('info.received_paycheck', { value = payment }))
                                exports["s1n_government"]:removePaycheckTaxes(Player.PlayerData.source, payment)
                            end
                        else
                            Player.Functions.AddMoney('bank', payment, 'paycheck')
                            TriggerClientEvent('QBCore:Notify', Player.PlayerData.source, Lang:t('info.received_paycheck', { value = payment }))
                            exports["s1n_government"]:removePaycheckTaxes(Player.PlayerData.source, payment)
                        end
                    else
                        Player.Functions.AddMoney('bank', payment, 'paycheck')
                        TriggerClientEvent('QBCore:Notify', Player.PlayerData.source, Lang:t('info.received_paycheck', { value = payment }))
                        exports["s1n_government"]:removePaycheckTaxes(Player.PlayerData.source, payment)
                    end
                end
            end
        end
    end
end
```