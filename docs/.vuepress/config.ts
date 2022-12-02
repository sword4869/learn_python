import { defineConfig } from "vuepress/config";
export default defineConfig({
  title: 'Hello Python',
  base: '/learn-python/',
  themeConfig: {
    // if your docs are in a different repo from your main project:
    docsRepo: "sword4869/learn_python",
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: "main",
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!',
    
    sidebar: [
      {
        title: 'virtual environment',
        children: [
          ['/virtual environment/conda.md','conda.md'],
          ['/virtual environment/pip.md','pip.md'],
          ['/virtual environment/requirements.md','requirements.md'],
          ['/virtual environment/virtualenv.md','virtualenv.md'],
        ],
      }
    ]
  },
});