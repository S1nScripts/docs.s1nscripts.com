---
sidebar_position: 1
title: Config
sidebar_label: Config
---

# Vending Machine 
## Config file

For both ESX and QBCore:
```lua
Config = {
    debugMode = true, -- Set to false to disable debug messages in the console

    framework = {
        -- The name of the framework you are using (qb-core, esx-legacy, esx-old)
        name = "qb-core",
        triggers = {
            esxSharedObject = "esx:getSharedObject",
        },
        resourceNames = {
            qbCore = "qb-core",
            esx = "es_extended",
        },
    },

    discord = {
        enable = false, -- true = enable discord integration, false = disable discord integration
        webhookURL = "",
        username = "s1n_vendingmachine Logs",
        color = 15844367,
        title = "Player log"
    },

    -- List of all the vending machines
    machines = {
        {
            -- The position of the vending machine
            position = vector3(-708.1695, -909.9591, 19.215591),
            -- The distance you need to be to use the vending machine
            useDistance = 2,

            -- The blip that will be shown on the map
            blip = {
                -- The sprite id of the blip (see all here : https://docs.fivem.net/docs/game-references/blips/)
                sprite = 52,
                -- The color of the blip (see all here : https://docs.fivem.net/docs/game-references/blips/#blip-colors)
                color = 2,
                -- The scale of the blip (between 0.1 and 1.0)
                scale = 0.5,
                -- The label of the blip
                text = "Vending Machine",
            },

            -- Available categories : foods, drinks, others
            items = {
                --[[
                TEMPLATE:

                {
                    -- The item name (must be the same as the item name in the database)
                    itemName = "sandwich",
                    -- The label of the item (will be shown in the menu)
                    itemLabel = 'Sandwich',
                    -- The price of the item
                    itemPrice = 4,
                    -- The category of the item
                    category = 'foods',
                    -- The image url of the item (must be a direct link to the image)
                    imageUrl = "https://i.pinimg.com/originals/f1/12/69/f11269b45e561d9612e8962bf635d2d5.png"
                },
                ]]--

                {
                    itemName = "sandwich",
                    itemLabel = 'Sandwich',
                    itemPrice = 4,
                    category = 'foods',
                    imageUrl = "https://i.pinimg.com/originals/f1/12/69/f11269b45e561d9612e8962bf635d2d5.png"
                },
                {
                    itemName = "tosti",
                    itemLabel = 'Tosti',
                    itemPrice = 5,
                    category = 'foods',
                    imageUrl = "https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/590x590/products/3687/9483/unnamed__28227.1655481342.png?c=2"
                },
                {
                    itemName = "twerks_candy",
                    itemLabel = 'Twerks Candy',
                    itemPrice = 5,
                    category = 'foods',
                    imageUrl = "https://png.pngtree.com/png-vector/20230120/ourmid/pngtree-valentines-day-love-candy-wrappers-png-image_6569640.png"
                },
                {
                    itemName = "snikkel_candy",
                    itemLabel = 'Snikkel Candy',
                    itemPrice = 5,
                    category = 'foods',
                    imageUrl = "https://pngimg.com/d/snickers_PNG13929.png"
                },
                {
                    itemName = "water_bottle",
                    itemLabel = 'Water Bottle',
                    itemPrice = 5,
                    category = 'drinks',
                    imageUrl = "https://freepngimg.com/thumb/categories/1925.png"
                },
                {
                    itemName = "kurkakola",
                    itemLabel = 'Kurkakola',
                    itemPrice = 5,
                    category = 'drinks',
                    imageUrl = "https://www.freepnglogos.com/uploads/coca-cola-png/coca-cola-png-image-pngpix-6.png"
                },
                {
                    itemName = "coffee",
                    itemLabel = 'Coffee',
                    itemPrice = 5,
                    category = 'drinks',
                    imageUrl = "https://www.nicepng.com/png/full/26-263688_brooklyn-new-york-cup-of-coffee-png.png"
                },
                {
                    itemName = "whiskey",
                    itemLabel = 'Whiskey',
                    itemPrice = 5,
                    category = 'drinks',
                    imageUrl = "https://curiada.com/cdn/shop/products/UncleNearestTransp.png?v=1628102362"
                },
                {
                    itemName = "beer",
                    itemLabel = 'Beer',
                    itemPrice = 5,
                    category = 'drinks',
                    imageUrl = "https://static.wikia.nocookie.net/icarus/images/5/5c/ITEM_Beer.png/revision/latest?cb=20211101181148"
                },
                {
                    itemName = "vodka",
                    itemLabel = 'Vodka',
                    itemPrice = 5,
                    category = 'drinks',
                    imageUrl = "https://i.pinimg.com/originals/1f/a2/13/1fa2131c80be78ef7691b448df93097f.png"
                },
            }
        },
        {
            -- The position of the vending machine
            position = vector3(-708.1695, -909.9591, 19.215591),
            -- The distance you need to be to use the vending machine
            useDistance = 2,

            -- The blip that will be shown on the map
            blip = {
                -- The sprite id of the blip (see all here : https://docs.fivem.net/docs/game-references/blips/)
                sprite = 52,
                -- The color of the blip (see all here : https://docs.fivem.net/docs/game-references/blips/#blip-colors)
                color = 2,
                -- The scale of the blip (between 0.1 and 1.0)
                scale = 0.5,
                -- The label of the blip
                text = "Vending Machine",
            },

            -- Available categories : foods, drinks, others
            items = {
                --[[
                TEMPLATE:

                {
                    -- The item name (must be the same as the item name in the database)
                    itemName = "sandwich",
                    -- The label of the item (will be shown in the menu)
                    itemLabel = 'Sandwich',
                    -- The price of the item
                    itemPrice = 4,
                    -- The category of the item
                    category = 'foods',
                    -- The image url of the item (must be a direct link to the image)
                    imageUrl = "https://i.pinimg.com/originals/f1/12/69/f11269b45e561d9612e8962bf635d2d5.png"
                },
                ]]--

                {
                    itemName = "sandwich",
                    itemLabel = 'Sandwich',
                    itemPrice = 4,
                    category = 'foods',
                    imageUrl = "https://i.pinimg.com/originals/f1/12/69/f11269b45e561d9612e8962bf635d2d5.png"
                },
                {
                    itemName = "tosti",
                    itemLabel = 'Tosti',
                    itemPrice = 5,
                    category = 'foods',
                    imageUrl = "https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/590x590/products/3687/9483/unnamed__28227.1655481342.png?c=2"
                },
                {
                    itemName = "twerks_candy",
                    itemLabel = 'Twerks Candy',
                    itemPrice = 5,
                    category = 'foods',
                    imageUrl = "https://png.pngtree.com/png-vector/20230120/ourmid/pngtree-valentines-day-love-candy-wrappers-png-image_6569640.png"
                },
                {
                    itemName = "snikkel_candy",
                    itemLabel = 'Snikkel Candy',
                    itemPrice = 5,
                    category = 'foods',
                    imageUrl = "https://pngimg.com/d/snickers_PNG13929.png"
                },
                {
                    itemName = "water_bottle",
                    itemLabel = 'Water Bottle',
                    itemPrice = 5,
                    category = 'drinks',
                    imageUrl = "https://freepngimg.com/thumb/categories/1925.png"
                },
                {
                    itemName = "kurkakola",
                    itemLabel = 'Kurkakola',
                    itemPrice = 5,
                    category = 'drinks',
                    imageUrl = "https://www.freepnglogos.com/uploads/coca-cola-png/coca-cola-png-image-pngpix-6.png"
                },
                {
                    itemName = "coffee",
                    itemLabel = 'Coffee',
                    itemPrice = 5,
                    category = 'drinks',
                    imageUrl = "https://www.nicepng.com/png/full/26-263688_brooklyn-new-york-cup-of-coffee-png.png"
                },
                {
                    itemName = "whiskey",
                    itemLabel = 'Whiskey',
                    itemPrice = 5,
                    category = 'drinks',
                    imageUrl = "https://curiada.com/cdn/shop/products/UncleNearestTransp.png?v=1628102362"
                },
                {
                    itemName = "beer",
                    itemLabel = 'Beer',
                    itemPrice = 5,
                    category = 'drinks',
                    imageUrl = "https://static.wikia.nocookie.net/icarus/images/5/5c/ITEM_Beer.png/revision/latest?cb=20211101181148"
                },
                {
                    itemName = "vodka",
                    itemLabel = 'Vodka',
                    itemPrice = 5,
                    category = 'drinks',
                    imageUrl = "https://i.pinimg.com/originals/1f/a2/13/1fa2131c80be78ef7691b448df93097f.png"
                },
            }
        },
    }
}
```