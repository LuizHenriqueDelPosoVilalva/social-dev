import {withIronSessionApiRoute} from 'iron-session/next'

import createHandler from '../../../lib/middlewares/nextConnect'
import validate from '../../../lib/middlewares/validate'
import { ironConfig } from '../../../lib/middlewares/ironSession'
import { createdPostSchema, deletePostSchema } from '../../../modules/post/post.schema'
import { createdPost, getPosts, deletePost } from '../../../modules/post/post.service'

const handler= createHandler()

handler
  .post(validate({ body: createdPostSchema }), async (req,res) => {
    try {
      if(!req.session.user) return res.status(401).send()

      const newPost= await createdPost(req.body, req.session.user)
      res.status(201).send(newPost)

    }catch (err) {
      return res.status(500).send(err.message)
    }
  })
  .get(async (req,res) => {
    try {
      if(!req.session.user) return res.status(401).send()

      const posts= await getPosts()
      res.status(200).send(posts)

    }catch (err) {
      return res.status(500).send(err.message)
    }
  })
  .delete(validate({ body: deletePostSchema }), async (req, res) => {
    try {
      if(!req.session.user) return res.status(401).send()
      const deletedPost= await deletePost(req.body.id, req.session.user)

      if(deletePost)
        return res.status(200).send({ok: true})

        return res.status(400).send('post not found')
    }catch(err) {
      return res.status(500).send(err.message)
    }
  })

export default withIronSessionApiRoute(handler, ironConfig)
