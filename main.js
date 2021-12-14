var canvas= new fabric.Canvas("myCanvas")
 block_y=1;
 block_x=1;

block_image_width = 250;
block_image_height = 330;

var block_image_object= "";

function new_image(get_image)
{
fabric.Image.fromURL(get_image,function(Img){
blocks_object=Img;
blocks_object.scaleToWidth(350);
blocks_object.scaleToHeight(430);
blocks_object.set({
	top:block_y,left:block_x
});
canvas.add(blocks_object)
})   
}

	


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{

	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(keyPressed == '82')
	
	{
new_image('rr1.png');
console.log("r");
	} 


	
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image('gr.png');
console.log("g");
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image('yr.png');
		console.log("y");
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image('pr.png');
		console.log("p");
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image('br.png');
		console.log("b");
	}
	
}

