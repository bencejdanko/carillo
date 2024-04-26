import PocketBase from 'pocketbase'
const API_URL = 'https://preview-api.car-rillo.com'
const pb = new PocketBase(API_URL)


export async function login({ email, password }: { email: string; password: string; }): Promise<[boolean, Error | null]> {
    try {
        await pb.collection('users').authWithPassword(email, password)
        return [true, null]
    } catch (e) {
        return [false, e as Error]
    }
}