export const schoolToColor = new Map([
  ['Abjuration', 'geekblue'],
  ['Conjuration', 'cyan'],
  ['Evocation', 'green'],
  ['Divination', 'purple'],
  ['Illusion', 'gold'],
  ['Transmutation', 'magenta'],
  ['Necromancy', 'volcano'],
  ['Enchantment', 'orange'],
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
  ['ACTION', '1 action'],
  ['BONUTS_ACTION', '1 bonus action'],
  ['EIGHT_HOURS', '8 hours'],
  ['ONE_HOUR', '1 hour'],
  ['ONE_MINUTE', '1 minute'],
  ['REACTION', 'Reaction'],
  ['SPECIAL', 'Special'],
  ['TEN_MINUTES', '10 minutes'],
  ['TWELVE_HOURS', '12 hours'],
  ['TWENTYFOUR_HOURS', '24 hours'],
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
