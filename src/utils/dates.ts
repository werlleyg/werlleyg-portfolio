/**
 * Function to format a date string into a localized date format.
 *
 * @param date A date string in any valid date format.
 * @returns A formatted date string in the "dd monthName yyyy" format (e.g., "24 September 2023").
 */
export function getDate(date: string) {
  // Create a new Date object by parsing the input date string.
  // Then, use the `toLocaleString` method to format the date.
  // We specify the "pt-BR" locale for Brazilian Portuguese, and customize the format to display the day, month, and year.

  const formattedDate: string = new Date(date).toLocaleString("pt-BR", {
    day: "2-digit", // Display the day as a two-digit number.
    month: "long", // Display the full month name.
    year: "numeric", // Display the year as a four-digit number.
  });

  // Return the formatted date string.
  return formattedDate;
}
