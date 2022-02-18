const result = document.getElementById('datecalc__result')

export const printError = (errText) => {
  result.innerText = errText
}

export const printREsult = ({ years, months, days }) => {
  result.innerText = `День: ${days} - Месяц: ${months} - Год: ${years};`
}