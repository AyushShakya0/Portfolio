const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const navIcons_white = [
  {
    id: 1,
    img: "/icons/wifi-white.svg",
  },
  {
    id: 2,
    img: "/icons/search-white.svg",
  },
  {
    id: 3,
    img: "/icons/user-white.svg",
  },
  {
    id: 4,
    img: "/icons/mode-white.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  // {
  //   id: 1,
  //   date: "Sep 2, 2025",
  //   title:
  //     "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
  //   image: "/images/blog1.png",
  //   link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  // },
  // {
  //   id: 2,
  //   date: "Aug 28, 2025",
  //   title: "The Ultimate Guide to Mastering Three.js for 3D Development",
  //   image: "/images/blog2.png",
  //   link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  // },
  // {
  //   id: 3,
  //   date: "Aug 15, 2025",
  //   title: "The Ultimate Guide to Mastering GSAP Animations",
  //   image: "/images/blog3.png",
  //   link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  // },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Laravel", 'Php'],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#181717",
    link: "https://github.com/AyushShakya0",
  },
  {
    id: 2,
    text: "instagram",
    icon: "/icons/instagram-white.svg",
    bg: "#E4405F",
    // bg: "linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4)",
    link: "https://www.instagram.com/shakyaayush82/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#0A66C2",
    link: "https://x.com/AyushSh75598165",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/ayush-shakya-8b06292b5/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/me.jpeg",
  },
  {
    id: 2,
    img: "/images/me3.jpeg",
  },
  {
    id: 3,
    img: "/images/me10.jpeg",
  },

];

