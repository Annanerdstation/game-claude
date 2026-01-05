// Confetti Animation
class Confetti {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.pieces = [];
        this.colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f7dc6f', '#bb8fce', '#85c1e2', '#f8b739'];

        // Set canvas size
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createPiece() {
        return {
            x: Math.random() * this.canvas.width,
            y: -10,
            width: Math.random() * 8 + 5,
            height: Math.random() * 6 + 3,
            color: this.colors[Math.floor(Math.random() * this.colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 10 - 5,
            velocityX: Math.random() * 4 - 2,
            velocityY: Math.random() * 3 + 2,
            gravity: 0.15
        };
    }

    launch(count = 100) {
        for (let i = 0; i < count; i++) {
            this.pieces.push(this.createPiece());
        }
        if (this.pieces.length > 0 && !this.animating) {
            this.animate();
        }
    }

    animate() {
        this.animating = true;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = this.pieces.length - 1; i >= 0; i--) {
            const piece = this.pieces[i];

            // Update position
            piece.x += piece.velocityX;
            piece.y += piece.velocityY;
            piece.velocityY += piece.gravity;
            piece.rotation += piece.rotationSpeed;

            // Draw piece
            this.ctx.save();
            this.ctx.translate(piece.x, piece.y);
            this.ctx.rotate((piece.rotation * Math.PI) / 180);
            this.ctx.fillStyle = piece.color;
            this.ctx.fillRect(-piece.width / 2, -piece.height / 2, piece.width, piece.height);
            this.ctx.restore();

            // Remove pieces that are off screen
            if (piece.y > this.canvas.height + 10) {
                this.pieces.splice(i, 1);
            }
        }

        if (this.pieces.length > 0) {
            requestAnimationFrame(() => this.animate());
        } else {
            this.animating = false;
        }
    }
}

// Initialize confetti
const canvas = document.getElementById('confetti-canvas');
const confetti = new Confetti(canvas);

// Button click handler
document.getElementById('confetti-btn').addEventListener('click', () => {
    confetti.launch(100);
});
