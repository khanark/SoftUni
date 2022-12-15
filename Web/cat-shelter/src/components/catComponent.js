exports.component = cat => `
  <li>
    <img
      src=${cat.image}
      alt="Black Cat"
    />
    <h3>${cat.name}</h3>
    <p><span>Breed: </span>${cat.breed}</p>
    <p>
      <span>Description: </span>${cat.description}
    </p>
    <ul class="buttons">
      <li class="btn edit"><a href="">Change Info</a></li>
      <li class="btn delete"><a href="">New Home</a></li>
    </ul>
  </li>
`;
