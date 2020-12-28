import { mount } from '@vue/test-utils'
import Person from '@/components/Person.vue'
import mockPersonsJson from '@/specs/mocks/persons.json'

describe('Person', () => {
  const props = {
    person: mockPersonsJson[0],
    isMale: true,
  }
  const wrapper = mount(Person, { propsData: { ...props } })

  describe('propsの確認', () => {
    it('名前が正しく表示されている', () => {
      const { person } = props
      expect(wrapper.find('.person-name').text()).toBe(person.name)
    })
    it('imgのパスにisMaleが反映されている', () => {
      expect(wrapper.find('.person-image').attributes('src')).toContain('male')
    })
  })
})
