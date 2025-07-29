document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('check');
  const sidebar = document.querySelector('.slide');
  const toggle = document.querySelector('.toggle');

  document.addEventListener('mousedown', function (e) {
    const clickedInsideSidebar = sidebar.contains(e.target);
    const clickedToggle = toggle.contains(e.target);

    if (!clickedInsideSidebar && !clickedToggle && checkbox.checked) {
      checkbox.checked = false;
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && checkbox.checked) {
      checkbox.checked = false;
    }
  });
});