import { patch } from 'incremental-dom';
import { render } from 'skatejs-named-slots';

export default function (opts) {
  const internalRenderer = opts.render;

  if (!internalRenderer) {
    return;
  }

  return render(function (elem, shadowRoot) {
    patch(shadowRoot, internalRenderer, elem);
  });
}