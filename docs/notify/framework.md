---
sidebar_position: 3
title: Setup Notification System in Framework
sidebar_label: Framework Implementation
---

![S1nScripts Logo](https://forum.cfx.re/uploads/default/original/4X/7/1/8/718c6f28a9b5ab0dc33bf79288bcb418e7684326.jpeg)

### <img src="https://esx.s3.fr-par.scw.cloud/blanc-800x800.png" width="50"/>

To integrate the notification system into your ESX framework, you need to modify the `ESX.ShowNotification` function located in `es_extended/client/functions.lua` on line 73. 

Here is the original code:

```lua
function ESX.ShowNotification(message, type, length)
    if GetResourceState("esx_notify") ~= "missing" then
        return exports["esx_notify"]:Notify(type, length, message)
    end

    print("[^1ERROR^7] ^5ESX Notify^7 is Missing!")
end
```
Replace it with the following code:
```lua
function ESX.ShowNotification(message, type, length, position, title)
    TriggerEvent("s1n_notify:notify", {
        type = type or "success",
        title = title or "Notification",
        message = message,
        duration = length,
        theme = "colorful",
        position = position or "top-right"
    })
end
```
Note that you will need to modify any calls to the `ESX.ShowNotification` function in your scripts to match the new parameters. Here's an example:
```lua
ESX.ShowNotification("Hello everyone!", "success", 5000, "top-right", "Title")
```

### <img src="https://www.gitbook.com/cdn-cgi/image/width=256,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F1645475769-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FBTxg66Z0GQkOQS46Nzn3%252Flogo%252F2VUg8eCqX2nybWhxImyU%252FLogotype%2520-%2520Display%2520Picture%2520-%2520Stylized%2520-%2520Red.png%3Falt%3Dmedia%26token%3Df2dea7ab-8c44-41a5-ad45-6b0fd8f6248e" width="90"/>


To integrate the notification system into your Qbcore framework, you need to modify the `QBCore.Functions.Notify` function located in `qb-core/client/functions.lua` on line 88. 

Here is the original code:

```lua
function QBCore.Functions.Notify(text, texttype, length)
    if type(text) == "table" then
        local ttext = text.text or 'Placeholder'
        local caption = text.caption or 'Placeholder'
        texttype = texttype or 'primary'
        length = length or 5000
        SendNUIMessage({
            action = 'notify',
            type = texttype,
            length = length,
            text = ttext,
            caption = caption
        })
    else
        texttype = texttype or 'primary'
        length = length or 5000
        SendNUIMessage({
            action = 'notify',
            type = texttype,
            length = length,
            text = text
        })
    end
end
```
Replace it with the following code:
```lua
function QBCore.Functions.Notify(message, type, length, position, title)
    TriggerEvent("s1n_notify:notify", { 
        type = type or "success", 
        title = title, 
        message = message, 
        duration = length, 
        theme = "colorful", 
        position = position or "top-right"
    })
end
```
Note that you will need to modify any calls to the `QBCore.Functions.Notify` function in your scripts to match the new parameters. Here's an example:
```lua
QBCore.Functions.Notify("Hello everyone !", "success", 5000, "top-right", "Title")
```
