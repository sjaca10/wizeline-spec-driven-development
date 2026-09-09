const form = document.getElementById('calculator-form');
const resultsSection = document.getElementById('results');
const resultAmountEl = document.getElementById('result-amount');
const resultInterestEl = document.getElementById('result-interest');

const fields = {
  principal: {
    input: document.getElementById('principal'),
    error: document.getElementById('principal-error'),
  },
  rate: {
    input: document.getElementById('rate'),
    error: document.getElementById('rate-error'),
  },
  years: {
    input: document.getElementById('years'),
    error: document.getElementById('years-error'),
  },
};

function parseNumber(rawValue) {
  if (rawValue.trim() === '') {
    return NaN;
  }
  return Number(rawValue);
}

function validatePrincipal(rawValue) {
  if (rawValue.trim() === '') {
    return 'Principal is required.';
  }
  const value = parseNumber(rawValue);
  if (Number.isNaN(value)) {
    return 'Principal must be a number.';
  }
  if (value <= 0) {
    return 'Principal must be greater than zero.';
  }
  return null;
}

function validateRate(rawValue) {
  if (rawValue.trim() === '') {
    return 'Interest rate is required.';
  }
  const value = parseNumber(rawValue);
  if (Number.isNaN(value)) {
    return 'Interest rate must be a number.';
  }
  if (value < 0) {
    return 'Interest rate cannot be negative.';
  }
  return null;
}

function validateYears(rawValue) {
  if (rawValue.trim() === '') {
    return 'Years is required.';
  }
  const value = parseNumber(rawValue);
  if (Number.isNaN(value)) {
    return 'Years must be a number.';
  }
  if (value <= 0) {
    return 'Years must be greater than zero.';
  }
  return null;
}

function calculateCompoundInterest(principal, ratePercent, years) {
  const rateDecimal = ratePercent / 100;
  const finalAmount = principal * Math.pow(1 + rateDecimal, years);
  const totalInterest = finalAmount - principal;
  return { finalAmount, totalInterest };
}

function formatToTwoDecimals(value) {
  return value.toFixed(2);
}

function clearErrors() {
  Object.values(fields).forEach(({ error }) => {
    error.textContent = '';
  });
}

function setError(fieldName, message) {
  fields[fieldName].error.textContent = message;
}

function hideResults() {
  resultsSection.hidden = true;
  resultAmountEl.textContent = '';
  resultInterestEl.textContent = '';
}

function showResults(finalAmount, totalInterest) {
  resultAmountEl.textContent = formatToTwoDecimals(finalAmount);
  resultInterestEl.textContent = formatToTwoDecimals(totalInterest);
  resultsSection.hidden = false;
}

function handleSubmit(event) {
  event.preventDefault();
  clearErrors();
  hideResults();

  const principalRaw = fields.principal.input.value;
  const rateRaw = fields.rate.input.value;
  const yearsRaw = fields.years.input.value;

  const principalError = validatePrincipal(principalRaw);
  const rateError = validateRate(rateRaw);
  const yearsError = validateYears(yearsRaw);

  let hasError = false;

  if (principalError) {
    setError('principal', principalError);
    hasError = true;
  }
  if (rateError) {
    setError('rate', rateError);
    hasError = true;
  }
  if (yearsError) {
    setError('years', yearsError);
    hasError = true;
  }

  if (hasError) {
    return;
  }

  const principal = Number(principalRaw);
  const rate = Number(rateRaw);
  const years = Number(yearsRaw);

  const { finalAmount, totalInterest } = calculateCompoundInterest(principal, rate, years);
  showResults(finalAmount, totalInterest);
}

form.addEventListener('submit', handleSubmit);
