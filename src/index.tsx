/* @refresh reload */
import { render } from 'solid-js/web';

import './css/app.scss';
import { cn } from './util/classnames';

const root: HTMLElement | null = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => <div class={cn('my-first-class')}>Hello world!</div>, root!);

// Utility function to create the highlight overlay. will be replaced by component later
function createHighlightOverlay(target: HTMLElement): void {
  const rect = target.getBoundingClientRect();

  // Create the highlight overlay
  const highlight = document.createElement('div');
  highlight.style.position = 'absolute';
  highlight.classList.add('highlight-overlay'); // Add a class to identify overlay nodes
  highlight.style.top = `${rect.top + window.scrollY}px`;
  highlight.style.left = `${rect.left + window.scrollX}px`;
  highlight.style.width = `${rect.width}px`;
  highlight.style.height = `${rect.height}px`;
  highlight.style.backgroundColor = 'rgba(255, 215, 0, 0.5)'; // Gold semi-transparent
  highlight.style.pointerEvents = 'none';
  highlight.style.zIndex = '9999';
  highlight.style.transition = 'opacity 0.5s ease';

  document.body.appendChild(highlight);

  // Fade out and remove the overlay after 500ms
  requestAnimationFrame(() => {
    highlight.style.opacity = '0';
  });

  setTimeout(() => {
    highlight.remove();
  }, 500);
}

// MutationObserver to track added nodes
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      mutation.addedNodes.forEach((node) => {
        if (
          node instanceof HTMLElement &&
          !node.classList.contains('highlight-overlay') // Ignore overlay nodes
        ) {
          createHighlightOverlay(node);
        }
      });
    }
  });
});

// Start observing changes in the document
observer.observe(document.body, {
  childList: true,
  subtree: true,
});
