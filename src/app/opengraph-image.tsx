// src/app/opengraph-image.ts

import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "StormyOps by Ashlee Herken"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #05060c 0%, #0f172a 45%, #312e81 100%)",
          color: "white",
          padding: "80px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#93c5fd",
            marginBottom: 28,
            fontWeight: 700,
          }}
        >
          StormyOps
        </div>

        <div
          style={{
            fontSize: 76,
            lineHeight: 1.05,
            fontWeight: 900,
            maxWidth: 900,
          }}
        >
          Technical implementation, workflow systems, and SaaS delivery.
        </div>

        <div
          style={{
            marginTop: 36,
            fontSize: 30,
            lineHeight: 1.4,
            color: "#cbd5e1",
            maxWidth: 900,
          }}
        >
          Portfolio and case studies by Ashlee Herken.
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}