export const schoolToColor = new Map([
  ['ABJURATION', 'geekblue'],
  ['CONJURATION', 'cyan'],
  ['EVOCATION', 'green'],
  ['DIVINATION', 'purple'],
  ['ILLUSION', 'gold'],
  ['TRANSMUTATION', 'magenta'],
  ['NECROMANCY', 'volcano'],
  ['ENCHANTMENT', 'orange'],
])

export const schoolToShorthand = new Map([
  ['ABJURATION', 'Abj'],
  ['CONJURATION', 'Conj'],
  ['EVOCATION', 'Evoc'],
  ['DIVINATION', 'Div'],
  ['ILLUSION', 'Illu'],
  ['TRANSMUTATION', 'Trans'],
  ['NECROMANCY', 'Necr'],
  ['ENCHANTMENT', 'Ench'],
])

export const levelToDisplayed = new Map([
  ['LEVEL_0', 'Cantrip'],
  ['LEVEL_1', '1st'],
  ['LEVEL_2', '2nd'],
  ['LEVEL_3', '3rd'],
  ['LEVEL_4', '4th'],
  ['LEVEL_5', '5th'],
  ['LEVEL_6', '6th'],
  ['LEVEL_7', '7th'],
  ['LEVEL_8', '8th'],
  ['LEVEL_9', '9th'],
])

export const castingTimeToDisplayed = new Map([
  ['ACTION', '1 Action'],
  ['BONUS_ACTION', '1 Bonus Action'],
  ['EIGHT_HOURS', '8 Hours'],
  ['ONE_HOUR', '1 Hour'],
  ['ONE_MINUTE', '1 Minute'],
  ['REACTION', '1 Reaction'],
  ['SPECIAL', 'Special'],
  ['TEN_MINUTES', '10 Minutes'],
  ['TWELVE_HOURS', '12 Hours'],
  ['TWENTYFOUR_HOURS', '24 Hours'],
])

export const castingTimeToShorthand = new Map([
  ['ACTION', '1a'],
  ['BONUS_ACTION', '1ba'],
  ['EIGHT_HOURS', '8h'],
  ['ONE_HOUR', '1h'],
  ['ONE_MINUTE', '1m'],
  ['REACTION', 'Rctn'],
  ['SPECIAL', 'Spcl'],
  ['TEN_MINUTES', '10m'],
  ['TWELVE_HOURS', '12m'],
  ['TWENTYFOUR_HOURS', '24h'],
])

export const filterTypeToSelectLabel = new Map([
  ['school', 'School'],
  ['castingTime', 'Casting time'],
  ['level', 'Level'],
  ['classes', 'Class'],
  ['saveRequired', 'Saving Throw'],
  ['tags', 'Tag'],
])
