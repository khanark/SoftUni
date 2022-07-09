function solve() {
	document.querySelector('#searchBtn').addEventListener('click', onClick);

	function onClick() {
      // get all the elements
		const input = document.getElementById('searchField').value;
		const rows = [...document.querySelectorAll('tbody tr')];

      // for each row check if the row includes the user input and if so add a class "select"
		rows.forEach(row => {
			row.classList.remove('select');
			if (row.textContent.includes(input)) {
				row.classList.add('select');
			}
		});
	}
}
