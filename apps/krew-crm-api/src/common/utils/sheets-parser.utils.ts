import { DateTime } from 'luxon'; // TODO: move to utils class

export const parseString = (input: string): string | undefined => {
  if (!input || input == '#N/A') {
    return;
  }
  return input;
};

export const parseNumber = (input: string): number | undefined => {
  if (!input) {
    return;
  }
  const number = Number.parseInt(input);
  if (isNaN(number)) {
    return;
  }
  return number;
};

export const parseDate = (input: string): Date | undefined => {
  if (!input) {
    return;
  }
  return new Date(input);
};

export const parseBoolean = (input: string): boolean | undefined => {
  if (!input) {
    return;
  }
  if (input === 'TRUE' || input === '0') {
    return true;
  }
  return false;
};

export const parseBirthday = (input: string): string | undefined => {
  const IGNORE_DATES = [1900];
  const date = DateTime.fromJSDate(new Date(input));
  if (!date.isValid) {
    return;
  }
  if (IGNORE_DATES.includes(date.year)) {
    return date.toFormat('dd/MM');
  }
  return date.toFormat('dd/MM/yyyy');
};

export const splitString = (input: string): string[] => {
  if (!input) {
    return [];
  }
  return input.split(',').map((s) => s.trim());
};
