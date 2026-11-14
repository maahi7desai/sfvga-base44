export const TAB_ROOTS = ["/", "/events", "/members", "/contact", "/more"];

export function tabRootFor(pathname) {
  return TAB_ROOTS.find((root) =>
  root === "/" ? pathname === "/" : pathname === root || pathname.startsWith(root + "/"));
}

export function isTabRoot(pathname) {
  return TAB_ROOTS.includes(pathname);
}

const STACK_PREFIX = "sfvga:tab-stack:";

/** Last pathname visited inside a tab, remembered for this session only. */
export function readTabStack(root) {
  try {
    return sessionStorage.getItem(STACK_PREFIX + root) || null;
  } catch {
    return null;
  }
}

export function writeTabStack(root, pathname) {
  try {
    sessionStorage.setItem(STACK_PREFIX + root, pathname);
  } catch {
    // Storage can be unavailable (private mode); tabs then fall back to their root.
  }
}