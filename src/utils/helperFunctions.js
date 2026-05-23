export function toUpperString(str) {
  if (!str) return "";

  return str[0].toUpperCase() + str.slice(1);
}
