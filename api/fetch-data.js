export default async function handler(req, res) {
  const masterKey = process.env.MASTER_KEY;
  return res.status(200).json(myPrivateJsonData);
}
