import Sprite from "./Sprite.js";

export default class Game {
	constructor(){
		this.can = document.getElementById("can");
		this.ctx = can.getContext("2d");
		this.ResizeCanvas();
		this.Load();
	}
	
	ResizeCanvas(){
		can.width = window.innerWidth;
		can.height = window.innerHeight;
	}
	
	Load(){
		this.ctx.imageSmoothingEnabled = false;
		this.ctx.mozImageSmoothingEnabled = false;
		
		let chestImg = new Image();
		chestImg.src = "../img/Chest.png";
		
		chestImg.onload = function(){
			game.tst1 = new Sprite(chestImg, 0, 0, 8, 8, 4);
		};
	}
	
	Draw(){
	
	}
}