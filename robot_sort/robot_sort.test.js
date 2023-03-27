const {SortingRobot} = require('./robot_sort')

describe('SortingRobot', ()=>{
    const small = [5, 4, 3, 2, 1];
    const med = [11, 13, 7, 17, 9, 20, 1, 21, 2, 4, 22, 16, 15, 10, 23, 19, 8, 3, 5, 14, 6, 0, 24, 12, 18]
    const large = [20, 77, 45, 16, 15, 91, 12, 6, 24, 89, 53, 19, 85, 56, 13, 74, 48, 98, 9, 92, 25, 35, 54, 44, 50, 5, 75, 34, 2, 42, 87, 49, 76, 52, 43, 23, 7, 80, 66, 14, 46, 90, 88, 40, 97, 10, 57, 63, 1, 18, 67, 79, 96, 27, 73, 28, 32, 61, 30, 8, 17, 93, 26, 51, 60, 55, 62, 31, 47, 64, 39, 22, 99, 95, 83, 70, 38, 69, 36, 41, 37, 65, 84, 3, 29, 58, 0, 94, 4, 11, 33, 86, 21, 81, 72, 82, 59, 71, 68, 78]
    const varied = [1, -38, -95, 4, 23, -73, -65, -36, 85, 2, 58, -26, -55, 96, 55, -76, 64, 45, 69, 36, 69, 47, 29, -47, 13, 89, -57, -88, -87, 54, 60, 56, -98, -78, 59, 93, -41, -74, 73, -35, -23, -79, -35, 46, -18, -18, 37, -64, 14, -57, -2, 15, -85, 45, -73, -2, 79, -87, -100, 21, -51, 22, 26, -59, 81, 59, -24, 24, -81, 43, 61, 52, 38, -88, -95, 87, -57, -37, -65, -47, -3, 21, -77, 98, 25, 1, -36, 39, 78, 47, -35, -40, -69, -81, 11, -47, 21, 25, -53, -31]
    
    it('[1] works with small list', ()=>{
        const robot = SortingRobot(small)
        robot.sort();
        expect(robot.list).toEqual([1, 2, 3, 4, 5])
    })
    
    it('[2] works with med list', ()=>{
        const robot = SortingRobot(med)
        robot.sort();
        expect(robot.list).toEqual([
            0,  1, 10, 11, 12, 13, 14, 15,
           16, 17, 18, 19,  2, 20, 21, 22,
           23, 24,  3,  4,  5,  6,  7,  8,
            9
         ])
    })
    
    it('[3] works with large list', ()=>{
        const robot = SortingRobot(large)
        robot.sort();
        expect(robot.list).toEqual([
            0,  1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            2, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,  3,
           30, 31, 32, 33, 34, 35, 36, 37, 38, 39,  4, 40,
           41, 42, 43, 44, 45, 46, 47, 48, 49,  5, 50, 51,
           52, 53, 54, 55, 56, 57, 58, 59,  6, 60, 61, 62,
           63, 64, 65, 66, 67, 68, 69,  7, 70, 71, 72, 73,
           74, 75, 76, 77, 78, 79,  8, 80, 81, 82, 83, 84,
           85, 86, 87, 88, 89,  9, 90, 91, 92, 93, 94, 95,
           96, 97, 98, 99
         ])
    })
    
    it('[4] works with large varied list', ()=>{
        const robot = SortingRobot(varied)
        robot.sort();
        expect(robot.list).toEqual([
            -100, -18, -18,  -2,  -2, -23, -24, -26,  -3, -31, -35, -35,
             -35, -36, -36, -37, -38, -40, -41, -47, -47, -47, -51, -53,
             -55, -57, -57, -57, -59, -64, -65, -65, -69, -73, -73, -74,
             -76, -77, -78, -79, -81, -81, -85, -87, -87, -88, -88, -95,
             -95, -98,   1,   1,  11,  13,  14,  15,   2,  21,  21,  21,
              22,  23,  24,  25,  25,  26,  29,  36,  37,  38,  39,   4,
              43,  45,  45,  46,  47,  47,  52,  54,  55,  56,  58,  59,
              59,  60,  61,  64,  69,  69,  73,  78,  79,  81,  85,  87,
              89,  93,  96,  98
          ])
    })
    
    //stretch tests
    // it('[s-1] small list time is less than 110', ()=>{
    //     const robot = SortingRobot(small)
    //     robot.sort();
    //     expect(robot.time).toBeLessThan(110)
    // })
    
    // it('[s-2] med list time is less than 1948', ()=>{
    //     const robot = SortingRobot(med)
    //     robot.sort();
    //     expect(robot.time).toBeLessThan(1948)
    // })
    
    // it('[s-3] large list time is less than 27513', ()=>{
    //     const robot = SortingRobot(large)
    //     robot.sort();
    //     expect(robot.time).toBeLessThan(27513)
    // })
    
    // it('[s-4] large varied list time is less than 28308', ()=>{
    //     const robot = SortingRobot(varied)
    //     robot.sort();
    //     expect(robot.time).toBeLessThan(28308)
    // })
})