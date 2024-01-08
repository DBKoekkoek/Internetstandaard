 //Console log om te kijken of HTML en Javascript gelinkt zijn//
console.log('Hey its me Goku!');

//Var voor de cijfers, grote, positie en snelheid//
var x = 0; 
var y = 0; 
var key, pos = 0; 
var speed = 8; 

//Algemene var die mijn HTML elementen pakt //
var canvas = document.querySelector('canvas'); 
var player = document.querySelector('#player'); 
var ball = document.querySelector('#ball');
var ctx = canvas.getContext('2d'); 


//Button voor het achtergrond geluid //
var music = new Audio ('./Sound/Dragon Ball Z Original Soundtrack - Solid State Scouter.mp3', 'background');

//Array voor Sound Effect //
var itsGoku =  [ 
new Audio ('./Sound/download.mp3'),
new Audio ('./Sound/dragon_ball_z_tele.mp3'),
new Audio ('./Sound/goku_21oQNAE.mp3'), 
new Audio ('./Sound/ui-goku-drip.mp3'),
];

//Button voor Geluid van de achtergrond//
function playSound(sbutton) {
  music.play();
}

//Geluid van de player, hierbij pak ik de array om mijn bepaalde fragmenten te laten zien, code is staat in de array van de Var //
function soundeffect(index) {
    itsGoku[index].play();
}

//De hoogte en breedte van de Canvas, Doordat ik het hier een waarde kan geven in plaats
canvas.width = 1450; 
canvas.height = 600;

 //Eventlistener om de keycodes te ontdekken//
document.addEventListener('keydown', movingDown,);

//Function om Keys te binden aan mijn code//
function movingDown(e) {
  switch (e.code) {
    case 'KeyD':
      moveplayer('right');
      break;

    case 'KeyA':
      moveplayer('left');
      break;

    case 'KeyW':
      moveplayer('up');
      break;

    case 'KeyS':
      moveplayer('down');
      break;
  }

}

//Function om  mijn  character te laten bewegen, hierdoor krijgt mijn character movement, daarnaast zit een array eraan vast voor geluiden//
function moveplayer(direction) 
{
  switch (direction) {
    case 'up':
      y = y - 4 * speed;
      soundeffect(2);
      break;

    case 'down':
      y = y + 4 * speed;
      soundeffect(1);
      break;

    case 'left':
      x = x - 4 * speed;
      soundeffect(3);
      break;

    case 'right':
      x = x + 4 * speed;
      soundeffect(0);
      break;
  }

}

//Function om mijn img toetevoegen aan het Canvas, Inclussief verschillende coordinaties//
function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(player, x, y, 200, 200);
  ctx.drawImage(ball, secondx = 1300, secondy = 300, 100, 100);
}


 //EventListner om mijn mannetje te bewegen, getallen zorgt ervoor dat het mannetje sneller of trager gaat//
setInterval(loop, 100 / 60);

//Code die ik probeerde om een overwinning scene te maken als je de ball hebt. Helaas niet gelukt vanwege tijd. Hierbij de code in kwestie//
//function victory() {
    //if (x + 200 >= winx && x <= winx + 100 && y + 200 >= winy && y <= winy + 100) {  
    //player.classList.add('win');
    //}
  //}


