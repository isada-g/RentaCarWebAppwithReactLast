import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CatalogList from "../pages/CatalogList";



function Admin() {
    const [datacatalog, setDatacatalog] = useState([])
    const [datacar, setDatacar] = useState([])
    const [datamodel, setDatamodel] = useState([])
    const [databrand, setDatabrand] = useState([])
    const [datacomment, setDatacomment] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:5028/api/Catalog/list')
            .then(res => setDatacatalog(res.datacatalog))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get('http://localhost:5028/api/Car/list')
            .then(res => setDatacar(res.datacar))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get('http://localhost:5028/api/Model/list')
            .then(res => setDatamodel(res.datamodel))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get('http://localhost:5028/api/Brand/list')
            .then(res => setDatabrand(res.databrand))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get('http://localhost:5028/api/Comment/list')
            .then(res => setDatacomment(res.datacomment))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <CatalogList />
        </div>

    )



}

export default Admin