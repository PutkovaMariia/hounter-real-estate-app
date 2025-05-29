document.addEventListener('DOMContentLoaded', function () {
  const textarea = document.getElementById('message-text');
  const charCount = document.getElementById('textarea-char-count');
  const maxChars = 500;

  textarea.addEventListener('input', function () {
    const length = textarea.value.length;
    charCount.textContent = `${length}/${maxChars}`;
  });

});
