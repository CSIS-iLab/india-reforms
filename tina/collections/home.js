const home = {
  format: "md",
  label: "Home",
  name: "home",
  path: "src/content",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "homepage",
  },
  fields: [
    {
      label: "Title",
      name: "title",
      type: "string",
    },
    {
      label: "Site Title",
      name: "site_title",
      type: "string",
    },
    {
      label: "Subtitle",
      name: "subtitle",
      type: "string",
    },
    {
      label: "Slug",
      name: "slug",
      type: "string",
    },
    {
      label: "Credit",
      name: "credit",
      type: "string",
    },
    {
      label: "Iframe",
      name: "iframe",
      type: "string",
      ui: {
        component: "textarea",
      },
    },
    {
      label: "Text",
      name: "text",
      type: "string",
      ui: {
        component: "textarea",
      },
    },
    {
      label: "Download title",
      name: "download_title",
      type: "string",
    },
    {
      label: "Download text",
      name: "download_text",
      type: "string",
    },
  ],
};

export default home;
