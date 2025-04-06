const HARDWARE = {
  computers: [
    {
      name: "Macbook Pro 16-inch M1-Max",
      desc: "My primary workstation with exceptional performance for development and design tasks. The M1 Max chip handles everything I throw at it with incredible battery life and silent operation.",
      tags: ["Laptop", "Apple", "M1 Max"],
      specs: ["10-core CPU", "32-core GPU", "32GB RAM", "1TB SSD"]
    },
    {
      name: "Nuphy Air 75v2",
      desc: "My main mechanical keyboard with satisfying tactile feedback and premium build quality. The 75% layout offers perfect balance between compactness and functionality.",
      tags: ["Mechanical Keyboard", "75% Layout", "Wireless"],
      features: ["Low-profile switches", "RGB backlighting", "Wireless/USB-C connectivity"]
    },
    {
      name: "Apple Magic Trackpad 2",
      desc: "The perfect companion to my workflow with its large surface area and precise gesture controls. macOS integration makes navigation fluid and intuitive.",
      tags: ["Trackpad", "Apple", "Gesture Control"],
      features: ["Force Touch", "Glass surface", "Rechargeable battery"]
    },
  ],
  monitors: [
    {
      name: "Xiaomi Mi Curved Monitor G34WQi",
      desc: 'My ultrawide primary display offering immersive workspace with excellent color accuracy. The 34" 3440x1440p resolution at 180Hz provides smooth visuals for both coding and occasional gaming.',
      tags: ["Monitor", "Ultrawide", "Curved"],
      specs: ["34-inch", "3440x1440p", "180Hz", "1500R curvature", "DCI-P3 95%"]
    },
    {
      name: "LG UltraGear NanoIPS 32GP850-B",
      desc: 'My vertical secondary monitor for documentation, terminals, and code reviews. The 32" NanoIPS panel delivers exceptional color reproduction with crisp text rendering at all viewing angles.',
      tags: ["Monitor", "Vertical", "NanoIPS"],
      specs: ["32-inch", "2560x1440p", "185Hz", "DCI-P3 98%"]
    },
  ],
  audio: [
    {
      name: "Apple Airpods 2",
      desc: "My daily wireless earbuds for calls and media consumption. The seamless Apple ecosystem integration allows instant switching between devices with impressive sound quality and comfort for extended wear.",
      tags: ["Headphone", "Wireless", "Apple"],
      features: ["Quick pairing", "Touch controls", "5-hour battery life"]
    },
  ],
};

const software = [
  {
    name: "NeoVim",
    desc: "My primary code editor that I've extensively customized with plugins and keybindings to match my workflow. The modal editing paradigm and extensibility make it indispensable for rapid development across all languages.",
    tags: ["Editor", "Terminal", "Customizable"],
    features: ["Modal editing", "Plugin ecosystem", "Lua configuration", "LSP support"]
  },
  {
    name: "TMUX",
    desc: "Essential terminal multiplexer that manages my development environment with customized sessions, windows, and panes. Seamless integration with NeoVim creates a powerful IDE-like experience in the terminal.",
    tags: ["Terminal", "Productivity", "Session Management"],
    features: ["Session persistence", "Split panes", "Custom keybindings"]
  },
  {
    name: "Ghostty",
    desc: "Modern GPU-accelerated terminal emulator delivering exceptional performance and rendering quality. The minimal latency and crisp font rendering make terminal work a pleasure.",
    tags: ["Terminal", "Performance", "GPU-Accelerated"],
    features: ["Hardware acceleration", "Low latency", "Ligature support"]
  },
  {
    name: "Oh my zsh",
    desc: "My shell environment enhanced with powerlevel10k theme for informative and visually appealing terminal prompts. Custom aliases and plugins streamline common tasks and git workflows.",
    tags: ["Terminal", "Shell", "Customization"],
    features: ["Auto-completion", "Git integration", "Custom themes"]
  },
  {
    name: "WebStorm",
    desc: "My secondary editor of choice with powerful integrated tools. WebStorm offers intelligent code completion, seamless debugging, and built-in version control all in one sleek interface. Perfect for JavaScript, TypeScript, and front-end development workflows.",
    tags: ["Editor", "IDE", "JavaScript", "Web Development"],
    features: [
      "Smart code completion",
      "Integrated debugger",
      "Git integration",
      "Built-in terminal",
      "Framework support"
    ],
    website: "https://www.jetbrains.com/webstorm/"
  }
];

const hosting = [
  {
    name: "Vercel",
    desc: "My go-to platform for deploying frontend applications with zero configuration. The seamless GitHub integration, automatic previews for each PR, and edge network make it ideal for Next.js projects.",
    tags: ["Hosting", "Frontend", "Serverless"],
    features: ["Automatic deployments", "Preview environments", "Serverless functions"]
  },
  {
    name: "AWS",
    desc: "Comprehensive cloud platform powering my more complex infrastructure needs. The vast service catalog allows for building highly available and scalable applications with precise control over resources and configurations.",
    tags: ["Hosting", "Cloud", "Scalability", "Infrastructure"],
    services: ["EC2", "S3", "Lambda", "RDS", "CloudFront"]
  },
  {
    name: "PlanetScale",
    desc: "MySQL-compatible serverless database platform built on Vitess that elegantly handles my data storage needs. The database branching workflow and schema changes without locks are game-changers for development velocity.",
    tags: ["Database", "Serverless", "MySQL"],
    features: ["Horizontal sharding", "Database branching", "Serverless scaling"]
  },
  {
    name: "Render",
    desc: "Flexible cloud platform for deploying full-stack applications with simplified operations. The straightforward configuration and reasonable pricing make it perfect for projects requiring both backend and frontend components.",
    tags: ["Hosting", "Full-Stack", "DevOps"],
    features: ["Automatic scaling", "Managed databases", "Private networking"]
  },
  {
    name: "Netlify",
    desc: "Intuitive platform for static sites and JAMstack applications with powerful CI/CD capabilities. The form handling, auth integration, and edge functions provide everything needed for modern web applications.",
    tags: ["Hosting", "Static Sites", "JAMstack"],
    features: ["Git-based workflow", "Serverless functions", "Form handling"]
  },
  {
    name: "Z.com",
    desc: "Reliable service provider for domain registration and basic hosting needs. Their straightforward management interface and competitive pricing make domain administration hassle-free.",
    tags: ["Hosting", "Domain", "Email Hosting"],
    services: ["Domain registration", "DNS management", "Email forwarding"]
  },
];
