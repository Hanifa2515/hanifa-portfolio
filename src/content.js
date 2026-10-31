// All site copy and personal links live here, so editing text never touches a component.

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#review", label: "Review" },
  { href: "#contact", label: "Contact" },
];

export const hero = {
  eyebrow: "Information Systems student",
  greeting: "Hi, I'm",
  name: "Hanifa.",
  intro:
    "I study Information Systems at Duta Bangsa University in Surakarta. During the day, I work as an admin at a CCTV and networking store. In the evening, I go to class.",
  photo: {
    src: "/images/hanifa-portrait.jpg",
    alt: "Hanifa in a pink hijab, leaning on a railing at night and holding an iced drink",
  },
};

export const marqueeItems = [
  "Information Systems",
  "Admin",
  "Books",
  "Running",
  "Coffee",
  "MPK",
  "Karang Taruna Prink",
  "IPPNU",
  "MC",
  "Moderator",
];

export const about = {
  title: "A little bit about me",
  paragraphs: [
    'My full name is Hanifa Khoirunnisa Nugraha. You can call me Hanifa, Hani, Han, or Fa. In Javanese, "Pah" is fine too. Here is a fun fact: my friends back home call me "Hanipunk." It is only a funny pun, but it sometimes annoys me a little.',
    "I am the eldest of three siblings. After I graduated from SMA N 3 Sukoharjo, I started studying Information Systems at Duta Bangsa University, Surakarta. Besides studying, I work as an admin at a CCTV and networking store, a branch of Andalas Computer. My workday runs from 8:00 AM to 4:30 PM, and my classes run from 5:00 PM to 8:00 PM.",
    "In my free time, I read books, go running, and enjoy coffee. My favorite drinks are butterscotch lattes and Americanos.",
  ],
  photo: {
    src: "/images/hanifa-kebaya.jpg",
    alt: "Hanifa smiling in a turquoise kebaya and a pink shawl at a village Independence Day event",
  },
  facts: [
    { label: "Campus", value: "Duta Bangsa University" },
    { label: "Major", value: "Information Systems" },
    { label: "Work", value: "Store Admin" },
    { label: "Family", value: "Eldest of three" },
  ],
  organizationsTitle: "Organizations I have joined",
  organizations: [
    {
      name: "MPK, SMA N 3 Sukoharjo",
      role: "Member, then Coordinator of Commission 4",
      period: "2 years",
      text: "I joined the Class Representative Council (MPK) in high school. I was a member in my first year, and I became the coordinator of Commission 4 in my second year. My commission supervised the student council (OSIS) and the extracurricular clubs, and it received their accountability reports.",
    },
    {
      name: 'Karang Taruna "Prink"',
      role: "Secretary",
      period: "4 years",
      text: "I served as the secretary of this youth organization in my community for four years.",
    },
    {
      name: "IPPNU",
      role: "Department of Social Affairs, Community, and Da'wah",
      period: "Religious organization",
      text: "I also joined Ikatan Pelajar Putri Nahdlatul Ulama, a young women's student association, and I worked in its Department of Social Affairs, Community, and Da'wah.",
    },
  ],
  speakingTitle: "My speaking experience",
  speaking: [
    {
      name: "Meeting Chair",
      role: "Accountability report (LPJ) meeting",
      tag: "Chairing",
      text: "I have chaired an accountability report (LPJ) meeting.",
    },
    {
      name: "MC and Debate Moderator",
      role: "Formal events",
      tag: "Formal",
      text: "I have been an MC at formal events, such as chairperson elections. I have also been a debate moderator.",
    },
    {
      name: "MC",
      role: "Informal events",
      tag: "Informal",
      text: "I have also been an MC at informal events, such as a Dies Natalis (anniversary celebration), a fun walk, and competitions.",
    },
  ],
};

export const review = {
  product: "MacBook Air M2",
  title: "MacBook Air M2: light, quiet, and ready for work",
  intro:
    "Apple released the MacBook Air with the M2 chip in 2022. I sometimes use a MacBook at work, so I want to have my own. Since I would use it for work every day, weight and battery life are important to me. That is why I chose this laptop for my review. Although I do not own one yet, I have also tried my friend's MacBook.",
  // Fill these two in with your own opinion. Each one stays hidden while it is empty or null.
  personalNote: "",
  rating: null,
  gallery: [
    { src: "/images/macbook/front.jpg", label: "Front", alt: "MacBook Air M2 in Space Gray, seen from the front" },
    { src: "/images/macbook/top.jpg", label: "Keyboard", alt: "MacBook Air M2 seen from above, showing the keyboard and trackpad" },
    { src: "/images/macbook/colors.jpg", label: "Colors", alt: "Side view of the MacBook Air M2 in its four colors" },
  ],
  specs: [
    ["Chip", "Apple M2"],
    ["CPU", "8-core"],
    ["GPU", "8-core or 10-core"],
    ["Display", '13.6" Liquid Retina'],
    ["Resolution", "2560 × 1664"],
    ["Battery", "Up to 18 hours (Apple's claim)"],
    ["Thickness", "11.3 mm"],
    ["Weight", "1.24 kg"],
  ],
  sections: [
    {
      title: "Design",
      image: "/images/macbook/design.jpg",
      alt: "Open MacBook Air M2 with its keyboard and trackpad",
      text: "First, this slim and light laptop is easy to carry to work every day. It weighs only 1.24 kg and is just 11.3 mm thick. I also like the trackpad and the magnetic charger.",
    },
    {
      title: "Performance",
      image: "/images/macbook/chip.jpg",
      alt: "The Apple M2 chip",
      text: "The laptop is not only light but also fast enough for daily work. I did not notice any lag while I was trying it, even when it was using a lot of resources. Because it has no fan, it stays quiet.",
    },
    {
      title: "Display",
      image: "/images/macbook/display.jpg",
      alt: "The MacBook Air M2 screen showing a grid of app icons",
      text: "The screen is another strong point because it looks very clean and shows clear colors. According to many programmers' reviews, the colors are very accurate, so a design on the screen will match the final result.",
    },
    {
      title: "Battery",
      image: "/images/macbook/magsafe.jpg",
      alt: "A MagSafe charging cable connected to the MacBook Air M2",
      text: "Battery life matters most on long workdays. With work and streaming, the battery can last all day. If you only listen to music and type, it can last for two days.",
    },
  ],
  downsides:
    "However, this laptop is not perfect. The price is high for many students, and it has only two Thunderbolt ports.",
  pros: ["Light and thin", "Silent, with no fan", "Long battery life"],
  cons: [
    "High price for many students",
    "Only two Thunderbolt ports",
  ],
  verdict:
    "In conclusion, I still want to have my own MacBook Air M2, even though the price is high. Its light body and long battery life will make it easy to use for work every day, and it is powerful enough for all my tasks. I would recommend it to anyone who needs a light and quiet laptop for daily work.",
};

// Add your real links here. A contact method stays hidden until it has a url.
export const socials = [
  { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/hanifa8214/", handle: "@hanifa8214" },
  { name: "LinkedIn", icon: "linkedin", url: "", handle: "" },
  { name: "TikTok", icon: "tiktok", url: "https://www.tiktok.com/@hanifanisa_15", handle: "@hanifanisa_15" },
  { name: "WhatsApp", icon: "whatsapp", url: "", handle: "" },
];

export const contact = {
  title: "Let's get in touch",
  text: "I would be happy to hear from you. I work and study until 8:00 PM on most days, so please expect a reply after that.",
  email: "hanifakhoirunnisa15@gmail.com",
  location: "Surakarta, Indonesia",
};
