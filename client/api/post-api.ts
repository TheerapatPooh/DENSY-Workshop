export async function GetAllPost(): Promise<Post[]> {
    const res = await fetch('http://localhost:5000/post')
    return res.json()
  }
  