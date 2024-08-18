declare module "js-cookie" {
  interface CookiesStatic<T = {}> {
    get(name: string): string | undefined;
    getJSON(name: string): T | undefined;
    set(
      name: string,
      value: string | object,
      options?: Cookies.CookieAttributes,
    ): CookiesStatic<T>;
    remove(name: string, options?: Cookies.CookieAttributes): void;
  }

  namespace Cookies {
    interface CookieAttributes {
      expires?: number | Date;
      path?: string;
      domain?: string;
      secure?: boolean;
      [property: string]: any;
    }
  }

  const Cookies: CookiesStatic;

  export default Cookies;
}
