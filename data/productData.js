import img1 from '../asset/images/img1.png'
import img2 from '../asset/images/img2.png'
import img3 from '../asset/images/img3.png'

export const productData = {
  title: "Lorem Ipsum",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu felis vel ex aliquam interdum id nec orci. Fusce eu neque non elit efficitur dapibus quis in erat.",
  rating: {
    value: 4.6,
    count: 2000
  },
  images: {
    main: {
      chocolate: img1,
      vanilla: img2,
      orange: img3
    },
    thumbnails: {
      row1: [img1, img2, img3, img1, img2],
      row2: [img3, img1, img2, img3, img1]
    }
  },
  flavors: [
    {
      id: 'chocolate',
      name: 'Chocolate',
      image: img1
    },
    {
      id: 'vanilla',
      name: 'Vanilla',
      image: img2
    },
    {
      id: 'orange',
      name: 'Orange',
      image: img3
    }
  ],
  whatsIncluded: {
    single: {
      thirtyDays: [img1],
      oneTime: [img2, img3, img1],
      benefits: [
        {
          icon: img1,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          icon: img2,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          icon: img3,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          icon: img1,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          icon: img2,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
      ]
    },
    double: {
      thirtyDays: [img1, img2],
      oneTime: [img3, img1],
      benefits: [
        {
          icon: img1,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          icon: img2,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          icon: img3,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          icon: img1,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          icon: img2,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
      ]
    }
  }
}