import type { Meta } from "@storybook/react";

const COLOR_NAMES = [
  "gray",
  "red",
  "pink",
  "grape",
  "violet",
  "indigo",
  "blue",
  "cyan",
  "teal",
  "green",
  "lime",
  "yellow",
  "orange",
] as const;
const SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
const BASE_COLORS = ["white", "black"] as const;

const Swatch = ({ name, cssVar }: { name: string; cssVar: string }) => (
  <div style={{ display: "grid", gap: "4px", width: "100%" }}>
    <div
      style={{
        height: "80px",
        border: "1px solid black",
        backgroundColor: `var(${cssVar})`,
      }}
    />
    <div>{name}</div>
  </div>
);

export const Colors = () => (
  <div
    style={{
      fontFamily: "sans-serif",
      color: "#212529",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    }}
  >
    <div>
      <h2>Base</h2>
      <div style={{ display: "flex", gap: "8px" }}>
        {BASE_COLORS.map((base) => (
          <Swatch key={base} name={base} cssVar={`--rwdlol-color-${base}`} />
        ))}
      </div>
    </div>
    {COLOR_NAMES.map((color) => (
      <div key={color}>
        <h2>{color}</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(10, 1fr)",
            gap: "8px",
          }}
        >
          {SHADES.map((shade) => (
            <Swatch
              key={shade}
              name={`${shade}`}
              cssVar={`--rwdlol-color-${color}-${shade}`}
            />
          ))}
        </div>
      </div>
    ))}
  </div>
);

const meta: Meta = {
  title: "Foundation/Color",
  tags: ["autodocs"],
  parameters: {
    docs: {
      subtitle: "This is the subtitle (updated 01.01.2026)",
      description: {
        component:
          "This is the description. It is typically an overview of the component.",
      },
      source: {
        code: null,
      },
      canvas: {
        sourceState: "none",
      },
    },
  },
};

export default meta;
