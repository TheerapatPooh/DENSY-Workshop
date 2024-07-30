
interface User {
    id: number
    email: string
    name: string
    age: number
}
  
interface Profile {
    id: number
    bio: string
    userId: number
}
  
interface Post {
    id: number
    createdAt: string
    updateAt: string
    title: string
    content: string
    authorId: number
}
  