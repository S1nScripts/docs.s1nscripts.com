---
sidebar_position: 1
title: Installation
sidebar_label: Installation
---

![S1nScripts Logo](https://forum.cfx.re/uploads/default/original/4X/7/1/8/718c6f28a9b5ab0dc33bf79288bcb418e7684326.jpeg)

# Notification System 
## Installation

:::warning

We highly recommend you to read carefully each step written below.

**Don't skip any step, it could lead to a non-functioning script.**

:::

### Follow these steps to install the script

1. Download the script from KeyMaster.
2. Download the "Library" script from KeyMaster.
3. Drag the `s1n_notify` folder into your `resources` directory.
4. Rename the `s1n_notify-....` folder to `s1n_notify`.
5. Drag the `s1n_lib` folder into your `resources` directory.
6. Rename the `s1n_lib-....` folder to `s1n_lib`.
7. Start the library by adding `start s1n_lib` to your `server.cfg` file.
8. Start the notification system by adding `start s1n_notify` to your `server.cfg` file.
9. There is no sounds included by default. You need to add your own sounds to the `s1n_notify/web/build/static/media` folder (create the folder if not existing). You can find some sounds [here](https://pixabay.com/sound-effects/search/notification/).
10. Configure the script by modifying the values in the `config.lua` file located in the `s1n_notify` script folder.
11. Configure the library by modifying the values in all the files contained in the `configuration/` folder located in the `s1n_lib/` script folder.


That's it! 
You should now be able to use the notification system in your FiveM server. Check the <a href="how-to-use">How To Use</a> page to see how to use the notification system.