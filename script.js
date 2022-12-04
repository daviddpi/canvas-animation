let canvas;
let ctx;
let flowField;
let flowFieldAnimation;

window.onload = function() {
    canvas = document.getElementById("canvas_1")
    ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
 
    flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height)
    flowField.animate(0);
}


window.addEventListener("resize", function (){
    cancelAnimationFrame(flowFieldAnimation)
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height)
    flowField.animate(0);
});

const mouse = {
    x: 0,
    y: 0
}

window.addEventListener("mousemove", function (e){
    mouse.x = e.x;
    mouse.y = e.y;
})

const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
}

class FlowFieldEffect{
    #ctx;
    #width;
    #height;

    constructor(ctx, width, height){
        
        this.#ctx = ctx;
        this.#width = width;
        this.#height = height;
        // this.angle = 0;
        this.lastTime = 0;
        this.interval = 1000/144;
        this.timer = 0;
        this.cellSize = 15;
    }

    #drawLine(x, y){
        // this.#ctx.strokeStyle = setBg();
        this.#ctx.strokeStyle = "red";

        this.#ctx.lineWidth = 1;
        
        this.#ctx.beginPath();
        this.#ctx.moveTo(x, y);
        this.#ctx.lineTo(mouse.x, mouse.y);
        this.#ctx.stroke();
    }

    animate(timeStamp){

        const deltaTime = timeStamp - this.lastTime;
        this.lastTime = timeStamp;

        if(this.timer > this.interval){

            // this.angle += 0.1;
    
            this.#ctx.clearRect(0, 0, this.#width, this.#height);
            // this.#draw(this.#width/2 + Math.sin(this.angle) * 100 ,this.#height / 2 + Math.cos(this.angle) * 100 );
            this.#drawLine(this.#width/2,this.#height / 2);
            this.timer = 0;
        } else{
            this.timer += deltaTime;
        }


       
        // console.log("animating")
        flowFieldAnimation = requestAnimationFrame(this.animate.bind(this))
    }

}