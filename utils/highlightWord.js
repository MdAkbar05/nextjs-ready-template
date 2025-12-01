export default function highlightWord(text = "", word = "", secondary = false) {
  if (!text || !word) return text;

  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "gi");

  return text.replace(
    regex,
    `<mark class="${
      secondary ? "text-secondary" : "text-primary"
    } bg-transparent">$1</mark>`
  );
}
