import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function Music(request, response){
   
 
    const musics = await prisma.music.findMany({
      select: {
        song: true,
        bannerUrl: true, 
        title: true
      }
    })
  
    return response.json(musics)
  
}