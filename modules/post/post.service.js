import Post from './post.model'

export const createdPost= async(body, user) => {
  return await Post.create({
    text: body.text,
    createdDate: new Date(),
    createdBy: user.id
  })
}

export const getPosts= async(limit= 10) => {
  return await Post.find()
   .populate('createdBy', 'user')
   .sort({createdDate: -1})
   .limit(limit)
}