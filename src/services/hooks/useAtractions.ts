import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query'
import { api } from '../api'

type Atraction = {
  id: number
  name: string
  style: string
  photo: string
  formation: string
  nota: number
  uf: string
  city: string
  favorite?: boolean
  id_table: number
  slug: string
}

type GetUsersResponse = {
  atractions: any
  totalCount: any
}

export async function getAtractions(
  page: number,
  filterUrl?: string,
  limit?: number,
): Promise<GetUsersResponse> {
  const { data, headers } = await api.get(
    !filterUrl ? 'lista-artistas' : `lista-artistas/${filterUrl}`,

    {
      params: {
        page,
        limit,
      },
    },
  )

  const atractions: Atraction = data.atractions.map((user) => {
    return {
      id: user.ID_ARTISTA,
      name: user.NOME_ARTISTA,
      style: user.ESTILO_MUSICAL,
      photo: user.FOTO,
      nota: user.AVALIACAO,
      city: user.CIDADE,
      formation: user.FORMACAO,
      uf: user.UF,
      favorite: user?.FAVORITE || false,
      id_table: user.ID_TABLE || null,
      slug: user.SLUG,
    }
  })

  return {
    atractions,
    totalCount: data.totalCount ? data?.totalCount[0]?.TotalCount : null,
  }
}

export function useAtractions(
  page: number,
  options?: UseQueryOptions,
  filterUrl?: string,
) {
  return useInfiniteQuery<any>({
    queryKey: ['atractions', `${page}${filterUrl}`],
    queryFn: ({ pageParam = 1 }) => getAtractions(pageParam, filterUrl),
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1

      return lastPage.atractions.length !== 0 ? nextPage : undefined
    },
    staleTime: 1000 * 60 * 10, // 10 minutes
    ...options,
  }) as UseInfiniteQueryResult<GetUsersResponse, unknown>
}
