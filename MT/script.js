let canvas = document.getElementById("canvas");
if (canvas === null)
    alert("canvas not found");
let ctx = canvas.getContext("2d");
const centerX = 165;

class block {
    constructor(x, y, color) {
        this.width = 24;
        this.height = 24;
        this.x = x;
        this.y = y;
        this.color = color;
        return this;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    clear() {
        ctx.clearRect(this.x-4, this.y-4, this.width+8, this.height+8);
    }
}


class SquareTetromino {
    constructor(x = centerX, y = 0) {
        this.currX = x;
        this.currY = y;
        this.selected = false;
        this.blocks = [
            new block(this.currX + 0, this.currY + 0, "red"),
            new block(this.currX + 0, this.currY + 25, "red"),
            new block(this.currX + 25, this.currY + 0, "red"),
            new block(this.currX + 25, this.currY + 25, "red")
        ];
        this.bound = [400, -1, 800, -1];
        for (let i = 0; i < this.blocks.length; i++) {
            this.bound[0] = Math.min(this.bound[0], this.blocks[i].x);
            this.bound[1] = Math.max(this.bound[1], this.blocks[i].x);
            this.bound[2] = Math.min(this.bound[2], this.blocks[i].y);
            this.bound[3] = Math.max(this.bound[3], this.blocks[i].y);
        }
        this.direction = 0;
        return this;
    }

    update() {
        this.blocks = [
            new block(this.currX + 0, this.currY + 0, "red"),
            new block(this.currX + 0, this.currY + 25, "red"),
            new block(this.currX + 25, this.currY + 0, "red"),
            new block(this.currX + 25, this.currY + 25, "red")
        ];
        for (let i = 0; i < this.blocks.length; i++) {
            this.bound[0] = Math.min(this.bound[0], this.blocks[i].x);
            this.bound[1] = Math.max(this.bound[1], this.blocks[i].x+25);
            this.bound[2] = Math.min(this.bound[2], this.blocks[i].y);
            this.bound[3] = Math.max(this.bound[3], this.blocks[i].y+25);
        }
    }


    draw() {
        for (let i = 0; i < this.blocks.length; i++)
            this.blocks[i].draw();
        if (this.selected) {
            ctx.strokeStyle = "white";
            ctx.strokeRect(this.currX-2, this.currY-2, 53,53);
        }
    }

    rotation() {

    }

    clear() {
        for (let i = 0; i < this.blocks.length; i++)
            this.blocks[i].clear();
    }
}

class StraightTetromino {
    constructor(x = centerX, y = 0) {
        self.selected = false;
        this.currX = x;
        this.currY = y;
        this.blocks = [
            new block(this.currX, this.currY, "blue"),
            new block(this.currX, this.currY + 25, "blue"),
            new block(this.currX, this.currY + 50, "blue"),
            new block(this.currX, this.currY + 75, "blue")
        ];
        this.bound = [400, -1, 800, -1];
        for (let i = 0; i < this.blocks.length; i++) {
            this.bound[0] = Math.min(this.bound[0], this.blocks[i].x);
            this.bound[1] = Math.max(this.bound[1], this.blocks[i].x+25);
            this.bound[2] = Math.min(this.bound[2], this.blocks[i].y);
            this.bound[3] = Math.max(this.bound[3], this.blocks[i].y+25);
        }
        this.direction = 0;
        this.forms = 2;
        return this;
    }

    update() {
    this.blocks = [
        new block(this.currX, this.currY, "blue"),
        new block(this.currX, this.currY + 25, "blue"),
        new block(this.currX, this.currY + 50, "blue"),
        new block(this.currX, this.currY + 75, "blue")
    ];

    // if (this.direction !== 0){
    //     this.direction -=1;
    //     this.rotation();
    // }

    this.bound = [400, -1, 800, -1];
        for (let i = 0; i < this.bound.length; i++) {
            this.bound[0] = Math.min(this.bound[0], this.blocks[i].x);
            this.bound[1] = Math.max(this.bound[1], this.blocks[i].x + 25);
            this.bound[2] = Math.min(this.bound[2], this.blocks[i].y);
            this.bound[3] = Math.max(this.bound[3], this.blocks[i].y + 25);
        }
}

