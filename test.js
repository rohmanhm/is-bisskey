import test from 'ava'
import isBisskey from './dist'

test('Should return false if bisskey is not valid', t => {
  t.is(isBisskey('12'), false)
  t.is(isBisskey('12233242342342482348324732489324324323244'), false)
  t.is(isBisskey('1245DFAA9874987G'), false)
})

test('Should return true if bisskey is valid', t => {
  t.is(isBisskey('1245DFAA9874987A'), true)
})
