const ShortUniqueId = require("short-unique-id");

const generateSlug = () => (context) => {
  const uid = new ShortUniqueId({ length: 6 });
  context.data.slug = uid();

  return context;
};

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [generateSlug()],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
