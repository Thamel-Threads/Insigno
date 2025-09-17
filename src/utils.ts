// 🖌️ INSIGNO UTILS
export function formatNumber(n: number) {
    return n > 999 ? (n / 1000).toFixed(1) + "k" : n.toString();
  }
  