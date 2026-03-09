import {defineField, defineType} from 'sanity'

export const imagemType = defineType({
  name: 'imagem',
  title: 'Imagem',
  type: 'object',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'imagem',
      title: 'Imagem',
      type: 'image',
    }),
    defineField({
      name: 'tecnica',
      title: 'Técnica',
      type: 'string',
    }),
    defineField({
      name: 'ano',
      title: 'Ano',
      type: 'number',
    }),
    defineField({
      name: 'dimensoes',
      title: 'Dimensões',
      type: 'string',
    }),
  ],
})

export const obraType = defineType({
  name: 'obra',
  title: 'Obra',
  type: 'object',
  fields: [
    defineField({
      name: 'nome',
      title: 'Nome',
      type: 'string',
    }),
    defineField({
      name: 'imagens',
      title: 'Imagens',
      type: 'array',
      of: [{type: 'imagem'}],
    }),
    defineField({
      name: 'fotoDeCapa',
      title: 'Foto de Capa',
      type: 'image',
    }),
    defineField({
      name: 'descricao',
      title: 'Descrição',
      type: 'text',
    }),
  ],
})

export const linguagensType = defineType({
  name: 'linguagens',
  title: 'Linguagens',
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      title: 'Nome',
      type: 'string',
    }),
    defineField({
      name: 'fotoDeCapa',
      title: 'Foto de Capa',
      type: 'image',
    }),
    defineField({
      name: 'obras',
      title: 'Obras',
      type: 'array',
      of: [{type: 'obra'}],
    }),
  ],
})
