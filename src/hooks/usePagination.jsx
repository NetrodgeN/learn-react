import  { useMemo } from 'react'

const usePagination = (totalPages) => {
    const pagination = useMemo(()=>{
        console.log('usePagination')
        let result =[];
        for (let i = 0; i < totalPages; i++) {
            result.push(i + 1);
          }
          return result;
    },[totalPages])
  return pagination
}

export default usePagination