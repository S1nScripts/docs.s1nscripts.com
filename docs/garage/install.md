---
sidebar_position: 1
title: Installation
sidebar_label: Installation
---

![S1nScripts Logo](https://forum.cfx.re/uploads/default/original/4X/6/c/7/6c73a9d63db911aa966b2c9085f4c55a76268db3.jpeg)

# Garage System 
## Installation

Follow these steps to install and configure the notification system:

Download the pmc-instance (fork by myself) https://github.com/s1nyx/pmc-instance/
Go to the button "Code" > "Download ZIP"

Download menuv https://github.com/ThymonA/menuv/releases/download/v1.4.1/menuv_v1.4.1.zip


1. Drag the `pmc-instance` folder into your `resources` directory.
2. Drag the `menuv` folder into your `resources` directory.
3. Drag the `s1n_garages` folder into your `resources` directory.
4. Start pmc-instance by adding `start pmc-instance` to your `server.cfg` file. 
5. Start menuv by adding `start menuv` to your `server.cfg` file.
6. Start the garage system by adding `start s1n_garages` to your `server.cfg` file.
7. Configure the script by modifying the values in the `config.lua` file located in the `s1n_garages` script folder.

## Configuration

By default there is three language translations, french, english and german that you can find in the languages directory.
To load the one you want, please modify the fxmanifest file and change the "languages/english.lua" to whatever file in LUA with same structure.

Note for modifications on the script:

server/api.lua will allow you to:
- custom what happens when you disconnect from the server
- custom the verification for plate ownership

client/utils.lua will allow you to:
- custom format money
- custom notifications
- custom remove vehicle logic
- custom the way to get vehicle properties
- custom the way to set vehicle properties 