    draw() {
        for (let i = 0; i < this.blocks.length; i++)
            this.blocks[i].draw();
        if (this.selected) {
            ctx.strokeStyle = "white";
            console.log("true and !true");
            if (this.direction === 0) {
                console.log("true");
                ctx.strokeRect(this.currX - 2, this.currY - 2, 28, 103);
            } else {
                console.log("!true");
                ctx.strokeRect(this.currX-2, this.currY-2, 103,27);
            }
        }
    }

    clear() {
        for (let i = 0; i < this.blocks.length; i++) {
            this.blocks[i].clear();
        }
    }

    rotation() {
        this.clear();
        if (this.direction === this.forms) this.direction = 0;
        if (this.direction === 0) {
            for (let i = 1; i < this.blocks.length; i++) {
                this.blocks[i].x = this.blocks[i - 1].x + 25;
                this.blocks[i].y = this.blocks[i - 1].y;
            }
        } else if (this.direction === 1) {
            for (let i = 1; i < this.blocks.length; i++) {
                this.blocks[i].x = this.blocks[i - 1].x;
                this.blocks[i].y = this.blocks[i - 1].y + 25;
            }
        } else {
        }
        this.draw();
        this.direction += 1;
    }
}

class TTetromino {
    constructor(x = centerX, y = 0) {
        this.currX = x;
        this.currY = y;
        this.blocks = [
            new block(this.currX, this.currY + 0, "purple"),
            new block(this.currX - 25, this.currY, "purple"),
            new block(this.currX + 25, this.currY, "purple"),
            new block(this.currX, this.currY + 25, "purple")
        ];
        this.bound = [400, -1, 800, -1];
        for (let i = 0; i < this.blocks.length; i++) {
            this.bound[0] = Math.min(this.bound[0], this.blocks[i].x);
            this.bound[1] = Math.max(this.bound[1], this.blocks[i].x);
            this.bound[2] = Math.min(this.bound[2], this.blocks[i].y);
            this.bound[3] = Math.max(this.bound[3], this.blocks[i].y);
        }
        this.direction = 0;
        this.forms = 4;
        // this.draw();
        return this;
    }

    update() {
        this.blocks = [
            new block(this.currX, this.currY + 0, "purple"),
            new block(this.currX - 25, this.currY, "purple"),
            new block(this.currX + 25, this.currY, "purple"),
            new block(this.currX, this.currY + 25, "purple")
        ];
        for (let i = 0; i < this.blocks.length; i++) {
            this.bound[0] = Math.min(this.bound[0], this.blocks[i].x);
            this.bound[1] = Math.max(this.bound[1], this.blocks[i].x);
            this.bound[2] = Math.min(this.bound[2], this.blocks[i].y);
            this.bound[3] = Math.max(this.bound[3], this.blocks[i].y);
        }
    }

    draw() {
        for (let i = 0; i < this.blocks.length; i++) {
            this.blocks[i].draw();
        }
    }

    clear() {
        for (let i = 0; i < this.blocks.length; i++) {
            this.blocks[i].clear();
        }
    }

    rotation() {
        this.clear();
        if (this.direction === 0) {
            this.blocks = [
                new block(this.currX, this.currY + 0, "purple"),
                new block(this.currX, this.currY - 25, "purple"),
                new block(this.currX, this.currY + 25, "purple"),
                new block(this.currX - 25, this.currY, "purple")
            ];
        } else if (this.direction === 1) {
            this.blocks = [
                new block(this.currX, this.currY + 0, "purple"),
                new block(this.currX + 25, this.currY, "purple"),
                new block(this.currX - 25, this.currY, "purple"),
                new block(this.currX, this.currY - 25, "purple")
            ];
        } else if (this.direction === 2) {
            this.blocks = [
                new block(this.currX, this.currY + 0, "purple"),
                new block(this.currX, this.currY + 25, "purple"),
                new block(this.currX, this.currY - 25, "purple"),
                new block(this.currX + 25, this.currY, "purple")
            ];
        } else {
            this.blocks = [
                new block(this.currX, this.currY + 0, "purple"),
                new block(this.currX - 25, this.currY, "purple"),
                new block(this.currX + 25, this.currY, "purple"),
                new block(this.currX, this.currY + 25, "purple")
            ];
        }

        this.draw();
        this.direction += 1;
        if (this.direction === this.forms) this.direction = 0;
    }
}


class SkewTetromino {
    constructor(x = centerX, y = 25) {
        this.currX = x;
        this.currY = y;
        this.blocks = [
            new block(this.currX, this.currY + 0, "yellow"),
            new block(this.currX, this.currY - 25, "yellow"),
            new block(this.currX - 25, this.currY, "yellow"),
            new block(this.currX - 25, this.currY + 25, "yellow")
        ];
        this.bound = [400, -1, 800, -1];
        for (let i = 0; i < this.blocks.length; i++) {
            this.bound[0] = Math.min(this.bound[0], this.blocks[i].x);
            this.bound[1] = Math.max(this.bound[1], this.blocks[i].x);
            this.bound[2] = Math.min(this.bound[2], this.blocks[i].y);
            this.bound[3] = Math.max(this.bound[3], this.blocks[i].y);
        }
        this.direction = 0;
        this.forms = 2;
        // this.draw();
        return this;
    }

