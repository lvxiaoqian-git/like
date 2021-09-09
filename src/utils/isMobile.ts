export function isMobile() {
  const { userAgent } = window.navigator;
  if (/Mobile/g.test(userAgent)) {
    return true;
  }
  return false;
}
