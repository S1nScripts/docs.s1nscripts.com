---
sidebar_position: 1
title: Config
sidebar_label: Config
---

# Notify
## Config file

Standalone:
```lua
--[[
    Need help with the script ? Go into the support Discord https://discord.gg/aKF3DX8yPx
    A verification that you bought the script will be necessary.

    IMPORTANT:

    Default themes: white, colorful
    List of available position: top, top-right, top-left, bottom, bottom-right, bottom-left

    USAGE:

    With exports["s1n_notify"]:Notify(type, title, message, duration, theme, position)
    Example:
    exports["s1n_notify"]:Notify("success", "the title", "message", 5000, "colorful", "top-right")

    With TriggerEvent("s1n_notify:notify", object)
    Example:
    TriggerEvent("s1n_notify:notify",
        {
            type = "success",
            title = "title",
            message = "message",
            duration = 5000,
            theme = "colorful",
            position = "top-right"
        }
    )
]]

Config = {
    exportNames = {
        s1nLib = "s1n_lib",
    },
    notificationTypes = {
        -- Here you can setup new type of notifications.
        info = {
            icon = "MdInfo",
            color = "#4666D7",
            sound = {
                enable = true,
                source = "popup.mp3",
                volume = 0.75
            }
        },
        warning = {
            icon = "MdWarning",
            color = "#E7A526",
            sound = {
                enable = true,
                source = "popup.mp3",
                volume = 0.5
            }
        },
        success = {
            icon = "MdCheckCircle",
            color = "#49AF72",
            sound = {
                enable = true,
                source = "pop.wav",
                volume = 0.2
            }
        },
        error = {
            icon = "MdError",
            color = "#D74646",
            sound = {
                enable = true,
                source = "pop.wav",
                volume = 1
            }
        },
        message = {
            icon = "MdMessage",
            color = "#676767",
            sound = {
                enable = true,
                source = "pop.wav",
                volume = 1
            }
        },
        --[[
        TO CREATE A CUSTOM TYPE:

        nameOfTheNotificationType = {
            icon = "NameOfTheIcon", -- Available icons : https://react-icons.github.io/react-icons/icons?name=md
            color = "#676767", -- Color in HEX, RGB(A), HSLA..
            sound = {
                enable = true, -- Enable or disable sound effect
                source = "pop.wav", -- Name of the file
                volume = 1 -- Volume between 0 and 1
            }
        },
        ]]
    },

    notifyIntervals = {
        --[[
        Example for notifications with interval:

        {
            interval = 10000,
            notify = {
                type = "info",
                title = "Tip",
                message = "You can press I to open your inventory",
                duration = 4000,
                theme = "colorful",
                position = "top-right"
            }
        },

        TO PUT BELOW THE DOUBLE ]
        ]]

    },
}
```
