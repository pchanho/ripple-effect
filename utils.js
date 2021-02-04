export function distance(x1, y1, x2, y2) {
    const x = x2 - x1;
    const y = y2 - y1;
    return Math.sqrt(x * x + y * y);
    // Math.sqrt = square root of the given number
}

export function collide(x1, y1, x2, y2, radius) {
    if (distance(x1, y1, x2, y2) <= radius) {
        return true;
    } else { 
        return false;
    }
}
