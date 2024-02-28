"use client";
import { Button, Input, Typography } from "antd";
import { useRouter } from "next/navigation";
import "../styles/input.css";
const { Text } = Typography;
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";

export const MenuBar = (props: {
  menu: { label: string; route: string }[];
}) => {
  const { menu } = props;
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
      }}
    >
      <Text style={{ fontSize: 32 }}>SHOP.CO</Text>
      {menu.map((m) => {
        return (
          <div
            onClick={() => {
              router.push(m.route);
            }}
          >
            {m.label}
          </div>
        );
      })}
      <Input
        className="search-input"
        placeholder="Search for products..."
        size="large"
      />
      <AiOutlineShoppingCart style={{ fontSize: 24 }} />
      <FaRegUserCircle style={{ fontSize: 24 }} />
    </div>
  );
};
