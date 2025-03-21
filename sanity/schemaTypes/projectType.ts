import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
        name: 'hosting_site',
        type: 'string',
        title: 'Hosting Site',
    }),
    defineField({
        name: 'github_page',
        type: 'string',
        title: 'GitHub Page',
    }),
    defineField({
        name: 'start_date',
        type: 'datetime',
        title: 'Start Date',
    }),
    defineField({
        name: 'related_websites',
        type: 'array',
        title: 'Related Websites',
        of: [{type: 'string'}],
    }),
    defineField({
        name: 'project_icon',
        type: 'image',
        title: 'Project Icon',
    }),
    defineField({
        name: 'project_description',
        type: 'array',
        title: 'Content',
        of: [{type: 'block'}, {type: 'image'}, {type: 'code'}],
    }),
    defineField({
        name: 'related_blog_posts',
        type: 'array',
        title: 'Related Blog Posts',
        of: [{type: 'reference', to: {type: 'post'}}],
    }),
    defineField({
        name: 'project_tags',
        type: 'array',
        title: 'Project Tags',
        of: [{type: 'string'}],
    })
  ],
})