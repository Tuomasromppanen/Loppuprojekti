import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminCategory from './AdminCategory'
import { useNavigate } from 'react-router-dom';
import '../styles/AdminPage.css'

function AdminPage(props) {

    const [newCategory, setNewCategory] = useState("")
    const [selectedCategory, setSelectedCategory] = useState([])
    const [addingCategory, setAddingCategory] = useState(false)

    function saveCategory(e) {
        e.preventDefault()
        const json = JSON.stringify({name: newCategory})
        axios.post("http://localhost:3000/Publish/add_group.php", json , {
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then((response) => {
            setNewCategory('')
            setAddingCategory(false)
            setSelectedCategory([...selectedCategory, response.data]);
        }).catch(error => {
            alert(error.message)
        })
    }

    useEffect(() => {
        props.navbarHidingState(true)
        props.footerHidingState(true)
        return () => {
            props.navbarHidingState(false)
            props.footerHidingState(false)
        }
    }, [])
    

    let navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault(navigate("/"))
      
      }

    return (
        <div id ="admin-page">
        <div className="container">
            <div className="row">
          <form onSubmit={saveCategory} >
          <h3>Hallinnoi tuoteryhmiä</h3>
            <div>
                <label>
                    <AdminCategory
                        data={selectedCategory}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                </label>
            </div>
          <input type="text" 
            value={newCategory} 
            onChange={e => setNewCategory(e.target.value)}
            placeholder="Enter a new trnimi value"
            />
          <button type="submit" value={addingCategory} onClick={() => setAddingCategory(true)}>Lisää</button>
          <button type="button" onClick={handleLogout}>Takaisin</button>
          </form>
        </div>
        </div>
        </div>
      );
    }  


export default AdminPage