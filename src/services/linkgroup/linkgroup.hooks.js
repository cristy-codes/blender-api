const ShortUniqueId = require("short-unique-id");

const generateSlug = () => (context) => {
  const uid = new ShortUniqueId({ length: 6 });
  context.data.slug = uid();

  return context;
};
const validateFields = () => (context) => {
  if (!Array.isArray(context.data.links)) {
    throw new Error("Links must be an array.");
  }

  const isLinksValidObject = context.data.links.every((element) => {
    if (
      typeof element === "object" &&
      !Array.isArray(element) &&
      element !== null
    ) {
      return ["name", "link"].every((key) => element.hasOwnProperty(key));
    }
    return false;
  });
  if (!isLinksValidObject) {
    throw new Error("Each link must have a name and link field.");
  }

  const isLinksValid = context.data.links.every((e) => {
    try {
      return new URL(e.link);
    } catch (_) {
      return false;
    }
  });
  if (!isLinksValid) {
    throw new Error("Each link must be a valid URL.")
  }
  return context;
};

const maxLinks = () => (context) => {
  if (context.data.links.length <= 20) {
    return context;
  }
  throw new Error("Cannot have more than 20 links.");
};

const linkTitle = () => (context) => {
  context.data.links = context.data.links.map((e) => {
    if (!e.name) {
      const url = new URL(e.link);
      return {
        ...e,
        name: url.hostname.replace(/.+\/\/|www.|\..+/g, ""),
      };
    }
    return e;
  });
  return context;
};

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [validateFields(), maxLinks(), generateSlug(), linkTitle()],
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
