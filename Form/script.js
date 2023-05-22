// Get DOM elements
const kgInput = document.getElementById('kg');
const lbsOutput = document.getElementById('lbs');
const convertBtn = document.getElementById('convert-btn');
const resetBtn = document.getElementById('reset-btn');

// Convert kg to lbs
function convertWeight() {
  const kg = kgInput.value;
  const lbs = kg * 2.20462;
  lbsOutput.value = lbs.toFixed(2);
}

// Reset form
function resetForm() {
  kgInput.value = '';
  lbsOutput.value = '';
}

// Event listeners
convertBtn.addEventListener('click', convertWeight);
resetBtn.addEventListener('click', resetForm);
