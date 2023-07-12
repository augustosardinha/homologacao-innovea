import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Header from '../Header.vue'

describe('Header.vue', () => {
  it('should render', () => {
    const wrapper = mount(Header)
    expect(wrapper.exists()).toBe(true)
  })

  // it('redirect to news api page', async () => {
  //   const wrapper = mount(Header)
  //   await wrapper.find('a').trigger('click')

  //   expect()
  // })
})
