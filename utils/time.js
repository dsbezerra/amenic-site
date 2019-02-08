const MONTH_NAMES = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro'
]

export const getMonthName = (m) => {
  if (m >= 0 && m < MONTH_NAMES.length) {
    return MONTH_NAMES[m]
  }

  throw new Error('invalid month')
}

export const addZero = (n) => {
  if (n < 10) {
    return '0' + n
  }

  return n
}

export const formatNowPlayingWeek = (week) => {
  const { start, end } = week
  if (!start || !end) {
    return ''
  }

  const s = new Date(start)
  const e = new Date(end)
  if (!s || !e) {
    return ''
  }

  const st = `${s.getUTCDate()} de ${getMonthName(s.getUTCMonth())}`
  const et = `${e.getUTCDate()} de ${getMonthName(e.getUTCMonth())}`

  return `${st} a ${et}`
}
