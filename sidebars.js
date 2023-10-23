/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */


module.exports = {
  docs: [
    {
        type: 'doc',
        id: 'intro/welcome',
    },
    {
      type: 'category',
      label: 'S1nScripts',
      items: ['intro/faq'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'FiveM Escrow',
      items: ['escrow/fivem-escrow', 'escrow/asset-transfers'],
    },
    {
      type: 'category',
      label: 'The Garage System',
      items: ['garage/install', 'garage/common-issues']
    },
    {
      type: 'category',
      label: 'The Impound System',
      items: ['impound/install']
    },
    {
      type: 'category',
      label: 'The Notify System',
      items: ['notify/install', 'notify/how-to-use', 'notify/framework']
    },
    {
      type: 'category',
      label: 'The Job Center',
      items: ['jobcenter/install']
    },
    {
      type: 'category',
      label: 'The Rental System',
      items: ['rental/install']
    },
    {
      type: 'category',
      label: 'The DeathScreen',
      items: ['deathscreen/install']
    },
    {
      type: 'category',
      label: 'The Spawn selector',
      items: ['spawnselector/install', 'spawnselector/custom-modifications']
    },
    {
      type: 'category',
      label: 'The Vending Machine',
      items: ['vendingmachine/install']
    },
    {
      type: 'category',
      label: 'The Marketplace',
      items: ['marketplace/install', 'marketplace/configuration']
    },
    {
      type: 'category',
      label: 'The ATM Robbery',
      items: ['atmrobbery/install']
    },
  ],
};