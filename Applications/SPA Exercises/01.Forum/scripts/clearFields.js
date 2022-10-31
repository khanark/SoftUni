export function clear() {
    Object.values(document.querySelector('form'))
        .slice(0, 3)
        .forEach(field => (field.value = ''));
}
