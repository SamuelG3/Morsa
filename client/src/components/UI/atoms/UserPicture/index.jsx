import React from 'react';
import DefaultUserPic from './Default-Profile.png'

class UserProfile extends React.Component {

render(){
if(this.state.profileImage){
        var imagestr=this.state.profileImage;
        imagestr = imagestr.replace("public/", "");
        var profilePic="http://localhost:5000/"+imagestr;
    }else{
         profilePic=DefaultUserPic;
    }
}

return ()
}


