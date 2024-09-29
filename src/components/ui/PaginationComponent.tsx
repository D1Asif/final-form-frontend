import { Pagination, PaginationItem, PaginationList, PaginationNavigator } from 'keep-react'
import { CaretLeft, CaretRight, DotsThree } from 'phosphor-react'

export default function PaginationComponent() {
  return (
    <Pagination className='w-full'>
      <PaginationNavigator>
        <CaretLeft size={18} />
        Previous
      </PaginationNavigator>
      <PaginationList>
        <PaginationItem>1</PaginationItem>
        <PaginationItem active>2</PaginationItem>
        <PaginationItem>3</PaginationItem>
        <PaginationItem>
          <DotsThree size={20} />
        </PaginationItem>
        <PaginationItem>10</PaginationItem>
      </PaginationList>
      <PaginationNavigator>
        Next
        <CaretRight size={18} />
      </PaginationNavigator>
    </Pagination>
  )
}
