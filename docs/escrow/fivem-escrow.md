---
sidebar_position: 0
title: Common issues
sidebar_label: Common issues
---

## Issues

If you encounter the following errors:

- `You lack the required entitlement to use X`
- `Failed to verify protected resource X`
- `Error parsing script @Y in resource X: @Y: syntax error near ...`

You can find the solutions below.

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