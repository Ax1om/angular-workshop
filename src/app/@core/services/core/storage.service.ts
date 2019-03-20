import { Injectable } from '@angular/core';

export const TOKEN_STORAGE_KEY = 'access_token';
export const CURRENT_USER = 'current_user';
export const CURRENT_LANG = 'lang';

declare var JSON:any;

@Injectable()
export class StorageService {
  constructor() {}

  static saveToken(resp) {
    this.save(TOKEN_STORAGE_KEY, resp.id_token);
  }

  static getToken() {
    return this.get(TOKEN_STORAGE_KEY);
  }

  static deleteToken() {
    this.remove(TOKEN_STORAGE_KEY);
  }

  static getCurrentUser() {
    return this.getObject(CURRENT_USER);
  }

  static setCurrentUser(user) {
    this.saveObject(CURRENT_USER, user);
  }

  static deleteCurrentUser() {
    this.remove(CURRENT_USER);
  }

  static getCurrentLang() {
    return this.get(CURRENT_LANG);
  }

  static setCurrentLang(lang) {
    this.save(CURRENT_LANG, lang);
  }

  static deleteCurrentLang() {
   this.remove(CURRENT_LANG);
  }

  static save(key, value) {
    localStorage.setItem(key, value);
  }

  static get(key) {
    return localStorage.getItem(key);
  }

  static remove(key) {
    localStorage.removeItem(key);
  }

  static saveObject(key, object) {
    this.save(key, JSON.stringify(object));
  }

  static getObject(key) {
    const obj = this.get(key);
    if (obj) {
      return JSON.parse(obj);
    }
    return undefined;
  }


}
