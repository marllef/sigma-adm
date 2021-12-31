import { NextApiRequest } from "next";

export function parse<T>(req: NextApiRequest) {
  let mBody: T;
  if (typeof req.body !== "object") {
    mBody = JSON.parse(req.body);
  } else {
    mBody = req.body;
  }
  return mBody;
}
