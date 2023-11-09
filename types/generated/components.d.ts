import type { Schema, Attribute } from '@strapi/strapi';

export interface AllGlobalAndIcon extends Schema.Component {
  collectionName: 'components_all_global_and_icons';
  info: {
    displayName: 'GlobalAndIcon';
    description: '';
  };
  attributes: {
    Global: Attribute.Component<'all.global'> & Attribute.Required;
    Icon: Attribute.Component<'all.icon'> & Attribute.Required;
  };
}

export interface AllGlobal extends Schema.Component {
  collectionName: 'components_all_globals';
  info: {
    displayName: 'Global';
    description: '';
  };
  attributes: {
    globalID: Attribute.Enumeration<
      [
        'Name',
        'Nummer',
        'Oeffnungszeiten',
        'PlzOrt',
        'StrasseHausnummer',
        'VolleAdresse',
        'Email',
        'WhatsappLink'
      ]
    > &
      Attribute.Required;
  };
}

export interface AllIcon extends Schema.Component {
  collectionName: 'components_all_icons';
  info: {
    displayName: 'icon';
    icon: '';
    description: '';
  };
  attributes: {
    iconID: Attribute.Enumeration<
      [
        'time',
        'mail',
        'phone',
        'wrench',
        'sync',
        'drop',
        'location',
        'starFull',
        'starHalf',
        'starEmpty',
        'facebook',
        'instagram',
        'whatsapp',
        'close',
        'menu',
        'arrow',
        'open',
        'cash'
      ]
    > &
      Attribute.Required;
  };
}

export interface AllLeistung extends Schema.Component {
  collectionName: 'components_all_leistungs';
  info: {
    displayName: 'Leistung';
    description: '';
  };
  attributes: {
    Ueberschrift: Attribute.String & Attribute.Required;
    Icon: Attribute.Component<'all.icon'> & Attribute.Required;
    Text: Attribute.Text & Attribute.Required;
    Untertitel: Attribute.String;
    TextVorschau: Attribute.Text & Attribute.Required;
    Hintergrund: Attribute.Media;
  };
}

export interface AllPerson extends Schema.Component {
  collectionName: 'components_all_people';
  info: {
    displayName: 'Person';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    Berufsbezeichnung: Attribute.String & Attribute.Required;
    Beschreibung: Attribute.Text & Attribute.Required;
    Bild: Attribute.Media & Attribute.Required;
  };
}

export interface AllRezension extends Schema.Component {
  collectionName: 'components_all_rezensions';
  info: {
    displayName: 'Rezension';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    Text: Attribute.Text & Attribute.Required;
    Bewertung: Attribute.Decimal & Attribute.Required;
    Bild: Attribute.Media & Attribute.Required;
  };
}

export interface AllSeite extends Schema.Component {
  collectionName: 'components_all_seites';
  info: {
    displayName: 'Seite';
  };
  attributes: {
    SeitenTitel: Attribute.String & Attribute.Required;
    SeitenBeschreibung: Attribute.Text & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'all.global-and-icon': AllGlobalAndIcon;
      'all.global': AllGlobal;
      'all.icon': AllIcon;
      'all.leistung': AllLeistung;
      'all.person': AllPerson;
      'all.rezension': AllRezension;
      'all.seite': AllSeite;
    }
  }
}
