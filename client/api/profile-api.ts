export async function GetAllProfile(): Promise<Profile[]> {
    const res = await fetch('http://localhost:5000/profile')
    return res.json()
  }
  