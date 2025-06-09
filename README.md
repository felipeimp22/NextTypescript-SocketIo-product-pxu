
# 👜 Product Platform

Welcome to the **Product Platform**, a cutting-edge web application designed to deliver seamless product management, and user engagement through modern technologies and clean code principles.

---

## 🚀 Features

### 🏪 Product Management
- **Create Products**: Add new Products with  title, Title, Price, Inventory and images.
- **Purchase hisotory**: Check your purchase history with all necessary informations.
- **Buy Items**: Put item into your cart and buy it with a few clicks

### 💬 User Interaction
- **Filter products**: Filter Products by title, oldest/newest, and in stock/ out of stock or all.
- **Authenticated Access**: Private routes and actions are protected using guards, ensuring only authenticated users can perform specific actions.

### 🛠️ Modern Development Practices
- **Componentized Architecture**: Every UI element is highly reusable and modular, improving scalability and maintainability.
- **Context and Local Storage**: User state and data are efficiently managed using React Context and Local Storage.
- **Private/Public Route Guards**: A guard mechanism is in place to differentiate between private and public routes, enhancing application security.

### 🔒 Secure and Error-Free
- **Zero Vulnerabilities**: `npm audit` reports zero vulnerabilities in the project dependencies.
- **Linting Perfection**: The project passes `eslint` checks with no errors, ensuring clean, readable, and maintainable code.

---

## 🛠️ Tech Stack

- **React**: For building dynamic user interfaces.
- **TypeScript**: Ensures type safety across the entire codebase.
- **Styled-Components**: For modular and scalable styling.
- **React Router**: For seamless navigation and route handling.
- **React-Toastify**: Provides user-friendly notifications and alerts.
- **Socket.io**: Provides user-friendly notifications and alerts.


---

## 📂 Project Structure

```
src              # source folder
components       # Reusable UI components (e.g., forms, buttons, lists)
pages            # Application pages (e.g., CreateAudioBook, Chapters, Comments)
services         # API service functions (e.g., createAudioBook, fetchChapters)
contexts         # React Context files for state management
routes           # Guards and route definitions (private and public)
styles           # Global, shared, pages and theme-based styles

README.md            # Project documentation
```

---

## 🧰 Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-repo/audiobook-platform.git
cd audiobook-platform
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run the Application
#### Development Mode
```bash
npm run dev
```

#### Production Build
```bash
npm run build
npm start
```

### 4️⃣ Run Linter and Audit
- **Linting**: Ensure no code issues:
  ```bash
  npm run lint
  ```
- **Audit Dependencies**: Verify no vulnerabilities:
  ```bash
  npm audit
  ```
---

## 💻 Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m "Added feature"`.
4. Push the changes: `git push origin feature-name`.
5. Open a pull request.

---

## 🤝 Acknowledgments

Special thanks to the development community for providing tools, libraries, and support that make projects like this possible.

---

## 🛡️ License

This project is licensed under the MIT License

---

### Made with ❤️ by felipeimp
