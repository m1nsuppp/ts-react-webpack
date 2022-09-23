import { css } from "@emotion/react";

export default function App () {
  return (
    <div css={divCss}>
      Hello, World!
    </div>
  );
}

const divCss = css`
  border: 1px solid;
`;
