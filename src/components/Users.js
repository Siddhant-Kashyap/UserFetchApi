import React, { useEffect, useState } from 'react'

const Users = () => {

    const [user, setUser] = useState([]);

    const getUser = async () => {
        const response = await fetch('https://api.github.com/users')
        console.log(response)
        setUser(await response.json());

    }

    useEffect(() => {
        getUser();
    }, [])




    return (
        <>
        {
            user.map((curElem)=>{
                return(
                    <div className='container d-flex align-items-center justify-content-center'>
                    <div className="card" style={{ width: '18rem' }}>
                    <img src={curElem.avatar_url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{curElem.login}</h5>
                        <p className="card-text">{curElem.html_url}</p>
    
                    </div>
                </div>
                </div>

                )
            })
        }


        </>

    )
}

export default Users