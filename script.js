let user = [{
    name: "amisha rathore",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    bio: "silent chaos in a loud world | not for everyone",
},
{
    name: "kiara mehta",
    pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
    bio: "main character energy | coffee > everything ",
},
{

    name: "isha oberoi",
    pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
    bio: "walking through dreams in doc martens |late night thinker",
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
    bio: "calm presence| , complicated mind ",
}
];


function showUsers(arr){
    arr.forEach(function(user){
        // Create main card
const card = document.createElement("div");
card.classList.add("card");

// Create image
const img = document.createElement("img");
img.src =user.pic;
img.classList.add( "bg-img");

// Create blurred layer
const blurLayer = document.createElement("div");
blurLayer.style.backgroundImage=`url(${user.pic})`;
blurLayer.classList.add("blurred-layer");

// Create content wrapper
const content = document.createElement("div");
content.classList.add("content");

// Create heading
const h3 = document.createElement("h3");
h3.textContent = user.name;

// Create paragraph
const p = document.createElement("p");
p.textContent =user.bio;

// Append content elements
content.appendChild(h3);
content.appendChild(p);

// Append all to card
card.appendChild(img);
card.appendChild(blurLayer);
card.appendChild(content);

// Finally add card to body (or any container)
document.querySelector(".cards").appendChild(card);

    });
}
showUsers(user);

let inp=document.querySelector(".inp")
inp.addEventListener("input",function(){
   let newUsers=user.filter((user)=>{
return user.name.startsWith(inp.value)
   });
   document.querySelector(".cards").innerHTML="";
   showUsers(newUsers);
});