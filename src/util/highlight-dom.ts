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

const active = false;
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

const highlightDomChanges = () => {
  if (active) return;
  // Start observing changes in the document
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
};

export default highlightDomChanges;
