---
to: "test/<%= h.changeCase.kebab(name).toLowerCase().slice(0, 5) === 'base-' ? '_' : '' %><%= h.changeCase.kebab(name) %>.spec.js"
---
<%
  let fileName = h.changeCase.kebab(name).toLowerCase()
  const importName = h.changeCase.pascal(fileName)
  if (fileName.slice(0, 5) === 'base-') {
    fileName = '_' + fileName
  }
%>
import { mount } from '@vue/test-utils'
import <%= importName %> from '@/components/<%= fileName %>'

describe('<%= importName %>', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(<%= importName %>)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})