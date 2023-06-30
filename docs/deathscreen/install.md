---
sidebar_position: 1
title: Installation
sidebar_label: Installation
---

![S1nScripts Logo](https://forum.cfx.re/uploads/default/optimized/4X/7/0/9/709b687ad5121c2682611eae105cc6fcebed4d27_2_1380x776.jpeg)

# Rental System 

Compatibility: QBCore (with qb-ambulancejob), ESX (coming soon)

## Installation

Follow these steps to install and configure the notification system:

Step 1:
Rename the folder to s1n_deathscreen and place the current script in your resources directory.

Step 2:
Go to qb-ambulancejob/client/dead.lua and:
Look for the SetLastand(true) and add this below:
TriggerEvent('death_screen:showScreen')

    Then, look for :
    if LaststandTime > Laststand.MinimumRevive then

    Add just before the if: --[[

    Then look for the "end" in the same tab, it should just some lines below the if and add: ]]
--  This will comment the part of the code that show texts on the screen by default.


Step 3:
Add 'ensure s1n_deathscreen' to your server.cfg (without the quotes).

Step 4:
Start the server and enjoy !

## Configuration

By default there is four language translations, french, english, spanish and german that you can find in the languages directory.
To load the one you want, please modify the fxmanifest file and change the "languages/english.lua" to whatever file in LUA with same structure.