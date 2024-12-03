import { type SchemaTypeDefinition } from 'sanity'
import { author } from './author'
import { startups } from './startups'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, startups],
}
