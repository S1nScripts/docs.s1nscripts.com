---
sidebar_position: 1
title: Installation
sidebar_label: Installation
---

![S1nScripts Logo](https://forum.cfx.re/uploads/default/optimized/4X/e/6/5/e65fbb4eecc44980b6075ff5cb6ca26274767015_2_690x388.jpeg)

# ATM Robbery
## Installation

:::warning

We highly recommend you to read carefully each step written below.

**Don't skip any step, it could lead to a non-functioning script.**

:::

### **Follow these steps to install the atm robbery system**

1. Download the script from KeyMaster.
2. Download the "Library" script from KeyMaster.
3. Drag the `s1n_atmrobbery` folder into your `resources` directory. (you might need to rename the script's folder)
4. Rename the `s1n_atmrobbery-....` folder to `s1n_atmrobbery`.
5. Drag the `s1n_lib` folder into your `resources` directory.
6. Rename the `s1n_lib-....` folder to `s1n_lib`.
7. Start the library by adding `start s1n_lib` to your `server.cfg` file.
8. Start the atm robbery system by adding `start s1n_atmrobbery` to your `server.cfg` file.
9. **(if you're using ESX)** Please insert SQL query in your database. The images for these items (for your inventory script) are not provided by us, you have to add them yourself. 
```sql
INSERT INTO `items` (`name`, `label`, `weight`) VALUES
	('drill', 'Drill', 1),
	('rope', 'Rope', 1),
    ('c4', 'C4', 1);
```
10. **(if you're using QBCore)** Please add these items to **qb-core/shared/items.lua**. The images for these items (for your inventory script) are not provided by us, you have to add them yourself.
```txt 
['drill'] = { ['name'] = 'drill', ['label'] = 'Drill', ['weight'] = 0, ['type'] = 'item', ['image'] = 'drill.png', ['unique'] = true, ['useable'] = false, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = ''},
['rope'] = { ['name'] = 'rope', ['label'] = 'Rope', ['weight'] = 0, ['type'] = 'item', ['image'] = 'rope.png', ['unique'] = true, ['useable'] = false, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = ''},
['c4'] = { ['name'] = 'c4', ['label'] = 'C4', ['weight'] = 0, ['type'] = 'item', ['image'] = 'c4.png', ['unique'] = true, ['useable'] = false, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = ''},
```

11. Configure the script by modifying the values in the `config.lua` file located in the `s1n_atmrobbery/shared/` script folder.
12. Configure the library by modifying the values in all the files contained in the `configuration/` folder located in the `s1n_lib/` script folder.