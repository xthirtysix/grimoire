import merge from 'lodash.merge';
import {viewerResolvers} from './Viewer'
import {spellResolvers} from './Spells'

export const resolvers = merge(viewerResolvers, spellResolvers)