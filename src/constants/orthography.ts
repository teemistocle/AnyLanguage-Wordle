import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
//  'aa',
  'b',
  'c',
  'd',
  'e',
//  'ee',
  'f',
  'g',
//  'gw',
 // 'gy',
  'h',
  'i',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'z',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
