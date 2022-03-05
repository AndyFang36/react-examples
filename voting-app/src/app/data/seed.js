import avatarDaniel from "../../assets/images/avatars/daniel.png";
import avatarKristy from "../../assets/images/avatars/kristy.png";
import avatarVeronika from "../../assets/images/avatars/veronika.png";
import avatarMolly from "../../assets/images/avatars/molly.png";
import productAqua from "../../assets/images/products/image-aqua.png";
import productRose from "../../assets/images/products/image-rose.png";
import productSteel from "../../assets/images/products/image-steel.png";
import productYellow from "../../assets/images/products/image-yellow.png";

const generateVoteCount = () => {
    return Math.floor((Math.random() * 50) + 15);
}

export const Seed = {
    products: [
        {
            id: 1,
            title: 'Yellow Pail',
            description: 'On-demand sand castle construction expertise.',
            url: '#',
            votes: generateVoteCount(),
            submitterAvatarUrl: avatarDaniel,
            productImageUrl: productAqua,
        },
        {
            id: 2,
            title: 'Supermajority: The Fantasy Congress League',
            description: 'Earn points when your favorite politicians pass legislation.',
            url: '#',
            votes: generateVoteCount(),
            submitterAvatarUrl: avatarKristy,
            productImageUrl: productRose,
        },
        {
            id: 3,
            title: 'Tinfoild: Tailored tinfoil hats',
            description: 'We already have your measurements and shipping address.',
            url: '#',
            votes: generateVoteCount(),
            submitterAvatarUrl: avatarVeronika,
            productImageUrl: productSteel,
        },
        {
            id: 4,
            title: 'Haught or Naught',
            description: 'High-minded or absent-minded? You decide.',
            url: '#',
            votes: generateVoteCount(),
            submitterAvatarUrl: avatarMolly,
            productImageUrl: productYellow,
        },
    ]
}

/*export const Seed = () => {
  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const products = [
    {
      id: 1,
      title: 'Yellow Pail',
      description: 'On-demand sand castle construction expertise.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/daniel.jpg',
      productImageUrl: 'images/products/image-aqua.png',
    },
    {
      id: 2,
      title: 'Supermajority: The Fantasy Congress League',
      description: 'Earn points when your favorite politicians pass legislation.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/kristy.png',
      productImageUrl: 'images/products/image-rose.png',
    },
    {
      id: 3,
      title: 'Tinfoild: Tailored tinfoil hats',
      description: 'We already have your measurements and shipping address.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/veronika.jpg',
      productImageUrl: 'images/products/image-steel.png',
    },
    {
      id: 4,
      title: 'Haught or Naught',
      description: 'High-minded or absent-minded? You decide.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/molly.png',
      productImageUrl: 'images/products/image-yellow.png',
    },
  ];

  return { products: products };
}*/