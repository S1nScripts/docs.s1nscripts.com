---
sidebar_position: 1
title: Common issues
sidebar_label: Common issues
---

# Marketplace
## Common issues

### Issues

#### My target script is not working with the marketplace

The target scripts works when where the player look at is a collision. Meaning that if you look at the air, no target will be triggered.
Try modifying the coordinates of the market to check if this is an issue with the collision.

#### The vehicle product is called 'NULL', 'CARNOTFOUND' or isn't written properly on the marketplace

Your imported car is missing the call to the FiveM Native AddTextEntry to add a name to it.

If you bought it from a store, you need to ask them to add it.
Otherwise you need to create a script specifically to name your imported vehicles.