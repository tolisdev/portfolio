/**
 * Calculates estimated reading time for Keystatic document nodes or text strings
 * @param content Document node array or string
 * @returns Formatted reading time string (e.g. "3 min read")
 */
export function getReadingTime(content: any): string {
  if (!content) return '1 min read';

  let text = '';

  if (typeof content === 'string') {
    text = content;
  } else if (Array.isArray(content)) {
    function extractText(nodes: any[]) {
      for (const node of nodes) {
        if (node.text) {
          text += node.text + ' ';
        }
        if (node.children) {
          extractText(node.children);
        }
      }
    }
    extractText(content);
  }

  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 180));

  return `${minutes} min read`;
}
