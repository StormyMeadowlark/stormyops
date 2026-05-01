// src/content/caseStudies.ts
import type { CaseStudy } from "@/types/content"

export const caseStudies: CaseStudy[] = [
  // one full case study at a time
  {
    slug: "skynetrix",
    status: "In Progress",

    implementation: {
      role:
        "Designed and built the backend foundation for a multi-tenant automotive SaaS platform, including service boundaries, tenant-aware data modeling, role-based access, workflow logic, usage-based billing, and payment processing.",
      problem:
        "Independent automotive repair and sales shops often rely on disconnected tools for shop workflows, CRM, customer communication, vehicle data, payments, and reporting. This creates fragmented data, duplicated effort, weak customer retention, and limited visibility into the full relationship between customers, vehicles, jobs, and revenue.",
      approach:
        "Built Skynetrix as a backend-first, API-driven platform using modular services connected through a custom API gateway. The system models real shop workflows from customer and vehicle intake through quotes, repair orders, advisor review, and payment, while also supporting multi-tenant account structures, role-based access, usage tracking, and Stripe-powered billing.",
      constraints: [
        "Built as a solo developer while learning system architecture, microservices, billing, and workflow modeling.",
        "Automotive shop workflows vary heavily, requiring flexible logic instead of rigid one-size-fits-all flows.",
        "Usage-based billing had to work across multiple services, not just one isolated feature.",
        "Frontend dashboards and AI features were intentionally deferred so the backend foundation could be mapped first.",
      ],
      tradeoffs: [
        "Prioritized flexibility and long-term architecture over speed of MVP delivery.",
        "Deferred full CRM, AI, telematics, and customer dashboard features until core shop workflows and billing were established.",
        "Chose a modular service structure to keep domains separated, even though it increased cross-service complexity.",
      ],
      outcome:
        "Established the backend foundation for a platform that can support tenant registration, multi-location shop setup, user roles, customer and vehicle relationships, repair workflows, payments, and usage-based billing.",
    },

    overview: {
      whatItIs:
        "Skynetrix is a multi-tenant, customer-centric automotive platform designed to unify shop management workflows, CRM functionality, customer-facing vehicle data, payments, and usage-based billing.",
      whoItIsFor:
        "Independent automotive repair and sales shops under roughly $3M in annual revenue that need better operational visibility but cannot afford or justify multiple disconnected enterprise tools.",
      whatIOwned: [
        "Backend architecture and service boundary planning",
        "Custom API gateway structure",
        "Tenant and multi-shop account modeling",
        "Role-based access control concepts",
        "Customer, family, shop, and vehicle relationship modeling",
        "Quote, estimate, repair order, and payment workflow design",
        "Usage-based billing logic",
        "Stripe payment integration",
        "Redis and BullMQ background processing for billing and usage tracking",
      ],
    },

    execution: [
      {
        title: "System Architecture",
        body:
          "Skynetrix was designed as a modular backend system where major business domains are separated into services but connected through a custom API gateway.",
        items: [
          {
            title: "API Gateway",
            body:
              "Acts as the central routing layer for communication between frontend clients and backend services.",
          },
          {
            title: "Tenant Management",
            body:
              "Supports account ownership, tenant-aware data separation, and multi-location shop structures.",
          },
          {
            title: "User Management",
            body:
              "Handles account creation, customer registration, shop-side registration, and role-aware access patterns.",
          },
          {
            title: "Vehicle Management",
            body:
              "Models vehicles as first-class records tied to customers, families/groups, shops, and future service history.",
          },
          {
            title: "Shop Workflow Services",
            body:
              "Includes job catalog, quote, estimate, repair order, and shop profile logic to model real repair operations.",
          },
          {
            title: "Billing & Payments",
            body:
              "Uses Stripe for payments and Redis/BullMQ for background usage tracking and billing aggregation.",
          },
        ],
      },
      {
        title: "Customer-Centric Data Model",
        body:
          "A major design decision was treating customers and vehicles as connected long-term relationships instead of isolated transactions.",
        items: [
          {
            title: "Family / Group Profiles",
            body:
              "Customers can group vehicles together so shops can understand household-level vehicle relationships instead of creating disconnected records.",
          },
          {
            title: "Preferred Shops",
            body:
              "Customers can select preferred shops, supporting a future customer-facing dashboard and multi-shop ecosystem.",
          },
          {
            title: "Customer-Owned Data Direction",
            body:
              "The system is designed so customers can eventually access their vehicle history directly instead of relying on printed invoices, text messages, or third-party vehicle history tools.",
          },
        ],
      },
      {
        title: "Billing & Usage Logic",
        body:
          "Skynetrix uses usage-based billing because automotive shops experience seasonality, and a flat monthly fee can become misaligned with revenue during slow months.",
        items: [
          {
            title: "Tracked Usage Events",
            body:
              "Planned billable events include customer creation, appointments, customer messaging, ticket creation, and a percentage of Stripe-paid tickets.",
          },
          {
            title: "Background Processing",
            body:
              "Redis and BullMQ support recurring usage tracking and monthly billing calculations across services.",
          },
          {
            title: "Stripe Integration",
            body:
              "Stripe handles payment processing for customer payments and platform billing workflows.",
          },
        ],
      },
      {
        title: "Future AI & Automation Layer",
        body:
          "AI was intentionally deferred from the MVP, but the backend is being designed to support future intelligence across customer retention, technician performance, and communication workflows.",
        items: [
          {
            title: "Customer Engagement",
            body:
              "Future AI could identify when customers should be contacted, which communication windows perform best, and when follow-ups or reminders should be triggered.",
          },
          {
            title: "Technician Performance",
            body:
              "Future analytics could help shops understand which technicians perform best on specific job types and where comebacks or inefficiencies occur.",
          },
          {
            title: "Phone & Communication Intelligence",
            body:
              "A future Twilio-style phone integration could capture calls, extract customer intent, and reduce manual advisor data entry.",
          },
        ],
      },
    ],

    workflows: [
      {
        title: "Tenant & Shop Registration Flow",
        steps: [
          "A shop owner creates a tenant account.",
          "The system associates the tenant with one or more shop locations.",
          "The first admin user is registered and tied to the tenant.",
          "Future users can be added under role-based access rules.",
        ],
      },
      {
        title: "Customer & Vehicle Flow",
        steps: [
          "A customer creates an account.",
          "Customer data is linked to a tenant-aware context.",
          "Vehicles are added to the customer profile.",
          "Vehicles can be associated with families/groups and preferred shops.",
          "Future repair history can be surfaced back to the customer.",
        ],
      },
      {
        title: "Job to Payment Flow",
        steps: [
          "A job is created for a vehicle.",
          "The job is converted into a quote.",
          "The customer approves all or part of the quote.",
          "Approved work becomes a repair order.",
          "Repair order work can be assigned to one or more technicians.",
          "Technicians mark work complete.",
          "Advisor reviews and approves the completed work.",
          "The customer receives the final amount due.",
          "Payment is processed through Stripe or recorded through another payment method.",
        ],
      },
      {
        title: "Usage-Based Billing Flow",
        steps: [
          "Billable events occur across services.",
          "Usage events are recorded with tenant context.",
          "Redis/BullMQ support background aggregation.",
          "Monthly usage is calculated.",
          "Tenant billing is processed through Stripe.",
        ],
      },
    ],

    results: [
      {
        title: "Backend Foundation Built",
        body:
          "Core backend services were mapped and partially implemented across tenant management, user management, vehicles, shop profiles, job catalogs, quotes, estimates, repair orders, payments, vehicle sales, usage tracking, and early CRM concepts.",
      },
      {
        title: "Real Automotive Workflows Modeled",
        body:
          "The platform models actual repair shop workflows instead of generic CRUD data, including customer approval, technician assignment, advisor review, and payment handling.",
      },
      {
        title: "Usage-Based Billing Established",
        body:
          "Billing logic was designed around real platform usage so shop costs can scale more closely with actual activity and revenue seasonality.",
      },
      {
        title: "Customer Experience Direction Defined",
        body:
          "The system creates a foundation for customer-facing vehicle history, family vehicle management, preferred shops, and proactive service communication.",
      },
    ],

    reflection: {
      whatWorked: [
        "The project exposed the real complexity behind automotive operations and clarified why customer, vehicle, shop, and payment data need to be connected.",
        "Microservices helped separate major business domains and made the platform easier to reason about conceptually.",
        "Usage-based billing created a business model that better matches the seasonality of independent automotive shops.",
      ],
      whatIWouldImprove: [
        "Start with a narrower vertical slice before expanding into many services.",
        "Define frontend interaction patterns earlier so backend workflows are easier to validate against real user behavior.",
        "Create cleaner service boundaries to reduce cross-service complexity.",
        "Validate workflow assumptions with more shop owners before expanding feature depth.",
      ],
      keyTakeaway:
        "Skynetrix taught me how quickly real business workflows create technical complexity, and why implementation requires more than building features — it requires modeling how people, data, permissions, payments, and decisions actually move through a business.",
    },
  },

  {
    slug: "hem-automotive",
    status: "Complete",

    implementation: {
      role:
        "Owned marketing execution, website strategy, paid acquisition, content systems, brand touchpoints, and early customer retention strategy for an automotive repair and sales business.",
      problem:
        "HEM Automotive had no structured marketing system, limited retail customer visibility, no consistent digital acquisition flow, and no customer retention process. The business relied heavily on existing dealership relationships and needed a stronger way to attract local customers, showcase services, and support its expansion into vehicle sales.",
      approach:
        "Built a multi-channel growth system connecting a custom website, lead capture paths, vehicle inventory visibility, Facebook and TikTok content, Google Ads, manual call attribution, and physical brand assets. The work focused on increasing visibility, creating repeatable content rhythms, and identifying future retention systems.",
      constraints: [
        "No CRM or automated attribution system was available.",
        "Customer data was incomplete and not consistently captured.",
        "Marketing and operational changes required stakeholder approval.",
        "Internal workflow and customer experience improvements were identified but not fully implemented.",
        "Execution was handled primarily as a solo contributor across marketing, strategy, and web systems.",
      ],
      tradeoffs: [
        "Prioritized visible marketing execution over deeper internal workflow changes.",
        "Used manual attribution because automated tracking infrastructure did not exist.",
        "Focused on content and paid acquisition while customer retention systems remained future-state.",
      ],
      outcome:
        "Established a repeatable marketing and content system, increased local visibility, supported paid acquisition, created digital inventory visibility, and manually tied ad-driven calls to roughly $20K in revenue impact.",
    },

    overview: {
      whatItIs:
        "HEM Automotive was an automotive repair shop that later expanded into used vehicle sales.",
      whoItIsFor:
        "The business served independent used car dealerships, local retail customers in Topeka, and customers connected to dealership repair work.",
      whatIOwned: [
        "Website strategy and content",
        "Service and contact page structure",
        "Google Ads setup and optimization",
        "Facebook and TikTok content strategy",
        "Posting cadence and content pillars",
        "Manual revenue attribution from ad-driven calls",
        "Brand assets including shirts, stickers, magnets, flyers, and banners",
        "Vehicle inventory visibility on the website",
        "Early customer retention and CRM strategy",
      ],
    },

    execution: [
      {
        title: "Website & Lead Capture System",
        body:
          "Built a custom website that served as the central conversion point for service information, quote requests, customer contact, hiring interest, and vehicle inventory visibility.",
        items: [
          {
            title: "Service Information",
            body:
              "Created structured service pages and breakdowns so customers could understand what the shop offered before calling or visiting.",
          },
          {
            title: "Quote & Contact Forms",
            body:
              "Added form-based pathways for customers to request quotes or contact the business.",
          },
          {
            title: "Hiring Funnel",
            body:
              "Included a resume submission flow for potential employees.",
          },
          {
            title: "Vehicle Inventory Visibility",
            body:
              "Supported the shop’s expansion into vehicle sales by adding public inventory visibility to the website.",
          },
        ],
      },
      {
        title: "Content Strategy & Execution",
        body:
          "Created a repeatable content system across social channels using rotating content pillars and consistent posting.",
        items: [
          {
            title: "Posting Cadence",
            body:
              "Posted on Facebook multiple times per week with original content to maintain visibility and engagement.",
          },
          {
            title: "Content Pillars",
            body:
              "Rotated between educational content, behind-the-scenes shop content, team highlights, vehicle showcases, and promotional content.",
          },
          {
            title: "Engagement Insights",
            body:
              "Observed that team-focused posts, birthday posts, and behind-the-scenes content generated the strongest engagement.",
          },
        ],
      },
      {
        title: "Paid Acquisition & Optimization",
        body:
          "Managed Google Ads and refined campaigns based on performance and call behavior.",
        items: [
          {
            title: "Keyword Optimization",
            body:
              "Actively refined keywords and negative keywords to reduce irrelevant traffic and wasted spend.",
          },
          {
            title: "Manual Attribution",
            body:
              "Tracked inbound calls manually and tied ad-driven calls to revenue where possible.",
          },
          {
            title: "Revenue Impact",
            body:
              "Manually connected ad calls to approximately $20K in revenue lift, with likely additional impact that could not be fully tracked.",
          },
        ],
      },
      {
        title: "Brand Presence",
        body:
          "Extended the business identity beyond the website through physical and digital brand assets.",
        items: [
          {
            title: "Digital Assets",
            body:
              "Created branded social content, website copy, and promotional graphics.",
          },
          {
            title: "Physical Assets",
            body:
              "Created shirts, vehicle stickers, magnets, flyers, and banners to support recognition outside digital channels.",
          },
        ],
      },
      {
        title: "Customer Retention Strategy",
        body:
          "Designed future-state retention ideas that would have moved the business from reactive customer acquisition into structured lifecycle marketing.",
        items: [
          {
            title: "Reactivation",
            body:
              "Recommended contacting customers who had not returned in several months.",
          },
          {
            title: "Post-Service Follow-Up",
            body:
              "Recommended following up after visits to check customer satisfaction and support review generation.",
          },
          {
            title: "Lifecycle Touchpoints",
            body:
              "Recommended birthday discounts, anniversary offers, service reminders, and customer appreciation campaigns.",
          },
          {
            title: "Customer Experience",
            body:
              "Recommended thank-you notes, goody bags, and other high-touch experiences for higher-value repairs.",
          },
        ],
      },
    ],

    workflows: [
      {
        title: "Marketing Acquisition Flow",
        steps: [
          "Content and ads created awareness across Google, Facebook, TikTok, and the website.",
          "Customers either called directly or visited the website.",
          "Website visitors reviewed services, submitted forms, or viewed inventory.",
          "Inbound calls were manually tied back to campaign activity where possible.",
          "Campaign performance informed future content, keyword, and ad adjustments.",
        ],
      },
      {
        title: "Website Lead Flow",
        steps: [
          "Customer lands on the website.",
          "Customer reviews service information or vehicle inventory.",
          "Customer submits a quote/contact form or calls the shop.",
          "The shop follows up manually.",
        ],
      },
      {
        title: "Planned Customer Retention Flow",
        steps: [
          "Customer completes a repair or service visit.",
          "Customer data is captured consistently.",
          "Follow-up message is sent after the visit.",
          "Customer receives reminders, birthday/anniversary offers, or reactivation messages.",
          "Shop maintains ongoing relationship instead of waiting for the customer to return on their own.",
        ],
      },
    ],

    results: [
      {
        title: "Structured Marketing System Created",
        body:
          "Established a repeatable content and advertising system where none previously existed.",
      },
      {
        title: "Local Visibility Increased",
        body:
          "Improved the shop’s online visibility through a custom website, social content, Google Ads, and branded assets.",
      },
      {
        title: "Revenue Impact Tracked",
        body:
          "Manually tied ad-driven calls to approximately $20K in revenue impact.",
      },
      {
        title: "High-Engagement Content Patterns Identified",
        body:
          "Found that human-centered content, team updates, birthdays, and behind-the-scenes posts created the strongest engagement.",
      },
      {
        title: "Future Systems Roadmap Defined",
        body:
          "Identified the need for CRM workflows, customer retention, lifecycle marketing, structured data capture, and customer-facing service visibility.",
      },
    ],

    reflection: {
      whatWorked: [
        "Consistent posting created ongoing visibility.",
        "Google Ads became more effective when negative keywords were actively refined.",
        "Human-centered and behind-the-scenes content performed better than generic promotional content.",
        "The website created the foundation needed to support paid acquisition and vehicle inventory visibility.",
      ],
      whatIWouldImprove: [
        "Implement CRM and customer data capture earlier.",
        "Align marketing with internal shop operations from the start.",
        "Build structured follow-up and retention campaigns sooner.",
        "Create stronger attribution systems instead of relying on manual tracking.",
        "Formalize customer experience workflows around communication, post-service follow-up, and review generation.",
      ],
      keyTakeaway:
        "HEM demonstrated that growth work is not just marketing execution. It requires connecting acquisition, customer experience, internal workflows, data capture, and retention into one operating system.",
    },

    visuals: [
      {
        title: "Website & Lead Capture",
        description:
          "Screenshots showing the custom website, service pages, contact flow, and vehicle inventory visibility.",
        images: [
          {
            src: "/images/case-studies/hem/HEM_Homepage_Website.PNG",
            alt: "HEM Automotive homepage screenshot",
            caption: "Homepage built to establish trust and direct customers into service or inventory paths.",
          },
          {
            src: "/images/case-studies/hem/HEM_Services_Page.PNG",
            alt: "HEM Automotive services page screenshot",
            caption: "Service breakdown page showing structured repair categories.",
          },
          {
            src: "/images/case-studies/hem/HEM_Contact_Page.PNG",
            alt: "HEM Automotive contact page screenshot",
            caption: "Contact and quote request flow for customer inquiries.",
          },
          {
            src: "/images/case-studies/hem/HEM_Vehicle_Inventory_Page.PNG",
            alt: "HEM Automotive vehicle inventory page screenshot",
            caption: "Vehicle inventory visibility supporting the shop’s expansion into sales.",
          },
        ],
      },
      {
        title: "Content Strategy",
        description:
          "Examples of social content used to build visibility, trust, and engagement.",
        images: [
          {
            src: "/images/case-studies/hem/HEM_Behind_The_Scenes_Post.PNG",
            alt: "Behind the scenes HEM Automotive social media post",
            caption: "Behind-the-scenes content showing active shop work.",
          },
          {
            src: "/images/case-studies/hem/HEM_General_Post.PNG",
            alt: "General HEM Automotive branded social media post",
            caption: "Branded social content used for consistent local visibility.",
          },
          {
            src: "/images/case-studies/hem/HEM_Shawn_Birthday_Post.PNG",
            alt: "HEM Automotive team birthday social media post",
            caption: "Team-centered content that helped drive higher engagement.",
          },
        ],
      },
      {
        title: "Paid Acquisition & Optimization",
        description:
          "Google Ads screenshots showing campaign performance and excluded keyword optimization.",
        images: [
          {
            src: "/images/case-studies/hem/HEM_Ads_Results.PNG",
            alt: "HEM Automotive Google Ads performance screenshot",
            caption: "Ad performance used to evaluate paid acquisition activity.",
          },
          {
            src: "/images/case-studies/hem/HEM_Auto_Excluded_Keywords.PNG",
            alt: "HEM Automotive excluded keywords screenshot",
            caption: "Negative keyword work used to reduce irrelevant traffic and wasted spend.",
          },
        ],
      },
      {
        title: "Brand Assets",
        description:
          "Physical brand touchpoints created to extend the business identity beyond the website.",
        images: [
          {
            src: "/images/case-studies/hem/HEM_Tshirt_Design.PNG",
            alt: "HEM Automotive t-shirt design",
            caption: "T-shirt design used as part of the shop’s physical brand presence.",
          },
        ],
      },
    ],
  },

  {
    slug: "stormyops-cms",
    status: "In Progress",

    implementation: {
      role:
        "Designed and built a rules-driven content management system focused on publishing readiness, validation, and flexible content structures. Owned backend architecture, validation logic, settings system, and UI/UX direction.",
      problem:
        "Traditional CMS platforms either act as full site builders (WordPress, Webflow) or require complex setup (headless CMS tools), while none prioritize publishing readiness, validation, and SEO structure as first-class features. Content quality, scheduling, and structure are often left to user discipline instead of being enforced by the system.",
      approach:
        "Built a backend-first CMS centered around a rules engine and settings system. Instead of relying on manual review, the system determines whether content is ready to publish based on configurable validation rules (SEO, structure, media, content quality). The platform is designed to support flexible content structures while maintaining control through system-driven constraints.",
      constraints: [
        "Built as a solo developer while still learning advanced system design.",
        "Needed to support highly flexible content structures without breaking validation logic.",
        "Rules engine interacts with nearly every part of the system, increasing complexity.",
        "UI has not yet been fully implemented—currently driven by mocks and backend logic.",
      ],
      tradeoffs: [
        "Chose flexibility over speed across the entire system.",
        "Deferred multi-tenancy and monetization to focus on core architecture.",
        "Built validation-first instead of content-first, increasing complexity early.",
      ],
      outcome:
        "Established a backend system capable of managing posts, media, comments, and publishing rules through a centralized settings engine, forming the foundation for a scalable, rules-driven CMS.",
    },

    overview: {
      whatItIs:
        "StormyOps CMS is a rules-driven content management system designed to control publishing readiness, SEO validation, scheduling, and content structure through configurable system settings.",
      whoItIsFor:
        "Initially built for personal use, with long-term potential for blue-collar businesses that need a simple but powerful content system without relying on plugins or complex tools.",
      whatIOwned: [
        "System architecture and backend design",
        "Rules engine design and validation logic",
        "Settings system and publishing controls",
        "Content modeling and flexible structure design",
        "UI/UX direction and admin dashboard planning",
        "API design and frontend integration planning",
      ],
    },

    execution: [
      {
        title: "Rules Engine & Validation System",
        body:
          "The CMS is built around a validation engine that determines whether content is ready to publish instead of relying on manual review.",
        items: [
          {
            title: "SEO Validation",
            body:
              "Checks title length, meta description, and structural requirements before allowing content to be published.",
          },
          {
            title: "Content Structure Rules",
            body:
              "Ensures required fields exist and meet defined thresholds before publishing is allowed.",
          },
          {
            title: "Media Validation",
            body:
              "Requires alt text for images and ensures media meets defined standards.",
          },
          {
            title: "Warnings vs Errors",
            body:
              "Differentiates between soft warnings and hard blockers to allow flexible publishing behavior.",
          },
        ],
      },
      {
        title: "Settings-Driven Architecture",
        body:
          "A core differentiator of the system is that publishing behavior is controlled through settings rather than hardcoded rules.",
        items: [
          {
            title: "Global Settings",
            body:
              "Control site-wide behavior such as SEO strictness, publishing rules, and comment enablement.",
          },
          {
            title: "Configurable Constraints",
            body:
              "Allows adjustment of thresholds like title length, description length, and validation strictness.",
          },
          {
            title: "Feature Toggles",
            body:
              "Enables or disables features such as comments or validation requirements per environment.",
          },
        ],
      },
      {
        title: "Content Structure & Flexibility",
        body:
          "Content is modeled to allow each post to have a flexible structure rather than forcing a rigid template.",
        items: [
          {
            title: "Dynamic Content Blocks",
            body:
              "Posts can contain different types of content (text, images, media) depending on the use case.",
          },
          {
            title: "Flexible Layouts",
            body:
              "Each piece of content can render differently on the frontend while still being managed centrally.",
          },
        ],
      },
      {
        title: "Core CMS Workflows",
        body:
          "The system is designed around real content publishing flows rather than simple CRUD operations.",
        items: [
          {
            title: "Post Creation",
            body:
              "Users create posts through structured inputs that trigger validation checks.",
          },
          {
            title: "Draft → Publish Flow",
            body:
              "Content is evaluated by the rules engine before publishing instead of relying on manual approval.",
          },
          {
            title: "Scheduling",
            body:
              "Posts can be scheduled for future publishing as part of the workflow.",
          },
        ],
      },
      {
        title: "Frontend Integration",
        body:
          "The CMS connects to the frontend through API calls, allowing the website to dynamically fetch and render content.",
        items: [
          {
            title: "API-Based Rendering",
            body:
              "Content is retrieved via API and rendered on the frontend site dynamically.",
          },
          {
            title: "Decoupled Architecture",
            body:
              "Separates content management from presentation, allowing flexibility in frontend design.",
          },
        ],
      },
    ],

    workflows: [
      {
        title: "Post Creation & Publishing Flow",
        steps: [
          "User logs into the CMS.",
          "User creates or edits a post.",
          "System runs validation checks (SEO, content, media).",
          "Warnings and errors are surfaced to the user.",
          "If requirements are met, the user can publish or schedule the post.",
          "Content becomes available via API for frontend rendering.",
        ],
      },
      {
        title: "Settings Impact Flow",
        steps: [
          "Admin updates system settings.",
          "Settings adjust validation thresholds and rules.",
          "Future content is evaluated against updated rules.",
          "Publishing behavior changes without code changes.",
        ],
      },
    ],

    results: [
      {
        title: "Validation-First CMS Architecture",
        body:
          "Shifted content management from manual review to system-enforced publishing readiness.",
      },
      {
        title: "Flexible Content Model",
        body:
          "Created a structure that allows different types of content while maintaining centralized control.",
      },
      {
        title: "Scalable Foundation",
        body:
          "Built a system that can evolve into a multi-tenant product or integrate into larger platforms like Skynetrix.",
      },
    ],

    reflection: {
      whatWorked: [
        "The rules engine creates a strong foundation for consistent content quality.",
        "Settings-driven architecture allows flexibility without rewriting code.",
        "Designing for flexibility early enables long-term scalability.",
      ],
      whatIWouldImprove: [
        "Simplify the interaction between rules and settings to reduce complexity.",
        "Implement the frontend earlier to validate real user behavior.",
        "Introduce clearer boundaries between validation logic and content modeling.",
      ],
      keyTakeaway:
        "StormyOps CMS reinforced that strong systems are not just about managing data—they’re about controlling behavior. By moving validation and publishing logic into the system itself, the platform shifts responsibility from the user to the architecture.",
    },

    visuals: [
      {
        title: "Admin Interface & Dashboards",
        description:
          "Mockups showing the admin dashboard, post management, and system navigation.",
        images: [
          {
            src: "/images/case-studies/stormyops/Admin_Dashboard.png",
            alt: "StormyOps CMS admin dashboard",
          },
          {
            src: "/images/case-studies/stormyops/Post_Dashboard.png",
            alt: "StormyOps CMS post dashboard",
          },
          {
            src: "/images/case-studies/stormyops/Add_Edit_Post.png",
            alt: "StormyOps CMS add/edit post screen",
          },
          {
            src: "/images/case-studies/stormyops/Comments_Dashboard.png",
            alt: "StormyOps CMS comments dashboard",
          },
          {
            src: "/images/case-studies/stormyops/Media_Dashboard.png",
            alt: "StormyOps CMS media dashboard",
          },
          {
            src: "/images/case-studies/stormyops/Post_Preview.png",
            alt: "StormyOps CMS post preview",
          },
        ],
      },
      {
        title: "Settings & Validation",
        description:
          "Screens showing how publishing rules and validation thresholds are controlled.",
        images: [
          {
            src: "/images/case-studies/stormyops/Settings.png",
            alt: "StormyOps CMS settings screen",
          },
          {
            src: "/images/case-studies/stormyops/Profile.png",
            alt: "StormyOps CMS Profile screen",
          },
        ],
      },
    ],
  },

  {
    slug: "dreiling-chiropractic",
    status: "Complete",

    implementation: {
      role:
        "Handled full project lifecycle including discovery, design direction, frontend development, content structuring, integrations, and deployment for a client website under tight constraints.",
      problem:
        "The business had no website under its new name, and customers were confused about whether it was the same chiropractor and how the clinic operated. The most critical issue was that the clinic was walk-in only, but customers were still attempting to schedule appointments or call unnecessarily.",
      approach:
        "Designed and built a custom one-page website focused on clarity, trust, and reducing friction. Structured the entire page around answering common customer questions up front, emphasizing the walk-in model, and reinforcing continuity of care under the new business name.",
      constraints: [
        "One-month delivery timeline",
        "Extremely limited budget ($250 total build)",
        "Minimal client input during discovery",
        "No structured requirements or documentation provided",
        "Limited access to owner for feedback (would not meet outside business hours)",
        "Inability to properly stage or retake photos",
        "Restrictions on branding decisions (colors, clothing, imagery)",
      ],
      tradeoffs: [
        "Built a single-page site instead of a multi-page structure due to budget constraints",
        "Reduced animation and interactivity to keep scope manageable",
        "Used available imagery despite quality limitations",
        "Deferred features like scheduling due to scope and technical constraints",
      ],
      outcome:
        "Delivered a fully responsive one-page website that clarified the walk-in model, reinforced brand continuity, and established a digital presence for the business.",
    },

    overview: {
      whatItIs:
        "A custom-built one-page business website designed to communicate a walk-in-only chiropractic model and establish an online presence under a new brand name.",
      whoItIsFor:
        "Local patients searching for chiropractic services who needed clarity on how the clinic operates and whether it was the same provider under a new name.",
      whatIOwned: [
        "Discovery and requirement gathering",
        "Content structure and messaging strategy",
        "Frontend development (React + Vite)",
        "Image capture and editing",
        "Copywriting support (AI-assisted)",
        "Google Maps integration",
        "Facebook feed integration",
        "Deployment and DNS configuration",
      ],
    },

    execution: [
      {
        title: "Discovery & Requirement Translation",
        body:
          "The project required extracting requirements from minimal client input and translating them into a usable product direction.",
        items: [
          {
            title: "Limited Discovery Input",
            body:
              "Client provided minimal structured input and did not complete discovery materials, requiring interpretation of needs.",
          },
          {
            title: "Key Business Goals",
            body:
              "Identified that the most important goals were clarifying the walk-in model and reinforcing brand continuity.",
          },
          {
            title: "Decision Ownership",
            body:
              "Took ownership of layout, structure, and messaging due to lack of defined requirements.",
          },
        ],
      },
      {
        title: "Content & UX Strategy",
        body:
          "The site was structured to reduce confusion and unnecessary customer interactions.",
        items: [
          {
            title: "Walk-In Clarity",
            body:
              "Positioned the walk-in model as the primary message across the page to reduce calls and scheduling confusion.",
          },
          {
            title: "FAQ-Driven Structure",
            body:
              "Designed sections to proactively answer common questions about services, process, and expectations.",
          },
          {
            title: "Call Reduction Strategy",
            body:
              "Intentionally avoided placing the phone number prominently to discourage unnecessary calls.",
          },
        ],
      },
      {
        title: "Technical Implementation",
        body:
          "Built a custom static site with targeted integrations instead of using a CMS or template-based system.",
        items: [
          {
            title: "Custom Frontend",
            body:
              "Developed using React and Vite to create a lightweight, responsive site.",
          },
          {
            title: "Google Maps Integration",
            body:
              "Embedded location data to help users find the clinic easily.",
          },
          {
            title: "Facebook Feed Integration",
            body:
              "Connected live Facebook content to provide ongoing updates without requiring manual site updates.",
          },
        ],
      },
      {
        title: "Content Creation & Media Handling",
        body:
          "Managed all content and media under significant constraints.",
        items: [
          {
            title: "Image Capture",
            body:
              "Captured images during live business hours without controlled lighting or staging.",
          },
          {
            title: "Image Processing",
            body:
              "Edited and formatted images using Canva despite quality limitations.",
          },
          {
            title: "Copywriting",
            body:
              "Used AI-assisted copywriting to structure messaging clearly and concisely.",
          },
        ],
      },
      {
        title: "Scope & Change Management",
        body:
          "Handled post-delivery requests that were outside the original scope.",
        items: [
          {
            title: "Scheduling Request",
            body:
              "Client requested adding a scheduling system after delivery, which would have required a full redesign and new discovery process.",
          },
          {
            title: "Technical Constraint",
            body:
              "Explained that plugin-based solutions (e.g., Calendly) were not compatible with the custom-built architecture without additional work.",
          },
          {
            title: "Expectation Gap",
            body:
              "Client feedback post-delivery highlighted the importance of formal approvals and visual mockups before development.",
          },
        ],
      },
    ],

    workflows: [
      {
        title: "Website Build Flow",
        steps: [
          "Initial discovery conversation to understand basic needs.",
          "Second session to align on direction and tone.",
          "Defined content structure based on business goals.",
          "Built frontend layout and integrations.",
          "Captured and processed images under constraints.",
          "Deployed site and configured DNS.",
        ],
      },
      {
        title: "User Experience Flow",
        steps: [
          "User lands on the website.",
          "User immediately sees walk-in messaging.",
          "User reviews FAQs and service information.",
          "User understands they do not need an appointment.",
          "User visits the clinic without calling.",
        ],
      },
    ],

    results: [
      {
        title: "Clear Business Communication",
        body:
          "Successfully communicated the walk-in-only model and reduced confusion around scheduling expectations.",
      },
      {
        title: "Established Online Presence",
        body:
          "Provided the business with its first website under the new brand name.",
      },
      {
        title: "Delivered Under Constraints",
        body:
          "Completed the project within a short timeline and limited budget while handling unclear requirements.",
      },
    ],

    reflection: {
      whatWorked: [
        "Simplified structure effectively communicated the most important information.",
        "Custom build allowed full control over layout and messaging.",
        "Integrations provided dynamic content without increasing maintenance burden.",
      ],
      whatIWouldImprove: [
        "Require signed contracts before starting work.",
        "Use visual mockups (Figma) before development to align expectations.",
        "Formalize image requirements and schedule controlled photo sessions.",
        "Define scope boundaries more clearly for post-delivery requests.",
      ],
      keyTakeaway:
        "This project reinforced that implementation is not just about building—it’s about managing ambiguity, setting expectations, and translating incomplete requirements into a working system.",
    },

    visuals: [
      {
        title: "Discovery",
        description:
          "Screenshots of the discovery form.",
        images: [
          {
            src: "/images/case-studies/dreiling-chiropractic/Discovery-1.png",
            alt: "Introduction of the discovery questions",
          },
          {
            src: "/images/case-studies/dreiling-chiropractic/Discovery-2.png",
            alt: "First page of the discovery questions",
          },
          {
            src: "/images/case-studies/dreiling-chiropractic/Discovery-3.png",
            alt: "Second page of the discovery questions",
          },
          {
            src: "/images/case-studies/dreiling-chiropractic/Discovery-4.png",
            alt: "Third page of the discovery questions",
          },
          {
            src: "/images/case-studies/dreiling-chiropractic/Discovery-5.png",
            alt: "Fourth page of the discovery questions",
          },
          {
            src: "/images/case-studies/dreiling-chiropractic/Discovery-6.png",
            alt: "Final page of the discovery questions",
          },
        ],
      },
      {
        title: "Website Design",
        description:
          "Screenshots of the one-page layout showing structure, messaging, and integrations.",
        images: [
          {
            src: "/images/case-studies/dreiling-chiropractic/Dreiling-chiropractic-1.png",
            alt: "Dreiling Chiropractic hero section",
          },
          {
            src: "/images/case-studies/dreiling-chiropractic/Dreiling-chiropractic-7.png",
            alt: "Dreiling Chiropractic first part of services section",
          },
          {
            src: "/images/case-studies/dreiling-chiropractic/Dreiling-chiropractic-8.png",
            alt: "Dreiling Chiropractic second part of services section",
          },
          {
            src: "/images/case-studies/dreiling-chiropractic/Dreiling-chiropractic-10.png",
            alt: "Google maps integration",
          },
          {
            src: "/images/case-studies/dreiling-chiropractic/Dreiling-chiropractic-11.png",
            alt: "Facebook feed integration",
          },
          {
            src: "/images/case-studies/dreiling-chiropractic/Dreiling-chiropractic-12.png",
            alt: "Google reviews integration",
          },
          {
            src: "/images/case-studies/dreiling-chiropractic/Dreiling-chiropractic-13.png",
            alt: "Footer",
          },
        ],
      },
    ],
  },

  {
    slug: "vin-vision",
    status: "Complete",

    implementation: {
      role:
        "Designed and built a backend service to automate VIN extraction and decoding from vehicle images, integrating OCR and external APIs into a single processing pipeline.",
      problem:
        "Entering VINs manually is error-prone and time-consuming due to the 17-character alphanumeric format. Incorrect VIN entry leads to inaccurate vehicle data, repeated verification, and workflow delays in shops and dealerships.",
      approach:
        "Built an image-to-data pipeline that takes a photo of a VIN, preprocesses it for clarity, extracts the VIN using OCR, validates it, and sends it to the NHTSA API to return structured vehicle data. The system is designed as a backend service that can integrate into larger workflows like Skynetrix.",
      constraints: [
        "OCR accuracy depends heavily on image quality and orientation",
        "NHTSA API provides limited vehicle data compared to paid providers",
        "Initial implementation required controlled image direction for accuracy",
        "No frontend interface initially—backend service only",
      ],
      tradeoffs: [
        "Used NHTSA API due to cost constraints instead of more complete paid data providers",
        "Required image orientation instead of building full auto-rotation in v1",
        "Focused on pipeline reliability over UI/UX",
      ],
      outcome:
        "Created a working automation pipeline that reduces manual VIN entry errors and provides structured vehicle data from a single image input.",
    },

    overview: {
      whatItIs:
        "VIN Vision is a backend service that extracts VIN numbers from images and converts them into structured vehicle data using OCR and external APIs.",
      whoItIsFor:
        "Automotive repair shops, dealerships, advisors, and technicians who need to input vehicle data quickly and accurately.",
      whatIOwned: [
        "End-to-end service design",
        "Image preprocessing logic",
        "OCR integration (Google Cloud Vision)",
        "VIN validation logic",
        "NHTSA API integration",
        "Backend route orchestration",
      ],
    },

    execution: [
      {
        title: "Image Processing Pipeline",
        body:
          "Built a preprocessing step to improve OCR accuracy before attempting VIN extraction.",
        items: [
          {
            title: "Image Cleanup",
            body:
              "Applied adjustments such as contrast and clarity improvements to make VIN characters more readable.",
          },
          {
            title: "Orientation Constraint",
            body:
              "Initial version required images to be captured in a specific direction to ensure OCR accuracy.",
          },
        ],
      },
      {
        title: "OCR Integration",
        body:
          "Used Google Cloud Vision API to extract text from processed images.",
        items: [
          {
            title: "VIN Extraction",
            body:
              "Parsed OCR results to identify and isolate the 17-character VIN string.",
          },
          {
            title: "Validation Logic",
            body:
              "Ensured extracted VIN matched expected format before proceeding.",
          },
        ],
      },
      {
        title: "Vehicle Data Decoding",
        body:
          "Connected VIN extraction to external vehicle data lookup.",
        items: [
          {
            title: "NHTSA API Integration",
            body:
              "Sent validated VIN to the NHTSA database to retrieve structured vehicle data such as make, model, and year.",
          },
          {
            title: "Data Handling",
            body:
              "Returned decoded data as a structured JavaScript response for future integration.",
          },
        ],
      },
      {
        title: "Service Architecture",
        body:
          "Designed VIN Vision as a modular backend service that can plug into larger systems.",
        items: [
          {
            title: "File Upload Handling",
            body:
              "Used Multer to handle image uploads and route processing.",
          },
          {
            title: "Single Route Flow",
            body:
              "Created a streamlined flow where one request handles upload → processing → extraction → decoding → response.",
          },
          {
            title: "Future Integration",
            body:
              "Designed to integrate into Skynetrix for automated vehicle intake workflows.",
          },
        ],
      },
    ],

    workflows: [
      {
        title: "Image to Vehicle Data Flow",
        steps: [
          "User uploads an image of a VIN.",
          "Image is preprocessed to improve clarity.",
          "OCR extracts text from the image.",
          "System identifies and validates the VIN.",
          "VIN is sent to the NHTSA API.",
          "Structured vehicle data is returned to the system.",
        ],
      },
    ],

    results: [
      {
        title: "Reduced Manual Entry Errors",
        body:
          "Automates VIN entry, eliminating common mistakes caused by manual typing.",
      },
      {
        title: "Faster Vehicle Intake",
        body:
          "Allows shops to quickly capture vehicle data without rechecking VINs multiple times.",
      },
      {
        title: "Foundation for Automation",
        body:
          "Creates a reusable service that can be integrated into larger systems like Skynetrix.",
      },
    ],

    reflection: {
      whatWorked: [
        "OCR integration successfully extracted VINs from images when conditions were controlled.",
        "Pipeline design made the process simple and repeatable.",
        "API chaining created a clean input → output system.",
      ],
      whatIWouldImprove: [
        "Implement automatic image rotation to remove orientation dependency.",
        "Improve VIN detection reliability across poor image conditions.",
        "Integrate with a more comprehensive vehicle data provider.",
        "Add a frontend interface for easier usage.",
      ],
      keyTakeaway:
        "VIN Vision reinforced how small automation systems can remove high-friction manual tasks, and how combining multiple APIs into a single workflow creates real operational efficiency.",
    },
  },

  {
    slug: "vehicle-inventory-system",
    status: "Complete",

    implementation: {
      role:
        "Designed and built a custom vehicle inventory system that allowed an automotive business to add, store, and display vehicles for sale on its website.",
      problem:
        "HEM had expanded into used vehicle sales but had no digital way to showcase available vehicles. Without an inventory system, each vehicle would have required manual page creation or would remain invisible to online shoppers.",
      approach:
        "Built a MERN-based inventory pipeline with admin vehicle intake, image uploads, cloud storage, API-driven data delivery, and dynamic frontend listing pages.",
      constraints: [
        "This was the first system built beyond a basic CRUD application.",
        "The business needed it delivered quickly.",
        "Image ordering depended on strict file naming.",
        "Editing did not work from the frontend and required manual database updates.",
        "Image aspect ratio and count were rigid in the first version.",
      ],
      tradeoffs: [
        "Prioritized speed over a complete sales workflow.",
        "Built a listing system instead of a full vehicle sales platform.",
        "Deferred pricing logic, deposits, online purchase flow, and customer lifecycle tracking.",
      ],
      outcome:
        "Enabled the business to display vehicles online for the first time through an inventory overview page and individual vehicle detail pages.",
    },

    overview: {
      whatItIs:
        "A custom online inventory system for posting and displaying vehicles for sale on an automotive website.",
      whoItIsFor:
        "Automotive repair and sales businesses that need a simple way to showcase available vehicles online.",
      whatIOwned: [
        "Admin vehicle intake flow",
        "Image upload handling",
        "MongoDB vehicle data structure",
        "DigitalOcean media storage",
        "API-driven inventory delivery",
        "React/Vite public listing pages",
        "Available/sold status handling",
        "Custom API gateway and rate limiting",
      ],
    },

    execution: [
      {
        title: "Inventory Intake System",
        body:
          "Created an admin-side workflow for adding vehicles and making them visible on the public website.",
        items: [
          {
            title: "Vehicle Creation",
            body:
              "Added vehicle details through an admin workflow instead of manually building new pages for each listing.",
          },
          {
            title: "Vehicle Status",
            body:
              "Supported basic lifecycle status such as available and sold so vehicles could be shown or removed from public inventory.",
          },
          {
            title: "Image Uploads",
            body:
              "Supported multiple images per vehicle using Multer, with media stored through DigitalOcean.",
          },
        ],
      },
      {
        title: "Frontend Inventory Display",
        body:
          "Built public-facing inventory pages that dynamically rendered vehicle data from the backend.",
        items: [
          {
            title: "Inventory Overview",
            body:
              "Created a page showing all available vehicles in a browsable layout.",
          },
          {
            title: "Vehicle Detail Pages",
            body:
              "Created templated individual pages for each vehicle using backend data.",
          },
          {
            title: "Website Integration",
            body:
              "Connected inventory data to the existing HEM website so vehicle listings became part of the public customer experience.",
          },
        ],
      },
      {
        title: "Backend & API Design",
        body:
          "Built the inventory system as an API-driven MERN application.",
        items: [
          {
            title: "MongoDB Storage",
            body:
              "Stored vehicle metadata such as year, make, model, description, status, and image references.",
          },
          {
            title: "API Gateway",
            body:
              "Routed inventory requests through a custom API gateway.",
          },
          {
            title: "Rate Limiting",
            body:
              "Added request limits to control how often vehicle pages could be accessed within a short time window.",
          },
        ],
      },
      {
        title: "Media Handling",
        body:
          "Managed vehicle photography as part of the listing workflow.",
        items: [
          {
            title: "Image Count",
            body:
              "Supported up to 40 images per vehicle in the first version.",
          },
          {
            title: "Aspect Ratio Requirement",
            body:
              "Images needed to follow a consistent 3:4 aspect ratio to display correctly.",
          },
          {
            title: "Ordering Constraint",
            body:
              "Image display order depended on file naming, which exposed the need for better media ordering controls in future versions.",
          },
        ],
      },
    ],

    workflows: [
      {
        title: "Vehicle Intake to Public Listing Flow",
        steps: [
          "Vehicle is repaired, cleaned, and photographed.",
          "Admin enters vehicle details into the inventory system.",
          "Admin uploads vehicle images.",
          "Vehicle metadata is stored in MongoDB.",
          "Images are stored through DigitalOcean.",
          "Frontend fetches vehicle data through the API.",
          "Vehicle appears on the public inventory overview page.",
          "Customer can open an individual vehicle detail page.",
        ],
      },
      {
        title: "Vehicle Status Flow",
        steps: [
          "Vehicle is created as available.",
          "Vehicle displays publicly on the website.",
          "When sold, vehicle status is changed to sold.",
          "Sold vehicles are removed or hidden from the public available inventory.",
        ],
      },
    ],

    results: [
      {
        title: "Online Inventory Visibility",
        body:
          "Gave the business a way to show available vehicles online for the first time.",
      },
      {
        title: "Repeatable Listing Pipeline",
        body:
          "Replaced manual vehicle page creation with a reusable intake and display workflow.",
      },
      {
        title: "Foundation for Vehicle Sales Systems",
        body:
          "Created an early system that later informed Skynetrix vehicle sales and inventory concepts.",
      },
    ],

    reflection: {
      whatWorked: [
        "The system solved the immediate visibility problem by getting vehicles onto the website.",
        "The API-driven structure made the inventory reusable across frontend pages.",
        "Building media uploads forced a better understanding of file handling, storage, and frontend rendering.",
      ],
      whatIWouldImprove: [
        "Add full frontend editing support.",
        "Remove manual database update requirements.",
        "Decouple image order from file naming.",
        "Allow flexible image aspect ratios and more flexible image limits.",
        "Improve vehicle detail page URLs for SEO.",
        "Integrate VIN Vision to automate VIN-based vehicle data entry.",
        "Add online deposits and payment support.",
        "Connect vehicle inventory to customer and sales records.",
        "Add pricing logic or AI-assisted pricing recommendations.",
      ],
      keyTakeaway:
        "The Vehicle Inventory Management System showed how a simple business need can quickly become a systems problem involving media handling, data modeling, API design, frontend rendering, and future sales workflows.",
    },

    visuals: [
      {
        title: "Vehicle Inventory Pages",
        description:
          "Screenshots showing the public inventory overview and individual vehicle listing pages.",
        images: [
          {
            src: "/images/case-studies/hem/HEM_Vehicle_Inventory_Page.PNG",
            alt: "Vehicle inventory overview page",
            caption:
              "Public-facing inventory overview showing available vehicles.",
          },
        ],
      },
    ],
  },

  {
    slug: "resume-writer",
    status: "Complete",

    implementation: {
      role:
        "Designed and built an AI-assisted resume and hiring tool that converts unstructured user input and job descriptions into targeted resumes, cover letters, and job postings.",
      problem:
        "Writing resumes and cover letters is difficult for many candidates, especially in the automotive industry where experience is often hands-on and not easily translated into professional language. Existing AI tools tend to generate generic content or exaggerate experience without proper constraints.",
      approach:
        "Built a guided input system that collects raw, unstructured experience and combines it with a job description. Used structured prompting to control AI output, ensuring the generated resume and cover letter remain accurate, relevant, and aligned with the target role.",
      constraints: [
        "AI tends to hallucinate or exaggerate experience without strict prompting",
        "User input is often messy, incomplete, or unstructured",
        "Formatting output for clean PDF export required additional handling",
        "Needed to support multiple use cases (resume, cover letter, job description)",
      ],
      tradeoffs: [
        "Focused on core generation flows instead of building full user accounts or saved sessions",
        "Limited feature scope to resume, cover letter, and job description generation",
        "Deferred advanced features like comparisons, tracking, and CRM integration",
      ],
      outcome:
        "Created a functional tool that generates job-specific resumes and cover letters from raw input, reducing the friction of applying for jobs and improving alignment with job descriptions.",
    },

    overview: {
      whatItIs:
        "An AI-powered tool that converts raw experience and job descriptions into targeted resumes, cover letters, and job postings.",
      whoItIsFor:
        "Automotive job seekers (technicians, advisors, managers, sales roles) and shop owners creating job descriptions.",
      whatIOwned: [
        "Prompt engineering and AI output control",
        "User input flow design",
        "Resume and cover letter generation logic",
        "Job description generation logic",
        "PDF export functionality",
        "Frontend and backend integration",
        "Deployment and hosting setup",
      ],
    },

    execution: [
      {
        title: "Structured Input System",
        body:
          "Designed the system to collect raw, unstructured user input and convert it into structured data for AI processing.",
        items: [
          {
            title: "Guided Prompts",
            body:
              "Users answer simple questions instead of formatting resumes manually.",
          },
          {
            title: "Unstructured Input Handling",
            body:
              "Allows users to provide messy or incomplete information without needing to organize it first.",
          },
        ],
      },
      {
        title: "AI Prompt Engineering",
        body:
          "Focused heavily on controlling AI output to ensure accuracy and relevance.",
        items: [
          {
            title: "Context Injection",
            body:
              "Combined user input with job descriptions to tailor output for specific roles.",
          },
          {
            title: "Constraint-Based Prompts",
            body:
              "Prevented AI from exaggerating or inventing experience.",
          },
          {
            title: "Output Formatting",
            body:
              "Structured responses to match resume and cover letter expectations.",
          },
        ],
      },
      {
        title: "Core Feature Set",
        body:
          "Built multiple generation paths within a single tool.",
        items: [
          {
            title: "Resume Generation",
            body:
              "Generates a clean, role-specific resume based on user input and job description.",
          },
          {
            title: "Cover Letter Generation",
            body:
              "Creates tailored, skimmable cover letters aligned with the target job.",
          },
          {
            title: "Job Description Generator",
            body:
              "Allows shop owners to create structured, optimized job postings.",
          },
        ],
      },
      {
        title: "Export System",
        body:
          "Ensured generated content could be used immediately.",
        items: [
          {
            title: "PDF Export",
            body:
              "Converted generated content into downloadable PDFs using html2pdf and document libraries.",
          },
          {
            title: "Formatting Control",
            body:
              "Handled layout consistency to ensure professional output.",
          },
        ],
      },
      {
        title: "System Architecture",
        body:
          "Built as a lightweight full-stack application.",
        items: [
          {
            title: "Frontend",
            body:
              "Next.js and Tailwind used for form flows and user interaction.",
          },
          {
            title: "Backend",
            body:
              "Node.js (Express) and Python (FastAPI) used to handle AI processing and logic separation.",
          },
          {
            title: "AI Integration",
            body:
              "OpenAI used for generation with structured prompts.",
          },
          {
            title: "Hosting",
            body:
              "Frontend deployed on Vercel, backend on DigitalOcean.",
          },
        ],
      },
    ],

    workflows: [
      {
        title: "Resume Generation Flow",
        steps: [
          "User selects resume builder.",
          "User inputs raw experience and answers guided prompts.",
          "User provides a job description.",
          "System combines input with job context.",
          "AI generates a structured resume.",
          "User reviews and exports to PDF.",
        ],
      },
      {
        title: "Cover Letter Flow",
        steps: [
          "User selects cover letter generator.",
          "User inputs job description and tone preferences.",
          "AI generates a tailored cover letter.",
          "User exports or edits the result.",
        ],
      },
      {
        title: "Job Description Flow",
        steps: [
          "User selects job description generator.",
          "User inputs role details.",
          "AI generates a structured job posting.",
          "User exports or uses it directly.",
        ],
      },
    ],

    results: [
      {
        title: "Reduced Application Friction",
        body:
          "Simplified resume and cover letter creation for users who struggle with writing and formatting.",
      },
      {
        title: "Improved Job Alignment",
        body:
          "Generated content is tailored to specific job descriptions instead of generic templates.",
      },
      {
        title: "Dual-Sided Utility",
        body:
          "Supports both job seekers and employers, making it useful across the hiring process.",
      },
    ],

    reflection: {
      whatWorked: [
        "Structured prompting significantly improved AI output quality.",
        "Guided input reduced the barrier for users with unstructured experience.",
        "PDF export made the tool immediately usable in real workflows.",
      ],
      whatIWouldImprove: [
        "Add user accounts and saved sessions.",
        "Allow comparison between multiple resume versions.",
        "Add keyword match scoring against job descriptions.",
        "Integrate CRM features for shops managing applicants.",
        "Expand formatting customization options.",
      ],
      keyTakeaway:
        "Resume Writer showed that AI is only useful when paired with structured input and controlled output. Without constraints, AI generates noise—this system turns it into a practical tool.",
    },
  },

  {
    slug: "stormy-meadowlark",
    status: "Complete",

    implementation: {
      role:
        "Designed and built a marketing website and early custom CMS for an automotive-focused growth business, handling frontend, backend, content structure, and deployment.",
      problem:
        "Automotive shops often rely on templated websites that lack differentiation, clear positioning, and structured content systems. Marketing and operations are disconnected, and most websites fail to support long-term growth or content strategy.",
      approach:
        "Built a custom marketing website paired with a backend blog publishing system to control content creation and messaging. The project focused on positioning, service clarity, and creating a foundation for content-driven growth while experimenting with early CMS architecture.",
      constraints: [
        "This was an early project while still learning full-stack development",
        "Backend CMS structure was a first iteration and not fully refined",
        "Limited time to fully develop content strategy and iterate on design",
        "Focus split between business positioning and technical implementation",
      ],
      tradeoffs: [
        "Prioritized speed of building over long-term CMS flexibility",
        "Focused backend only on blog publishing instead of full CMS functionality",
        "Used markdown-based storage despite known limitations",
      ],
      outcome:
        "Delivered a functional marketing website with contact flows and an early CMS backend, while gaining critical insight into how content systems should be structured.",
    },

    overview: {
      whatItIs:
        "Stormy Meadowlark is a marketing website and early CMS built to support an automotive growth business focused on helping shops attract and retain customers.",
      whoItIsFor:
        "Automotive repair shops and dealerships looking to improve marketing, customer acquisition, and long-term growth.",
      whatIOwned: [
        "Business positioning and messaging",
        "Frontend marketing site design and development",
        "Backend blog publishing system",
        "Content structure and storage decisions",
        "API connections between frontend and backend",
        "Deployment and hosting",
      ],
    },

    execution: [
      {
        title: "Marketing Website",
        body:
          "Built a frontend site focused on communicating services, pricing, and business value.",
        items: [
          {
            title: "Service Positioning",
            body:
              "Defined and presented offerings clearly to differentiate from templated competitors.",
          },
          {
            title: "Contact & Lead Flow",
            body:
              "Added forms for potential clients to reach out or apply for roles.",
          },
          {
            title: "Pricing Visibility",
            body:
              "Included pricing to qualify leads and set expectations early.",
          },
        ],
      },
      {
        title: "Early CMS System",
        body:
          "Developed an initial backend system to support blog publishing.",
        items: [
          {
            title: "Content Storage",
            body:
              "Stored blog content as markdown in MongoDB, enabling flexible formatting but creating long-term limitations.",
          },
          {
            title: "Publishing Flow",
            body:
              "Allowed posts to be created and published through backend routes.",
          },
          {
            title: "Frontend Rendering",
            body:
              "Fetched blog content via API and rendered it dynamically on the site.",
          },
        ],
      },
      {
        title: "Full-Stack Integration",
        body:
          "Connected frontend and backend into a working system.",
        items: [
          {
            title: "API Layer",
            body:
              "Created custom APIs to handle content retrieval and publishing.",
          },
          {
            title: "Data Flow",
            body:
              "Structured content flow from backend storage → API → frontend rendering.",
          },
        ],
      },
      {
        title: "Content Strategy Direction",
        body:
          "Planned the site as a content engine for educating automotive businesses.",
        items: [
          {
            title: "Educational Focus",
            body:
              "Intended to provide blogs that teach marketing and growth strategies.",
          },
          {
            title: "Positioning",
            body:
              "Framed the business as a growth partner rather than just a website provider.",
          },
        ],
      },
    ],

    workflows: [
      {
        title: "Blog Publishing Flow",
        steps: [
          "User logs into backend system.",
          "User creates a blog post using markdown.",
          "Content is stored in MongoDB.",
          "Frontend fetches content via API.",
          "Blog post is rendered on the website.",
        ],
      },
      {
        title: "Customer Lead Flow",
        steps: [
          "User visits marketing site.",
          "User reviews services and pricing.",
          "User submits contact or application form.",
          "Business receives lead for follow-up.",
        ],
      },
    ],

    results: [
      {
        title: "Established Business Presence",
        body:
          "Created a marketing site that communicates services, pricing, and brand direction.",
      },
      {
        title: "First CMS Iteration Built",
        body:
          "Developed an early backend content system that informed future CMS architecture decisions.",
      },
      {
        title: "Foundation for Future Systems",
        body:
          "Directly influenced the design and direction of StormyOps CMS.",
      },
    ],

    reflection: {
      whatWorked: [
        "Custom build allowed full control over messaging and structure.",
        "Backend CMS experimentation clarified what works and what doesn’t.",
        "Full-stack integration created a functional content pipeline.",
      ],
      whatIWouldImprove: [
        "Replace markdown storage with a more flexible structured content model.",
        "Improve image handling within blog posts.",
        "Refactor CMS into a more scalable, rules-driven system (StormyOps CMS).",
        "Align design more closely with automotive industry expectations.",
      ],
      keyTakeaway:
        "Stormy Meadowlark showed that building content systems is not just about publishing—it’s about structuring data, workflows, and flexibility in a way that can scale. This project directly led to the creation of StormyOps CMS.",
    },
  },

  {
    slug: "solar-athletics-rebrand",
    status: "Complete",

    implementation: {
      role:
        "Executed a focused brand refinement by updating typography, color consistency, and converting raster assets into scalable vector formats for a gymnastics and cheer gym.",
      problem:
        "The existing brand assets were inconsistent, used raster images (PNG), and did not align visually with the gym’s intended space-themed identity. This created a disconnect between the physical environment and the brand presentation.",
      approach:
        "Refined existing brand elements instead of redesigning from scratch. Focused on aligning typography and color usage with the space theme while converting assets into SVG format for scalability and consistency across platforms.",
      constraints: [
        "Strict client direction on colors and overall brand direction",
        "Short timeline (1 week)",
        "Limited scope (no full rebrand or positioning work)",
        "Existing assets had to be reused and improved rather than replaced",
      ],
      tradeoffs: [
        "Focused on execution and consistency instead of expanding into full brand strategy",
        "Worked within existing brand constraints rather than redefining identity",
        "Prioritized asset usability (SVG conversion) over deeper design exploration",
      ],
      outcome:
        "Delivered a set of clean, scalable SVG assets with improved typography and color alignment, resulting in a more cohesive and usable brand system.",
    },

    overview: {
      whatItIs:
        "A targeted brand refinement project focused on improving visual consistency, scalability, and alignment with an existing theme.",
      whoItIsFor:
        "Solar Athletics, a gymnastics and cheer gym offering tumbling, trampoline, all-star cheer, and related programs.",
      whatIOwned: [
        "Typography adjustments",
        "Color alignment and correction",
        "PNG to SVG asset conversion",
        "Logo and asset cleanup",
        "Preparation of assets for web and marketing use",
      ],
    },

    execution: [
      {
        title: "Brand Alignment",
        body:
          "Adjusted visual elements to better match the gym’s space-themed identity.",
        items: [
          {
            title: "Typography Refinement",
            body:
              "Selected and adjusted typography to better reflect a modern, space-inspired aesthetic.",
          },
          {
            title: "Color Consistency",
            body:
              "Corrected and standardized colors to align with the intended brand palette.",
          },
        ],
      },
      {
        title: "Asset Conversion & Cleanup",
        body:
          "Focused on making brand assets usable across platforms.",
        items: [
          {
            title: "PNG to SVG Conversion",
            body:
              "Redrew and converted raster images into clean vector formats for scalability and clarity.",
          },
          {
            title: "Manual Reconstruction",
            body:
              "Used Adobe Illustrator to recreate assets accurately rather than relying on automated conversion.",
          },
          {
            title: "Background Removal",
            body:
              "Processed images in Canva to isolate assets before vectorization.",
          },
        ],
      },
      {
        title: "System-Level Thinking",
        body:
          "Ensured the updated assets could be reused consistently across digital and physical environments.",
        items: [
          {
            title: "Scalability",
            body:
              "SVG assets allow for use across websites, print, signage, and merchandise without quality loss.",
          },
          {
            title: "Consistency",
            body:
              "Unified typography and color usage creates a more recognizable brand presence.",
          },
        ],
      },
    ],

    workflows: [
      {
        title: "Asset Refinement Flow",
        steps: [
          "Receive existing PNG brand assets.",
          "Remove backgrounds and clean images.",
          "Recreate assets manually in vector format.",
          "Adjust typography and colors to align with theme.",
          "Export clean SVG files for use across platforms.",
        ],
      },
    ],

    results: [
      {
        title: "Cohesive Brand System",
        body:
          "Improved visual consistency across all branding elements, aligning them with the gym’s theme.",
      },
      {
        title: "Scalable Assets",
        body:
          "Converted assets into SVG format, allowing them to be used across web, print, and merchandise without quality loss.",
      },
      {
        title: "Improved Brand Usability",
        body:
          "Made it easier for the business to apply branding consistently across platforms.",
      },
    ],

    reflection: {
      whatWorked: [
        "Clear client direction made execution straightforward.",
        "Manual SVG recreation ensured high-quality, usable assets.",
        "Focusing on consistency created an immediate visual improvement.",
      ],
      whatIWouldImprove: [
        "Expand the project into a full brand system including guidelines and usage rules.",
        "Extend work into website redesign and digital presence.",
        "Introduce templates for social media and marketing materials.",
        "Push further into experiential branding tied to the gym environment.",
      ],
      keyTakeaway:
        "This project reinforced that strong brands are built through consistency and usability. Even without a full redesign, aligning typography, color, and asset quality can significantly improve how a business is perceived.",
    },

    visuals: [
      {
        title: "Brand Assets",
        description:
          "Examples of updated logo assets and vectorized designs.",
        images: [
          {
            src: "/images/case-studies/solar-athletics/SolarAthleticsRebrand.png",
            alt: "Solar Athletics Rebrand",
          },
        ],
      },
    ],
  },

  {
    slug: "signalscout",
    status: "In Progress",

    implementation: {
      role:
        "Designed and built a URL analysis tool that evaluates SEO readiness, social sharing behavior, and content quality through a structured scan pipeline.",
      problem:
        "Content creators have no fast, centralized way to validate how a page will appear across search engines and social platforms. Checking SEO, Open Graph data, and engagement readiness requires manual inspection across multiple tools.",
      approach:
        "Built a scan-based system where users input a URL, the backend fetches and parses the page, and a rules engine evaluates SEO structure, Open Graph data, and content quality. Combined this with AI-generated recommendations to guide improvements.",
      constraints: [
        "Web pages vary significantly in structure and completeness",
        "Unpublished or protected pages cannot always be scanned",
        "SEO and content quality require interpretation, not just extraction",
        "Needed to balance rule-based analysis with AI flexibility",
      ],
      tradeoffs: [
        "Focused on single-scan results instead of building historical tracking",
        "Simplified scoring logic instead of building a full SEO engine",
        "Deferred user accounts, saved scans, and comparisons",
      ],
      outcome:
        "Created a working scan pipeline that converts manual SEO and content checks into a repeatable, structured analysis workflow.",
    },

    overview: {
      whatItIs:
        "SignalScout is a URL scanning tool that analyzes SEO readiness, Open Graph metadata, and content quality to predict engagement potential.",
      whoItIsFor:
        "Content creators, marketers, and businesses that want to understand how their content performs before publishing or sharing.",
      whatIOwned: [
        "Scan pipeline design",
        "HTML parsing and metadata extraction",
        "Rules-based scoring system",
        "AI recommendation integration",
        "Frontend input/output flow",
        "Backend API development",
      ],
    },

    execution: [
      {
        title: "Scan Pipeline",
        body:
          "Built a structured flow that converts a URL into actionable insights.",
        items: [
          {
            title: "URL Input",
            body:
              "Users provide a URL to analyze.",
          },
          {
            title: "Page Fetching",
            body:
              "Backend retrieves the page content for parsing.",
          },
          {
            title: "HTML Parsing",
            body:
              "Used Cheerio to extract metadata, headings, images, and content structure.",
          },
        ],
      },
      {
        title: "SEO & Metadata Analysis",
        body:
          "Extracted and evaluated key SEO and social sharing signals.",
        items: [
          {
            title: "Title & Meta Description",
            body:
              "Analyzed presence, length, and formatting for search engine display.",
          },
          {
            title: "Open Graph Data",
            body:
              "Extracted OG title, description, and image to simulate social sharing previews.",
          },
          {
            title: "Content Structure",
            body:
              "Checked headings, images, and links for completeness and best practices.",
          },
        ],
      },
      {
        title: "Scoring System",
        body:
          "Converted extracted data into structured scores.",
        items: [
          {
            title: "SEO Score",
            body:
              "Evaluated indexing readiness and metadata quality.",
          },
          {
            title: "Content Quality Score",
            body:
              "Assessed structure, readability, and completeness.",
          },
          {
            title: "Share Score",
            body:
              "Measured how well the page would perform when shared on social platforms.",
          },
        ],
      },
      {
        title: "AI Recommendations",
        body:
          "Augmented rule-based analysis with AI insights.",
        items: [
          {
            title: "Improvement Suggestions",
            body:
              "Generated 3–5 actionable recommendations based on scan results.",
          },
          {
            title: "Prompt Design",
            body:
              "Structured prompts to ensure recommendations stayed relevant to extracted data.",
          },
        ],
      },
      {
        title: "System Architecture",
        body:
          "Built as a lightweight, API-driven analysis tool.",
        items: [
          {
            title: "Frontend",
            body:
              "Next.js interface for URL input and result display.",
          },
          {
            title: "Backend",
            body:
              "Node.js and Express for scanning and processing logic.",
          },
          {
            title: "Data Layer",
            body:
              "PostgreSQL with Prisma for potential scan storage.",
          },
          {
            title: "Deployment",
            body:
              "Deployed using DigitalOcean and Firebase.",
          },
        ],
      },
    ],

    workflows: [
      {
        title: "URL Scan Flow",
        steps: [
          "User inputs a URL.",
          "Backend fetches page content.",
          "HTML is parsed using Cheerio.",
          "Metadata and content structure are extracted.",
          "Rules engine evaluates SEO and content quality.",
          "AI generates improvement recommendations.",
          "Results are returned to the user.",
        ],
      },
    ],

    results: [
      {
        title: "Centralized Content Analysis",
        body:
          "Replaced multiple manual checks with a single scan workflow.",
      },
      {
        title: "Actionable Insights",
        body:
          "Provided clear recommendations instead of just raw data.",
      },
      {
        title: "Pre-Publish Validation",
        body:
          "Enabled users to evaluate content before sharing or indexing.",
      },
    ],

    reflection: {
      whatWorked: [
        "Combining rule-based analysis with AI created more useful output.",
        "Cheerio parsing allowed flexible extraction across different page structures.",
        "The scan pipeline made the process repeatable and scalable.",
      ],
      whatIWouldImprove: [
        "Add saved scans and historical comparison.",
        "Allow side-by-side competitor analysis.",
        "Improve handling of edge cases like dynamic or protected pages.",
        "Expand scoring logic to be more granular and weighted.",
        "Integrate directly into CMS workflows (pre-publish checks).",
      ],
      keyTakeaway:
        "SignalScout showed that raw data isn’t enough—users need structured analysis and clear recommendations. Combining rules with AI turns fragmented checks into a usable system.",
    },
  },

  {
    slug: "wedding-saas",
    status: "Validation",

    implementation: {
      role:
        "Led product discovery and validation for a wedding guest management SaaS, focusing on identifying real user pain points and defining an MVP based on repeated patterns.",
      problem:
        "Wedding planning tools fail to address the most stressful part of the process: managing guests. Brides are forced to manually track RSVPs, handle guest questions, enforce boundaries, and coordinate logistics without a centralized system.",
      approach:
        "Validated the idea through direct user conversations instead of building immediately. Collected qualitative data from brides, identified repeated pain points, and refined the product concept into a focused MVP centered around RSVP management and guest communication.",
      constraints: [
        "No prior personal wedding planning experience",
        "User feedback gathered informally through social platforms",
        "Limited visibility into existing tools being used",
        "Early-stage concept without technical implementation",
      ],
      tradeoffs: [
        "Focused on validation instead of building prematurely",
        "Prioritized core pain points over feature breadth",
        "Deferred complex features like seating charts and vendor management",
      ],
      outcome:
        "Identified clear, repeatable problems around RSVP management, guest behavior, and logistics, validating the need for a centralized guest management system.",
    },

    overview: {
      whatItIs:
        "A SaaS concept focused on simplifying wedding guest management through RSVP tracking, communication, and centralized event information.",
      whoItIsFor:
        "Brides planning their own weddings and wedding planners managing guest logistics.",
      whatIOwned: [
        "Problem discovery and validation",
        "Customer research and conversation design",
        "Pain point synthesis",
        "MVP definition and scoping",
        "Product positioning and pricing hypothesis",
      ],
    },

    execution: [
      {
        title: "Customer Discovery",
        body:
          "Focused on understanding real user problems before building.",
        items: [
          {
            title: "User Interviews",
            body:
              "Engaged with ~20 brides planning their own weddings.",
          },
          {
            title: "Source of Conversations",
            body:
              "Used Facebook wedding groups to find users and initiate discussions.",
          },
          {
            title: "Question Strategy",
            body:
              "Asked open-ended, non-leading questions to uncover real frustrations.",
          },
        ],
      },
      {
        title: "Pain Point Analysis",
        body:
          "Identified consistent patterns across conversations.",
        items: [
          {
            title: "RSVP Chaos",
            body:
              "Guests not responding, incorrect assumptions about invites, and manual tracking.",
          },
          {
            title: "Guest Behavior",
            body:
              "Boundary issues around plus-ones, kids, and unsolicited opinions.",
          },
          {
            title: "Logistics Overload",
            body:
              "Brides managing schedules, roles, and event coordination manually.",
          },
          {
            title: "Mental Load",
            body:
              "Planning becoming overwhelming and stressful instead of enjoyable.",
          },
        ],
      },
      {
        title: "MVP Definition",
        body:
          "Refined the product idea based on validated problems.",
        items: [
          {
            title: "Core Features",
            body:
              "RSVP system, guest management, FAQ hub, and custom wedding site.",
          },
          {
            title: "Deferred Features",
            body:
              "Seating charts, vendor management, and full planning tools.",
          },
          {
            title: "Product Scope",
            body:
              "Focused on guest management instead of full wedding planning.",
          },
        ],
      },
      {
        title: "Business Model Thinking",
        body:
          "Explored pricing and positioning based on perceived value.",
        items: [
          {
            title: "Pricing Model",
            body:
              "Subscription-based pricing (~$85/month or ~$1000/year).",
          },
          {
            title: "Value Framing",
            body:
              "Positioned as a small percentage of total wedding cost for significant stress reduction.",
          },
        ],
      },
    ],

    workflows: [
      {
        title: "Guest Management Flow (Concept)",
        steps: [
          "Bride creates wedding site.",
          "Bride inputs guest list.",
          "Guests receive link to RSVP.",
          "Guests respond and provide details (plus-ones, meals, notes).",
          "System tracks responses and sends reminders.",
          "Bride manages guest list and communication in one place.",
        ],
      },
    ],

    results: [
      {
        title: "Validated Core Problem",
        body:
          "Confirmed that RSVP management and guest coordination are major pain points across users.",
      },
      {
        title: "Clear MVP Direction",
        body:
          "Narrowed product scope to guest management instead of full wedding planning.",
      },
      {
        title: "Market Insight",
        body:
          "Identified emotional and logistical challenges that existing tools fail to address.",
      },
    ],

    reflection: {
      whatWorked: [
        "Open-ended discovery revealed consistent, real problems.",
        "Focusing on patterns instead of individual feedback clarified the opportunity.",
        "Validating before building prevented wasted development effort.",
      ],
      whatIWouldImprove: [
        "Conduct more structured interviews with deeper follow-up questions.",
        "Research existing tools to better understand competition.",
        "Test willingness to pay more directly.",
        "Prototype MVP to validate usability and adoption.",
      ],
      keyTakeaway:
        "The biggest problems are not always technical—they are operational and emotional. Validating real user pain before building is critical to creating a product that people actually want.",
    },
  },
]
