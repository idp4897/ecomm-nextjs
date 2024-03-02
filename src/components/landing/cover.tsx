"use client";
import { BlackButton } from "@/elements/button";
import { Divider, Image, Typography } from "antd";

const { Text } = Typography;

export const CoverLanding = () => {
  const TextElement = () => {
    const TransCard = (props: { title: string; desc: string }) => {
      const { title, desc } = props;
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Text style={{ fontSize: 40, fontWeight: 600 }}>{title}</Text>
          <Text style={{ fontWeight: 200 }}>{desc}</Text>
        </div>
      );
    };

    return (
      <div style={{ flex: "1 0", padding: 64, marginLeft: 32 }}>
        <div style={{ width: 577, display: "flex", flexDirection: "column" }}>
          <Text style={{ fontSize: 64, fontWeight: 900 }}>
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </Text>
          <Text style={{ fontSize: 16, color: "#9e9e9e" }}>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </Text>
          <div style={{ padding: 8 }} />
          <BlackButton>
            <Text style={{ color: "white" }}>Shop Now</Text>
          </BlackButton>
          <div style={{ padding: 16 }} />
          <div style={{ display: "flex", flexDirection: "row", gap: 16 }}>
            <TransCard title="200+" desc="International Brands" />
            <Divider type="vertical" style={{ height: 100 }} />
            <TransCard title="2,000+" desc="High-Quality Products" />
            <Divider type="vertical" style={{ height: 100 }} />
            <TransCard title="30,000+" desc="Happy Customers" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          width: "100%",
          zIndex: "-1",
        }}
      >
        <Image src="/picture/Rectangle 2.png" preview={false} />
      </div>
      <TextElement />
    </div>
  );
};
