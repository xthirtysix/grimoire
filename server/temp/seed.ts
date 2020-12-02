import { ObjectId } from 'mongodb';
import { connectDatabase } from '../src/database';
import { Spell } from '../src/lib/types';

const spells: Spell[] = [
  {
    _id: new ObjectId(),
    name: {
      en: 'Acid Splash',
      ru: 'Брызги кислоты',
    },
    level: 'LEVEL_0',
    school: 'CONJURATION',
    description: {
      en:
        '<p>You hurl a bubble of acid. Choose one creature within range, or choose two' +
        ' creatures within range that are within 5 feet of each other. A target must' +
        ' succeed on a Dexterity saving throw or take 1d6 acid damage.</p>',
      ru:
        '<p>Вы кидаете кислотный шарик. Выберите одно существо в пределах дистанции' +
        ' или два существа в пределах дистанции, находящихся в пределах 5 фт. друг' +
        ' от друга. Цель должна преуспеть в спасброске Ловкости, иначе она получает' +
        ' урон кислотой 1к6.</p>',
    },
    castingTime: 'ACTION',
    duration: 'INSTANTANEOUS',
    range: {
      value: 60,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    damageDice: { quantity: 1, dice: 'D6' },
    damageScale: [
      {
        level: 5,
        dice: { dice: 'D6', quantity: 2 },
      },
      {
        level: 11,
        dice: { dice: 'D6', quantity: 3 },
      },
      {
        level: 17,
        dice: { dice: 'D6', quantity: 4 },
      },
    ],
    damageType: 'ACID',
    saveRequired: 'DEXTERITY',
    atHigherLevels: {
      en:
        'This spells damage increases by 1d6 when you reach 5th level (2d6), 11th' +
        ' level (3d6) and 17th level (4d6)',
      ru:
        'Урон этого заклинания увеличивается на 1к6, когда вы достигаете 5 уровня' +
        ' (2к6), 11 уровня (3к6) и 17 уровня (4к6).',
    },
    source: 'PHB',
    tags: ['DAMAGE'],
    classes: ['SORCERER', 'WIZARD'],
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Chill Touch',
      ru: 'Леденящее прикосновение',
    },
    level: 'LEVEL_0',
    description: {
      en:
        '<p>You create a ghostly, skeletal hand in the space of a creature within' +
        ' range. Make a ranged spell attack against the creature to assail it with' +
        ' the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and' +
        " it can't regain hit points until the start of your next turn. Until then," +
        ' the hand clings to the target.</p><p>If you hit an undead target, it also' +
        ' has disadvantage on attack rolls against you until the end of your next' +
        ' turn.</p>',
      ru:
        '<p>Вы создаете призрачную руку скелета в пространстве существа, находящегося' +
        ' в пределах дистанции. Совершите дальнобойную атаку заклинанием по существу,' +
        ' чтобы окутать его могильным холодом. При попадании цель получает урон' +
        ' некротической энергией 1d8, и не может восстанавливать хиты до начала' +
        ' вашего следующего хода. Все это время рука держится за цель.</p><p>Если' +
        ' вы попадаете по нежити, то она вместо этого до конца вашего следующего' +
        ' хода совершает по вам броски атаки с помехой.</p>',
    },
    school: 'NECROMANCY',
    castingTime: 'ACTION',
    duration: 'ONE_ROUND',
    range: {
      value: 120,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    damageDice: { quantity: 1, dice: 'D8' },
    damageScale: [
      {
        level: 5,
        dice: { quantity: 2, dice: 'D8' },
      },
      {
        level: 11,
        dice: { quantity: 3, dice: 'D8' },
      },
      {
        level: 17,
        dice: { quantity: 4, dice: 'D8' },
      },
    ],
    damageType: 'NECROTIC',
    attackType: 'RANGED',
    atHigherLevels: {
      en:
        "This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th" +
        ' level (3d8), and 17th level (4d8).',
      ru:
        'Урон этого заклинания увеличивается на 1к8, когда вы достигаете 5 уровня' +
        ' (2к8), 11 уровня (3к8) и 17 уровня (4к8).',
    },
    tags: ['DAMAGE'],
    classes: ['SORCERER', 'WARLOCK', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Dancing Lights',
      ru: 'Пляшущие огоньки',
    },
    level: 'LEVEL_0',
    school: 'EVOCATION',
    description: {
      en:
        '<p>You create up to four torch-sized lights within range, making them appear' +
        ' as torches, lanterns, or glowing orbs that hover in the air for the' +
        ' duration. You can also combine the four lights into one glowing vaguely' +
        ' humanoid form of Medium size. Whichever form you choose, each light sheds' +
        ' dim light in a 10-foot radius.</p><p>As a bonus action on your turn, you can' +
        ' move the lights up to 60 feet to a new spot within range. A light must be' +
        ' within 20 feet of another light created by this spell, and a light winks out' +
        " if it exceeds the spell's range.</p>",
      ru:
        '<p>Вы создаете до четырех огоньков размером с факел в пределах дистанции,' +
        ' делая их похожими на факелы, фонари или светящиеся сферы, парящие в' +
        ' воздухе. Вы можете также объединить четыре огонька в одну светящуюся' +
        ' человекоподобную фигуру Среднего размера. Какую бы форму вы не выбрали,' +
        ' каждый огонек излучает тусклый свет в радиусе 10 фт.</p><p>Вы можете' +
        ' бонусным действием в свой ход переместить огоньки на 60 фт. в новое место в' +
        ' пределах дистанции. Каждый огонек должен находиться в пределах 20 фт. от' +
        ' другого огонька, созданного этим заклинанием, и огонек тухнет, если' +
        ' оказывается за пределами дистанции заклинания.</p>',
    },
    castingTime: 'ACTION',
    duration: 'ONE_MINUTE',
    range: {
      value: 120,
      unit: 'FEET',
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'A bit of phosphorus or wychwood, or a glowworm',
      ru: 'Кусочек фосфора, гнилушка или светлячок',
    },
    tags: ['UTILITY'],
    classes: ['BARD', 'SORCERER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Druidcraft',
      ru: 'Искусство друидов',
    },
    level: 'LEVEL_0',
    school: 'TRANSMUTATION',
    description: {
      en:
        '<p>Whispering to the spirits of nature, you create one of the following' +
        ' effects within range:</p><ul><li>You create a tiny, harmless sensory effect' +
        ' that predicts what the weather will be at your location for the next 24' +
        ' hours. The effect might manifest as a golden orb for clear skies, a cloud' +
        ' for rain, falling snowflakes for snow, and so on. This effect persists for' +
        ' 1 round.</li><li>You instantly make a flower blossom, a seed pod open, or a' +
        ' leaf bud bloom.</li><li>You create an instantaneous, harmless sensory' +
        ' effect, such as falling leaves, a puff of wind, the sound of a small animal,' +
        ' or the faint odor of skunk. The effect must fit in a 5-foot' +
        ' cube.</li></ul><p>You instantly light or snuff out a candle, a torch, or a' +
        ' small campfire.</p>',
      ru:
        '<p>Пошептавшись с духами природы, вы создаёте один из следующих эффектов в' +
        ' пределах дистанции:</p><ul><li>Вы создаёте крохотный безвредный ощутимый' +
        ' эффект, предсказывающий погоду в текущем месте в течение следующих 24' +
        ' часов. Это может быть золотистый шарик, означающий ясную погоду, облачко,' +
        ' означающее дождь, снежинка, и так далее. Эффект длится 1' +
        ' раунд.</li><li>Вы мгновенно заставляете цветок распуститься, семечко' +
        ' прорасти, или почку раскрыться.</li><li>Вы мгновенно заставляете' +
        ' цветок распуститься, семечко прорасти, или почку' +
        ' раскрыться.</li><li>Вы мгновенно зажигаете или тушите свечу, факел' +
        ' или небольшой костёр.</li></ul>',
    },
    castingTime: 'ACTION',
    duration: 'INSTANTANEOUS',
    range: {
      value: 30,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    tags: ['CONTROL'],
    classes: ['DRUID'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Eldritch Blast',
      ru: 'Мистический заряд',
    },
    level: 'LEVEL_0',
    description: {
      en:
        '<p>A beam of crackling energy streaks toward a creature within range. Make a' +
        ' ranged spell attack against the target. On a hit, the target takes 1d10' +
        ' force damage.</p>',
      ru:
        '<p>К существу, находящемуся в пределах дистанции, устремляется луч' +
        ' потрескивающей энергии. Совершите дальнобойную атаку заклинанием по цели.' +
        ' При попадании цель получает урон силовым полем 1к10.</p>',
    },
    school: 'EVOCATION',
    castingTime: 'ACTION',
    duration: 'INSTANTANEOUS',
    range: {
      value: 120,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    damageDice: { quantity: 1, dice: 'D10' },
    damageScale: [
      {
        level: 5,
        dice: { dice: 'D10', quantity: 2 },
      },
      {
        level: 11,
        dice: { dice: 'D10', quantity: 3 },
      },
      {
        level: 17,
        dice: { dice: 'D10', quantity: 4 },
      },
    ],
    damageType: 'FORCE',
    attackType: 'RANGED',
    atHigherLevels: {
      en:
        'The spell creates more than one beam when you reach higher levels: two beams' +
        ' at 5th level, three beams at 11th level, and four beams at 17th level. You' +
        ' can direct the beams at the same target or at different ones. Make a' +
        ' separate attack roll for each beam.',
      ru:
        'Заклинание создаёт ещё один луч, когда вы достигаете больших уровней: два' +
        ' луча на 5 уровне, три луча на 11 уровне и четыре луча на 17 уровне. Вы' +
        ' можете направить лучи в одну цель или в разных. Для каждого луча совершите' +
        ' свой бросок атаки.',
    },
    tags: ['DAMAGE'],
    classes: ['WARLOCK'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Fire Bolt',
      ru: 'Огненный снаряд',
    },
    level: 'LEVEL_0',
    description: {
      en:
        '<p>You hurl a mote of fire at a creature or object within range. Make a' +
        ' ranged spell attack against the target. On a hit, the target takes 1d10 fire' +
        " damage. A flammable object hit by this spell ignites if it isn't being worn" +
        ' or carried.</p>',
      ru:
        '<p>Вы кидаете сгусток огня в существо или предмет в пределах дистанции.' +
        ' Совершите по цели дальнобойную атаку заклинанием. При попадании цель' +
        ' получает урон огнем 1к10. Горючие предметы, по которым попало это' +
        ' заклинание, воспламеняются, если их никто не несет и не носит.</p>',
    },
    school: 'EVOCATION',
    castingTime: 'ACTION',
    duration: 'INSTANTANEOUS',
    range: {
      value: 120,
      unit: 'FEET',
    },
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    isConcentration: false,
    isRitual: false,
    damageDice: { quantity: 1, dice: 'D10' },
    damageScale: [
      {
        level: 5,
        dice: { quantity: 2, dice: 'D10' },
      },
      {
        level: 11,
        dice: { quantity: 3, dice: 'D10' },
      },
      {
        level: 17,
        dice: { quantity: 4, dice: 'D10' },
      },
    ],
    damageType: 'FIRE',
    attackType: 'RANGED',
    atHigherLevels: {
      en:
        "This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th" +
        ' level (3d10), and 17th level (4d10).',
      ru:
        'Урон этого заклинания увеличивается на 1к10, когда вы достигаете 5 уровня' +
        ' (2к10), 11 уровня (3к10), 17 уровня (4к10).',
    },
    tags: ['DAMAGE'],
    classes: ['SORCERER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Guidance',
      ru: 'Указание',
    },
    level: 'LEVEL_0',
    school: 'DIVINATION',
    castingTime: 'ACTION',
    duration: 'ONE_MINUTE',
    range: {
      value: 0,
      unit: 'TOUCH',
    },
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    isConcentration: true,
    isRitual: false,
    description: {
      en:
        '<p>You touch one willing creature. Once before the spell ends, the target can' +
        ' roll a d4 and add the number rolled to one ability check of its choice. It' +
        ' can roll the die before or after making the ability check. The spell then' +
        ' ends.</p>',
      ru:
        '<p>Вы касаетесь одного согласного существа. Один раз, пока заклинание' +
        ' активно, цель может бросить 1к4 и добавить выпавшее число к одной проверке' +
        ' характеристики на свой выбор. Эту кость можно бросить до или после' +
        ' совершения проверки. После этого заклинание оканчивается.</p>',
    },
    tags: ['BUFF'],
    classes: ['CLERIC', 'DRUID'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Light',
      ru: 'Свет',
    },
    level: 'LEVEL_0',
    school: 'EVOCATION',
    description: {
      en:
        '<p>You touch one object that is no larger than 10 feet in any dimension.' +
        ' Until the spell ends, the object sheds bright light in a 20-foot radius and' +
        ' dim light for an additional 20 feet. The light can be colored as you like.' +
        ' Completely covering the object with something opaque blocks the light. The' +
        ' spell ends if you cast it again or dismiss it as an action.</p><p>If you' +
        ' target an object held or worn by a hostile creature, that creature must' +
        ' succeed on a Dexterity saving throw to avoid the spell.</p>',
      ru:
        '<p>Вы касаетесь одного предмета, длина которого ни по одному из измерений не' +
        ' превышает 10 фт. Пока заклинание активно, предмет испускает яркий свет в' +
        ' радиусе 20 фт. и тусклый свет в пределах еще 20 фт. Свет может быть любого' +
        ' выбранного вами цвета. Полное покрытие предмета чем-то непрозрачным' +
        ' блокирует свет. Заклинание оканчивается, если вы наложите его еще раз' +
        ' или окончите действием.</p><p>Вы касаетесь одного предмета, длина' +
        ' которого ни по одному из измерений не превышает 10 фт. Пока заклинание' +
        ' активно, предмет испускает яркий свет в радиусе 20 фт. и тусклый свет' +
        ' в пределах еще 20 фт. Свет может быть любого выбранного вами цвета.' +
        ' Полное покрытие предмета чем-то непрозрачным блокирует свет.' +
        ' Заклинание оканчивается, если вы наложите его еще раз или окончите' +
        ' действием.</p>',
    },
    castingTime: 'ACTION',
    duration: 'ONE_HOUR',
    range: {
      value: 0,
      unit: 'TOUCH',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: false,
      material: true,
    },
    materials: {
      en: 'A firefly or phosphorescent moss',
      ru: 'Светлячок или фосфоресцирующий мох',
    },
    saveRequired: 'DEXTERITY',
    tags: ['CREATION', 'UTILITY'],
    classes: ['BARD', 'CLERIC', 'SORCERER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Mage Hand',
      ru: 'Волшебная рука',
    },
    level: 'LEVEL_0',
    school: 'CONJURATION',
    description: {
      en:
        '<p>A spectral, floating hand appears at a point you choose within range. The' +
        ' hand lasts for the duration or until you dismiss it as an action. The hand' +
        ' vanishes if it is ever more than 30 feet away from you or if you cast this' +
        ' spell again.You can use your action to control the hand.</p><p>You can use' +
        ' the hand to manipulate an object, open an unlocked door or container, stow' +
        ' or retrieve an item from an open container, or pour the contents out of a' +
        ' vial. You can move the hand up to 30 feet each time you use it.</p><p>The' +
        " hand can't attack, activate magic items, or carry more than 10 pounds.</p>",
      ru:
        '<p>В точке, выбранной вами в пределах дистанции, появляется призрачная' +
        ' парящая рука. Рука существует, пока заклинание активно, или пока вы не' +
        ' отпустите ее действием. Рука исчезает, если окажется более чем в 30 футах' +
        ' от вас, или если вы повторно используете это заклинание. Вы можете' +
        ' действием контролировать руку.</p><p>Вы можете с ее помощью' +
        ' манипулировать предметами, открывать незапертые двери и контейнеры,' +
        ' убирать предметы в открытые контейнеры и доставать их оттуда, или' +
        ' выливать содержимое флаконов. При каждом использовании руки вы можете' +
        ' переместить ее на 30 фт.</p><p>Рука не может совершать атаки,' +
        ' активировать магические предметы и переносить более 10 фунтов.</p>',
    },
    castingTime: 'ACTION',
    duration: 'ONE_MINUTE',
    range: {
      value: 30,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    tags: ['UTILITY'],
    classes: ['BARD', 'SORCERER', 'WARLOCK', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Mending',
      ru: 'Починка',
    },
    level: 'LEVEL_0',
    school: 'TRANSMUTATION',
    description: {
      en:
        '<p>This spell repairs a single break or tear in an object you touch, such as' +
        ' a broken chain link, two halves of a broken key, a torn cloak, or a leaking' +
        ' wineskin. As long as the break or tear is no larger than 1 foot in any' +
        ' dimension, you mend it, leaving no trace of the former damage.</p><p>This' +
        " spell can physically repair a magic item or construct, but the spell can't" +
        ' restore magic to such an object.</p>',
      ru:
        '<p>Это заклинание чинит одно повреждение или разрыв на предмете, которого' +
        ' касаетесь, например, разорванное звено цепи, две половинки сломанного' +
        ' ключа, порванный плащ или протекающий бурдюк. Если повреждение или разрыв' +
        ' не больше 1 фута в длину, вы чините его, не оставляя следов.</p><p>Это' +
        ' заклинание может физически починить магический предмет или конструкта, но не' +
        ' может восстановить магию в таких предметах.</p>',
    },
    castingTime: 'ONE_MINUTE',
    duration: 'INSTANTANEOUS',
    range: {
      value: 0,
      unit: 'TOUCH',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'Two lodestones',
      ru: 'Два магнетита',
    },
    tags: ['UTILITY'],
    classes: ['BARD', 'CLERIC', 'DRUID', 'SORCERER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Message',
      ru: 'Сообщение',
    },
    level: 'LEVEL_0',
    school: 'TRANSMUTATION',
    description: {
      en:
        '<p>You point your finger toward a creature within range and whisper a' +
        ' message. The target (and only the target) hears the message and can reply' +
        ' in a whisper that only you can hear.</p><p>You can cast this spell through' +
        ' solid objects if you are familiar with the target and know it is beyond the' +
        ' barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin' +
        " sheet of lead, or 3 feet of wood blocks the spell. The spell doesn't have" +
        ' to follow a straight line and can travel freely around corners or through' +
        ' openings.</p>',
      ru:
        '<p>Вы указываете пальцем на существо, находящееся в пределах дистанции, и' +
        ' шепчете послание. Цель (и только цель) слышит его, и может ответить' +
        ' шепотом, который услышите только вы.</p><p>Вы можете использовать это' +
        ' заклинание сквозь твердые препятствия, если вы знакомы с целью и знаете,' +
        ' что она находится за барьером. Магическая тишина, 1 фут камня, 1 дюйм' +
        ' обычного металла, тонкий лист свинца или 3 фута дерева блокируют заклинание.' +
        ' Заклинание не обязано идти по прямой линии, и может огибать углы и проходить' +
        ' через отверстия.</p>',
    },
    castingTime: 'ACTION',
    duration: 'ONE_ROUND',
    range: {
      value: 120,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'A short piece of copper wire',
      ru: 'Кусочек медной проволоки',
    },
    tags: ['COMMUNICATION', 'SOCIAL'],
    classes: ['BARD', 'SORCERER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Minor Illusion',
      ru: 'Малая иллюзия',
    },
    level: 'LEVEL_0',
    school: 'ILLUSION',
    description: {
      en:
        '<p>You create a sound or an image of an object within range that lasts for' +
        ' the duration. The illusion also ends if you dismiss it as an action or cast' +
        ' this spell again.</p><p>If you create a sound, its volume can range from a' +
        " whisper to a scream. It can be your voice, someone else's voice, a lion's" +
        ' roar, a beating of drums, or any other sound you choose. The sound' +
        ' continues unabated throughout the duration, or you can make discrete sounds' +
        ' at different times before the spell ends.</p><p>If you create an image of an' +
        ' object--such as a chair, muddy footprints, or a small chest--it must be no' +
        " larger than a 5-foot cube. The image can't create sound, light, smell, or" +
        ' any other sensory effect. Physical interaction with the image reveals it to' +
        ' be an illusion, because things can pass through it.</p><p>If a creature uses' +
        ' its action to examine the sound or image, the creature can determine that it' +
        ' is an illusion with a successful Intelligence (Investigation) check against' +
        ' your spell save DC. If a creature discerns the illusion for what it is,' +
        ' the illusion becomes faint to the creature.</p>',
      ru:
        '<p>Вы создаете звук или образ предмета в пределах дистанции, существующий,' +
        ' пока активно заклинание. Иллюзия также оканчивается, если вы отпустите ее' +
        ' действием или используете это заклинание еще раз.</p><p>Если вы создаете' +
        ' звук, его громкость может быть как шепотом, так и криком. Это может быть' +
        ' ваш голос, чей-то другой голос, львиный рык, бой барабанов или любой' +
        ' другой звук. Звук звучит всю длительность заклинания, или вы можете' +
        ' создавать отдельные звуки в разное время, пока заклинание' +
        ' активно.</p><p>Если вы создаете образ предмета — например, стул,' +
        ' отпечаток в грязи, или небольшой сундук — он должен помещаться в куб с' +
        ' длиной ребра 5 фт. Образ не может издавать звуки, свет, запах или прочие' +
        ' сенсорные эффекты. Физическое взаимодействие с образом дает понять, что' +
        ' это иллюзия, потому что сквозь него все проходит.</p><p>Если существо' +
        ' действием исследует звук или образ, оно может понять, что это иллюзия,' +
        ' совершив успешную проверку Интеллекта (Анализ) против Сл ваших заклинаний.' +
        ' Если существо распознает иллюзию, она для него становится нечеткой.</p>',
    },
    castingTime: 'ACTION',
    duration: 'ONE_MINUTE',
    range: {
      value: 30,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: false,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'A bit of fleece',
      ru: 'Кусок овечьей шерсти',
    },
    tags: ['CONTROL'],
    classes: ['BARD', 'SORCERER', 'WARLOCK', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Poison Spray',
      ru: 'Ядовитые брызги',
    },
    level: 'LEVEL_0',
    school: 'CONJURATION',
    description: {
      en:
        '<p>You extend your hand toward a creature you can see within range and' +
        ' project a puff of noxious gas from your palm. The creature must succeed on' +
        ' a Constitution saving throw or take 1d12 poison damage.</p>',
      ru:
        '<p>Вы простираете руку к существу, видимому в пределах дистанции, и' +
        ' выпускаете из ладони клубы токсичного газа. Это существо должно преуспеть в' +
        ' спасброске Телосложения, иначе оно получит урон ядом 1к12.</p>',
    },
    castingTime: 'ACTION',
    duration: 'INSTANTANEOUS',
    range: {
      value: 10,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    damageDice: { quantity: 1, dice: 'D12' },
    damageScale: [
      {
        level: 5,
        dice: { quantity: 2, dice: 'D12' },
      },
      {
        level: 11,
        dice: { quantity: 3, dice: 'D12' },
      },
      {
        level: 17,
        dice: { quantity: 4, dice: 'D12' },
      },
    ],
    damageType: 'POISON',
    saveRequired: 'CONSTITUTION',
    atHigherLevels: {
      en:
        "This spell's damage increases by 1d12 when you reach 5th level (2d12), 11th" +
        ' level (3d12), and 17th level (4d12).',
      ru:
        'Урон этого заклинания увеличивается на 1к12, когда вы достигаете 5 уровня' +
        ' (2к12), 11 уровня (3к12) и 17 уровня (4к12).',
    },
    tags: ['DAMAGE'],
    classes: ['DRUID', 'SORCERER', 'WARLOCK', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Prestidigitation',
      ru: 'Фокусы',
    },
    level: 'LEVEL_0',
    school: 'TRANSMUTATION',
    description: {
      en:
        '<p>This spell is a minor magical trick that novice spellcasters use for' +
        ' practice. You create one of the following magical effects within' +
        ' range:</p><ul><li>You create an instantaneous, harmless sensory effect,' +
        ' such as a shower of sparks, a puff of wind, faint musical notes, or an odd' +
        ' odor.</li><li>You instantaneously light or snuff out a candle, a torch, or a' +
        ' small campfire.</li><li>You instantaneously clean or soil an object no' +
        ' larger than 1 cubic foot.</li><li>You chill, warm, or flavor up to 1 cubic' +
        ' foot of nonliving material for 1 hour.</li><li>You make a color, a small' +
        ' mark, or a symbol appear on an object or a surface for 1 hour.</li><li>You' +
        ' create a nonmagical trinket or an illusory image that can fit in your hand' +
        ' and that lasts until the end of your next turn.</li></ul><p>If you cast this' +
        ' spell multiple times, you can have up to three of its non-instantaneous' +
        ' effects active at a time, and you can dismiss such an effect as an action.</p>',
      ru:
        '<p>Это заклинание — небольшой магический трюк, на котором практикуются' +
        ' начинающие заклинатели. Вы создаете один из следующих магических эффектов в' +
        ' пределах дистанции:</p><ul><li>Вы создаете мгновенный безвредный сенсорный' +
        ' эффект, такой как сноп искр, порыв ветра, тихую мелодию, или необычный' +
        ' запах.</li><li>Вы мгновенно зажигаете или тушите свечу, факел или небольшой' +
        ' костер.</li><li>Вы мгновенно чистите или мараете предмет, размерами не' +
        ' превышающий 1 кубического фута.</li><li>Вы остужаете, нагреваете или' +
        ' придаете запах 1 кубическому футу неживой материи на 1 час.</li><li>Вы' +
        ' создаете на поверхности или предмете маленькую цветную метку или символ,' +
        ' существующую 1 час.</li><li>Вы создаете немагическую безделушку или' +
        ' иллюзорный предмет, помещающийся в вашу ладонь, и существующий до конца' +
        ' вашего следующего хода.</li></ul><p>Если вы накладываете это заклинание' +
        ' несколько раз, вы можете иметь не более трех немгновенных эффектов' +
        ' одновременно, и можете действием окончить один любой из этих эффектов.</p>',
    },
    castingTime: 'ACTION',
    duration: 'ONE_HOUR',
    range: {
      value: 10,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    tags: ['UTILITY'],
    classes: ['BARD', 'SORCERER', 'WARLOCK', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Produce Flame',
      ru: 'Сотворение пламени',
    },
    level: 'LEVEL_0',
    school: 'CONJURATION',
    description: {
      en:
        '<p>A flickering flame appears in your hand. The flame remains there for the' +
        ' duration and harms neither you nor your equipment. The flame sheds bright' +
        ' light in a 10-foot radius and dim light for an additional 10 feet. The spell' +
        ' ends if you dismiss it as an action or if you cast it again.</p><p>You can' +
        ' also attack with the flame, although doing so ends the spell. When you cast' +
        ' this spell, or as an action on a later turn, you can hurl the flame at a' +
        ' creature within 30 feet of you. Make a ranged spell attack. On a hit, the' +
        ' target takes 1d8 fire damage.</p>',
      ru:
        '<p>В вашей ладони появляется мерцающее пламя. Оно остаётся там, пока' +
        ' заклинание активно, и не вредит ни вам, ни вашему снаряжению. Огонь' +
        ' испускает яркий свет в радиусе 10 фт. и тусклый свет в пределах ещё 10 фт.' +
        ' Заклинание оканчивается, если вы оканчиваете его действием или накладываете' +
        ' ещё раз.</p><p>Вы можете атаковать этим пламенем, но это тоже оканчивает' +
        ' заклинание. Когда вы накладываете это заклинание, или другим действием в' +
        ' одном из последующих ходов вы можете метнуть пламя в существо, находящееся в' +
        ' пределах 30 фт. от вас. Совершите дальнобойную атаку заклинанием. При' +
        ' попадании цель получает урон огнём 1к8.</p>',
    },
    castingTime: 'ACTION',
    duration: 'TEN_MINUTES',
    range: {
      value: 0,
      unit: 'SELF',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    damageDice: { quantity: 1, dice: 'D8' },
    damageScale: [
      {
        level: 5,
        dice: { quantity: 2, dice: 'D8' },
      },
      {
        level: 11,
        dice: { quantity: 3, dice: 'D8' },
      },
      {
        level: 17,
        dice: { quantity: 4, dice: 'D8' },
      },
    ],
    damageType: 'FIRE',
    attackType: 'RANGED',
    atHigherLevels: {
      en:
        "This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th" +
        ' level (3d8), and 17th level (4d8).',
      ru:
        'Урон этого заклинания увеличивается на 1к8, когда вы достигаете 5 уровня' +
        ' (2к8), 11 уровня (3к8) и 17 уровня (4к8).',
    },
    tags: ['CREATION', 'DAMAGE'],
    classes: ['DRUID'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Ray of Frost',
      ru: 'Луч холода',
    },
    level: 'LEVEL_0',
    school: 'EVOCATION',
    description: {
      en:
        '<p>A frigid beam of blue-white light streaks toward a creature within range.' +
        ' Make a ranged spell attack against the target. On a hit, it takes 1d8 cold' +
        ' damage, and its speed is reduced by 10 feet until the start of your next' +
        ' turn.</p>',
      ru:
        '<p>Холодный сине-белый луч устремляется к существу, находящемуся в пределах' +
        ' дистанции. Совершите по цели дальнобойную атаку заклинанием. При попадании' +
        ' она получает урон холодом 1к8, а скорость до начала вашего следующего хода' +
        ' уменьшается на 10 фт.</p>',
    },
    castingTime: 'ACTION',
    duration: 'INSTANTANEOUS',
    range: {
      value: 60,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    damageDice: { quantity: 1, dice: 'D8' },
    damageScale: [
      {
        level: 5,
        dice: { quantity: 2, dice: 'D8' },
      },
      {
        level: 11,
        dice: { quantity: 3, dice: 'D8' },
      },
      {
        level: 17,
        dice: { quantity: 4, dice: 'D8' },
      },
    ],
    damageType: 'COLD',
    attackType: 'RANGED',
    atHigherLevels: {
      en:
        "The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th" +
        ' level (3d8), and 17th level (4d8).',
      ru:
        'Урон от заклинания увеличивается на 1к8, когда вы достигаете 5 уровня (2к8),' +
        ' 11 уровня (3к8) и 17 уровня (4к8).',
    },
    tags: ['DAMAGE'],
    classes: ['SORCERER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Resistance',
      ru: 'Сопротивление',
    },
    level: 'LEVEL_0',
    school: 'ABJURATION',
    description: {
      en:
        '<p>You touch one willing creature. Once before the spell ends, the target can' +
        ' roll a d4 and add the number rolled to one saving throw of its choice. It' +
        ' can roll the die before or after making the saving throw. The spell then' +
        ' ends.</p>',
      ru:
        '<p>Вы касаетесь одного согласного существа. Пока заклинание активно, цель' +
        ' может один раз бросить к4 и добавить выпавшее число к одному спасброску на' +
        ' свой выбор. Кость можно кидать до или после спасброска. После этого' +
        ' заклинание оканчивается.</p>',
    },
    castingTime: 'ACTION',
    duration: 'ONE_MINUTE',
    range: {
      value: 0,
      unit: 'TOUCH',
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'A miniature cloak',
      ru: 'Крошечный плащ',
    },
    tags: ['BUFF'],
    classes: ['CLERIC', 'DRUID'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Sacred Flame',
      ru: 'Священное пламя',
    },
    level: 'LEVEL_0',
    school: 'EVOCATION',
    description: {
      en:
        '<p>Flame-like radiance descends on a creature that you can see within range.' +
        ' The target must succeed on a Dexterity saving throw or take 1d8 radiant' +
        ' damage. The target gains no benefit from cover for this saving throw.</p>',
      ru:
        '<p>Похожее на огонь сияние нисходит на существо, которое вы видите в пределах' +
        ' дистанции. Цель должна преуспеть в спасброске Ловкости, иначе она получает' +
        ' урон излучением 1d8. Для этого спасброска цель не получает преимуществ от' +
        ' укрытия.</p>',
    },
    castingTime: 'ACTION',
    duration: 'INSTANTANEOUS',
    range: {
      value: 60,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    damageDice: { quantity: 1, dice: 'D8' },
    damageScale: [
      {
        level: 5,
        dice: { quantity: 2, dice: 'D8' },
      },
      {
        level: 11,
        dice: { quantity: 3, dice: 'D8' },
      },
      {
        level: 17,
        dice: { quantity: 4, dice: 'D8' },
      },
    ],
    damageType: 'RADIANT',
    saveRequired: 'DEXTERITY',
    atHigherLevels: {
      en:
        "The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th" +
        ' level (3d8), and 17th level (4d8).',
      ru:
        'Урон этого заклинания увеличивается на 1к8, когда вы достигаете 5 уровня' +
        ' (2к8), 11 уровня (3к8) и 17 уровня (4к8).',
    },
    tags: ['DAMAGE'],
    classes: ['CLERIC'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Shillelagh',
      ru: 'Дубинка',
    },
    level: 'LEVEL_0',
    school: 'TRANSMUTATION',
    description: {
      en:
        "<p>The wood of a club or quarterstaff you are holding is imbued with nature's" +
        ' power. For the duration, you can use your spellcasting ability instead of' +
        ' Strength for the attack and damage rolls of melee attacks using that weapon,' +
        " and the weapon's damage die becomes a d8. The weapon also becomes magical," +
        " if it isn't already. The spell ends if you cast it again or if you let go of" +
        ' the weapon.</p>',
      ru:
        '<p>Дерево дубинки или боевого посоха, который вы держите, наполняется силой' +
        ' природы. Пока заклинание активно, вы можете использовать свою базовую' +
        ' характеристику вместо Силы для бросков рукопашной атаки и урона при' +
        ' использовании этого оружия, и кость урона становится равной к8. Если оружие' +
        ' не было магическим, оно становится им. Заклинание оканчивается, если вы' +
        ' наложите его ещё раз или выпустите оружие из рук.</p>',
    },
    castingTime: 'BONUS_ACTION',
    duration: 'ONE_MINUTE',
    range: {
      value: 0,
      unit: 'TOUCH',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'Mistletoe, a shamrock leaf, and a club or quarterstaff',
      ru: 'Омела, лист клевера и дубинка или боевой посох',
    },
    damageType: 'BLUDGEONING',
    attackType: 'MELEE',
    tags: ['DAMAGE', 'BUFF'],
    classes: ['DRUID'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Shocking Grasp',
      ru: 'Электрошок',
    },
    level: 'LEVEL_0',
    school: 'EVOCATION',
    description: {
      en:
        '<p>Lightning springs from your hand to deliver a shock to a creature you try' +
        ' to touch. Make a melee spell attack against the target. You have advantage' +
        ' on the attack roll if the target is wearing armor made of metal. On a hit,' +
        " the target takes 1d8 lightning damage, and it can't take reactions until the" +
        ' start of its next turn.</p>',
      ru:
        '<p>Молния спрыгивает с вашей руки и ударяет существо, которого вы пытались' +
        ' коснуться. Совершите по цели рукопашную атаку заклинанием. Вы совершаете' +
        ' бросок атаки с преимуществом, если цель носит доспех из металла. При' +
        ' попадании цель получает урон электричеством 1к8, и до начала своего' +
        ' следующего хода не может совершать реакции.</p>',
    },
    castingTime: 'ACTION',
    duration: 'INSTANTANEOUS',
    range: {
      value: 0,
      unit: 'TOUCH',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    damageDice: { quantity: 1, dice: 'D8' },
    damageScale: [
      {
        level: 5,
        dice: { quantity: 2, dice: 'D8' },
      },
      {
        level: 11,
        dice: { quantity: 3, dice: 'D8' },
      },
      {
        level: 17,
        dice: { quantity: 4, dice: 'D8' },
      },
    ],
    damageType: 'LIGHTNING',
    attackType: 'MELEE',
    atHigherLevels: {
      en:
        "The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th" +
        ' level (3d8), and 17th level (4d8).',
      ru:
        'Урон заклинания увеличивается на 1к8, когда вы достигаете 5 уровня (2к8), 11' +
        ' уровня (3к8) и 17 уровня (4к8).',
    },
    tags: ['DAMAGE'],
    classes: ['SORCERER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Spare the Dying',
      ru: 'Уход за умирающим',
    },
    level: 'LEVEL_0',
    school: 'NECROMANCY',
    description: {
      en:
        '<p>You touch a living creature that has 0 hit points. The creature becomes' +
        ' stable. This spell has no effect on undead or constructs.</p>',
      ru:
        '<p>Вы касаетесь живого существа, у которого 0 хитов. Оно становится' +
        ' стабилизированным. Это заклинание не оказывает никакого эффекта на нежить и' +
        ' конструктов.</p>',
    },
    castingTime: 'ACTION',
    duration: 'INSTANTANEOUS',
    range: {
      value: 0,
      unit: 'TOUCH',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    tags: ['HEALING'],
    classes: ['CLERIC'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Thaumaturgy',
      ru: 'Чудотворство',
    },
    level: 'LEVEL_0',
    school: 'TRANSMUTATION',
    description: {
      en:
        '<p>You manifest a minor wonder, a sign of supernatural power, within range.' +
        ' You create one of the following magical effects within' +
        ' range:</p><ul><li>Your voice booms up to three times as loud as normal for 1' +
        ' minute.</li><li>You cause flames to flicker, brighten, dim, or change color' +
        ' for 1 minute.</li><li>You cause harmless tremors in the ground for 1' +
        ' minute.</li><li>You create an instantaneous sound that originates from a' +
        ' point of your choice within range, such as a rumble of thunder, the cry of a' +
        ' raven, or ominous whispers.</li><li>You instantaneously cause an unlocked' +
        ' door or window to fly open or slam shut.</li><li>You alter the appearance of' +
        ' your eyes for 1 minute.</li></ul><p>If you cast this spell multiple times,' +
        ' you can have up to three of its 1-minute effects active at a time, and you' +
        ' can dismiss such an effect as an action.</p>',
      ru:
        '<p>Вы создаёте небольшое чудо, знак сверхъестественной силы. Вы создаёте один' +
        ' из следующих магических эффектов в пределах дистанции:</p><ul><li>Ваш голос' +
        ' в течение 1 минуты звучит в три раза громче.</li><li>Вы заставляете пламя в' +
        ' течение 1 минуты мерцать, светить ярче или тусклее, или изменять' +
        ' цвет.</li><li>Вы вызываете безвредную дрожь в полу в течение 1' +
        ' минуты.</li><li>Вы создаёте мгновенный звук, исходящий из выбранной вами' +
        ' точки в пределах дистанции, такой как раскат грома, крик ворона или зловещий' +
        ' шёпот.</li><li>Вы мгновенно заставляете незапертое окно или дверь' +
        ' распахнуться или захлопнуться.</li><li>Вы на 1 минуту изменяете внешний вид' +
        ' своих глаз.</li></ul><p>Если вы накладываете это заклинание несколько раз, у' +
        ' вас может быть до трёх активных эффектов с длительностью в 1 минуту, и вы' +
        ' можете оканчивать такие эффекты действием.</p>',
    },
    castingTime: 'ACTION',
    duration: 'ONE_MINUTE',
    range: {
      value: 30,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: false,
      material: false,
    },
    tags: ['CONTROL'],
    classes: ['CLERIC'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'True Strike',
      ru: 'Меткий удар',
    },
    level: 'LEVEL_0',
    school: 'DIVINATION',
    description: {
      en:
        '<p>You extend your hand and point a finger at a target in range. Your magic' +
        " grants you a brief insight into the target's defenses. On your next turn," +
        ' you gain advantage on your first attack roll against the target, provided' +
        " that this spell hasn't ended.</p>",
      ru:
        '<p>Вы вытягиваете руку и указываете пальцем на цель, находящуюся в пределах' +
        ' дистанции. Ваша магия дает краткое понимание защит цели. В своем следующем' +
        ' ходу вы совершаете с преимуществом первый бросок атаки по цели, при условии,' +
        ' что заклинание к тому моменту не окончится.</p>',
    },
    castingTime: 'ACTION',
    duration: 'ONE_ROUND',
    range: {
      value: 30,
      unit: 'FEET',
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: false,
      somatic: true,
      material: false,
    },
    tags: ['FOREKNOWLEDGE'],
    classes: ['BARD', 'SORCERER', 'WARLOCK', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Vicious Mockery',
      ru: 'Злая насмешка',
    },
    level: 'LEVEL_0',
    school: 'ENCHANTMENT',
    description: {
      en:
        '<p>You unleash a string of insults laced with subtle enchantments at a' +
        ' creature you can see within range. If the target can hear you (though it' +
        ' need not understand you), it must succeed on a Wisdom saving throw or take' +
        ' 1d4 psychic damage and have disadvantage on the next attack roll it makes' +
        ' before the end of its next turn.</p>',
      ru:
        '<p>Вы испускаете на существо, видимое в пределах дистанции, поток оскорблений' +
        ' вперемешку с тонкой магией. Если цель слышит вас (при этом она не обязана' +
        ' вас понимать), она должна преуспеть в спасброске Мудрости, иначе получит' +
        ' урон психической энергией 1к4, и следующий бросок атаки до конца своего' +
        ' следующего хода совершит с помехой.</p>',
    },
    castingTime: 'ACTION',
    duration: 'INSTANTANEOUS',
    range: {
      value: 60,
      unit: 'FEET',
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: false,
      material: false,
    },
    damageDice: { quantity: 1, dice: 'D4' },
    damageScale: [
      {
        level: 5,
        dice: { quantity: 2, dice: 'D4' },
      },
      {
        level: 11,
        dice: { quantity: 3, dice: 'D4' },
      },
      {
        level: 17,
        dice: { quantity: 4, dice: 'D4' },
      },
    ],
    damageType: 'PSYCHIC',
    saveRequired: 'WISDOM',
    tags: ['DAMAGE', 'DEBUFF'],
    classes: ['BARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Alarm',
      ru: 'Сигнал тревоги',
    },
    level: 'LEVEL_1',
    school: 'ABJURATION',
    description: {
      en:
        '<p>You set an alarm against unwanted intrusion. Choose a door, a window, or' +
        ' an area within range that is no larger than a 20-foot cube. Until the spell' +
        ' ends, an alarm alerts you whenever a Tiny or larger creature touches or' +
        ' enters the warded area. When you cast the spell, you can designate creatures' +
        " that won't set off the alarm. You also choose whether the alarm is mental or" +
        ' audible.</p><p>A mental alarm alerts you with a ping in your mind if you are' +
        ' within 1 mile of the warded area. This ping awakens you if you are' +
        ' sleeping.</p><p>An audible alarm produces the sound of a hand bell for 10' +
        ' seconds within 60 feet.</p>',
      ru:
        '<p>Вы устанавливаете сигнализацию на случай вторжения. Выберите дверь, окно' +
        ' или область в пределах дистанции не больше куба с длиной ребра 20 фт. До' +
        ' окончания действия заклинания тревога уведомляет вас каждый раз, когда' +
        ' охраняемой области касается или входит в нее существо с размером не меньше' +
        ' Крошечного. При накладывании заклинания вы можете указать существ, которые' +
        ' не будут вызывать срабатывание тревоги. Вы также выбираете, мысленной будет' +
        ' тревога или слышимой.</p><p>Мысленная тревога предупреждает вас звоном в' +
        ' сознании, если вы находитесь в пределах 1 мили от охраняемой области. Этот' +
        ' звон пробуждает вас, если вы спите.</p><p>Слышимая тревога издает звон' +
        ' колокольчика в течение 10 секунд в пределах 60 фт.</p>',
    },
    castingTime: 'ONE_MINUTE',
    duration: 'EIGHT_HOURS',
    range: {
      value: 30,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: true,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'A tiny bell and a piece of fine silver wire',
      ru: 'Колокольчик и серебряная проволочка',
    },
    tags: ['DETECTION'],
    classes: ['RANGER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Animal Friendship',
      ru: 'Дружба с животными',
    },
    level: 'LEVEL_1',
    school: 'ENCHANTMENT',
    description: {
      en:
        '<p>This spell lets you convince a beast that you mean it no harm. Choose a' +
        ' beast that you can see within range. It must see and hear you. If the' +
        " beast's Intelligence is 4 or higher, the spell fails. Otherwise, the beast" +
        " must succeed on a Wisdom saving throw or be charmed by you for the spell's" +
        ' duration. If you or one of your companions harms the target, the spells' +
        ' ends.</p>',
      ru:
        '<p>Это заклинание позволяет убедить зверя, что вы не намерены причинять ему' +
        ' вред. Выберите зверя, которого вы видите в пределах дистанции. Он должен' +
        ' видеть и слышать вас. Если у зверя Интеллект не меньше 4, заклинание' +
        ' проваливается. В противном случае зверь должен преуспеть в спасброске' +
        ' Мудрости, иначе он станет очарованным на время действия заклинания. Если вы' +
        ' или один из ваших спутников причинит цели вред, заклинание окончится.</p>',
    },
    castingTime: 'ACTION',
    duration: 'TWENTYFOUR_HOURS',
    range: {
      value: 30,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'A morsel of food',
      ru: 'Кусочек пищи',
    },
    atHigherSlots: {
      en:
        'When you cast this spell using a spell slot of 2nd level or higher, you can' +
        ' affect one additional beast t level above 1st.',
      ru:
        'Если вы накладываете это заклинание, используя ячейку 2 уровня или выше, вы' +
        ' можете воздействовать на одного дополнительного зверя за каждый уровень' +
        ' ячейки выше первого.',
    },
    saveRequired: 'WISDOM',
    tags: ['CONTROL', 'SOCIAL'],
    classes: ['BARD', 'DRUID', 'RANGER'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Bane',
      ru: 'Порча',
    },
    level: 'LEVEL_1',
    school: 'ENCHANTMENT',
    description: {
      en:
        '<p>Up to three creatures of your choice that you can see within range must' +
        ' make Charisma saving throws. Whenever a target that fails this saving throw' +
        ' makes an attack roll or a saving throw before the spell ends, the target' +
        ' must roll a d4 and subtract the number rolled from the attack roll or saving' +
        ' throw.</p>',
      ru:
        '<p>До трёх существ в пределах дистанции, которых вы видите, должны совершить' +
        ' спасброски Харизмы. Пока заклинание активно, каждый раз, когда цель,' +
        ' провалившая этот спасбросок, совершает бросок атаки или спасбросок, она' +
        ' должна бросать к4 и вычитать выпавший результат из броска атаки или' +
        ' спасброска.</p>',
    },
    castingTime: 'ACTION',
    duration: 'ONE_MINUTE',
    range: {
      value: 30,
      unit: 'FEET',
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'A drop of blood',
      ru: 'Капля крови',
    },
    saveRequired: 'CHARISMA',
    atHigherSlots: {
      en:
        'When you cast this spell using a spell slot of 2nd level or higher, you can' +
        ' target one additional creature for each slot level above 1st.',
      ru:
        'Если вы накладываете это заклинание, используя ячейку 2 уровня или выше, вы' +
        ' можете сделать целью одно дополнительное существо за каждый уровень ячейки' +
        ' выше первого.',
    },
    tags: ['DEBUFF'],
    classes: ['BARD', 'CLERIC'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Bless',
      ru: 'Благословение',
    },
    level: 'LEVEL_1',
    school: 'ENCHANTMENT',
    description: {
      en:
        '<p>You bless up to three creatures of your choice within range. Whenever a' +
        ' target makes an attack roll or a saving throw before the spell ends, the' +
        ' target can roll a d4 and add the number rolled to the attack roll or saving' +
        ' throw.</p>',
      ru:
        '<p>Вы благословляете до трёх существ на свой выбор в пределах дистанции.' +
        ' Каждый раз, когда до окончания заклинания цель совершает бросок атаки или' +
        ' спасбросок, она может бросить к4 и добавить выпавшее число к результату.</p>',
    },
    castingTime: 'ACTION',
    duration: 'ONE_MINUTE',
    range: {
      value: 30,
      unit: 'FEET',
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'A sprinkling of holy water',
      ru: 'Капля святой воды',
    },
    atHigherSlots: {
      en:
        'When you cast this spell using a spell slot of 2nd level or higher, you can' +
        ' target one additional creature for each slot level above 1st.',
      ru:
        'Если вы накладываете это заклинание, используя ячейку 2 уровня или выше, вы' +
        ' можете сделать целью одно дополнительное существо за каждый уровень ячейки' +
        ' выше первого.',
    },
    tags: ['BUFF'],
    classes: ['CLERIC', 'PALADIN'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Burning Hands',
      ru: 'Огненные ладони',
    },
    level: 'LEVEL_1',
    school: 'EVOCATION',
    description: {
      en:
        '<p>As you hold your hands with thumbs touching and fingers spread, a thin' +
        ' sheet of flames shoots forth from your outstretched fingertips. Each' +
        ' creature in a 15-foot cone must make a Dexterity saving throw. A creature' +
        ' takes 3d6 fire damage on a failed save, or half as much damage on a' +
        ' successful one.</p><p>The fire ignites any flammable objects in the area' +
        " that aren't being worn or carried.</p>",
      ru:
        '<p>Соединив ладони и растопырив пальцы веером, вы испускаете из них тонкие' +
        ' языки пламени. Все существа в пределах 15-фт.ого конуса должны совершить' +
        ' спасброски Ловкости. Существо получает урон огнем 3к6 в случае провала и' +
        ' половину этого урона в случае успеха.</p><p>Пламя поджигает все горючие' +
        ' предметы, никем не несомые и не носимые.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'SELF',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    duration: 'INSTANTANEOUS',
    damageDice: { quantity: 3, dice: 'D6' },
    damageType: 'FIRE',
    atHigherSlots: {
      en:
        'When you cast this spell using a spell slot of 2nd level or higher, the' +
        ' damage increases by 1d6 for each slot level above 1st.',
      ru:
        'Если вы накладываете это заклинание, используя ячейку 2 уровня или выше, урон' +
        ' увеличивается на 1к6 за каждый уровень ячейки выше первого.',
    },
    tags: ['BUFF'],
    classes: ['CLERIC', 'PALADIN'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Charm Person',
      ru: 'Очарование личности',
    },
    level: 'LEVEL_1',
    school: 'ENCHANTMENT',
    description: {
      en:
        '<p>You attempt to charm a humanoid you can see within range. It must make a' +
        ' Wisdom saving throw, and does so with advantage if you or your companions' +
        ' are fighting it. If it fails the saving throw, it is charmed by you until' +
        ' the spell ends or until you or your companions do anything harmful to it.' +
        ' The charmed creature regards you as a friendly acquaintance. When the spell' +
        ' ends, the creature knows it was charmed by you.</p>',
      ru:
        '<p>Вы пытаетесь очаровать гуманоида, которого видите в пределах дистанции. Он' +
        ' должен совершить спасбросок Мудрости, с преимуществом, если вы или ваши' +
        ' спутники сражаетесь с ним. Если он проваливает спасбросок, он очарован вами,' +
        ' пока заклинание активно или пока вы или ваши спутники не причините ему вред.' +
        ' Очарованное существо считает вас своим другом. Когда заклинание' +
        ' оканчивается, существо знает, что было очаровано вами.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 30,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    materials: {
      en: 'A pinch of powder or sand that is colored red, yellow, and blue',
      ru: 'Щепотка порошка или песка, окрашенного в красный, желтый и синий цвет',
    },
    duration: 'ONE_HOUR',
    atHigherSlots: {
      en:
        'When you cast this spell using a spell slot of 2nd level or higher, you can' +
        ' target one additional creature for each slot level above 1st. The creatures' +
        ' must be within 30 feet of each other when you target them.',
      ru:
        'Если вы накладываете это заклинание, используя ячейку 2 уровня или выше, вы' +
        ' можете сделать целью одно дополнительное существо за каждый уровень ячейки' +
        ' выше первого. Эти существа должны находиться в пределах 30 фт. друг от' +
        ' друга, чтобы вы могли на них нацелиться.',
    },
    tags: ['CONTROL', 'SOCIAL'],
    classes: ['BARD', 'DRUID', 'SORCERER', 'WARLOCK', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Command',
      ru: 'Приказ',
    },
    level: 'LEVEL_1',
    school: 'ENCHANTMENT',
    description: {
      en:
        '<p>You speak a one-word command to a creature you can see within range. The' +
        ' target must succeed on a Wisdom saving throw or follow the command on its' +
        " next turn. The spell has no effect if the target is undead, if it doesn't" +
        ' understand your language, or if your command is directly harmful to' +
        ' it.</p><p>Some typical commands and their effects follow. You might issue a' +
        ' command other than one described here. If you do so, the GM determines how' +
        " the target behaves. If the target can't follow your command, the spell" +
        ' ends.</p><p><b>Approach.</b> The target moves toward you by the shortest and' +
        ' most direct route, ending its turn if it moves within 5 feet of' +
        ' you.</p><p><b>Approach.</b> The target moves toward you by the shortest and' +
        ' most direct route, ending its turn if it moves within 5 feet of' +
        ' you.</p><p><b>Flee.</b> The target spends its turn moving away from you by' +
        ' the fastest available means.</p><p><b>Flee.</b> The target spends its turn' +
        ' moving away from you by the fastest available means.</p><p><b>Flee.</b> The' +
        ' target spends its turn moving away from you by the fastest available' +
        ' means.</p>',
      ru:
        '<p>Вы произносите команду из одного слова существу, которое видите в пределах' +
        ' дистанции. Цель должна преуспеть в спасброске Мудрости, иначе в свой' +
        ' следующий ход будет исполнять эту команду. Заклинание не оказывает эффект,' +
        ' если цель — нежить, если цель не понимает ваш язык, или если ваша команда' +
        ' ему напрямую вредит.</p><p>Ниже описаны самые типичные команды и их' +
        ' эффекты. Вы можете отдавать и другие команды. В этом случае поведение цели' +
        ' определяет Мастер. Если цель не может выполнить вашу команду, заклинание' +
        ' оканчивается.</p><p><b>Брось.</b> Цель роняет то, что держит, и оканчивает' +
        ' ход.</p><p><b>Падай.</b> Цель падает ничком и оканчивает' +
        ' ход.</p><p><b>Подойди.</b> Цель перемещается ближе к вам по кратчайшему и' +
        ' самому прямому маршруту, оканчивая ход, если оказывается в пределах 5 фт. от' +
        ' вас.</p><p><b>Стой.</b> Цель не перемещается и не совершает никаких' +
        ' действий. Летающее существо продолжает лететь, при условии, что может это' +
        ' делать. Если оно должно лететь, чтобы не упасть, то пролетает минимально' +
        ' необходимое расстояние.</p><p><b>Убегай.</b> Цель тратит ход на то, что' +
        ' перемещается прочь от вас самым быстрым способом.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 60,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: false,
      material: false,
    },
    duration: 'ONE_ROUND',
    atHigherSlots: {
      en:
        'When you cast this spell using a spell slot of 2nd level or higher, you can' +
        ' affect one additional creature for each slot level above 1st. The creatures' +
        ' must be within 30 feet of each other when you target them.',
      ru:
        'Если вы накладываете это заклинание, используя ячейку 2 уровня или выше, вы' +
        ' можете воздействовать на одно дополнительное существо за каждый уровень' +
        ' ячейки выше первого. Существа должны находиться в пределах 30 фт. друг от' +
        ' друга, чтобы стать целями.',
    },
    tags: ['CONTROL'],
    classes: ['CLERIC', 'PALADIN'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Color Spray',
      ru: 'Сверкающие брызги',
    },
    level: 'LEVEL_1',
    school: 'ILLUSION',
    description: {
      en:
        '<p>A dazzling array of flashing, colored light springs from your hand. Roll' +
        ' 6d10; the total is how many hit points of creatures this spell can affect.' +
        ' Creatures in a 15-foot cone originating from you are affected in ascending' +
        ' order of their current hit points (ignoring unconscious creatures and' +
        " creatures that can't see).</p><p>Starting with the creature that has the" +
        ' lowest current hit points, each creature affected by this spell is blinded' +
        " until the end of your next turn. Subtract each creature's hit points from" +
        ' the total before moving on to the creature with the next lowest hit points.' +
        " A creature's hit points must be equal to or less than the remaining total" +
        ' for that creature to be affected.</p>',
      ru:
        '<p>Из вашей руки вылетают яркие разноцветные лучи. Бросьте 6к10; результат' +
        ' покажет, сколько хитов существ попадает под эффект. Существа в 15-футовом' +
        ' конусе, исходящем от вас, попадают под эффект в порядке увеличения текущих' +
        ' хитов (игнорируя тех, кто без сознания и не может видеть).</p><p>Начиная с' +
        ' существа с наименьшим числом текущих хитов, все существа, попавшие под' +
        ' действие заклинания, становятся ослепленными до конца действия заклинания.' +
        ' Вычитайте из остатка хиты уже ослепленных существ и переходите к следующим.' +
        ' Хиты существа не должны превышать остаток, чтобы это существо попало под' +
        ' действие заклинания.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'SELF',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'A pinch of powder or sand that is colored red, yellow, and blue',
      ru: 'Щепотка порошка или песка, окрашенного в красный, желтый и синий цвет',
    },
    duration: 'ONE_ROUND',
    atHigherSlots: {
      en:
        'When you cast this spell using a spell slot of 2nd level or higher, roll an' +
        ' additional 2d10 for each slot level above 1st.',
      ru:
        'Если вы накладываете это заклинание, используя ячейку 2 уровня или выше, вы' +
        ' можете воздействовать на одно дополнительное существо за каждый уровень' +
        ' ячейки выше первого. Существа должны находиться в пределах 30 фт. друг от' +
        ' друга, чтобы стать целями.',
    },
    tags: ['CONTROL'],
    classes: ['SORCERER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Comprehend Languages',
      ru: 'Понимание языков',
    },
    level: 'LEVEL_1',
    school: 'DIVINATION',
    description: {
      en:
        '<p>For the duration, you understand the literal meaning of any spoken' +
        ' language that you hear. You also understand any written language that you' +
        ' see, but you must be touching the surface on which the words are written. It' +
        " takes about 1 minute to read one page of text.</p><p>This spell doesn't" +
        ' decode secret messages in a text or a glyph, such as an arcane sigil, that' +
        " isn't part of a written language.</p>",
      ru:
        '<p>Пока заклинание активно, вы понимаете буквальный смысл всех услышанных' +
        ' речей на любых языках. Вы также понимаете письмена на любых языках, но вы' +
        ' должны касаться поверхности, на которой записаны слова. Требуется примерно 1' +
        ' минута для чтения одной страницы текста.</p><p>Это заклинание не' +
        ' расшифровывает тайные послания в текстах и символы, такие как магические' +
        ' знаки, не являющиеся частью текста.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'SELF',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'A pinch of soot and salt',
      ru: 'Щепотка сажи и соли',
    },
    duration: 'ONE_HOUR',
    tags: ['SOCIAL'],
    classes: ['BARD', 'SORCERER', 'WARLOCK', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Cure Wounds',
      ru: 'Лечение ран',
    },
    level: 'LEVEL_1',
    school: 'EVOCATION',
    description: {
      en:
        '<p>A creature you touch regains a number of hit points equal to 1d8 + your' +
        ' spellcasting ability modifier. This spell has no effect on undead or' +
        ' constructs.</p>',
      ru:
        '<p>Существо, которого вы касаетесь, восстанавливает количество хитов, равное' +
        ' 1к8 + ваш модификатор базовой характеристики. Это заклинание не оказывает' +
        ' никакого эффекта на нежить и конструктов.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'TOUCH',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    duration: 'INSTANTANEOUS',
    atHigherSlots: {
      en:
        'When you cast this spell using a spell slot of 2nd level or higher, the' +
        ' healing increases by 1d8 for each slot level above 1st.',
      ru:
        'Если вы накладываете это заклинание, используя ячейку 2 уровня или выше,' +
        ' лечение увеличивается на 1к8 за каждый уровень ячейки выше первого.',
    },
    tags: ['HEALING'],
    classes: ['BARD', 'CLERIC', 'DRUID', 'PALADIN', 'RANGER'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Detect Evil and Good',
      ru: 'Обнаружение добра и зла',
    },
    level: 'LEVEL_1',
    school: 'DIVINATION',
    description: {
      en:
        '<p>For the duration, you know if there is an aberration, celestial,' +
        ' elemental, fey, fiend, or undead within 30 feet of you, as well as where the' +
        ' creature is located. Similarly, you know if there is a place or object' +
        ' within 30 feet of you that has been magically consecrated or' +
        ' desecrated.</p><p>The spell can penetrate most barriers, but it is blocked' +
        ' by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet' +
        ' of wood or dirt.</p>',
      ru:
        '<p>Пока заклинание активно, вы знаете, есть ли в пределах 30 фт. от вас' +
        ' аберрации, исчадия, небожители, нежить, феи или элементали, а также их' +
        ' местоположение. Кроме того, вы знаете, есть ли в пределах 30 фт. от вас' +
        ' место или предмет, который был магически освящён или' +
        ' осквернён.</p><p>Заклинание проницает большую часть барьеров, но блокируется' +
        ' 1 футом камня, 1 дюймом обычного металла, тонким листом свинца или 3 футами' +
        ' дерева или земли.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'SELF',
    },
    // area: {
    //   value: 30,
    //   unit: "FEET",
    //   type: "SPHERE",
    // },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    duration: 'TEN_MINUTES',
    tags: ['DETECTION'],
    classes: ['CLERIC', 'PALADIN'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Detect Magic',
      ru: 'Обнаружение магии',
    },
    level: 'LEVEL_1',
    school: 'DIVINATION',
    description: {
      en:
        '<p>For the duration, you sense the presence of magic within 30 feet of you.' +
        ' If you sense magic in this way, you can use your action to see a faint aura' +
        ' around any visible creature or object in the area that bears magic, and you' +
        ' learn its school of magic, if any.</p><p>The spell can penetrate most' +
        ' barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a' +
        ' thin sheet of lead, or 3 feet of wood or dirt.</p>',
      ru:
        '<p>Пока заклинание активно, вы чувствуете присутствие магии в пределах 30 фт.' +
        ' Если вы почувствовали за счет этого заклинания присутствие магии, вы можете' +
        ' действием увидеть слабую ауру вокруг видимого существа или предмета,' +
        ' несущего на себе магию, а также узнать школу этой магии, если она' +
        ' есть.<p></p>Заклинание проницает большую часть барьеров, но блокируется 1' +
        ' футом камня, 1 дюймом обычного металла, тонким листом свинца или 3 футами' +
        ' дерева или земли.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'SELF',
    },
    // area: {
    //   value: 30,
    //   unit: "FEET",
    //   type: "SPHERE",
    // },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    duration: 'TEN_MINUTES',
    tags: ['DETECTION'],
    classes: ['BARD', 'CLERIC', 'DRUID', 'PALADIN', 'RANGER', 'SORCERER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Detect Poison and Disease',
      ru: 'Обнаружение болезней и яда',
    },
    level: 'LEVEL_1',
    school: 'DIVINATION',
    description: {
      en:
        '<p>For the duration, you can sense the presence and location of poisons,' +
        ' poisonous creatures, and diseases within 30 feet of you. You also identify' +
        ' the kind of poison, poisonous creature, or disease in each case.</p><p>The' +
        ' spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1' +
        ' inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.</p>',
      ru:
        '<p>Пока заклинание активно, вы можете ощущать присутствие и местонахождение' +
        ' ядов, ядовитых существ и болезней в пределах 30 фт. от себя. Вы также' +
        ' распознаёте вид яда, ядовитого существа или болезни.</p><p>Заклинание' +
        ' проницает большую часть барьеров, но блокируется 1 футом камня, 1 дюймом' +
        ' обычного металла, тонким листом свинца или 3 футами дерева или земли.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'SELF',
    },
    // area: {
    //   value: 30,
    //   unit: "FEET",
    //   type: "SPHERE",
    // },
    isConcentration: true,
    isRitual: true,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'A yew leaf',
      ru: 'Лист тиса',
    },
    duration: 'TEN_MINUTES',
    tags: ['DETECTION'],
    classes: ['CLERIC', 'DRUID', 'PALADIN', 'RANGER'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Disguise Self',
      ru: 'Маскировка',
    },
    level: 'LEVEL_1',
    school: 'ILLUSION',
    description: {
      en:
        '<p>You make yourself--including your clothing, armor, weapons, and other' +
        ' belongings on your person--look different until the spell ends or until you' +
        ' use your action to dismiss it. You can seem 1 foot shorter or taller and can' +
        " appear thin, fat, or in between. You can't change your body type, so you" +
        ' must adopt a form that has the same basic arrangement of limbs. Otherwise,' +
        ' the extent of the illusion is up to you.</p><p>The changes wrought by this' +
        ' spell fail to hold up to physical inspection. For example, if you use this' +
        ' spell to add a hat to your outfit, objects pass through the hat, and anyone' +
        ' who touches it would feel nothing or would feel your head and hair. If you' +
        ' use this spell to appear thinner than you are, the hand of someone who' +
        ' reaches out to touch you would bump into you while it was seemingly still in' +
        ' midair.</p><p>To discern that you are disguised, a creature can use its' +
        ' action to inspect your appearance and must succeed on an Intelligence' +
        ' (Investigation) check against your spell save DC.</p>',
      ru:
        '<p>Вы заставляете себя — включая одежду, доспехи, оружие и прочее имущество —' +
        ' выглядеть иначе, пока заклинание не окончится, или пока вы не окончите его' +
        ' преждевременно, действием. Вы можете выглядеть на 1 фут (30 сантиметров)' +
        ' выше или ниже, а также стать худым, толстым или получить среднее' +
        ' телосложение. Вы не можете менять основу тела, поэтому у новой формы должен' +
        ' быть такой же набор конечностей. Во всем остальном характер иллюзии' +
        ' определяете вы.</p><p>Изменения, вызванные этим заклинанием, не выдерживают' +
        ' проверку физическим исследованием. Например, если вы добавили к своему' +
        ' снаряжению шляпу, предметы будут проходить сквозь нее, и все, кто к ней' +
        ' прикоснутся, либо ничего не почувствуют, либо почувствуют вашу голову и' +
        ' волосы. Если вы становитесь худее, то рука того, кто к вам тянется,' +
        ' наткнется на вас на полпути, еще в воздухе.</p><p>Для обнаружения того, что' +
        ' вы замаскированы, существо должно действием обследовать вашу внешность и' +
        ' преуспеть в проверке Интеллекта (Анализ) против вашей Сл заклинаний.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'SELF',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    duration: 'ONE_HOUR',
    tags: ['SHAPECHANGING'],
    classes: ['BARD', 'SORCERER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Divine Favor',
      ru: 'Божественное благоволение',
    },
    level: 'LEVEL_1',
    school: 'EVOCATION',
    description: {
      en:
        '<p>Your prayer empowers you with divine radiance. Until the spell ends, your' +
        ' weapon attacks deal an extra 1d4 radiant damage on a hit.</p>',
      ru:
        '<p>Ваша молитва наполняет вас божественной энергией. Пока заклинание активно,' +
        ' ваши атаки оружием причиняют при попадании дополнительный урон 1к4' +
        ' излучением.</p>',
    },
    castingTime: 'BONUS_ACTION',
    range: {
      value: 0,
      unit: 'SELF',
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    duration: 'ONE_MINUTE',
    damageDice: { dice: 'D4', quantity: 1 },
    damageType: 'RADIANT',
    tags: ['DAMAGE'],
    classes: ['PALADIN'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Entangle',
      ru: 'Опутывание',
    },
    level: 'LEVEL_1',
    school: 'CONJURATION',
    description: {
      en:
        '<p>Grasping weeds and vines sprout from the ground in a 20-foot square' +
        ' starting from a point within range. For the duration, these plants turn the' +
        ' ground in the area into difficult terrain.</p><p>A creature in the area when' +
        ' you cast the spell must succeed on a Strength saving throw or be restrained' +
        ' by the entangling plants until the spell ends. A creature restrained by the' +
        ' plants can use its action to make a Strength check against your spell save' +
        ' DC. On a success, it frees itself.</p><p>When the spell ends, the conjured' +
        ' plants wilt away.</p>',
      ru:
        '<p>Из точки в пределах дистанции на площади квадрата с длиной стороны в 20' +
        ' фт. вырастают цепкие травы и плети. Пока заклинание активно, эти растения' +
        ' превращают землю в труднопроходимую местность.</p><p>Существа, находящиеся в' +
        ' этой области, когда вы накладываете заклинание, должны преуспеть в' +
        ' спасброске Силы, иначе они станут опутанными растениями до окончания' +
        ' действия заклинания. Опутанное растениями существо может действием совершать' +
        ' проверки Силы против Сл ваших заклинаний. В случае успеха оно' +
        ' освобождается.</p>Когда заклинание оканчивается, вызванные растения' +
        ' увядают.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 90,
      unit: 'FEET',
    },
    // area: {
    //   value: 20,
    //   unit: "FEET",
    //   type: "SQUARE"
    // },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    saveRequired: 'STRENGTH',
    duration: 'ONE_MINUTE',
    tags: ['CONTROL'],
    classes: ['DRUID'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Expeditious Retreat',
      ru: 'Поспешное отступление',
    },
    level: 'LEVEL_1',
    school: 'TRANSMUTATION',
    description: {
      en:
        '<p>This spell allows you to move at an incredible pace. When you cast this' +
        ' spell, and then as a bonus action on each of your turns until the spell' +
        ' ends, you can take the Dash action.</p>',
      ru:
        '<p>Это заклинание позволяет перемещаться с невероятной скоростью. Когда вы' +
        ' накладываете это заклинание, а также в последующие ходы, бонусным' +
        ' действием, пока активно заклинание, вы можете совершать действие Рывок.</p>',
    },
    castingTime: 'BONUS_ACTION',
    range: {
      value: 0,
      unit: 'SELF',
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    duration: 'TEN_MINUTES',
    tags: ['MOVEMENT'],
    classes: ['SORCERER', 'WARLOCK', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Faerie Fire',
      ru: 'Огонь фей',
    },
    level: 'LEVEL_1',
    school: 'EVOCATION',
    description: {
      en:
        '<p>Each object in a 20-foot cube within range is outlined in blue, green, or' +
        ' violet light (your choice). Any creature in the area when the spell is cast' +
        ' is also outlined in light if it fails a Dexterity saving throw. For the' +
        ' duration, objects and affected creatures shed dim light in a 10-foot' +
        ' radius.</p><p>Any attack roll against an affected creature or object has' +
        ' advantage if the attacker can see it, and the affected creature or object' +
        " can't benefit from being invisible.</p>",
      ru:
        '<p>Все предметы в кубе с длиной ребра 20 фт. в пределах дистанции' +
        ' подсвечиваются синим, зелёным или фиолетовым цветом (на ваш выбор). Все' +
        ' существа в этой области тоже подсвечиваются, если проваливают спасбросок' +
        ' Ловкости. На время длительности заклинания подсвеченные предметы и' +
        ' существа испускают тусклый свет в радиусе 10 фт. <p><p>Все броски атаки по' +
        ' затронутым существам и предметам совершаются с преимуществом, если' +
        ' атакующий видит их, и эти существа и предметы не получают преимуществ от' +
        ' невидимости.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 60,
      unit: 'FEET',
    },
    // area: {
    //   value: 20,
    //   unit: "FEET",
    //   type: "CUBE",
    // },
    isConcentration: true,
    isRitual: false,
    saveRequired: 'DEXTERITY',
    components: {
      verbal: true,
      somatic: false,
      material: false,
    },
    duration: 'ONE_MINUTE',
    tags: ['DEBUFF'],
    classes: ['BARD', 'DRUID'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'False Life',
      ru: 'Псевдожизнь',
    },
    level: 'LEVEL_1',
    school: 'NECROMANCY',
    description: {
      en:
        '<p>Bolstering yourself with a necromantic facsimile of life, you gain 1d4 + 4' +
        ' temporary hit points for the duration.</p>',
      ru:
        '<p>Укрепив себя некромантским подобием жизни, вы получаете 1к4 + 4 временных' +
        ' хита на время длительности заклинания.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'SELF',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    atHigherSlots: {
      en:
        'When you cast this spell using a spell slot of 2nd level or higher, you gain' +
        ' 5 additional temporary hit points for each slot level above 1st.',
      ru:
        'Если вы накладываете это заклинание, используя ячейку 2 уровня или выше, вы' +
        ' получаете 5 дополнительных временных хитов за каждый уровень ячейки выше' +
        ' первого.',
    },
    materials: {
      en: 'A small amount of alcohol or distilled spirits',
      ru: 'Небольшое количество алкоголя или дистиллированного спирта',
    },
    duration: 'ONE_HOUR',
    tags: ['HEALING'],
    classes: ['SORCERER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Feather Fall',
      ru: 'Падение перышком',
    },
    level: 'LEVEL_1',
    school: 'TRANSMUTATION',
    description: {
      en:
        "<p>Choose up to five falling creatures within range. A falling creature's" +
        ' rate of descent slows to 60 feet per round until the spell ends. If the' +
        ' creature lands before the spell ends, it takes no falling damage and can' +
        ' land on its feet, and the spell ends for that creature.</p>',
      ru:
        '<p>Выберите до пяти падающих существ в пределах дистанции. До окончания' +
        ' действия заклинания их скорость падения уменьшается на 60 фт. в раунд. Если' +
        ' такое существо приземлится до окончания заклинания, оно не получает урон от' +
        ' падения и может приземлиться на ноги, и тогда заклинание оканчивает действие' +
        ' на него.</p>',
    },
    castingTime: 'REACTION',
    // notices: [
    //   {
    //     castingTime: {
    //       en: 'which you take when you or a creature within 60 feet of you falls',
    //       ru: 'совершаемая вами, когда вы или существо в пределах 60 фт. от вас
    //       начинаете падать',
    //     },
    //   }
    // ],
    range: {
      value: 60,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: false,
      material: true,
    },
    materials: {
      en: 'A small feather or piece of down',
      ru: 'Небольшое перо или кусочек пуха',
    },
    duration: 'ONE_MINUTE',
    tags: ['UTILITY', 'EXPLORATION'],
    classes: ['BARD', 'SORCERER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Find Familiar',
      ru: 'Поиск фамильяра',
    },
    level: 'LEVEL_1',
    school: 'CONJURATION',
    description: {
      en:
        '<p>You gain the service of a familiar, a spirit that takes an animal form you' +
        ' choose: bat, cat, crab, frog (toad), hawk, lizard, octopus, owl, poisonous' +
        ' snake, fish (quipper), rat, raven, sea horse, spider, or weasel. Appearing' +
        ' in an unoccupied space within range, the familiar has the statistics of the' +
        ' chosen form, though it is a celestial, fey, or fiend (your choice) instead' +
        ' of a beast.<p><p>Your familiar acts independently of you, but it always' +
        ' obeys your commands. In combat, it rolls its own initiative and acts on its' +
        " own turn. A familiar can't attack, but it can take other actions as" +
        ' normal.</p><p>When the familiar drops to 0 hit points, it disappears,' +
        ' leaving behind no physical form. It reappears after you cast this spell' +
        ' again.</p><p>While your familiar is within 100 feet of you, you can' +
        ' communicate with it telepathically. Additionally, as an action, you can see' +
        " through your familiar's eyes and hear what it hears until the start of your" +
        ' next turn, gaining the benefits of any special senses that the familiar has.' +
        ' During this time, you are deaf and blind with regard to your own' +
        ' senses.</p><p>As an action, you can temporarily dismiss your familiar. It' +
        ' disappears into a pocket dimension where it awaits your summons.' +
        ' Alternatively, you can dismiss it forever. As an action while it is' +
        ' temporarily dismissed, you can cause it to reappear in any unoccupied' +
        " space within 30 feet of you.</p><p>You can't have more than one" +
        ' familiar at a time. If you cast this spell while you already have a' +
        ' familiar, you instead cause it to adopt a new form. Choose one of the' +
        ' forms from the above list. Your familiar transforms into the chosen' +
        ' creature.</p><p>Finally, when you cast a spell with a range of' +
        ' touch, your familiar can deliver the spell as if it had cast the' +
        ' spell. Your familiar must be within 100 feet of you, and it must' +
        ' use its reaction to deliver the spell when you cast it. If the' +
        ' spell requires an attack roll, you use your attack modifier for' +
        ' the roll.</p>',
      ru:
        '<p>Вы получаете в услужение фамильяра — духа, принимающего облик выбранного' +
        ' вами животного: ворона, кошки, краба, крысы, летучей мыши, лягушки (жабы),' +
        ' морского конька, осьминога, паука, рыбы (пиранья), совы, хорька, ядовитой' +
        ' змеи, ястреба или ящерицы. Появившись в свободном пространстве в пределах' +
        ' дистанции, фамильяр приобретает характеристики выбранной формы, хотя он не' +
        ' зверь, а небожитель, фея или исчадие (на ваш выбор).<p><p>Ваш фамильяр' +
        ' действует независимо от вас, но всегда повинуется вашим командам. В сражении' +
        ' оно определяет свою инициативу и действует в свой ход. Фамильяр не может' +
        ' атаковать, но может совершать другие действия как обычно.</p><p>Когда хиты' +
        ' фамильяра опускаются до 0, он исчезает, не оставляя физического тела. Он' +
        ' возвращается, когда вы используете это заклинание еще раз.</p><p>Пока' +
        ' фамильяр находится в пределах 100 фт., вы можете общаться с ним' +
        ' телепатически. Кроме того, вы можете действием начать смотреть глазами' +
        ' фамильяра и слушать его ушами до начала своего следующего хода, получая' +
        ' преимущество от особых чувств, которыми может обладать фамильяр. В это время' +
        ' для своих собственных чувств вы слепы и глухи.</p><p>Вы можете действием' +
        ' временно отпустить своего фамильяра. Тот исчезает в карманном измерении, где' +
        ' будет ждать, пока вы его не призовете. В качестве альтернативы, вы можете' +
        ' отпустить его насовсем. Пока фамильяр временно отпущен, вы можете действием' +
        ' вернуть его в свободное пространство в пределах 30 фт. от себя. </p><p>У вас' +
        ' не может быть больше одного фамильяра одновременно. Если вы накладываете это' +
        ' заклинание, уже имея фамильяра, вы заставляете принять его новый облик.' +
        ' Выберите один из описанных выше обликов. Ваш фамильяр становится этим' +
        ' существом.</p><p>Если вы накладываете заклинание с дистанцией «касание», его' +
        ' может передать фамильяр, как если бы это он его накладывал. Ваш фамильяр' +
        ' должен при этом находиться в пределах 100 фт. от вас, и он использует свою' +
        ' реакцию, когда вы накладываете его. Если заклинание требует броска атаки, вы' +
        ' используете свой модификатор атаки.</p>',
    },
    castingTime: 'ONE_HOUR',
    range: {
      value: 10,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: true,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en:
        '10 gp worth of charcoal, incense, and herbs that must be consumed by fire in' +
        ' a brass brazier',
      ru:
        'Стоящие 10 зм уголь, благовония и травы, сжигаемые в огне или латунной жаровне',
    },
    duration: 'INSTANTANEOUS',
    tags: ['SUMMONING'],
    classes: ['WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Floating Disk',
      ru: 'Парящий диск',
    },
    level: 'LEVEL_1',
    school: 'CONJURATION',
    description: {
      en:
        '<p>This spell creates a circular, horizontal plane of force, 3 feet in' +
        ' diameter and 1 inch thick, that floats 3 feet above the ground in an' +
        ' unoccupied space of your choice that you can see within range. The disk' +
        ' remains for the duration, and can hold up to 500 pounds. If more weight is' +
        ' placed on it, the spell ends, and everything on the disk falls to the' +
        ' ground.</p><p>The disk is immobile while you are within 20 feet of it. If' +
        ' you move more than 20 feet away from it, the disk follows you so that it' +
        ' remains within 20 feet of you. It can move across uneven terrain, up or down' +
        ' stairs, slopes and the like, but it can’t cross an elevation change of 10' +
        ' feet or more. For example, the disk can’t move across a 10-foot-deep pit,' +
        ' nor could it leave such a pit if it was created at the bottom.</p><p>If you' +
        ' move more than 100 feet from the disk (typically because it can’t move' +
        ' around an obstacle to follow you), the spell ends.</p>',
      ru:
        '<p>Это заклинание создает круглый горизонтальный диск из силового поля' +
        ' диаметром 3 фута и толщиной 1 дюйм (2,5 см.), парящий в 3 футах над полом в' +
        ' свободном пространстве на ваш выбор, видимом в пределах дистанции. Диск' +
        ' существует, пока заклинание активно, и может вынести на себе 500 фунтов.' +
        ' Если на него поместить больший вес, заклинание окончится, и все, что было на' +
        ' диске, падает на пол.</p><p>Диск неподвижен, пока вы находитесь в пределах' +
        ' 20 фт. от него. Если вы переместитесь от него на расстояние, превышающее' +
        ' 20 фт., диск следует за вами, оставаясь в пределах 20 фт. Он может' +
        ' перелетать по неровной поверхности, перемещаться по лестницам, склонам и' +
        ' подобным препятствиям, но не может пересекать перепады по высоте в 10 фт. и' +
        ' более. Например, диск не сможет перелететь над 10-фт.ой ямой, и не сможет из' +
        ' нее выбраться, если будет создан на ее дне.</p><p>Если вы переместитесь' +
        ' более чем на 100 фт. от диска (например, если он из-за препятствия не сможет' +
        ' последовать за вами), заклинание оканчивается.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 30,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: true,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'A drop of mercury',
      ru: 'Капля ртути',
    },
    duration: 'ONE_HOUR',
    tags: ['MOVEMENT', 'UTILITY'],
    classes: ['WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Fog Cloud',
      ru: 'Туманное облако',
    },
    level: 'LEVEL_1',
    school: 'CONJURATION',
    description: {
      en:
        '<p>You create a 20-foot-radius sphere of fog centered on a point within' +
        ' range. The sphere spreads around corners, and its area is heavily obscured.' +
        ' It lasts for the duration or until a wind of moderate or greater speed (at' +
        ' least 10 miles per hour) disperses it.</p>',
      ru:
        '<p>Вы создаете сферу с радиусом 20 фт. из тумана с центром на точке в' +
        ' пределах дистанции. Сфера обходит углы, и ее пространство — сильно' +
        ' заслоненная местность. Она существует до окончания действия заклинания, или' +
        ' пока ее не рассеет ветер (со скоростью как минимум 10 миль в час).</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 120,
      unit: 'FEET',
    },
    // area: {
    //   value: 20,
    //   unit: 'FEET',
    //   type: "SPHERE",
    // },
    atHigherSlots: {
      en:
        'Если вы накладываете это заклинание, используя ячейку 2 уровня или выше,' +
        ' радиус тумана увеличивается на 20 фт. за каждый уровень ячейки выше первого.',
      ru:
        'When you cast this spell using a spell slot of 2nd level or higher, the' +
        ' radius of the fog increases by 20 feet for each slot level above 1st.',
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    duration: 'ONE_HOUR',
    tags: ['CONTROL', 'ENVIRONMENT'],
    classes: ['DRUID', 'RANGER', 'SORCERER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Goodberry',
      ru: 'Чудо-ягоды',
    },
    level: 'LEVEL_1',
    school: 'TRANSMUTATION',
    description: {
      en:
        '<p>Up to ten berries appear in your hand and are infused with magic for the' +
        ' duration. A creature can use its action to eat one berry. Eating a berry' +
        ' restores 1 hit point, and the berry provides enough nourishment to sustain a' +
        ' creature for one day.</p><p>The berries lose their potency if they have not' +
        ' been consumed within 24 hours of the casting of this spell.</p>',
      ru:
        '<p>В вашей руке появляются до десяти ягод, наполненных магией. Любое существо' +
        ' может действием съесть одну ягоду. Это восстанавливает 1 хит, и ягода' +
        ' настолько питательна, что насыщает существо на весь день.</p><p>Ягоды теряют' +
        ' силу, если их не съесть через 24 часа после создания.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'TOUCH',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    duration: 'INSTANTANEOUS',
    materials: {
      en: 'Ветка омелы',
      ru: 'A sprig of mistletoe',
    },
    tags: ['HEALING'],
    classes: ['DRUID', 'RANGER'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Grease',
      ru: 'Скольжение',
    },
    level: 'LEVEL_1',
    school: 'CONJURATION',
    description: {
      en:
        '<p>Slick grease covers the ground in a 10-foot square centered on a point' +
        ' within range and turns it into difficult terrain for the' +
        ' duration.</p><p>When the grease appears, each creature standing in its' +
        ' area must succeed on a Dexterity saving throw or fall prone. A creature' +
        ' that enters the area or ends its turn there must also succeed on a' +
        ' Dexterity saving throw or fall prone.</p>',
      ru:
        '<p>Скользкий жир покрывает пол в квадрате с длиной стороны 10 фт. с центром' +
        ' на точке в пределах дистанции, делая эту местность труднопроходимой, пока' +
        ' заклинание активно.</p><p>Когда жир появляется, все существа, стоящие в' +
        ' этой области, должны преуспеть в спасброске Ловкости, иначе они падают' +
        ' ничком. Существа, входящие в эту область или оканчивающие там ход, тоже' +
        ' должны преуспеть в спасброске Ловкости, чтобы не упасть.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 60,
      unit: 'FEET',
    },
    // area: {
    //   value: 10,
    //   unit: "FEET",
    //   type: "SQUARE",
    // },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'A bit of pork rind or butter',
      ru: 'Кусок масла или свиного сала',
    },
    duration: 'ONE_MINUTE',
    tags: ['CONTROL'],
    classes: ['WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Guiding Bolt',
      ru: 'Направленный снаряд',
    },
    level: 'LEVEL_1',
    school: 'EVOCATION',
    description: {
      en:
        '<p>A flash of light streaks toward a creature of your choice within range.' +
        ' Make a ranged spell attack against the target. On a hit, the target takes' +
        ' 4d6 radiant damage, and the next attack roll made against this target' +
        ' before the end of your next turn has advantage, thanks to the mystical dim' +
        ' light glittering on the target until then.</p>',
      ru:
        '<p>Вспышка света устремляется к выбранному вами существу в пределах' +
        ' дистанции. Совершите дальнобойную атаку заклинанием по цели. При попадании' +
        ' цель получает урон излучением 4к6, и следующий бросок атаки по цели,' +
        ' совершённый до конца вашего следующего хода, совершается с преимуществом,' +
        ' благодаря мистическому тусклому свету, остающемуся недолго на цели.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 120,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    atHigherSlots: {
      en:
        'When you cast this spell using a spell slot of 2nd level or higher, the' +
        ' damage increases by 1d6 for each slot level above 1st.',
      ru:
        'Если вы накладываете это заклинание, используя ячейку 2 уровня или выше, урон' +
        ' увеличивается на 1к6 за каждый уровень ячейки выше первого.',
    },
    duration: 'ONE_ROUND',
    damageType: 'RADIANT',
    damageDice: {
      quantity: 4,
      dice: 'D6',
    },
    tags: ['DAMAGE', 'BUFF'],
    classes: ['CLERIC'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Healing Word',
      ru: 'Лечащее слово',
    },
    level: 'LEVEL_1',
    school: 'EVOCATION',
    description: {
      en:
        '<p>A creature of your choice that you can see within range regains hit points' +
        ' equal to 1d4 + your spellcasting ability modifier. This spell has no effect' +
        ' on undead or constructs.</p>',
      ru:
        '<p>Существо на ваш выбор, видимое в пределах дистанции, восстанавливает' +
        ' количество хитов, равное 1к4 + ваш модификатор базовой характеристики. Это' +
        ' заклинание не оказывает никакого эффекта на нежить и конструктов.</p>',
    },
    castingTime: 'BONUS_ACTION',
    range: {
      value: 60,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: false,
      material: false,
    },
    duration: 'INSTANTANEOUS',
    atHigherSlots: {
      en:
        'When you cast this spell using a spell slot of 2nd level or higher, the' +
        ' healing increases by 1d4 for each slot level above 1st.',
      ru:
        'Если вы накладываете это заклинание, используя ячейку 2 уровня или выше,' +
        ' количество восстанавливаемых хитов увеличивается на 1к4 за каждый уровень' +
        ' ячейки выше первого.',
    },
    tags: ['HEALING'],
    classes: ['BARD', 'CLERIC', 'DRUID'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Heroism',
      ru: 'Героизм',
    },
    level: 'LEVEL_1',
    school: 'ENCHANTMENT',
    description: {
      en:
        '<p>A willing creature you touch is imbued with bravery. Until the spell ends,' +
        ' the creature is immune to being frightened and gains temporary hit points' +
        ' equal to your spellcasting ability modifier at the start of each of its' +
        ' turns. When the spell ends, the target loses any remaining temporary hit' +
        ' points from this spell.</p>',
      ru:
        '<p>Согласное существо, которого вы касаетесь, наполняется храбростью. Пока' +
        ' заклинание активно, существо получает иммунитет к состоянию испуга, и в' +
        ' начале каждого своего хода получает временные хиты, равные модификатору' +
        ' вашей базовой характеристики. Когда это заклинание оканчивается, цель' +
        ' теряет все временные хиты, оставшиеся от этого заклинания.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'TOUCH',
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    duration: 'ONE_MINUTE',
    atHigherSlots: {
      en:
        'When you cast this spell using a spell slot of 2nd level or higher, you can' +
        ' target one additional creature for each slot level above 1st.',
      ru:
        'Если вы накладываете это заклинание, используя ячейку 2 уровня или выше, вы' +
        ' можете сделать целью одно дополнительное существо за каждый уровень ячейки' +
        ' выше первого.',
    },
    tags: ['HEALING', 'BUFF'],
    classes: ['BARD', 'PALADIN'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Hideous Laughter',
      ru: 'Жуткий смех Таши',
    },
    level: 'LEVEL_1',
    school: 'ENCHANTMENT',
    description: {
      en:
        '<p>A creature of your choice that you can see within range perceives' +
        ' everything as hilariously funny and falls into fits of laughter if this' +
        ' spell affects it. The target must succeed on a Wisdom saving throw or fall' +
        ' prone, becoming incapacitated and unable to stand up for the duration. A' +
        " creature with an Intelligence score of 4 or less isn't affected.</p><p>At" +
        ' the end of each of its turns, and each time it takes damage, the target can' +
        ' make another Wisdom saving throw. The target has advantage on the saving' +
        " throw if it's triggered by damage. On a success, the spell ends.</p>",
      ru:
        '<p>Существо на ваш выбор, видимое в пределах дистанции, воспринимает все' +
        ' невероятно смешным, и корчится от смеха, если заклинание на него действует.' +
        ' Цель должна преуспеть в спасброске Мудрости, иначе она падает ничком,' +
        ' становится недееспособной, и в течение действия заклинания не может' +
        ' встать. Существа со значением Интеллекта 4 и меньше не попадают под' +
        ' действие этого заклинания.</p><p>В конце каждого своего хода, и каждый' +
        ' раз при получении урона цель может совершать новый спасбросок' +
        ' Мудрости. Спасбросок совершается с преимуществом, если он был вызван' +
        ' получением урона. При успехе заклинание оканчивается.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 30,
      unit: 'FEET',
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    saveRequired: 'WISDOM',
    materials: {
      en: 'Tiny tarts and a feather that is waved in the air',
      ru: 'Маленькие пирожные и перо, которым нужно махать в воздухе',
    },
    duration: 'ONE_MINUTE',
    tags: ['CONTROL', 'DEBUFF'],
    classes: ['BARD', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: "Hunter's Mark",
      ru: 'Метка охотника',
    },
    level: 'LEVEL_1',
    school: 'DIVINATION',
    description: {
      en:
        '<p>You choose a creature you can see within range and mystically mark it as' +
        ' your quarry. Until the spell ends, you deal an extra 1d6 damage to the' +
        ' target whenever you hit it with a weapon attack, and you have advantage on' +
        ' any Wisdom (Perception) or Wisdom (Survival) check you make to find it.' +
        ' If the target drops to 0 hit points before this spell ends, you can use a' +
        ' bonus action on a subsequent turn of yours to mark a new creature.</p>',
      ru:
        '<p>Вы выбираете существо, видимое в пределах дистанции, и объявляете его' +
        ' своей добычей. Пока заклинание активно, вы причиняете цели дополнительный' +
        ' урон 1к6 каждый раз, когда попадаете по ней атакой оружием, и вы' +
        ' совершаете с преимуществом проверки Мудрости (Внимательность) и Мудрость' +
        ' (Выживание), совершённые для её поиска. Если хиты цели опускаются до 0,' +
        ' пока заклинание активно, вы можете в свой следующий ход бонусным' +
        ' действием выбрать целью новое существо.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 90,
      unit: 'FEET',
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: false,
      material: false,
    },
    atHigherSlots: {
      en:
        'When you cast this spell using a spell slot of 3rd or 4th level, you can' +
        ' maintain your concentration on the spell for up to 8 hours. When you use a' +
        ' spell slot of 5th level or higher, you can maintain your concentration on' +
        ' the spell for up to 24 hours.',
      ru:
        'Если вы накладываете это заклинание, используя ячейку 3 или 4 уровня, вы' +
        ' можете поддерживать концентрацию 8 часов. Если вы используете ячейку' +
        ' заклинания 5 уровня или выше, вы можете поддерживать концентрацию 24 часа.',
    },
    duration: 'ONE_HOUR',
    tags: ['DAMAGE', 'DEBUFF'],
    classes: ['RANGER'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Identify',
      ru: 'Опознание',
    },
    level: 'LEVEL_1',
    school: 'DIVINATION',
    description: {
      en:
        '<p>You choose one object that you must touch throughout the casting of the' +
        ' spell. If it is a magic item or some other magic-imbued object, you learn' +
        ' its properties and how to use them, whether it requires attunement to use,' +
        ' and how many charges it has, if any. You learn whether any spells are' +
        ' affecting the item and what they are. If the item was created by a spell,' +
        ' you learn which spell created it.</p><p>If you instead touch a creature' +
        ' throughout the casting, you learn what spells, if any, are currently' +
        ' affecting it.</p>',
      ru:
        '<p>Вы выбираете один предмет, не переставая касаться его во время всего' +
        ' накладывания заклинания. Если это магический предмет, вы узнаете его' +
        ' свойства, способ их использования, требуется ли для использования' +
        ' настройка на него, и сколько осталось зарядов, если они есть. Вы узнаете,' +
        ' действуют ли в данный момент заклинания на этот предмет, и что это за' +
        ' заклинания. Если предмет был создан заклинанием, вы узнаете, что это было за' +
        ' заклинание.</p><p>Если вы вместо этого во время накладывания заклинания' +
        ' касаетесь существа, вы узнаете, какие заклинания в данный момент действуют' +
        ' на него.</p>',
    },
    castingTime: 'ONE_MINUTE',
    range: {
      value: 0,
      unit: 'TOUCH',
    },
    isConcentration: false,
    isRitual: true,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'A pearl worth at least 100 gp and an owl feather',
      ru: 'Жемчужина, стоящая как минимум 100 зм, и перо совы',
    },
    duration: 'INSTANTANEOUS',
    tags: ['DETECTION'],
    classes: ['BARD', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Illusory Script',
      ru: 'Невидимое письмо',
    },
    level: 'LEVEL_1',
    school: 'ILLUSION',
    description: {
      en:
        '<p>You write on parchment, paper, or some other suitable writing material and' +
        ' imbue it with a potent illusion that lasts for the duration.</p><p>To you' +
        ' and any creatures you designate when you cast the spell, the writing' +
        ' appears normal, written in your hand, and conveys whatever meaning you' +
        ' intended when you wrote the text. To all others, the writing appears as if' +
        ' it were written in an unknown or magical script that is unintelligible.' +
        ' Alternatively, you can cause the writing to appear to be an entirely' +
        ' different message, written in a different hand and language, though the' +
        ' language must be one you know.</p><p>Should the spell be dispelled, the' +
        ' original script and the illusion both disappear.</p><p>A creature with' +
        ' truesight can read the hidden message.</p>',
      ru:
        '<p>Вы пишете на пергаменте, бумаге или другом подходящем материале, и' +
        ' накрываете его иллюзией, существующей, пока активно заклинание.</p><p>Для' +
        ' вас и всех существ, указанных вами при накладывании заклинания, письмена' +
        ' кажутся обычными, написанными вашей рукой, и передающими тот самый смысл,' +
        ' который вкладывали вы. Для всех остальных письмена кажутся написанными' +
        ' на неизвестном или магическом языке, который невозможно прочитать. В' +
        ' качестве альтернативы вы можете заставить письмена поменять смысл, или' +
        ' сделать так, чтобы они выглядели написанными другой рукой или на' +
        ' другом языке, но язык при этом должен быть тем, который вы' +
        ' знаете.</p><p>Если заклинание рассеять, исчезает и исходное письмо' +
        ' и иллюзия.</p><p>Существо с истинным зрением может читать скрытое' +
        ' послание.</p>',
    },
    castingTime: 'ONE_MINUTE',
    range: {
      value: 0,
      unit: 'TOUCH',
    },
    isConcentration: false,
    isRitual: true,
    components: {
      verbal: false,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'A lead-based ink worth at least 10 gp, which the spell consumes',
      ru: 'Свинцовые чернила, стоящие как минимум 10 зм, расходуемые заклинанием',
    },
    duration: 'TEN_DAYS',
    tags: ['COMMUNICATION'],
    classes: ['BARD', 'WARLOCK', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Inflict Wounds',
      ru: 'Нанесение ран',
    },
    level: 'LEVEL_1',
    school: 'NECROMANCY',
    description: {
      en:
        '<p>Make a melee spell attack against a creature you can reach. On a hit, the' +
        ' target takes 3d10 necrotic damage.</p>',
      ru:
        '<p>Совершите рукопашную атаку заклинанием по существу в пределах' +
        ' досягаемости. При попадании цель получает урон некротической энергией' +
        ' 3к10.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'TOUCH',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    damageType: 'NECROTIC',
    damageDice: {
      quantity: 3,
      dice: 'D10',
    },
    atHigherSlots: {
      en:
        'When you cast this spell using a spell slot of 2nd level or higher, the' +
        ' damage increases by 1d10 for each slot level above 1st.',
      ru:
        'Если вы накладываете это заклинание, используя ячейку 2 уровня или выше, урон' +
        ' увеличивается на 1к10 за каждый уровень ячейки выше первого',
    },
    duration: 'INSTANTANEOUS',
    tags: ['DAMAGE'],
    classes: ['CLERIC'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Jump',
      ru: 'Прыжок',
    },
    level: 'LEVEL_1',
    school: 'TRANSMUTATION',
    description: {
      en:
        "<p>You touch a creature. The creature's jump distance is tripled until the" +
        ' spell ends.</p>',
      ru:
        '<p>Вы касаетесь существа. Пока заклинание активно, расстояние прыжка этого' +
        ' существа увеличивается в три раза.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'TOUCH',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: "A grasshopper's hind leg",
      ru: 'Задняя лапка кузнечика',
    },
    duration: 'ONE_MINUTE',
    tags: ['MOVEMENT'],
    classes: ['DRUID', 'RANGER', 'SORCERER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Longstrider',
      ru: 'Скороход',
    },
    level: 'LEVEL_1',
    school: 'TRANSMUTATION',
    description: {
      en:
        "<p>You touch a creature. The target's speed increases by 10 feet until the" +
        ' spell ends.</p>',
      ru:
        '<p>Вы касаетесь существа. Пока заклинание активно, скорость существа' +
        ' увеличивается на 10 фт.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'TOUCH',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'A pinch of dirt',
      ru: 'Щепотка земли',
    },
    duration: 'ONE_HOUR',
    tags: ['BUFF', 'MOVEMENT'],
    classes: ['BARD', 'DRUID', 'RANGER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Mage Armor',
      ru: 'Доспехи мага',
    },
    level: 'LEVEL_1',
    school: 'ABJURATION',
    description: {
      en:
        "<p>You touch a willing creature who isn't wearing armor, and a protective" +
        " magical force surrounds it until the spell ends. The target's base AC" +
        ' becomes 13 + its Dexterity modifier. The spell ends if the target dons' +
        ' armor or if you dismiss the spell as an action.</p>',
      ru:
        '<p>Вы касаетесь согласного существа, не носящего доспех, и на время действия' +
        ' заклинания его окутывает защитное магическое поле. Базовый КД существа' +
        ' становится равен 13 + его модификатор Ловкости. Заклинание оканчивается,' +
        ' если цель надевает доспех или вы оканчиваете его действием.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'TOUCH',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'A piece of cured leather',
      ru: 'Кусочек выделанной кожи',
    },
    duration: 'EIGHT_HOURS',
    tags: ['BUFF', 'WARDING'],
    classes: ['SORCERER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Magic Missile',
      ru: 'Волшебная стрела',
    },
    level: 'LEVEL_1',
    school: 'EVOCATION',
    description: {
      en:
        '<p>You create three glowing darts of magical force. Each dart hits a creature' +
        ' of your choice that you can see within range. A dart deals 1d4 + 1 force' +
        ' damage to its target. The darts all strike simultaneously, and you can' +
        ' direct them to hit one creature or several.</p>',
      ru:
        '<p>Вы создаете три светящихся дротика из магической силы. Каждый дротик' +
        ' попадает в существо на ваш выбор, видимое в пределах дистанции. Каждый' +
        ' дротик причиняет урон силовым полем 1к4 + 1. Все дротики атакуют' +
        ' одновременно, и вы можете направить их как в одно существо, так и в' +
        ' разных.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 120,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    damageType: 'FORCE',
    damageDice: {
      quantity: 1,
      dice: 'D4',
    },
    atHigherSlots: {
      en:
        'When you cast this spell using a spell slot of 2nd level or higher, the spell' +
        ' creates one more dart for each slot level above 1st.',
      ru:
        'Если вы накладываете это заклинание, используя ячейку 2 уровня или выше,' +
        ' заклинание создает по одному дополнительному дротику за каждый уровень' +
        ' ячейки выше первого.',
    },
    duration: 'INSTANTANEOUS',
    tags: ['DAMAGE'],
    classes: ['SORCERER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Protection from Good and Evil',
      ru: 'Защита от добра и зла',
    },
    level: 'LEVEL_1',
    school: 'ABJURATION',
    description: {
      en:
        '<p>Until the spell ends, one willing creature you touch is protected against' +
        ' certain types of creatures: aberrations, celestials, elementals, fey,' +
        ' fiends, and undead.</p><p>The protection grants several benefits.' +
        ' Creatures of those types have disadvantage on attack rolls against the' +
        " target. The target also can't be charmed, frightened, or possessed by them." +
        ' If the target is already charmed, frightened, or possessed by such a' +
        ' creature, the target has advantage on any new saving throw against the' +
        ' relevant effect.</p>',
      ru:
        '<p>Пока заклинание активно, одно согласное существо, которого вы коснулись,' +
        ' защищено от определенного вида существ: аберрации, исчадия, небожители,' +
        ' нежить, феи или элементали.</p><p>Защита предоставляет несколько' +
        ' преимуществ. Существа выбранного вида совершают с помехой броски атаки по' +
        ' цели. Цель также не может быть очарована, испугана и одержима ими. Если' +
        ' цель уже очарована, испугана или одержима таким существом, цель' +
        ' совершает последующие спасброски от таких эффектов с преимуществом.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'TOUCH',
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'Holy water or powdered silver and iron, which the spell consumes',
      ru: 'Святая вода или порошок серебра и железа, расходуемые заклинанием',
    },
    duration: 'TEN_MINUTES',
    tags: ['BUFF', 'DEBUFF', 'WARDING'],
    classes: ['CLERIC', 'PALADIN', 'WARLOCK', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Purify Food and Drink',
      ru: 'Очищение пищи и питья',
    },
    level: 'LEVEL_1',
    school: 'TRANSMUTATION',
    description: {
      en:
        '<p>All nonmagical food and drink within a 5-foot-radius sphere centered on a' +
        ' point of your choice within range is purified and rendered free of poison' +
        ' and disease.</p>',
      ru:
        '<p>Вся немагическая еда и питьё в пределах сферы с радиусом 5 фт. с центром' +
        ' на точке, выбранной вами в пределах дистанции, очищается и избавляется от' +
        ' ядов и болезней.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 10,
      unit: 'FEET',
    },
    // area: {
    //   value: 5,
    //   unit: "FEET",
    //   type: SPHERE,
    // },
    isConcentration: false,
    isRitual: true,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    duration: 'INSTANTANEOUS',
    tags: ['UTILITY'],
    classes: ['CLERIC', 'DRUID', 'PALADIN'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Sanctuary',
      ru: 'Убежище',
    },
    level: 'LEVEL_1',
    school: 'ABJURATION',
    description: {
      en:
        '<p>You ward a creature within range against attack. Until the spell ends, any' +
        ' creature who targets the warded creature with an attack or a harmful spell' +
        ' must first make a Wisdom saving throw. On a failed save, the creature must' +
        " choose a new target or lose the attack or spell. This spell doesn't" +
        ' protect the warded creature from area effects, such as the explosion of a' +
        ' fireball.</p><p>If the warded creature makes an attack, casts a spell that' +
        ' affects an enemy, or deals damage to another creature, this spell ends.</p>',
      ru:
        '<p>Вы защищаете одно существо в пределах дистанции от атаки. Пока заклинание' +
        ' активно, все существа, нацеливающиеся на защищённое существо атаками или' +
        ' вредоносными заклинаниями, должны вначале совершить спасбросок Мудрости.' +
        ' При провале существо должно выбрать новую цель или потеряет атаку или' +
        ' заклинание. Это заклинание не защищает от эффектов, действующих на' +
        ' площадь, таких как взрыв огненного шара.</p><p>Если защищённое существо' +
        ' совершает атаку или накладывает заклинание, оказывающее действие на' +
        ' враждебное существо, это заклинание оканчивается.</p>',
    },
    castingTime: 'BONUS_ACTION',
    range: {
      value: 30,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    saveRequired: 'WISDOM',
    materials: {
      en: 'A small silver mirror',
      ru: 'Маленькое серебряное зеркало',
    },
    duration: 'ONE_MINUTE',
    tags: ['BUFF', 'WARDING'],
    classes: ['CLERIC'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Shield',
      ru: 'Щит',
    },
    level: 'LEVEL_1',
    school: 'ABJURATION',
    description: {
      en:
        '<p>An invisible barrier of magical force appears and protects you. Until the' +
        ' start of your next turn, you have a +5 bonus to AC, including against the' +
        ' triggering attack, and you take no damage from magic missile.</p>',
      ru:
        '<p>Невидимый барьер из магической силы появляется, защищая вас. Вы получаете' +
        ' до начала своего следующего хода бонус +5 к КД, в том числе и против' +
        ' вызвавшей срабатывание атаки, и вы не получаете урон от волшебной стрелы.</p>',
    },
    castingTime: 'REACTION',
    // notes: {
    //   castingTime: {
    //     en: 'Which you take when you are hit by an attack or targeted by the magic
    //     missile spell',
    //     ru: 'Совершаемая, когда по вам попадает атака или вы становитесь целью
    //     волшебной стрелы'
    //   }
    // },
    range: {
      value: 0,
      unit: 'SELF',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    duration: 'ONE_ROUND',
    tags: ['WARDING'],
    classes: ['SORCERER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Shield of Faith',
      ru: 'Щит веры',
    },
    level: 'LEVEL_1',
    school: 'ABJURATION',
    description: {
      en:
        '<p>A shimmering field appears and surrounds a creature of your choice within' +
        ' range, granting it a +2 bonus to AC for the duration.</p>',
      ru:
        '<p>Мерцающее поле появляется, окружая выбранное вами существо в пределах' +
        ' дистанции, даруя ему на время длительности бонус +2 к КД.</p>',
    },
    castingTime: 'BONUS_ACTION',
    range: {
      value: 60,
      unit: 'FEET',
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'A small parchment with a bit of holy text written on it',
      ru: 'Небольшой пергамент со святыми письменами',
    },
    duration: 'TEN_MINUTES',
    tags: ['BUFF', 'WARDING'],
    classes: ['CLERIC', 'PALADIN'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Silent Image',
      ru: 'Безмолвный образ',
    },
    level: 'LEVEL_1',
    school: 'ILLUSION',
    description: {
      en:
        '<p>You create the image of an object, a creature, or some other visible' +
        ' phenomenon that is no larger than a 15-foot cube. The image appears at a' +
        ' spot within range and lasts for the duration. The image is purely visual; it' +
        " isn't accompanied by sound, smell, or other sensory effects.</p><p>You can" +
        ' use your action to cause the image to move to any spot within range. As the' +
        ' image changes location, you can alter its appearance so that its movements' +
        ' appear natural for the image. For example, if you create an image of a' +
        ' creature and move it, you can alter the image so that it appears to be' +
        ' walking.</p><p>Physical interaction with the image reveals it to be an' +
        ' illusion, because things can pass through it. A creature that uses its' +
        ' action to examine the image can determine that it is an illusion with a' +
        ' successful Intelligence (Investigation) check against your spell save DC.' +
        ' If a creature discerns the illusion for what it is, the creature can see' +
        ' through the image.</p>',
      ru:
        '<p>Вы создаете образ предмета, существа или другого видимого явления,' +
        ' помещающийся в объеме в куб с длиной ребра 15 фт. Образ появляется в точке,' +
        ' которую вы видите в пределах дистанции, и существует, пока активно' +
        ' заклинание. Это исключительно зрительная иллюзия, не сопровождаемая' +
        ' звуками, запахами и прочими сенсорными эффектами.</p><p>Вы можете' +
        ' действием заставить образ переместиться в любое место в пределах' +
        ' дистанции. Пока образ меняет местоположение, вы можете изменять его' +
        ' внешность, чтобы перемещение выглядело естественным. Например, если вы' +
        ' создаете образ существа и перемещаете его, вы можете изменить образ, чтобы' +
        ' казалось, что оно идет. Физическое взаимодействие с образом дает понять,' +
        ' что это иллюзия, потому что сквозь него все проходит.</p><p>Существа,' +
        ' исследующие образ действием, могут определить, что это иллюзия, совершив' +
        ' успешную проверку Интеллекта (Анализ) против Сл ваших заклинаний. Если' +
        ' существо распознает иллюзию, оно может видеть сквозь нее.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 60,
      unit: 'FEET',
    },
    // area: {
    //   value: 15,
    //   unit: "FEET",
    //   type: "CUBE"
    // },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'A bit of fleece',
      ru: 'Кусок овечьей шерсти',
    },
    duration: 'TEN_MINUTES',
    tags: ['CONTROL'],
    classes: ['BARD', 'SORCERER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Sleep',
      ru: 'Усыпление',
    },
    level: 'LEVEL_1',
    school: 'ENCHANTMENT',
    description: {
      en:
        '<p>This spell sends creatures into a magical slumber. Roll 5d8; the total is' +
        ' how many hit points of creatures this spell can affect. Creatures within 20' +
        ' feet of a point you choose within range are affected in ascending order of' +
        ' their current hit points (ignoring unconscious creatures).</p><p>Starting' +
        ' with the creature that has the lowest current hit points, each creature' +
        ' affected by this spell falls unconscious until the spell ends, the sleeper' +
        ' takes damage, or someone uses an action to shake or slap the sleeper awake.' +
        " Subtract each creature's hit points from the total before moving on to the" +
        " creature with the next lowest hit points. A creature's hit points must be" +
        ' equal to or less than the remaining total for that creature to be' +
        " affected.</p><p>Undead and creatures immune to being charmed aren't affected" +
        ' by this spell.</p>',
      ru:
        '<p>Это заклинание посылает существ в магический сон. Бросьте 5d8; результат' +
        ' будет количеством хитов существ, на которых это заклинание может' +
        ' подействовать. Существа в пределах 20 фт. от точки, выбранной вами в' +
        ' пределах дистанции, попадают под действие в порядке увеличения их текущих' +
        ' хитов (игнорируя тех, что находятся без сознания).</p><p>Начиная с' +
        ' существа с наименьшим количеством текущих хитов все существа,' +
        ' попадающие под действие этого заклинания, теряют сознание до окончания' +
        ' действия заклинания, пока не получат урон, или пока кто-нибудь другой' +
        ' не разбудит их, потратив действие на тряску или пощечину. Вычитайте' +
        ' хиты каждого существа из общей суммы, после чего переходите к' +
        ' следующему существу с наименьшим числом хитов. Для того чтобы' +
        ' существо попало под действие заклинания, нужно чтобы количество' +
        ' ее текущих хитов не превышало оставшуюся сумму.</p><p>Нежить и' +
        ' существа, обладающие иммунитетом к очарованию, не попадают под' +
        ' действие этого заклинания.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 90,
      unit: 'FEET',
    },
    // area: {
    //   value: 20,
    //   unit: "FEET",
    //   type: "SPHERE"
    // },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'A pinch of fine sand, rose petals, or a cricket',
      ru: 'Щепотка мелкого песка, лепестки розы или сверчок',
    },
    atHigherSlots: {
      en:
        'When you cast this spell using a spell slot of 2nd level or higher, roll an' +
        ' additional 2d8 for each slot level above 1st.',
      ru:
        'Если вы накладываете это заклинание, используя ячейку 2 уровня или выше,' +
        ' бросайте дополнительно 2к8 за каждый уровень ячейки выше первого.',
    },
    duration: 'ONE_MINUTE',
    tags: ['CONTROL'],
    classes: ['BARD', 'SORCERER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Speak with Animals',
      ru: 'Разговор с животными',
    },
    level: 'LEVEL_1',
    school: 'DIVINATION',
    description: {
      en:
        '<p>You gain the ability to comprehend and verbally communicate with beasts' +
        ' for the duration. The knowledge and awareness of many beasts is limited by' +
        ' their intelligence, but at minimum, beasts can give you information about' +
        ' nearby locations and monsters, including whatever they can perceive or have' +
        ' perceived within the past day. You might be able to persuade a beast to' +
        " perform a small favor for you, at the GM's discretion.</p>",
      ru:
        '<p>Вы получаете на время действия заклинания возможность понимать зверей и' +
        ' общаться с ними устно. Знание и сознание многих зверей ограничено их' +
        ' интеллектом, но они как минимум могут дать информацию о ближайших местах и' +
        ' чудовищах, включая тех, кого они видели за последний день. На усмотрение' +
        ' Мастера, вы можете попытаться убедить зверя оказать вам небольшую помощь.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'SELF',
    },
    isConcentration: false,
    isRitual: true,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    duration: 'TEN_MINUTES',
    tags: ['COMMUNICATION', 'SOCIAL'],
    classes: ['BARD', 'DRUID', 'RANGER'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Thunderwave',
      ru: 'Волна грома',
    },
    level: 'LEVEL_1',
    school: 'EVOCATION',
    description: {
      en:
        '<p>A wave of thunderous force sweeps out from you. Each creature in a 15-foot' +
        ' cube originating from you must make a Constitution saving throw. On a' +
        ' failed save, a creature takes 2d8 thunder damage and is pushed 10 feet' +
        ' away from you. On a successful save, the creature takes half as much' +
        " damage and isn't pushed.</p><p>In addition, unsecured objects that are" +
        ' completely within the area of effect are automatically pushed 10 feet' +
        " away from you by the spell's effect, and the spell emits a thunderous boom" +
        ' audible out to 300 feet.</p>',
      ru:
        '<p>От вас исходит волна громовой силы. Все существа в кубе с длиной ребра 15' +
        ' фт., исходящего от вас, должны совершить спасбросок Телосложения. При' +
        ' провале существо получает урон звуком 2к8 и толкается на 10 фт. от вас. При' +
        ' успехе существо получает половину урона и не толкается.</p><p>Кроме того,' +
        ' незакрепленные предметы, оказавшиеся полностью в области эффекта,' +
        ' автоматически толкаются на 10 фт. от вас эффектом заклинания, и заклинание' +
        ' издает громовой рокот, слышимый на расстоянии 300 фт.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'SELF',
    },
    // area: {
    //   value: 15,
    //   unit: "FEET",
    //   type: "CUBE"
    // },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    saveRequired: 'CONSTITUTION',
    damageType: 'THUNDER',
    damageDice: {
      quantity: 2,
      dice: 'D8',
    },
    atHigherSlots: {
      en:
        'When you cast this spell using a spell slot of 2nd level or higher, the' +
        ' damage increases by 1d8 for each slot level above 1st.',
      ru:
        'Если вы накладываете это заклинание, используя ячейку 2 уровня или выше, урон' +
        ' увеличивается на 1d8 за каждый уровень ячейки выше первого.',
    },
    duration: 'INSTANTANEOUS',
    tags: ['DAMAGE', 'CONTROL'],
    classes: ['BARD', 'DRUID', 'SORCERER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Unseen Servant',
      ru: 'Невидимый слуга',
    },
    level: 'LEVEL_1',
    school: 'CONJURATION',
    description: {
      en:
        '<p>This spell creates an invisible, mindless, shapeless, Medium force that' +
        ' performs simple tasks at your command until the spell ends. The servant' +
        ' springs into existence in an unoccupied space on the ground within range. It' +
        " has AC 10, 1 hit point, and a Strength of 2, and it can't attack. If it" +
        ' drops to 0 hit points, the spell ends.</p><p>Once on each of your turns as a' +
        ' bonus action, you can mentally command the servant to move up to 15 feet' +
        ' and interact with an object. The servant can perform simple tasks that a' +
        ' human servant could do, such as fetching things, cleaning, mending, folding' +
        ' clothes, lighting fires, serving food, and pouring wine. Once you give the' +
        ' command, the servant performs the task to the best of its ability until it' +
        ' completes the task, then waits for your next command.</p><p>If you command' +
        ' the servant to perform a task that would move it more than 60 feet away from' +
        ' you, the spell ends.</p>',
      ru:
        '<p>Это заклинание создает невидимую, бессознательную и бесформенную силу,' +
        ' выполняющую отдаваемые вами простые поручения. Слуга появляется в свободном' +
        ' пространстве на земле в пределах дистанции. У него КД 10, 1 хит, Сила 2, и' +
        ' он не может атаковать. Если его хиты опускаются до 0, заклинание' +
        ' оканчивается.</p><p>Один раз в каждом своем ходу вы можете бонусным' +
        ' действием отдать команду слуге переместиться на 15 фт. и совершить' +
        ' манипуляции с каким-нибудь предметом. Слуга может выполнять простые' +
        ' задачи, доступные человеку, такие как подношение предметов, чистка,' +
        ' починка и складывание одежды, разжигание костра, подача пищи и' +
        ' разливание вина. Получив команду, слуга начинает ее выполнять,' +
        ' стараясь изо всех сил, пока не выполнит, после чего начинает ждать' +
        ' вашу следующую команду.</p><p>Если вы отдаете слуге поручение, из-за' +
        ' которого тот окажется дальше чем в 60 футах от вас, заклинание' +
        ' оканчивается.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 60,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: true,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'A bit of string and of wood',
      ru: 'Часть тетивы и кусочек дерева',
    },
    duration: 'ONE_HOUR',
    tags: ['CONTROL'],
    classes: ['BARD', 'WARLOCK', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Acid Arrow',
      ru: 'Мельфова кислотная стрела',
    },
    level: 'LEVEL_2',
    school: 'CONJURATION',
    description: {
      en:
        '<p>A shimmering green arrow streaks toward a target within range and bursts' +
        ' in a spray of acid. Make a ranged spell attack against the target. On a' +
        ' hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at' +
        ' the end of its next turn. On a miss, the arrow splashes the target with acid' +
        ' for half as much of the initial damage and no damage at the end of its next' +
        ' turn.</p>',
      ru:
        '<p>К цели, находящейся в пределах дистанции, устремляется мерцающая зеленая' +
        ' стрела, разлетающаяся брызгами кислоты. Совершите по цели дальнобойную' +
        ' атаку заклинанием. При попадании цель получает единовременно урон кислотой' +
        ' 4к4 и урон кислотой 2к4 в конце своего следующего хода. При промахе' +
        ' стрела немного задевает цель, причиняет половину единовременного урона и' +
        ' в конце следующего хода цель урона не получает.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 90,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'Powdered rhubarb leaf and an adder’s stomach',
      ru: 'Порошок из листьев ревеня и желудок гадюки',
    },
    damageType: 'ACID',
    damageDice: {
      quantity: 4,
      dice: 'D4',
    },
    atHigherSlots: {
      en:
        'When you cast this spell using a spell slot of 3rd level or higher, the' +
        ' damage (both initial and later) increases by 1d4 for each slot level above' +
        ' 2nd.',
      ru:
        'Если вы накладываете это заклинание, используя ячейку 3 уровня или выше, урон' +
        ' (и единовременный и последующий) увеличивается на 1к4 за каждый уровень' +
        ' ячейки выше второго.',
    },
    duration: 'INSTANTANEOUS',
    tags: ['DAMAGE'],
    classes: ['WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Aid',
      ru: 'Подмога',
    },
    level: 'LEVEL_2',
    school: 'ABJURATION',
    description: {
      en:
        '<p>Your spell bolsters your allies with toughness and resolve. Choose up to' +
        " three creatures within range. Each target's hit point maximum and current" +
        ' hit points increase by 5 for the duration.</p>',
      ru:
        '<p>Ваше заклинание наделяет союзников стойкостью и решимостью. Выберите до' +
        ' трёх существ в пределах дистанции. На время длительности максимум хитов и' +
        ' текущие хиты всех целей увеличиваются на 5.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 30,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'A tiny strip of white cloth',
      ru: 'Полоска белой ткани',
    },
    atHigherSlots: {
      en:
        'When you cast this spell using a spell slot of 3rd level or higher, a' +
        " target's hit points increase by an additional 5 for each slot level above" +
        ' 2nd.',
      ru:
        'Если вы накладываете это заклинание, используя ячейку 3 уровня или выше, хиты' +
        ' целей увеличиваются ещё на 5 за каждый уровень ячейки выше второго.',
    },
    duration: 'EIGHT_HOURS',
    tags: ['HEALING', 'BUFF'],
    classes: ['CLERIC', 'PALADIN'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Alter Self',
      ru: 'Смена обличья',
    },
    level: 'LEVEL_2',
    school: 'TRANSMUTATION',
    description: {
      en:
        '<p>You assume a different form. When you cast the spell, choose one of the' +
        ' following options, the effects of which last for the duration of the spell.' +
        ' While the spell lasts, you can end one option as an action to gain the' +
        ' benefits of a different one.</p><p><b>Aquatic Adaptation.</b> You adapt' +
        ' your body to an aquatic environment, sprouting gills and growing webbing' +
        ' between your fingers. You can breathe underwater and gain a swimming speed' +
        ' equal to your walking speed.</p><p><b>Change Appearance.</b> You transform' +
        ' your appearance. You decide what you look like, including your height,' +
        ' weight, facial features, sound of your voice, hair length, coloration, and' +
        ' distinguishing characteristics, if any. You can make yourself appear as a' +
        ' member of another race, though none of your statistics change. You also' +
        " can't appear as a creature of a different size than you, and your basic" +
        " shape stays the same; if you're bipedal, you can't use this spell to" +
        ' become quadrupedal, for instance. At any time for the duration of the spell,' +
        ' you can use your action to change your appearance in this way' +
        ' again.</p><p><b>Natural Weapons.</b> You grow claws, fangs, spines, horns,' +
        ' or a different natural weapon of your choice. Your unarmed strikes deal' +
        ' 1d6 bludgeoning, piercing, or slashing damage, as appropriate to the' +
        ' natural weapon you chose, and you are proficient with your unarmed' +
        ' strikes. Finally, the natural weapon is magic and you have a +1 bonus' +
        ' to the attack and damage rolls you make using it.</p>',
      ru:
        '<p>Вы принимаете другой облик. При накладывании выберите один из' +
        ' представленных ниже вариантов, эффект от которого будет длиться всю' +
        ' длительность заклинания. Пока заклинание активно, вы можете действием' +
        ' окончить один эффект, чтобы получить преимущества' +
        ' другого.</p><p><b>Адаптация к воде.</b> Вы приспосабливаете свое тело к' +
        ' существованию в воде, отращивая жабры и перепонки между пальцами. Вы' +
        ' можете дышать под водой и получаете скорость плавания, равную скорости' +
        ' хождения.</p><p><b>Изменение внешности.</b> Вы изменяете свою' +
        ' внешность. Вы сами решаете, на кого будете походить, включая рост,' +
        ' вес, лицо, звук голоса, длину волос, цвета и отличительные' +
        ' характеристики. Вы можете стать похожим на представителя другой' +
        ' расы, но ваши показатели не изменяются. Вы также не можете' +
        ' выглядеть как существо другой категории размера, и ваше тело' +
        ' остается примерно тем же самым; например, это заклинание не' +
        ' сделает вас четырехногим. Пока заклинание активно, вы можете' +
        ' действием изменять свою внешность.</p><p><b>Естественное' +
        ' оружие.</b> Вы отращиваете когти, клыки, шипы, рога или' +
        ' другое естественное оружие на свой выбор. Ваш безоружный' +
        ' удар причиняет дробящий, колющий или рубящий урон 1к6, в' +
        ' зависимости от выбранного вами оружия, и вы владеете' +
        ' безоружными ударами. Это оружие будет магическим, и вы получаете бонус +1 к' +
        ' броскам атаки и урона им.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'SELF',
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    duration: 'ONE_HOUR',
    tags: ['SHAPECHANGING'],
    classes: ['SORCERER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Arcane Lock',
      ru: 'Волшебный замок',
    },
    level: 'LEVEL_2',
    school: 'ABJURATION',
    description: {
      en:
        '<p>You touch a closed door, window, gate, chest, or other entryway, and it' +
        ' becomes locked for the duration. You and the creatures you designate when' +
        ' you cast this spell can open the object normally. You can also set a' +
        ' password that, when spoken within 5 feet of the object, suppresses this' +
        ' spell for 1 minute. Otherwise, it is impassable until it is broken or the' +
        ' spell is dispelled or suppressed. Casting knock on the object suppresses' +
        ' arcane lock for 10 minutes.</p><p>While affected by this spell, the object' +
        ' is more difficult to break or force open; the DC to break it or pick any' +
        ' locks on it increases by 10.</p>',
      ru:
        '<p>Вы касаетесь закрытой двери, окна, ворот, сундука или другого входа, и он' +
        ' становится запертым. Вы и указанные при накладывании этого заклинания' +
        ' существа можете открывать предмет как обычно. Вы можете также установить' +
        ' пароль, произношение которого в пределах 5 фт. от предмета подавляет' +
        ' заклинание на 1 минуту. В противном случае предмет не открывается, пока' +
        ' его не сломают, или пока заклинание не рассеют или не подавят.' +
        ' Накладывание открывания на предмет подавляет волшебный замок на 10' +
        ' минут.</p><p>Находящийся под действием этого заклинания предмет' +
        ' гораздо сложнее взломать и открыть силой; Сл выламывания и взлома' +
        ' замков увеличивается на 10.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'TOUCH',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'Gold dust worth at least 25 gp, which the spell consumes',
      ru: 'Золотая пыль, стоящая как минимум 25 зм, расходуемая заклинанием',
    },
    duration: 'UNTIL_DISPELLED',
    tags: ['UTILITY', 'WARDING'],
    classes: ['WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Animal Messenger',
      ru: 'Почтовое животное',
    },
    level: 'LEVEL_2',
    school: 'ENCHANTMENT',
    description: {
      en:
        '<p>By means of this spell, you use an animal to deliver a message. Choose a' +
        ' Tiny beast you can see within range, such as a squirrel, a blue jay, or a' +
        ' bat. You specify a location, which you must have visited, and a recipient' +
        ' who matches a general description, such as "a man or woman dressed in the' +
        ' uniform of the town guard" or "a red-haired dwarf wearing a pointed hat."' +
        ' You also speak a message of up to twenty-five words. The target beast' +
        ' travels for the duration of the spell toward the specified location,' +
        ' covering about 50 miles per 24 hours for a flying messenger, or 25 miles' +
        ' for other animals.</p><p>When the messenger arrives, it delivers your message' +
        ' to the creature that you described, replicating the sound of your voice. The' +
        ' messenger speaks only to a creature matching the description you gave. If' +
        " the messenger doesn't reach its destination before the spell ends, the" +
        ' message is lost, and the beast makes its way back to where you cast this' +
        ' spell.</p>',
      ru:
        '<p>При помощи этого заклинания вы передаёте через животное сообщение.' +
        ' Выберите Крохотного зверя, которого видите в пределах дистанции, такого как' +
        ' белку, сойку или летучую мышь. Вы указываете место, которое когда-то уже' +
        ' посещали, и получателя, описывая его признаки, такие как «мужчина или' +
        ' женщина в униформе городской стражи» или «рыжий дварф в остроконечной' +
        ' шляпе». Вы также произносите сообщение длиной не более 25 слов. Зверь в' +
        ' течение длительности заклинания двигается в указанное место, покрывая' +
        ' примерно 50 миль за 24 часа при полёте или 25 миль при других видах' +
        ' перемещения.</p><p>Прибыв на место, зверь передаёт ваше сообщение' +
        ' описанному вами существу, изображая звук вашего голоса. Зверь передаст' +
        ' послание только существу, подходящему данному вами описанию. Если зверь' +
        ' не достигнет места до окончания действия заклинания, сообщение будет' +
        ' утеряно, а зверь начнёт возвращаться к тому месту, где вы наложили на' +
        ' него заклинание.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 30,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: true,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'A morsel of food',
      ru: 'Кусочек пищи',
    },
    atHigherSlots: {
      en:
        'If you cast this spell using a spell slot of 3rd level or higher, the' +
        ' duration of the spell increases by 48 hours for each slot level above 2nd.',
      ru:
        'Если вы накладываете это заклинание, используя ячейку 3 уровня или выше, его' +
        ' длительность увеличивается на 48 часов за каждый уровень ячейки выше второго.',
    },
    duration: 'TWENTYFOUR_HOURS',
    tags: ['COMMUNICATION', 'SOCIAL'],
    classes: ['BARD', 'DRUID', 'RANGER'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: "Arcanist's Magic Aura",
      ru: 'Нистулова ложная магия',
    },
    level: 'LEVEL_2',
    school: 'ILLUSION',
    description: {
      en:
        '<p>You place an illusion on a creature or an object you touch so that' +
        ' divination spells reveal false information about it. The target can be a' +
        " willing creature or an object that isn't being carried or worn by another" +
        ' creature.</p><p>When you cast the spell, choose one or both of the following' +
        ' effects. The effect lasts for the duration. If you cast this spell on the' +
        ' same creature or object every day for 30 days, placing the same effect on it' +
        ' each time, the illusion lasts until it is dispelled.</p><p><b>False' +
        ' Aura.</b> You change the way the target appears to spells and magical' +
        ' effects, such as detect magic, that detect magical auras. You can make a' +
        ' nonmagical object appear magical, a magical object appear nonmagical, or' +
        " change the object's magical aura so that it appears to belong to a specific" +
        ' school of magic that you choose. When you use this effect on an object, you' +
        ' can make the false magic apparent to any creature that handles the' +
        ' item.</p><p><b>Mask.</b> You change the way the target appears to spells' +
        " and magical effects that detect creature types, such as a paladin's" +
        ' Divine Sense or the trigger of a symbol spell. You choose a creature' +
        ' type and other spells and magical effects treat the target as if it' +
        ' were a creature of that type or of that alignment.</p>',
      ru:
        '<p>Вы помещаете иллюзию на существо или предмет, которого касаетесь, чтобы' +
        ' заклинания школы Прорицания получали о нем ложную информацию. Целью может' +
        ' быть согласное существо или предмет, не несомый и не носимый другим' +
        ' существом.</p><p>При накладывании этого заклинания выберите один из' +
        ' описанных ниже эффектов или сразу оба. Эффект длится, пока активно' +
        ' заклинание. Если вы накладываете это заклинание на одно и то же' +
        ' существо или предмет каждый день в течение 30 дней, используя один и' +
        ' тот же эффект, иллюзия начинает длиться, пока не будет' +
        ' рассеяна.</p><p><b>Ложная аура.</b> Вы меняете то, как цель' +
        ' представляется для заклинаний и магических эффектов, таких как' +
        ' обнаружение магии, сканирующих магическую ауру. Вы можете' +
        ' немагический предмет заставить выглядеть магическим, магический' +
        ' предмет заставить выглядеть немагическим, или изменить' +
        ' магическую ауру предмета, чтобы казалось, что находящаяся в нем' +
        ' магия принадлежит другой школе магии, выбранной вами. Если вы' +
        ' использовали этот эффект на предмете, можете сделать так, что' +
        ' новая магия будет сразу видна существу, держащему его в' +
        ' руках.</p><p><b>Маскировка.</b> Вы меняете то, как цель' +
        ' представляется для заклинаний и магических эффектов, определяющих вид' +
        ' существ, таких как Божественное чувство паладина и триггер заклинания знак.' +
        ' Вы выбираете вид существа, и все заклинания и магические эффекты будут' +
        ' считать, что цель принадлежит этому виду или имеет это мировоззрение.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'TOUCH',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'A small square of silk',
      ru: 'Небольшой лоскут шелка',
    },
    duration: 'TWENTYFOUR_HOURS',
    tags: ['DECEPTION'],
    classes: ['WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Augury',
      ru: 'Гадание',
    },
    level: 'LEVEL_2',
    school: 'DIVINATION',
    description: {
      en:
        '<p>By casting gem-inlaid sticks, rolling dragon bones, laying out ornate' +
        ' cards, or employing some other divining tool, you receive an omen from an' +
        ' otherworldly entity about the results of a specific course of action that' +
        ' you plan to take within the next 30 minutes. The DM chooses from the' +
        ' following possible omens:</p><p><ul><li><b>Weal</b>, for good' +
        ' results</li><li><b>Woe</b>, for bad results</li><li><b>Nothing</b>, for' +
        " results that aren't especially good or bad</li></ul></p><p>The spell" +
        " doesn't take into account any possible circumstances that might change the" +
        ' outcome, such as the casting of additional spells or the loss or gain of' +
        ' a companion.</p><p>If you cast the spell two or more times before' +
        ' completing your next long rest, there is a cumulative 25 percent chance' +
        ' for each casting after the first that you get a random reading. The DM' +
        ' makes this roll in secret.</p>',
      ru:
        '<p>Подбрасывая инкрустированные камнями палочки, драконьи кости, раскладывая' +
        ' карты или используя другие инструменты для ворожбы, вы получаете знамение' +
        ' от иномировой сущности о результатах особого действия, которое вы' +
        ' планируете совершить в течение следующих 30 минут. Мастер выбирает одно' +
        ' из следующих возможных знамений:</p><p><ul><li><b>Благо</b>, для хороших' +
        ' результатов</li><li><b>Горе</b>, для плохих' +
        ' результатов</li><li><b>Благо и горе</b>, для результатов, одновременно' +
        ' хороших и плохих</li><li><b>Ничто</b>, для результатов, которые и не' +
        ' хорошие и не плохие</li></ul></p><p>Заклинание не принимает в расчёт' +
        ' обстоятельства, способные изменить исход, такие как накладывание' +
        ' дополнительных заклинаний или потерю или обретение спутников.</p><p>Если вы' +
        ' накладываете это заклинание несколько раз до завершения продолжительного' +
        ' отдыха, существует накопительный шанс 25 процентов за каждое' +
        ' использование, начиная со второго, что вы получите случайный ответ.' +
        ' Мастер совершает этот бросок скрытно.</p>',
    },
    castingTime: 'ONE_MINUTE',
    range: {
      value: 0,
      unit: 'SELF',
    },
    isConcentration: false,
    isRitual: true,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'Specially marked sticks, bones, or similar tokens worth at least 25 gp',
      ru: 'Особые палочки, костяшки или фигурки с отметинами, стоящие как минимум 25 зм',
    },
    duration: 'INSTANTANEOUS',
    tags: ['FOREKNOWLEDGE'],
    classes: ['CLERIC'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Barkskin',
      ru: 'Дубовая кора',
    },
    level: 'LEVEL_2',
    school: 'TRANSMUTATION',
    description: {
      en:
        "<p>You touch a willing creature. Until the spell ends, the target's skin has" +
        " a rough, bark-like appearance, and the target's AC can't be less than 16," +
        ' regardless of what kind of armor it is wearing.</p>',
      ru:
        '<p>Вы касаетесь согласного существа. Пока заклинание активно, кожа цели' +
        ' становится грубой и похожей внешне на кору дуба, а КД не может быть ниже' +
        ' 16, вне зависимости от надетых доспехов.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'TOUCH',
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'A handful of oak bark',
      ru: 'Пригоршня дубовой коры',
    },
    duration: 'ONE_HOUR',
    tags: ['BUFF', 'WARDING'],
    classes: ['DRUID', 'RANGER'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Blindness/Deafness',
      ru: 'Глухота/слепота',
    },
    level: 'LEVEL_2',
    school: 'NECROMANCY',
    description: {
      en:
        '<p>You can blind or deafen a foe. Choose one creature that you can see within ' +
        'range to make a Constitution saving throw. If it fails, the target is either ' +
        'blinded or deafened (your choice) for the duration. At the end of each of its ' +
        'turns, the target can make a Constitution saving throw. On a success, the ' +
        'spell ends.</p>',
      ru:
        '<p>Вы можете ослепить врага или сделать его глухим. Выберите одно существо, ' +
        'которое видите в пределах дистанции, которое тут же совершает спасбросок ' +
        'Телосложения. В случае провала цель становится на время действия заклинания ' +
        'ослепшей или оглохшей (на ваш выбор). В конце каждого своего хода цель может ' +
        'совершать спасбросок Телосложения. В случае успеха заклинание оканчивается.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 30,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: false,
      material: false,
    },
    duration: 'ONE_MINUTE',
    saveRequired: 'CONSTITUTION',
    atHigherSlots: {
      en:
        'When you cast this spell using a spell slot of 3rd level or higher, you can ' +
        'target one additional creature for each slot level above 2nd.',
      ru:
        'Если вы накладываете это заклинание, используя ячейку 3 уровня или выше, вы ' +
        'можете сделать целью одно дополнительное существо за каждый уровень ячейки ' +
        'выше второго.',
    },
    tags: ['DEBUFF'],
    classes: ['BARD', 'CLERIC', 'SORCERER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Blur',
      ru: 'Размытый образ',
    },
    level: 'LEVEL_2',
    school: 'ILLUSION',
    description: {
      en:
        '<p>Your body becomes blurred, shifting and wavering to all who can see you.' +
        ' For the duration, any creature has disadvantage on attack rolls against you.' +
        " An attacker is immune to this effect if it doesn't rely on sight, as with" +
        ' blindsight, or can see through illusions, as with truesight.</p>',
      ru:
        '<p>Ваше тело становится размытым и колышущимся для всех, кто видит вас. Пока' +
        ' заклинание активно, все существа совершают по вам броски атаки с помехой.' +
        ' Атакующий получает иммунитет к этому эффекту, если полагается не на зрение,' +
        ' а, например, на слепое зрение, или может видеть сквозь иллюзии, например, с' +
        ' помощью истинного зрения.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'SELF',
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: false,
      material: false,
    },
    duration: 'ONE_MINUTE',
    tags: ['DECEPTION', 'WARDING'],
    classes: ['SORCERER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Branding Smite',
      ru: 'Клеймящая кара',
    },
    level: 'LEVEL_2',
    school: 'EVOCATION',
    description: {
      en:
        '<p>The next time you hit a creature with a weapon attack before this spell' +
        ' ends, the weapon gleams with astral radiance as you strike. The attack deals' +
        ' an extra 2d6 radiant damage to the target, which becomes visible if it is' +
        ' invisible, and the target sheds dim light in a 5-foot radius and can’t' +
        ' become invisible until the spell ends.</p>',
      ru:
        '<p>Когда вы в следующий раз попадёте по существу атакой рукопашным оружием,' +
        ' пока заклинание активно, ваше оружие испускает астральное сияние. Атака' +
        ' причиняет цели дополнительный урон излучением 2к6. Цель становится видимой,' +
        ' если была невидима, начинает испускать тусклый свет в пределах 5 фт., и не' +
        ' может стать невидимой, пока активно это заклинание.</p>',
    },
    castingTime: 'BONUS_ACTION',
    range: {
      value: 0,
      unit: 'SELF',
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: false,
      material: false,
    },
    duration: 'ONE_MINUTE',
    damageType: 'RADIANT',
    damageDice: {
      quantity: 2,
      dice: 'D6',
    },
    atHigherSlots: {
      en:
        'When you cast this spell using a spell slot of 3rd level or higher, the' +
        ' extra damage increases by 1d6 for each slot level above 2nd.',
      ru:
        'Если вы накладываете это заклинание, используя ячейку 3 уровня или выше,' +
        ' дополнительный урон увеличивается на 1к6 за каждый уровень ячейки выше второй.',
    },
    tags: ['DAMAGE', 'CONTROL'],
    classes: ['PALADIN'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Calm Emotions',
      ru: 'Умиротворение',
    },
    level: 'LEVEL_2',
    school: 'ENCHANTMENT',
    description: {
      en:
        '<p>You attempt to suppress strong emotions in a group of people. Each' +
        ' humanoid in a 20-foot-radius sphere centered on a point you choose within' +
        ' range must make a Charisma saving throw; a creature can choose to fail this' +
        ' saving throw if it wishes. If a creature fails its saving throw, choose one' +
        ' of the following two effects.</p><p>You can suppress any effect causing a' +
        ' target to be charmed or frightened. When this spell ends, any suppressed' +
        ' effect resumes, provided that its duration has not expired in the meantime.' +
        '</p><p>Alternatively, you can make a target indifferent about creatures of' +
        ' your choice that it is hostile toward. This indifference ends if the target' +
        ' is attacked or harmed by a spell or if it witnesses any of its friends being' +
        ' harmed. When the spell ends, the creature becomes hostile again, unless the' +
        ' DM rules otherwise.</p>',
      ru:
        '<p>Вы пытаетесь подавить сильные эмоции у группы существ. Все гуманоиды в' +
        ' сфере с радиусом 20 фт. с центром в точке, выбранной в пределах дистанции,' +
        ' должны совершить спасбросок Харизмы; существо может добровольно провалить' +
        ' этот спасбросок, если пожелает. Если существо проваливает спасбросок,' +
        ' выберите один из двух описанных ниже эффектов:</p><p>Вы можете подавить все' +
        ' эффекты, делающие цель очарованной или испуганной. Когда это заклинание' +
        ' оканчивается, все подавленные эффекты восстанавливаются, при условии, что за' +
        ' это время их действие не окончилось.</p><p>В качестве альтернативы, вы можете' +
        ' сделать цель безразличной к выбранным вами существам, к которым она' +
        ' относилась враждебно. Это безразличие оканчивается, если цель атакована или' +
        ' ей причинён вред заклинанием, или если она станет свидетелем того, как' +
        ' причиняют вред её друзьям. Когда заклинание оканчивается, существо' +
        ' становится вновь враждебным, если Мастер не решит по-другому.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 60,
      unit: 'FEET',
    },
    // area: {
    //   value: 20,
    //   unit: 'FEET',
    //   type: 'SPHERE'
    // },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    saveRequired: 'CHARISMA',
    duration: 'ONE_MINUTE',
    tags: ['SOCIAL'],
    classes: ['BARD', 'CLERIC'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Continual Flame',
      ru: 'Вечный огонь',
    },
    level: 'LEVEL_2',
    school: 'EVOCATION',
    description: {
      en:
        '<p>A flame, equivalent in brightness to a torch, springs forth from an object' +
        ' that you touch. The effect looks like a regular flame, but it creates no' +
        " heat and doesn't use oxygen. A continual flame can be covered or hidden but" +
        ' not smothered or quenched.</p>',
      ru:
        '<p>Из предмета, которого вы касаетесь, исходит пламя, эквивалентное по' +
        ' яркости пламени факела. Эффект выглядит как обычное пламя, но не создает' +
        ' тепла и не использует кислород. Вечный огонь можно накрыть или спрятать, но' +
        ' не потушить.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'TOUCH',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    duration: 'UNTIL_DISPELLED',
    materials: {
      en: 'Ruby dust worth 50 gp, which the spell consumes',
      ru: 'Порошок рубина на 50 зм, расходуемый заклинанием',
    },
    tags: ['CREATION'],
    classes: ['CLERIC', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Darkness',
      ru: 'Тьма',
    },
    level: 'LEVEL_2',
    school: 'EVOCATION',
    description: {
      en:
        '<p>Magical darkness spreads from a point you choose within range to fill a' +
        ' 15-foot-radius sphere for the duration. The darkness spreads around' +
        " corners. A creature with darkvision can't see through this darkness, and" +
        " nonmagical light can't illuminate it.</p><p>If the point you choose is on an" +
        " object you are holding or one that isn't being worn or carried, the darkness" +
        ' emanates from the object and moves with it. Completely covering the source' +
        ' of the darkness with an opaque object, such as a bowl or a helm, blocks the' +
        " darkness.</p><p>If any of this spell's area overlaps with an area of light" +
        ' created by a spell of 2nd level or lower, the spell that created the light' +
        ' is dispelled.</p>',
      ru:
        '<p>Из точки, выбранной вами в пределах дистанции, расползается магическая' +
        ' тьма сферой с радиусом 15 фт. Тьма огибает углы. Существа с темным зрением' +
        ' не могут видеть сквозь эту тьму, и немагический свет не может ее' +
        ' осветить.</p><p>Если выбранная вами точка находится на предмете, который вы' +
        ' держите, несете или носите, тьма исходит из предмета и перемещается вместе с' +
        ' ним. Если полностью накрыть источник тьмы непрозрачным предметом, например,' +
        ' чашей или шлемом, тьма будет заблокирована.</p><p>Если часть зоны этого' +
        ' заклинания накрывает зону света, созданного заклинанием с уровнем не выше 2,' +
        ' заклинание, создавшее свет, рассеивается.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 60,
      unit: 'FEET',
    },
    // area: {
    //   value: 15,
    //   unit: 'FEET',
    //   type: 'SPHERE',
    // },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: false,
      material: true,
    },
    duration: 'TEN_MINUTES',
    materials: {
      en: 'Bat fur and a drop of pitch or piece of coal',
      ru: 'Мех летучей мыши и либо капля дегтя, либо кусочек угля',
    },
    tags: ['CONTROL'],
    classes: ['SORCERER', 'WARLOCK', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Darkvision',
      ru: 'Темное зрение',
    },
    level: 'LEVEL_2',
    school: 'TRANSMUTATION',
    description: {
      en:
        '<p>You touch a willing creature to grant it the ability to see in the dark.' +
        'For the duration, that creature has darkvision out to a range of 60 feet.</p>',
      ru:
        '<p>Вы касаетесь согласного существа и даруете ему возможность видеть в' +
        ' темноте. Пока заклинание активно, это существо обладает темным зрением в' +
        ' пределах 60 фт.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'TOUCH',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    duration: 'EIGHT_HOURS',
    materials: {
      en: 'Either a pinch of dried carrot or an agate',
      ru: 'Щепотка сушеной морковки или агат',
    },
    tags: ['BUFF'],
    classes: ['DRUID', 'RANGER', 'SORCERER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Detect Thoughts',
      ru: 'Обнаружение мыслей',
    },
    level: 'LEVEL_2',
    school: 'DIVINATION',
    description: {
      en:
        '<p>For the duration, you can read the thoughts of certain creatures. When you' +
        ' cast the spell and as your action on each turn until the spell ends, you can' +
        ' focus your mind on any one creature that you can see within 30 feet of you.' +
        " If the creature you choose has an Intelligence of 3 or lower or doesn't" +
        ' speak any language, the creature is unaffected.</p><p>You initially learn' +
        ' the surface thoughts of the creature--what is most on its mind in that' +
        ' moment. As an action, you can either shift your attention to another' +
        " creature's thoughts or attempt to probe deeper into the same creature's" +
        ' mind. If you probe deeper, the target must make a Wisdom saving throw. If it' +
        ' fails, you gain insight into its reasoning (if any), its emotional state,' +
        ' and something that looms large in its mind (such as something it worries' +
        ' over, loves, or hates). If it succeeds, the spell ends. Either way, the' +
        ' target knows that you are probing into its mind, and unless you shift your' +
        " attention to another creature's thoughts, the creature can use its action" +
        ' on its turn to make an Intelligence check contested by your Intelligence' +
        ' check; if it succeeds, the spell ends.</p><p>Questions verbally directed at' +
        ' the target creature naturally shape the course of its thoughts, so this' +
        ' spell is particularly effective as part of an interrogation.</p><p>You can' +
        " also use this spell to detect the presence of thinking creatures you can't" +
        ' see. When you cast the spell or as your action during the duration, you can' +
        ' search for thoughts within 30 feet of you. The spell can penetrate barriers,' +
        ' but 2 feet of rock, 2 inches of any metal other than lead, or a thin sheet' +
        " of lead blocks you. You can't detect a creature with an Intelligence of 3" +
        " or lower or one that doesn't speak any language.</p><p>Once you detect the" +
        ' presence of a creature in this way, you can read its thoughts for the rest' +
        " of the duration as described above, even if you can't see it, but it must" +
        ' still be within range.</p>',
      ru:
        '<p>Пока заклинание активно, вы можете читать мысли некоторых существ. Если вы' +
        ' сотворили это заклинание, и в свой ход совершаете действие, вы можете' +
        ' сосредоточиться на одном существе, которое видите в пределах 30 фт. Если у' +
        ' выбранного существа Интеллект равен 3 или ниже, или если оно не может' +
        ' говорить ни на одном языке, оно не попадает под действие' +
        ' заклинания.</p><p>Вначале вы знаете поверхностные мысли существа — то, что' +
        ' находится в его сознании на' +
        ' текущий момент. Вы можете действием либо перенести внимание на мысли другого' +
        ' существа, либо попытаться углубиться в мысли текущего существа. Если вы' +
        ' погружаетесь глубже, цель должна совершить спасбросок Мудрости. В случае' +
        ' провала вы получаете понимание ее мыслей (если есть), ее эмоционального' +
        ' состояния, и того, что ее больше всего заботит (а также то, что она любит и' +
        ' ненавидит). Если существо преуспеет, заклинание оканчивается. В любом' +
        ' случае, цель знает, что вы прощупывали ее сознание, и если вы не перевели' +
        ' внимание на мысли другого существа, предыдущее существо может в свой ход' +
        ' действием совершить проверку Интеллекта, противопоставленную вашей проверке' +
        ' Интеллекта; в случае успеха заклинание оканчивается.</p><p>Вопросы,' +
        ' задаваемые устно цели, влияют на ход ее мыслей, поэтому это заклинание' +
        ' чрезвычайно эффективно во время допросов.</p><p>Вы можете также использовать' +
        ' это заклинание для обнаружения присутствия мыслящих существ, которых вы не' +
        ' видите. Когда вы накладываете это заклинание, или позже, пока оно активно,' +
        ' потратив действие, вы можете поискать мысли существ в пределах 30 фт.' +
        ' Заклинание проницает большую часть барьеров, но блокируется 2 футами камня,' +
        ' 2 дюймами обычного металла или тонким листом свинца. Вы не можете обнаружить' +
        ' существ с Интеллектом 3 и ниже, а также тех, кто не говорят ни на одном' +
        ' языке.</p><p>Обнаружив таким методом присутствие существа, вы можете до' +
        ' окончания действия заклинания читать его мысли, как описано выше, даже если' +
        ' вы его не видите, но оно должно находиться в пределах дистанции.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'SELF',
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    duration: 'ONE_MINUTE',
    saveRequired: 'WISDOM',
    materials: {
      en: 'A copper piece',
      ru: 'Медная монетка',
    },
    tags: ['SOCIAL', 'DETECTION'],
    classes: ['BARD', 'SORCERER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Enhance Ability',
      ru: 'Улучшение характеристики',
    },
    level: 'LEVEL_2',
    school: 'TRANSMUTATION',
    description: {
      en:
        '<p>You touch a creature and bestow upon it a magical enhancement. Choose' +
        ' one of the following effects; the target gains that effect until the spell' +
        " ends.<ul><li><b>Bear's Endurance.</b> The target has advantage on" +
        ' Constitution checks. It also gains 2d6 temporary hit points, which are lost' +
        " when the spell ends.</li><li><b>Bull's Strength.</b> The target has advantage" +
        ' on Strength checks, and his or her carrying capacity' +
        " doubles.</li><li><b>Cat's Grace.</b> The target has advantage on Dexterity" +
        " checks. It also doesn't take damage from falling 20 feet or less if it isn't" +
        " incapacitated.</li><li><b>Eagle's Splendor.</b> The target has advantage on" +
        " Charisma checks.</li><li><b>Fox's Cunning.</b> The target has advantage on" +
        " Intelligence checks.</li><li><b>Owl's Wisdom.</b> The target has advantage" +
        ' on Wisdom checks.</li></ul></p>',
      ru:
        '<p>Вы касаетесь существа и улучшаете его при помощи магии. Выберите один из' +
        ' следующих эффектов; цель получает этот эффект, пока заклинание' +
        ' активно.<ul><li><b>Бычья сила.</b>Цель совершает с преимуществом проверки' +
        ' Силы, а грузоподъёмность удваивается.</li><li><b>Кошачья ловкость.' +
        '</b> Цель совершает с преимуществом проверки Ловкости. Кроме того, она не' +
        ' получает урон за падение с высоты 20 фт. или меньше, если она дееспособна.' +
        '</li><li><b>Лисья хитрость.</b> Цель совершает с преимуществом проверки' +
        ' Интеллекта.</li><li><b>Медвежья выносливость.</b> Цель совершает с' +
        ' преимуществом проверки Телосложения. Она также получает 2d6 временных хитов,' +
        ' которые исчезают в конце заклинания.</li><li><b>Орлиное великолепие.' +
        '</b> Цель совершает с преимуществом проверки' +
        ' Харизмы.</li><li><b>Совиная мудрость.</b> Цель совершает с преимуществом' +
        ' проверки Мудрости.</li></ul></p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'TOUCH',
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    duration: 'ONE_HOUR',
    materials: {
      en: 'Fur or a feather from a beast',
      ru: 'Мех или перо зверя',
    },
    tags: ['BUFF'],
    classes: ['BARD', 'CLERIC', 'DRUID', 'SORCERER'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Enlarge/Reduce',
      ru: 'Увеличение/уменьшение',
    },
    level: 'LEVEL_2',
    school: 'TRANSMUTATION',
    description: {
      en:
        '<p>You cause a creature or an object you can see within range to grow larger or' +
        ' smaller for the duration. Choose either a creature or an object that is' +
        ' neither worn nor carried. If the target is unwilling, it can make a' +
        ' Constitution saving throw. On a success, the spell has no effect.</p><p>If' +
        ' the target is a creature, everything it is wearing and carrying changes size' +
        ' with it. Any item dropped by an affected creature returns to normal size at' +
        " once.<ul><li><b>Enlarge.</b> The target's size doubles in all dimensions," +
        ' and its weight is multiplied by eight. This growth increases its size by' +
        " one category-- from Medium to Large, for example. If there isn't enough" +
        ' room for the target to double its size, the creature or object attains the' +
        ' maximum possible size in the space available. Until the spell ends, the' +
        ' target also has advantage on Strength checks and Strength saving throws. The' +
        " target's weapons also grow to match its new size. While these weapons are" +
        " enlarged, the target's attacks with them deal 1d4 extra" +
        " damage.</li><li><b>Reduce.</b> The target's size is halved in all" +
        ' dimensions, and its weight is reduced to one-eighth of normal. This' +
        ' reduction decreases its size by one category--from Medium to Small, for' +
        ' example. Until the spell ends, the target also has disadvantage on Strength' +
        " checks and Strength saving throws. The target's weapons also shrink to" +
        " match its new size. While these weapons are reduced, the target's attacks" +
        " with them deal 1d4 less damage (this can't reduce the damage below 1)." +
        '</li></ul></p>',
      ru:
        '<p>Вы увеличиваете или уменьшаете существо или предмет, видимый вами в' +
        ' пределах дистанции, на время действия заклинания. Выберите или существо или' +
        ' предмет, который никто не несет и не носит. Если цель хочет, она может' +
        ' совершить спасбросок Телосложения. В случае успеха заклинание не оказывает' +
        ' на нее никакого влияния.</p><p>Если цель — существо, все, что она носит и' +
        ' несет, изменяет размер вместе с ней. Все, что это существо бросит, тут же' +
        ' обретает свой естественный размер.</p><p><ul><li><b>Увеличение.' +
        '</b> Размеры цели удваиваются по всем измерениям, а вес увеличивается в' +
        ' восемь раз. Это увеличивает размер на одну категорию — от Среднего до' +
        ' Большого, например. Если для цели не хватает пространства, она приобретает' +
        ' максимально возможный размер. Пока заклинание активно, цель совершает с' +
        ' преимуществом проверки и спасброски Силы. Оружие цели тоже увеличивается.' +
        ' Атаки увеличенным оружием причиняют дополнительный урон' +
        ' 1к4.</li><li><b>Уменьшение.</b> Размеры цели уменьшаются вдвое по всем' +
        ' измерениям, а вес уменьшается до одной восьмой от обычного. Это уменьшает' +
        ' размер на одну категорию — от Среднего до Маленького, например. Пока' +
        ' заклинание активно, цель совершает с помехой проверки и спасброски Силы.' +
        ' Оружие цели тоже уменьшается. Атаки уменьшенным оружием причиняют на 1к4' +
        ' меньше урона (урон не может быть меньше 1).</li></ul></p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 30,
      unit: 'FEET',
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    duration: 'ONE_MINUTE',
    saveRequired: 'CONSTITUTION',
    materials: {
      en: 'A pinch of powdered iron',
      ru: 'Щепотка толченого железа',
    },
    tags: ['BUFF'],
    classes: ['SORCERER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Enthrall',
      ru: 'Речь златоуста',
    },
    level: 'LEVEL_2',
    school: 'ENCHANTMENT',
    description: {
      en:
        '<p>You weave a distracting string of words, causing creatures of your choice' +
        ' that you can see within range and that can hear you to make a Wisdom saving' +
        " throw. Any creature that can't be charmed succeeds on this saving throw" +
        ' automatically, and if you or your companions are fighting a creature, it' +
        ' has advantage on the save. On a failed save, the target has disadvantage on' +
        ' Wisdom (Perception) checks made to perceive any creature other than you' +
        ' until the spell ends or until the target can no longer hear you. The spell' +
        ' ends if you are incapacitated or can no longer speak.</p>',
      ru:
        '<p>Вы произносите отвлекающую речь, заставляя выбранных вами существ,' +
        ' которых вы видите в пределах дистанции, и которые при этом могут слышать' +
        ' вас, совершить спасбросок Мудрости. Существа, которые не могут быть' +
        ' очарованными, автоматически преуспевают в спасброске, и если вы или ваши' +
        ' спутники сражаетесь с существом, оно совершает спасбросок с преимуществом.' +
        ' При провале цель получает помеху к проверкам Мудрости (Внимательность),' +
        ' совершённым для обнаружения других существ кроме вас, пока заклинание' +
        ' активно или пока цель не перестанет вас слышать. Заклинание оканчивается,' +
        ' если вы становитесь недееспособны или теряете возможность говорить.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 60,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    duration: 'ONE_MINUTE',
    saveRequired: 'WISDOM',
    tags: ['CONTROL'],
    classes: ['BARD', 'WARLOCK'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Find Steed',
      ru: 'Поиск скакуна',
    },
    level: 'LEVEL_2',
    school: 'CONJURATION',
    description: {
      en:
        '<p>You summon a spirit that assumes the form of an unusually intelligent,' +
        ' strong, and loyal steed, creating a long-lasting bond with it. Appearing in' +
        ' an unoccupied space within range, the steed takes on a form that you' +
        ' choose: a warhorse, a pony, a camel, an elk, or a mastiff. (Your GM might' +
        ' allow other animals to be summoned as steeds.) The steed has the statistics' +
        ' of the chosen form, though it is a celestial, fey, or fiend (your choice)' +
        ' instead of its normal type. Additionally, if your steed has an' +
        ' Intelligence of 5 or less, its Intelligence becomes 6, and it gains the' +
        ' ability to understand one language of your choice that you speak.</p><p>Your' +
        ' steed serves you as a mount, both in combat and out, and you have an' +
        ' instinctive bond with it that allows you to fight as a seamless unit. While' +
        ' mounted on your steed, you can make any spell you cast that targets only you' +
        ' also target your steed.</p><p>When the steed drops to 0 hit points, it' +
        ' disappears, leaving behind no physical form. You can also dismiss your' +
        ' steed at any time as an action, causing it to disappear. In either case,' +
        ' casting this spell again summons the same steed, restored to its hit point' +
        ' maximum.</p><p>While your steed is within 1 mile of you, you can communicate' +
        " with each other telepathically.</p><p>You can't have more than one steed" +
        ' bonded by this spell at a time. As an action, you can release the steed' +
        ' from its bond at any time, causing it to disappear.</p>',
      ru:
        '<p>Вы вызываете дух, принимающий облик невероятно умного, сильного и верного' +
        ' скакуна, создавая долгосрочную связь с ним. Появляясь в свободном' +
        ' пространстве в пределах дистанции, скакун принимает выбранный вами облик,' +
        ' такой как боевой конь, пони, верблюд, лось или мастифф (Мастер может' +
        ' позволить призывать в качестве скакунов других животных). Скакун приобретает' +
        ' характеристики выбранной формы, хотя на самом деле он является небожителем,' +
        ' феей или исчадием (на ваш выбор). Кроме того, если у вашего скакуна' +
        ' Интеллект 5 или меньше, его Интеллект становится равен 6, и он получает' +
        ' способность понимать один язык на ваш выбор, на котором вы' +
        ' разговариваете.</p><p>Ваш скакун служит вам как в бою, так и вне его, и у' +
        ' вас с ним есть инстинктивная связь, позволяющая сражаться как единое целое.' +
        ' Находясь верхом на скакуне, вы можете делать так, что наложенные вами' +
        ' заклинания, нацеливающиеся только на вас, будут нацелены ещё и на' +
        ' скакуна.</p><p>Когда хиты скакуна опускаются до 0, он исчезает, не оставляя' +
        ' физического тела. Вы можете также в любое время отпустить скакуна действием,' +
        ' заставляя его исчезнуть. В любом случае, повторное использование этого' +
        ' заклинания призывает этого же скакуна, восстанавливая хиты до' +
        ' максимума.</p><p>Пока скакун находится в пределах 1 мили от вас, вы можете' +
        ' общаться с ним телепатически.</p><p>У вас не может быть больше одного' +
        ' скакуна призванного этим заклинанием, одновременно. Вы можете действием' +
        ' навсегда отпустить скакуна, освободив его от уз и заставляя исчезнуть.</p>',
    },
    castingTime: 'TEN_MINUTES',
    range: {
      value: 30,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    duration: 'INSTANTANEOUS',
    tags: ['SUMMONING'],
    classes: ['PALADIN'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Find Traps',
      ru: 'Поиск ловушек',
    },
    level: 'LEVEL_2',
    school: 'DIVINATION',
    description: {
      en:
        '<p>You sense the presence of any trap within range that is within line of' +
        ' sight. A trap, for the purpose of this spell, includes anything that would' +
        ' inflict a sudden or unexpected effect you consider harmful or undesirable,' +
        ' which was specifically intended as such by its creator. Thus, the spell' +
        ' would sense an area affected by the alarm spell, a glyph of warding, or a' +
        ' mechanical pit trap, but it would not reveal a natural weakness in the' +
        ' floor, an unstable ceiling, or a hidden sinkhole.</p><p>This spell merely' +
        " reveals that a trap is present. You don't learn the location of each" +
        ' trap, but you do learn the general nature of the danger posed by a trap' +
        ' you sense.</p>',
      ru:
        '<p>Вы чувствуете присутствие любых ловушек в пределах дистанции,' +
        ' находящихся в пределах линии обзора. Для этого заклинания ловушкой считается' +
        ' всё, что причиняет неожиданный эффект, считающийся для вас вредным или' +
        ' нежелательным, и специально подготовленный таким своим создателем. Таким' +
        ' образом, это заклинание почувствует область, защищённую заклинанием сигнал' +
        ' тревоги, охранные руны, или механической ловушкой, но не распознает ветхий' +
        ' пол, неустойчивый потолок, или промоину в земле.</p><p>Это заклинание просто' +
        ' даёт знать, что ловушка присутствует. Вы не узнаёте местоположение всех' +
        ' ловушек, но зато знаете общий характер опасности, исходящей от' +
        ' почувствованной вами ловушки.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 120,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    duration: 'INSTANTANEOUS',
    tags: ['DETECTION'],
    classes: ['CLERIC', 'DRUID', 'RANGER'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Flaming Sphere',
      ru: 'Пылающий шар',
    },
    level: 'LEVEL_2',
    school: 'CONJURATION',
    description: {
      en:
        '<p>A 5-foot-diameter sphere of fire appears in an unoccupied space of your' +
        ' choice within range and lasts for the duration. Any creature that ends its' +
        ' turn within 5 feet of the sphere must make a Dexterity saving throw. The' +
        ' creature takes 2d6 fire damage on a failed save, or half as much damage on' +
        ' a successful one.</p><p>As a bonus action, you can move the sphere up to 30' +
        ' feet. If you ram the sphere into a creature, that creature must make the' +
        " saving throw against the sphere's damage, and the sphere stops moving this" +
        ' turn</p><p>When you move the sphere, you can direct it over barriers up to 5' +
        ' feet tall and jump it across pits up to 10 feet wide. The sphere ignites' +
        ' flammable objects not being worn or carried, and it sheds bright light in a' +
        ' 20-foot radius and dim light for an additional 20 feet.</p>',
      ru:
        '<p>В свободном пространстве на ваш выбор в пределах дистанции появляется' +
        ' шар из огня с диаметром 5 фт., существующий, пока активно заклинание. Все' +
        ' существа, оканчивающие ход в пределах 5 фт. от шара, должны совершать' +
        ' спасбросок Ловкости. Существа получают урон огнем 2к6 при провале или' +
        ' половину этого урона при успехе.</p><p>Вы можете бонусным действием' +
        ' переместить шар на 30 фт. Если вы тараните шаром существо, это существо' +
        ' должно совершить спасбросок от урона шара, и шар останавливается до конца' +
        ' этого хода.</p><p>Когда вы перемещаете шар, вы можете поднимать его над' +
        ' препятствиями до 5 фт. в высоту и перепрыгивать им разломы до 10 фт. в' +
        ' длину. Шар поджигает горючие предметы, которые никто не несет и не носит, и' +
        ' испускает яркий свет в пределах 20 фт. и тусклый свет в пределах еще 20 фт.' +
        '</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 60,
      unit: 'FEET',
    },
    // area: {
    //   value: 5,
    //   unit: 'FEET',
    //   type: 'SPHERE'
    // },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'A bit of tallow, a pinch of brimstone, and a dusting of powdered iron',
      ru: 'Кусок сала, щепотка серы и толченого железа',
    },
    damageType: 'FIRE',
    damageDice: {
      quantity: 2,
      dice: 'D6',
    },
    atHigherSlots: {
      en:
        'When you cast this spell using a spell slot of 3rd level or higher, the' +
        ' damage increases by 1d6 for each slot level above 2',
      ru:
        'Если вы накладываете это заклинание, используя ячейку 3 уровня или выше, урон' +
        ' увеличивается на 1к6 за каждый уровень ячейки выше второго.',
    },
    duration: 'ONE_MINUTE',
    saveRequired: 'DEXTERITY',
    tags: ['DAMAGE'],
    classes: ['DRUID', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Flame Blade',
      ru: 'Горящий клинок',
    },
    level: 'LEVEL_2',
    school: 'EVOCATION',
    description: {
      en:
        '<p>You evoke a fiery blade in your free hand. The blade is similar in size' +
        ' and shape to a scimitar, and it lasts for the duration. If you let go of the' +
        ' blade, it disappears, but you can evoke the blade again as a bonus' +
        ' action.</p><p>You can use your action to make a melee spell attack with the' +
        ' fiery blade. On a hit, the target takes 3d6 fire damage.</p><p>The flaming' +
        ' blade sheds bright light in a 10-foot radius and dim light for an additional' +
        ' 10 feet.</p>',
      ru:
        '<p>Вы создаёте горящий клинок в свободной руке. Этот клинок похож размерами и' +
        ' формой на скимитар, и он существует, пока заклинание активно. Если вы' +
        ' выпустите клинок из рук, он исчезает, но вы можете вернуть его в руку' +
        ' бонусным действием.</p><p>Вы можете действием совершить рукопашную атаку' +
        ' заклинанием. При попадании цель получает урон огнём 3к6.</p><p>Горящий клинок' +
        ' испускает яркий свет в пределах 10 фт. и тусклый свет в пределах ещё 10 фт.</p>',
    },
    castingTime: 'BONUS_ACTION',
    range: {
      value: 0,
      unit: 'SELF',
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'Leaf of sumac',
      ru: 'Лист сумаха',
    },
    damageType: 'FIRE',
    damageDice: {
      quantity: 3,
      dice: 'D6',
    },
    atHigherSlots: {
      en:
        'When you cast this spell using a spell slot of 4th level or higher, the' +
        ' damage increases by 1d6 for every two slot levels above 2nd.',
      ru:
        'Если вы накладываете это заклинание, используя ячейку 4 уровня или выше,' +
        ' урон увеличивается на 1к6 за каждые два уровня ячейки выше 2.',
    },
    duration: 'TEN_MINUTES',
    tags: ['DAMAGE'],
    classes: ['DRUID'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Gentle Repose',
      ru: 'Нетленные останки',
    },
    level: 'LEVEL_2',
    school: 'NECROMANCY',
    description: {
      en:
        '<p>You touch a corpse or other remains. For the duration, the target is' +
        " protected from decay and can't become undead.</p><p>The spell also" +
        ' effectively extends the time limit on raising the target from the dead,' +
        " since days spent under the influence of this spell don't count against the" +
        ' time limit of spells such as raise dead.</p>',
      ru:
        '<p>Вы касаетесь трупа или других останков. Пока заклинание активно, цель' +
        ' защищена от разложения и не может стать нежитью.</p><p>Это заклинание также' +
        ' увеличивает ограничение по времени, в течение которого труп можно' +
        ' воскресить, так как дни, проведенные под воздействием этого заклинания, не' +
        ' учитываются при подсчете времени со дня смерти для таких заклинаний как' +
        ' оживление.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'TOUCH',
    },
    isConcentration: false,
    isRitual: true,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en:
        "A pinch of salt and one copper piece placed on each of the corpse's eyes," +
        ' which must remain there for the duration',
      ru:
        'Щепотка соли и по одной медной монетке на каждый глаз трупа, которые должны' +
        ' оставаться там все время, пока активно заклинание',
    },
    duration: 'TEN_DAYS',
    tags: ['WARDING'],
    classes: ['CLERIC', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Gust of Wind',
      ru: 'Порыв ветра',
    },
    level: 'LEVEL_2',
    school: 'EVOCATION',
    description: {
      en:
        '<p>A line of strong wind 60 feet long and 10 feet wide blasts from you in a' +
        " direction you choose for the spell's duration. Each creature that starts" +
        ' its turn in the line must succeed on a Strength saving throw or be pushed 15' +
        ' feet away from you in a direction following the line.</p><p>Any creature in' +
        ' the line must spend 2 feet of movement for every 1 foot it moves when' +
        ' moving closer to you.</p><p>The gust disperses gas or vapor, and it' +
        ' extinguishes candles, torches, and similar unprotected flames in the area.' +
        ' It causes protected flames, such as those of lanterns, to dance wildly and' +
        ' has a 50 percent chance to extinguish them.</p><p>As a bonus action on each' +
        ' of your turns before the spell ends, you can change the direction in which' +
        ' the line blasts from you.</p>',
      ru:
        '<p>Порыв сильного ветра длиной 60 фт. и шириной 10 фт. исходит от вас в' +
        ' выбранном направлении, пока заклинание активно. Все существа, начинающие ход' +
        ' в этой линии, должны преуспеть в спасброске Силы, иначе их оттолкнет на 15' +
        ' фт. от вас в направлении движения ветра.</p><p>Все существа в линии должны' +
        ' тратить 2 фута перемещения за каждый 1 фут, на который они перемещаются в' +
        ' вашу сторону.</p><p>Ветер рассеивает газы и испарения, а также тушит свечи,' +
        ' факелы и другие незащищенные источники огня. Защищенный огонь, например, в' +
        ' фонарях, он заставляет трепетать, и существует 50% шанс, что потухнут и' +
        ' они.</p><p>Пока заклинание активно, вы можете в каждом своем ходу бонусным' +
        ' действием менять направление, в котором дует ветер.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'SELF',
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'A legume seed',
      ru: 'Семя гороха',
    },
    saveRequired: 'STRENGTH',
    duration: 'ONE_MINUTE',
    tags: ['CONTROL'],
    classes: ['DRUID', 'SORCERER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Heat Metal',
      ru: 'Раскаленный металл',
    },
    level: 'LEVEL_2',
    school: 'TRANSMUTATION',
    description: {
      en:
        '<p>Choose a manufactured metal object, such as a metal weapon or a suit of' +
        ' heavy or medium metal armor, that you can see within range. You cause the' +
        ' object to glow red-hot. Any creature in physical contact with the object' +
        ' takes 2d8 fire damage when you cast the spell. Until the spell ends, you can' +
        ' use a bonus action on each of your subsequent turns to cause this damage' +
        ' again.</p><p>If a creature is holding or wearing the object and takes the' +
        ' damage from it, the creature must succeed on a Constitution saving throw or' +
        " drop the object if it can. If it doesn't drop the object, it has" +
        ' disadvantage on attack rolls and ability checks until the start of your next' +
        ' turn.</p>',
      ru:
        '<p>Выберите рукотворный металлический предмет, такой как металлическое' +
        ' оружие или комплект тяжелого или среднего доспеха, видимый в пределах' +
        ' дистанции. Вы делаете его раскаленным докрасна. Все существа, находящиеся в' +
        ' физическом контакте с этим предметом, получают урон огнем 2к8, когда вы' +
        ' накладываете это заклинание. Пока заклинание активно, вы можете бонусным' +
        ' действием в каждом последующем ходу вновь причинять этот урон.</p><p>Если' +
        ' существо держит или носит предмет, и получает от него урон, оно должно' +
        ' преуспеть в спасброске Телосложения, иначе оно роняет этот предмет, если' +
        ' может. Если оно не может уронить предмет, то до начала вашего следующего' +
        ' хода совершает с помехой броски атаки и проверки характеристик.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 60,
      unit: 'FEET',
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'A legume seed',
      ru: 'Семя гороха',
    },
    atHigherSlots: {
      en:
        'When you cast this spell using a spell slot of 3rd level or higher, the' +
        ' damage increases by 1d8 for each slot level above 2nd.',
      ru:
        'Если вы накладываете это заклинание, используя ячейку 3 уровня или выше,' +
        ' урон увеличивается на 1d8 за каждый уровень ячейки выше второго.',
    },
    duration: 'ONE_MINUTE',
    damageType: 'FIRE',
    damageDice: {
      quantity: 2,
      dice: 'D8',
    },
    tags: ['DAMAGE', 'DEBUFF'],
    classes: ['BARD', 'DRUID'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Hold Person',
      ru: 'Удержание личности',
    },
    level: 'LEVEL_2',
    school: 'ENCHANTMENT',
    description: {
      en:
        '<p>Choose a humanoid that you can see within range. The target must succeed' +
        ' on a Wisdom saving throw or be paralyzed for the duration. At the end of' +
        ' each of its turns, the target can make another Wisdom saving throw. On a' +
        ' success, the spell ends on the target.</p>',
      ru:
        '<p>Выберите гуманоида, которого видите в пределах дистанции. Цель должна' +
        ' преуспеть в спасброске Мудрости, иначе станет парализованной на период' +
        ' действия заклинания. В конце каждого своего хода цель может совершать новые' +
        ' спасброски Мудрости. В случае успеха заклинание на этой цели оканчивается. </p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 60,
      unit: 'FEET',
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'A small, straight piece of iron',
      ru: 'Небольшой прямой кусочек железа',
    },
    atHigherSlots: {
      en:
        'Если вы накладываете это заклинание, используя ячейку 3 уровня или выше, вы' +
        ' можете сделать целью одно дополнительное существо за каждый уровень ячейки' +
        ' выше 2. Эти гуманоиды должны находиться в пределах 30 фт. друг от друга,' +
        ' когда вы нацеливаетесь на них.',
      ru:
        'When you cast this spell using a spell slot of 3rd level or higher, you can' +
        ' target one additional humanoid for each slot level above 2nd. The humanoids' +
        ' must be within 30 feet of each other when you target them.',
    },
    saveRequired: 'WISDOM',
    duration: 'ONE_MINUTE',
    tags: ['CONTROL', 'DEBUFF'],
    classes: ['BARD', 'CLERIC', 'DRUID', 'SORCERER', 'WARLOCK', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Invisibility',
      ru: 'Невидимость',
    },
    level: 'LEVEL_2',
    school: 'ILLUSION',
    description: {
      en:
        '<p>A creature you touch becomes invisible until the spell ends. Anything the' +
        " target is wearing or carrying is invisible as long as it is on the target's" +
        ' person. The spell ends for a target that attacks or casts a spell.</p>',
      ru:
        '<p>Существо, которого вы касаетесь, становится невидимым до окончания' +
        ' действия заклинания. Все, что цель несет или носит, становится невидимым,' +
        ' пока остается у нее. Заклинание оканчивается на цели, если она совершает' +
        ' атаку или накладывает заклинание.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'TOUCH',
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'An eyelash encased in gum arabic',
      ru: 'Ресница в смоле',
    },
    atHigherSlots: {
      en:
        'When you cast this spell using a spell slot of 3rd level or higher, you can' +
        ' target one additional creature for each slot level above 2nd.',
      ru:
        'Если вы накладываете это заклинание, используя ячейку 3 уровня или выше, вы' +
        ' можете сделать целью одно дополнительное существо за каждый уровень ячейки' +
        ' выше второго.',
    },
    duration: 'ONE_HOUR',
    tags: ['BUFF'],
    classes: ['BARD', 'SORCERER', 'WARLOCK', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Knock',
      ru: 'Открывание',
    },
    level: 'LEVEL_2',
    school: 'TRANSMUTATION',
    description: {
      en:
        '<p>Choose an object that you can see within range. The object can be a' +
        ' door, a box, a chest, a set of manacles, a padlock, or another object that' +
        ' contains a mundane or magical means that prevents access.</p><p>A target' +
        ' that is held shut by a mundane lock or that is stuck or barred becomes' +
        ' unlocked, unstuck, or unbarred. If the object has multiple locks, only one' +
        ' of them is unlocked.</p><p>If you choose a target that is held shut with' +
        ' arcane lock, that spell is suppressed for 10 minutes, during which time the' +
        ' target can be opened and shut normally.</p><p>When you cast the spell, a' +
        ' loud knock, audible from as far away as 300 feet, emanates from the target' +
        ' object.</p>',
      ru:
        '<p>Выберите предмет, видимый в пределах дистанции. Это может быть дверь,' +
        ' ящик, сундук, кандалы, навесной замок, или другой предмет, содержащий' +
        ' обычное или магическое средство, предотвращающее доступ.</p><p>Цель,' +
        ' запертая обычным замком, заклинившая или запертая на засов, становится' +
        ' незапертой, незаклинившей, а засовы сами открываются.</p><p>Если на' +
        ' предмете было несколько замков, открывается только один из них. Если вы' +
        ' выбрали цель, запертую волшебным замком, это заклинание подавляется на 10' +
        ' минут, во время которых цель может открываться и закрываться как' +
        ' обычно.</p><p>Когда вы накладываете это заклинание, от цели исходит громкий' +
        ' стук, слышимый с расстояния в 300 фт.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 60,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: false,
      material: false,
    },
    duration: 'INSTANTANEOUS',
    tags: ['UTILITY'],
    classes: ['BARD', 'SORCERER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Lesser Restoration',
      ru: 'Малое восстановление',
    },
    level: 'LEVEL_2',
    school: 'ABJURATION',
    description: {
      en:
        '<p>You touch a creature and can end either one disease or one condition' +
        ' afflicting it. The condition can be blinded, deafened, paralyzed, or' +
        ' poisoned.</p>',
      ru:
        '<p>Вы касаетесь существа и можете окончить одну болезнь или одно состояние,' +
        ' в котором оно находится. Этим состоянием может быть глухота, отравление,' +
        ' паралич или слепота.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'TOUCH',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    duration: 'INSTANTANEOUS',
    tags: ['HEALING'],
    classes: ['BARD', 'CLERIC', 'DRUID', 'PALADIN', 'RANGER'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Levitate',
      ru: 'Левитация',
    },
    level: 'LEVEL_2',
    school: 'TRANSMUTATION',
    description: {
      en:
        '<p>One creature or loose object of your choice that you can see within range' +
        ' rises vertically, up to 20 feet, and remains suspended there for the' +
        ' duration. The spell can levitate a target that weighs up to 500 pounds. An' +
        ' unwilling creature that succeeds on a Constitution saving throw is' +
        ' unaffected.</p><p>The target can move only by pushing or pulling against a' +
        ' fixed object or surface within reach (such as a wall or a ceiling), which' +
        " allows it to move as if it were climbing. You can change the target's" +
        ' altitude by up to 20 feet in either direction on your turn. If you are the' +
        ' target, you can move up or down as part of your move. Otherwise, you can use' +
        " your action to move the target, which must remain within the spell's" +
        ' range.</p><p>When the spell ends, the target floats gently to the ground if' +
        ' it is still aloft.</p>',
      ru:
        '<p>Одно выбранное вами существо или предмет, видимые в пределах дистанции,' +
        ' поднимается вертикально на расстояние до 20 фт., и остается висеть там на' +
        ' время действия заклинания. Заклинание может заставить левитировать цель,' +
        ' весящую до 500 фунтов. Несогласное существо, преуспевшее в спасброске' +
        ' Телосложения, не попадает под действие этого заклинания.</p><p>Цель может' +
        ' перемещаться только отталкиваясь от твердых предметов и поверхностей (таких' +
        ' как стены и потолок), а также подтягиваясь за них, что позволяет' +
        ' перемещаться так, как если бы они лазали. В свой ход вы можете изменить' +
        ' высоту цели на 20 фт. в любом направлении. Если целью являетесь вы сами, вы' +
        ' можете частью перемещения двигаться вверх или вниз. В противном случае, вы' +
        ' можете действием переместить цель, которая должна оставаться при этом в' +
        ' пределах досягаемости заклинания.</p><p>Когда заклинание оканчивается, если' +
        ' цель все еще находится в воздухе, она плавно опускается на землю.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 60,
      unit: 'FEET',
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en:
        'Either a small leather loop or a piece of golden wire bent into a cup shape' +
        ' with a long shank on one end',
      ru:
        'Либо маленькая кожаная петля, либо кусочек золотой проволоки, согнутый в' +
        ' форме кубка с длинной ножкой',
    },
    saveRequired: 'CONSTITUTION',
    duration: 'TEN_MINUTES',
    tags: ['MOVEMENT'],
    classes: ['SORCERER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Locate Animals or Plants',
      ru: 'Поиск животных или растений',
    },
    level: 'LEVEL_2',
    school: 'DIVINATION',
    description: {
      en:
        '<p>Describe or name a specific kind of beast or plant. Concentrating on the' +
        ' voice of nature in your surroundings, you learn the direction and distance' +
        ' to the closest creature or plant of that kind within 5 miles, if any are' +
        ' present.</p>',
      ru:
        '<p>Назовите определённый вид зверя или растения. Сконцентрировавшись на' +
        ' голосе природы в окружении, вы узнаёте направление и расстояние до' +
        ' ближайшего существа или растения этого вида в пределах 5 миль, если они' +
        ' вообще есть.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'SELF',
    },
    isConcentration: false,
    isRitual: true,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'A bit of fur from a bloodhound',
      ru: 'Кусочек меха ищейки',
    },
    duration: 'INSTANTANEOUS',
    tags: ['DETECTION'],
    classes: ['BARD', 'DRUID', 'RANGER'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Locate Object',
      ru: 'Поиск предмета',
    },
    level: 'LEVEL_2',
    school: 'DIVINATION',
    description: {
      en:
        '<p>Describe or name an object that is familiar to you. You sense the' +
        " direction to the object's location, as long as that object is within 1,000" +
        ' feet of you. If the object is in motion, you know the direction of its' +
        ' movement.</p><p>The spell can locate a specific object known to you, as long' +
        ' as you have seen it up close--within 30 feet--at least once. Alternatively,' +
        ' the spell can locate the nearest object of a particular kind, such as a' +
        ' certain kind of apparel, jewelry, furniture, tool, or weapon.</p><p>This' +
        " spell can't locate an object if any thickness of lead, even a thin sheet," +
        ' blocks a direct path between you and the object.</p>',
      ru:
        '<p>Опишите или назовите известный вам предмет. Вы чувствуете направление к' +
        ' этому предмету, пока он находится в пределах 1 000 фт. от вас. Если предмет' +
        ' перемещается, вы узнаете его направление.</p><p>Это заклинание может искать' +
        ' конкретный известный вам предмет, если вы хотя бы раз видели его вблизи (в' +
        ' пределах 30 фт.). В качестве альтернативы, это заклинание может искать' +
        ' ближайший предмет определенного вида, например, особый предмет одежды,' +
        ' ювелирное украшение, мебель, инструмент или оружие.</p><p>Это заклинание не' +
        ' может обнаружить предмет, если прямой путь между вами перерезан свинцом,' +
        ' пусть даже самым тонким листом.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'SELF',
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'A forked twig',
      ru: 'Раздвоенная веточка',
    },
    duration: 'TEN_MINUTES',
    tags: ['DETECTION'],
    classes: ['BARD', 'CLERIC', 'DRUID', 'PALADIN', 'RANGER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Magic Mouth',
      ru: 'Волшебные уста',
    },
    level: 'LEVEL_2',
    school: 'ILLUSION',
    description: {
      en:
        '<p>You implant a message within an object in range, a message that is' +
        ' uttered when a trigger condition is met. Choose an object that you can see' +
        " and that isn't being worn or carried by another creature. Then speak the" +
        ' message, which must be 25 words or less, though it can be delivered over as' +
        ' long as 10 minutes. Finally, determine the circumstance that will trigger' +
        ' the spell to deliver your message.</p><p>When that circumstance occurs, a' +
        ' magical mouth appears on the object and recites the message in your voice' +
        ' and at the same volume you spoke. If the object you chose has a mouth or' +
        ' something that looks like a mouth (for example, the mouth of a statue), the' +
        ' magical mouth appears there so that the words appear to come from the' +
        " object's mouth. When you cast this spell, you can have the spell end after" +
        ' it delivers its message, or it can remain and repeat its message whenever' +
        ' the trigger occurs.</p><p>The triggering circumstance can be as general or' +
        ' as detailed as you like, though it must be based on visual or audible' +
        ' conditions that occur within 30 feet of the object. For example, you could' +
        ' instruct the mouth to speak when any creature moves within 30 feet of the' +
        ' object or when a silver bell rings within 30 feet of it.</p>',
      ru:
        '<p>Вы внедряете в предмет, находящийся в пределах дистанции, послание,' +
        ' которое будет произнесено, когда будут выполнены условия. Выберите видимый' +
        ' предмет, который не несет и не носит другое существо. Произнесите послание,' +
        ' которое может состоять не более чем из 25 слов, хотя его можно произносить в' +
        ' течение 10 минут. Затем определите условие, выполнение которого заставит' +
        ' заклинание передать ваше послание.</p><p>Когда условие будет выполнено, на' +
        ' предмете появляется магический рот, зачитывающий послание вашим голосом с' +
        ' той же самой громкостью. Если у выбранного вами предмета есть рот или' +
        ' что-то похожее на рот (например, рот статуи), магический рот появляется на' +
        ' его месте, и кажется, что слова исходят оттуда. При накладывании' +
        ' заклинания вы можете сделать так, что заклинание окончится, передав' +
        ' сообщение, или же останется активным и будет повторять сообщение при каждом' +
        ' срабатывании условия.</p><p>Вызывающее срабатывание условие может быть как' +
        ' общим, так и детализированным, но должно основываться на зрительных или' +
        ' слышимых условиях, происходящих в пределах 30 фт. от предмета. Например, вы' +
        ' можете заставить рот говорить, когда в пределах 30 фт. от него пройдет' +
        ' существо, или когда в пределах 30 фт. от него зазвенит серебряный' +
        ' колокольчик.</p>',
    },
    castingTime: 'ONE_MINUTE',
    range: {
      value: 30,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: true,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en:
        'A small bit of honeycomb and jade dust worth at least 10 gp, which the spell' +
        ' consumes',
      ru:
        'Кусочек медовых сот и порошок нефрита, стоящий как минимум 10 зм, расходуемые' +
        ' заклинанием',
    },
    duration: 'UNTIL_DISPELLED',
    tags: ['COMMUNICATION'],
    classes: ['BARD', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Magic Weapons',
      ru: 'Магическое оружие',
    },
    level: 'LEVEL_2',
    school: 'TRANSMUTATION',
    description: {
      en:
        '<p>You touch a nonmagical weapon. Until the spell ends, that weapon becomes' +
        ' a magic weapon with a +1 bonus to attack rolls and damage rolls.</p>',
      ru:
        '<p>Вы касаетесь немагического оружия. Пока заклинание активно, это оружие' +
        ' становится магическим оружием с бонусом +1 к броскам атаки и урона.</p>',
    },
    castingTime: 'BONUS_ACTION',
    range: {
      value: 0,
      unit: 'TOUCH',
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    duration: 'ONE_HOUR',
    atHigherSlots: {
      en:
        'When you cast this spell using a spell slot of 4th level or higher, the' +
        ' bonus increases to +2. When you use a spell slot of 6th level or higher, the' +
        ' bonus increases to +3.',
      ru:
        'Если вы накладываете это заклинание, используя ячейку 4 уровня или выше,' +
        ' бонус увеличивается до +2. Если вы используете ячейку заклинания 6 уровня' +
        ' или выше, бонус увеличивается до +3.',
    },
    tags: ['BUFF'],
    classes: ['PALADIN', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Mirror Image',
      ru: 'Отражения',
    },
    level: 'LEVEL_2',
    school: 'ILLUSION',
    description: {
      en:
        '<p>Three illusory duplicates of yourself appear in your space. Until the' +
        ' spell ends, the duplicates move with you and mimic your actions, shifting' +
        " position so it's impossible to track which image is real. You can use your" +
        ' action to dismiss the illusory duplicates.</p><p>Each time a creature' +
        " targets you with an attack during the spell's duration, roll a d20 to" +
        ' determine whether the attack instead targets one of your' +
        ' duplicates.</p><p>If you have three duplicates, you must roll a 6 or higher' +
        " to change the attack's target to a duplicate. With two duplicates, you must" +
        ' roll an 8 or higher. With one duplicate, you must roll an 11 or' +
        " higher.</p><p>A duplicate's AC equals 10 + your Dexterity modifier. If an" +
        ' attack hits a duplicate, the duplicate is destroyed. A duplicate can be' +
        ' destroyed only by an attack that hits it. It ignores all other damage and' +
        ' effects. The spell ends when all three duplicates are destroyed.</p><p>A' +
        " creature is unaffected by this spell if it can't see, if it relies on" +
        ' senses other than sight, such as blindsight, or if it can perceive' +
        ' illusions as false, as with truesight.</p>',
      ru:
        '<p>В вашем пространстве появляются три ваших иллюзорных копии. Пока' +
        ' заклинание активно, копии перемещаются вместе с вами и подражают вашим' +
        ' действиям, двигаясь так, что невозможно понять, кто из вас настоящий. Вы' +
        ' можете действием распустить свои копии.</p><p>Каждый раз, когда существо' +
        ' нацеливается на вас атакой, пока заклинание активно, бросайте d20, чтобы' +
        ' определить, не попала ли атака вместо вас по одной из ваших копий. Если у' +
        ' вас три копии, вы должны выбросить «6» или больше, чтобы сделать целью' +
        ' копию. Если копий две, выбросить нужно «8» или больше. Если копия одна, вы' +
        ' должны выбросить «11» или больше.</p><p>КД копии равен 10 + ваш модификатор' +
        ' Ловкости. Если атака попала по копии, она уничтожается. Копию может' +
        ' уничтожить только атака, попавшая по ней. Она игнорирует остальной урон и' +
        ' эффекты. Заклинание оканчивается, если все три копии будут' +
        ' уничтожены.</p><p>Существо не попадает под действие этого заклинания, если не' +
        ' может видеть, если полагается на другие чувства кроме зрения, например, на' +
        ' слепое зрение, или если может видеть сквозь иллюзию, например, при помощи' +
        ' истинного зрения.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'SELF',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    duration: 'ONE_MINUTE',
    tags: ['DECEPTION', 'WARDING'],
    classes: ['SORCERER', 'WARLOCK', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Misty Step',
      ru: 'Туманный шаг',
    },
    level: 'LEVEL_2',
    school: 'CONJURATION',
    description: {
      en:
        '<p>Briefly surrounded by silvery mist, you teleport up to 30 feet to an' +
        ' unoccupied space that you can see.</p>',
      ru:
        '<p>Окутавшись серебристым туманом, вы телепортируетесь на 30 фт. в' +
        ' свободное пространство, видимое вами.</p>',
    },
    castingTime: 'BONUS_ACTION',
    range: {
      value: 0,
      unit: 'SELF',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: false,
      material: false,
    },
    duration: 'INSTANTANEOUS',
    tags: ['TELEPORTATION'],
    classes: ['SORCERER', 'WARLOCK', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Moonbeam',
      ru: 'Лунный луч',
    },
    level: 'LEVEL_2',
    school: 'EVOCATION',
    description: {
      en:
        '<p>A silvery beam of pale light shines down in a 5-foot-radius,' +
        ' 40-foot-high cylinder centered on a point within range. Until the spell' +
        ' ends, dim light fills the cylinder.</p><p>When a creature enters the' +
        " spell's area for the first time on a turn or starts its turn there, it is" +
        ' engulfed in ghostly flames that cause searing pain, and it must make a' +
        ' Constitution saving throw. It takes 2d10 radiant damage on a failed save, or' +
        ' half as much damage on a successful one.</p><p>A shapechanger makes its' +
        ' saving throw with disadvantage. If it fails, it also instantly reverts to' +
        " its original form and can't assume a different form until it leaves the" +
        " spell's light.</p><p>On each of your turns after you cast this spell, you" +
        ' can use an action to move the beam up to 60 feet in any direction.</p>',
      ru:
        '<p>Бледный серебристый луч сияет в цилиндре с радиусом 5 фт. и высотой 40' +
        ' фт. с центром на точке в пределах дистанции. Пока заклинание активно, цилиндр' +
        ' освещён тусклым светом.</p><p>Когда существо впервые за ход входит в область' +
        ' заклинания или начинает там ход, оно окутывается призрачным пламенем,' +
        ' причиняющим настоящую боль, и должно совершить спасбросок Телосложения. Оно' +
        ' получает урон излучением 2к10 при провале или половину этого урона при' +
        ' успехе.</p><p>Перевёртыши совершают спасбросок с помехой. При провале они' +
        ' мгновенно принимают свой истинный облик, и не могут принимать другие формы,' +
        ' пока не выйдут из света от заклинания.</p><p>В каждый последующий после' +
        ' накладывания заклинания ход вы можете действием перемещать луч на 60 фт. в' +
        ' любом направлении.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 120,
      unit: 'FEET',
    },
    // area: {
    //   value: 5,
    //   unit: 'FEET',
    //   type: 'CYLINDER',
    // },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'Several seeds of any moonseed plant and a piece of opalescent feldspar',
      ru: 'Несколько семечек лунносемянника и кусочек опалесцирующего полевого шпата',
    },
    damageType: 'RADIANT',
    damageDice: {
      quantity: 2,
      dice: 'D10',
    },
    saveRequired: 'CONSTITUTION',
    duration: 'ONE_MINUTE',
    tags: ['DAMAGE', 'CONTROL'],
    classes: ['DRUID'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Pass without Trace',
      ru: 'Бесследное передвижение',
    },
    level: 'LEVEL_2',
    school: 'ABJURATION',
    description: {
      en:
        '<p>A veil of shadows and silence radiates from you, masking you and your' +
        ' companions from detection. For the duration, each creature you choose within' +
        ' 30 feet of you (including you) has a +10 bonus to Dexterity (Stealth) checks' +
        " and can't be tracked except by magical means. A creature that receives this" +
        ' bonus leaves behind no tracks or other traces of its passage.</p>',
      ru:
        '<p>От вас начинает исходить покров теней и тишины, скрывающий вас и ваших' +
        ' спутников от обнаружения. Пока заклинание активно, все существа, выбранные' +
        ' вами в пределах 30 фт. (включая вас) получают бонус +10 к проверкам Ловкости' +
        ' (Скрытность), и их нельзя выследить без помощи магии. Существо, получившее' +
        ' этот бонус, не оставляет за собой следов.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'SELF',
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'Ashes from a burned leaf of mistletoe and a sprig of spruce',
      ru: 'Пепел от сожжённого листа омелы и еловая ветка',
    },
    duration: 'ONE_HOUR',
    tags: ['BUFF', 'EXPLORATION'],
    classes: ['DRUID', 'RANGER'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Prayer of Healing',
      ru: 'Молебен лечения',
    },
    level: 'LEVEL_2',
    school: 'EVOCATION',
    description: {
      en:
        '<p>Up to six creatures of your choice that you can see within range each' +
        ' regain hit points equal to 2d8 + your spellcasting ability modifier. This' +
        ' spell has no effect on undead or constructs.</p>',
      ru:
        '<p>Каждое из шести существ на ваш выбор, видимых в пределах дистанции,' +
        ' восстанавливает количество хитов, равное 2к8 + модификатор вашей базовой' +
        ' характеристики. Это заклинание не оказывает никакого эффекта на нежить и' +
        ' конструктов.</p>',
    },
    castingTime: 'TEN_MINUTES',
    range: {
      value: 30,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: false,
      material: false,
    },
    atHigherSlots: {
      en:
        'When you cast this spell using a spell slot of 3rd level or higher, the' +
        ' healing increases by 1d8 for each slot level above 2nd.',
      ru:
        'Если вы накладываете это заклинание, используя ячейку 3 уровня или выше,' +
        ' лечение увеличивается на 1к8 за каждый уровень ячейки выше второго.',
    },
    duration: 'INSTANTANEOUS',
    tags: ['HEALING'],
    classes: ['CLERIC'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Protection from Poison',
      ru: 'Защита от яда',
    },
    level: 'LEVEL_2',
    school: 'ABJURATION',
    description: {
      en:
        '<p>You touch a creature. If it is poisoned, you neutralize the poison. If' +
        ' more than one poison afflicts the target, you neutralize one poison that you' +
        ' know is present, or you neutralize one at random.</p><p>For the duration,' +
        ' the target has advantage on saving throws against being poisoned, and it' +
        ' has resistance to poison damage.</p>',
      ru:
        '<p>Вы касаетесь существа. Если оно отравлено, вы нейтрализуете яд. Если на' +
        ' цель действуют несколько ядов, вы нейтрализуете тот, о котором знаете, либо' +
        ' же один случайным образом выбранный яд.</p><p>Пока заклинание активно, цель' +
        ' совершает с преимуществом спасброски от отравленного состояния и получает' +
        ' сопротивление к урону ядом.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'TOUCH',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    duration: 'ONE_HOUR',
    tags: ['BUFF', 'WARDING'],
    classes: ['CLERIC', 'DRUID', 'PALADIN', 'RANGER'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Ray of Enfeeblement',
      ru: 'Луч слабости',
    },
    level: 'LEVEL_2',
    school: 'NECROMANCY',
    description: {
      en:
        '<p>A black beam of enervating energy springs from your finger toward a' +
        ' creature within range. Make a ranged spell attack against the target. On a' +
        ' hit, the target deals only half damage with weapon attacks that use Strength' +
        " until the spell ends.</p><p>At the end of each of the target's turns, it" +
        ' can make a Constitution saving throw against the spell. On a success, the' +
        ' spell ends.</p>',
      ru:
        '<p>Черный луч вылетает из вашего пальца к существу, находящемуся в пределах' +
        ' дистанции. Совершите по цели дальнобойную атаку заклинанием. При попадании' +
        ' цель до конца действия заклинания причиняет только половину урона атаками' +
        ' оружием, использующими Силу.</p><p>В конце каждого своего хода цель может' +
        ' совершать спасбросок Телосложения от этого заклинания. При успехе заклинание' +
        ' оканчивается.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 60,
      unit: 'FEET',
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    saveRequired: 'CONSTITUTION',
    duration: 'ONE_MINUTE',
    tags: ['DEBUFF'],
    classes: ['WARLOCK', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Rope Trick',
      ru: 'Трюк с веревкой',
    },
    level: 'LEVEL_2',
    school: 'TRANSMUTATION',
    description: {
      en:
        '<p>You touch a length of rope that is up to 60 feet long. One end of the' +
        ' rope then rises into the air until the whole rope hangs perpendicular to the' +
        ' ground. At the upper end of the rope, an invisible entrance opens to an' +
        ' extradimensional space that lasts until the spell ends.</p><p>The' +
        ' extradimensional space can be reached by climbing to the top of the rope.' +
        ' The space can hold as many as eight Medium or smaller creatures. The rope' +
        ' can be pulled into the space, making the rope disappear from view outside' +
        " the space.</p><p>Attacks and spells can't cross through the entrance into" +
        ' or out of the extradimensional space, but those inside can see out of it as' +
        ' if through a 3-foot-by-5- foot window centered on the rope.</p><p>Anything' +
        ' inside the extradimensional space drops out when the spell ends.</p>',
      ru:
        '<p>Вы касаетесь веревки длиной до 60 фт. Один ее конец поднимается в' +
        ' воздух, а остальная часть висит перпендикулярно полу. На верхнем конце' +
        ' веревки появляется невидимый вход в межпространство, существующий, пока' +
        ' заклинание активно.</p><p>В межпространство можно попасть, забравшись по' +
        ' веревке наверх. В этом межпространстве может поместиться восемь существ с' +
        ' размером не больше Среднего. Веревку можно затянуть внутрь, после чего' +
        ' снаружи ее не будет видно.</p><p>Атаки и заклинания не могут проходить через' +
        ' вход внутрь межпространства и наружу, но те, кто находятся внутри, могут все' +
        ' видеть как через окно 3 × 5 фт. с центром на веревке.</p><p></p>Все, что' +
        ' находится межпространстве, вываливается наружу, когда заклинание' +
        ' заканчивается.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'TOUCH',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'Powdered corn extract and a twisted loop of parchment',
      ru: 'Экстракт зерна и петля из пергамента',
    },
    duration: 'ONE_HOUR',
    tags: ['UTILITY'],
    classes: ['WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Scorching Ray',
      ru: 'Палящий луч',
    },
    level: 'LEVEL_2',
    school: 'EVOCATION',
    description: {
      en:
        '<p>You create three rays of fire and hurl them at targets within range. You' +
        ' can hurl them at one target or several.</p><p>Make a ranged spell attack for' +
        ' each ray. On a hit, the target takes 2d6 fire damage.</p>',
      ru:
        '<p>Вы создаете три огненных луча и направляете их на целей, находящихся в' +
        ' пределах дистанции. Это может быть одна или несколько целей.</p><p>Для' +
        ' каждого луча совершите дальнобойную атаку заклинанием. При попадании цель' +
        ' получает урон огнем 2к6.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 120,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    damageType: 'FIRE',
    damageDice: {
      quantity: 2,
      dice: 'D6',
    },
    atHigherSlots: {
      en:
        'When you cast this spell using a spell slot of 3rd level or higher, you' +
        ' create one additional ray for each slot level above 2nd.',
      ru:
        'Если вы накладываете это заклинание, используя ячейку 3 уровня или выше, вы' +
        ' создаете один дополнительный луч за каждый уровень ячейки выше второго.',
    },
    duration: 'INSTANTANEOUS',
    tags: ['DAMAGE'],
    classes: ['SORCERER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'See Invisibility',
      ru: 'Видение невидимого',
    },
    level: 'LEVEL_2',
    school: 'DIVINATION',
    description: {
      en:
        '<p>For the duration, you see invisible creatures and objects as if they' +
        ' were visible, and you can see into the Ethereal Plane. Ethereal creatures and' +
        ' objects appear ghostly and translucent.</p>',
      ru:
        '<p>Пока заклинание активно, вы видите невидимых существ и предметы, как' +
        ' если бы они были видимы, и ваше зрение простирается на Эфирный План. Эфирные' +
        ' существа и предметы выглядят призрачными и полупрозрачными.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 120,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    damageType: 'FIRE',
    damageDice: {
      quantity: 2,
      dice: 'D6',
    },
    atHigherSlots: {
      en:
        'When you cast this spell using a spell slot of 3rd level or higher, you' +
        ' create one additional ray for each slot level above 2nd.',
      ru:
        'Если вы накладываете это заклинание, используя ячейку 3 уровня или выше, вы' +
        ' создаете один дополнительный луч за каждый уровень ячейки выше второго.',
    },
    duration: 'INSTANTANEOUS',
    tags: ['DAMAGE'],
    classes: ['SORCERER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Shatter',
      ru: 'Дребезги',
    },
    level: 'LEVEL_2',
    school: 'EVOCATION',
    description: {
      en:
        '<p>A sudden loud ringing noise, painfully intense, erupts from a point of' +
        ' your choice within range. Each creature in a 10-foot-radius sphere centered' +
        ' on that point must make a Constitution saving throw. A creature takes 3d8' +
        ' thunder damage on a failed save, or half as much damage on a successful one.' +
        ' A creature made of inorganic material such as stone, crystal, or metal has' +
        " disadvantage on this saving throw.</p><p>A nonmagical object that isn't" +
        " being worn or carried also takes the damage if it's in the spell's area." +
        '</p>',
      ru:
        '<p>Громкий звонкий звук исходит из выбранной вами точки в пределах дистанции.' +
        ' Все существа в сфере с радиусом 10 фт. с центром на этой точке должны' +
        ' совершить спасбросок Телосложения. При провале существо получает урон звуком' +
        ' 3к8, или половину этого урона при успехе. Существа, изготовленные из' +
        ' неорганической материи, такой как камень, кристалл или металл, совершают' +
        ' этот спасбросок с помехой.</p><p>Немагические предметы, которые не несут и не' +
        ' носят, тоже получают урон, если находятся в области заклинания.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 60,
      unit: 'FEET',
    },
    // area: {
    //   value: 10,
    //   unit: 'FEET',
    //   type: 'SPHERE',
    // },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'A chip of mica',
      ru: 'Кусочек слюды',
    },
    damageType: 'THUNDER',
    damageDice: {
      quantity: 3,
      dice: 'D8',
    },
    saveRequired: 'CONSTITUTION',
    atHigherSlots: {
      en:
        'When you cast this spell using a spell slot of 3rd level or higher, the' +
        ' damage increases by 1d8 for each slot level above 2nd.',
      ru:
        'Если вы накладываете это заклинание, используя ячейку 3 уровня или выше,' +
        ' урон увеличивается на 1к8 за каждый уровень ячейки выше второго.',
    },
    duration: 'INSTANTANEOUS',
    tags: ['DAMAGE'],
    classes: ['BARD', 'SORCERER', 'WARLOCK', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Silence',
      ru: 'Тишина',
    },
    level: 'LEVEL_2',
    school: 'ILLUSION',
    description: {
      en:
        '<p>For the duration, no sound can be created within or pass through a' +
        ' 20-foot-radius sphere centered on a point you choose within range. Any' +
        ' creature or object entirely inside the sphere is immune to thunder damage,' +
        ' and creatures are deafened while entirely inside it. Casting a spell that' +
        ' includes a verbal component is impossible there.</p>',
      ru:
        '<p>Пока заклинание активно, никакие звуки не могут раздаться в пределах' +
        ' сферы с радиусом 20 фт. с центром на точке, выбранной в пределах дистанции, а' +
        ' также не могут проходить сквозь неё. Все существа и предметы, полностью' +
        ' находящиеся в сфере, получают иммунитет к урону звуком, и существа считаются' +
        ' оглохшими, когда полностью находятся в ней. Там невозможно накладывать' +
        ' заклинания с вербальным компонентом.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 120,
      unit: 'FEET',
    },
    // area: {
    //   value: 20,
    //   unit: 'FEET',
    //   type: 'SPHERE',
    // },
    isConcentration: true,
    isRitual: true,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    duration: 'TEN_MINUTES',
    tags: ['CONTROL'],
    classes: ['BARD', 'CLERIC', 'RANGER'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Spider Climb',
      ru: 'Паук',
    },
    level: 'LEVEL_2',
    school: 'TRANSMUTATION',
    description: {
      en:
        '<p>Until the spell ends, one willing creature you touch gains the ability' +
        ' to move up, down, and across vertical surfaces and upside down along' +
        ' ceilings, while leaving its hands free. The target also gains a climbing' +
        ' speed equal to its walking speed.</p>',
      ru:
        '<p>Пока заклинание активно, одно согласное существо, которого вы касаетесь,' +
        ' получает возможность перемещаться вверх, вниз и вдоль вертикальных' +
        ' поверхностей, а также по потолкам, оставляя руки свободными. Цель также' +
        ' получает скорость лазания, равную своей скорости ходьбы.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'TOUCH',
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'A drop of bitumen and a spider',
      ru: 'Капля битума и паук',
    },
    duration: 'ONE_HOUR',
    tags: ['BUFF', 'MOVEMENT'],
    classes: ['SORCERER', 'WARLOCK', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Spike Growth',
      ru: 'Шипы',
    },
    level: 'LEVEL_2',
    school: 'TRANSMUTATION',
    description: {
      en:
        '<p>The ground in a 20-foot radius centered on a point within range twists' +
        ' and sprouts hard spikes and thorns. The area becomes difficult terrain for' +
        ' the duration. When a creature moves into or within the area, it takes 2d4' +
        ' piercing damage for every 5 feet it travels.</p><p>The transformation of the' +
        " ground is camouflaged to look natural. Any creature that can't see the area" +
        ' at the time the spell is cast must make a Wisdom (Perception) check against' +
        ' your spell save DC to recognize the terrain as hazardous before entering it.' +
        '</p>',
      ru:
        '<p>Пол в пределах 20-фт.ого радиуса с центром на точке в пределах дистанции' +
        ' покрывается шипами и колючками. Эта местность становится труднопроходимой на' +
        ' время действия заклинания. Когда существо перемещением входит в эту область' +
        ' или идёт по ней, оно получает колющий урон 2к4 за каждые 5 пройдённых' +
        ' фт.</p><p>Трансформация поверхности проходит практически незаметно, и шипы' +
        ' хорошо замаскированы. Существа, которые не видели эту местность в момент' +
        ' накладывания заклинания, должны совершить проверку Мудрости' +
        ' (Внимательность) против Сл ваших заклинаний, чтобы распознать местность' +
        ' опасной, перед тем как в неё войти.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 150,
      unit: 'FEET',
    },
    // area: {
    //   value: 20,
    //   unit: 'FEET',
    //   type: 'SPHERE'
    // },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en: 'Seven sharp thorns or seven small twigs, each sharpened to a point',
      ru: 'Семь острых шипов или семь заострённых веточек',
    },
    duration: 'TEN_MINUTES',
    tags: ['DAMAGE', 'CONTROL'],
    classes: ['DRUID', 'RANGER'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Spiritual Weapon',
      ru: 'Божественное оружие',
    },
    level: 'LEVEL_2',
    school: 'EVOCATION',
    description: {
      en:
        '<p>You create a floating, spectral weapon within range that lasts for the' +
        ' duration or until you cast this spell again. When you cast the spell, you can' +
        ' make a melee spell attack against a creature within 5 feet of the weapon. On' +
        ' a hit, the target takes force damage equal to 1d8 + your spellcasting' +
        ' ability modifier.</p><p>As a bonus action on your turn, you can move the' +
        ' weapon up to 20 feet and repeat the attack against a creature within 5 feet' +
        ' of it.</p><p>The weapon can take whatever form you choose. Clerics of' +
        ' deities who are associated with a particular weapon (as St. Cuthbert is' +
        " known for his mace and Thor for his hammer) make this spell's effect" +
        ' resemble that weapon.</p>',
      ru:
        '<p>Вы создаёте в пределах дистанции парящее призрачное оружие,' +
        ' существующее, пока заклинание активно, или пока вы не накладываете это' +
        ' заклинание ещё раз. Когда вы накладываете это заклинание, вы можете' +
        ' совершить рукопашную атаку заклинанием по существу, находящемуся в пределах' +
        ' 5 фт. от оружия. При попадании цель получает урон силовым полем, равный 1к8' +
        ' + модификатор вашей базовой характеристики.</p><p>Вы можете бонусным' +
        ' действием в свой ход переместить оружие на 20 фт. и повторить атаку по' +
        ' существу, находящемуся в пределах 5 фт. от него.</p><p>Оружие может быть' +
        ' любой формы. Жрецы божеств, связанных с конкретным оружием (святой Катберт' +
        ' известен своей булавой, а Тор — молотом), создают эффект в виде именно' +
        ' такого оружия.</p>',
    },
    castingTime: 'BONUS_ACTION',
    range: {
      value: 60,
      unit: 'FEET',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    atHigherSlots: {
      en:
        'When you cast this spell using a spell slot of 3rd level or higher, the' +
        ' damage increases by 1d8 for every two slot levels above 2nd.',
      ru:
        'Если вы накладываете это заклинание, используя ячейку 3 уровня или выше, урон' +
        ' увеличивается на 1к8 за каждые две ячейки выше второго.',
    },
    damageType: 'FORCE',
    damageDice: {
      quantity: 1,
      dice: 'D8',
    },
    duration: 'ONE_MINUTE',
    tags: ['DAMAGE'],
    classes: ['CLERIC'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Suggestion',
      ru: 'Внушение',
    },
    level: 'LEVEL_2',
    school: 'ENCHANTMENT',
    description: {
      en:
        '<p>You suggest a course of activity (limited to a sentence or two) and' +
        ' magically influence a creature you can see within range that can hear and' +
        " understand you. Creatures that can't be charmed are immune to this effect." +
        ' The suggestion must be worded in such a manner as to make the course of' +
        ' action sound reasonable. Asking the creature to stab itself, throw itself' +
        ' onto a spear, immolate itself, or do some other obviously harmful act ends' +
        ' the spell.</p><p>The target must make a Wisdom saving throw. On a failed' +
        ' save, it pursues the course of action you described to the best of its' +
        ' ability. The suggested course of action can continue for the entire' +
        ' duration. If the suggested activity can be completed in a shorter time,' +
        ' the spell ends when the subject finishes what it was asked to' +
        ' do.</p><p>You can also specify conditions that will trigger a special' +
        ' activity during the duration. For example, you might suggest that a knight' +
        " give her warhorse to the first beggar she meets. If the condition isn't" +
        " met before the spell expires, the activity isn't performed.</p><p>If you or" +
        ' any of your companions damage the target, the spell ends.</p>',
      ru:
        '<p>Вы внушаете определенный курс действий (ограниченный одной-двумя' +
        ' фразами) существу, видимому в пределах дистанции, способному слышать и' +
        ' понимать вас. Существа, которые не могут быть очарованы, обладают' +
        ' иммунитетом к этому эффекту. Внушение должно быть сформировано так, чтобы' +
        ' действие звучало разумным. Просьбы ударить себя мечом, броситься на копье,' +
        ' сжечь себя, или как-то иначе причинить себе вред оканчивают' +
        ' заклинание.</p><p>Цель должна совершить спасбросок Мудрости. При провале она' +
        ' следует заданному курсу действий. Внушенные действия могут продолжаться всю' +
        ' длительность заклинания. Если внушенную деятельность можно выполнить за' +
        ' меньший срок, заклинание оканчивается, когда субъект оканчивает порученную' +
        ' задачу.</p><p>Вы можете также указать условие, которое запустит особое' +
        ' действие во время действия заклинания. Например, вы можете внушить рыцарю,' +
        ' чтобы он отдал своего боевого коня первому встреченному нищему. Если до' +
        ' окончания действия условие не будет выполнено, деятельность не' +
        ' совершается.</p><p>Если вы или кто-то из ваших спутников причиняете урон' +
        ' цели, заклинание оканчивается.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 30,
      unit: 'FEET',
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: false,
      material: true,
    },
    saveRequired: 'WISDOM',
    materials: {
      en: "A snake's tongue and either a bit of honeycomb or a drop of sweet oil",
      ru: 'Язык змеи и либо кусочек медовых сот, либо капля сладкого масла',
    },
    duration: 'EIGHT_HOURS',
    tags: ['CONTROL', 'SOCIAL'],
    classes: ['BARD', 'SORCERER', 'WARLOCK', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Warding Bond',
      ru: 'Охраняющая связь',
    },
    level: 'LEVEL_2',
    school: 'ABJURATION',
    description: {
      en:
        '<p>This spell wards a willing creature you touch and creates a mystic' +
        ' connection between you and the target until the spell ends. While the target' +
        ' is within 60 feet of you, it gains a +1 bonus to AC and saving throws, and' +
        ' it has resistance to all damage. Also, each time it takes damage, you take' +
        ' the same amount of damage.</p><p>The spell ends if you drop to 0 hit points' +
        ' or if you and the target become separated by more than 60 feet. It also' +
        ' ends if the spell is cast again on either of the connected creatures. You' +
        ' can also dismiss the spell as an action.</p>',
      ru:
        '<p>Это заклинание защищает согласное существо, которого вы касаетесь, и' +
        ' создаёт мистическую связь между вами. Пока цель находится в пределах 60 фт.' +
        ' от вас, она получает бонус +1 к КД и спасброскам, а также сопротивление ко' +
        ' всем видам урона. Кроме того, каждый раз, когда она получает урон, вы' +
        ' получаете такое же количество урона.</p><p>Это заклинание оканчивается, если' +
        ' ваши хиты опускаются до 0 или если расстояние между вами и целью становится' +
        ' больше 60 фт. Оно также заканчивается, если это заклинание наложить повторно' +
        ' на одно из связанных существ. Вы также можете окончить это заклинание' +
        ' действием.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 0,
      unit: 'TOUCH',
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: {
      en:
        'A pair of platinum rings worth at least 50 gp each, which you and the' +
        ' target must wear for the duration',
      ru:
        'Пара платиновых колец, стоящая как минимум 50 зм каждое, которые вы с целью' +
        ' должны носить на время',
    },
    duration: 'ONE_HOUR',
    tags: ['BUFF', 'WARDING'],
    classes: ['CLERIC'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Web',
      ru: 'Паутина',
    },
    level: 'LEVEL_2',
    school: 'CONJURATION',
    description: {
      en:
        '<p>You conjure a mass of thick, sticky webbing at a point of your choice' +
        ' within range. The webs fill a 20-foot cube from that point for the duration.' +
        ' The webs are difficult terrain and lightly obscure their area.</p><p>If the' +
        " webs aren't anchored between two solid masses (such as walls or trees) or" +
        ' layered across a floor, wall, or ceiling, the conjured web collapses on' +
        ' itself, and the spell ends at the start of your next turn. Webs layered over' +
        ' a flat surface have a depth of 5 feet.</p><p>Each creature that starts its' +
        ' turn in the webs or that enters them during its turn must make a Dexterity' +
        ' saving throw. On a failed save, the creature is restrained as long as it' +
        ' remains in the webs or until it breaks free.</p><p>A creature restrained by' +
        ' the webs can use its action to make a Strength check against your spell save' +
        ' DC. If it succeeds, it is no longer restrained.</p><p>The webs are' +
        ' flammable. Any 5-foot cube of webs exposed to fire burns away in 1 round,' +
        ' dealing 2d4 fire damage to any creature that starts its turn in the fire.</p>',
      ru:
        '<p>Вы создаете массу густой и клейкой паутины в точке на ваш выбор в' +
        ' пределах дистанции. Паутина заполняет куб с длиной ребра 20 фт. на время' +
        ' длительности заклинания. Паутина является труднопроходимой местностью и' +
        ' слабо заслоняет местность.</p><p>Если паутина не прикована к двум прочным' +
        ' структурам (таким как стены или деревья) и не разложена по полу, стене или' +
        ' потолку, созданная паутина опадает сама, и заклинание оканчивается в начале' +
        ' вашего следующего хода. Паутина, разложенная по плоской поверхности,' +
        ' обладает толщиной 5 фт.</p><p>Все существа, начинающие ход в паутине, или' +
        ' входящие в нее в свой ход, должны совершать спасбросок Ловкости. При провале' +
        ' существо становится опутанным, пока остается в паутине, или пока не' +
        ' вырвется.</p><p>Существо, опутанное паутиной, может действием совершить' +
        ' проверку Силы против Сл ваших заклинаний. В случае успеха оно перестает быть' +
        ' опутанным.</p><p>Паутина огнеопасна. Любой 5-фт.ый куб паутины,' +
        ' соприкоснувшийся с огнем, сгорает за 1 раунд, причиняя урон огнем 2к4 всем' +
        ' существам, начинающим ход в огне.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 60,
      unit: 'FEET',
    },
    // area: {
    //   value: 20,
    //   unit: 'FEET',
    //   type: 'CUBE'
    // },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    saveRequired: 'DEXTERITY',
    materials: {
      en: 'A bit of spiderweb',
      ru: 'Кусочек паутины',
    },
    duration: 'ONE_HOUR',
    tags: ['CONTROL'],
    classes: ['SORCERER', 'WIZARD'],
    source: 'PHB',
  },
  {
    _id: new ObjectId(),
    name: {
      en: 'Zone of Truth',
      ru: 'Область истины',
    },
    level: 'LEVEL_2',
    school: 'ENCHANTMENT',
    description: {
      en:
        '<p>You create a magical zone that guards against deception in a' +
        ' 15-foot-radius sphere centered on a point of your choice within range. Until' +
        " the spell ends, a creature that enters the spell's area for the first time" +
        ' on a turn or starts its turn there must make a Charisma saving throw. On a' +
        " failed save, a creature can't speak a deliberate lie while in the radius." +
        ' You know whether each creature succeeds or fails on its saving' +
        ' throw.</p><p>An affected creature is aware of the spell and can thus avoid' +
        ' answering questions to which it would normally respond with a lie. Such a' +
        ' creature can be evasive in its answers as long as it remains within the' +
        ' boundaries of the truth.</p>',
      ru:
        '<p>Вы создаёте магическую зону, защищающую от обмана в сфере с радиусом 15' +
        ' фт. с центром на точке, выбранной вами в пределах дистанции. Пока заклинание' +
        ' активно, существо, впервые за ход входящее в область этого заклинания или' +
        ' начинающее в ней ход, должно совершить спасбросок Харизмы. При провале' +
        ' существо не может умышленно лгать, находясь в указанном радиусе. Вы' +
        ' знаете, какие существа прошли спасбросок, а какие' +
        ' провалили.</p><p>Попавшее под действие заклинания существо знает о' +
        ' заклинании, и потому может избегать отвечать на вопросы, на которые оно' +
        ' предпочло бы солгать. Такие существа могут давать уклончивые ответы, пока' +
        ' принуждены говорить правду.</p>',
    },
    castingTime: 'ACTION',
    range: {
      value: 60,
      unit: 'FEET',
    },
    // area: {
    //   value: 15,
    //   unit: 'FEET',
    //   type: 'SPHERE'
    // },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    saveRequired: 'CHARISMA',
    duration: 'TEN_MINUTES',
    tags: ['CONTROL'],
    classes: ['BARD', 'CLERIC', 'PALADIN'],
    source: 'PHB',
  },
];

const seed = async () => {
  try {
    console.log('🕑[seed]: running...');

    const db = await connectDatabase();

    for (const spell of spells) {
      await db.spells.insertOne(spell);
    }

    console.log('✔️ [seed]: success! Press Ctrl+C to finish.');
  } catch {
    throw new Error('failed to seed database');
  }
};

seed().then(() => console.log("Everything's fine"));
