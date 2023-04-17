const footer = {
  format: "md",
  label: "Footer",
  name: "footer",
  path: "src/content",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "footer",
  },
  fields: [
    {
      label: "Slug",
      name: "slug",
      type: "string",
    },
    {
      label: "Methodology title",
      name: "methodology_title",
      type: "string",
    },
    {
      label: "Methodology",
      name: "methodology",
      type: "string",
      ui: {
        component: "textarea",
      },
    },
    {
      label: "Feedback title",
      name: "feedback_title",
      type: "string",
    },
    {
      label: "Feedback instruction",
      name: "feedback_instruction",
      type: "string",
      ui: {
        component: "textarea",
      },
    },
    {
      label: "Feedback form",
      name: "feedback_form",
      type: "string",
    },
    {
      label: "About",
      name: "about",
      type: "string",
      ui: {
        component: "textarea",
      },
    },
    {
      label: "Address",
      name: "address",
      type: "string",
    },
    {
      label: "Copyright",
      name: "copyright",
      type: "string",
      ui: {
        component: "textarea",
      },
    },
  ],
};

export default footer;
