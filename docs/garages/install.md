---
sidebar_position: 1
title: Installation
sidebar_label: Installation
---

![S1nScripts Logo](https://forum.cfx.re/uploads/default/original/4X/6/c/7/6c73a9d63db911aa966b2c9085f4c55a76268db3.jpeg)

# Garage System 
## Installation

:::warning

We highly recommend you to read carefully each step written below.

**Don't skip any step, it could lead to a non-functioning script.**

:::

### Follow these steps to install the script

1. Download this pmc-instance (fork by myself) https://github.com/s1nyx/pmc-instance/ (Go to the button "Code" > "Download ZIP")
2. Download menuv https://github.com/ThymonA/menuv/releases/download/v1.4.1/menuv_v1.4.1.zip
3. Download the script from KeyMaster.
4. Download the "Library" script from KeyMaster.
5. Drag the `pmc-instance` folder into your `resources` directory.
6. Drag the `menuv` folder into your `resources` directory.
7. Drag the `s1n_garages` folder into your `resources` directory.
8. Rename the `s1n_garages-....` folder to `s1n_garages`.
9. Drag the `s1n_lib` folder into your `resources` directory.
10. Rename the `s1n_lib-....` folder to `s1n_lib`.
11. Start pmc-instance by adding `start pmc-instance` to your `server.cfg` file. 
12. Start menuv by adding `start menuv` to your `server.cfg` file.
13. Start the library by adding `start s1n_lib` to your `server.cfg` file.
14. Start the garage system by adding `start s1n_garages` to your `server.cfg` file.
15. Configure the script by modifying the values in the `config.lua` file located in the `s1n_garages` script folder.

## Configuration

By default there is three language translations, french, english and german that you can find in the languages directory.
To load the one you want, please modify the fxmanifest file and change the "languages/english.lua" to whatever file in LUA with same structure.

:::note

server/api.lua will allow you to:
- custom what happens when you disconnect from the server
- custom the verification for plate ownership

client/utils.lua will allow you to:
- custom format money
- custom notifications
- custom remove vehicle logic
- custom the way to get vehicle properties
- custom the way to set vehicle properties 

:::