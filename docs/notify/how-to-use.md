---
sidebar_position: 2
title: How To Use
sidebar_label: How To Use
---

![S1nScripts Logo](https://forum.cfx.re/uploads/default/original/4X/7/1/8/718c6f28a9b5ab0dc33bf79288bcb418e7684326.jpeg)

# How to Use the Notification System

To use the notification system, you need to trigger the `s1n_notify:notify` event with the following parameters:

```lua
TriggerEvent("s1n_notify:notify", {
type = "success",
title = "title",
message = text,
duration = 5000,
theme = "colorful",
position = "top-right"
})
```

If you're using the code on the client-side, you can use `TriggerEvent` to trigger the notification. However, if you're using the code on the server-side, you need to use `TriggerClientEvent` and pass the source as the first argument. Here's an example of how to use `TriggerClientEvent`:

```lua
TriggerClientEvent(source, "s1n_notify:notify", {
    type = "success",
    title = "title",
    message = text,
    duration = 5000,
    theme = "colorful",
    position = "top-right"
})
```

The `type` parameter corresponds to the type of notification, which can be one of the following values: `info`, `warning`, `success`, `error`, or `message`. 

The `title` parameter corresponds to the title of the notification, which will appear at the top of the notification box.

The `message` parameter corresponds to the message you want to display in the notification.

The `duration` parameter corresponds to the time you want the notification to be displayed (in milliseconds). For example, if you want the notification to be displayed for 5 seconds, you should set `duration` to `5000`.

The `theme` parameter corresponds to the color theme of the notification, which can be either `colorful` or `white`.

The `position` parameter corresponds to the position where you want the notification to appear on the screen. It can be one of the following values: `top-right`, `top-left`, `bottom-right`, or `bottom-left`.

Here's an example that registers a command that triggers a success notification:

```lua
-- Client Side
RegisterCommand("notificationclient", function()
    TriggerEvent("s1n_notify:notify", {
        type = "success",
        title = "The Notify System",
        message = "Thanks for using my notify system! :)",
        duration = 5000,
        theme = "colorful",
        position = "top-right"
    })
end, false)

-- Server Side
RegisterCommand("notificationserver", function(source, args)
    TriggerClientEvent(source, "s1n_notify:notify", {
        type = "success",
        title = "The Notify System",
        message = "Thanks for using my notify system! :)",
        duration = 5000,
        theme = "colorful",
        position = "top-right"
    })
end, false)
```