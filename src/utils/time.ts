/**
 * Gets the locale of the user.
 *
 * Tries to get the locale from the following sources in order:
 * 1. The first item in the `navigator.languages` array (e.g. "en-US")
 * 2. The `navigator.language` property (e.g. "en-US")
 * 3. The string "en-US" as a fallback
 *
 * @returns The locale of the user
 */
export function getLocale() {
  if (
    typeof navigator !== "undefined" &&
    navigator.languages &&
    navigator.languages.length
  ) {
    return navigator.languages[0];
  } else if (typeof navigator !== "undefined" && navigator.language) {
    return navigator.language;
  } else {
    return "en-US"; // Fallback locale
  }
}

/**
 * Retrieves the currency code for a given locale.
 *
 * Attempts to format a number as currency using the specified locale and extracts
 * the currency code from the formatted parts. If the currency cannot be determined,
 * logs an error and returns "USD" as a default.
 *
 * @param locale - The locale string (e.g. "en-US") to determine the currency for.
 * @returns The currency code (e.g. "USD") for the specified locale or "USD" as default.
 */

export function getCurrencyFromLocale(locale: string): string | null {
  try {
    // Attempt to get the currency directly from the locale:
    const formatter = new Intl.NumberFormat(locale, {
      style: "currency",
      currencyDisplay: "code",
    });
    const parts = formatter.formatToParts(0);
    const currencyPart = parts.find((part) => part.type === "currency");
    if (currencyPart) {
      return currencyPart.value;
    }

    // If the above fails (currency not directly inferable from locale),
    // try to get the currency using a more robust method:
    try {
      const currency = new Intl.NumberFormat(locale, {
        style: "currency",
      }).resolvedOptions().currency;
      if (currency) return currency;
    } catch (innerError) {
    //   console.error(
    //     `Inner error getting currency for locale ${locale}:`,
    //     innerError,
    //   );
    }

    // console.error(
    //   `Could not determine currency for locale: ${locale}. Falling back to USD.`,
    // );
    return "USD"; // Fallback
  } catch (error) {
    // console.error(`Outer error getting currency for locale ${locale}:`, error);
    return "USD"; // Fallback
  }
}


/**
 * Retrieves the currency code for the current locale.
 *
 * Determines the current locale using getLocale() and then uses
 * getCurrencyFromLocale() to get the currency code for that locale.
 *
 * @returns The currency code (e.g. "USD") for the current locale.
 */
export function getDefaultCurency() {
  const locale = getLocale();
  const currenc = getCurrencyFromLocale(locale);
  return currenc??"USD";
}
