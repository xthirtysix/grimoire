import { castingTimeToDisplayed, levelToDisplayed } from '../maps'

const spellSchools = [
  'ABJURATION',
  'CONJURATION',
  'DIVINATION',
  'ENCHANTMENT',
  'EVOCATION',
  'ILLUSION',
  'NECROMANCY',
  'TRANSMUTATION',
]

export const filterSpellSchoolsOptions = spellSchools.map((spellSchool) => {
  return {
    value: spellSchool,
    label: spellSchool.charAt(0) + spellSchool.slice(1).toLowerCase(),
  }
})

const castingTimes = [
  'REACTION',
  'BONUS_ACTION',
  'ACTION',
  'ONE_MINUTE',
  'TEN_MINUTES',
  'ONE_HOUR',
  'EIGHT_HOURS',
  'TWELVE_HOURS',
  'TWENTYFOUR_HOURS',
  'SPECIAL',
]

export const filterCastingTimeOptions = castingTimes.map((castingTime) => {
  return {
    value: castingTime,
    label: castingTimeToDisplayed.get(castingTime),
  }
})

const levels = [
  'LEVEL_0',
  'LEVEL_1',
  'LEVEL_2',
  'LEVEL_3',
  'LEVEL_4',
  'LEVEL_5',
  'LEVEL_6',
  'LEVEL_7',
  'LEVEL_8',
  'LEVEL_9',
]

export const filterLevelOptions = levels.map((level) => {
  return {
    value: level,
    label: levelToDisplayed.get(level),
  }
})

export const sortOptions = [
  { label: 'Casting time ascending', value: 'CASTING_TIME_ASCENDING' },
  { label: 'Casting time descending', value: 'CASTING_TIME_DESCENDING' },
  { label: 'Level 0-9', value: 'LEVEL_ASCENDING' },
  { label: 'Level 9-0', value: 'LEVEL_DESCENDING' },
  { label: 'Name A-Z', value: 'NAME_ASCENDING' },
  { label: 'Name Z-A', value: 'NAME_DESCENDING' },
]