    update() {
        this.blocks = [
            new block(this.currX, this.currY + 0, "yellow"),
            new block(this.currX, this.currY - 25, "yellow"),
            new block(this.currX - 25, this.currY, "yellow"),
            new block(this.currX - 25, this.currY + 25, "yellow")
        ];
        for (let i = 0; i < this.blocks.length; i++) {
            this.bound[0] = Math.min(this.bound[0], this.blocks[i].x);
            this.bound[1] = Math.max(this.bound[1], this.blocks[i].x);
            this.bound[2] = Math.min(this.bound[2], this.blocks[i].y);
            this.bound[3] = Math.max(this.bound[3], this.blocks[i].y);
        }
    }

    draw() {
        for (let i = 0; i < this.blocks.length; i++) {
            this.blocks[i].draw();
        }
    }

    clear() {
        for (let i = 0; i < this.blocks.length; i++) {
            this.blocks[i].clear();
        }
    }

    rotation() {
        this.clear();
        if (this.direction === 0) {
            this.blocks = [
                new block(this.currX, this.currY + 0, "yellow"),
                new block(this.currX + 25, this.currY, "yellow"),
                new block(this.currX, this.currY - 25, "yellow"),
                new block(this.currX - 25, this.currY - 25, "yellow")
            ];
        } else {
            this.blocks = [
                new block(this.currX, this.currY + 0, "yellow"),
                new block(this.currX, this.currY - 25, "yellow"),
                new block(this.currX - 25, this.currY, "yellow"),
                new block(this.currX - 25, this.currY + 25, "yellow")
            ];
        }

        this.draw();
        this.direction += 1;
        if (this.direction === this.forms) this.direction = 0;
    }
}


class LTetromino {
    constructor(x = centerX, y = 25) {
        this.currX = x;
        this.currY = y;
        this.blocks = [
            new block(this.currX, this.currY + 0, "orange"),
            new block(this.currX, this.currY - 25, "orange"),
            new block(this.currX, this.currY + 25, "orange"),
            new block(this.currX - 25, this.currY + 25, "orange")
        ];
        this.bound = [400, -1, 800, -1];
        for (let i = 0; i < this.blocks.length; i++) {
            this.bound[0] = Math.min(this.bound[0], this.blocks[i].x);
            this.bound[1] = Math.max(this.bound[1], this.blocks[i].x);
            this.bound[2] = Math.min(this.bound[2], this.blocks[i].y);
            this.bound[3] = Math.max(this.bound[3], this.blocks[i].y);
        }
        this.direction = 0;
        this.forms = 4;
        // this.draw();
        return this;
    }

    update() {
        this.blocks = [
            new block(this.currX, this.currY + 0, "orange"),
            new block(this.currX, this.currY - 25, "orange"),
            new block(this.currX, this.currY + 25, "orange"),
            new block(this.currX - 25, this.currY + 25, "orange")
        ];
        for (let i = 0; i < this.blocks.length; i++) {
            this.bound[0] = Math.min(this.bound[0], this.blocks[i].x);
            this.bound[1] = Math.max(this.bound[1], this.blocks[i].x);
            this.bound[2] = Math.min(this.bound[2], this.blocks[i].y);
            this.bound[3] = Math.max(this.bound[3], this.blocks[i].y);
        }
    }

