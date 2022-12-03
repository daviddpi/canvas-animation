window.onload = function() {
    const canvas = document.getElementById("canvas_1")
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
 
    const flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height)
}

class FlowFieldEffect{
    #ctx;
    #width;
    #height;

    constructor(ctx, width, height){
        
        this.#ctx = ctx;
        this.#width = width;
        this.#height = height;

        console.log("effect loaded")
    }


}