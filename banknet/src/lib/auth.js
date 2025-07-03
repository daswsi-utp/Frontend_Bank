export const getUserFromCookie = () => {
  if (typeof document === 'undefined') return null;

  const match = document.cookie.match(/user=([^;]+)/);
  if (!match) return null;

  try {
    return JSON.parse(decodeURIComponent(match[1]));
  } catch {
    return null;
  }
};