    draw() {
        for (let i = 0; i < this.blocks.length; i++) {
            this.blocks[i].draw();
        }
    }

    clear() {
        for (let i = 0; i < this.blocks.length; i++) {
            this.blocks[i].clear();
        }
    }

    rotation() {
        this.clear();
        if (this.direction === 0) {
            this.blocks = [
                new block(this.currX, this.currY + 0, "orange"),
                new block(this.currX + 25, this.currY, "orange"),
                new block(this.currX - 25, this.currY, "orange"),
                new block(this.currX - 25, this.currY - 25, "orange")
            ];
        } else if (this.direction === 1) {
            this.blocks = [
                new block(this.currX, this.currY + 0, "orange"),
                new block(this.currX, this.currY + 25, "orange"),
                new block(this.currX, this.currY - 25, "orange"),
                new block(this.currX + 25, this.currY - 25, "orange")
            ];
        } else if (this.direction === 2) {
            this.blocks = [
                new block(this.currX, this.currY + 0, "orange"),
                new block(this.currX - 25, this.currY, "orange"),
                new block(this.currX + 25, this.currY, "orange"),
                new block(this.currX + 25, this.currY + 25, "orange")
            ];
        } else {
            this.blocks = [
                new block(this.currX, this.currY + 0, "orange"),
                new block(this.currX, this.currY - 25, "orange"),
                new block(this.currX, this.currY + 25, "orange"),
                new block(this.currX - 25, this.currY + 25, "orange")
            ];
        }

        this.draw();
        this.direction += 1;
        if (this.direction === this.forms) this.direction = 0;
    }
}

class CTetromino {
    constructor(x = centerX, y = 25) {
        this.currX = x;
        this.currY = y;
        this.blocks = [
            new block(this.currX, this.currY + 0, "#bf00ff"),
            new block(this.currX, this.currY - 25, "#bf00ff"),
            new block(this.currX + 25, this.currY - 25, "#bf00ff"),
            new block(this.currX, this.currY + 25, "#bf00ff"),
            new block(this.currX + 25, this.currY + 25, "#bf00ff")
        ];
        this.bound = [400, -1, 800, -1];
        for (let i = 0; i < this.blocks.length; i++) {
            this.bound[0] = Math.min(this.bound[0], this.blocks[i].x);
            this.bound[1] = Math.max(this.bound[1], this.blocks[i].x);
            this.bound[2] = Math.min(this.bound[2], this.blocks[i].y);
            this.bound[3] = Math.max(this.bound[3], this.blocks[i].y);
        }
        this.direction = 0;
        this.forms = 4;
        // this.draw();
        return this;
    }

    update() {
        this.blocks = [
            new block(this.currX, this.currY + 0, "#bf00ff"),
            new block(this.currX, this.currY - 25, "#bf00ff"),
            new block(this.currX + 25, this.currY - 25, "#bf00ff"),
            new block(this.currX, this.currY + 25, "#bf00ff"),
            new block(this.currX + 25, this.currY + 25, "#bf00ff")
        ];
        for (let i = 0; i < this.blocks.length; i++) {
            this.bound[0] = Math.min(this.bound[0], this.blocks[i].x);
            this.bound[1] = Math.max(this.bound[1], this.blocks[i].x);
            this.bound[2] = Math.min(this.bound[2], this.blocks[i].y);
            this.bound[3] = Math.max(this.bound[3], this.blocks[i].y);
        }
    }
    draw() {
        for (let i = 0; i < this.blocks.length; i++) {
            this.blocks[i].draw();
        }
    }

    clear() {
        for (let i = 0; i < this.blocks.length; i++) {
            this.blocks[i].clear();
        }
    }

