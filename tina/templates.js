export function reformsFields() {
  return [
    {
      type: "object",
      name: "Reforms",
      label: "Reforms",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "name",
        },
        {
          type: "object",
          name: "steps",
          label: "steps",
          fields: [
            {
              type: "object",
              name: "not_started",
              label: "Not Started",
              fields: [
                {
                  type: "string",
                  name: "status",
                  label: "status",
                  options: ["Not Started", "Incomplete", "Completed"],
                },
                {
                  type: "string",
                  name: "description",
                  label: "description",
                  ui: {
                    component: "textarea",
                  },
                },
                {
                  type: "string",
                  name: "link",
                  label: "link",
                },
              ],
            },
            {
              type: "object",
              name: "incomplete",
              label: "Incomplete",
              fields: [
                {
                  type: "string",
                  name: "status",
                  label: "status",
                  options: ["Not Started", "Incomplete"],
                },
                {
                  type: "string",
                  name: "description",
                  label: "description",
                  ui: {
                    component: "textarea",
                  },
                },
                {
                  type: "string",
                  name: "link",
                  label: "link",
                },
              ],
            },
            {
              type: "object",
              name: "completed",
              label: "Completed",
              fields: [
                {
                  type: "string",
                  name: "status",
                  label: "status",
                  options: ["Not Started", "Incomplete", "Completed"],
                },
                {
                  type: "string",
                  name: "description",
                  label: "description",
                  ui: {
                    component: "textarea",
                  },
                },
                {
                  type: "string",
                  name: "link",
                  label: "link",
                },
              ],
            },
          ],
        },
        {
          type: "string",
          name: "status",
          label: "status",
          options: ["not_started", "incomplete", "completed"],
        },
        {
          type: "string",
          name: "difficulty",
          label: "difficulty",
          options: ["low", "medium", "high"],
        },
      ],
    },
  ];
}
export function testFields() {
  return [
    {
      type: "object",
      name: "Tech_policy_test",
      nameOverride: "Tech policy test",
      label: "Tech policy test",
      list: true,
      fields: [
        {
          type: "string",
          name: "framework",
          label: "framework",
        },
        {
          type: "string",
          name: "link",
          label: "link",
        },
        {
          type: "string",
          name: "reference",
          label: "reference",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "Transparency_Requirement",
          label: "Transparency_Requirement",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "Transparency_Timeline",
          label: "Transparency_Timeline",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "Data_Quality",
          nameOverride: "Data Quality",
          label: "Data Quality",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "Security_Requirement",
          label: "Security_Requirement",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "Security_Types_of_Safeguards",
          nameOverride: "Security_Types of Safeguards",
          label: "Security_Types of Safeguards",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "Security_Confidentiality",
          label: "Security_Confidentiality",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "Data_Breach_Notification_Data_Subject",
          nameOverride: "Data Breach Notification_Data Subject",
          label: "Data Breach Notification_Data Subject",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "Data_Breach_Notification_Data_Protection_Authority",
          nameOverride: "Data Breach Notification_Data Protection Authority",
          label: "Data Breach Notification_Data Protection Authority",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "Retention_Requirement",
          label: "Retention_Requirement",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "Retention_Anonymization",
          label: "Retention_Anonymization",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "Cross_Border_Transfers_Adequacy_of_Third_Country_Protections",
          nameOverride:
            "Cross-Border Transfers_Adequacy of Third Country Protections",
          label: "Cross-Border Transfers_Adequacy of Third Country Protections",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "Cross_Border_Transfers_Adequacy_of_Third_Party_Protections",
          nameOverride:
            "Cross-Border Transfers_Adequacy of Third Party Protections",
          label: "Cross-Border Transfers_Adequacy of Third Party Protections",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "Cross_Border_Transfers_Prohibition_on_Unnecessary_Restrictions",
          nameOverride:
            "Cross-Border Transfers_Prohibition on Unnecessary Restrictions",
          label:
            "Cross-Border Transfers_Prohibition on Unnecessary Restrictions",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "Accountability",
          label: "Accountability",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "Privacy_by_Design",
          nameOverride: "Privacy by Design",
          label: "Privacy by Design",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ];
}
export function test2Fields() {
  return [];
}
export function textFields() {
  return [
    {
      type: "string",
      name: "slug",
      label: "slug",
      required: true,
    },
    {
      type: "string",
      name: "site_title",
      label: "site_title",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "subtitle",
      label: "subtitle",
    },
    {
      type: "string",
      name: "credit",
      label: "credit",
    },
    {
      type: "string",
      name: "iframe",
      label: "iframe",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "text",
      label: "text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "download_title",
      label: "download_title",
    },
    {
      type: "string",
      name: "download_text",
      label: "download_text",
    },
  ];
}
