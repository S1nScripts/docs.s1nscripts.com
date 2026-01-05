---
sidebar_position: 2
title: How To Use
sidebar_label: How To Use
---

![S1nScripts Logo](https://forum.cfx.re/uploads/default/original/4X/7/1/8/718c6f28a9b5ab0dc33bf79288bcb418e7684326.jpeg)


## Default Types
- `success`
- `error`
- `info`
- `warning`
- `message`

## Default Positions
- `top`
- `top-left`
- `top-right`
- `bottom`
- `bottom-left`
- `bottom-right`

### Client side

To send a notification from a client-side file, use the `s1n_notify:notify` event:

```lua
TriggerEvent("s1n_notify:notify", {
  type = "success", -- Modify the type by replacing "success" with the type you want (all listed above)
  title = "The title of the notifcation", -- Replace "The title of the notifcation" with the title you want
  message = "The text of the notification", -- Replace "The text of the notification" with the text you want
  duration = 5000, -- The duration of the notification in milliseconds
  theme = "colorful", -- The theme of the notification (colorful or white)
  position = "top-right" -- Modify the position of the notification by replacing "top-right" with the position you want (all listed above)
})
```

### Server side

You can use the `s1n_notify:notify` event to send a notification to the client from a server-side file.

Replace `source` with the source of the player you want to send the notification to. By default in a server-side file, the source is the player who triggered the event.
```lua
TriggerEvent("s1n_notify:notify", source, {
  type = "success", -- Modify the type by replacing "success" with the type you want (all listed above)
  title = "The title of the notifcation", -- Replace "The title of the notifcation" with the title you want
  message = "The text of the notification", -- Replace "The text of the notification" with the text you want
  duration = 5000, -- The duration of the notification in milliseconds
  theme = "colorful", -- The theme of the notification (colorful or white)
  position = "top-right" -- Modify the position of the notification by replacing "top-right" with the position you want (all listed above)
})
```

Example of a server-side file which sends a notification to the player who triggered the /testnotify command:
```lua
RegisterCommand("testnotify", function(source, args)
    TriggerClientEvent("s1n_notify:notify", source, {
        type = "success",
        title = "The Notify System",
        message = "Thanks for using my notify system! :)",
        duration = 5000,
        theme = "colorful",
        position = "top-right"
    })
end, false)
```