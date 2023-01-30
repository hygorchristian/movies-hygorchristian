/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export default function debounce(
  func: () => void,
  wait: number,
  immediate: boolean
) {
  let timeout: NodeJS.Timeout;
  return () => {
    // @ts-expect-error
    const context = this;
    const args = arguments;

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      // @ts-expect-error
      timeout = undefined;
      // @ts-expect-error
      if (!immediate) func.apply(context, args);
    }, wait);
    // @ts-expect-error
    if (immediate && !timeout) func.apply(context, args);
  };
}
