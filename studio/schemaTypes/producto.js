import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'producto',
  title: 'Producto Químico',
  type: 'document',
  fields: [
    defineField({
      name: 'nombre',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'descripcion',
      type: 'text',
    }),
    defineField({
      name: 'imagen',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
