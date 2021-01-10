import { shallowMount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import axios from 'axios'
import Persons from '@/components/Persons.vue'
import Person from '@/components/Person.vue'
import mockPersonsJson from '@/specs/mocks/persons.json'
import { usePersons } from '@/composables/usePersons'

jest.mock('axios', () => ({
  get: () =>
    new Promise((resolve) => {
      resolve({ data: mockPersonsJson })
    }),
}))

describe('Persons', () => {
  const { fetchPersons } = usePersons()
  const props = {
    persons: mockPersonsJson,
    fetchPersons: fetchPersons,
  }
  const itemLength = mockPersonsJson.length

  describe('propsの確認', () => {
    it('子コンポーネントが正しく生成されている', async () => {
      const wrapper = await shallowMount(Persons, {
        propsData: { ...props },
      })
      await flushPromises()
      expect(wrapper.findAllComponents(Person).length).toBe(itemLength)
    })
  })
})
