type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Mafid's Portfolio",
    fullName: 'Abdulloh Anvarov',
    email: 'neo.uz001@mail.com',
  },
  hero: {
    name: 'Abdulloh Anvarov',
    p: ['I develop website, user', 'interfaces and web applications'],
  },
  contact: {
    p: 'Get in touch',
    h2: 'Contact.',
    form: {
      name: {
        span: 'Your Name',
        placeholder: "What's your name?",
      },
      email: { span: 'Your Email', placeholder: "What's your email?" },
      message: {
        span: 'Your Message',
        placeholder: 'What do you want to say?',
      },
    },
  },
  sections: {
    about: {
      p: 'Introduction',
      h2: 'Overview.',
      content: `I'm a passionate and skilled frontend developer with strong experience in TypeScript and JavaScript, and deep expertise in frameworks and libraries like React, Next.js, and Three.js. I enjoy building efficient, scalable, and user-friendly web applications that solve real-world problems. I’m a fast learner and love collaborating with clients and teams to bring creative ideas to life through clean and maintainable code. Let’s turn your vision into reality — together!`,
    },
    experience: {
      p: 'What I have done so far',
      h2: 'Work Experience.',
    },
    feedbacks: {
      p: 'What others say',
      h2: 'Testimonials.',
    },
    works: {
      p: 'My work',
      h2: 'Projects.',
      content: `Here are some of the projects that highlight my skills and experience through real-world examples. Each project includes a short description along with links to the code repository and live demo. These works demonstrate my ability to tackle complex problems, work with various technologies, and manage projects efficiently from start to finish.`,
    },
  },
};
