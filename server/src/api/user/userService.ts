import { getFirestore } from 'firebase-admin/firestore';
import { v4 as uuidv4 } from 'uuid'; 
import { userDataType } from './userModel';


const db = getFirestore();

export const userServices = { 
    addUserData: async ({emojis,intervalTime}:userDataType ) => {
        try{    
            const id:string = uuidv4();
            const data = {
                emojis,
                intervalTime
            };
            const docRef = await db.collection('userData').doc(id).set(data);
            console.log('Document written with ID: ', docRef);
            return id;
        }
        catch(e){
            console.log(`Error in creating user data: ${e} ${JSON.stringify(e)}`);
            throw new Error("Error in creating user data");
        }
    }
};