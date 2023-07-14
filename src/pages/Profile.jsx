import React from "react"
import Details from "../components/Details"
import Header from "../components/Header"
import MyBlogs from "./myBlogs"
import './profile.css'
import DisplayUser from "../components/DisplayUser"

export default function Profile() {

      /* const [blog, setBlog] = React.useState(
        JSON.parse(localStorage.getItem("blog")) || 
        { 
            id: "",
            content: "",
            author: "",
            coverImg: "",
            time: "",
            tags: []
        }
        ) */
    /* React.useEffect(() => {
        localStorage.setItem("blog", JSON.stringify(blog))
    }, [blog]) */
    
    /*
    function newBlog() {
        return ({
            id: "",
            content: "",
            author: "",
            coverImg: "",
            time: "",
            tags: []
        })
    }*/
   /*  function changeContent(event) {
        const { value, name } = event.target
        setBlog(prevBlog => {
            return {...prevBlog,
                   [name]: value
                   }
        })
    } */
    /*function findBlog() {
        return blog.find(note => {
            return note
        }) 
    }*/
   /*  function post() {
        const resultDiv = document.getElementById("blog-post")
  
        const postedBlog = blog.content
        resultDiv.textContent = postedBlog
      } */
    // STATES
    const [profile, setProfile] = React.useState(
        JSON.parse(localStorage.getItem("profile")) ||
        {profileName: "", description: ""}
    )  
    const [editing, setEditing] = React.useState(false);

    
    
    
    // FUNCTIONS TO HANDLE EVENTS
    function handleChange(event) {              
        return (
            setProfile(prevProfile => {
                return {
                    ...prevProfile,
                    [event.target.name]: event.target.value
                }
            })
        )
    }           
            
    
    // CLICK FUNCTION
    function editProfile(e) {
        setEditing(prevEditing => !prevEditing)

        e.preventDefault();

        // Sending the form data to the server 
        axios.post('/api/submit', formData)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } */
        
        

        return (
            <div className="profile--page">
                <Header />
                <DisplayUser />
                {/* <Details 
                nameInput = {
                    editing ? (
                        <h2 className="profile-name">{profile.profileName}</h2>
                    ) : (
                        <input 
                            className="profile--name"
                            name="profileName" 
                            type="text" 
                            placeholder="Your Name" 
                            value={profile.profileName} 
                            onChange={handleChange}
                        ></input>
                    )
                }
                descriptionInput = {
                    editing ? (
                        <p className="profile--paragraph">{profile.description}</p>
                    ) : (
                        <input
                            className="profile--description" 
                            name="description"
                            type="text" 
                            placeholder="Write your bio" 
                            value={profile.description} 
                            onChange={handleChange}
                        ></input>
                    )
                }
                handleClick={editProfile}
                />
                <MyBlogs  />
                
            </div>
    )
    }
