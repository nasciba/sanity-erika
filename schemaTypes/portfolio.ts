import {defineField, defineType} from 'sanity'

export const portfolioType = defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'portfolio',
      title: 'Portfolio',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
    }),
  ],
})