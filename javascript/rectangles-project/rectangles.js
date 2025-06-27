const CORNER = '+',
    HBAR = '-',
    VBAR = '|';

export function count(diagram) {
    let no = 0;
    for (let top = 0; top < diagram.length - 1; top++) {
        for (let left = 0; left < diagram[0].length - 1; left++) {
            for (let bottom = top + 1; bottom < diagram.length; bottom++) {
                for (let right = left + 1; right < diagram[0].length; right++) {
                    no += Number(isRectangle(diagram, left, top, right, bottom));
                }
            }
        }
    }
    return no;
}

function isRectangle(diagram, left, top, right, bottom) {
    return isCorner(diagram, left, top, right, bottom) &&
        isLine(diagram, left, right, top) &&
        isLine(diagram, left, right, bottom) &&
        isColumn(diagram, top, bottom, left) &&
        isColumn(diagram, top, bottom, right);
}

function isCorner(diagram, left, top, right, bottom) {
    return diagram[top][left] === CORNER &&
        diagram[bottom][left] === CORNER &&
        diagram[top][right] === CORNER &&
        diagram[bottom][right] === CORNER;
}

function isLine(diagram, left, right, row) {
    for (let i = left + 1; i < right; i++) {
        if (diagram[row][i] !== HBAR) return false;
    }
    return true;
}

function isColumn(diagram, top, bottom, column) {
    for (let i = top + 1; i < bottom; i++) {
        if (diagram[i][column] !== VBAR) return false;
    }
    return true;
}