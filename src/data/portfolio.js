// ─────────────────────────────────────────────
//  portfolio.js  — Single source of truth
//  Edit this file to update all sections.
// ─────────────────────────────────────────────

export const profile = {
  name: "Alonso Sánchez Espejo",
  title: "Senior iOS Developer",
  tagline: "Engineer by craft, designer by passion",
  location: "Madrid, Spain",
  status: "Available for new projects",
  available: true,
  experience: "8+",
  appsShipped: "20+",
  companies: 3,
  bio: [
    "iOS Software Engineer with <strong>8+ years</strong> of experience building scalable, high-performance mobile applications.",
    "Specialized in <strong>Swift, SwiftUI</strong>, and modern architecture patterns. Experienced in migrating <strong>legacy Objective-C</strong> systems to modern Swift-based infrastructures.",
    "Currently at <strong>Capgemini</strong>, I bring clean architecture, pixel-perfect UI, and a deep understanding of the Apple ecosystem to every project I touch.",
  ],
  github: "https://github.com/newpeopleapp",
  linkedin: "https://www.linkedin.com/in/alonsoespejo/",
  email: "info@newpeople.app", // add your email here
  cv: "/cv.pdf",
  photo: "/profile_pic.png", // place your photo in /public/photo.jpg
};

export const skills = [
  {
    icon: "🍎",
    title: "iOS Core",
    items: [
      { label: "Swift", primary: true },
      { label: "SwiftUI", primary: true },
      { label: "UIKit" },
      { label: "Objective-C" },
      { label: "Storyboard" },
      { label: "Xcode" },
    ],
  },
  {
    icon: "🏗",
    title: "Architecture",
    items: [
      { label: "MVVM", primary: true },
      { label: "MVC" },
      { label: "Clean Architecture" },
      { label: "VIPER" },
      { label: "Combine" },
      { label: "Async/Await" },
    ],
  },
  {
    icon: "📦",
    title: "Frameworks",
    items: [
      { label: "CoreData" },
      { label: "CoreLocation" },
      { label: "MediaPlayer" },
      { label: "AVFoundation" },
      { label: "MapKit" },
      { label: "Push Notifications" },
    ],
  },
  {
    icon: "🔧",
    title: "Tools & Deps",
    items: [
      { label: "SPM", primary: true },
      { label: "CocoaPods" },
      { label: "Carthage" },
      { label: "Git" },
      { label: "Firebase" },
      { label: "Fastlane" },
    ],
  },
  {
    icon: "🎨",
    title: "Design",
    items: [
      { label: "UI/UX Design", primary: true },
      { label: "Figma" },
      { label: "HIG" },
      { label: "Accessibility" },
      { label: "Animations" },
    ],
  },
  {
    icon: "🌐",
    title: "Beyond iOS",
    items: [
      { label: "React" },
      { label: "JavaScript" },
      { label: "REST APIs" },
      { label: "Web Development" },
      { label: "App Store Connect" },
    ],
  },
];

export const experience = [
  {
    date: "2025 — Present",
    role: "iOS Developer",
    company: "Capgemini · Madrid",
    description:
      "Leading the migration of legacy Objective-C codebases to modern Swift while delivering high-quality features for large-scale enterprise projects.",
  },
  {
    date: "2024",
    role: "iOS Developer",
    company: "React (Cybersecurity) · Madrid",
    description:
      "Built features for a cybersecurity iOS application, enhancing performance, reliability, and user experience across multiple iOS versions.",
  },
  {
    date: "2018 — Present",
    role: "iOS Developer & UI/UX Designer",
    company: "Freelance · Remote",
    description:
      "Delivering clean, intuitive mobile experiences with a strong focus on modern frameworks such as SwiftUI. Full ownership from design to App Store deployment.",
  },
  {
    date: "2019 — 2020",
    role: "iOS & Web Developer · UI/UX Designer",
    company: "Hotel Molino de Felipe",
    description:
      "Designed and developed iOS and web applications, creating intuitive UI/UX and seamless user experiences for the hotel's digital presence.",
  },
];

export const apps = [
  {
    icon: "🏥",
    name: "Caser Salud",
    description:
      "Health insurance app for Caser Seguros. Full development cycle and architecture. Complex migration journey from Objective-C to Swift, integrating multiple frameworks for a seamless healthcare experience.",
    appStore: "https://apps.apple.com/es/app/caser-salud/id1474619120",
    image: "/apps/caser_logo.png", // optional: place screenshot in /public/apps/
    tech: [
      { label: "Swift", variant: "swift" },
      { label: "Objective-C", variant: "default" },
      { label: "SwiftUI", variant: "swiftui" },
      { label: "UIKit", variant: "default" },
      { label: "Storyboard", variant: "default" },
      { label: "CocoaPods", variant: "default" },
    ],
  },
  {
    icon: "🏢",
    name: "Caser Corporativa",
    description:
      "Corporate insurance platform for Caser. Maintained and evolved a large-scale insurance application ensuring stability and performance across iOS updates.",
    appStore: "https://apps.apple.com/es/app/caser/id394869097",
    image: "/apps/caser_logo.jpg",
    tech: [
      { label: "Swift", variant: "swift" },
      { label: "Objective-C", variant: "default" },
      { label: "UIKit", variant: "default" },
      { label: "Storyboard", variant: "default" },
      { label: "CocoaPods", variant: "default" },
    ],
  },
  {
    icon: "🎓",
    name: "New People",
    description:
      "University social network built 100% in SwiftUI. Solo project — full ownership of architecture, UI/UX design, and backend. A showcase of modern Swift development at its finest.",
    appStore: "https://apps.apple.com/es/app/new-people-campus-social/id6479246349",
    image: "/apps/newpeople_logo.jpg",
    tech: [
      { label: "SwiftUI", variant: "swiftui" },
      { label: "Swift", variant: "swift" },
      { label: "CoreLocation", variant: "default" },
      { label: "MediaPlayer", variant: "default" },
      { label: "SPM", variant: "default" },
      { label: "Backend", variant: "default" },
    ],
  },
  {
    icon: "🔐",
    name: "React — Cybersecurity",
    description:
      "Security-focused iOS application. Contributed to performance improvements, feature development, and cross-platform reliability using a wide range of iOS frameworks.",
    appStore: null, // private app
    image: "/apps/react_logo.jpeg",
    tech: [
      { label: "Swift", variant: "swift" },
      { label: "SwiftUI", variant: "swiftui" },
      { label: "UIKit", variant: "default" },
      { label: "Security", variant: "default" },
      { label: "Networking", variant: "default" },
    ],
  },
];

export const marqueeItems = [
  "Swift", "SwiftUI", "UIKit", "Objective-C", "Xcode",
  "CoreData", "CoreLocation", "MVVM", "SPM", "CocoaPods",
  "REST APIs", "UI/UX Design", "App Store", "Combine", "Async/Await",
];
