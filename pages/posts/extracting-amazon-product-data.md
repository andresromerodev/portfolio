---
title: Extracting Amazon Product Data with Python
date: 2023/5/14
description: Learn how to effectively extract Amazon product data.
tag: Python
author: You
---

import Image from 'next/image'

# Extracting Amazon Product Data with Python

Not too long ago, I had the chance to work on a project where I extracted product data from Amazon.com. It was an interesting experience for me as it was my first time working with data scraping. Today, I would like to share some valuable insights and techniques I learned while navigating through this large e-commerce platform.

<Image
  src="/images/amazonproductpage.jpg"
  alt="Photo"
  width={800}
  height={500}
  priority
  className="next-image"
/>

## ****The Tech Stack****

- **Python**: A versatile programming language for data handling.
- **Selenium**: A useful automation tool for interacting with dynamic web pages.
- **BeautifulSoup**: An effective solution for working with and manipulating HTML tags.

# Things to Keep in Mind

## Amazon employs a Robust Policy for Identifying and Blocking Bots

Amazon's detection of bots primarily relies on the IP address of your computer or the service provider you're using, be it from the comfort of your home or via a cloud service. This is why raw HTTP requests for retrieving product data might not be the most straightforward option. 

You'll need to manage the rotation of User-Agent headers (a header that describes the source of the request, such as browser, OS, etc.) or even consider using a third-party proxy service to disguise your requests. This is because Amazon is highly likely to block your address upon detecting repeated incoming requests for the same products.

<Image
  src="/images/amazonbots.jpg"
  alt="Photo"
  width={800}
  height={350}
  priority
  className="next-image"
/>

This is where Selenium comes into play. By employing the Chrome web driver, each data extraction is conducted through a new browser session, which Amazon interprets as a regular activity.

## Numerous Product Pages on Amazon Feature Diverse and Varied Sections

Ensuring the accuracy of your scraped data will require multiple checks. You might come across a single section, such as the categories, that presents itself in two distinct formats. However, these challenges can be effectively addressed by using a few conditional statements.

<Image
  src="/images/amazoncategories.jpg"
  alt="Photo"
  width={500}
  height={200}
  priority
  className="next-image"
/>

## Your Scraping Bot may Need an Artificial Delay

Certain vital information, such as whether an item is in stock, can only be determined once the page has completely loaded and all the underlying JavaScript code has been executed. Consequently, you may need to allow up to a full second for the page to load properly.

## The Need for a Cloud Platform or Additional Computational Resources may Arise

Keeping your computer operational for extended periods might not be feasible. In such cases, setting up a scheduled task could be useful, alleviating concerns about when and how your bot operates.

# Scrapping Product Data

The implementation of the bot is entirely up to your preference - it could take the form of a desktop application, a cloud service, or even a simple script. In this post, I'm primarily focused on sharing the code for data scraping. The rest of the implementation is your playground!

## Configuring the Project

Incorporating Selenium and BeautifulSoup into your project is a straightforward process. You can add them using pip and download the Chrome web driver (or the driver for your preferred browser), storing it in the base folder of your project.

```bash
pip install selenium beautifulsoup4
```

