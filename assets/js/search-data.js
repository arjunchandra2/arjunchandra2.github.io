// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-life",
          title: "life",
          description: "This page will be filled soon, but it&#39;s mostly for me anyways :)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/life/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "projects-compositional-reasoning-in-vlms",
          title: 'Compositional Reasoning in VLMs',
          description: "A hard negative fine-tuning method to improve compositional reasoning in CLIP",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-multi-agent-multi-armed-bandits",
          title: 'Multi-Agent Multi-Armed Bandits',
          description: "An empirical study of fair algorithms in the MA-MAB setting from NeurIPS 2021",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-lattice-based-post-quantum-cryptography",
          title: 'Lattice-Based Post-Quantum Cryptography',
          description: "A study of LWE-based cryptosystems and their role in building quantum-safe encryption",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-intelligent-waste-detection-for-sustainability",
          title: 'Intelligent Waste Detection for Sustainability',
          description: "A machine learning system for identifying contamination and improving recycling at scale",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-pokémon-reinforcement-learning",
          title: 'Pokémon Reinforcement Learning',
          description: "Training an agent to play a simplified Pokémon game using reinforcement learning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-visualizing-particle-trajectories-in-electric-fields",
          title: 'Visualizing Particle Trajectories in Electric Fields',
          description: "Simulating the trajectory of a charged particle in an Electric field via Euler&#39;s method",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-predicting-a-linear-congruential-generator",
          title: 'Predicting a Linear Congruential Generator',
          description: "Predicting a sequence of psuedorandom numbers using different neural network architectures and training strategies",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%63%32%35@%62%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/arjunchandra2", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/arjun-chandra2", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=CtwnNc4AAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv.pdf", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
