import test from 'ava'
import { sum } from '../library'

test('sum of 1 and 2 should return 3', t => {
    const actualResult = sum(1,2)
    const expectedResult = 3
    t.is(actualResult, expectedResult)
})