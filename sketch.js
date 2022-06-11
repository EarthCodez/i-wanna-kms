var rep=0
function setup(){
    canvas = createCanvas(windowWidth-17.5, windowHeight-20);
    database = firebase.database();
}
function draw(){
    rep+=1
    console.log(rep)
    database.ref("/Talc/Teachers/"+rep).set({
       number :"name 2k"
      })
}