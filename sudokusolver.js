//we are gonna fill up the board
const easy = [
    "6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------",
    "685329174971485326234761859362574981549618732718293465823946517197852643456137298",
  ];
  const medium = [
    "--9-------4----6-758-31----15--4-36-------4-8----9-------75----3-------1--2--3--",
    "619472583243985617587316924158247369926531478734698152891754236365829741472163895",
  ];
  const hard = [
    "-1-5-------97-42----5----7-5---3---7-6--2-41---8--5---1-4------2-3-----9-7----8--",
    "712583694639714258845269173521436987367928415498175326184697532253841769976352841",
  ];
  var timer;
  var timeremaining;
  var lives;
  var selectnum;
  var selectedtile;
  var disableselect;
  
  window.onload = function () {
    // syntax nothing we can do
    //run start game function when button is clicked
    //**** */ master trick in this we when input new in id it will return we added event listner to it and asked for startgame funn
    id("start-button1").addEventListener('click', startgame);
  };
  function id1(id) {
    //funcn ka nam id h iska inpur id h or uski hi id return krai h
    return document.getElementById(id);
  }
  
  function startgame() {
    console.log("inside");
    let board;
    //1st it will choose difficulty
    if (id1("easy1").checked) {
      console.log("easy");
      board = easy[0];
    }
    if (id1("medium1").checked) {
      console.log("m");
      board = medium[0];
    }
    if (id1("hard1").checked) {
      console.log("h");
      board = hard[0];
    }
    //now about setting lives
    lives = 3;
    //disable select will disable the selection
    disableselect = false;
    id1("lives").textContent="LIVES REMAINING:3";
    // id1("lives").textContent("LIVES REMAINING:3");
    console.log("bhg bs");
    // WILL DISPLAY LIVES AND WE CAN ADD TEXT LATER FROM JS ALSO
    console.log("=====", board);
    generateboard(board);
    //will display timer now
    starttime();
    // now setting up the theme
    if(id("dark1").checked){
      document.body.classList.add("dark1");
    }
    else{
      document.body.classList.remove("dark1");
      //isme agar puri body p apply krna h to document.body kro vo pura body classlist p apply krega or fir hoga 
    }
    if((id("dark1").checked)||(id("light1").checked)){
      console.log("agaye bhai if m");
    // id("number_container").classList.remove("hidden");
    document.getElementById("number_container").style.display="flex";//zeher property
    }
  }
  function starttime(){
    if(id("timing").checked){timeremaining=180;}
    else if(id("timing1").checked){timeremaining=600;}
    else {timeremaining=900;}
    //coverting time in minutes
    //timer is more of avariable for time
    id("time").textContent=timeconversion(timeremaining);
    //code for the very first second
    timer = setInterval(function(){
      //isme 2 cheeze jayengi interval(in mili seconds) jiske bad vo funcn execute hoga or vo fucn khud
      timeremaining--;
      //now if no time is Remaining
      if(timeremaining==0){
        endgame();
      }id("timer").textContent=timeconversion(timeremaining)
    },1000)
  }
  function timeconversion(time){
    let minutes=Math.floor(time/60);
    if(minutes<10){minutes="0" + minutes;}
    let seconds=time%60;
    if(seconds<10){seconds="0"+seconds;}
    return minutes+ ":" + seconds;
  }
  function generateboard(board) {
    console.log("aagaye");
    //clearing previous bord
    clearprevious();
    //now we will make idcount
    let idcount = 0;
    //creating 9*9 tiles
    for (let i = 0; i < 81; i++) {
      //we are making a tiles in the form of paragraph
      let tile = document.createElement("p"); //will create a paragraph
      if (board.charAt(i) != "-") {
        tile.textContent = board.charAt(i);
      } else {
        //we will add a click event listner here
      }
      //we will give id to every tile
      tile.id = idcount;
      //increment it every time
      idcount++;
      //now we want to update tile to class of every tile
      tile.classList.add("tile");
  
      if ((tile.id > 17 && tile.id < 27 )||( tile.id > 44 && tile.id < 54)) {
        tile.classList.add("bottomborder");
      }
      if ((tile.id+1 )% 9 == 3 || (tile.id+1) % 9 == 6) {
        tile.classList.add("rightborder");
      }
      id("board").appendChild(tile);
    }
  }
  //helper function
  function clearprevious() {
    //access all the tiles first
    let tiles = qsa(".tile"); //will this give array of tiles
    //now we have all the tiles we need to clear the tiles
    for (let i = 0; i < tiles.length; i++) {
      tiles[i].remove();
    }
    //if timer is going on clearing the timer
    if (timer) {
      clearTimeout(timer);
    } //what does it do?
    //if any numbers are selected there then deselecting it
    for (let i = 0; i < id("number_container").children.length; i++) {
      //childrens of number container
      id("number_container").children[i].classList.remove("selected"); //they are keywords i.e selected
      //removes the selected elements
    }
    //clear the selectednum and selected tile
    selectedtile = null;
    selectnum = null;
  }
  function id(id) {
    return document.getElementById(id);
  }
  function qsa(selector) {
    // we can input query selector here and input the class
    return document.querySelectorAll(selector);
  }
  