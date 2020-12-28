import { shallowMount } from '@vue/test-utils'
import TextForm from '@/components/TextForm.vue'

describe('TextForm', () => {
  const props = {
    buttonText: 'buttonText',
    text: 'text',
  }
  const inputText = '入力テキスト'
  const wrapper = shallowMount(TextForm, { propsData: { ...props } })

  describe('propsの確認', () => {
    it('ボタンテキストが正しく表示されている', () => {
      expect(wrapper.find('button').text()).toBe(props.buttonText)
    })
  })
  describe('emitsの確認', () => {
    it('submitが正しく発火されている', async () => {
      await wrapper.find('button').trigger('click')
      expect(wrapper.emitted().submit).toBeTruthy()
    })
    it('update:text（v-model）が正しく発火されている', async () => {
      await wrapper.find('input').setValue(inputText)
      console.log(wrapper.emitted()['update:text'])
      expect(wrapper.emitted()['update:text'][0]).toEqual(['入力テキスト'])
    })
  })
})
