---
sidebar_position: 1
title: Installation
sidebar_label: Installation
---

![S1nScripts Logo](https://forum.cfx.re/uploads/default/original/4X/9/8/a/98ac13619ec0907330a841cd70eef867ecb989ec.jpeg)

# Job Center 
## Installation

:::warning

We highly recommend you to read carefully each step written below.

**Don't skip any step, it could lead to a non-functioning script.**

:::

### Follow these steps to install the script

1. Drag the `s1n_jobcenter-...` folder into your `resources` directory.
2. Rename the `s1n_jobcenter-....` folder to `s1n_jobcenter`.
3. Start the script by adding `start s1n_jobcenter` after `qb-core` (if you use QBCore) or `es_extended` (if you use ESX) has been started to your `server.cfg` file.
4. Configure the script by modifying the values in the `config.lua` file located in the `s1n_jobcenter` script folder.

## Configuration

By default there is three language translations, french, english and german that you can find in the languages directory.
To load the one you want, please modify the fxmanifest file and change the "languages/english.lua" to whatever file in LUA with same structure.

:::note


Note for modifications on the script:

client/api.lua will allow you to:
- custom notifications

Client Event : "RESOURCE_NAME:openUI" will allow you to show the job center UI.
Example : TriggerEvent("s1n_jobcenter:openUI")

:::