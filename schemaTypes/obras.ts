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

export const videoType = defineType({
  name: 'video',
  title: 'Vídeo',
  type: 'object',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL do vídeo',
      type: 'url',
      description: 'Use uma URL de YouTube, Vimeo ou outro vídeo externo.',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
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
      name: 'mediaType',
      title: 'Tipo de conteúdo',
      type: 'string',
      initialValue: 'obras',
      options: {
        list: [
          {title: 'Obras', value: 'obras'},
          {title: 'Vídeo', value: 'video'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
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
      hidden: ({document}) => document?.mediaType !== 'obras',
    }),
    defineField({
      name: 'video',
      title: 'Vídeo',
      type: 'video',
      hidden: ({document}) => document?.mediaType !== 'video',
    }),
  ],
  validation: (Rule) =>
    Rule.custom((value) => {
      if (!value) {
        return true
      }

      const mediaType = value.mediaType
      const hasObras = Array.isArray(value.obras) && value.obras.length > 0
      const hasVideo = Boolean(value.video)

      if (!mediaType && (hasObras || hasVideo)) {
        return 'Selecione o tipo de conteúdo.'
      }

      if (mediaType === 'obras' && hasVideo) {
        return 'Selecione apenas uma opção: obras ou vídeo.'
      }

      if (mediaType === 'video' && hasObras) {
        return 'Selecione apenas uma opção: obras ou vídeo.'
      }

      if (mediaType === 'obras' && !hasObras) {
        return 'Adicione pelo menos uma obra.'
      }

      if (mediaType === 'video' && !hasVideo) {
        return 'Adicione um vídeo.'
      }

      return true
    }),
})
