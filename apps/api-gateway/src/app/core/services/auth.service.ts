import { Injectable, NotFoundException } from '@nestjs/common';
import { DataService } from '.';

const ACCOUNTS_COLLECTION = 'accounts';

@Injectable()
export class AuthService {
  constructor(private readonly data: DataService) {}

  async getUserByFirebaseUserId(firebaseUid: string): Promise<any> {
    const account = this.getAccountByFirebaseUserId(firebaseUid);

    // const employee = await this.krewApiService.getMe();

    return {
      // ...employee,
      account,
    };
  }

  private async getAccountByFirebaseUserId(uid: string): Promise<any> {
    const docRef = this.data.collection(ACCOUNTS_COLLECTION);

    const querySnapshot = await docRef.where('firebaseUserId', '==', uid).get();

    if (querySnapshot.docs.length === 1) {
      return this.firestoreToUser(querySnapshot.docs[0]);
    }

    throw new NotFoundException();
  }

  private firestoreToUser(doc: FirebaseFirestore.QueryDocumentSnapshot) {
    return {
      _id: doc.id,
      ...doc.data(),
    };
  }
}
