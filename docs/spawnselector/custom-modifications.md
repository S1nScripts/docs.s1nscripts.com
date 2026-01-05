---
sidebar_position: 1
title: Custom Modifications
sidebar_label: Custom Modifications
---

![S1nScripts Logo](https://forum.cfx.re/uploads/default/original/4X/c/c/8/cc899a90b2c260b6a3adc88d9d8b1566492f6fd1.jpeg)

# Spawn Selector
## Custom Modifications

### Custom the UI of the spawn selector

You'll need to first install the dependencies with `npm install` in the folder that contains the `package.json` file.

To start the project, run `npm start` in this same folder.

To build the project, run `npm run build` in this same folder.

## Opening the Spawn Selector UI from another script

You can open the spawn selector UI from another script by using the following code:

```lua
TriggerEvent('s1n_spawnselector:openUI')
```