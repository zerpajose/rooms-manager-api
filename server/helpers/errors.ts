import { z } from 'zod';

export interface TranslateError {
  message: string;
  statusCode: number;
}

export class CustomError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export function translateError(error: unknown): TranslateError {

  let errorObject: TranslateError = { message: 'Unknown error', statusCode: 500 };
  if (error instanceof z.ZodError) {
    console.log(error);
    const messageZodError = `${error.issues[0].path[0]}: ${error.issues[0].message}`;
    return { message: messageZodError, statusCode: 400 };
  }

  if (error instanceof CustomError) {
    errorObject = { message: error.message, statusCode: error.statusCode };
  }

  return errorObject;
}
