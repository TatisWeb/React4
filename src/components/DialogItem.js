
const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    
return <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
</div>

};


const Message = (props) => {
return <div className={s.untext}>{props.message} </div>

}
