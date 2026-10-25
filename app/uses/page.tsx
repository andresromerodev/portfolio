export const metadata = {
  title: 'Uses',
  description: 'The hardware and software Andrés Romero uses every day.',
}

export default function UsesPage() {
  return (
    <section className="stagger">
      <h1 className="mb-8 text-3xl font-semibold tracking-tighter sm:text-4xl">What I Use Every Day</h1>
      <div className="mb-12">
        <h2 className="mb-4 text-xl/[1.3] font-medium tracking-tight">Hardware</h2>
        <ul className="list-disc pl-6 space-y-1.5 leading-7 text-neutral-800 dark:text-neutral-200 marker:text-neutral-400 dark:marker:text-neutral-600">
          <li className="pl-1">
            <a className="link" href="https://www.dell.com/en-us/shop/dell-laptops/scr/laptops/appref=xps-product-line" target="_blank" rel="noopener noreferrer">
              Dell XPS 15 (i7, 64GB DDR5 RAM, 3TB SSD, RTX 3050)
            </a>
          </li>
          <li className="pl-1">
            <a className="link" href="https://www.amazon.com/gp/product/B07ZB2TNZZ/ref=ppx_yo_dt_b_search_asin_image?ie=UTF8&th=1" target="_blank" rel="noopener noreferrer">
              AOC 34″ UltraWide Monitor (3440×1440)
            </a>
          </li>
          <li className="pl-1">
            <a className="link" href="https://www.apple.com/airpods-max/"
              target="_blank" rel="noopener noreferrer">
              Apple AirPods Max
            </a>
          </li>
          <li className="pl-1">
            <a className="link" href="https://www.amazon.com/dp/B0C74GYW3J" target="_blank" rel="noopener noreferrer">
              FIFINE XLR/USB Gaming Microphone
            </a>
          </li>
          <li className="pl-1">
            <a className="link" href="https://www.amazon.com/dp/B01N5UOYC4" target="_blank" rel="noopener noreferrer">
              Logitech Brio 4K Webcam
            </a>
          </li>
          <li className="pl-1">
            <a className="link" href="https://www.keychron.com/products/keychron-c3-pro-qmk-via-wired-mechanical-keyboard" target="_blank" rel="noopener noreferrer">
              Keychron C3 Pro Mechanical Keyboard
            </a>
          </li>
          <li className="pl-1">
            <a className="link" href="https://www.amazon.com/gp/product/B09HMKFDXC" target="_blank" rel="noopener noreferrer">
              Logitech MX Master 3S Wireless Mouse
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-4 text-xl/[1.3] font-medium tracking-tight">Software</h2>
        <ul className="list-disc pl-6 space-y-1.5 leading-7 text-neutral-800 dark:text-neutral-200 marker:text-neutral-400 dark:marker:text-neutral-600">
          <li className="pl-1">
            I use <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="link">VS Code (Copilot + Claude Sonnet 4)</a> for coding in TypeScript, Python, Go, and Terraform.
          </li>
          <li className="pl-1">
            The <a href="https://github.com/microsoft/terminal" target="_blank" rel="noopener noreferrer" className="link">Windows Terminal</a> is my preferred terminal for its integration with WSL.
          </li>
          <li className="pl-1">
            When it comes to managing my TODOs and project notes, I rely on <a href="https://www.notion.so" target="_blank" rel="noopener noreferrer" className="link">Notion</a>.
          </li>
          <li className="pl-1">
            I use <a href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer" className="link">Chrome</a> as my main browser.
          </li>
          <li className="pl-1">
            And for API testing, I use <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer" className="link">Postman</a> for REST, GraphQL, and gRPC.
          </li>
        </ul>
      </div>
    </section>
  );
}
