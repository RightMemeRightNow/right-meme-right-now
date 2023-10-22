import {getMongoClient} from "../../../lib/MongodbClient";

const TAGS = [
  ["유직", "무직"],
  ["활동", "휴식"],
  ["바쁨", "여유"],
  ["심심", "유흥", "지침", "귀가"],
  ["흥미", "화남", "행복", "사랑", "신남" ,"허탈", "냉소", "지루", "속상"],
  ["거지", "부자"]
]

export default async function getFinalImage(req, res) {
  let { query } = req;

  try {
    let client = await getMongoClient();
    let db = client.db(process.env.MONGODB_DB);
    let collection = db.collection(process.env.MONGODB_COLLECTION);
    let data = await collection.find({ tag: {$in: getTags(query)} }).toArray();

    let fileNames = data.map((item) => {
      return item.filename
    });

    res.status(200).json({ imageNames: fileNames });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }

}

function getTags(query) {
  let idx = query.tags.split("").map((item) => {
    return parseInt(item);
  });

  return TAGS.map((item, index) => {
    return item[idx[index]];
  });
}
