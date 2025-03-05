## Code of Conduct

## Submit a Pull Request 🚀

Branch naming convention is as following

`TYPE-DESCRIPTION`

example:

```
doc-submit-a-pull-request-section-to-contribution-guide
```

When `TYPE` can be:

- **feat** - a new feature
- **doc** - documentation only changes
- **fix** - a bug fix
- **refactor** - code change that neither fixes a bug nor adds a feature

**All PRs must include a commit message with the description of the changes made!**

---

# Code Structure:

The structure of code must be followed in following sequence.

## 1. Variables

Declare all the necessary variables at the beginning of the code. This includes state variables, constants, and any other variables needed for the component.

## 2. useEffect

Define the useEffect hooks to handle side effects such as fetching data, setting up subscriptions, or manually changing the DOM.

## 3. Functions

Write all the functions that handle logic, events, and other functionalities needed for the component. This can include helper functions, event handlers, etc.

**_If a function is prompted to invoke before its declaration, do not change the code structure. Instead, use a function declaration instead of an arrow function._**

Example:

```ts
function testing() {
  // Do as per requirement
}
```

## 4. Return Component

Example:

```ts
import React, { useState, useEffect } from "react";

// 1. Variables
const MAX_COUNT = 10;

const MyComponent = () => {
  const [count, setCount] = useState(0);

  // 2. useEffect
  useEffect(() => {
    fetchData();

    return () => {
      cleanUp();
    };
  }, []);

  // 3. Functions
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      // Process data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const cleanUp = () => {
    // Cleanup code
  };

  // 4. Return Component
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default MyComponent;
```

# File Import Structure

When importing files, always follow this sequence:

1. **Core Libraries & Installed Libraries**
2. **User Defined Components**
3. **Services**
4. **Custom Hooks & Query & Context**
5. **Utils**
6. **Fonts & Assets**
7. **Style**
8. **Interfaces**

Interfaces must always be the last to import.

## Sequence

```ts
/** core libraries & installed libraries */

/** user defined component */

/** services */

/** custom hooks & query & context */

/** utils */

/** fonts & assets */

/** style */

/** interfaces */
```

## example

```ts
/** core libraries & installed libraries */
import React from "react";

/** user defined component */
import Home from "./home/Home";
import About from "../about/About";
import Contact from "../../contact/Contact";
import product from "../../../product/Product";

/** services */
import { logout } from "../../services/auth";

/** custom hooks & query & context */
import { ToggleContext } from "../../contexts/sidebar.context";

/** utils */

/** fonts & assets */

/** style */
import "./Sidebar.scss";

/** interfaces */
import type { ILoginUser } from "../../interfaces/user";
```

## File Directory Import Sequence

The import sequence for file directories should be as follows:

1. **Same Folder**
2. **Parent of Current Directory**
3. **Parent of Parent Directory**, and so on.

### Example

```ts
import abc from "./abc.tsx";
import yourComponent from "../your/scj.tsx";
import testComponent from "../../ijjd.test.tsx";
```

# File Naming Conventions

## 1. Folders

All folders inside the `src` folder, must follow these conventions:

- **Single Word:** The folder name must be in lowercase.
- **Multiple Words:** All letters must be in lowercase, and words must be in camelCase.

### Examples:

- `home`
- `aboutUs`
- `contactForm`

## 2. Components

All files inside the `components / pages / protectedRoutes / providers` folder, must be named in pascal case format.

### Examples:

- `Dashboard.tsx`
- `CreateProduct.tsx`
- `UpdateProduct.tsx`

## 3. Services / Interface / Utils

All files inside the `services / interface / utils` folder, must follow these conventions.

- **Single Word:** The file name must be in lowercase.
- **Multiple Words:** All letters must be in lowercase, and words must be in camelCase.
- **Extension:** Extension must be `.ts`.

### Examples:

- `auth.ts`
- `user.ts`
- `calculate.ts`

## 4. Custom HooK

All file inside the `customHooK` folder, must follow these conventions:

- **Single Word:** The folder name must be in lowercase.
- **Multiple Words:** All letters must be in lowercase, and words must be in camelCase.
- **Extension:** Extension must be `.tsx`.

### Examples:

- `useMultiStepForm.tsx`
- `useReactQuery.tsx`

## 5. Context

All file inside the `contexts` folder, must follow these conventions:

- **Single Word:** The folder name must be in lowercase.
- **Multiple Words:** All letters must be in lowercase, and words must be in camelCase.
- **Extension:** Extension must be `.context.tsx`.

### Examples:

- `sidebar.context.tsx`
- `productData.context.tsx`

<br/>

# Better Comments

use proper comment techniques to comment specially TODO.
<br/><br/>
<img src="./contribution-assets/images/better-comments.png" alt="better-comments">
<br/>

# Variable Structure

## 1. useState

`useState` is a React hook that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update it.

## 2. useMemo & All Other Hooks

`useMemo` is a hook that memoizes the result of a calculation between re-renders, helping to optimize performance by avoiding expensive calculations on every render.

### Other Common Hooks

- `useContext`: Accesses the value of a context.
- `useReducer`: A hook for managing more complex state logic.
- `useRef`: Returns a mutable ref object whose .current property is initialized to the passed argument.

# 3. useForm

`useForm` is a hook commonly used in form handling libraries like react-hook-form to manage form state and validation.

# 4. Normal Variables

`Normal variables` are simply declared using var, let, or const depending on the scope and mutability requirements.

Example:

```ts
import { useForm } from "react-hook-form";

function MyForm() {
  // states
  const [count, setCount] = useState(0);

  // memos
  const expensiveValue = useMemo(() => {
    return computeExpensiveValue(a, b);
  }, [a, b]);

  // forms
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // normal variables
  const constantVariable = 10; // immutable
  let mutableVariable = 20; // mutable

  return <>// return component</>;
}
```

# Interface naming convention

## Prefixes

Prefix interface names with an `I` to distinguish them from classes and other types.  
Example: `IUser`, `IRepository`

# Function Naming Convention

## Function Naming Convention

### 1. Function used to Get Data

- **Prefix**: `get`
- **Suffix**: Service or data that needs to be fetched

**Example:** `getUserData()`

### 2. Handle Function used to perform a task

Handlers can be used to handle and verify user input, user actions, and browser actions.

- **Prefix**: `handle`
- **Suffix**: Service name

**Examples:**

- `handleCreateUser()`
- `handleOnSubmit()`

<br/><br/><br/>

# Setup ReactQuill ( Text Editor )

### Step 1: Install Required Packages

```ts
pnpm install react-quill quill
pnpm install --save-dev @types/react-quill
```

### Step 2: Create the Editor Component

```ts
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { modules } from "../utilities/TextEditor";

const TextEditor: React.FC = () => {
  const [editorValue, setEditorValue] = useState<string>("");

  const handleChange = (content: string): void => {
    setEditorValue(content);
  };

  return (
    <>
      <div>
        <ReactQuill
          value={editorValue}
          onChange={handleChange}
          modules={modules}
          theme="snow"
        />

        <div>{editorValue}</div>
      </div>
    </>
  );
};

export default TextEditor;
```

### step 3: Customized Toolbar

```ts
export const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ size: ["small", false, "large", "huge"] }],
    [{ font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
};
```

<br/><br/><br/>