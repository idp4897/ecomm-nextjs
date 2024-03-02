import { CoverLanding } from "@/components/landing/cover";
import { MENU_LIST } from "@/constants/landing";
import { MenuBar } from "@/elements/menuBar";

export default function LandingPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 32,
          marginBottom: 32,
        }}
      >
        <MenuBar menu={MENU_LIST} />
      </div>
      <CoverLanding />
    </div>
  );
}
