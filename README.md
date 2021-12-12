# react-modal-mrl

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/889f0c71666f4eb28d0dde813576183f)](https://www.codacy.com/gh/maxime-rl/react-modal-mrl/dashboard?utm_source=github.com&utm_medium=referral&utm_content=maxime-rl/react-modal-mrl&utm_campaign=Badge_Grade)
![license](https://badgen.net/github/license/maxime-rl/react-modal-mrl)
![downloads](https://badgen.net/npm/dt/react-modal-mrl)
[![Netlify Status](https://api.netlify.com/api/v1/badges/accdf98b-7ff4-48cf-b296-62c523295776/deploy-status)](https://app.netlify.com/sites/react-modal-mrl/deploys)

Simple modal component for React apps

## Features

- Keyboard focus, accessibility friendly
- Customizable trigger
- Dynamic title and content (children)
- Customizable close icon (otherwise default icon)

## getting started guide

**Requirements specification**

- React 17.0.2<br>

**Download**

[react-modal-mrl](https://www.npmjs.com/package/react-modal-mrl)

**Installation**

- `npm i react-modal-mrl`<br>
  or<br>
- `yarn add react-modal-mrl`

**Usage**

Import it in your React component<br>

```js
import { Modal } from "react-modal-mrl";
```

3 props required to work: `show`, `close` and `title`<br>
And create a function to change the state of the modal, ex: trigger()

**1.Exemple**

```jsx
  const [modal, setModal] = useState(false);
  const trigger = () => setModal(!modal);

  <button className="click-me" onClick={() => trigger()}>
    Click me
  </button>

  <Modal show={modal} close={trigger} title="Modal title"></Modal>
```

**2.Exemple**

1 optional prop is available to use a customizable close icon: `closeIcon`<br>
And addition of children possible

```jsx
  const [modal, setModal] = useState(false);
  const trigger = () => setModal(!modal);

  <button className="click-me" onClick={() => trigger()}>
    Click me
  </button>

  <Modal
    show={modal}
    close={trigger}
    closeIcon={closeIcon}
    title="Successfully registered">
    // Modal containing an example of children
    <ul>
      <li>{user.firstName}</li>
      <li>{user.lastName}</li>
      <li>{user.department}</li>
    <ul/>
    <Link to="/user-profile">User profile</Link>
  </Modal>
```
