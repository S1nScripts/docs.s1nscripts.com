---
sidebar_position: 1
title: Installation
sidebar_label: Installation
---

![S1nScripts Logo](https://forum.cfx.re/uploads/default/original/4X/7/1/8/718c6f28a9b5ab0dc33bf79288bcb418e7684326.jpeg)

# Notification System Installation

Follow these steps to install and configure the notification system:

1. Drag the `s1n_notifysystem` folder into your `resources` directory.
2. Start the notification system by adding `start s1n_notifysystem` to your `server.cfg` file.
3. Configure the system by modifying the values in the `config.lua` file located in the `s1n_notifysystem` folder.

Here is an example of the `config.lua` file:

```lua
Config = {
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