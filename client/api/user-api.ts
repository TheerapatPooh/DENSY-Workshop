export async function GetAllUser(): Promise<User[]> {
    const res = await fetch('http://localhost:5000/user')
    return res.json()
  }
  