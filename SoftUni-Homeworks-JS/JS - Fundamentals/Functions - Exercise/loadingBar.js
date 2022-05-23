function renderBar(percentage) {
  let symbolsToRender = percentage / 10;

  const msg = () => (percentage < 100 ? 'Still loading...' : '100% Complete!');

  const bar = () => {
    let loadingBar = [];
    for (let i = 0; i < 10; i++) {
      let index = i + 1;

      if (index <= symbolsToRender) {
        loadingBar.push('%');
      } else {
        loadingBar.push('.');
      }
    }

    return percentage < 100
      ? `${percentage}% [${loadingBar.join('')}]`
      : `[${loadingBar.join('')}]`;
  };
  percentage < 100
    ? console.log(`${bar()}\n${msg()}`)
    : console.log(`${msg()}\n${bar()}`);
}
renderBar(50);
