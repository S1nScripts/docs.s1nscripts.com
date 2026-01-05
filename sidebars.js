/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 */

module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: false,
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Getting Started with S1nScripts',
        description: 'Essential information to get you started with our FiveM scripts.',
      },
      items: [
        {
          type: 'doc',
          label: '👋 Welcome',
          id: 'intro/welcome',
        },
        {
          type: 'doc',
          label: '❓ FAQ',
          id: 'intro/faq',
        },
        {
          type: 'category',
          label: '🔒 About FiveM Escrow',
          items: ['escrow/fivem-escrow', 'escrow/asset-transfers'],
        },
      ]
    },
    {
      type: 'html',
      value: '<div class="sidebar-divider"></div>',
      className: 'sidebar-divider-wrapper'
    },
    {
      type: 'category',
      label: 'Our Scripts',
      collapsible: false,
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'S1nScripts Collection',
        description: 'Explore our complete collection of high-quality FiveM scripts.',
      },
      items: [
        {
          type: 'category',
          label: '🚗 The Garage System',
          items: ['garages/install', 'garages/common-issues', 'garages/common-questions', 'garages/config']
        },
        {
          type: 'category',
          label: '🚓 The Impound System',
          items: ['impound/install', 'impound/common-issues', 'impound/common-questions', 'impound/config']
        },
        {
          type: 'category',
          label: '💬 The Notify System',
          items: ['notify/install', 'notify/how-to-use', 'notify/framework', 'notify/config']
        },
        {
          type: 'category',
          label: '💼 The Job Center',
          items: ['jobcenter/install', 'jobcenter/config']
        },
        {
          type: 'category',
          label: '🔑 The Rental System',
          items: ['carrental/install', 'carrental/config']
        },
        {
          type: 'category',
          label: '🎯 The Spawn selector',
          items: ['spawnselector/install', 'spawnselector/custom-modifications', 'spawnselector/config']
        },
        {
          type: 'category',
          label: '🥤 The Vending Machine',
          items: ['vendingmachine/install', 'vendingmachine/config']
        },
        {
          type: 'category',
          label: '🏪 The Marketplace',
          items: ['marketplace/install', 'marketplace/config', 'marketplace/common-issues']
        },
        {
          type: 'category',
          label: '💰 The ATM Robbery',
          items: ['atmrobbery/install', 'atmrobbery/config', 'atmrobbery/common-issues', 'atmrobbery/custom-modifications']
        },
        {
          type: 'category',
          label: '🏦 The Banking System',
          items: ['banking/install', 'banking/config', 'banking/exports', 'banking/common-issues']
        },
        {
          type: 'category',
          label: '🏛️ The Government System',
          items: ['government/install', 'government/config']
        },
        {
          type: 'category',
          label: '📄 The Billing/Contract System',
          items: ['billing/install', 'billing/config', 'billing/exports']
        },
        {
          type: 'category',
          label: '📦 The Locker/Container System',
          items: ['locker/install', 'locker/config']
        },
        {
          type: 'category',
          label: '💸 The Boss Menu',
          items: ['bossmenu/install', 'bossmenu/config', 'bossmenu/exports']
        },
        {
          type: 'category',
          label: '🧍 The NPC Placer',
          items: ['npcplacer/config']
        },
      ]
    },
  ],
};