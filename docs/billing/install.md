---
sidebar_position: 1
title: Installation
sidebar_label: Installation
---

# Billing/Contract System
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
5. Drag the `s1n_billing` folder into your `resources` directory.
6. Rename the `s1n_billing-....` folder to `s1n_billing`.
7. Start the lib by adding `start s1n_lib` to your `server.cfg` file.
8. Start the script by adding `start s1n_billing` to your `server.cfg` file.
9. No need to insert SQL queries in your database. The script will create the tables automatically.
10. Configure the script by modifying the values in all the files located in the `s1n_billing/configuration/` script folder.
11. Configure the library by modifying the values in all the files contained in the `configuration/` folder located in the `s1n_lib/` script folder.
