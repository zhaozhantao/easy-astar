'use strict';
const expect = require('chai').expect;
const easyAStar = require("../index.js").easyAStar;

describe('easy-astar function test', () => {
    it('should found', () => {

        const map = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ]
        const startPos = {x:0,y:0};// 起点0，0
        const endPos = {x:9,y:9};// 终点9，9
        const result = easyAStar((x, y)=>{
            if (map[x] && map[x][y] === 0) {
                return true; // 0为可走，1为障碍物
            } else {
                return false;
            }
        }, startPos, endPos);
        console.log(result);
        expect(result.length).to.equal(29);
    });
});