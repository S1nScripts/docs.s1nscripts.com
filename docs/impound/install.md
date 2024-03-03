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

Download menuv https://github.com/ThymonA/menuv/releases/download/v1.4.1/menuv_v1.4.1.zip


1. Drag the `menuv` folder into your `resources` directory.
2. Drag the `s1n_impound` folder into your `resources` directory.
3. Start the impound system by adding `start s1n_impound` to your `server.cfg` file.
4. Configure the script by modifying the values in the `config.lua` file located in the `s1n_impound` script folder.

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