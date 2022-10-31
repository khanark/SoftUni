export function showLoading() {
    const p = document.createElement('p');
    p.textContent = 'Loading...';
    p.style.textAlign = 'center';
    p.style.marginTop = '20px';
    return p;
}
