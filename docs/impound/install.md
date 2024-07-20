---
sidebar_position: 1
title: Installation
sidebar_label: Installation
---

![S1nScripts Logo](https://forum.cfx.re/uploads/default/optimized/4X/a/0/f/a0fe33b8e3b6ef3293bf06ddef6af2e6414248e9_2_1380x776.jpeg)

# Impound System 
## Installation

:::warning

We highly recommend you to read carefully each step written below.

**Don't skip any step, it could lead to a non-functioning script.**

:::

### Follow these steps to install the script


1. Download the script from KeyMaster.
2. Download the "Library" script from KeyMaster. 
3. Download menuv from : https://github.com/ThymonA/menuv/releases/download/v1.4.1/menuv_v1.4.1.zip
4. Drag the `s1n_lib` folder into your `resources` directory.
5. Rename the `s1n_lib-....` folder to `s1n_lib`.
6. Drag the `menuv` folder into your `resources` directory.
7. Drag the `s1n_impound-...` folder into your `resources` directory.
8. Rename the `s1n_impound-....` folder to `s1n_impound`.
9. Start the lib by adding `start s1n_lib` to your `server.cfg` file.
10. Start the impound system by adding `start s1n_impound` to your `server.cfg` file.
11. Configure the script by modifying the values in the `config.lua` file located in the `s1n_impound` script folder.
12. Configure the library by modifying the values in all the files contained in the `configuration/` folder located in the `s1n_lib/` script folder.

## Configuration

By default there is two language translations, french and english that you can find in the languages directory.
To load the one you want, please modify the fxmanifest file and change the "languages/english.lua" to whatever file in LUA with same structure.

:::note

server/api.lua will allow you to:
- custom notifications

client/utils.lua will allow you to:
- custom notifications
- custom remove vehicle logic
- custom the way to get vehicle properties
- custom the way to set vehicle properties

:::