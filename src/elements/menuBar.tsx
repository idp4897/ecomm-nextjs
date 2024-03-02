"use client";
import { Button, Input, Typography } from "antd";
import { useRouter } from "next/navigation";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";

const { Text } = Typography;

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
      }}
    >
      <Text style={{ fontSize: 32, marginRight: 40 }}>SHOP.CO</Text>
      <div style={{ display: "flex", flexDirection: "row", gap: 16 }}>
        {menu.map((m, idx) => {
          return (
            <div
              key={`menu ${idx}`}
              className="div-button"
              onClick={() => {
                router.push(m.route);
              }}
            >
              {m.label}
            </div>
          );
        })}
      </div>
      <Input
        className="search-input"
        placeholder="Search for products..."
        size="large"
        style={{ margin: "0px 40px" }}
        prefix={<BsSearch style={{ color: "#9e9e9e", fontSize: 20 }} />}
      />
      <div style={{ display: "flex", gap: 16 }}>
        <AiOutlineShoppingCart style={{ fontSize: 24 }} />
        <FaRegUserCircle style={{ fontSize: 24 }} />
      </div>
    </div>
  );
};
