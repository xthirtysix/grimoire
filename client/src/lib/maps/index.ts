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

export const levelNumberToString = new Map([
  [0, 'Cantrips'],
  [1, 'Level 1'],
  [2, 'Level 2'],
  [3, 'Level 3'],
  [4, 'Level 4'],
  [5, 'Level 5'],
  [6, 'Level 6'],
  [7, 'Level 7'],
  [8, 'Level 8'],
  [9, 'Level 9'],
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
