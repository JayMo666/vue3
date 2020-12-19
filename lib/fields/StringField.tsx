import { defineComponent, Prop, PropType } from 'vue'

export default defineComponent({
  name: 'StringField',
  props: {},
  setup(porps) {
    return () => {
      return <div>String field</div>
    }
  },
})
