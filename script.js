const users = [
  {
    name: "amisha rathore",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    bio: "silent chaos in a loud world | not for everyone",
  },
  {
    name: "kiara mehta",
    pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
    bio: "main character energy | coffee > everything",
  },
  {
    name: "isha oberoi",
    pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
    bio: "walking through dreams in doc martens | late night thinker",
  },
  {
    name: "Ojin Oklawa",
    pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
    bio: "too glam to give a damn | filter free soul",
  },
  {
    name: "Ayesha",
    pic: "https://i.pinimg.com/736x/f1/42/ea/f142ea8c65a0001049ee722c306c4194.jpg",
    bio: "less explaining | filter free soul",
  },
  {
    name: "Alina",
    pic: "https://i.pinimg.com/736x/b6/8e/2c/b68e2c57ee6acd7e3a74e4f62945b695.jpg",
    bio: "calm presence | complicated mind",
  }
];

const cardsContainer = document.querySelector(".cards");
const inp = document.querySelector(".inp");

// Function to create a card element
function createCard({ name, pic, bio }) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${pic}" class="bg-img">
    <div class="blurred-layer" style="background-image: url(${pic});"></div>
    <div class="content">
      <h3>${name}</h3>
      <p>${bio}</p>
    </div>
  `;
  return card;
}

// Function to render users
function showUsers(arr) {
  cardsContainer.innerHTML = ""; // Clear previous cards
  const fragment = document.createDocumentFragment(); // Optimize DOM insert
  arr.forEach(user => fragment.appendChild(createCard(user)));
  cardsContainer.appendChild(fragment);
}

// Initial render
showUsers(users);

// Search input filter
inp.addEventListener("input", () => {
  
  const value = inp.value.toLowerCase();
  const filteredUsers = users.filter(user => user.name.toLowerCase().startsWith(value));
  if(filteredUsers.length ===0){
    cardsContainer.innerHTML="";
   const nouser=document.createElement("div");
   nouser.textContent="No user  found";
   nouser.style.color="white";
   cardsContainer.appendChild(nouser);
  }
  else{
  showUsers(filteredUsers)
  };
});
users.name