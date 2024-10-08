import { ImageResponse } from 'next/og'

export function GET(request: Request) {
  let url = new URL(request.url)
  let title = url.searchParams.get('title') || '</> Andresromero.dev'

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
        <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
          <h1 tw="flex flex-col ml-12 text-6xl font-bold tracking-tight text-left">
            {title}
          </h1>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
