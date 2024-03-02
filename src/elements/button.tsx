import { Button } from "antd";

export const BlackButton = (props: { children: JSX.Element }) => {
  return (
    <Button className="black-button" size="large">
      {props.children}
    </Button>
  );
};
