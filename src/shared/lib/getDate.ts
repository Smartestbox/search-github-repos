export function getDate(isoDate: string) {
  const date = new Date(isoDate);

  return new Intl.DateTimeFormat("ru-RU").format(date);
}
