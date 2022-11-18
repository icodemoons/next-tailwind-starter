## Getting Started

(1) npm install ( npm i )
(2) npm run dev
(3) Open [http://localhost:3000] with your browser to see the result.

This is a simple Next js / Tailwind CSS starter template I created to start a project quicker. Freely availible to fork and use to your own needs.

I use this folder structure based on Atomic Design that is methodology for creating design systems. There are five distinct levels in atomic design:

atoms : molecules : organisms : templates : pages

This app uses a modified/simplified version of Atomic Design, better suited for modern web development.

src
├── features
├── pages
│ └── index.jsx
├── ui
└── index.jsx

/ui

This folder is for your "lego blocks", single purpose React components that can be combined together to make more complicated components, known as Features

/features

This folder is for more complex components, or features. Features are created by composing many UI components and usually, state

/pages

This folder is for navigable components. A router automagically creates urls for anything in this folder. To create a page, combine features and ui components and put them in a component in this page. Typically state is managed in the feature, and any props that come from the server are passed through pages via the return object from getServerSideProps. Those props are then passed down into features as props, or put into a context.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
