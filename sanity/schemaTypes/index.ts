import { type SchemaTypeDefinition } from 'sanity'
import { postType } from './postType'
import { projectType } from './projectType'
import { productType } from './productType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, projectType, productType],
}
