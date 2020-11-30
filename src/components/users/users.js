import React from "react";
import "./styleUsers.css";

let Users = props => {
  return ( <div>
      {props.users.map(u => (
        <div key={u.id}>
          <span>
            <div>
              <img className="img-users" src={u.photoUrl}/>
            </div>
            <div>
              {  u.followed ? <button onClick={ () =>{ props.unfollow(u.id)}} >follow</button>
              : <button onClick={ () => {props.follow(u.id)}}> unfollow</button>
           }
                </div>
          </span>
          <span>
            <span>
              <div>{u.fullname}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.city}</div>
              <div>{u.location.country}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
