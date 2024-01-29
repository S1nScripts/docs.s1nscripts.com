---
sidebar_position: 1
title: Custom modifications
sidebar_label: Custom modifications
---

![S1nScripts Logo](https://forum.cfx.re/uploads/default/optimized/4X/e/6/5/e65fbb4eecc44980b6075ff5cb6ca26274767015_2_690x388.jpeg)

# ATM Robbery
## Custom modifications

### Adding compatibility with another script when a robbery has started

If you need to do things client-side, go to `client/api.lua` and look at the function `NotifyPolice`.
If you need to do things server-side, go to `server/api.lua` and look at the function `SendAlertToPoliceOfficer` and `SendAlert`.