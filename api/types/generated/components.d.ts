import type { Schema, Attribute } from '@strapi/strapi';

export interface CategoryComponentComponentChecked extends Schema.Component {
  collectionName: 'components_category_component_component_checkeds';
  info: {
    displayName: 'ComponentChecked';
    icon: 'check';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'category-component.component-checked': CategoryComponentComponentChecked;
    }
  }
}
