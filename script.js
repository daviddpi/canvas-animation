window.onload = function() {
    const canvas = document.getElementById("canvas_1")
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
 
    const flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height)
    flowField.animate();
}

class FlowFieldEffect{
    #ctx;
    #width;
    #height;

    constructor(ctx, width, height){
        
        this.#ctx = ctx;
        this.#width = width;
        this.#height = height;

        this.x = 0;
        this.y = 0;
    }

    #draw(x, y){
        const length = 500;
        this.#ctx.strokeStyle='White';
        this.#ctx.beginPath();
        this.#ctx.moveTo(x, y);
        this.#ctx.lineTo(x+length, y+length);
        this.#ctx.stroke();
    }

    animate(){
        this.#draw(this.x,this.y);
        this.x += 1;
        this.y += 0.5;
        console.log("animating")
        requestAnimationFrame(this.animate.bind(this))
    }

}