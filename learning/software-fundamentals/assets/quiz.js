document.querySelectorAll('[data-quiz]').forEach((quiz) => {
  const options = Array.from(quiz.querySelectorAll('[data-choice]'));
  const feedback = quiz.querySelector('[data-feedback]');

  // Shuffle at render time so answer position carries no signal.
  for (let i = options.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  options.forEach((option) => quiz.insertBefore(option, feedback));

  options.forEach((option) => {
    option.addEventListener('click', () => {
      const correct = option.dataset.correct === 'true';
      feedback.textContent = correct
        ? option.dataset.correctFeedback
        : option.dataset.wrongFeedback;
      feedback.className = `feedback ${correct ? 'good' : 'bad'}`;
    });
  });
});
