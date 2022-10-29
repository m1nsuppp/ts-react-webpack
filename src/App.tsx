import styled from "@emotion/styled";

export default function App () {
  return (
    <Foo>
      Hello, World!
    </Foo>
  );
}

const Foo = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid green;
`;
