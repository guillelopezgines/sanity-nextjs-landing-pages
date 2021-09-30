export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6155d56368e8ca3ae03fcecf',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-x64wgaff',
                  apiId: 'aa034312-5da4-4e42-b26f-c535d2644ee5'
                },
                {
                  buildHookId: '6155d563cd766f490400c138',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ung7s37d',
                  apiId: '1f7cfe4d-1d91-4ee7-91d6-f32da16752aa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/guillelopezgines/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ung7s37d.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
