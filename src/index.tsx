/* @refresh reload */
import { render } from 'solid-js/web';

import './css/app.scss';
import { cn } from './util/classnames';
import highlightDomChanges from './util/highlight-dom';

const root: HTMLElement | null = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

highlightDomChanges();

render(() => <div class={cn('my-first-class')}>Hello world!</div>, root!);
