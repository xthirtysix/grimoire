import { castingTimeToDisplayed, levelToDisplayed } from '../maps'

const CASTING_TIMES = [
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

export const CASTING_TIME_FILTER_OPTIONS = CASTING_TIMES.map((castingTime) => {
  return {
    value: castingTime,
    label: castingTimeToDisplayed.get(castingTime),
  }
})

export const CLASSES = [
  'Bard',
  'Barbarian',
  'Cleric',
  'Druid',
  'Fighter',
  'Monk',
  'Paladin',
  'Ranger',
  'Rogue',
  'Sorcerer',
  'Warlock',
  'Wizard',
]

export const CLASS_FILTER_OPTIONS = CLASSES.map((cls) => {
  return {
    value: cls,
    label: cls
  }
})

const LEVELS = [
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

export const LEVEL_FILTER_OPTIONS = LEVELS.map((level) => {
  return {
    value: level,
    label: levelToDisplayed.get(level),
  }
})

const SAVES_REQUIRED = [
  'STRENGTH',
  'CONSTITUTION',
  'DEXTERITY',
  'INTELLIGENCE',
  'WISDOM',
  'CHARISMA',
]

export const SAVE_REQUIRED_FILTER_OPTIONS = SAVES_REQUIRED.map((save) => {
  return {
    value: save,
    label: save.charAt(0) + save.slice(1).toLowerCase(),
  }
})

const SPELL_SCHOOLS = [
  'ABJURATION',
  'CONJURATION',
  'DIVINATION',
  'ENCHANTMENT',
  'EVOCATION',
  'ILLUSION',
  'NECROMANCY',
  'TRANSMUTATION',
]

export const SPELL_SCHOOL_FILTER_OPTIONS = SPELL_SCHOOLS.map((spellSchool) => {
  return {
    value: spellSchool,
    label: spellSchool.charAt(0) + spellSchool.slice(1).toLowerCase(),
  }
})

export const SORT_OPTIONS = [
  { label: 'Casting time ascending', value: 'CASTING_TIME_ASCENDING' },
  { label: 'Casting time descending', value: 'CASTING_TIME_DESCENDING' },
  { label: 'Level 0-9', value: 'LEVEL_ASCENDING' },
  { label: 'Level 9-0', value: 'LEVEL_DESCENDING' },
  { label: 'Name A-Z', value: 'NAME_ASCENDING' },
  { label: 'Name Z-A', value: 'NAME_DESCENDING' },
]

export const TAGS = [
  'BANISHMENT',
  'BUFF',
  'CHARMED',
  'COMBAT',
  'COMMUNICATION',
  'COMPULTION',
  'CONTROL',
  'CREATION',
  'DAMAGE',
  'DEBUFF',
  'DECEPTION',
  'DETECTION',
  'DUNAMANCY',
  'ENVIRONMENT',
  'EXPLORATION',
  'FOREKNOWLEDGE',
  'HEALING',
  'MOVEMENT',
  'NEGATION',
  'PSIONIC',
  'SCRYING',
  'SHAPECHANGING',
  'SOCIAL',
  'SUMMONING',
  'TELEPORTATION',
  'UTILITY',
  'WARDING',
]

export const TAG_FILTER_OPTIONS = TAGS.map((tag) => {
  return {
    value: tag,
    label: tag.charAt(0) + tag.slice(1).toLowerCase(),
  }
})
