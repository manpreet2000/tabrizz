import { getFirestore } from 'firebase-admin/firestore';
import { v4 as uuidv4 } from 'uuid';
import { userDataType } from './userModel';

const db = getFirestore();

export const userServices = {
  addUserData: async ({ emojis, intervalTime, userId, email }: userDataType) => {
    try {
      const uuid: string = uuidv4();
      const data = {
        emojis,
        intervalTime,
        email,
        id:uuid,
      };
      console.log(`Adding user data: ${JSON.stringify(data)}`);
      console.log(`user id: ${userId}`);  

      const docRef = await db
        .collection('userData')
        .doc(userId)
        .set({ emojis: data.emojis, intervalTime: data.intervalTime, email: data.email, id: data.id });
      console.log('Document written with ID: ', docRef);
      return userId;
    } catch (e) {
      console.log(`Error in creating user data: ${e} ${JSON.stringify(e)}`);
      throw new Error('Error in creating user data');
    }
  },

  getUserData: async (id: string) => {
    try {
      console.log(`Getting user data for id: ${id}`);
      const doc = await db.collection('userData').doc(id).get();
      if (!doc.exists) {
        console.log('No such document!');
        return {dataFound:false}
      } else {
        console.log('Document data:', doc.data());
        return doc.data();
      }
    } catch (e) {
      console.log(`Error in getting user data: ${e} ${JSON.stringify(e)}`);
      throw new Error('Error in getting user data');
    }
  },
};
