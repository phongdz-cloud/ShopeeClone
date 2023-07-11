import { useSearchParams } from 'react-router-dom'

export default function useQueryParams() {
  const [searchParams] = useSearchParams()
  console.log('searchParams', searchParams)
  return Object.fromEntries([...searchParams])
}
