import { simulateRequest } from './api'

const nftPayload = {
  hero: {
    title: 'Discover, collect, and sell extraordinary NFTs',
    description:
      'Enter in this creative world. Discover now the latest NFTs or start creating your own!',
  },
  featured: [
    {
      id: 1,
      title: 'Abstract Colors',
      author: 'Esthera Jackson',
      price: '0.91 ETH',
      image: '/images/nfts/abstract_colors_1775709447310.png',
      likes: 18,
      bidders: ['E', 'J', 'M'],
    },
    {
      id: 2,
      title: 'ETH AI Brain',
      author: 'Nick Wilson',
      price: '2.82 ETH',
      image: '/images/nfts/eth_ai_brain_1775709462421.png',
      likes: 18,
      bidders: ['N', 'K', 'P'],
    },
    {
      id: 3,
      title: 'Mesh Gradients',
      author: 'Will Smith',
      price: '0.56 ETH',
      image: '/images/nfts/mesh_gradients_1775709484715.png',
      likes: 18,
      bidders: ['W', 'S'],
    },
  ],
  recent: [
    {
      id: 4,
      title: 'Swipe Circles',
      author: 'Peter Will',
      price: '2.30 ETH',
      image: '/images/nfts/chromatic_echoes_1775709501011.png',
      likes: 18,
      bidders: ['P', 'W'],
    },
    {
      id: 5,
      title: 'Colorful Heaven',
      author: 'Mark Benjamin',
      price: '1.30 ETH',
      image: '/images/nfts/crystal_mind_1775709515782.png',
      likes: 18,
      bidders: ['M', 'B'],
    },
    {
      id: 6,
      title: '3D Cubes Art',
      author: 'Manny Gates',
      price: '6.58 ETH',
      image: '/images/nfts/neon_drift_1775709533650.png',
      likes: 18,
      bidders: ['M', 'G', 'A'],
    },
  ],
  creators: [
    { id: 1, name: '@maddison_c21', artworks: '9821', rating: 91 },
    { id: 2, name: '@karliwill02', artworks: '7032', rating: 82 },
    { id: 3, name: '@andreea.lz', artworks: '5204', rating: 74 },
    { id: 4, name: '@abraham47y', artworks: '4309', rating: 69 },
    { id: 5, name: '@simmmple.web', artworks: '3871', rating: 62 },
    { id: 6, name: '@venus.sys', artworks: '3152', rating: 54 },
    { id: 7, name: '@apc.vvp8', artworks: '2907', rating: 48 },
    { id: 8, name: '@leon_pwrr', artworks: '2309', rating: 42 },
  ],
  history: [
    {
      id: 1,
      title: 'Colorful Heaven',
      author: 'Mark Benjamin',
      price: '1.30 ETH',
      time: '30s ago',
      image: '/images/nfts/crystal_mind_1775709515782.png',
    },
    {
      id: 2,
      title: 'Abstract Colors',
      author: 'Esthera Jackson',
      price: '0.91 ETH',
      time: '58s ago',
      image: '/images/nfts/abstract_colors_1775709447310.png',
    },
    {
      id: 3,
      title: 'ETH AI Brain',
      author: 'Nick Wilson',
      price: '2.82 ETH',
      time: '1m ago',
      image: '/images/nfts/eth_ai_brain_1775709462421.png',
    },
    {
      id: 4,
      title: 'Swipe Circles',
      author: 'Peter Will',
      price: '2.30 ETH',
      time: '1m ago',
      image: '/images/nfts/chromatic_echoes_1775709501011.png',
    },
    {
      id: 5,
      title: 'Mesh Gradients',
      author: 'Will Smith',
      price: '0.56 ETH',
      time: '2m ago',
      image: '/images/nfts/mesh_gradients_1775709484715.png',
    },
    {
      id: 6,
      title: '3D Cubes Art',
      author: 'Manny Gates',
      price: '6.58 ETH',
      time: '3m ago',
      image: '/images/nfts/neon_drift_1775709533650.png',
    },
  ],
}

export const nftService = {
  getMarketplaceData() {
    return simulateRequest(nftPayload)
  },
}
