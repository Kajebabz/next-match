import React from 'react'
import { getMembers } from '../actions/memberActions'
import MemberCard from './MemberCard';
import { fetchCurrectUserLikeIds } from '../actions/likeActions';
import PaginationComponent from '@/components/PaginationComponent';
import { UserFilters } from '@/types';

export default async function MembersPage({searchParams}: {searchParams: UserFilters}) {
  const members = await getMembers(searchParams);
  const likeIds = await fetchCurrectUserLikeIds();

  return (
    <>
      <div className='mt-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8'>
        {members && members.map(member => (
          <MemberCard member={member} key={member.id} likeIds={likeIds} />
        ))}
      </div>
      <PaginationComponent />
    </>
  )
}
