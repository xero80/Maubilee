const COUNTRY_LIST = [
    { name: 'Rock', code: 'rc' },
    { name: 'Jazz', code: 'jz' },
    { name: 'Concert', code: 'co' }
  ];
  
  const DATA_STEP_1 = {
    name: { type: 'text', validations: {}, errors: {}, placeholder: 'Name' },
    region: { type: 'text', validations: {}, errors: {}, placeholder: 'Region' },
    date: {
      type: 'date',
      validations: {},
      errors: {},
      placeholder: 'Date'
    }
  };
  
  const DATA_STEP_2 = {
    description: { type: 'textarea', validations: {}, errors: {}, placeholder: 'Description' },
    type: {
      type: 'select',
      options: COUNTRY_LIST,
      validations: {},
      errors: {},
      placeholder: 'type'
    }
  };
  
  const DATA_STEP_3 = {
    contact: {
      type: 'phone',
      validations: {
        pattern: /^\+(?:[0-9] ?){6,14}[0-9]$/
      },
      errors: {
        pattern: 'Please enter a valid phone number'
      },
      placeholder: 'Contact Number'
    },
    price: {
      type: 'number',
      validations: {
        required: true,
        minLength: 4
      },
      errors: {
        required: 'This field can not be left blank',
        minlength: 'Minimum length should be 4 characters'
      },
      placeholder: 'One Time Password'
    },
    picture: { type: 'text', validations: {}, errors: {}, placeholder: 'img' }
  };
  
  const STEP_ITEMS = [
    { label: 'Step 1', data: DATA_STEP_1 },
    { label: 'Step 2', data: DATA_STEP_2 },
    { label: 'Step 3', data: DATA_STEP_3 },
    { label: 'Review & Submit', data: {} }
  ];
  
  export { STEP_ITEMS }