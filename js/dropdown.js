document.addEventListener("DOMContentLoaded", () => {
  const selectBtn = document.querySelector(".btn--select");
  const selectText = selectBtn.querySelector(".btn--select__text");
  const selectList = selectBtn.querySelector(".btn--select__list");

  selectBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    selectList.classList.toggle("btn--select__list--active");
    selectText.classList.toggle("btn--select__text--active");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (event) => {
    if (!selectBtn.contains(event.target)) {
      selectList.classList.remove("btn--select__list--active");
      selectText.classList.remove("btn--select__text--active");
    }
  });
});

/////////////
document.addEventListener('DOMContentLoaded', function () {
  const select = document.querySelector('.custom-select');
  const trigger = select.querySelector('.custom-select__trigger');
  const optionsContainer = select.querySelector('.custom-select__options');
  const optionsList = optionsContainer.querySelectorAll('li');

  // Toggle dropdown when trigger is clicked
  trigger.addEventListener('click', function (e) {
    e.stopPropagation();
    select.classList.toggle('open');
    trigger.classList.toggle('custom-select__trigger--active');
  });

  // When an option is clicked, update the trigger text and close the dropdown
  optionsList.forEach(option => {
    option.addEventListener('click', function (e) {
      e.stopPropagation();
      trigger.textContent = this.textContent;
      select.classList.remove('open');
      trigger.classList.remove('custom-select__trigger--active');
    });
  });

  // Close the dropdown if user clicks outside
  document.addEventListener('click', function () {
    select.classList.remove('open');
    trigger.classList.remove('custom-select__trigger--active');
  });
});


