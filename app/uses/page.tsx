export default function UsesPage() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">What I use everyday</h1>
      <div className="mb-8">
        <h2 className="my-4 text-2xl font-semibold tracking-tighter">Hardware</h2>
        <ul className="list-disc ml-8">
          <li className="hover:text-gray-600 mb-2">
            <a href="https://www.dell.com/en-us/shop/dell-laptops/xps-15-laptop/spd/xps-15-9520-laptop/ctox15w11p1c4002" target="_blank" rel="noopener noreferrer">
              Dell XPS 15 (i7, 64GB DDR5 RAM, 3TB SSD, RTX 3050)
            </a>
          </li>
          <li className="hover:text-gray-600 mb-2">
            <a href="https://www.amazon.com/gp/product/B07ZB2TNZZ/ref=ppx_yo_dt_b_search_asin_image?ie=UTF8&th=1" target="_blank" rel="noopener noreferrer">
              AOC 34" UltraWide Monitor (3440x1440)
            </a>
          </li>
          <li className="hover:text-gray-600 mb-2">
            <a href="https://www.amazon.com/Apple-Generation-Lightning-Resistant-Headphones/dp/B0BDHB9Y8H/ref=sr_1_1_sspa?keywords=airpods&s=electronics&sr=1-1-spons&ufe=app_do%3Aamzn1.fos.f5122f16-c3e8-4386-bf32-63e904010ad0&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyTjhDREJNTlNRUUlVJmVuY3J5cHRlZElkPUEwNjUyNjUwWFhKWlNLMkZJTlpJJmVuY3J5cHRlZEFkSWQ9QTAxMDQwMTMyRTZMNkRBOEc2Q0pWJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="
              target="_blank" rel="noopener noreferrer">
              3rd Generation Apple Airpods
            </a>
          </li>
          <li className="hover:text-gray-600 mb-2">
            <a href="https://www.amazon.com/gp/product/B09J53TB27/ref=ppx_yo_dt_b_search_asin_image?ie=UTF8&psc=1" target="_blank" rel="noopener noreferrer">
              Anker PowerCast M300 Microphone
            </a>
          </li>
          <li className="hover:text-gray-600 mb-2">
            <a href="https://www.amazon.com/gp/product/B08BNJPVXG/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1" target="_blank" rel="noopener noreferrer">
              Logitech C505 HD Webcam (720p)
            </a>
          </li>
          <li className="hover:text-gray-600 mb-2">
            <a href="https://www.keychron.com/products/keychron-c3-pro-qmk-via-wired-mechanical-keyboard" target="_blank" rel="noopener noreferrer">
              Keychron C3 Pro Mechanical Keyboard
            </a>
          </li>
          <li className="hover:text-gray-600 mb-2">
            <a href="https://www.amazon.com/gp/product/B09HMKFDXC/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1" target="_blank" rel="noopener noreferrer">
              Logitech MX Master 3S Wireless Mouse
            </a>
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="my-4 text-2xl font-semibold tracking-tighter">Software</h2>
        <ul className="list-disc ml-8">
          <li className="mb-2">
            I use <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 font-medium">VS Code</a> for coding in JavaScript, Python, Go, and Terraform.
          </li>
          <li className="mb-2">
            The <a href="https://github.com/microsoft/terminal" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 font-medium">Windows Terminal</a> is my preferred terminal for its integration with WSL.
          </li>
          <li className="mb-2">
            When it comes to managing my TODOs and project notes, I rely on <a href="https://www.notion.so" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 font-medium">Notion</a>.
          </li>
          <li className="mb-2">
            I use <a href="https://brave.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 font-medium">Brave</a> as my main browser for its ad-blocking capabilities.
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
