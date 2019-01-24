export const ADD_POST = "ADD_POST"
export const GET_POSTS = "GET_POSTS"

export const addPost = content => ({
  type: ADD_POST,
  payload: {
    content
  }
})

//axiosでサーバーと通信し、保存してあるpostsを受け取る。
export const getPosts = () => {}
