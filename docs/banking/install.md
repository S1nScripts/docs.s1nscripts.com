---
sidebar_position: 1
title: Installation
sidebar_label: Installation
---

![S1nScripts Logo](https://dunb17ur4ymx4.cloudfront.net/packages/images/912da05be2201d833de8ab962c8949abadee2087.jpg)

# Banking System
## Installation

:::warning

We highly recommend you to read carefully each step written below.

**Don't skip any step, it could lead to a non-functioning script.**

:::

### Follow these steps to install the banking system


1. Download the script from KeyMaster.
2. Download the "Library" script from KeyMaster.
3. Drag the `s1n_lib` folder into your `resources` directory.
4. Rename the `s1n_lib-....` folder to `s1n_lib`.
5. Drag the `s1n_banking` folder into your `resources` directory.
6. Rename the `s1n_banking-....` folder to `s1n_banking`.
7. Start the banking system by adding `start s1n_banking` to your `server.cfg` file.
8. Please insert the SQL queries in your database (you can find them in the `s1n_banking/database.sql` file).
9. Configure the script by modifying the values in the `config.lua` file located in the `s1n_banking/shared/` script folder.