const getListBook = {
  type: 'object',
  properties: {
    page: {
      type: 'number',
    },
    count: {
      type: 'number',
    },
    filter: {
      type: 'object',
      properties: {
        field: {
          type: 'string',
          enum: ['title', 'author', 'description'],
        },
        value: {
          type: 'string',
        },
      },
    },
    sort: {
      type: 'object',
      properties: {
        field: {
          type: 'string',
          enum: ['id', 'date'],
        },
        value: {
          type: 'string',
          enum: ['ASC', 'DESC'],
        },
      },
    },
  },
};

const addBook = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      minLength: 2,
      maxLength: 255,
    },
    date: {
      format: 'date',
    },
    author: {
      type: 'string',
      minLength: 2,
      maxLength: 255,
    },
    description: {
      type: 'string',
      minLength: 2,
    },
    image: {
      type: 'string',
      minLength: 2,
      maxLength: 255,
    },
  },
  required: ['title', 'date', 'author'],
};

const updateBook = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      minLength: 2,
      maxLength: 255,
    },
    date: {
      format: 'date',
    },
    author: {
      type: 'string',
      minLength: 2,
      maxLength: 255,
    },
    description: {
      type: 'string',
      minLength: 2,
    },
    image: {
      type: 'string',
      minLength: 2,
      maxLength: 255,
    },
  },
};

module.exports = {
  getListBook,
  addBook,
  updateBook,
};
