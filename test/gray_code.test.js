import gray from '../code/array/gray_code'

test('grayCode',()=>{
    expect(gray(2)).toBe(['00','10','01','11'])
})