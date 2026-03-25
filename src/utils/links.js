document.querySelectorAll('.cards').forEach(card => {
  card.addEventListener('click', () => {
    const link = card.dataset.link;

    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  });
});

