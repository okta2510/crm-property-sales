import { getLocal } from '@/services/storage'
import { useRouter } from 'vue-router'

export async function validateAuth() {
  const router = useRouter();
  const user = await getLocal('userInfo')
  if (!user) {
    router.push('/login')
  }
}
