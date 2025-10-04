# React State Management – Counter Application

## Project Description
This project series demonstrates different approaches to state management in React applications by building an interactive counter application.  
Starting with **React’s built-in `useState` hook**, we progressively implement more sophisticated state management solutions including **Context API** and **Redux**.  
The project showcases how to share state across multiple components and maintain application-wide data consistency.

---

## Learning Objectives
By completing these projects, you will:

- Understand fundamental React state management using **`useState`**
- Learn to implement global state management with **Context API**
- Master **Redux** for complex state management scenarios
- Compare different state management solutions
- Implement **state persistence** across components
- Understand the concept of **single source of truth**
- Learn to structure applications for **scalable state management**

---

## Requirements
### Technical Requirements
- **Node.js** (v14 or later)  
- **npm** or **yarn** package manager  
- **React** (v18 or later)  
- **TypeScript**  
- **Next.js** framework  
- **Redux Toolkit** (for the Redux implementation)  
- **React-Redux** bindings  

### Development Environment
- Code editor (**VS Code recommended**)  
- Terminal/command line access  
- Modern web browser (**Chrome**, **Firefox**, or **Edge**)  

---

## Best Practices
### General React Practices
- **Component Organization:** Keep components small and focused  
- **Type Safety:** Utilize TypeScript for type checking  
- **Separation of Concerns:** Separate state management from UI components  
- **Immutability:** Always treat state as immutable  
- **Single Responsibility:** Each component/file should have one primary responsibility  

### Context API
- Create context providers at the appropriate level in the component tree  
- Use custom hooks for context consumption  
- Provide proper TypeScript interfaces for context values  

### Redux
- Follow **Redux Toolkit’s** recommended patterns  
- Use **slices** for modular state management  
- Type your Redux store and actions  
- Create **typed hooks** for dispatch and selector usage  

### Performance
- Memoize selectors when necessary  
- Avoid unnecessary re-renders with proper state selection  
- Consider using Redux middleware for complex side effects  

---

## Project Structure
<details>
  <summary>Common Files</summary>

- **Pages**  
  Contains all the page components that Next.js uses for routing.  
  - **Counter App Page** – The main counter application where the counter logic and UI live.

- **Components**  
  Contains all reusable UI components shared across the app.

- **Layouts**  
  Manages the overall structure of pages and shared sections.  
  - **Header** – A global navigation header displayed at the top of the app.

</details>

---

<details>
  <summary>useState Version (0x04)</summary>

- Implements simple state management within a single component using React’s **useState** hook.

</details>

---

<details>
  <summary>Context API Version (0x05)</summary>

- **CountContext** – Provides global state using React’s Context API and custom hooks.  
- **App Wrapper** – Modified `_app.tsx` to wrap the app with the Context Provider for shared state.

</details>

---

<details>
  <summary>Redux Version (0x06)</summary>

- **Store** – Configured with Redux Toolkit to manage global state.  
- Components updated to use **Redux hooks** (`useSelector`, `useDispatch`) to connect UI to the store.

</details> 

---

## Expected Outcomes
After completing all versions, you will have:

1. A working counter application with **three different state management implementations**  
2. Understanding of **when to use each state management solution**  
3. Practical experience with **modern React state management patterns**  
4. A foundation for building more **complex stateful applications**  
5. Ability to make **informed decisions** about state management in your projects.