export function toUpperString(str) {
  if (!str) return "";

  return str[0].toUpperCase() + str.slice(1);
}

export function toUpperStringLimited(str) {
  if (str.length < 20) {
    return str;
  }
  return toUpperString(str).slice(0, 20) + "...";
}
