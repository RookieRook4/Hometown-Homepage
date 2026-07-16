import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-database.js";

const firebaseConfig = {
  databaseURL:
    "https://hometownhomepage-e5e2d-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const commentsInDB = ref(database, "comments");

const coolDiv = document.getElementById("cool-places");
const natureBtn = document.getElementById("nature-btn");
const historyBtn = document.getElementById("history-btn");
const sportBtn = document.getElementById("sports-btn");
let buttons = document.querySelectorAll(".focused");

let comments = {};

onValue(commentsInDB, function (snapshot) {
  if (snapshot.exists()) {
    comments = snapshot.val();
  } else {
    comments = {};
  }

  renderComments();
});

const postBtn = document.getElementById("post-btn");
let name = document.getElementById("name");
let commentContent = document.getElementById("comment-content-el");

let madeComments = document.getElementById("made-comments");

buttons = Object.values(buttons);

function renderComments() {
  let comment_list = "";
  if (Object.keys(comments).length > 0) {
    for (const [key, value] of Object.entries(comments)) {
      comment_list += `<div> <h3>${value.author}</h3> <p>${value.text}</p> </div>`;
    }
  } else {
    comment_list += `<div> <h3>Author</h3> <p>There are no comments yet. Be the first one to comment.</p> </div>`;
  }

  madeComments.innerHTML = comment_list;
}

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

postBtn.addEventListener("click", function () {
  const name_entered = name.value;
  const comment_wrote = commentContent.value;

  if (name_entered && comment_wrote) {
    const new_comment = {
      author: name_entered,
      text: comment_wrote,
    };
    push(commentsInDB, new_comment);
  }

  name.value = "";
  commentContent.value = "";

  renderComments();
});

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
