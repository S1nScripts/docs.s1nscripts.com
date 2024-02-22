---
sidebar_position: 1
title: Installation
sidebar_label: Installation
---

![S1nScripts Logo](https://forum.cfx.re/uploads/default/original/4X/d/a/4/da47ba7d9be0b48c8e640e60e2ffa30664f82c1e.jpeg)

# Marketplace 
## Installation

Follow these steps to install and configure the marketplace:

1. Download the script from KeyMaster.
2. Download the "Library" script from KeyMaster.
3. Drag the `s1n_lib` folder into your `resources` directory.
4. Drag the `s1n_marketplace-...` folder into your `resources` directory.
5. Rename the `s1n_marketplace-....` folder to `s1n_marketplace`.
6. Start the library by adding `start s1n_lib` to your `server.cfg` file.
7. Start the script by adding `start s1n_marketplace` after `qb-core` (if you use QBCore) or `es_extended` (if you use ESX) has been started to your `server.cfg` file.
8. Configure the script by modifying the values in the `config.lua` file located in the `s1n_marketplace/shared` script folder.
9. (optional) If you use qb-target, start the script after `qb-target` has been started to your `server.cfg` file.
10. (optional) If you use ox-target, start the script after `ox_target` has been started to your `server.cfg` file.