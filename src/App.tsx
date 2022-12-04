import { useState } from "react";

export default function App () {
  const [content, setContent] = useState<string>('this is boilerplate.');
  return (
    <div>
      Hello, World!
      <h1 onClick={() => setContent('Keep it on the down low.')}>{content}</h1>
    </div>
  );
}