    rotation() {
        this.clear();
        if (this.direction === 0) {
            this.blocks = [
                new block(this.currX, this.currY + 0, "#bf00ff"),
                new block(this.currX + 25, this.currY, "#bf00ff"),
                new block(this.currX + 25, this.currY + 25, "#bf00ff"),
                new block(this.currX - 25, this.currY, "#bf00ff"),
                new block(this.currX - 25, this.currY + 25, "#bf00ff")
            ];
        } else if (this.direction === 1) {
            this.blocks = [
                new block(this.currX, this.currY + 0, "#bf00ff"),
                new block(this.currX, this.currY + 25, "#bf00ff"),
                new block(this.currX - 25, this.currY + 25, "#bf00ff"),
                new block(this.currX, this.currY - 25, "#bf00ff"),
                new block(this.currX - 25, this.currY - 25, "#bf00ff")
            ];
        } else if (this.direction === 2) {
            this.blocks = [
                new block(this.currX, this.currY + 0, "#bf00ff"),
                new block(this.currX - 25, this.currY, "#bf00ff"),
                new block(this.currX - 25, this.currY - 25, "#bf00ff"),
                new block(this.currX + 25, this.currY, "#bf00ff"),
                new block(this.currX + 25, this.currY - 25, "#bf00ff")
            ];
        } else {
            this.blocks = [
                new block(this.currX, this.currY + 0, "#bf00ff"),
                new block(this.currX, this.currY - 25, "#bf00ff"),
                new block(this.currX + 25, this.currY - 25, "#bf00ff"),
                new block(this.currX, this.currY + 25, "#bf00ff"),
                new block(this.currX + 25, this.currY + 25, "#bf00ff")
            ];
        }

        this.draw();
        this.direction += 1;
        if (this.direction === this.forms) this.direction = 0;
    }
}

class STetromino {
    constructor(x = centerX, y = 50) {
        this.currX = x;
        this.currY = y;
        this.blocks = [
            new block(this.currX, this.currY + 0, "#870063"),
            new block(this.currX, this.currY - 25, "#870063"),
            new block(this.currX, this.currY - 50, "#870063"),
            new block(this.currX + 25, this.currY - 50, "#870063"),
            new block(this.currX + 25, this.currY, "#870063"),
            new block(this.currX + 25, this.currY + 25, "#870063"),
            new block(this.currX + 25, this.currY + 50, "#870063"),
            new block(this.currX, this.currY + 50, "#870063")
        ];
        this.bound = [400, -1, 800, -1];
        for (let i = 0; i < this.blocks.length; i++) {
            this.bound[0] = Math.min(this.bound[0], this.blocks[i].x);
            this.bound[1] = Math.max(this.bound[1], this.blocks[i].x);
            this.bound[2] = Math.min(this.bound[2], this.blocks[i].y);
            this.bound[3] = Math.max(this.bound[3], this.blocks[i].y);
        }
        this.direction = 0;
        this.forms = 2;
        // this.draw();
        return this;
    }

    update() {
        this.blocks = [
            new block(this.currX, this.currY + 0, "#870063"),
            new block(this.currX, this.currY - 25, "#870063"),
            new block(this.currX, this.currY - 50, "#870063"),
            new block(this.currX + 25, this.currY - 50, "#870063"),
            new block(this.currX + 25, this.currY, "#870063"),
            new block(this.currX + 25, this.currY + 25, "#870063"),
            new block(this.currX + 25, this.currY + 50, "#870063"),
            new block(this.currX, this.currY + 50, "#870063")
        ];
        for (let i = 0; i < this.blocks.length; i++) {
            this.bound[0] = Math.min(this.bound[0], this.blocks[i].x);
            this.bound[1] = Math.max(this.bound[1], this.blocks[i].x);
            this.bound[2] = Math.min(this.bound[2], this.blocks[i].y);
            this.bound[3] = Math.max(this.bound[3], this.blocks[i].y);
        }
    }

    draw() {
        for (let i = 0; i < this.blocks.length; i++) {
            this.blocks[i].draw();
        }
    }

    clear() {
        for (let i = 0; i < this.blocks.length; i++) {
            this.blocks[i].clear();
        }
    }

