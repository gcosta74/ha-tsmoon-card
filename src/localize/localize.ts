import * as ca from './languages/ca.json';
import * as cz from './languages/cz.json';
import * as de from './languages/de.json';
import * as en from './languages/en.json';
import * as es from './languages/es.json';
import * as fr from './languages/fr.json';
import * as hu from './languages/hu.json';
import * as it from './languages/it.json';
import * as nb from './languages/nb.json';
import * as nl from './languages/nl.json';
import * as pl from './languages/pl.json';
import * as pt from './languages/pt.json';
import * as pt_BR from './languages/pt-BR.json';
import * as ru from './languages/ru.json';
import * as sk from './languages/sk.json';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const languages: any = {
  ca,
  cz,
  de,
  en,
  es,
  fr,
  hu,
  it,
  nb,
  nl,
  pl,
  pt,
  pt_BR,
  ru,
  sk,
};

export function localize (key: string, locale: string): string {
    let translated: string
    const lang = locale
      .replace(/['"]+/g, '')
      .replace('-', '_')
      .replace('_', '')
      .toLowerCase()
  
    try {
      translated = key.split('.').reduce((o, i) => o[i], languages[lang])
    } catch (e) {
      translated = key.split('.').reduce((o, i) => o[i], languages.en)
    }
  
    if (translated === undefined) translated = key.split('.').reduce((o, i) => o[i], languages.en)
  
    return translated
  }
