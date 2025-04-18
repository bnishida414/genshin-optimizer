import type { LightConeKey } from '@genshin-optimizer/sr/consts'
import { allStats } from '../../../allStats'

const key: LightConeKey = 'InherentlyUnjustDestiny'
const data_gen = allStats.lightCone[key]

let o = 1

const dm = {
  passive_def_: data_gen.superimpose.passiveStats.def_,
  crit_dmg_: data_gen.superimpose.otherStats[o++],
  duration: data_gen.superimpose.otherStats[o++][1],
  baseChance: data_gen.superimpose.otherStats[o++],
  common_dmg_: data_gen.superimpose.otherStats[o++],
  otherDuration: data_gen.superimpose.otherStats[o++][1],
} as const

export default dm
