# react-modal-mrl

Simple modal component for React apps

## Exemple

```
  const [modal, setModal] = useState(false);
  const trigger = () => setModal(!modal);

  <button className="click-me" onClick={() => trigger()}>
    Click me
  </button>

  <Modal show={modal} close={trigger} title="Modal title">
    <p>Modal content with children</p>
  </Modal>
```
