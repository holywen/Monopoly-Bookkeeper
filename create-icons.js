// Simple icon generator using Canvas API
// Run this in browser console to generate icons

function generateIcons() {
    const sizes = [16, 32, 70, 150, 180, 192, 310, 512];

    sizes.forEach(size => {
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');

        // Background gradient
        const gradient = ctx.createLinearGradient(0, 0, size, size);
        gradient.addColorStop(0, '#667eea');
        gradient.addColorStop(1, '#764ba2');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(size/2, size/2, size/2 - 2, 0, Math.PI * 2);
        ctx.fill();

        // Dice design
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';

        // First die
        const dieSize = size * 0.12;
        const die1X = size * 0.25;
        const die1Y = size * 0.4;

        ctx.beginPath();
        ctx.roundRect(die1X - dieSize/2, die1Y - dieSize/2, dieSize, dieSize, dieSize * 0.2);
        ctx.fill();

        // Dots on first die
        ctx.fillStyle = '#5a67d8';
        const dotSize = size * 0.02;
        const dots = [
            [die1X - dieSize * 0.25, die1Y - dieSize * 0.25],
            [die1X + dieSize * 0.25, die1Y - dieSize * 0.25],
            [die1X - dieSize * 0.25, die1Y + dieSize * 0.25],
            [die1X + dieSize * 0.25, die1Y + dieSize * 0.25],
            [die1X, die1Y]
        ];

        dots.forEach(([x, y]) => {
            ctx.beginPath();
            ctx.arc(x, y, dotSize, 0, Math.PI * 2);
            ctx.fill();
        });

        // Second die
        const die2X = size * 0.75;
        const die2Y = size * 0.4;

        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.beginPath();
        ctx.roundRect(die2X - dieSize/2, die2Y - dieSize/2, dieSize, dieSize, dieSize * 0.2);
        ctx.fill();

        // Dots on second die
        ctx.fillStyle = '#5a67d8';
        ctx.beginPath();
        ctx.arc(die2X - dieSize * 0.25, die2Y - dieSize * 0.25, dotSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(die2X + dieSize * 0.25, die2Y + dieSize * 0.25, dotSize, 0, Math.PI * 2);
        ctx.fill();

        // Dollar sign
        ctx.fillStyle = 'white';
        ctx.font = `bold ${size * 0.15}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('$', size/2, size * 0.7);

        // Download the image
        canvas.toBlob(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `icon-${size}.png`;
            a.click();
            URL.revokeObjectURL(url);
        });
    });
}

// Add roundRect support if not available
if (!CanvasRenderingContext2D.prototype.roundRect) {
    CanvasRenderingContext2D.prototype.roundRect = function(x, y, width, height, radius) {
        if (width < 2 * radius) radius = width / 2;
        if (height < 2 * radius) radius = height / 2;
        this.beginPath();
        this.moveTo(x + radius, y);
        this.arcTo(x + width, y, x + width, y + height, radius);
        this.arcTo(x + width, y + height, x, y + height, radius);
        this.arcTo(x, y + height, x, y, radius);
        this.arcTo(x, y, x + width, y, radius);
        this.closePath();
        return this;
    };
}

console.log('Run generateIcons() to create all required icon sizes');