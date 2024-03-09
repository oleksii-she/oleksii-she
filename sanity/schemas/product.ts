import { defineType} from "sanity";

export const product = defineType({
  name: 'pet',
  type: 'document',
  title: 'Pet',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },

    {
      name: 'breed',
      type: 'string',
      title: 'Breed'
    },
    {
      name: 'sex',
      type: 'string',
      title: 'Sex',
      description: "Please select the person's sex.",
      options: {
        list: ['Male', 'Woman'],
      },
    },
    {name:"image",
    type: 'image',
    title:"Image",
    options: { hotspot: true },
  
  
  },
    {
      title: 'Description', 
      name: 'description',
      description: 'Please enter a description',
      type: 'array', 
      of: [{type: 'block'}]
    },
  ]
})