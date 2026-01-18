
# 📱 React Native Todo App

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?
  font=Fira+Code&
  size=20&
  pause=1000&
  color=38BDF8&
  center=true&
  width=700&
  lines=React+Native+Todo+Application;
  Tabs+Navigation+%7C+Theme+Toggle;
  Real-time+Backend+with+Convex;
  Clean+UI+%7C+Scalable+Architecture" />
</p>

<p align="center">
  A modern <b>Todo List mobile app</b> built with <b>React Native</b>, featuring
  <b>tab navigation</b>, <b>dark/light theme toggle</b>, and a
  <b>real-time Convex backend</b>.
</p>



## 🛡 Badges

<p align="center">
  <img src="https://img.shields.io/badge/React%20Native-0.73-blue?logo=react" />
  <img src="https://img.shields.io/badge/Expo-Compatible-black?logo=expo" />
  <img src="https://img.shields.io/badge/Convex-Backend-purple" />
  <img src="https://img.shields.io/badge/Theme-Dark%20%7C%20Light-success" />
  <img src="https://img.shields.io/badge/Status-Active-success" />
</p>



## 🎬 App Preview

<p align="center">
  <img src="./screenshots/todo-preview.gif" width="85%" />
</p>

> 📌 *Add a screen recording GIF later — this massively boosts repo quality*



## 📚 Table of Contents

* [✨ Features](#-features)
* [🧱 Tech Stack](#-tech-stack)
* [📸 Screenshots](#-screenshots)
* [🧠 Architecture](#-architecture)
* [⚙️ Installation](#️-installation)
* [🚀 Usage](#-usage)
* [🛣 Roadmap](#-roadmap)
* [🤝 Contributing](#-contributing)
* [📄 License](#-license)



## ✨ Features

| Feature            | Description                             |
| ------------------ | --------------------------------------- |
| 📝 Todo CRUD       | Create, update, complete & delete todos |
| 🗂 Tabs Navigation | Smooth bottom tab navigation            |
| 🌙 Theme Toggle    | Light & Dark mode support               |
| ⚡ Real-time Sync   | Convex backend with live updates        |
| 🧠 Clean State     | Hooks & context-based architecture      |
| 📱 Mobile-first    | Optimized for Android & iOS             |



## 🎨 UI Highlights

✔️ Minimal & clean design
✔️ Smooth transitions
✔️ Dark mode friendly
✔️ Touch-optimized
✔️ Scalable folder structure



## 🧱 Tech Stack

**Frontend**

* React Native
* Expo
* React Navigation (Tabs)
* Context API / Hooks

**Backend**

* Convex
* Real-time queries & mutations



## 📸 Screenshots

<details>
  <summary>📱 View App Screens</summary>

  <p align="center">
    <img src="./screenshots/home.png" width="30%" />
    <img src="./screenshots/add-todo.png" width="30%" />
    <img src="./screenshots/dark-mode.png" width="30%" />
  </p>

</details>



## 🧠 Architecture

<p align="center">
  <img src="./screenshots/architecture.png" width="70%" />
</p>

```
React Native App
   ├── Tabs Navigation
   ├── Screens (Todo / Add / Settings)
   ├── Theme Context
   └── Convex Backend
        ├── Queries
        └── Mutations
```



## ⚙️ Installation

```bash
git clone https://github.com/Alans123456/React-Native.git
cd React-Native
npm install
```

### Setup Convex

```bash
npx convex init
npx convex deploy
```

> Add your Convex project URL to the app config.



## 🚀 Run the App

```bash
npm start
# or
expo start
```

Scan the QR code using **Expo Go** 📱



## 🔁 Convex Usage Example

```js
import { useQuery, useMutation } from "convex/react";

const todos = useQuery(api.todos.getTodos);
const addTodo = useMutation(api.todos.addTodo);
```



## 🛣 Roadmap

* [x] Todo CRUD
* [x] Tabs Navigation
* [x] Theme Toggle
* [x] Convex Backend
* [ ] Todo Filters
* [ ] Offline Support
* [ ] Animations (Reanimated)
* [ ] Authentication



## 🤝 Contributing

Contributions are welcome 🚀

1. 🍴 Fork the repo
2. 🌿 Create a feature branch
3. 💾 Commit your changes
4. 🚀 Open a Pull Request



## 📄 License

MIT License © **Alans Shrestha**



<p align="center">
  ⭐ If you like this project, give it a star!
</p>

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=38BDF8&height=120&section=footer"/>
</p>


