# MoveableType

Generate letters from a distance field texture in thin-instances
(Yes, it's the British spelling.)

## Javascript Calls And Parameters

### Usage Summary  
  BABYLON.MoveableType.loadShaders()
  thinInstanceArrays = BABYLON.MoveableType(scene, "Roboto-Medium", "Hello world", options)
  // The default orientation of the text is
  text1.material.set...

  // Setting colors

  // Setting position
  
  // Setting outline
  
  // Setting size 
  
&#9679; TODO Actual Examples:&nbsp;  https://www.babylonjs-playground.com/#PL752W#384  


TODO:
### Options
  
	      FIELD                 DEFAULT
	    letter-height           100
	    color                   #808080              # hits emissive only
	    alpha                   1
	    position
	        x                   0
	        y                   0
	        z                   0
	    colors                                       # if you need to control more than just emissive
	        diffuse             #F0F0F0
	        specular            #000000
	        ambient             #F0F0F0
	        emissive            color                # from option field 'color' above


### Thin Instance Operations
   TODO!
	   getSPS
	   getMesh
	   getMaterial
	   color                   # sets or gets color but no change to material
	   alpha                   # sets or gets alpha but no change to material
	   setColor                # set emissive color and change color value
	   setAlpha                # change value and material
	   overrideOpac            # change material but not value
	   resetOpac               # sets material to current value
	   dispose                 

### Usage Hints

When applying transformations to -- do it in x, y, z order.

### Font Families and Supported Glyphs

There are two fonts available: 'Roboto-Regular' and 'Roboto-Medium'. Both have the following available glyphs (94):

TODO: Fix this list
	"0","1","2","3","4","5","6","7","8","9",
	"a","á","à","ä","â","å","æ","b","c","ç","č","d","e","é","è","ë","ê","f","g",
	"h","i","ı","í","ì","ï","î","j","k","l","m","n","ñ","ń","o","ô","ò","ó","ö",
	"p","q","r","s","t","u","ú","ù","ü","û","v","w","x","y","ÿ","z",
	"A","Á","À","Ã","Â","Ä","Å","Æ","B","C","D","E","É","È","Ê","Ë","F","G","H","I","J","K","L","M",
	"N","Ñ","O","Ó","Ò","Ô","Ö","Õ","P","Q","R","S","T","U","Ú","Ù","Û","Ü","V","W","X","Y","Z",
	"¡","!","|",'"',"'","#","$","%","&","{","}","(",")","*","+",",","-",".",
	"/",":",";","<","=",">","¿","?","@","[","]","^","_"," "

## Loading MoveableType

Load BABYLON first.

### In BABYLON Playground

var url = "https://host/path/moveabletype.min.js";
var s = document.createElement("script");
s.src = url;
document.head.appendChild(s);

var createScene = function() {

    //Scene set up code

    s.onload = function() {
        text1 = BABYLON.MoveableType ...
        ...
    }
	
    return scene;
}

### In Production

HTML tag (after bablyonjs

	<script type="text/javascript" src="path/moveabletype.min.js"></script>

## Adding fonts

MoveableType only comes with two fonts and with limited characters. To add more: TODO

