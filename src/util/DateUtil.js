function splitDate(s) {
    const [year, month] = s.split('-')
    return { year, month }
}

function stringify({ year, month }) {
    return ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'][month - 1] + ' ' + year
}

export { splitDate, stringify }