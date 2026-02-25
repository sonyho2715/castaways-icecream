export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  publishedAt: string
  readTime: string
  tags: string[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'the-story-behind-pandan-coconut',
    title: 'The Story Behind Our Pandan Coconut',
    excerpt: "Hawaii's most talked-about flavor, and here is where it came from.",
    publishedAt: '2025-08-15',
    readTime: '3 min read',
    coverImage: '/images/yelp/photo-10-food-pandan.jpg',
    tags: ['Flavors', 'Story'],
    content: `# The Story Behind Pandan Coconut

Pandan is the vanilla of Southeast Asia, fragrant, grassy, and unmistakably tropical. When Robert Duong was growing up, the smell of pandan meant something special was being made in the kitchen.

## Why Pandan?

When Robert decided to bring homemade ice cream to Mo\u02BBili\u02BBili, pandan was one of the first flavors he knew had to be on the menu. Honolulu has one of the largest Filipino and Vietnamese communities in the United States, and both cuisines have deep roots in pandan.

"It's comfort food," Robert says. "But nobody was doing it as ice cream. That had to change."

## How It's Made

The process starts with fresh pandan leaves, not extract, not flavoring. Real leaves are blended and strained to extract the vibrant green juice, which gets folded into a coconut cream base.

The result is a pale green scoop that tastes like a tropical afternoon: cooling, slightly sweet, with that distinctive floral note that pandan lovers instantly recognize.

## Why It Sells Out Fast

Pandan Coconut regularly sells out before closing time. If it's your first visit, make it your first scoop.

*Follow @castawaysicecream to know when it's in today.*`,
  },
  {
    slug: 'why-we-bake-our-waffle-cones',
    title: 'Why We Bake Our Waffle Cones In-House',
    excerpt: "The smell that greets you at the door? That's intentional.",
    publishedAt: '2025-09-01',
    readTime: '2 min read',
    coverImage: '/images/waffle-cone.jpg',
    tags: ['Process', 'Behind the Scenes'],
    content: `# Why We Bake Our Waffle Cones In-House

Walk past 2346 South King Street and you'll smell it before you see the sign: warm, buttery, toasted batter. That's a freshly made waffle cone coming off our iron.

## It Would Be Easier to Buy Them

Pre-made cones arrive in boxes, stay crispy in a wrapper, and cost a fraction of making your own. We know. We tried them.

They taste like cardboard compared to what comes out of our kitchen.

## The In-House Difference

A fresh waffle cone has structural integrity. It holds the scoop, it doesn't get soggy in five minutes, and the flavor of toasted batter complements the cream instead of competing with it.

More importantly, it smells incredible. That smell is part of the Castaways experience.

## Made to Order

Cones are baked throughout the day in small batches. When you order a cone, what you're getting was probably made within the last hour.

That's the standard we're holding ourselves to. Not because it's easy, because it's right.`,
  },
  {
    slug: 'robert-duong-from-doctor-to-ice-cream-maker',
    title: 'From Doctor to Ice Cream Maker',
    excerpt: "Robert Duong's unexpected second act, and why it makes perfect sense.",
    publishedAt: '2025-07-20',
    readTime: '4 min read',
    coverImage: '/images/store-interior.jpg',
    tags: ['Story', 'Owner'],
    content: `# From Doctor to Ice Cream Maker

Robert Duong spent years in medicine. He knows what it takes to show up every day, do precise work, and genuinely care about the person in front of you. Turns out those skills translate to ice cream.

## "We've Been Wanting to Do This Forever"

That's what Robert said when Castaways opened in Mo\u02BBili\u02BBili. Not a pivot. Not an escape. A dream that finally had the right conditions to become real.

The neighborhood mattered. Mo\u02BBili\u02BBili sits at the edge of UH Manoa's campus, a culturally rich area with deep roots in Honolulu's Japanese, Filipino, and Vietnamese communities. It's the kind of place where a small, handmade ice cream shop could become a neighborhood institution.

## The Name

Castaways. It's got a double meaning. There's the island-castaway vibe, stranded somewhere beautiful, making do with what's around you. But there's also the sense of casting away the ordinary. Mass-produced. Artificial. The kind of ice cream that comes from a factory and tastes like it.

## The Philosophy

No artificial dyes. No mystery ingredients. Small batches, made fresh. When you taste something at Castaways, you can usually trace it back to a real ingredient.

The Pandan Coconut uses real pandan leaves. The Matcha is Japanese ceremonial grade. The Madagascar Vanilla Bean has actual vanilla specks in every scoop.

## What's Next

Robert's focused on the shop in Mo\u02BBili\u02BBili. Getting the flavors right. Building a community around the counter, the regulars who come in on Friday nights, the UH students on their study breaks, the families who make it a Sunday ritual.

"Homemade" isn't just a marketing word at Castaways. It's a commitment.`,
  },
]
