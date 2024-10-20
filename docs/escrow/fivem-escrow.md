---
sidebar_position: 0
title: Common issues
sidebar_label: Common issues
---

## Issues

## Solutions for each error

### You lack the required entitlement to use X

To resolve this issue, make sure that your server's license key is owned by the same keymaster account that owns the asset. If it is, restart your server. If not, transfer the asset to the same account as your server's license key.

### Failed to verify protected resource X

If you come across this error, it indicates that the files were damaged during the download process. This problem frequently arises while using FileZilla as it tends to corrupt the files. To prevent this issue, consider using an alternative FTP client like WinSCP.

### Error parsing script @Y in resource X: @Y: syntax error near ...

This error message indicates that the server artifacts are outdated. In order to resolve this issue, you need to update to the **latest recommended version** for your operating system (Linux or Windows).

### My script doesn't work and there is no errors in the F8 logs and server console

Try downloading again the script from KeyMaster and put it in your server with an FTP Client different from FileZilla like WinSCP.
Verify that the script doesn't contain any uppercase letters in the script's name.

### syntax error near '<\1>'

his error usually occurs when the FTP client (FileZilla, WinSCP...) you're using isn't correctly configured for FiveM scripts. 

➡ **Here is how to solve it:**

- If you're using FileZilla, set the **Transfer Type** to **Binary** like the screenshot I sent.
- You may be using a FiveM server artifact version lower 4752 meaning it's outdated. Update it to the recommended version. If you're using a Windows Server go to https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/, if you're on Linux : https://runtime.fivem.net/artifacts/fivem/build_proot_linux/master/
- If you didn't use any FTP client like FileZilla but you **drag and drop it** with Remote Desktop Control that will still damage the files. Please **drag and drop** the zip and unzip it directly on your server and not on your computer.