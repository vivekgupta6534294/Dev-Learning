import "./profile.css"

function Profile(){
    return (
        <>
        <div className="header"></div>
        <div className="main">
            <div className="pimg_container">
                <img src="https://cdn4.iconfinder.com/data/icons/teamwork-v2/64/user_person_people_persona_staff_student_man-512.png" alt="" className="pimg" />
            </div>
            <div className="details">
                <div className="content">Vivek</div>
                <div className="content">No of Posts: <span className="bold_text">Posts</span></div>
                <div className="content">Email <span className="bold_text">vivekgupta6534294@gmail.com</span></div>
            </div>
        </div>
        </>
    )
}

export default Profile