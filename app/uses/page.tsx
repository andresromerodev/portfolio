export default function UsesPage() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">What I use everyday</h1>
      <div className="mb-8">
        <h2 className="my-4 text-2xl font-semibold tracking-tighter">Hardware</h2>
        <ul className="list-disc ml-8">
          <li className="hover:text-gray-600 mb-2">
            <a href="https://www.dell.com/en-us/shop/dell-laptops/scr/laptops/appref=xps-product-line" target="_blank" rel="noopener noreferrer">
              Dell XPS 15 (i7, 64GB DDR5 RAM, 3TB SSD, RTX 3050)
            </a>
          </li>
          <li className="hover:text-gray-600 mb-2">
            <a href="https://www.amazon.com/gp/product/B07ZB2TNZZ/ref=ppx_yo_dt_b_search_asin_image?ie=UTF8&th=1" target="_blank" rel="noopener noreferrer">
              AOC 34" UltraWide Monitor (3440x1440)
            </a>
          </li>
          <li className="hover:text-gray-600 mb-2">
            <a href="https://www.apple.com/airpods-max/"
              target="_blank" rel="noopener noreferrer">
              Apple Airpods Max
            </a>
          </li>
          <li className="hover:text-gray-600 mb-2">
            <a href="https://www.amazon.com/dp/B0C74GYW3J" target="_blank" rel="noopener noreferrer">
              FIFINE XLR/USB Gaming Microphon
            </a>
          </li>
          <li className="hover:text-gray-600 mb-2">
            <a href="https://www.amazon.com/dp/B01N5UOYC4" target="_blank" rel="noopener noreferrer">
              Logitech Brio 4K Webcam
            </a>
          </li>
          <li className="hover:text-gray-600 mb-2">
            <a href="https://www.keychron.com/products/keychron-c3-pro-qmk-via-wired-mechanical-keyboard" target="_blank" rel="noopener noreferrer">
              Keychron C3 Pro Mechanical Keyboard
            </a>
          </li>
          <li className="hover:text-gray-600 mb-2">
            <a href="https://www.amazon.com/gp/product/B09HMKFDXC" target="_blank" rel="noopener noreferrer">
              Logitech MX Master 3S Wireless Mouse
            </a>
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="my-4 text-2xl font-semibold tracking-tighter">Software</h2>
        <ul className="list-disc ml-8">
          <li className="mb-2">
            I use <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 font-medium">VS Code (Copilot + Claude Sonnet 4)</a> for coding in TypeScript, Python, Go, and Terraform.
          </li>
          <li className="mb-2">
            The <a href="https://github.com/microsoft/terminal" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 font-medium">Windows Terminal</a> is my preferred terminal for its integration with WSL.
          </li>
          <li className="mb-2">
            When it comes to managing my TODOs and project notes, I rely on <a href="https://www.notion.so" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 font-medium">Notion</a>.
          </li>
          <li className="mb-2">
            I use <a href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 font-medium">Chrome</a> as my main browser.
          </li>
          <li className="mb-2">
            And for API testing, I use <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 font-medium">Postman</a> for REST, GraphQL, and gRPC.
          </li>
        </ul>
      </div>
      <hr />
    </section>
  );
}
