export default function truncateText(text, length = 100) {
  return text.length > length ? text.slice(0, length) + "..." : text;
}
