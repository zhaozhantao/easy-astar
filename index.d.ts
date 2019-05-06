export declare function easyAStar(reachable: (x: number, y: number) => boolean, start: {
    x: number;
    y: number;
}, end: {
    x: number;
    y: number;
}): {
    x: number;
    y: number;
}[] | false;
