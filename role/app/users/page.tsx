"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function page() {
    const [user, setuser] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(2);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = user.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages: number = Math.ceil(user.length / recordsPerPage);
    const pageNumbers: number[] = Array.from({ length: nPages }, (_, index) => index + 1);

    useEffect(() => {
        // console.log(router,"here navigate....")  
        handleClick()
    }, [])

    async function handleClick() {
        const res = await axios('https://jsonplaceholder.typicode.com/users');
        setuser(res.data)
    }
    console.log(user, "here user data ....")

    const goToNextPage = () => {
        if (currentPage !== nPages)
            setCurrentPage(currentPage + 1)
    }
    const goToPrevPage = () => {
        if (currentPage !== 1)
            setCurrentPage(currentPage - 1)
    }


    return (
        <div>
            <h1>list of users</h1>
            {
                currentRecords.map((item: any) => (
                    <li key={item.id}>{item.name}</li>
                ))
            }
            <button onClick={handleClick}>click here</button>

            <ul className='pagination justify-content-center'>
                <li className="page-item"> {/* Previous page button */}
                    <a className="page-link"
                        onClick={goToPrevPage}  // Click event handler for navigating to previous page
                        href='#'>

                        Previous
                    </a>
                </li>
                {/* Mapping through each page number */}
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber}
                        className={`page-item ${currentPage == pgNumber ? 'active' : ''} `} >

                        <a onClick={() => setCurrentPage(pgNumber)}  // Click event handler for setting the current page
                            className='page-link'
                            href='#'>

                            {pgNumber}
                        </a>
                    </li>
                ))}
                <li className="page-item"> {/* Next page button */}
                    <a className="page-link"
                        onClick={goToNextPage} // Click event handler for navigating to next page
                        href='#'>

                        Next
                    </a>
                </li>
            </ul>

        </div>
    )
}

export default page

// export async function getStaticProps() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json()
//     console.log(data)
//  }