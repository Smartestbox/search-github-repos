export function getDate(isoDate) {
    const date = new Date(isoDate);
    return new Intl.DateTimeFormat("ru-RU").format(date);
}
