function splitDate(s) {
    const [year, month, day] = s.split('-')
    return { year, month, day }
}

function stringify({ year, month, day }) {
    return [day, ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'][month - 1], year].join(' ')
}

export { splitDate, stringify }