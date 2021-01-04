import { mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import JsonSchemaForm, { NumberField } from '../../lib'
// import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.tsx', () => {
  it('should render corret number field', () => {
    let value = ''
    const wrapper = mount(JsonSchemaForm, {
      props: {
        schema: {
          type: 'number'
        },
        value: value,
        onChange: (v: any) => {
          value = v as string
        },
      },
    })

    const numberFiled = wrapper.findComponent(NumberField)
    expect(numberFiled.exists()).toBeTruthy()
  })
})
