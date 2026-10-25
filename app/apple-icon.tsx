import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

// Same Geist Black "</>" outline as app/icon.svg. iOS rounds the corners
// itself, so the tile is full-bleed and opaque.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ display: 'flex', width: '100%', height: '100%', background: '#0a0a0a' }}>
        <svg width="180" height="180" viewBox="0 0 32 32">
          <path
            fill="#fafafa"
            d="M11.95 13.76L6.64 15.95L11.95 18.16L11.95 20.69L4 17.38L4 14.53L11.95 11.24ZM16.95 8.09L19.93 8.09L14.83 22.91L11.86 22.91ZM28 14.53L28 17.38L20.05 20.69L20.05 18.16L25.36 15.95L20.05 13.76L20.05 11.24Z"
          />
        </svg>
      </div>
    ),
    size
  )
}
