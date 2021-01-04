import { computed, defineComponent, Prop, PropType } from 'vue'
import NumberField from './fields/NumberField'
// import StringField from './fields/StringField'
import StringField from './fields/StringField'
import ObjectField from './fields/ObjectField'
import ArrayField from './fields/ArrayField'
import { Schema, SchemaTypes, FiledPropsDefine } from './types'
import { retrieveSchema } from './utils'
export default defineComponent({
  name: 'SchemaItem',
  props: FiledPropsDefine,
  setup(porps) {
    const retrievedSchemaRef = computed(() => {
      const { schema, rootSchema, value } = porps
      return retrieveSchema(schema, rootSchema, value)
    })
    return () => {
      const { schema, rootSchema, value } = porps
      const retrievedSchema = retrievedSchemaRef.value
      const type = schema.type
      let ComPonent: any
      switch (type) {
        case SchemaTypes.STRING: {
          ComPonent = StringField
          break
        }
        case SchemaTypes.NUMBER: {
          ComPonent = NumberField
          break
        }
        case SchemaTypes.OBJECT: {
          ComPonent = ObjectField
          break
        }
        case SchemaTypes.ARRAY: {
          ComPonent = ArrayField
          break
        }
        default: {
          console.warn(`{type} is not supported`)
        }
      }
      return <ComPonent {...porps} schema={retrievedSchema} />
    }
  },
})
