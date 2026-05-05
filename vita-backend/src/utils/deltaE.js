export function deltaE(l1, l2) {
  return Math.sqrt(
    (l1.L - l2.L) ** 2 +
    (l1.a - l2.a) ** 2 +
    (l1.b - l2.b) ** 2
  );
}