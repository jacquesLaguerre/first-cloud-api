import {dbConnect} from './dbConnect.js';


export async function createUser( req, res) {
    const db = dbConnect();
    const doc = await db.collection('users').add(req.body)
    .catch(err => res.status(500).send({success:false, message:err}));
    res.status(201).send({sucess: true, message:'User created:' + doc.id});
}

export async function getAllUsers(req, res){
    const db = dbConnect();
    const collection = await db.collection('users').get()
    .catch(err=> res.status(500).send({sucess:false, message:err}));
    const users = collection.docs.map(doc=> {
        let user = doc.data()
        user.uid = doc.id
        return user
    })
    res.send(users)
}

export async function updateUser(req, res){
    //const uid = req.params.uid
    const{ uid }= req.params
    const db = dbConnect();
    const doc = await db.collection('users').doc(uid).update(req.body)
    .catch(err => res.status(500).send({success:false, message:err}));
    res.status(202).send({sucess: true, message:'User updated:' + doc.id});
}