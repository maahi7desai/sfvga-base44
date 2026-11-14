export const TAB_ROOTS = ["/", "/events", "/members", "/contact", "/more"];

export function tabRootFor(pathname) {
  return TAB_ROOTS.find((root) =>
  root === "/" ? pathname === "/" : pathname === root || pathname.startsWith(root + "/"));
}

export function isTabRoot(pathname) {
  return TAB_ROOTS.includes(pathname);
}