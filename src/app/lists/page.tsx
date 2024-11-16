import React from 'react'
import ListsTab from './ListsTab'
import { fetchCurrectUserLikeIds, fetchLikedMembers } from '../actions/likeActions'

export const dynamic = 'force-dynamic';

export default async function ListsPage({searchParams}: {searchParams: {type: string}}) {
  const likeIds = await fetchCurrectUserLikeIds();
  const members = await fetchLikedMembers(searchParams.type);

  return (
    <div>
      <ListsTab members={members} likeIds={likeIds} />
    </div>
  )
}
