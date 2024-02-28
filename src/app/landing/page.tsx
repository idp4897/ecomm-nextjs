import { MENU_LIST } from "@/constants/landing";
import { MenuBar } from "@/elements/menuBar";

export default function LandingPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <MenuBar menu={MENU_LIST} />
    </div>
  );
}