export {
  navLinks,
  navIcons,
  navIcons_white,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Mojito",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Mojito.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Cocktail Website is a visually rich frontend experience crafted to showcase drinks in an engaging and interactive way.",
            "It goes beyond a simple catalog by incorporating smooth animations, creative layouts, and immersive scrolling effects.",
            "It feels like flipping through a premium cocktail menu—stylish, fluid, and designed to impress.",
            "Built with React, GSAP, and Tailwind CSS, it focuses on high-performance animations and modern UI design."
          ],
        },
        {
          id: 2,
          name: "Mojito.com",
          icon: "/images/mojito.png",
          kind: "file",
          fileType: "url",
          href: "https://gsap-cocktails-demo-seven.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "mojito.png",
          icon: "/images/mojito-page.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/mojito-page.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Absolute Cinema",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[25vh] left-5",
      children: [
        {
          id: 1,
          name: "Movie26.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "The Movie App is a dynamic web application designed to explore movies, discover trends, and dive into detailed film information.",
            "Rather than a static listing, it pulls live data from external APIs to provide constantly updated content with rich visuals and smooth transitions.",
            "Think of it as your personal movie explorer—quick, interactive, and always up to date.",
            "Developed using React and Tailwind CSS, it leverages hooks and state management to handle real-time data efficiently and deliver a seamless browsing experience."
          ],
        },
        {
          id: 2,
          name: "Movie26.com",
          icon: "/images/movie26-black.png",
          kind: "file",
          fileType: "url",
          href: "https://movie26-sage.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 3,
          name: "Movie26.png",
          icon: "/images/Movie26-page.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/Movie26-page.png",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Food Delivery App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[45vh] left-5",
      children: [
        {
          id: 1,
          name: "Food Delivery App.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Food Delivery App is a full-stack platform built to make browsing, ordering, and managing food effortless and intuitive.",
            "More than just a basic ordering system, it features dynamic menus, real-time interactions, and a smooth user experience from selection to checkout.",
            "It feels like having your favorite restaurant lineup right in your pocket—fast, responsive, and easy to navigate.",
            "Built using React with Inertia.js and Tailwind CSS on the frontend, and powered by Laravel and PHP on the backend, it delivers both performance and scalability."
          ],
        },
        {
          id: 2,
          name: "food-delivery-app.com",
          icon: "/images/gofood-logo.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "food-delivery-app.png",
          icon: "/images/gofood-logo.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/gofood-logo.png",
        },
        {
          id: 4,
          name: "video demonstration",
          icon: "/images/gofood-logo.png",
          kind: "file",
          fileType: "video",
          position: "top-52 right-40",
          videoUrl: "/videos/output.mp4",
        },

      ],
    },
        // ▶ Project 4
    {
      id: 8,
      name: "NoteTaker",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-60 left-50",
      windowPosition: "top-[65vh] left-5",
      children: [
        {
          id: 1,
          name: "NoteTaker.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A simple Note Taking app built with TypeScript.",
            "Not much to see i just wanted to try TypeScript"
            
          ],
        },
        {
          id: 2,
          name: "NoteTaker.com",
          icon: "/images/NoteTaker.png",
          kind: "file",
          fileType: "url",
          href: "https://note-taking-crud-sigma.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "NoteTaker.png",
          icon: "/images/NoteTaker.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/NoteTaker.png",
        }

      ],
    },
    // ▶ Project 4
    // {
    //   id: 7,
    //   name: "Portfolio",
    //   icon: "/images/folder.png",
    //   kind: "folder",
    //   position: "top-10 left-80",
    //   windowPosition: "top-[33vh] left-7",
    //   children: [
    //     {
    //       id: 1,
    //       name: "Portfolio.txt",
    //       icon: "/images/txt.png",
    //       kind: "file",
    //       fileType: "txt",
    //       position: "top-5 left-10",
    //       description: [
    //         "The Portfolio Website is an interactive platform designed to replicate the look and feel of a macOS desktop environment.",
    //         "Instead of a traditional scrolling website, it delivers a window-based experience with draggable elements, smooth transitions, and app-like navigation.",
    //         "It feels like using a real desktop—opening apps, exploring projects, and interacting with content in a familiar yet creative way.",
    //         "Built with React, GSAP, and Tailwind CSS, along with additional libraries, it focuses on fluid animations, realistic UI behavior, and a highly engaging user experience."
    //       ],
    //     },
    //     {
    //       id: 2,
    //       name: "food-delivery-app.com",
    //       icon: "/images/safari.png",
    //       kind: "file",
    //       fileType: "url",
    //       href: "",
    //       position: "top-10 right-20",
    //     },
    //     {
    //       id: 4,
    //       name: "food-delivery-app.png",
    //       icon: "/images/image.png",
    //       kind: "file",
    //       fileType: "img",
    //       position: "top-52 right-80",
    //       imageUrl: "/images/project-3.png",
    //     },
    //     {
    //       id: 5,
    //       name: "Design.fig",
    //       icon: "/images/plain.png",
    //       kind: "file",
    //       fileType: "fig",
    //       href: "https://google.com",
    //       position: "top-60 right-20",
    //     },
    //   ],
    // },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/me.jpeg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/me10.jpeg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/dog.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/adrian.jpg",
      description: [
        "Hey! I’m Ayush 👋, a data science enthusiast with a background in web development, passionate about turning data into meaningful insights and building things people actually enjoy using.",

        "I work with Python, data analysis, and visualization—and I also build clean, interactive interfaces using React to bring data to life on the web.",

        "I’m focused on understanding not just how to analyze data, but how to present it in a way that’s clear, useful, and impactful.",

        "I care about writing code that’s efficient, readable, and solves real problems—not just looks good on paper.",

        "Outside of tech, you’ll probably find me exploring new tools, refining projects late at night, or diving deep into how things work behind the scenes.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      href: "/files/resume.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "not ruined?",
      icon: "/images/barista3.jpeg",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/barista3.jpeg",
    },
    // {
    //   id: 3,
    //   name: "true art",
    //   icon: "/images/barista5.jpeg",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-10 left-40",
    //   imageUrl: "/images/barista5.jpeg",
    // },
    {
      id: 2,
      name: "sushi",
      icon: "/images/sushi.jpeg",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/sushi.jpeg",
    },
    {
      id: 3,
      name: "hungry",
      icon: "/images/sushi2.jpeg",
      kind: "file",
      fileType: "img",
      position: "top-40 left-40",
      imageUrl: "/images/sushi2.jpeg",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  videofile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };