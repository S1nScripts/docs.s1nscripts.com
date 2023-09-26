---
sidebar_position: 1
title: Common issues
sidebar_label: Common issues
---

![S1nScripts Logo](https://forum.cfx.re/uploads/default/original/4X/6/c/7/6c73a9d63db911aa966b2c9085f4c55a76268db3.jpeg)

# Garage System
## Common issues

### Errors

#### pmc-instance not found

![image](https://media.discordapp.net/attachments/1153041009006100550/1153238199464894484/image.png?ex=6513e044&is=65128ec4&hm=dc0ea9326ec93f13d27db8d5598da618e10f2b380ac11a61fd0da6c42f841d61&=&width=998&height=182)

This error is caused by one of the following reasons:
- `pmc-instance` is not found in your resources folder
- The `pmc-instance` resource is not exactly named `pmc-instance`
- The `pmc-instance` resource doesn't contain a `fxmanifest.lua` file


#### Error regarding : attempt to index a nil value (global 'Functions')

This error is caused by one of the following reasons:
- pmc-instance not found (see above #pmc-instance-not-found)
- `menuv` is not found in your resources folder
- The `menuv` resource is not exactly named `menuv`
- The `menuv` resource doesn't contain a `fxmanifest.lua` file
- The `menuv` resource is not started before `s1n_garages` in your `server.cfg` file