    rotation() {
        this.clear();
        if (this.direction === 0) {
            this.blocks = [
                new block(this.currX, this.currY + 0, "#870063"),
                new block(this.currX + 25, this.currY, "#870063"),
                new block(this.currX + 50, this.currY, "#870063"),
                new block(this.currX + 50, this.currY + 25, "#870063"),
                new block(this.currX, this.currY + 25, "#870063"),
                new block(this.currX - 25, this.currY + 25, "#870063"),
                new block(this.currX - 50, this.currY + 25, "#870063"),
                new block(this.currX - 50, this.currY, "#870063")
            ];
        } else {
            this.blocks = [
                new block(this.currX, this.currY + 0, "#870063"),
                new block(this.currX, this.currY - 25, "#870063"),
                new block(this.currX, this.currY - 50, "#870063"),
                new block(this.currX + 25, this.currY - 50, "#870063"),
                new block(this.currX + 25, this.currY, "#870063"),
                new block(this.currX + 25, this.currY + 25, "#870063"),
                new block(this.currX + 25, this.currY + 50, "#870063"),
                new block(this.currX, this.currY + 50, "#870063")
            ];
        }

        this.draw();
        this.direction += 1;
        if (this.direction === this.forms) this.direction = 0;
    }
}

class ETetromino {
    constructor(x = centerX, y = 50) {
        this.currX = x;
        this.currY = y;
        this.blocks = [
            new block(this.currX, this.currY + 0, "#bf00ff"),
            new block(this.currX, this.currY - 25, "#bf00ff"),
            new block(this.currX, this.currY - 50, "#bf00ff"),
            new block(this.currX + 25, this.currY - 50, "#bf00ff"),
            new block(this.currX + 25, this.currY + 0, "#bf00ff"),
            new block(this.currX, this.currY + 25, "#bf00ff"),
            new block(this.currX, this.currY + 50, "#bf00ff"),
            new block(this.currX + 25, this.currY + 50, "#bf00ff")
        ];
        this.bound = [400, -1, 800, -1];
        for (let i = 0; i < this.blocks.length; i++) {
            this.bound[0] = Math.min(this.bound[0], this.blocks[i].x);
            this.bound[1] = Math.max(this.bound[1], this.blocks[i].x);
            this.bound[2] = Math.min(this.bound[2], this.blocks[i].y);
            this.bound[3] = Math.max(this.bound[3], this.blocks[i].y);
        }
        this.direction = 0;
        this.forms = 4;
        // this.draw();
        return this;
    }

    update() {
        this.blocks = [
            new block(this.currX, this.currY + 0, "#bf00ff"),
            new block(this.currX, this.currY - 25, "#bf00ff"),
            new block(this.currX, this.currY - 50, "#bf00ff"),
            new block(this.currX + 25, this.currY - 50, "#bf00ff"),
            new block(this.currX + 25, this.currY + 0, "#bf00ff"),
            new block(this.currX, this.currY + 25, "#bf00ff"),
            new block(this.currX, this.currY + 50, "#bf00ff"),
            new block(this.currX + 25, this.currY + 50, "#bf00ff")
        ];
        for (let i = 0; i < this.blocks.length; i++) {
            this.bound[0] = Math.min(this.bound[0], this.blocks[i].x);
            this.bound[1] = Math.max(this.bound[1], this.blocks[i].x);
            this.bound[2] = Math.min(this.bound[2], this.blocks[i].y);
            this.bound[3] = Math.max(this.bound[3], this.blocks[i].y);
        }
    }

    draw() {
        for (let i = 0; i < this.blocks.length; i++) {
            this.blocks[i].draw();
        }
    }

    clear() {
        for (let i = 0; i < this.blocks.length; i++) {
            this.blocks[i].clear();
        }
    }