Chrome Driver: **[https://chromedriver.chromium.org/downloads](https://chromedriver.chromium.org/downloads)**

After installation, you can instantiate a new driver. Consider this the start point of your data extraction bot.

```python
PATH = './drivers/chromedriver.exe' # This should be the folder containing the driver
driver = webdriver.Chrome(executable_path=PATH)
```

## Configuring the Session

In this particular instance, I was only interested in product information specific to the New York City area, but you can tailor this to suit any region (or multiple regions). You'll need to start from Amazon's homepage, and this can be achieved using the following code.

```python
NYC_CODE = '10001'
LOCATION_INPUT_ID = 'GLUXZipUpdateInput'
LOCATION_COMPONENT_ID = 'nav-global-location-popover-link'
AMAZON_US_URL = 'amazon.com/?ref=icp_country_us&language=en_US'

def set_delivery_to_nyc():
    driver.get(AMAZON_US_URL)

    location_popover = driver.find_element_by_id(LOCATION_COMPONENT_ID)
    location_popover.click()

    WebDriverWait(driver, 100).until(condition.element_to_be_clickable((By.ID, LOCATION_INPUT_ID)))

    location_field = driver.find_element_by_id(LOCATION_INPUT_ID)
    location_field.click()
    location_field.send_keys(NYC_CODE)
    location_field.send_keys(Keys.RETURN)
```

## Extracting Fields of Interest

As previously noted, the sections from which you extract product information may differ. The ones referenced in this post are confirmed to work as of 2023.

You can find any specific product on Amazon by utilizing the URL format: **http://www.amazon.com/dp/product/PRODUCT_CODE**

### Loading a Product Page

It's crucial to utilize both Selenium and BeautifulSoup for data scraping. Selenium is responsible for fully loading the page - this includes not just the static HTML, but also any dynamic data generated by JavaScript. Once the page has fully loaded, we can take the final HTML and feed it into BeautifulSoup for scraping.

```python
url = 'http://www.amazon.com/dp/product/' + 'ABC123'

driver.get(url)

# To ensure the page has fully loaded
time.sleep(1)

html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')
```

Below are some useful code snippets that you can employ to extract the primary product information from Amazon:

### Product Title

```python
try:
    name = soup.find(id='productTitle').get_text().strip()
except:
    sys.exit() # When there is no name product is no longer available
```

### Out of Stock

```python
try:
    soup.select('#availability .a-color-success')
    stock = 'Available'
except:
    stock = 'Unavailable'
```

### Q&A Count

```python
qa_html = soup.select('#askATFLink')
try:
    qa_count = qa_html[0].find_all('span')[0].get_text()
    qa_count = int(''.join(filter(str.isdigit, qa_count)))
except:
    qa_count = 0
```

### Star Count

```python
stars_html = soup.select('i[class*="a-icon a-icon-star a-star-"] span')
try:
    stars_count_str = stars_html[0].get_text().split(' ')[0].replace(",", ".")
    stars_count = float(stars_count_str)
except:
    stars_count = 0
```

### Review Count

```python
count = soup.select('#acrCustomerReviewText')A
try:
    review_count = int(count[0].get_text().split(' ')[0].replace(".", "").replace(',', ""))
except:
    review_count = 0
```

### Best Sellers Rank

```python
# Use a regex to locate ranks and categories
CATEGORIES_REGEX = '#\\d+ in |#\\d+\\,*\\d+ in'

rank = []
rank_html = soup.find_all('div', { 'id': 'detailBulletsWrapper_feature_div' })

if rank_html and 'Best Sellers Rank' in str(rank_html):
    rank = re.findall(CATEGORIES_REGEX, str(rank_html))
else: # If the rank is within a table view
    rank_html = soup.find_all('table', { 'id': 'productDetails_detailBullets_sections1' })
    if rank_html and 'Best Sellers Rank' in str(rank_html):
        rank = re.findall(CATEGORIES_REGEX, str(categories_html))
```

### Product Categories

```python
try:
    categories_html = soup.find_all('div', {'id': 'detailBulletsWrapper_feature_div'})
    if categories_html and 'Best Sellers Rank' in str(categories_html):
        categories = re.findall(CATEGORIES_REGEX, str(categories_html))
    else: # If the categories are within a table view
        categories_html = soup.find_all('table', {'id': 'productDetails_detailBullets_sections1'})

        if categories_html and 'Best Sellers Rank' in str(categories_html):
            categories = re.findall(CATEGORIES_REGEX, str(categories_html))
        else:
            categories = []
	except:
	  categories = []
	  print('Exception occurred while scrapping categories')
```

### Product Coupons

```python
try:
    coupon_html = soup.find_all('div', {'id': 'vpcButton'})
    if coupon_html and 'coupon' in str(coupon_html):
        coupon = re.findall('\d%|\$\d.\d+', str(coupon_html))
	except:
	  coupon = ''
	  print('Exception occurred while scrapping coupon')
```

### Shipping Location

```python
try:
    ships_from_html = soup.find_all('span', {'id': 'tabular-buybox-truncate-0'})
    if ships_from_html:
        ships_from = re.findall(r'<span class="tabular-buybox-text">(.*?)</span>', str(ships_from_html))
    else:
        ships_from = ''
except:
    ships_from = ''
    print('Exception occurred while scrapping ships_from')
```

### Sold By

```python
try:
    sold_by_html = soup.find_all('a', {'id': 'sellerProfileTriggerId'})
    if sold_by_html:
        sold_by = re.findall(r'">(.*?)</a>', str(sold_by_html))
    else:
        sold_by = ''
except:
    sold_by = ''
    print('Exception occurred while scrapping sold_by')
```

## Closing Comments

I trust you'll find this code beneficial, be it for a personal experiment or for streamlining your daily tasks if you frequently work with Amazon product data.

Thank you for taking the time to read this. I look forward to seeing you in the next one.