import { defineField, defineType } from 'sanity'


export const homeBackgroundImage = defineType({
    name: 'backgroundImage',
    title: 'Imagem de Fundo Home',
    type: 'document',
    fields: [
        defineField({
        name: 'image',
        title: 'Imagem',
        type: 'image',
    })],

})
