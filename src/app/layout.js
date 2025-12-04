import './globals.css';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { CartProvider } from '@/components/CartContext';
import GoogleAdsTag from '@/components/GoogleAdsTag';

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.pgmobilev9.com';
const siteUrl = rawSiteUrl.startsWith('http')
  ? rawSiteUrl
  : `https://${rawSiteUrl}`;

const brandName =
  process.env.NEXT_PUBLIC_BRAND_NAME || 'PG Mobile V9';
const companyLegal =
  process.env.NEXT_PUBLIC_COMPANY_LEGAL ||
  'PG MOBILE LIMITED PARTNERSHIP';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://pgmobilev9.com'),
  title: {
    default: 'PG Mobile V9 | ซื้อมือถือ PG Mobile, PG V9 ราคาคุ้ม ประกันศูนย์ไทย',
    template: '%s | PG Mobile V9'
  },
  description:
    'ซื้อ PG Mobile, PG Mobile V9, PG V9 มือถือราคาคุ้ม ประกันศูนย์ไทยแท้ 100% ส่งฟรีทั่วประเทศ เก็บเงินปลายทาง รองรับโฆษณา Google Ads สินค้าคุณภาพจากร้าน PG Mobile.',
  keywords: [
    'pg mobile',
    'pg mobile v9',
    'pg v9',
    'pg',
    'ซื้อ pg mobile',
    'pg มือถือ',
    'pg v9 ราคาถูก',
    'มือถือ pg mobile v9'
  ],
  alternates: {
    canonical: '/'
  },
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/apple-touch-icon.png'
  },
  openGraph: {
    title: 'PG Mobile V9 | ซื้อมือถือ PG Mobile, PG V9 ราคาคุ้ม ประกันศูนย์ไทย',
    description:
      'มือถือ PG Mobile, PG Mobile V9, PG V9 ราคาคุ้ม ประกันศูนย์แท้ ส่งฟรี เก็บเงินปลายทางทั่วไทย รองรับโฆษณา Google Ads แบบถูกต้อง',
    url: '/',
    siteName: 'PG Mobile V9',
    images: [
      {
        url: '/images/og-main.jpg',
        width: 1200,
        height: 630,
        alt: 'PG Mobile V9 Official Store'
      }
    ],
    locale: 'th_TH',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PG Mobile V9',
    description: 'ร้านมือถือ PG Mobile V9 – ซื้อ PG Mobile, PG V9 ราคาคุ้ม',
    images: ['/images/og-main.jpg']
  },
  robots: {
    index: true,
    follow: true,
    maxImagePreview: 'large'
  }
};


export default function RootLayout({ children }) {
  const ldJsonWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: brandName,
    url: siteUrl,
    description:
      'PG Mobile ร้านขายมือถือออนไลน์ ครบรุ่น PG Mobile, PG Mobile V9, PG V9, PG มือถือราคาคุ้ม ประกันศูนย์ไทย จัดส่งฟรี เก็บเงินปลายทางทั่วประเทศ.',
    inLanguage: 'th-TH',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    },
    keywords: ['pg mobile', 'pg mobile v9', 'pg v9', 'pg']
  };

  const ldJsonOrganization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: companyLegal,
    url: siteUrl,
    legalName: companyLegal,
    brand: {
      '@type': 'Brand',
      name: brandName
    }
  };

  return (
    <html lang="th">
      <head>
        <meta
          name="keywords"
          content="pg mobile, pg mobile v9, pg v9, pg, ร้านขายมือถือ pg mobile, ร้านขายมือถือออนไลน์, มือถือผ่อนถูก"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ldJsonWebsite)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ldJsonOrganization)
          }}
        />

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'PG Mobile V9',
      url: 'https://pgmobilev9.com',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://pgmobilev9.com/?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    })
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'PG Mobile V9',
      legalName: 'PG MOBILE LIMITED PARTNERSHIP',
      url: 'https://pgmobilev9.com',
      logo: 'https://pgmobilev9.com/images/logo.png',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '183 หมู่ 1 ต.คำตากล้า อ.คำตากล้า',
        addressLocality: 'สกลนคร',
        postalCode: '47250',
        addressCountry: 'TH'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+66935649111',
        contactType: 'customer service',
        availableLanguage: ['Thai']
      }
    })
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'หน้าแรก',
          item: 'https://pgmobilev9.com'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'เกี่ยวกับเรา',
          item: 'https://pgmobilev9.com/about'
        }
      ]
    })
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'PG Mobile V9 รุ่นที่ 1',
      image: ['https://pgmobilev9.com/images/pg-v9-1.jpg'],
      description: 'มือถือ PG Mobile V9 ราคาคุ้ม ประกันศูนย์ไทย',
      brand: 'PG Mobile',
      offers: {
        '@type': 'Offer',
        url: 'https://pgmobilev9.com/product/pg-v9-1',
        priceCurrency: 'THB',
        price: '1190',
        availability: 'https://schema.org/InStock'
      }
    })
  }}
/>

      </head>
      <body>
        <CartProvider>
          <GoogleAdsTag />   {/* <- ตรงนี้คือแท็กหลัก Google Ads */}
          <NavBar />
          {children}
          <Footer />
          <CookieConsent />
        </CartProvider>
      </body>
    </html>
  );
}
