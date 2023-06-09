const data = {
  products: [
    {
      sku: "001",
      name: "shirt",
      slug: "shirt-blue",
      sexOrAge: "For Boys",
      category: "clothes",
      image: "/boys-8-580x870(1).jpg",
      price: 80,
      rating: 5,
      countInStock: 10,
      description: "A beautiful blue shirt",
      morePictures: [
        {
          image: "/boys-8-1-580x870.jpg",
          alt: "Boy with blue shirt",
        },
        {
          image: "/boys-8-580x870(1).jpg",
          alt: "A beautiful blue shirt",
        },
      ],
    },
    {
      sku: "002",
      name: "teddy",
      slug: "pink-teddy",
      sexOrAge: "For Girls",
      category: "toys",
      image: "/toys-4-580x870.jpg",
      price: 5,
      rating: 4.5,
      countInStock: 10,
      description: "soft and fluffy teddy",
      morePictures: [
        {
          image: "/toys-4-2-580x870.jpg",
          alt: "A pink teddy",
        },
        {
          image: "/toys-4-580x870.jpg",
          alt: "A pink teddy original",
        },
      ],
    },
    {
      sku: "003",
      name: "shirt",
      slug: "shirt-pink",
      sexOrAge: "For Boys",
      category: "clothes",
      image: "/boys-11-580x870.jpg",
      price: 60,
      rating: 4,
      countInStock: 8,
      description: "A popular shirt color pink",
      morePictures: [
        {
          image: "/boys-11-1-580x870.jpg",
          alt: "Boy with pink shirt",
        },
        {
          image: "/boys-11-580x870.jpg",
          alt: "A popular shirt color pink",
        },
      ],
    },
    {
      sku: "003",
      name: "short",
      slug: "short-white",
      sexOrAge: "For Boys",
      category: "clothes",
      image: "/boys-6-580x870.jpg",
      price: 25,
      rating: 4,
      countInStock: 25,
      description: "Popular beach short",
      morePictures: [
        {
          image: "/boys-6-1-580x870.jpg",
          alt: "Boy with white short",
        },
        {
          image: "/boys-6-580x870.jpg",
          alt: "Popular beach short",
        },
      ],
    },
    {
      sku: "004",
      name: "short",
      slug: "green-short",
      sexOrAge: "For Boys",
      category: "clothes",
      image: "/boys-10-580x870.jpg",
      price: 30,
      rating: 4.0,
      countInStock: 18,
      description: "Popular short",
      morePictures: [
        {
          image: "/boys-10-1-580x870.jpg",
          alt: "green-short",
        },
        {
          image: "/boys-10-580x870.jpg",
          alt: "green-short-other",
        },
      ],
    },
    {
      sku: "005",
      name: "pullover",
      slug: "pullover-with-dinosaurs",
      sexOrAge: "For Boys",
      category: "clothes",
      image: "/boys-4-580x870.jpg",
      price: 20,
      rating: 3.5,
      countInStock: 15,
      description: "A popular pullover",
      morePictures: [
        {
          image: "/boys-4-1-580x870.jpg",
          alt: "Boy with pullover with dinosaurus",
        },
        {
          image: "/boys-4-580x870.jpg",
          alt: "A popular pullover",
        },
      ],
    },
    {
      sku: "006",
      name: "teddy",
      slug: "monkey-teddy",
      sexOrAge: "For Boys",
      category: "toys",
      image: "/for-home-6-580x870.jpg",
      price: 3,
      rating: 4.2,
      countInStock: 10,
      description: "Adorable and soft teddy",
    },
    {
      sku: "007",
      name: "pullover",
      slug: "pullover-ocher",
      sexOrAge: "For Boys",
      category: "clothes",
      image: "/boys-8-580x870.jpg",
      price: 25,
      rating: 3.5,
      countInStock: 0,
      description: "A beautiful pullover",
    },
    {
      sku: "008",
      name: "shirt",
      slug: "shirt-white",
      sexOrAge: "For Boys",
      category: "clothes",
      image: "/boys-1-580x870.jpg",
      price: 70,
      rating: 3.5,
      countInStock: 20,
      description: "A popular shirt",
      morePictures: [
        {
          image: "/boys-1-1-580x870.jpg",
          alt: "Boy with white shirt ",
        },
        {
          image: "/boys-1-580x870.jpg",
          alt: "A popular shirt",
        },
      ],
    },
    {
      sku: "009",
      name: "cup",
      slug: "pink-cup",
      sexOrAge: "For Girls",
      category: "home",
      image: "/for-home-12-1-580x870.jpg",
      price: 2,
      rating: 3.4,
      countInStock: 10,
      description: "Cup with ears",
      morePictures: [
        {
          image: "/for-home-12-580x870.jpg",
          alt: "Pink cup with ears",
        },
        {
          image: "/for-home-12-1-580x870.jpg",
          alt: "Cup with ears",
        },
      ],
    },
    {
      sku: "010",
      name: "coat",
      slug: "thick-coat",
      sexOrAge: "For Boys",
      category: "clothes",
      image: "/boys-5-580x870.jpg",
      price: 80,
      rating: 4.5,
      countInStock: 22,
      description: "A thick coat for boys",
      morePictures: [
        {
          image: "/boys-5-1-580x870.jpg",
          alt: "boy-with-coat",
        },
        {
          image: "/boys-5-580x870.jpg",
          alt: "A thick coat for boys",
        },
      ],
    },
    {
      sku: "011",
      name: "teddy",
      slug: "white-teddy",
      sexOrAge: "For Girls",
      category: "toys",
      image: "/toys-5-580x870.jpg",
      price: 5,
      rating: 3.5,
      countInStock: 0,
      description: "Soft and fluffy teddy",
    },
    {
      sku: "012",
      name: "overalls",
      slug: "overalls-for-kids",
      sexOrAge: "For Babies",
      category: "clothes",
      image: "/for-babies-1-580x870.jpg",
      price: 12,
      rating: 4.0,
      countInStock: 12,
      description: "Confortable and cotton overalls",
      morePictures: [
        {
          image: "/for-babies-1-1-580x870.jpg",
          alt: "overall",
        },
        {
          image: "/for-babies-1-580x870.jpg",
          alt: "overall-other",
        },
      ],
    },
    {
      sku: "013",
      name: "coat",
      slug: "gray-coat",
      sexOrAge: "For Babies",
      category: "clothes",
      image: "/for-babies-5-580x870.jpg",
      price: 18,
      rating: 4,
      countInStock: 5,
      description: "A beautiful coat color gray",
      morePictures: [
        {
          image: "/for-babies-5-1-580x870.jpg",
          alt: "Details of coat color gray",
        },
        {
          image: "/for-babies-5-580x870.jpg",
          alt: "Coat color gray for babies",
        },
      ],
    },
    {
      sku: "014",
      name: "coat",
      slug: "blue-coat",
      sexOrAge: "For Girls",
      category: "clothes",
      image: "/girls-3-1-580x870.jpg",
      price: 25,
      rating: 5,
      countInStock: 0,
      description: "Coat color blue",
      morePictures: [
        {
          image: "/girls-3-2-580x870.jpg",
          alt: "Details of coat color gray",
        },
        {
          image: "/girls-3-1-580x870.jpg",
          alt: "Coat color blue for girls",
        },
      ],
    },
  ],
};

export default data;
