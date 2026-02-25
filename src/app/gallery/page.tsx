import { Metadata } from 'next'
import GalleryGrid from './GalleryGrid'

export const metadata: Metadata = {
  title: 'Photo Gallery | Castaways Ice Cream',
  description: 'Photos of Castaways Ice Cream in Mōʻiliʻili, Honolulu. Handcrafted scoops, fresh waffle cones, and our cozy neighborhood shop.',
}

export type GalleryPhoto = {
  src: string
  alt: string
  category: 'food' | 'interior' | 'storefront'
}

export const PHOTOS: GalleryPhoto[] = [
  // Food
  { src: '/images/yelp/photo-01-food-cookies-cream.jpg',       alt: 'Cookies and cream scoops',           category: 'food' },
  { src: '/images/yelp/photo-02-food-choc-cherry.jpg',          alt: 'Chocolate cherry ice cream',         category: 'food' },
  { src: '/images/yelp/photo-06-food-banana-choc.jpg',          alt: 'Banana and chocolate scoops',        category: 'food' },
  { src: '/images/yelp/photo-08-food-scoops.jpg',               alt: 'Freshly scooped ice cream',          category: 'food' },
  { src: '/images/yelp/photo-09-food-scoops-2.jpg',             alt: 'Ice cream scoops close-up',          category: 'food' },
  { src: '/images/yelp/photo-10-food-pandan.jpg',               alt: 'Pandan coconut ice cream',           category: 'food' },
  { src: '/images/yelp/photo-11-food-matcha.jpg',               alt: 'Matcha green tea ice cream',         category: 'food' },
  { src: '/images/yelp/photo-13-milkshake.jpg',                 alt: 'Coffee chocolate milkshake',         category: 'food' },
  { src: '/images/yelp/photo-14-food-trio.jpg',                 alt: 'Trio of ice cream scoops',           category: 'food' },
  { src: '/images/yelp/photo-16-food-pandan-trio.jpg',          alt: 'Pandan coconut trio',                category: 'food' },
  { src: '/images/yelp/photo-17-food-matcha-scoop.jpg',         alt: 'Matcha scoop',                       category: 'food' },
  { src: '/images/yelp/photo-18-food-banana-choc-2.jpg',        alt: 'Banana chocolate combination',       category: 'food' },
  { src: '/images/yelp/photo-19-food-coffee-small.jpg',         alt: 'Castaway coffee ice cream',          category: 'food' },
  { src: '/images/yelp/photo-20-milkshake-coffee-choc.jpg',     alt: 'Coffee and dark chocolate milkshake',category: 'food' },
  { src: '/images/yelp/photo-21-food-cookies-cream-sizes.jpg',  alt: 'Cookies and cream in all sizes',     category: 'food' },
  { src: '/images/yelp/photo-22-food-choc-chip-cherry.jpg',     alt: 'Chocolate chip cherry scoop',        category: 'food' },
  { src: '/images/yelp/photo-23-food-pb-strawberry-cookie.jpg', alt: 'Peanut butter strawberry cookie',    category: 'food' },
  { src: '/images/yelp/photo-24-food-scoops-3.jpg',             alt: 'Colorful scoops',                    category: 'food' },
  { src: '/images/yelp/photo-25-food-scoops-4.jpg',             alt: 'Ice cream scoops overhead',          category: 'food' },
  { src: '/images/yelp/photo-36-food-pandan-coconut-2.jpg',     alt: 'Pandan coconut scoop',               category: 'food' },
  { src: '/images/yelp/photo-37-menu-nov2025.jpg',              alt: 'November 2025 flavor menu board',    category: 'food' },
  { src: '/images/yelp/photo-38-food-5.jpg',                    alt: 'Ice cream assortment',               category: 'food' },
  // Interior
  { src: '/images/yelp/photo-03-interior.jpg',                  alt: 'Castaways interior with piano',      category: 'interior' },
  { src: '/images/yelp/photo-05-interior-2.jpg',                alt: 'Cozy seating area',                  category: 'interior' },
  { src: '/images/yelp/photo-07-interior-3.jpg',                alt: 'Interior seating angle',             category: 'interior' },
  { src: '/images/yelp/photo-12-interior-spacious.jpg',         alt: 'Spacious dining area',               category: 'interior' },
  { src: '/images/yelp/photo-26-interior-4.jpg',                alt: 'Interior with blue walls',           category: 'interior' },
  { src: '/images/yelp/photo-27-interior-5.jpg',                alt: 'Shop interior',                      category: 'interior' },
  { src: '/images/yelp/photo-28-interior-spacious-2.jpg',       alt: 'Full interior view',                 category: 'interior' },
  { src: '/images/yelp/photo-29-interior-inside.jpg',           alt: 'Inside the shop',                    category: 'interior' },
  { src: '/images/yelp/photo-30-interior-6.jpg',                alt: 'Castaways seating and decor',        category: 'interior' },
  // Storefront
  { src: '/images/yelp/photo-04-storefront.jpg',                alt: 'Castaways storefront',               category: 'storefront' },
  { src: '/images/yelp/photo-15-storefront-corner.jpg',         alt: 'Corner storefront view',             category: 'storefront' },
  { src: '/images/yelp/photo-31-storefront-open.jpg',           alt: 'Shop open for business',             category: 'storefront' },
  { src: '/images/yelp/photo-32-storefront-2.jpg',              alt: 'Storefront exterior',                category: 'storefront' },
  { src: '/images/yelp/photo-33-storefront-3.jpg',              alt: 'Castaways exterior sign',            category: 'storefront' },
  { src: '/images/yelp/photo-34-storefront-outside.jpg',        alt: 'Outside the shop',                   category: 'storefront' },
  { src: '/images/yelp/photo-35-storefront-corner.jpg',         alt: 'Corner of Isenberg and South King',  category: 'storefront' },
  { src: '/images/yelp/photo-39-storefront-outside-2.jpg',      alt: 'Storefront on South King St',        category: 'storefront' },
  { src: '/images/yelp/photo-40-storefront-outside-3.jpg',      alt: 'Castaways Ice Cream exterior',       category: 'storefront' },
]

export default function GalleryPage() {
  return (
    <main className="pt-28 md:pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#5BAED6] mb-3">
            Photos
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-black text-[#2C3E50] tracking-tight">
            The gallery<span className="text-[#C8956A]">.</span>
          </h1>
          <p className="mt-4 text-lg text-slate-500 max-w-xl">
            {PHOTOS.length} photos from our shop at 2346 South King St.
            Scoops, cones, our blue walls, and the neighborhood we love.
          </p>
        </div>

        <GalleryGrid photos={PHOTOS} />
      </div>
    </main>
  )
}
