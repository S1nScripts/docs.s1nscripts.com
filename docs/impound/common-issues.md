---
sidebar_position: 1
title: Common issues
sidebar_label: Common issues
---

# Impound System
## Common issues

### Errors

#### Error regarding : attempt to index a nil value (global 'Functions')

This error is caused by one of the following reasons:
- `menuv` is not found in your resources folder
- The `menuv` resource is not exactly named `menuv`
- The `menuv` resource doesn't contain a `fxmanifest.lua` file
- The `menuv` resource is not started before `s1n_impound` in your `server.cfg` file

### Keys

#### I don't receive the keys when I take out a vehicle

If you have a key system that isn't the default one from your framework (ESX/QBCore) you'll need to adjust the script to add compatibility with it.