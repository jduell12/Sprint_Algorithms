const {count_th} = require('./count_th')

describe('count_th', ()=>{
    it('[1] test when the word provided is empty', ()=>{
        expect(count_th('')).toEqual(0)
    })
    
    it('[2] test when single th provided', ()=>{
        expect(count_th('abcthxyz')).toEqual(1)
    })
    
    it('[3] test when multiple th provided', ()=>{
        expect(count_th('abcthefthghith')).toEqual(3)
    })
    
    it('[4] test when multiple th provided backwards', ()=>{
        expect(count_th('thhtthht')).toEqual(2)
    })
    
    it('[5] test when th provided with mixed case', ()=>{
        expect(count_th('THtHThth')).toEqual(1)
    })
})