export const USERS_FORM_MODEL = [
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
    type: 'INPUT',
    id: 'lastName',
    label: 'global.lastName',
    validators: {
      required: null
    }
  },
  {
    type: 'INPUT',
    inputType: 'email',
    id: 'email',
    label: 'global.email',
    validators: {
      required: null,
      email: null
    }
  },
  {
    type: 'INPUT',
    id: 'username',
    label: 'global.username',
    validators: {
      required: null
    }
  },
  {
    type: 'INPUT',
    inputType: 'date',
    id: 'birthday',
    label: 'global.birthday',
    validators: {
      required: null
    }
  }
];