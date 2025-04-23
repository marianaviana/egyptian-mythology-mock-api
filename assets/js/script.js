const select = document.getElementById('version');
  const versions = document.querySelectorAll('.version');

  function updateVisibleVersion() {
    const selectedValue = select.value;

    versions.forEach(div => {
      div.style.display = div.classList.contains(selectedValue) ? 'block' : 'none';
    });
  }

  select.addEventListener('change', updateVisibleVersion);
  updateVisibleVersion();