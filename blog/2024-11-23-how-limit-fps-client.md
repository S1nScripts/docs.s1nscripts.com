---
title: "How to Limit FPS in FiveM: Complete Guide (2024)"
description: "Learn how to limit FPS in FiveM using Nvidia Control Panel and AMD Radeon settings. Step-by-step guide to optimize your game performance and reduce GPU strain."
keywords: ["fivem fps limit", "limit fps fivem", "fivem fps cap", "fivem nvidia settings", "fivem amd settings", "how to show fps fivem", "fivem performance"]
slug: /tutorials/how-to-limit-fps-fivem
sidebar_label: "Limit FPS in FiveM"
---

# How to Limit FPS in FiveM: Complete Guide (2024)

Looking to limit your FPS in FiveM? Whether you're using an NVIDIA or AMD graphics card, this guide will show you exactly how to cap your frame rate for optimal performance.

## Why Limit FPS in FiveM?
- Reduce GPU strain
- Lower power consumption
- Prevent screen tearing
- Maintain stable performance
- Reduce input lag

## Method 1: NVIDIA Control Panel Settings

:::info Prerequisites
Make sure you have the latest NVIDIA drivers installed on your system.
:::

Follow these steps to limit FPS using NVIDIA Control Panel:

1. **Open NVIDIA Control Panel**
2. **Navigate to Settings**
    - Click "Manage 3D Settings"
    - Select "Program Settings" tab
    - Click "Add"

3. **Locate FiveM Executable**
    - Click "Browse"
    - Navigate to: `%localappdata%\FiveM\FiveM.app\data\cache\subprocess`
    - Select `FiveM_b2545_GTAProcess.exe` (or your current version)

4. **Configure FPS Limit**
    - Find "Max Frame Rate" in the settings list
    - Set it to "On"
    - Input your desired FPS limit
    - Click "Apply"

5. **Restart FiveM** to apply changes

## Method 2: AMD Radeon Settings

:::info Prerequisites
Ensure you have the latest AMD Radeon Software installed.
:::

For AMD graphics card users:

1. **Open AMD Radeon Settings**
2. **Add FiveM**
    - Go to the "Gaming" tab
    - Click "Add a Game" in the top-right corner
    - Navigate to: `%localappdata%\FiveM\FiveM.app\data\cache\subprocess`
    - Select `FiveM_b2545_GTAProcess.exe`

3. **Configure Radeon Chill**
    - Select the FiveM profile
    - Scroll to find "Radeon Chill"
    - Enable the setting
    - Set your minimum and maximum FPS values

4. **Apply Changes**
    - Save the profile
    - Restart FiveM

## How to Display FPS in FiveM

To monitor your frame rate after applying limits:

1. Open the console (Press F8)
2. Enter these commands:
   ```
   cl_drawFps 1
   cl_drawPerf 1
   ```
3. Press Enter

:::tip Pro Tip
Monitoring your FPS helps verify if your frame rate limits are working correctly and helps identify performance issues.
:::

## Recommended FPS Limits

Choose your FPS limit based on your monitor's refresh rate:

- **60Hz Monitor**: 60 FPS
- **144Hz Monitor**: 144 FPS
- **240Hz Monitor**: 240 FPS

:::warning
Setting FPS limits higher than your monitor's refresh rate may cause unnecessary GPU load without visual benefits.
:::

## Troubleshooting Common Issues

### FPS Limit Not Working
1. Verify you selected the correct executable
2. Check if other FPS limiting software is running
3. Update graphics drivers
4. Restart your computer

### Performance Issues After Limiting FPS
1. Try a higher FPS limit
2. Check for background processes
3. Verify game settings
4. Monitor GPU temperatures

## Best Practices

1. **Regular Updates**
    - Keep graphics drivers updated
    - Update FiveM regularly
    - Check for Windows updates

2. **Performance Monitoring**
    - Use FiveM's built-in FPS display
    - Monitor GPU temperatures
    - Check resource usage

3. **Optimal Settings**
    - Match FPS limit to monitor refresh rate
    - Balance between performance and quality
    - Consider your hardware capabilities

## FAQs

### What's the best FPS limit for FiveM?
The optimal FPS limit depends on your monitor's refresh rate and hardware capabilities. Generally, matching your monitor's refresh rate is recommended.

### Will limiting FPS reduce GPU temperature?
Yes, capping your frame rate can significantly reduce GPU temperature and power consumption.

### Does FPS limiting affect game performance?
When done correctly, FPS limiting can improve stability and reduce screen tearing without noticeable performance impact.

### Why can't I find the FiveM executable?
Make sure you're looking in the correct subprocess folder and that FiveM has been run at least once to generate the necessary files.

## Conclusion
Limiting FPS in FiveM is a straightforward process that can significantly improve your gaming experience. Whether you're using NVIDIA or AMD, following this guide will help you achieve optimal performance while reducing hardware strain.

---

**Last Updated**: November 2024  
**Author**: S1nScripts Documentation Team