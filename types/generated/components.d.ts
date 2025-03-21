import type { Schema, Struct } from '@strapi/strapi';

export interface DataListData extends Struct.ComponentSchema {
  collectionName: 'components_data_list_data';
  info: {
    description: '';
    displayName: 'Data';
    icon: 'bulletList';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    itemDescription: Schema.Attribute.Text;
    itemId: Schema.Attribute.Integer;
    itemPdfsrc: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    itemTitle: Schema.Attribute.String;
  };
}

export interface NewsletterDataNewsletterData extends Struct.ComponentSchema {
  collectionName: 'components_newsletter_data_newsletter_data';
  info: {
    displayName: 'NewsletterData';
  };
  attributes: {
    dataId: Schema.Attribute.Integer;
    description: Schema.Attribute.Text;
    pdfSrc: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'data-list.data': DataListData;
      'newsletter-data.newsletter-data': NewsletterDataNewsletterData;
    }
  }
}
