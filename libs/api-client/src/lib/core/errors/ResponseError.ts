class ResponseError extends Error
{
  private _statusCode: number;
  private _message: string;


  constructor(message: string, statusCode: number) {
    super(message);
    this._statusCode = statusCode;
    this._message = message;
  }

  get statusCode(): number {
    return this._statusCode;
  }

  get message(): string {
    return this._message;
  }
}
