import { CONFIG } from './config'

export const VALIDGUESSES = [
  'trend',
  'frame',
  'elder',
  'david',
  'linea',
  'libro',
  'barra',
  'trade',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
