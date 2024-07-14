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
      label: 'About FiveM Escrow',
      items: ['escrow/fivem-escrow', 'escrow/asset-transfers'],
    },
    {
      type: 'category',
      label: 'The Garage System',
      items: ['garages/install', 'garages/common-issues', 'garages/common-questions', 'garages/config']
    },
    {
      type: 'category',
      label: 'The Impound System',
      items: ['impound/install', 'impound/common-issues', 'impound/common-questions', 'impound/config']
    },
    {
      type: 'category',
      label: 'The Notify System',
      items: ['notify/install', 'notify/how-to-use', 'notify/framework', 'notify/config']
    },
    {
      type: 'category',
      label: 'The Job Center',
      items: ['jobcenter/install', 'jobcenter/config']
    },
    {
      type: 'category',
      label: 'The Rental System',
      items: ['carrental/install', 'carrental/config']
    },
    {
      type: 'category',
      label: 'The Spawn selector',
      items: ['spawnselector/install', 'spawnselector/custom-modifications', 'spawnselector/config']
    },
    {
      type: 'category',
      label: 'The Vending Machine',
      items: ['vendingmachine/install', 'vendingmachine/config']
    },
    {
      type: 'category',
      label: 'The Marketplace',
      items: ['marketplace/install', 'marketplace/config', 'marketplace/common-issues']
    },
    {
      type: 'category',
      label: 'The ATM Robbery',
      items: ['atmrobbery/install', 'atmrobbery/config', 'atmrobbery/common-issues', 'atmrobbery/custom-modifications']
    },
    {
      type: 'category',
      label: 'The Banking System',
      items: ['banking/install', 'banking/config', 'banking/exports', 'banking/common-issues']
    },
    {
      type: 'category',
      label: 'The Government System',
      items: ['government/install', 'government/config']
    },
    {
      type: 'category',
      label: 'The Billing/Contract System',
      items: ['billingcontract/install', 'billingcontract/config']
    },
    {
      type: 'category',
      label: 'The NPC Placer',
      items: ['npcplacer/config']
    },
  ],
};
