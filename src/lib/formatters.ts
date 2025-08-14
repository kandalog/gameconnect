// DateをYYYY年MM月DD日 HH:mm形式でフォーマット
export const formatDate = (date: Date): string => {
  const formatted = new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);

  return formatted.replace(/^(\d{4})\/(\d{2})\/(\d{2})\s(\d{2}):(\d{2})$/, "$1年$2月$3日 $4:$5");
};

// 残り時間を計算
export const formatRemainingTime = (from: Date, to: Date): string => {
  const diffMs = to.getTime() - from.getTime();

  if (diffMs <= 0) return "終了";

  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays >= 1) {
    return `${diffDays}日`;
  } else if (diffHours >= 1) {
    return `${diffHours}時間`;
  } else {
    return `${diffMinutes}分`;
  }
};
