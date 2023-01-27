import {withIronSessionApiRoute} from 'iron-session/next'

import createHandler from '../../../lib/middlewares/nextConnect'
import validate from '../../../lib/middlewares/validate'
import { ironConfig } from '../../../lib/middlewares/ironSession'
import { createdPostSchema, deletePostSchema, editPostSchema } from '../../../modules/post/post.schema'
import { createdPost, getPosts, deletePost, editPost } from '../../../modules/post/post.service'

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
  .delete(validate(deletePostSchema), async (req, res) => {
    try {
      if(!req.session.user) return res.status(401).send()
      const deletedPost= await deletePost(req.body.id, req.session.user)
      if(deletedPost)
        return res.status(200).send({ ok: true })

      return res.status(400).send('post not found')
    }catch(err) {
      return res.status(500).send(err.message)
    }
  })
  .patch(validate(editPostSchema), async (req,res) => {
    try{
      if(!req.session.user) return res.status(401).send()

      const refreshPost= await editPost(req.body, req.session.user)
      if(refreshPost)
        return res.status(200).send({ok: true})

      return res.status(400).send('post not found')
    }catch (err){
      return res.status(500).send(err.message)
    }
  })

export default withIronSessionApiRoute(handler, ironConfig)
