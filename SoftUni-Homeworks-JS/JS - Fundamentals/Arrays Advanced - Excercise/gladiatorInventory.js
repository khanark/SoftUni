function updateEquipment(arr) {
  let equipment = arr.shift().split(' ');

  for (const command of arr) {
    const token = command.split(' ');
    const currentCommand = token[0];
    const newItem = token[1];

    switch (currentCommand) {
      case 'Buy':
        if (!equipment.includes(newItem)) {
          equipment.push(newItem);
        }
        break;
      case 'Trash':
        if (equipment.includes(newItem)) {
          equipment.splice(equipment.indexOf(newItem), 1);
        }
        break;
      case 'Repair':
        if (equipment.includes(newItem)) {
          let repairedItem = equipment.splice(equipment.indexOf(newItem), 1);
          equipment.push(repairedItem);
        }
        break;
      case 'Upgrade':
        let [oldItem, upgrade] = token[1].split('-');
        if (equipment.includes(oldItem)) {
          equipment.splice(
            equipment.indexOf(oldItem) + 1,
            0,
            `${oldItem}:${upgrade}`
          );
        }
    }
  }
  console.log(equipment.join(' '));
}