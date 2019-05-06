"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function easyAStar(reachable, start, end) {
    var open = {};
    var close = {};
    open[start.x + "_" + start.y] = {
        pos: start,
        parent: null,
        g: 0,
        h: Math.abs(end.x - start.x) + Math.abs(end.y - start.y)
    };
    while ((!close[end.x + "_" + end.y]) && Object.keys(open).length > 0) {
        // open中f最小的（f=g+h）
        var minF = Number.POSITIVE_INFINITY;
        var minFkey = "";
        for (var key in open) {
            if (open.hasOwnProperty(key)) {
                var f = open[key].g + open[key].h;
                if (f < minF) {
                    minF = f;
                    minFkey = key;
                }
            }
        }
        // 把找到的open中f最小的放到close中
        close[minFkey] = open[minFkey];
        delete open[minFkey];
        var curNode = close[minFkey];
        // console.log(minFkey);
        // 把刚放进close的格的四周，放进open
        var fourDt = [{ x: -1, y: 0 }, { x: 1, y: 0 }, { x: 0, y: -1 }, { x: 0, y: 1 }];
        for (var index = 0; index < fourDt.length; index++) {
            var dt = fourDt[index];
            var tmpPos = { x: curNode.pos.x + dt.x, y: curNode.pos.y + dt.y };
            if (reachable(tmpPos.x, tmpPos.y)) {
                if (!close[tmpPos.x + "_" + tmpPos.y]) {
                    if ((!open[tmpPos.x + "_" + tmpPos.y]) || (open[tmpPos.x + "_" + tmpPos.y].g > curNode.g + 1)) {
                        open[tmpPos.x + "_" + tmpPos.y] = {
                            pos: tmpPos,
                            parent: curNode.pos,
                            g: curNode.g + 1,
                            h: Math.abs(end.x - tmpPos.x) + Math.abs(end.y - tmpPos.y)
                        };
                    }
                }
            }
        }
    }
    // 如果找到了 
    if (close[end.x + "_" + end.y]) {
        var path = [];
        path.push(close[end.x + "_" + end.y].pos);
        var parent_1 = close[end.x + "_" + end.y].parent;
        while (parent_1) {
            path.push(parent_1);
            parent_1 = close[parent_1.x + "_" + parent_1.y].parent;
        }
        return path.reverse();
    }
    else {
        return false;
    }
}
exports.easyAStar = easyAStar;
