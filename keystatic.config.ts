import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  singletons: {
    profile: singleton({
      label: 'Profile / General Info',
      path: 'src/content/profile/index',
      schema: {
        name: fields.text({ label: 'Name' }),
        role: fields.text({ label: 'Role / Title' }),
        location: fields.text({ label: 'Location & Status' }),
        avatar: fields.image({
          label: 'Avatar Image',
          directory: 'public/images/profile',
          publicPath: '/images/profile/',
        }),
        bio: fields.document({
          label: 'Bio / Hero Text',
          formatting: true,
          links: true,
        }),
        socials: fields.object({
          github: fields.text({ label: 'GitHub URL' }),
          twitter: fields.text({ label: 'X / Twitter URL' }),
          linkedin: fields.text({ label: 'LinkedIn URL' }),
          email: fields.text({ label: 'Email Address' }),
        }),
        footer: fields.object({
          copyrightName: fields.text({ label: 'Copyright Owner Name (defaults to Name if blank)' }),
          note: fields.text({ label: 'Footer Note (e.g. Built with Astro & Keystatic)' }),
          showAdminLink: fields.checkbox({ label: 'Show Admin CMS Link in Footer', defaultValue: true }),
          customLinks: fields.array(
            fields.object({
              label: fields.text({ label: 'Link Label' }),
              url: fields.text({ label: 'Link URL' }),
            }),
            {
              label: 'Custom Footer Links',
              getItemLabel: (item) => item.fields.label.value || 'Link Item',
            }
          ),
        }),
      },
    }),

    stack: singleton({
      label: 'Tech Stack',
      path: 'src/content/stack/index',
      format: { data: 'json' },
      schema: {
        categories: fields.array(
          fields.object({
            name: fields.text({ label: 'Category Name (e.g., Languages & Runtimes)' }),
            skills: fields.array(fields.text({ label: 'Skill Name' }), {
              label: 'Skills / Technologies',
              getItemLabel: (item) => item.value || 'Skill',
            }),
          }),
          {
            label: 'Stack Categories',
            getItemLabel: (item) => item.fields.name.value || 'Category',
          }
        ),
      },
    }),
  },
  collections: {
    experience: collection({
      label: 'Experience',
      slugField: 'company',
      path: 'src/content/experience/*',
      format: { data: 'json' },
      schema: {
        roleTitle: fields.text({ label: 'Role Title' }),
        company: fields.slug({ name: { label: 'Company' } }),
        dateRange: fields.text({ label: 'Date Range / Year (e.g., "2023 - Present")' }),
        order: fields.integer({ label: 'Order / Priority', defaultValue: 1 }),
      },
    }),
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        coverImage: fields.image({
          label: 'Cover Image',
          directory: 'public/images/projects',
          publicPath: '/images/projects/',
        }),
        link: fields.text({ label: 'External / GitHub Link' }),
        tag: fields.text({ label: 'Tag / Badge' }),
      },
    }),
    posts: collection({
      label: 'Writing / Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        publishedDate: fields.date({ label: 'Published Date' }),
        summary: fields.text({ label: 'Summary / Subtitle', multiline: true }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          code: true,
          codeBlock: true,
        }),
      },
    }),
  },
});
