document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', () => {
      console.log(`Selected: ${radio.value}`);
    });
  });