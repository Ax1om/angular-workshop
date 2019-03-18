export const SKILLS_FORM_MODEL = [
  {
    type: 'INPUT',
    id: 'id',
    inputType: 'hidden',
  },
  {
    type: 'INPUT',
    id: 'name',
    label: 'global.name',
    validators: {
      required: null
    }
  },
  {
    type: 'RADIO_GROUP',
    id: 'category',
    label: 'global.category',
    options: [
      {
        'label': 'PROGRAMING_LANGUAGE',
        'value': 'PROGRAMING_LANGUAGE',
      },
      {
        'label': 'OPERATING_SYSTEM',
        'value': 'OPERATING_SYSTEM'
      },
      {
        'label': 'FRAMEWORK',
        'value': 'FRAMEWORK'
      }
    ],
    value: 'FRAMEWORK'
  },
];