function toIdName(n) {
    n = n[0]
    n = n.toLowerCase()
    return n.replace(/[^0-9a-zA-Z]/g, '-')
}

export { toIdName }