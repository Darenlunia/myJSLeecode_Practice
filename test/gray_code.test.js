import gray from '../code/array/gray_code'

test('grayCode',()=>{
    expect(gray(2)).toEqual(['00','10','01','11'])
})