import { CurrentPasswordIsInvalidError } from '../core';
import { BaseService } from './base.service';

const resourceName = '/me/password';

export class PasswordService extends BaseService {
  /**
   * Update the current password of the authenticated user.
   *
   * @param currentPassword
   * @param newPassword
   *
   * @throws {@link CurrentPasswordIsInvalidError}
   * This exception is thrown when the current password is invalid.
   */
  async updateOwnPassword(currentPassword: string, newPassword: string) {
    const query = `${resourceName}`;

    const postData = {
      password: currentPassword,
      new_password: newPassword,
    };

    try {
      this.post(query, postData);
    } catch (error) {
      if (error.message === 'Invalid current password') {
        throw new CurrentPasswordIsInvalidError();
      }
      throw error;
    }
  }
}
