const TAGS = [
  ["유직", "무직"],
  ["활동", "휴식"],
  ["바쁨", "여유"],
  ["심심", "유흥", "지침", "귀가"],
  ["흥미", "화남", "행복", "속상", "신남" ,"허탈", "냉소", "지루", "사랑"],
  ["부자", "거지"]
]

export default async function getFinalImage(req, res) {
  let { query } = req;

  if (!validateQuery(query)) {
    res.status(400).json({ error: "Bad Request" });
    return;
  }

  try {
    res.status(200).json({ imageNames: generateUniqueRandomNumbers(10) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }

}

function validateQuery(query) {
  if (query.tags === undefined) {
    return false;
  }

  if (query.tags.length !== 6) {
    return false;
  }

  let tags = query.tags.split("");
  let isValid = true;

  tags.forEach((item, idx) => {
    let tag = parseInt(item);
    if (isNaN(tag)) {
      isValid = false;
    }
    if (tag >= TAGS[idx].length) {
      isValid = false;
    }
  });

  return isValid;
}

function generateUniqueRandomNumbers(count) {
  if (count <= 0 || count > 65) {
    return [];
  }

  const uniqueNumbers = new Set();
  while (uniqueNumbers.size < count) {
    const randomNumber = Math.floor(Math.random() * 65) + 1;
    uniqueNumbers.add(randomNumber);
  }

  return Array.from(uniqueNumbers);
}