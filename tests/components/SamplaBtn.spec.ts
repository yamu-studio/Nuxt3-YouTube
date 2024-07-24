import { mount, type VueWrapper } from '@vue/test-utils'
import SampleBtn from '~/components/atoms/SampleBtn.vue'

describe('Sample Component', () => {
  let wrapper: VueWrapper
  afterEach(() => {
    wrapper?.unmount()
  })
  test('1回クリックするごとに値が増えていくこと', async () => {
    const wrapper = mount(SampleBtn)
    await wrapper.get('button').trigger('click')
    expect(wrapper.get('[data-testid="counter"]').text()).toBe('1')
    await wrapper.get('button').trigger('click')
    expect(wrapper.get('[data-testid="counter"]').text()).toBe('2')
  })
  test('Nuxtバージョンが正く表示されていること', async () => {
    const wrapper = mount(SampleBtn)
    expect(wrapper.get('[data-testid="nuxt-version"]').text()).toBe('3.12.4')
  })
})
