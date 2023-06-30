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
      type: 'category',
      label: 'Introduction',
      items: ['intro/welcome', 'intro/faq'],
    },
    {
      type: 'category',
      label: 'FiveM Escrow',
      items: ['escrow/fivem-escrow'],
    },
    {
      type: 'category',
      label: 'The Garage System',
      items: ['garage/install']
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
      label: 'The Rental System',
      items: ['rental/install']
    },
    {
      type: 'category',
      label: 'The DeathScreen',
      items: ['deathscreen/install']
    },
  ],
};