class Form{
    constructor(){

    }
    // createButton - to create button
    //createInput - > to give input
    //createElement -> heading, message, greeting
    display(){

    var title = createElement('h2');
    title.html("CAR RACING GAME");
    title.position(400, 50);

    var input = createInput("NAME");
    input.position(450, 200);
    
    var button = createButton("ENTER");
    button.position(480, 250);
    
    var greeting = createElement('h2');

     button.mousePressed(function (){
         input.hide();
         button.hide();
         
         var name = input.value();
         playerCount = playerCount + 1;
         player.update(name);
         player.updateCount(playerCount);

         greeting.html("HELLOOO "+ name);
         greeting.position(450, 300);

     })



    }
}