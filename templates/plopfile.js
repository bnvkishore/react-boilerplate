module.exports = `
module.exports = plop => {
  plop.setGenerator('component', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Please enter your component name'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}.js',
        templateFile: 'generator/component.js.hbs'
      }
    ]
  })
}
`