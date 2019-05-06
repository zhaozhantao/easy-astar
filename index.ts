export function easyAStar(reachable: (x: number, y: number) => boolean, start: { x: number, y: number }, end: { x: number, y: number }): { x: number, y: number }[] | false {
    let open: { [key: string]: { pos: { x: number, y: number }, parent: { x: number, y: number } | null, h: number, g: number } } = {};
    let close: { [key: string]: { pos: { x: number, y: number }, parent: { x: number, y: number } | null, h: number, g: number } } = {};

    open[start.x + "_" + start.y] = {
        pos: start,
        parent: null,
        g: 0,
        h: Math.abs(end.x - start.x) + Math.abs(end.y - start.y)
    };
    while ((!close[end.x + "_" + end.y]) && Object.keys(open).length > 0) {
        // open中f最小的（f=g+h）
        let minF = Number.POSITIVE_INFINITY;
        let minFkey = "";
        for (const key in open) {
            if (open.hasOwnProperty(key)) {
                let f = open[key].g + open[key].h;
                if (f < minF) {
                    minF = f;
                    minFkey = key;
                }
            }
        }
        // 把找到的open中f最小的放到close中
        close[minFkey] = open[minFkey];
        delete open[minFkey];
        let curNode = close[minFkey];
        // console.log(minFkey);
        // 把刚放进close的格的四周，放进open
        let fourDt = [{x:-1, y:0}, {x:1, y:0}, {x:0, y:-1}, {x:0, y:1}];
        for (let index = 0; index < fourDt.length; index++) {
            const dt = fourDt[index];
            let tmpPos = {x:curNode.pos.x + dt.x, y:curNode.pos.y + dt.y};
            if (reachable(tmpPos.x, tmpPos.y)) {
                if (!close[tmpPos.x + "_" + tmpPos.y]) {
                    if ((!open[tmpPos.x + "_" + tmpPos.y]) || (open[tmpPos.x + "_" + tmpPos.y].g > curNode.g + 1)) {
                        open[tmpPos.x + "_" + tmpPos.y] = {
                            pos: tmpPos,
                            parent: curNode.pos,
                            g: curNode.g + 1,
                            h: Math.abs(end.x - tmpPos.x) + Math.abs(end.y - tmpPos.y)
                        }
                    }
                }
            }
        }
    }
    // 如果找到了 
    if (close[end.x + "_" + end.y]) {
        let path: { x: number, y: number }[] = [];
        path.push(close[end.x + "_" + end.y].pos);
        let parent = close[end.x + "_" + end.y].parent;
        while (parent) {
            path.push(parent);
            parent = close[parent.x + "_" + parent.y].parent;
        }
        return path.reverse();
    } else {
        return false;
    }
}
