// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { IProject } from '../../../interfaces/project';

export const projects = [
  {
    id: 1,
    title: 'Summer Pavilion On Azov Coast',
    categoryId: 1,
    image: '/projects/1/1.jpg',
    content: `Summer Pavilion of concrete is a lounge area of the coastal “estates” and is a part of a colorful parterre leading to the sea and the Japanese garden.\n\nSeascape is accentuated with a portal-pass. One can climb on the roof of the construction by the stairs from the side of the console. The frontal wall of the pavilion is designed as a continuous plane of the small windows-holes, associated with light sea ripples and creating additional natural ventilation.\n\nThere is a soft area inside the pavilion, dining area and sector for cooking with a barbecue grill and oven-”tonir”.\n\nBeautiful view to the sea and Japanese rock garden is seen from the lounge area.`,
    images: [
      '/projects/1/2.jpg',
      '/projects/1/3.jpg',
      '/projects/1/4.jpg'
    ],
    createdAt: '2022-07-04T20:52:51.513Z'
  },
  {
    id: 2,
    title: 'Sierpinski-Menger Tower',
    categoryId: 1,
    image: '/projects/2/3.jpg',
    content: `The source of inspiration for this work is so-called “Mathematical Chaos Games”. Fractal Geometry thoroughly studies and explores such phenomenon of chaos in nature. This field of mathematics is closely associated with the names of such prominent scientists as Mandelbrot, Prigogine and Barnsley, who argue that the border of conflicting forces is not a chaos, but a spontaneous emergence of self-organization at a higher level of cognition.\n\nIt has been proven that chaos is the highest form of order, the main principle of which is disorder, agitation and stimulating influence. The theory of chaos is described in detail in the works of Peters. Through a rigorous mathematical and computational methodology, the concept of chaos is essentially the first one to successfully simulate and reproduce complex forms and flows of turbulence.\n\n\The principles of fractal geometry appear in the basis of parametric and digital modeling. Such mathematical monsters as the Sierpinski square (pic. 1), Urysohn’s function (pic. 2), the Cantor Set (pic. 3), and the Menger Sponges (pic. 2) occur in the foundation of architectural and artistic concepts.\n\nThe Sierpinski-Menger Tower, an urban grid and a network of webs, is nothing more than a recursion, a peculiar projection of one within the other in a vertical plane, with a new shape and a rhythm of iterations.\n\nSelf-reproducing Sierpinski squares or infinite self-reproducing Menger cubes are Mathematical Games in Chaos. These are infinitely repetitive iterations of a geometric shape, which create fascinating fractal drawings that caress the eyes and captivate the mind.\n\nThe understanding natural fractality affects the architectural representation of the urban environment. Its analysis from the viewpoint of fractal theory and the subsequent modeling of the infrastructure of urban space has always been used in the practice of urban planning.\n\nIt seems that the peculiar interpretation of the digital code in three-dimensional space (in the chaotic urban environment of a large modern megalopolis) harmoniously blends in with various urban planning structures.`,
    images: [
      '/projects/2/2.jpg',
      '/projects/2/1.jpg',
      '/projects/2/4.jpg'
    ],
    createdAt: '2022-07-04T20:52:51.513Z'
  },
  {
    id: 3,
    title: 'Cottage in Skolkovo',
    categoryId: 2,
    image: '/projects/3/10.jpg',
    content: `The project was completed in accordance with the technical specifications of the customer. Design is austere, minimalistic and economical.\n\nA birch wood is used in the design, which provides the interior warmth and comfort necessary for the living space. Birch is a reliable, environment friendly, “live” material, which also creates an atmosphere of a Russian log house. The project is arranged in two colors.`,
    images: [
      '/projects/3/1.jpg',
      '/projects/3/2.jpg',
      '/projects/3/3.jpg',
      '/projects/3/4.jpg',
      '/projects/3/5.jpg',
      '/projects/3/6.jpg',
      '/projects/3/7.jpg',
      '/projects/3/8.jpg',
      '/projects/3/9.jpg'
    ],
    createdAt: '2022-07-04T20:52:51.513Z'
  }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProject[]>
) {
  res.status(200).json(projects)
}
