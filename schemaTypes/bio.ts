import {defineField, defineType} from 'sanity'

export const bioType = defineType({
  name: 'bio',
  title: 'Sobre',
  type: 'document',
  fields: [
    defineField({
      name: 'description',
      title: 'Sobre Érika Amélia',
      type: 'text',
      rows: 8,
    }),
    defineField({
      name: 'image',
      title: 'Imagem',
      type: 'image',
    }),
  ],
})
