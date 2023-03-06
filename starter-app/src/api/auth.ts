interface ILoginRequest {
  (params: { email: string; password: string }): Promise<{ token?: string }>;
}

// FIXME!!
// @ts-ignore
export const loginRequest: ILoginRequest = () => {};
