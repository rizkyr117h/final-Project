const { MongoClient } = require("mongodb");

const url = "mongodb://0.0.0.0:27017";
const dbName = "videoApp";

const videosData = [
  {
    videoID: "video001",
    thumbnailURL: "https://example.com/thumbnail001.jpg",
  },
  {
    videoID: "video002",
    thumbnailURL: "https://example.com/thumbnail002.jpg",
  },
  {
    videoID: "video003",
    thumbnailURL: "https://example.com/thumbnail003.jpg",
  },
  {
    videoID: "video004",
    thumbnailURL: "https://example.com/thumbnail004.jpg",
  },
  {
    videoID: "video005",
    thumbnailURL: "https://example.com/thumbnail005.jpg",
  },
  {
    videoID: "video006",
    thumbnailURL: "https://example.com/thumbnail006.jpg",
  },
  {
    videoID: "video007",
    thumbnailURL: "https://example.com/thumbnail007.jpg",
  },
  {
    videoID: "video008",
    thumbnailURL: "https://example.com/thumbnail008.jpg",
  },
  {
    videoID: "video009",
    thumbnailURL: "https://example.com/thumbnail009.jpg",
  },
  {
    videoID: "video010",
    thumbnailURL: "https://example.com/thumbnail010.jpg",
  },
];

const productsData = [
  {
    videoID: "video001",
    productId: "product001",
    link: "https://example.com/product001",
    title: "Product 1",
    price: 19.99,
  },
  {
    videoID: "video002",
    productId: "product002",
    link: "https://example.com/product002",
    title: "Product 2",
    price: 29.99,
  },
  {
    videoID: "video003",
    productId: "product003",
    link: "https://example.com/product003",
    title: "Product 3",
    price: 9.99,
  },
  {
    videoID: "video004",
    productId: "product004",
    link: "https://example.com/product004",
    title: "Product 4",
    price: 39.99,
  },
  {
    videoID: "video005",
    productId: "product005",
    link: "https://example.com/product005",
    title: "Product 5",
    price: 14.99,
  },
  {
    videoID: "video006",
    productId: "product006",
    link: "https://example.com/product006",
    title: "Product 6",
    price: 49.99,
  },
  {
    videoID: "video007",
    productId: "product007",
    link: "https://example.com/product007",
    title: "Product 7",
    price: 24.99,
  },
  {
    videoID: "video008",
    productId: "product008",
    link: "https://example.com/product008",
    title: "Product 8",
    price: 11.99,
  },
  {
    videoID: "video009",
    productId: "product009",
    link: "https://example.com/product009",
    title: "Product 9",
    price: 34.99,
  },
  {
    videoID: "video010",
    productId: "product010",
    link: "https://example.com/product010",
    title: "Product 10",
    price: 44.99,
  },
];

const commentsData = [
  {
    videoID: "video001",
    username: "user1",
    comment: "Great video!",
    timestamp: new Date(),
  },
  {
    videoID: "video001",
    username: "user2",
    comment: "Awesome content!",
    timestamp: new Date(),
  },
  {
    videoID: "video002",
    username: "user3",
    comment: "Really informative!",
    timestamp: new Date(),
  },
  {
    videoID: "video002",
    username: "user4",
    comment: "Loved it!",
    timestamp: new Date(),
  },
  {
    videoID: "video003",
    username: "user5",
    comment: "Nice video!",
    timestamp: new Date(),
  },
  {
    videoID: "video003",
    username: "user6",
    comment: "Keep it up!",
    timestamp: new Date(),
  },
  {
    videoID: "video004",
    username: "user7",
    comment: "This is fantastic!",
    timestamp: new Date(),
  },
  {
    videoID: "video004",
    username: "user8",
    comment: "Impressive!",
    timestamp: new Date(),
  },
  {
    videoID: "video005",
    username: "user9",
    comment: "Well done!",
    timestamp: new Date(),
  },
  {
    videoID: "video005",
    username: "user10",
    comment: "Thank you!",
    timestamp: new Date(),
  },
];


async function createDummyData() {
  const client = new MongoClient(url);

  try {
    // Connect to the MongoDB server
    await client.connect();

    // Get the reference to the database
    const db = client.db(dbName);

    // Drop the database if it already exists
    await db.dropDatabase();

    // Create the "videos" collection and insert dummy data
    const videosCollection = db.collection("videos");
    await videosCollection.insertMany(videosData);

    // Create the "products" collection and insert dummy data
    const productsCollection = db.collection("products");
    await productsCollection.insertMany(productsData);

    // Create the "comments" collection and insert dummy data
    const commentsCollection = db.collection("comments");
    await commentsCollection.insertMany(commentsData);

    console.log("Dummy data inserted successfully.");

  } catch (err) {
    console.error("Error:", err);
  } finally {
    // Close the client
    client.close();
  }
}

// Call the function to create the dummy data
createDummyData();
