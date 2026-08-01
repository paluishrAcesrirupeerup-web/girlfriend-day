// ===================================
//  DIGITAL LOVE LETTER ENGINE ❤️
// ===================================


const title = document.getElementById("title");
const message = document.getElementById("message");
const buttons = document.getElementById("buttons");

const gallery = document.getElementById("gallery");

const finalScene = document.getElementById("finalScene");
const loveSVG = document.getElementById("loveSVG");
const finalText = document.getElementById("finalText");

const music = document.getElementById("music");


// ===================================
// DATA
// ===================================


const cuteMessages = [

"That's more like it ❤️",

"Before the surprise...",

"I wanted to tell you something.",

"Thank you for always being there.",

"Thank you for every smile.",

"Thank you for every memory.",

"You make normal days feel special.",

"I really appreciate you.",

"You're someone very special to me ❤️"

];



const rudeMessages = [

"HEY!! 😭",

"RUDE.",

"After all the effort I put into this??",

"GO FOR YES ❤️"

];

// =============================
// PINK PARTICLES ✨
// =============================

const particleBox = document.getElementById("particles");


for(let i=0;i<30;i++){

    let particle=document.createElement("span");


    particle.style.left =
    Math.random()*100+"%";


    particle.style.animationDuration =
    (8+Math.random()*12)+"s";


    particle.style.animationDelay =
    (-Math.random()*15)+"s";


    particleBox.appendChild(particle);

}


// ===================================
// HELPERS
// ===================================


function animateText(){

    message.animate(

        [

            {
                opacity:0,
                transform:"translateY(30px)"
            },

            {
                opacity:1,
                transform:"translateY(0)"
            }

        ],

        {

            duration:600,
            easing:"ease"

        }

    );

}




function setButton(text,id){

buttons.innerHTML=

`
<button class="liquid-btn" id="${id}">
${text}
</button>
`;

}




// ===================================
// START
// ===================================


document.getElementById("startBtn").onclick=()=>{

playSound("tap");


    music.volume = 0;

music.play().then(()=>{

    let volume = 0;

    let fade = setInterval(()=>{

        volume += 0.02;

        music.volume = volume;


        if(volume >= 0.35){

            clearInterval(fade);

        }

    },100);


}).catch(()=>{

    console.log("Music waiting for user interaction");

});


    showQuestion();


};

// =============================
// SOUND ENGINE 🎵
// =============================

function playSound(name){

    let sound = new Audio(
        `assets/sounds/${name}.mp3`
    );

    sound.volume = 0.35;

    sound.play().catch(()=>{});

}


// ===================================
// QUESTION
// ===================================


function showQuestion(){


title.innerHTML="Wanna get a surprise? 👀";

message.innerHTML="";

buttons.innerHTML=`

<button class="liquid-btn" id="yes">
YES ❤️
</button>


<button class="liquid-btn" id="no">
NO 😤
</button>

`;



document.getElementById("yes").onclick=()=>{

playSound("yes");

startMessages();

};


document.getElementById("no").onclick=()=>{

playSound("no");

noAnimation();

};


}




// ===================================
// NO BUTTON
// ===================================


function noAnimation(){


buttons.innerHTML="";

title.innerHTML="";


let i=0;



let timer=setInterval(()=>{


message.innerHTML=rudeMessages[i];


animateText();



i++;



if(i>=rudeMessages.length){


clearInterval(timer);



setTimeout(()=>{


showQuestion();


},1500);



}



},900);



}




// ===================================
// YES MESSAGES
// ===================================


let msgIndex=0;



function startMessages(){


msgIndex=0;


showMessage();


}



function showMessage(){



title.innerHTML="❤️";


message.innerHTML=cuteMessages[msgIndex];


animateText();



setButton(

"Continue ❤️",

"continue"

);



document.getElementById("continue").onclick=()=>{


msgIndex++;


if(msgIndex < cuteMessages.length){


showMessage();


}

else{


showSurprise();


}


};


}




// ===================================
// SURPRISE
// ===================================


function showSurprise(){


title.innerHTML="Ready? 🎁";


message.innerHTML="";


setButton(

"Get The Surprise ❤️",

"surprise"

);



document.getElementById("surprise").onclick=()=>{

playSound("surprise");

showGallery();

};



}




// ===================================
// GALLERY
// ===================================


function showGallery(){


title.innerHTML="Our Memories ❤️";


message.innerHTML="";


buttons.innerHTML="";


gallery.innerHTML="";



for(let i=1;i<=5;i++){


let img=document.createElement("img");


img.src=`assets/photos/${i}.png`;


gallery.appendChild(img);


}



setTimeout(()=>{


gallery.innerHTML += `

<button class="arrow-btn" id="arrow">
➜
</button>

`;


document.getElementById("arrow").onclick=finalAnimation;


},1000);



}




// ===================================
// FINAL
// ===================================


function finalAnimation(){

    gallery.innerHTML="";
    buttons.innerHTML="";
    title.innerHTML="";
    message.innerHTML="";


    finalScene.style.display="block";


    finalText.innerHTML=`

    <span>I</span>
    <span>Love</span>
    <span>You</span>

    `;


    let words=document.querySelectorAll("#finalText span");


    words.forEach((word,index)=>{


        setTimeout(()=>{


            word.animate(

            [

            {
                opacity:0,
                transform:"translateY(50px) scale(.5)"
            },

            {
                opacity:1,
                transform:"translateY(0) scale(1)"
            }

            ],

            {

            duration:1000,

            easing:"cubic-bezier(.2,1.5,.4,1)"

            });


            word.style.opacity=1;


        },index*900);


    });


}

