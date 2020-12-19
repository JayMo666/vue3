import { FiledPropsDefine } from '../types'
import { defineComponent, Prop, PropType } from 'vue'

export default defineComponent({
  name: 'NumberField',
  props: FiledPropsDefine,
  setup(porps) {
    return () => {
      return <div>number field</div>
    }
  },
})
