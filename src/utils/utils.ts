export function isDefined<T>(value: T | undefined | null): value is T {
  return value !== undefined && value !== null;
}

export const getBooleanFromStringNumber = (stringValue: string): boolean => {
  const number = Number.parseInt(stringValue, 10);
  if (number) return true;
  return false;
};
