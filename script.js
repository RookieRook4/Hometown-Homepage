const coolDiv = document.getElementById("cool-places");
const natureBtn = document.getElementById("nature-btn");
const historyBtn = document.getElementById("history-btn");
const sportBtn = document.getElementById("sports-btn");
let buttons = document.querySelectorAll(".focused");

buttons = Object.values(buttons);

for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];

  button.addEventListener("click", function () {
    const currentSelected = document.querySelector(".focused.selected");
    if (currentSelected) {
      currentSelected.classList.remove("selected");
    }

    this.classList.add("selected");
  });
}

natureBtn.addEventListener("click", function () {
  coolDiv.innerHTML = `
      <div>
        <img src="images/Ada_Ciganlija.jpg" />
        <h3>Ada Ciganlija</h3>
        <p>
          A huge lake and park known as Belgrade's "Sea." It has long pebble
          beaches, cafes, and tons of space for swimming, riding bikes, or
          playing basketball and other sports.
        </p>
      </div> 
      <div>
        <img src="images/usce.jpg" />
        <h3>Ušće Park</h3>
        <p>
          A huge, beautiful green space in New Belgrade right where the Sava meets the Danube. Perfect for evening strolls and looking across to old Belgrade.
        </p>
      </div>
      `;
});

historyBtn.addEventListener("click", function () {
  coolDiv.innerHTML = `
      <div>
        <img src="images/fortress.jpg" />
        <h3>Belgrade Fortress (Kalemegdan)</h3>
        <p>
          The historical core of the city. Walk through ancient gates, check out Roman ruins, and catch the best sunset view in town from the fortress walls.
        </p>
      </div> 
      <div>
        <img src="images/gardos.jpg" />
        <h3>Gardoš Tower (Zemun)</h3>
        <p>
          Located in nearby Zemun, this historic tower offers stunning panoramic views of the Danube. The old cobblestone streets around it feel like a different era.
        </p>
      </div>
      `;
});

sportBtn.addEventListener("click", function () {
  coolDiv.innerHTML = `
      <div>
        <img src="images/arena.jpg" />
        <h3>Belgrade Arena</h3>
        <p>
          Right in the heart of Novi Beograd, this is one of Europe's largest indoor arenas. It hosts incredible, high-energy EuroLeague basketball games.
        </p>
      </div> 
      <div>
        <img src="images/sava-quay.jpg" />
        <h3>Sava Quay (Savski Kej)</h3>
        <p>
          A long, flat pathway along the Sava River perfect for outdoor workouts, running, cycling, or playing on the various outdoor fitness parks.
        </p>
      </div>
      `;
});
