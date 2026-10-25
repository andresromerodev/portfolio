import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

// Satori reads TTF/OTF only (no woff2); geist ships TTFs. Read once per instance.
const fontDir = join(process.cwd(), 'node_modules/geist/dist/fonts')
const fonts = Promise.all([
  readFile(join(fontDir, 'geist-sans/Geist-Regular.ttf')),
  readFile(join(fontDir, 'geist-sans/Geist-SemiBold.ttf')),
  readFile(join(fontDir, 'geist-mono/GeistMono-Regular.ttf')),
])

export async function GET(request: Request) {
  let url = new URL(request.url)
  let postTitle = url.searchParams.get('title')?.trim().slice(0, 100)
  let title = postTitle || 'Andrés Romero'
  let [regular, semibold, mono] = await fonts

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          padding: '80px 88px 72px',
          background: '#ffffff',
          color: '#0a0a0a',
          fontFamily: 'Geist',
        }}
      >
        <div style={{ display: 'flex', fontSize: 36, fontWeight: 600, letterSpacing: '-0.05em', color: '#a3a3a3' }}>
          {'</>'}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: title.length > 48 ? 60 : 72,
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: '-0.04em',
            textWrap: 'balance',
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            paddingTop: 32,
            borderTop: '2px solid #e5e5e5',
            fontSize: 26,
            letterSpacing: '-0.01em',
          }}
        >
          <div style={{ display: 'flex', fontWeight: postTitle ? 600 : 400, color: postTitle ? '#0a0a0a' : '#737373' }}>
            {postTitle ? 'Andrés Romero' : 'Software Engineer · Costa Rica'}
          </div>
          <div style={{ display: 'flex', fontFamily: 'Geist Mono', fontSize: 22, letterSpacing: 0, color: '#737373' }}>
            andresromero.dev
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Geist', data: regular, weight: 400, style: 'normal' },
        { name: 'Geist', data: semibold, weight: 600, style: 'normal' },
        { name: 'Geist Mono', data: mono, weight: 400, style: 'normal' },
      ],
    }
  )
}
