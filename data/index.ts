// https://www.svgrepo.com/collection/tech-brand-logos/15

export const navItems = [
  { name: "About", link: "#projects" },
  { name: "Advantages", link: "#about" },
  { name: "Recent work", link: "#projects" },
  { name: "Collaboration", link: "#collaboration" },
  { name: "Services", link: "#services" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Our employees have substantial experience working for world -renowned companies.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-start",
    img: "/9.png",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "‣ Cool detailed characters and skins. <br> ‣ The latest modeling and animation technologies. <br> ‣ Unique dark fantasy design.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 text-red-100",
    imgClassName: "",
    titleClassName: "justify-start",
    spareImg: "/b4.svg",
  },
  {
    id: 3, // #3 don't touch!
    title: "Our tech stack",
    description:
      "We only work with best tools that will fit your business idea. We keep up with new technologies.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 8,
    title: "With us <br> You can bring your groundbreaking project to life",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 text-red-100",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 5,
    title: "We are rock!",
    description: "Unforgettable experience",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName:
      "justify-center md:justify-start lg:justify-center text-red-100",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you have a Game idea? <br> Don't waste your time - contact us",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Dark Waves",
    des: "The midcore shooter in which we implemented not hackneyed attack mechanics, colorful battle scenes and juicy and realistic pictures.",
    img: "/pr1.png",
    iconLists: ["/ue.svg", "/c+.svg", "/git2.svg", "/blend.svg", "/zbr.svg"],
    link: "/",
    projectTitle:
      "Every aspect of Dark Waves is crafted to immerse players in a world of darkness and danger",
  },
  {
    id: 1,
    title: "Dark Waves",
    des: "The midcore shooter in which we implemented not hackneyed attack mechanics, colorful battle scenes and juicy and realistic pictures.",
    img: "/pr1.png",
    iconLists: ["/ue.svg", "/c+.svg", "/git2.svg", "/blend.svg", "/zbr.svg"],
    link: "/",
    projectTitle:
      "Every aspect of Dark Waves is crafted to immerse players in a world of darkness and danger",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const clientsList = [
  {
    id: 1,
    name: "Unreal Engine",
    img: "/ue.svg",
    title: "Unreal Engine",
    nameImg: null,
  },
  {
    id: 2,
    name: "Unreal Engine",
    img: "/ps4.svg",
    title: "Maya 3D",
    nameImg: null,
  },
  {
    id: 3,
    name: "Unreal Engine",
    img: "/ue.svg",
    title: "3ds Max",
    nameImg: null,
  },
  {
    id: 5,
    name: "Unreal Engine",
    img: "/zbr.svg",
    title: "ZBrush",
    nameImg: null,
  },
];

export const proposalsList = [
  {
    id: 1,
    title: "Innovative gameplay",
    desc: "Cool experience",
    className: "md:col-span-2",
    thumbnail: "./LOGO.png",
  },
  {
    id: 2,
    title: "Immersive atmosphere",
    desc: "Cool experience",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "./LOGO.png",
  },
  {
    id: 3,
    title: "Cutting-Edge technology",
    desc: "Cool experience",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "./LOGO.png",
  },
  {
    id: 4,
    title: "Market potential",
    desc: "Cool experience",
    className: "md:col-span-2",
    thumbnail: "./LOGO.png",
  },
];

export const servicesList = [
  {
    id: 1,
    title: "Basic",
    heading: "Basic needs",
    des: "We conceptualize, design and develop 2D and 3D playable ads. We lead you with our know-how from ideation to iteration with tailor made solutions. We'll collaborate to map out your game's goals, target audience, and key functionalities. We'll discuss things like game concept, gameplay, and audience.",
    containerClassName: "bg-emerald-900",
    animationSpeed: 5.1,
  },
  {
    id: 2,
    title: "Premium",
    heading: "Premium Service",
    des: "Discover the power of modern 3D technologies that will bring your game to the new Level. Elevate engagement and authenticity to capture more attention and drive results.",
    containerClassName: "bg-pink-900",
    animationSpeed: 3,
    colors: [
      [255, 166, 158],
      [221, 255, 247],
    ],
  },
  {
    id: 3,
    title: "Vip",
    heading: "Vip Content",
    des: "This is where the magic happens!",
    containerClassName: "bg-yellow-900",
    animationSpeed: 3,
    colors: [[125, 211, 252]],
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/link.svg",
    href: "https://www.linkedin.com/in/alexey-timakov-26221b152/",
  },
  {
    id: 2,
    img: "/inst.svg",
    href: "https://www.instagram.com/timakovalexey/",
  },
  {
    id: 3,
    img: "/artst.svg",
    href: "www.artstation.com/timakov",
  },
  {
    id: 4,
    img: "/epic.svg",
    href: "/",
  },
];
