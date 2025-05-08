import clientPromise from "@/lib/mongodb"
export async function POST(request) {

    const body = await request.json()
    //Connection with MongoDB
    const client = await clientPromise
    const db = client.db("linkly")
    const collection = db.collection("url")

    //Checking whether the shorturl exists or not
    const checkurl = await collection.findOne({ shorturl: body.shorturl })
    if (checkurl) {
        return Response.json({ success:false, error:true, message: 'Short URL already exists' })
    }

    const result = await collection.insertOne({
        url: body.url,
        shorturl: body.shorturl
        
    })

    return Response.json({ success:true, error:false, message: 'URL is generated' })
  }