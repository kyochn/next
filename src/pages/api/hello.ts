// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import express from 'express'
const app: express.Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// レスポンスの型を追加
type Response = {
  statusCode: number
  json({ name: string }): void
}

// 型を指定＆使用していない引数にアンダースコア接頭詞を追加
export default (_req: void, res: express.Response): void => {
  res.status(200).json({ name: 'John Doe' })
}
