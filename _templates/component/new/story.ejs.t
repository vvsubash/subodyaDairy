---
to: "stories/<%= h.changeCase.kebab(name).toLowerCase().slice(0, 5) === 'base-' ? '_' : '' %><%= h.changeCase.kebab(name) %>.stories.js"
---
<%
  let fileName = h.changeCase.kebab(name).toLowerCase()
  const importName = h.changeCase.pascal(fileName)
  if (fileName.slice(0, 5) === 'base-') {
    fileName = '_' + fileName
  }
%>

import <%= importName %> from '../components/<%= fileName %>'

export default { title:  '<%= importName %>' }

export const asAComponent = () => ({
  components: { <%= importName %> },
  template: '<<%= importName %>></<%= importName %>>'
})

