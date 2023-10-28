---
sidebar_position: 1
title: Installation
sidebar_label: Installation
---

![S1nScripts Logo](https://forum.cfx.re/uploads/default/optimized/4X/e/6/5/e65fbb4eecc44980b6075ff5cb6ca26274767015_2_690x388.jpeg)

# ATM Robbery
## Installation

Follow these steps to install the atm robbery system:


1. Drag the `s1n_atmrobbery` folder into your `resources` directory. (you might need to rename the script's folder)
3. Start the atm robbery system by adding `start s1n_atmrobbery` to your `server.cfg` file.
4. (if you're using ESX) Please insert SQL query in your database :
```sql
INSERT INTO `items` (`name`, `label`, `weight`) VALUES
	('drill', 'Drill', 1),
	('rope', 'Rope', 1),
    ('c4', 'C4', 1)
;
```
4. (if you're using QBCore) Please add the code inside qbitems.lua to **qb-core/shared/items.lua**

5. Configure the script by modifying the values in the `config.lua` file located in the `s1n_atmrobbery/shared/` script folder.