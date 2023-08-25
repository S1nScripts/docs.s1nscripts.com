---
sidebar_position: 1
title: Installation
sidebar_label: Installation
---

![S1nScripts Logo](https://forum.cfx.re/uploads/default/original/4X/d/a/4/da47ba7d9be0b48c8e640e60e2ffa30664f82c1e.jpeg)

# Marketplace 
## Installation

Follow these steps to install and configure the marketplace:

1. Drag the `s1n_marketplace-...` folder into your `resources` directory.
2. Rename the `s1n_marketplace-....` folder to `s1n_marketplace`.
3. Start the script by adding `start s1n_marketplace` after `qb-core` (if you use QBCore) or `es_extended` (if you use ESX) has been started to your `server.cfg` file.
4. Configure the script by modifying the values in the `config.lua` file located in the `s1n_marketplace/shared` script folder.
5. (optional) If you use qb-target, start the script after `qb-target` has been started to your `server.cfg` file.
6. (optional) If you use ox-target, start the script after `ox-target` has been started to your `server.cfg` file.