    rotation() {
        this.clear();
        if (this.direction === 0) {
            this.blocks = [
                new block(this.currX, this.currY + 0, "#bf00ff"),
                new block(this.currX + 25, this.currY, "#bf00ff"),
                new block(this.currX + 50, this.currY, "#bf00ff"),
                new block(this.currX + 50, this.currY + 25, "#bf00ff"),
                new block(this.currX, this.currY + 25, "#bf00ff"),
                new block(this.currX - 25, this.currY, "#bf00ff"),
                new block(this.currX - 50, this.currY, "#bf00ff"),
                new block(this.currX - 50, this.currY + 25, "#bf00ff")
            ];
        } else if (this.direction === 1) {
            this.blocks = [
                new block(this.currX, this.currY + 0, "#bf00ff"),
                new block(this.currX, this.currY - 25, "#bf00ff"),
                new block(this.currX, this.currY - 50, "#bf00ff"),
                new block(this.currX - 25, this.currY - 50, "#bf00ff"),
                new block(this.currX - 25, this.currY + 0, "#bf00ff"),
                new block(this.currX, this.currY + 25, "#bf00ff"),
                new block(this.currX, this.currY + 50, "#bf00ff"),
                new block(this.currX - 25, this.currY + 50, "#bf00ff")
            ];
        } else if (this.direction === 2) {
            this.blocks = [
                new block(this.currX, this.currY + 0, "#bf00ff"),
                new block(this.currX + 25, this.currY, "#bf00ff"),
                new block(this.currX + 50, this.currY, "#bf00ff"),
                new block(this.currX + 50, this.currY - 25, "#bf00ff"),
                new block(this.currX, this.currY - 25, "#bf00ff"),
                new block(this.currX - 25, this.currY, "#bf00ff"),
                new block(this.currX - 50, this.currY, "#bf00ff"),
                new block(this.currX - 50, this.currY - 25, "#bf00ff")
            ];
        } else {
            this.blocks = [
                new block(this.currX, this.currY + 0, "#bf00ff"),
                new block(this.currX, this.currY - 25, "#bf00ff"),
                new block(this.currX, this.currY - 50, "#bf00ff"),
                new block(this.currX + 25, this.currY - 50, "#bf00ff"),
                new block(this.currX + 25, this.currY + 0, "#bf00ff"),
                new block(this.currX, this.currY + 25, "#bf00ff"),
                new block(this.currX, this.currY + 50, "#bf00ff"),
                new block(this.currX + 25, this.currY + 50, "#bf00ff")
            ];
        }

        this.draw();
        this.direction += 1;
        if (this.direction === this.forms) this.direction = 0;
    }
}

function selector(type) {
    return new StraightTetromino();
    switch (type) {
        case 0:
            return new SquareTetromino();
        case 1:
            return new StraightTetromino();
        case 2:
            return new TTetromino();
        case 3:
            return new SkewTetromino();
        case 4:
            return new LTetromino();
        case 5:
            return new CTetromino();
        case 6:
            return new STetromino();
        case 7:
            return new ETetromino();
    }
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let l = [new CTetromino()];
let retested = false;
let intervals;
async function gameStart() {
    let delayTime = 500;
    retested = false;
    intervals = setInterval(cleanCanvas, delayTime);
    await sleep(delayTime*5);
    l.push(new STetromino());
    await sleep(delayTime*5);
    l.push(new StraightTetromino());
    await sleep(delayTime*5);
    l.push(new ETetromino());
    await sleep(delayTime*5);
    while (!retested) {
        console.log(l);
        l.push(selector(Math.floor((Math.random()*10)%9)));
        await sleep(delayTime*5);
    }
}

function test(i) {
    // console.log(i);
    l[i].currY += 25;
    l[i].clear();
    l[i].update();
    l[i].draw();
    // if(l[i].currY > 800)
    //     delete l[i];
}

function reset() {
    retested = true;
    // for (let i = 0; i < intervals.length; i++)
    //     clearInterval(intervals[i]);
    clearInterval(intervals);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    l = [new CTetromino()];
    // intervals = []
}

canvas.addEventListener("click", (event) => {
    console.log(event.x + " " + event.y);
    for (let i = 0; i < l.length; i++) {
        if (event.x > l[i].bound[0] && event.x < l[i].bound[1]) {
            if (event.y > l[i].bound[2] && event.y < l[i].bound[3]) {
                console.log("fskdjl");
                for (let j = 0; j < l.length; j++) {
                    l[j].selected = false;
                }
                for (let j = 0; j < l[i].blocks.length; ++j) {
                    l[i].selected = true;
                }
                continue;
            }
        }
        console.log(l[i].bound);
    }
});

function moveLeft() {
    for (let i = 0; i < l.length; i++) {
        if (l[i].selected){
            l[i].currX -= 25;
            return;
        }
    }
}
function moveRight() {
    for (let i = 0; i < l.length; i++) {
        if (l[i].selected){
            l[i].currX += 25;
            return;
        }
    }
}
function Rotate() {
    for (let i = 0; i < l.length; i++) {
        if (l[i].selected){
            l[i].rotation();
            return;
        }
    }
}

function cleanCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < l.length; i++) {
        l[i].currY += 25;
        l[i].update();
        l[i].draw();
    }
}
