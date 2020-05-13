import { mount } from '@vue/test-utils'
import ProductFeatures from '@/components/product-features'

describe('ProductFeatures', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ProductFeatures)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
