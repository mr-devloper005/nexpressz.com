import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Media distribution, press releases, and public updates',
      description: 'Explore distributed media, press announcements, campaign updates, and publisher-ready stories through a focused industrial newsroom experience.',
      openGraphTitle: 'Media distribution, press releases, and public updates',
      openGraphDescription: 'Discover media distribution posts, newsroom updates, source notes, and campaign stories in one focused archive.',
      keywords: ['media distribution', 'press release distribution', 'newsroom updates', 'public relations', 'content syndication'],
    },
    hero: {
      badge: 'Media distribution command center',
      title: ['Move every announcement', 'from source to audience.'],
      description: 'Plan, publish, and discover distribution-ready releases, brand updates, media alerts, and public notices across one clear editorial system.',
      primaryCta: { label: 'Browse media updates', href: '/updates' },
      secondaryCta: { label: 'Search archive', href: '/search' },
      searchPlaceholder: 'Search releases, brands, topics, and media categories',
      focusLabel: 'Focus',
      featureCardBadge: 'distribution briefing',
      featureCardTitle: 'The newest published posts define the live distribution desk.',
      featureCardDescription: 'Real posts from the master panel stay at the center of every archive and discovery surface.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for release discovery, campaign clarity, and media pickup.',
      paragraphs: [
        'This site brings press releases, media alerts, source updates, and campaign notes into one organized distribution surface.',
        'Instead of scattering announcements across disconnected pages, the experience keeps every post searchable, categorized, and ready for readers who need context fast.',
        'Whether someone starts with a campaign update, a public notice, or a brand announcement, they can keep moving through related media without losing the thread.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Text-first homepage cards for fast scanning without image clutter.',
        'Connected archive pages for real media distribution posts.',
        'Focused detail pages with clean action paths and related releases.',
        'Lightweight motion that supports discovery without slowing reading.',
      ],
      primaryLink: { label: 'Browse updates', href: '/updates' },
      secondaryLink: { label: 'Search releases', href: '/search' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Explore published media through one connected distribution desk.',
      description: 'Move between releases, campaign updates, public notices, and source material through a clear media distribution layout.',
      primaryCta: { label: 'Browse Updates', href: '/updates' },
      secondaryCta: { label: 'Contact Desk', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our Story',
    title: 'A clearer way to distribute, discover, and act on media updates.',
    description: `${slot4BrandConfig.siteName} is built for organizations that need their announcements, media notes, and public updates to move with clarity.`,
    paragraphs: [
      'Every page is shaped around the practical work of media distribution: clear headlines, fast scanning, dependable archives, and strong calls to action.',
      'The layout keeps releases, updates, and source notes easy to browse so teams, readers, and partners can understand what changed and where to go next.',
    ],
    values: [
      {
        title: 'Distribution-first structure',
        description: 'Releases, alerts, and public updates are organized so readers can scan, verify, and share quickly.',
      },
      {
        title: 'Connected media surfaces',
        description: 'Archive, search, create, and detail pages use one visual language so every update feels part of the same system.',
      },
      {
        title: 'Clear and trustworthy',
        description: 'Sharp layouts, readable summaries, and real post data help visitors find useful media without confusion.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Send a release, partnership note, or distribution question.',
    description: 'Tell the desk what you need to publish, route, correct, or promote. We will connect the request to the right media workflow.',
    formTitle: 'Contact the distribution desk',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search releases, media updates, topics, categories, and public announcements across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Find releases, updates, and media records faster.',
      description: 'Use keywords, categories, and content types to discover real posts from every active distribution section.',
      placeholder: 'Search by release title, brand, topic, category, or source',
    },
    resultsTitle: 'Latest searchable media',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit new media distribution content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to create a media update.',
      description: 'Use your account to open the publishing workspace and prepare releases, campaign notes, and distribution posts.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Create a distribution-ready post.',
      description: 'Choose the content type, add release details, include source links, and prepare a clean post for the archive.',
    },
    formTitle: 'Content details',
    submitLabel: 'Submit content',
    successTitle: 'Content submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to the distribution desk.',
      description: 'Login to create media updates, manage local submissions, and continue through the publishing workspace.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your account and start distributing.',
      description: 'Create an account to access the publishing workspace, save release details, and submit media distribution content.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
