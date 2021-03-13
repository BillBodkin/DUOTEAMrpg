export default class Sprite {
	constructor(img, x, y, width, height, scale = 1, flipX = false, flipY = false, color = null){
		this.img = img;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.scale = scale;
		this.flipX = flipX;
		this.flipY = flipY;
		this.color = color;
		this.SetColor();
	}
	
	SetColor(){
		game.ctx.clearRect(0, 0, this.width, this.height);
		this.Draw(0, 0);
	}
	
	Draw(x, y){
		game.ctx.drawImage(
			this.img,
			this.x + (this.flipX ? this.width : 0),
			this.y + (this.flipY ? this.height : 0),
			this.width,
			this.height,
			x,
			y,
			this.width * (this.flipX ? -1 : 1) * this.scale,
			this.height * (this.flipY ? -1 : 1) * this.scale
		);
	}
}