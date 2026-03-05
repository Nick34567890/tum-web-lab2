import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'master';

export default defineConfig({
  branch,

  // Get this from tina.io after connecting your repo
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'images',
      publicFolder: 'public',
    },
  },

  // Define your content schema
  schema: {
    collections: [
      {
        name: 'homepage',
        label: 'Homepage',
        path: 'src/data',
        format: 'json',
        ui: {
          allowedActions: { create: false, delete: false },
        },
        match: { include: 'homepage' },
        fields: [
          { type: 'string', name: 'siteTitle', label: 'Site Title' },

          // ── Hero ──────────────────────────────────────────────
          {
            type: 'object',
            name: 'hero',
            label: 'Hero Section',
            fields: [
              { type: 'string', name: 'headline', label: 'Headline' },
              { type: 'string', name: 'subtitle', label: 'Subtitle', ui: { component: 'textarea' } },
              {
                type: 'object', name: 'ctaPrimary', label: 'Primary CTA',
                fields: [
                  { type: 'string', name: 'label', label: 'Button Label' },
                  { type: 'string', name: 'href', label: 'Link' },
                ],
              },
              {
                type: 'object', name: 'ctaSecondary', label: 'Secondary CTA',
                fields: [
                  { type: 'string', name: 'label', label: 'Button Label' },
                  { type: 'string', name: 'href', label: 'Link' },
                ],
              },
              {
                type: 'object', name: 'stats', label: 'Stats', list: true,
                fields: [
                  { type: 'string', name: 'number', label: 'Stat Number' },
                  { type: 'string', name: 'label', label: 'Stat Label' },
                ],
              },
            ],
          },

          // ── Features ──────────────────────────────────────────
          {
            type: 'object', name: 'features', label: 'Features Section',
            fields: [
              { type: 'string', name: 'title', label: 'Section Title' },
              { type: 'string', name: 'subtitle', label: 'Section Subtitle' },
              {
                type: 'object', name: 'items', label: 'Feature Cards', list: true,
                fields: [
                  { type: 'string', name: 'icon', label: 'Icon (emoji)' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
                ],
              },
            ],
          },

          // ── How It Works ──────────────────────────────────────
          {
            type: 'object', name: 'howItWorks', label: 'How It Works Section',
            fields: [
              { type: 'string', name: 'title', label: 'Section Title' },
              { type: 'string', name: 'subtitle', label: 'Section Subtitle' },
              {
                type: 'object', name: 'steps', label: 'Steps', list: true,
                fields: [
                  { type: 'string', name: 'number', label: 'Step Number' },
                  { type: 'string', name: 'title', label: 'Step Title' },
                  { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
                ],
              },
            ],
          },

          // ── Results / Testimonials ─────────────────────────────
          {
            type: 'object', name: 'results', label: 'Results Section',
            fields: [
              { type: 'string', name: 'title', label: 'Section Title' },
              { type: 'string', name: 'subtitle', label: 'Section Subtitle' },
              {
                type: 'object', name: 'testimonials', label: 'Testimonials', list: true,
                fields: [
                  { type: 'string', name: 'quote', label: 'Quote', ui: { component: 'textarea' } },
                  { type: 'string', name: 'name', label: 'Name' },
                  { type: 'string', name: 'initials', label: 'Initials' },
                  { type: 'string', name: 'result', label: 'Achievement' },
                ],
              },
            ],
          },

          // ── Pricing ───────────────────────────────────────────
          {
            type: 'object', name: 'pricing', label: 'Pricing Section',
            fields: [
              { type: 'string', name: 'title', label: 'Section Title' },
              { type: 'string', name: 'subtitle', label: 'Section Subtitle' },
              {
                type: 'object', name: 'plans', label: 'Plans', list: true,
                fields: [
                  { type: 'string', name: 'name', label: 'Plan Name' },
                  { type: 'string', name: 'price', label: 'Price' },
                  { type: 'string', name: 'period', label: 'Period (e.g. /month)' },
                  { type: 'boolean', name: 'featured', label: 'Featured (highlighted)' },
                  { type: 'string', name: 'badge', label: 'Badge Text (optional)' },
                  {
                    type: 'object', name: 'features', label: 'Plan Features', list: true,
                    fields: [
                      { type: 'string', name: 'label', label: 'Feature Label' },
                      { type: 'boolean', name: 'included', label: 'Included' },
                    ],
                  },
                ],
              },
            ],
          },

          // ── Contact ───────────────────────────────────────────
          {
            type: 'object', name: 'contact', label: 'Contact Section',
            fields: [
              { type: 'string', name: 'title', label: 'Section Title' },
              { type: 'string', name: 'subtitle', label: 'Section Subtitle' },
            ],
          },

          // ── Footer ────────────────────────────────────────────
          {
            type: 'object', name: 'footer', label: 'Footer',
            fields: [
              { type: 'string', name: 'copyright', label: 'Copyright Text' },
              { type: 'string', name: 'disclaimer', label: 'Disclaimer Text', ui: { component: 'textarea' } },
              {
                type: 'object', name: 'personal', label: 'Personal Contact',
                fields: [
                  { type: 'string', name: 'heading', label: 'Heading' },
                  { type: 'string', name: 'email', label: 'Email' },
                  { type: 'string', name: 'phone', label: 'Phone' },
                  { type: 'string', name: 'location', label: 'Location' },
                ],
              },
              {
                type: 'object', name: 'quickLinks', label: 'Quick Links', list: true,
                fields: [
                  { type: 'string', name: 'label', label: 'Label' },
                  { type: 'string', name: 'href', label: 'URL' },
                ],
              },
              {
                type: 'object', name: 'legal', label: 'Legal Links', list: true,
                fields: [
                  { type: 'string', name: 'label', label: 'Label' },
                  { type: 'string', name: 'href', label: 'URL' },
                ],
              },
            ],
          },

          // ── Mascot ────────────────────────────────────────────
          {
            type: 'object', name: 'mascot', label: 'Mascot',
            fields: [
              { type: 'string', name: 'tooltip', label: 'Tooltip Message' },
            ],
          },
        ],
      },
    ],
  },
});
