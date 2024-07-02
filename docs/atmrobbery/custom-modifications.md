---
sidebar_position: 1
title: Custom modifications
sidebar_label: Custom modifications
---

![S1nScripts Logo](https://forum.cfx.re/uploads/default/optimized/4X/e/6/5/e65fbb4eecc44980b6075ff5cb6ca26274767015_2_690x388.jpeg)

# ATM Robbery
## Custom modifications

### Adding compatibility with another script when a robbery has started

If you need to do things client-side, go to `client/api.lua` and look at the function `NotifyPolice`.
If you need to do things server-side, go to `server/api.lua` and look at the function `SendAlertToPoliceOfficer` and `SendAlert`.

#### Example of adding compatibility with the `cd_dispatch` script

More information about the `cd_dispatch` script events can be found [here](https://docs.codesign.pro/paid-scripts/dispatch/resource-integration#paid-resources)

1. Go to `server/api.lua` and look at the function `SendAlert`.
2. Replace the function with the following code:

```lua
function SendAlert(coords)
    TriggerClientEvent('cd_dispatch:AddNotification', -1, {
        job_table = {'police', },
        coords = coords,
        title = '10-15 - Robbery',
        message = "Robbery in progress",
        flash = 0,
        unique_id = tostring(math.random(0000000,9999999)),
        sound = 1,
        blip = {
            sprite = 431,
            scale = 1.2,
            colour = 3,
            flashes = false,
            text = '911 - Robbery',
            time = 5,
            radius = 0,
        }
    })
end
``