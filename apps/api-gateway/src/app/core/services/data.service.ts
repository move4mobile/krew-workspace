import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import * as firebase from 'firebase-admin';

@Injectable()
export class DataService extends firebase.firestore.Firestore implements OnModuleInit {
  constructor() {
    super();
  }

  public async onModuleInit() {
    Logger.debug('[DataService] Firestore client connected');
  }
}
