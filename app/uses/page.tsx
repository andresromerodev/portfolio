export const metadata = {
  title: 'Uses',
  description: 'The hardware and software Andrés Romero uses every day.',
}

export default function UsesPage() {
  return (
    <section className="stagger">
      <h1 className="mb-14 max-w-5xl text-[clamp(2.75rem,8vw,7.5rem)]/[0.92] font-semibold tracking-[-0.05em] sm:mb-24">
        What I Use Every Day
      </h1>
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="mb-6 text-3xl/none font-semibold tracking-tighter sm:mb-8 sm:text-5xl/none">Hardware</h2>
          <ul className="enter-list uses-list">
            <li>
              <a className="link" href="https://www.dell.com/en-us/shop/dell-laptops/scr/laptops/appref=xps-product-line" target="_blank" rel="noopener noreferrer">
                Dell XPS 15 (i7, 64GB DDR5 RAM, 3TB SSD, RTX 3050)
              </a>
            </li>
            <li>
              <a className="link" href="https://www.amazon.com/gp/product/B07ZB2TNZZ/ref=ppx_yo_dt_b_search_asin_image?ie=UTF8&th=1" target="_blank" rel="noopener noreferrer">
                AOC 34″ UltraWide Monitor (3440×1440)
              </a>
            </li>
            <li>
              <a className="link" href="https://www.apple.com/airpods-max/"
                target="_blank" rel="noopener noreferrer">
                Apple AirPods Max
              </a>
            </li>
            <li>
              <a className="link" href="https://www.amazon.com/dp/B0C74GYW3J" target="_blank" rel="noopener noreferrer">
                FIFINE XLR/USB Gaming Microphone
              </a>
            </li>
            <li>
              <a className="link" href="https://www.amazon.com/dp/B01N5UOYC4" target="_blank" rel="noopener noreferrer">
                Logitech Brio 4K Webcam
              </a>
            </li>
            <li>
              <a className="link" href="https://www.keychron.com/products/keychron-c3-pro-qmk-via-wired-mechanical-keyboard" target="_blank" rel="noopener noreferrer">
                Keychron C3 Pro Mechanical Keyboard
              </a>
            </li>
            <li>
              <a className="link" href="https://www.amazon.com/gp/product/B09HMKFDXC" target="_blank" rel="noopener noreferrer">
                Logitech MX Master 3S Wireless Mouse
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-3xl/none font-semibold tracking-tighter sm:mb-8 sm:text-5xl/none">Software</h2>
          <ul className="enter-list uses-list">
            <li>
              I use <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="link">VS Code (Copilot + Claude Sonnet 4)</a> for coding in TypeScript, Python, Go, and Terraform.
            </li>
            <li>
              The <a href="https://github.com/microsoft/terminal" target="_blank" rel="noopener noreferrer" className="link">Windows Terminal</a> is my preferred terminal for its integration with WSL.
            </li>
            <li>
              When it comes to managing my TODOs and project notes, I rely on <a href="https://www.notion.so" target="_blank" rel="noopener noreferrer" className="link">Notion</a>.
            </li>
            <li>
              I use <a href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer" className="link">Chrome</a> as my main browser.
            </li>
            <li>
              And for API testing, I use <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer" className="link">Postman</a> for REST, GraphQL, and gRPC.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
