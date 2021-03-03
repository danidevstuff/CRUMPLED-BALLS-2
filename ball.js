class Ball {
    constructor() {
        this.body = Bodies.circle(50, 400, 12.5, { restituion: 0.3, friction: 0.5, density: 0.1, isStatic: false });

        this.r = 70;
        this.image = loadImage("paper.png");
        World.add(world, this.body);

    }
    display() {
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();

    }
}