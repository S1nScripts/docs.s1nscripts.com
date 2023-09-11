---
sidebar_position: 1
title: Installation
sidebar_label: Installation
---

![S1nScripts Logo](https://forum.cfx.re/uploads/default/original/4X/c/c/8/cc899a90b2c260b6a3adc88d9d8b1566492f6fd1.jpeg)

# Spawn Selector
## Installation

Follow these steps to install and configure the spawnselector:

1. Drag the `s1n_spawnselector-...` folder into your `resources` directory.
2. Rename the `s1n_spawnselector-....` folder to `s1n_spawnselector`.
3. Start the script by adding `start s1n_spawnselector` to your `server.cfg` file.
4. Configure the script by modifying the values in the `config.lua` file located in the `s1n_spawnselector` script folder.

To make it work, please lead to qb-apartments and look for line 447 , 452 , 455,
replace the open ui trigger to "spawnselector:openNui"

these functions should be under the calllback "apartments:client:setupSpawnUI".
